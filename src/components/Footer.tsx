"use client"

import Link from "next/link"
import DatabaseTestButton from "./DatabaseTestButton"

export default function Footer() {
  return (
    <footer className="bg-white/90 backdrop-blur border-t border-amber-200 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-lg font-serif font-bold text-gray-800 mb-4">About</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Ajay&apos;s Catholic Commentary is dedicated to exploring Catholic faith through 
              commentary, historical research, and spiritual reflection.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-serif font-bold text-gray-800 mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/posts" className="text-gray-600 hover:text-amber-600 transition-colors">All Posts</Link></li>
              <li><Link href="/history/papal-timeline" className="text-gray-600 hover:text-amber-600 transition-colors">Papal Timeline</Link></li>
              <li><Link href="/history/church-divisions" className="text-gray-600 hover:text-amber-600 transition-colors">Church History</Link></li>
              <li><Link href="/history/bible-origin" className="text-gray-600 hover:text-amber-600 transition-colors">Bible History</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-serif font-bold text-gray-800 mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/search" className="text-gray-600 hover:text-amber-600 transition-colors">Search</a></li>
              <li><a href="/about" className="text-gray-600 hover:text-amber-600 transition-colors">About Ajay</a></li>
              <li><a href="/auth/signup" className="text-gray-600 hover:text-amber-600 transition-colors">Join Community</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-serif font-bold text-gray-800 mb-4">Connect</h3>
            <p className="text-gray-600 text-sm mb-4">
              Join our community of seekers and believers as we journey together in faith.
            </p>
            <div className="flex justify-end">
              <DatabaseTestButton />
            </div>
          </div>
        </div>

        <div className="border-t border-amber-200 mt-8 pt-8 text-center">
          <p className="text-gray-600 text-sm">
            © 2024 Ajay&apos;s Catholic Commentary. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
