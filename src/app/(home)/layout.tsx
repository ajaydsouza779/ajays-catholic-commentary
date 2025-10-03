import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-neutral-50">
      <Header />
      <main className="pb-12">
        {children}
      </main>
      <Footer />
    </div>
  )
}
