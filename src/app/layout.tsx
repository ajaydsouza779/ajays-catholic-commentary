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
  keywords: ["Catholic", "Christianity", "Faith", "Scripture", "Church History", "Papal Timeline", "Bible Study"],
  authors: [{ name: "Ajay D'Souza" }],
  openGraph: {
    title: "Ajay's Catholic Commentary",
    description: "A platform for sharing Catholic insights, teachings, and reflections",
    type: "website",
    url: "https://ajaycatholic.com",
    siteName: "Ajay's Catholic Commentary",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ajay's Catholic Commentary",
    description: "A platform for sharing Catholic insights, teachings, and reflections",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
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