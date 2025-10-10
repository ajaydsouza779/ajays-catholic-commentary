import Header from '@/components/Header'
import HistoryNavigation from '@/components/HistoryNavigation'
import DatabaseTestButton from '@/components/DatabaseTestButton'
import Link from 'next/link'

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

      {/* Footer - Same as homepage */}
      <footer className="bg-gray-800 text-white py-12 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-serif text-xl font-bold text-amber-400 mb-4">
                Ajay&apos;s Catholic Commentary
              </h3>
              <p className="text-gray-300 text-sm">
                Sharing the beauty of Catholic faith and tradition through thoughtful commentary and historical exploration.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-amber-400 mb-4">Quick Links</h4>
              <div className="space-y-2">
                <Link href="/posts" className="block text-gray-300 hover:text-white text-sm transition-colors">Posts</Link>
                <Link href="/about" className="block text-gray-300 hover:text-white text-sm transition-colors">About</Link>
                <Link href="/auth/signup" className="block text-gray-300 hover:text-white text-sm transition-colors">Join Community</Link>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-amber-400 mb-4">Coming Soon</h4>
              <div className="space-y-2">
                <span className="block text-gray-300 text-sm">Papal Timeline</span>
                <span className="block text-gray-300 text-sm">Church History</span>
                <span className="block text-gray-300 text-sm">Bible History</span>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8">
            <div className="flex justify-between items-center">
              <p className="text-gray-400 text-sm">
                © 2024 Ajay&apos;s Catholic Commentary. All rights reserved.
              </p>
              <div className="flex justify-end">
                <DatabaseTestButton />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
