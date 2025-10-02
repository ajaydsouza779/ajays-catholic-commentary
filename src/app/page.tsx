"use client"

import Header from "@/components/Header"
import Link from "next/link"
import { useState } from "react"
import { BookOpen, History, Users, FileText, User, Edit3 } from "lucide-react"

export default function Home() {
  const [activeTab, setActiveTab] = useState('posts')

  const tabs = [
    { id: 'posts', label: 'Posts', icon: BookOpen, href: '/posts' },
    { id: 'papal-timeline', label: 'Papal Timeline', icon: History, href: '/history/papal-timeline' },
    { id: 'church-divisions', label: 'Church History', icon: Users, href: '/history/church-divisions' },
    { id: 'bible-origin', label: 'Bible History', icon: FileText, href: '/history/bible-origin' },
  ]

  return (
    <div className="min-h-screen bg-amber-50">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Author Section */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
            {/* Author Photo Placeholder */}
            <div className="w-32 h-32 rounded-full bg-amber-100 flex items-center justify-center border-4 border-amber-200">
              <User className="w-16 h-16 text-amber-600" />
            </div>
            
            {/* Author Info */}
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-3xl md:text-4xl font-serif font-bold text-gray-800 mb-2">
                Ajay D'Souza
              </h1>
              <p className="text-lg text-amber-600 font-medium mb-4">
                Catholic Scholar & Commentator
              </p>
              <p className="text-gray-600 leading-relaxed max-w-3xl">
                Welcome to my Catholic Commentary platform. Here, I share insights into Catholic teachings, 
                explore the rich history of our Church, and reflect on the beauty of our faith tradition. 
                Join me in discovering the depth and wisdom of Catholicism through thoughtful commentary, 
                historical exploration, and spiritual reflection.
              </p>
              <div className="mt-4 flex flex-col sm:flex-row gap-3">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 bg-amber-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-amber-700 transition-colors"
                >
                  <Edit3 className="w-4 h-4" />
                  Learn More About Me
                </Link>
                <Link
                  href="/auth/signup"
                  className="inline-flex items-center gap-2 border-2 border-amber-600 text-amber-600 px-6 py-3 rounded-lg font-medium hover:bg-amber-600 hover:text-white transition-colors"
                >
                  Join Our Community
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="bg-white rounded-xl shadow-lg mb-8">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-6" aria-label="Tabs">
              {tabs.map((tab) => {
                const Icon = tab.icon
                return (
                  <Link
                    key={tab.id}
                    href={tab.href}
                    className={`flex items-center gap-2 py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                      activeTab === tab.id
                        ? 'border-amber-500 text-amber-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                    onClick={() => setActiveTab(tab.id)}
                  >
                    <Icon className="w-4 h-4" />
                    {tab.label}
                  </Link>
                )
              })}
            </nav>
          </div>
        </div>

        {/* Content Sections */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Recent Posts */}
            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <div className="flex items-center gap-3 mb-6">
                <BookOpen className="w-6 h-6 text-amber-600" />
                <h2 className="text-2xl font-serif font-bold text-gray-800">
                  Recent Posts
                </h2>
              </div>
              <div className="text-gray-600">
                <p className="mb-4">No posts yet, but stay tuned!</p>
                <p className="text-sm">
                  Ajay will be sharing his first Catholic commentary soon. 
                  Sign up to be notified when new content is published.
                </p>
                <Link
                  href="/posts"
                  className="inline-flex items-center gap-2 mt-4 text-amber-600 hover:text-amber-700 font-medium"
                >
                  View All Posts
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Coming Soon Sections */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <History className="w-5 h-5 text-amber-600" />
                  <h3 className="text-lg font-serif font-bold text-gray-800">Papal Timeline</h3>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  Explore the history of the Chair of St. Peter through an interactive timeline of popes.
                </p>
                <span className="inline-block bg-amber-100 text-amber-800 text-xs px-2 py-1 rounded-full">
                  Coming Soon
                </span>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Users className="w-5 h-5 text-amber-600" />
                  <h3 className="text-lg font-serif font-bold text-gray-800">Church History</h3>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  Discover the divisions and unity in Church history through an interactive tree.
                </p>
                <span className="inline-block bg-amber-100 text-amber-800 text-xs px-2 py-1 rounded-full">
                  Coming Soon
                </span>
              </div>
            </div>
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
          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              © 2024 Ajay's Catholic Commentary. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}