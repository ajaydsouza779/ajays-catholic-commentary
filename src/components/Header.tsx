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
    <header className="bg-primary-cream/90 backdrop-blur supports-[backdrop-filter]:bg-primary-cream/80 shadow-lg border-b-2 border-amber-200" style={{ backgroundColor: '#F5F5DC' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Left placeholder (logo removed) */}
          <div />

          {/* Search Bar */}
          <div className="hidden lg:block flex-1 max-w-md mx-8">
            <SearchBar />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-amber-600 transition-colors font-medium">
              Home
            </Link>
            <Link href="/posts" className="text-gray-700 hover:text-amber-600 transition-colors font-medium">
              Posts
            </Link>
            <Link href="/history/papal-timeline" className="text-gray-700 hover:text-amber-600 transition-colors font-medium">
              Papal Timeline
            </Link>
            <Link href="/history/church-divisions" className="text-gray-700 hover:text-amber-600 transition-colors font-medium">
              Church History
            </Link>
            <Link href="/history/bible-origin" className="text-gray-700 hover:text-amber-600 transition-colors font-medium">
              Bible History
            </Link>
            <Link href="/search" className="text-gray-700 hover:text-amber-600 transition-colors font-medium">
              Search
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-amber-600 transition-colors font-medium">
              About
            </Link>
            {(session?.user as { role?: string })?.role === "ADMIN" && (
              <Link href="/admin" className="text-gray-700 hover:text-amber-600 transition-colors font-medium">
                Admin
              </Link>
            )}
          </nav>

          {/* Auth Section */}
          <div className="hidden md:flex items-center space-x-4">
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

          {/* Mobile menu button */}
          <button
            className="md:hidden text-gray-700 hover:text-amber-600 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-amber-200">
            <nav className="flex flex-col space-y-4">
              <Link href="/" className="text-gray-700 hover:text-amber-600 transition-colors font-medium">
                Home
              </Link>
              <Link href="/posts" className="text-gray-700 hover:text-amber-600 transition-colors font-medium">
                Posts
              </Link>
              <Link href="/history/papal-timeline" className="text-gray-700 hover:text-amber-600 transition-colors font-medium">
                Papal Timeline
              </Link>
              <Link href="/history/church-divisions" className="text-gray-700 hover:text-amber-600 transition-colors font-medium">
                Church History
              </Link>
              <Link href="/history/bible-origin" className="text-gray-700 hover:text-amber-600 transition-colors font-medium">
                Bible History
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-amber-600 transition-colors font-medium">
                About
              </Link>
              {(session?.user as { role?: string })?.role === "ADMIN" && (
                <Link href="/admin" className="text-gray-700 hover:text-amber-600 transition-colors font-medium">
                  Admin
                </Link>
              )}
              
              <div className="pt-4 border-t border-amber-200">
                {session ? (
                  <div className="flex flex-col space-y-2">
                    <div className="flex items-center space-x-2 text-sm">
                      <User className="w-4 h-4 text-gray-600" />
                      <span className="text-gray-700">{(session.user as { name?: string; email?: string }).name || (session.user as { name?: string; email?: string }).email}</span>
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
                  <div className="flex flex-col space-y-2">
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
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
