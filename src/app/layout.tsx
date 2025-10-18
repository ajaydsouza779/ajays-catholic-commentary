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
  title: {
    default: "Ajay's Catholic Commentary",
    template: "%s | Ajay's Catholic Commentary"
  },
  description: "A platform for sharing Catholic insights, teachings, and reflections. Explore thoughtful commentary on Catholic faith, scripture, and spiritual life.",
  keywords: [
    "Catholic",
    "Christianity", 
    "Faith",
    "Scripture",
    "Church History",
    "Papal Timeline",
    "Bible Study",
    "Catholic Commentary",
    "Spiritual Reflection",
    "Theology",
    "Catholic Teaching",
    "Religious Education"
  ],
  authors: [{ name: "Ajay D'Souza" }],
  creator: "Ajay D'Souza",
  publisher: "Ajay's Catholic Commentary",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://ajaycatholic.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://ajaycatholic.com',
    siteName: "Ajay's Catholic Commentary",
    title: "Ajay's Catholic Commentary",
    description: "A platform for sharing Catholic insights, teachings, and reflections. Explore thoughtful commentary on Catholic faith, scripture, and spiritual life.",
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: "Ajay's Catholic Commentary - Catholic insights and spiritual reflections",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Ajay's Catholic Commentary",
    description: "A platform for sharing Catholic insights, teachings, and reflections. Explore thoughtful commentary on Catholic faith, scripture, and spiritual life.",
    images: ['/og-image.jpg'],
    creator: '@ajaycatholic',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
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