import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import "./globals.css"
import { Providers } from "./providers"
import PerformanceMonitor from "@/components/PerformanceMonitor"

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter"
})

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: "--font-playfair"
})

export const metadata: Metadata = {
  title: "Ajay's Catholic Commentary",
  description: "A platform for sharing Catholic insights, teachings, and reflections",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased bg-neutral-100">
        {process.env.NEXT_PUBLIC_E2E === 'true' && (
          <style suppressHydrationWarning>
            {`[data-nextjs-dev-overlay], nextjs-portal, nextjs-portal * { pointer-events: none !important; display: none !important; visibility: hidden !important; opacity: 0 !important; }`}
          </style>
        )}
        <Providers>
          <PerformanceMonitor />
          {children}
        </Providers>
      </body>
    </html>
  )
}