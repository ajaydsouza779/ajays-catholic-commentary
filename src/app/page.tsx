import Header from "@/components/Header"
import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-screen" style={{backgroundColor: '#FFFBEB'}}>
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="mb-16">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-serif mb-6" style={{color: '#1E3A8A'}}>
              Welcome to Ajay&apos;s Catholic Commentary
            </h1>
            <p className="text-xl mb-8" style={{color: '#6B7280'}}>
              A platform for sharing Catholic insights, teachings, and reflections. 
              Join our community in exploring the beauty of Catholic faith and tradition.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/posts"
                className="inline-block text-white px-8 py-3 rounded-md font-medium transition-colors hover:bg-yellow-400 hover:text-blue-900"
                style={{backgroundColor: '#1E3A8A'}}
              >
                Read Posts
              </Link>
              <Link
                href="/auth/signup"
                className="inline-block px-8 py-3 rounded-md font-medium transition-colors border-2 hover:bg-blue-900 hover:text-white"
                style={{borderColor: '#1E3A8A', color: '#1E3A8A'}}
              >
                Join Community
              </Link>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="p-6 bg-white rounded-lg shadow-md">
            <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4" style={{backgroundColor: '#F59E0B'}}>
              <span className="font-bold text-xl" style={{color: '#1E3A8A'}}>📖</span>
            </div>
            <h3 className="text-xl font-serif mb-2" style={{color: '#1E3A8A'}}>Rich Commentary</h3>
            <p style={{color: '#6B7280'}}>
              Thoughtful reflections on Catholic teachings, scripture, and spiritual life.
            </p>
          </div>
          
          <div className="p-6 bg-white rounded-lg shadow-md">
            <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4" style={{backgroundColor: '#F59E0B'}}>
              <span className="font-bold text-xl" style={{color: '#1E3A8A'}}>💬</span>
            </div>
            <h3 className="text-xl font-serif mb-2" style={{color: '#1E3A8A'}}>Community Discussion</h3>
            <p style={{color: '#6B7280'}}>
              Engage in meaningful conversations with fellow Catholics and seekers.
            </p>
          </div>
          
          <div className="p-6 bg-white rounded-lg shadow-md">
            <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4" style={{backgroundColor: '#F59E0B'}}>
              <span className="font-bold text-xl" style={{color: '#1E3A8A'}}>🙏</span>
            </div>
            <h3 className="text-xl font-serif mb-2" style={{color: '#1E3A8A'}}>Spiritual Growth</h3>
            <p style={{color: '#6B7280'}}>
              Deepen your faith through shared wisdom and spiritual insights.
            </p>
          </div>
        </div>

        {/* Recent Posts Preview */}
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-3xl font-serif mb-6" style={{color: '#1E3A8A'}}>
            Recent Posts
          </h2>
          <div style={{color: '#6B7280'}}>
            <p className="mb-4">No posts yet, but stay tuned!</p>
            <p className="text-sm">
              Ajay will be sharing his first Catholic commentary soon. 
              Sign up to be notified when new content is published.
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="text-white py-8 mt-16" style={{backgroundColor: '#1E3A8A'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="font-serif text-lg mb-2" style={{color: '#F59E0B'}}>
              Ajay&apos;s Catholic Commentary
          </p>
          <p className="text-sm" style={{color: '#D1D5DB'}}>
            Sharing the beauty of Catholic faith and tradition
          </p>
        </div>
      </footer>
    </div>
  )
}