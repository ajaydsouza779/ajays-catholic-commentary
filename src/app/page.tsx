"use client"

import Header from "@/components/Header"
import HistoryNavigation from "@/components/HistoryNavigation"
import DatabaseTestButton from "@/components/DatabaseTestButton"
import Link from "next/link"
import { useState, useRef, useEffect } from "react"
import { useSession } from "next-auth/react"
import { BookOpen, History, Users, FileText, User, Edit3 } from "lucide-react"

export default function Home() {
  const { data: session } = useSession()
  const [photoPreview, setPhotoPreview] = useState<string | null>(null)
  const [profilePhoto, setProfilePhoto] = useState<string | null>(null)
  const fileInputRef = useRef<HTMLInputElement | null>(null)

  // Fetch profile photo on component mount
  useEffect(() => {
    const fetchProfilePhoto = async () => {
      try {
        const response = await fetch('/api/admin/profile-photo')
        if (response.ok) {
          const data = await response.json()
          setProfilePhoto(data.photo)
        }
      } catch (error) {
        console.error('Error fetching profile photo:', error)
      }
    }
    
    fetchProfilePhoto()
  }, [])

  const tabs = [
    { id: 'all-posts', label: 'All Posts', icon: BookOpen, href: '/posts' },
    { id: 'scripture-study', label: 'Scripture Study', icon: FileText, href: '/posts?category=scripture-study' },
    { id: 'catholic-tradition', label: 'Catholic Tradition', icon: Users, href: '/posts?category=catholic-tradition' },
    { id: 'spiritual-life', label: 'Spiritual Life', icon: BookOpen, href: '/posts?category=spiritual-life' },
    { id: 'history', label: 'History', icon: History, href: '/history/papal-timeline' },
  ]

  function handlePhotoChange(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0]
    if (!file) return
    const reader = new FileReader()
    reader.onload = async () => {
      const base64Data = reader.result as string
      setPhotoPreview(base64Data)
      
      // Upload to server
      try {
        const response = await fetch('/api/admin/profile-photo', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ photo: base64Data })
        })
        
        if (response.ok) {
          setProfilePhoto(base64Data)
          console.log('Profile photo updated successfully')
        } else {
          console.error('Failed to update profile photo')
        }
      } catch (error) {
        console.error('Error uploading profile photo:', error)
      }
    }
    reader.readAsDataURL(file)
  }

  return (
    <div className="min-h-screen bg-neutral-50">
      <Header />
      <HistoryNavigation />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Author Section (temporarily hidden) */}
        {false && (
        <div className="relative overflow-hidden rounded-2xl mb-8">
          <div className="absolute inset-0 bg-gradient-to-r from-amber-100 via-rose-100 to-sky-100" />
          <div className="relative p-6 sm:p-8 border border-amber-200/60 backdrop-blur-sm">
            <div className="flex flex-col md:flex-row items-start gap-6">
              {/* Left: Photo + name */}
              <div className="flex items-center md:block">
                <div className="relative">
                <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-amber-100 border-4 border-amber-300/60 overflow-hidden flex items-center justify-center shadow">
                  {photoPreview || profilePhoto ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={photoPreview || profilePhoto || ''} alt="Author" className="w-full h-full object-cover" />
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
                  <div className="text-base sm:text-lg text-gray-800 font-semibold">Ajay D&apos;Souza</div>
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
        )}

        {/* Navigation Tabs */}
        <div className="bg-white/90 rounded-xl shadow-lg mb-8">
          <div className="border-b border-amber-200/60">
            <nav className="flex flex-wrap gap-2 px-2 sm:px-6 py-2" aria-label="Tabs">
              {tabs.map((tab) => {
                const Icon = tab.icon
                return (
                  <Link
                    key={tab.id}
                    href={tab.href}
                    className="inline-flex items-center gap-2 py-1.5 px-3 rounded-md text-sm font-medium transition-colors text-gray-700 hover:bg-amber-50 hover:text-amber-800"
                  >
                    <Icon className="w-4 h-4" />
                    {tab.label}
                  </Link>
                )
              })}
            </nav>
          </div>
        </div>

        {/* Hero Section */}
        <div className="bg-gradient-to-br from-amber-50 via-white to-amber-50 rounded-2xl shadow-lg p-8 mb-8 border border-amber-100">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
              Welcome to Ajay&apos;s Catholic Commentary
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Explore the rich tapestry of Catholic faith through commentary, historical research, and spiritual reflection.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-4 bg-white/80 rounded-lg shadow-sm border border-amber-200">
                <div className="text-2xl mb-2">📝</div>
                <h3 className="font-semibold text-gray-800 mb-1">Posts</h3>
                <p className="text-sm text-gray-600">Catholic commentary and theological reflections</p>
              </div>
              <div className="p-4 bg-white/80 rounded-lg shadow-sm border border-amber-200">
                <div className="text-2xl mb-2">👑</div>
                <h3 className="font-semibold text-gray-800 mb-1">Papal Timeline</h3>
                <p className="text-sm text-gray-600">History of the Chair of St. Peter</p>
              </div>
              <div className="p-4 bg-white/80 rounded-lg shadow-sm border border-amber-200">
                <div className="text-2xl mb-2">⛪</div>
                <h3 className="font-semibold text-gray-800 mb-1">Church History</h3>
                <p className="text-sm text-gray-600">Divisions and unity in Church history</p>
              </div>
              <div className="p-4 bg-white/80 rounded-lg shadow-sm border border-amber-200">
                <div className="text-2xl mb-2">📖</div>
                <h3 className="font-semibold text-gray-800 mb-1">Bible History</h3>
                <p className="text-sm text-gray-600">Formation, manuscripts, and translations</p>
              </div>
            </div>
          </div>
        </div>

        {/* Coming Soon - Sunday Reflections */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl shadow-lg p-8 mb-8 border border-blue-200">
          <div className="text-center">
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">
              🕊️ Sunday Gospel Reflections
            </h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Join me every Sunday as I share reflections on the Gospel readings and Sunday Mass. 
              These weekly reflections will help deepen your understanding of Scripture and strengthen your faith.
            </p>
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
              <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
              Coming Soon - First Reflection This Sunday
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