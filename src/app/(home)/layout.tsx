import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-primary-cream">
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  )
}
