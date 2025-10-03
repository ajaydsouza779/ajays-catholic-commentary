"use client"

import { useSession, signOut } from "next-auth/react"
import Link from "next/link"
import { Menu, X, User, LogOut } from "lucide-react"
import { useState } from "react"
import SearchBar from "./SearchBar"

export default function Header() {
  const { data: session } = useSession()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="shadow-lg border-b border-amber-200" style={{ backgroundColor: '#DBEAFE' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Brand Title */}
          <Link href="/" className="text-lg sm:text-xl font-serif font-bold text-gray-800">
            Ajay's Catholic Commentary
          </Link>

          {/* Search Bar */}
          <div className="hidden lg:block flex-1 max-w-md mx-8">
            <SearchBar />
          </div>

          {/* Desktop Navigation */}
          {/* No top-level nav per request */}
          <div className="hidden md:flex items-center" />

          {/* Desktop nav removed */}

          {/* Auth Section */}
          <div className="hidden md:flex items-center gap-3">
            {session ? (
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <User className="w-4 h-4 text-gray-600" />
                  <span className="text-sm text-gray-700">{(session.user as { name?: string; email?: string }).name || (session.user as { name?: string; email?: string }).email}</span>
                </div>
                <button
                  onClick={() => signOut()}
                  className="flex items-center space-x-1 text-sm text-gray-700 hover:text-amber-600 transition-colors"
                >
                  <LogOut className="w-4 h-4" />
                  <span>Sign Out</span>
                </button>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <Link
                  href="/auth/signin"
                  className="text-sm text-gray-700 hover:text-amber-600 transition-colors"
                >
                  Sign In
                </Link>
                <Link
                  href="/auth/signup"
                  className="bg-amber-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-amber-700 transition-colors"
                >
                  Sign Up
                </Link>
              </div>
            )}
          </div>

          {/* Mobile menu removed */}
        </div>

      </div>
    </header>
  )
}
