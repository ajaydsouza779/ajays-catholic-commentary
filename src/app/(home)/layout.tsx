import Header from '@/components/Header'
import Footer from '@/components/Footer'
import HistoryNavigation from '@/components/HistoryNavigation'

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Replaced old top nav with HistoryNavigation */}
      <HistoryNavigation />
      <main className="pb-12">
        {children}
      </main>
      <Footer />
    </div>
  )
}
