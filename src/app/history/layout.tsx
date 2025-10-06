import Header from '@/components/Header'
import Footer from '@/components/Footer'
import HistoryNavigation from '@/components/HistoryNavigation'

export default function HistoryLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-primary-cream">
      <Header />
      <main>
        <HistoryNavigation />
        {children}
      </main>
      <Footer />
    </div>
  )
}
