import Header from '@/components/Header'
import Footer from '@/components/Footer'
import HistoryNavigation from '@/components/HistoryNavigation'

export default function ScienceLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-primary-cream">
      <Header />
      <HistoryNavigation />
      <main className="pb-12">
        {children}
      </main>
      <Footer />
    </div>
  )
}
