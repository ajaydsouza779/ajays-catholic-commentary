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
      <body className="font-sans antialiased bg-primary-cream" style={{ backgroundColor: '#F5F5DC' }}>
        <Providers>
          <PerformanceMonitor />
          {children}
        </Providers>
      </body>
    </html>
  )
}