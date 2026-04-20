import { PrismaClient } from '@prisma/client'

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
}

const createPrismaClient = () => {
  const isProduction = process.env.NODE_ENV === 'production'

  // In production (Vercel + Supabase), use pgbouncer connection pooling
  const url = isProduction
    ? process.env.DATABASE_URL + '?pgbouncer=true&connection_limit=1'
    : process.env.DATABASE_URL

  return new PrismaClient({
    datasources: { db: { url } },
    log: isProduction ? ['error'] : ['query', 'error', 'warn'],
  })
}

// Use global singleton in development to avoid exhausting connections
export const prisma = globalForPrisma.prisma ?? createPrismaClient()

if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.prisma = prisma
}
