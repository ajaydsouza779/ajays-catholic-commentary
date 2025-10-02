"use client"

import Header from "@/components/Header"
import DatabaseTestButton from "@/components/DatabaseTestButton"
import Link from "next/link"
import { useState, useRef } from "react"
import { useSession } from "next-auth/react"
import { BookOpen, History, Users, FileText, User, Edit3 } from "lucide-react"

export default function Home() {
  const [activeTab, setActiveTab] = useState('posts')
  const { data: session } = useSession()
  const [photoPreview, setPhotoPreview] = useState<string | null>(null)
  const fileInputRef = useRef<HTMLInputElement | null>(null)

  const tabs = [
    { id: 'posts', label: 'Posts', icon: BookOpen },
    { id: 'papal-timeline', label: 'Papal Timeline', icon: History },
    { id: 'church-divisions', label: 'Church History', icon: Users },
    { id: 'bible-origin', label: 'Bible History', icon: FileText },
  ]

  function handlePhotoChange(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0]
    if (!file) return
    const reader = new FileReader()
    reader.onload = () => {
      setPhotoPreview(reader.result as string)
    }
    reader.readAsDataURL(file)
  }

  return (
    <div className="min-h-screen bg-primary-cream">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Author Section */}
        <div className="relative overflow-hidden rounded-2xl mb-8">
          <div className="absolute inset-0 bg-gradient-to-r from-amber-100 via-rose-100 to-sky-100" />
          <div className="relative p-6 sm:p-8 border border-amber-200/60 backdrop-blur-sm">
            <div className="flex flex-col md:flex-row items-start gap-6">
              {/* Left: Photo + name */}
              <div className="flex items-center md:block">
                <div className="relative">
                  <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-amber-100 border-4 border-amber-300/60 overflow-hidden flex items-center justify-center shadow">
                    {photoPreview ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img src={photoPreview} alt="Author" className="w-full h-full object-cover" />
                    ) : (
                      <User className="w-14 h-14 sm:w-16 sm:h-16 text-amber-700" />
                    )}
                  </div>
                  {(session?.user as { role?: string })?.role === 'ADMIN' && (
                    <button
                      onClick={() => fileInputRef.current?.click()}
                      className="absolute -bottom-2 right-0 bg-amber-600 hover:bg-amber-700 text-white text-xs px-3 py-1 rounded-full shadow"
                    >
                      Upload
                    </button>
                  )}
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handlePhotoChange}
                  />
                </div>
                <div className="ml-4 md:ml-0 md:mt-3 text-left md:text-center">
                  <div className="text-base sm:text-lg text-gray-800 font-semibold">Ajay D'Souza</div>
                  <Link
                    href="/about"
                    className="inline-flex items-center gap-1.5 text-amber-800 hover:text-amber-900 text-sm font-medium mt-1"
                  >
                    <Edit3 className="w-4 h-4" />
                    Learn more about me
                  </Link>
                </div>
              </div>

              {/* Right: Intro text */}
              <div className="flex-1">
                <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                  Welcome to my Catholic Commentary platform. Here, I share insights into Catholic teachings,
                  explore the rich history of our Church, and reflect on the beauty of our faith tradition.
                  Join me in discovering the depth and wisdom of Catholicism through thoughtful commentary,
                  historical exploration, and spiritual reflection.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="bg-white/90 rounded-xl shadow-lg mb-8">
          <div className="border-b border-amber-200/60">
            <nav className="flex space-x-2 sm:space-x-4 px-2 sm:px-6" aria-label="Tabs">
              {tabs.map((tab) => {
                const Icon = tab.icon
                const isActive = activeTab === tab.id
                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-2 my-2 sm:my-0 py-2 sm:py-3 px-3 sm:px-4 rounded-lg text-sm font-medium transition-colors ${
                      isActive
                        ? 'bg-amber-50 text-amber-800 ring-1 ring-amber-300'
                        : 'text-gray-700 hover:bg-amber-50 hover:text-amber-800'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    {tab.label}
                  </button>
                )
              })}
            </nav>
          </div>
        </div>

        {/* Content Sections */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {activeTab === 'posts' && (
              <div className="bg-white/95 rounded-xl shadow-lg p-8 mb-8 border border-amber-100">
                <div className="flex items-center gap-3 mb-6">
                  <BookOpen className="w-6 h-6 text-amber-700" />
                  <h2 className="text-2xl font-serif font-bold text-gray-900">Recent Posts</h2>
                </div>
                <div className="text-gray-600">
                  <p className="mb-4">No posts yet, but stay tuned!</p>
                  <p className="text-sm">Ajay will be sharing his first Catholic commentary soon.</p>
                  <Link href="/posts" className="inline-flex items-center gap-2 mt-4 text-amber-700 hover:text-amber-900 font-medium">
                    View All Posts
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            )}

            {activeTab === 'papal-timeline' && (
              <div className="bg-white/95 rounded-xl shadow-lg p-8 mb-8 border border-amber-100">
                <div className="flex items-center gap-3 mb-4">
                  <History className="w-6 h-6 text-amber-700" />
                  <h2 className="text-2xl font-serif font-bold text-gray-900">Papal Timeline</h2>
                </div>
                <p className="text-gray-600">
                  Explore the history of the Chair of St. Peter through an interactive timeline of Popes.
                </p>
                <span className="inline-block mt-4 bg-amber-100 text-amber-900 text-xs px-2 py-1 rounded-full">Coming Soon</span>
              </div>
            )}

            {activeTab === 'church-divisions' && (
              <div className="bg-white/95 rounded-xl shadow-lg p-8 mb-8 border border-amber-100">
                <div className="flex items-center gap-3 mb-4">
                  <Users className="w-6 h-6 text-amber-700" />
                  <h2 className="text-2xl font-serif font-bold text-gray-900">Church History</h2>
                </div>
                <p className="text-gray-600">
                  Discover the divisions and unity in Church history through an interactive tree.
                </p>
                <span className="inline-block mt-4 bg-amber-100 text-amber-900 text-xs px-2 py-1 rounded-full">Coming Soon</span>
              </div>
            )}

            {activeTab === 'bible-origin' && (
              <div className="bg-white/95 rounded-xl shadow-lg p-8 mb-8 border border-amber-100">
                <div className="flex items-center gap-3 mb-4">
                  <FileText className="w-6 h-6 text-amber-700" />
                  <h2 className="text-2xl font-serif font-bold text-gray-900">Bible History</h2>
                </div>
                <p className="text-gray-600">
                  Learn about the formation of the Bible, key councils, and translations.
                </p>
                <span className="inline-block mt-4 bg-amber-100 text-amber-900 text-xs px-2 py-1 rounded-full">Coming Soon</span>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* About Section */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-serif font-bold text-gray-800 mb-4">About This Platform</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                This platform is dedicated to exploring Catholic faith through commentary, 
                historical research, and spiritual reflection. Join our community of seekers 
                and believers as we journey together in faith.
              </p>
            </div>

            {/* Quick Links */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-serif font-bold text-gray-800 mb-4">Quick Links</h3>
              <div className="space-y-3">
                <Link href="/posts" className="flex items-center gap-2 text-gray-600 hover:text-amber-600 transition-colors">
                  <BookOpen className="w-4 h-4" />
                  <span className="text-sm">All Posts</span>
                </Link>
                <Link href="/about" className="flex items-center gap-2 text-gray-600 hover:text-amber-600 transition-colors">
                  <User className="w-4 h-4" />
                  <span className="text-sm">About Ajay</span>
                </Link>
                <Link href="/auth/signup" className="flex items-center gap-2 text-gray-600 hover:text-amber-600 transition-colors">
                  <Users className="w-4 h-4" />
                  <span className="text-sm">Join Community</span>
                </Link>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-xl shadow-lg p-6 border border-amber-200">
              <h3 className="text-lg font-serif font-bold text-gray-800 mb-2">Stay Updated</h3>
              <p className="text-gray-600 text-sm mb-4">
                Get notified when new content is published.
              </p>
              <Link
                href="/auth/signup"
                className="inline-block w-full text-center bg-amber-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-amber-700 transition-colors"
              >
                Sign Up for Updates
              </Link>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-serif text-xl font-bold text-amber-400 mb-4">
                Ajay's Catholic Commentary
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
                © 2024 Ajay's Catholic Commentary. All rights reserved.
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