import NextAuth from "next-auth"
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import CredentialsProvider from "next-auth/providers/credentials"
import { prisma } from "@/lib/prisma"
import bcrypt from "bcryptjs"

export const authOptions = {
  adapter: PrismaAdapter(prisma),
  secret: process.env.NEXTAUTH_SECRET || "ajay-catholic-commentary-secret-key-2024-development",
  pages: {
    signIn: "/auth/signin",
    signUp: "/auth/signup",
  },
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null
        }

        const user = await prisma.user.findUnique({
          where: {
            email: credentials.email
          }
        })

        if (!user || !user.passwordHash) {
          return null
        }

        const isPasswordValid = await bcrypt.compare(
          credentials.password,
          user.passwordHash
        )

        if (!isPasswordValid) {
          return null
        }

        return {
          id: user.id,
          email: user.email,
          name: user.name,
          role: user.role,
        }
      }
    })
  ],
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  callbacks: {
    async jwt({ token, user }) {
      // On login, persist id and role on the token
      if (user) {
        token.id = user.id
        token.role = user.role
        return token
      }

      // For existing sessions created before this logic, backfill id from sub
      if (!token.id && token.sub) {
        token.id = token.sub
      }

      // If role is missing, fetch it from the database
      if (!token.role && (token.id || token.sub)) {
        try {
          const dbUser = await prisma.user.findUnique({
            where: { id: (token.id as string) || (token.sub as string) }
          })
          if (dbUser) {
            token.role = dbUser.role
          }
        } catch {
          // noop - leave token as-is if lookup fails
        }
      }

      return token
    },
    async session({ session, token }) {
      if (token) {
        // Ensure session has an id even for older tokens
        const idFromToken = (token.id as string) || (token.sub as string) || ""
        session.user.id = idFromToken
        if (token.role) {
          session.user.role = token.role as string
        }
      }
      return session
    },
  },
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
