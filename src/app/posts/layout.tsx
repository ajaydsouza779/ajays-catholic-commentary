import Header from '@/components/Header'
import HistoryNavigation from '@/components/HistoryNavigation'
import Footer from '@/components/Footer'

export default function PostsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-neutral-50">
      <Header />
      <HistoryNavigation />

      <main>
        {children}
      </main>

      <Footer />
    </div>
  )
}
