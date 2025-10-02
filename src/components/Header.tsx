"use client"

import { useSession, signOut } from "next-auth/react"
import Link from "next/link"
import { Menu, X, User, LogOut } from "lucide-react"
import { useState } from "react"

export default function Header() {
  const { data: session } = useSession()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="text-white shadow-lg" style={{backgroundColor: '#1E3A8A'}}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{backgroundColor: '#F59E0B'}}>
              <span className="font-bold text-lg" style={{color: '#1E3A8A'}}>A</span>
            </div>
            <span className="text-xl font-serif font-bold">Ajay&apos;s Catholic Commentary</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-white hover:text-yellow-300 transition-colors">
              Home
            </Link>
            <Link href="/posts" className="text-white hover:text-yellow-300 transition-colors">
              Posts
            </Link>
            <Link href="/about" className="text-white hover:text-yellow-300 transition-colors">
              About
            </Link>
            {(session?.user as { role?: string })?.role === "ADMIN" && (
              <Link href="/admin" className="text-white hover:text-yellow-300 transition-colors">
                Admin
              </Link>
            )}
          </nav>

          {/* Auth Section */}
          <div className="hidden md:flex items-center space-x-4">
            {session ? (
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <User className="w-4 h-4" />
                  <span className="text-sm">{(session.user as { name?: string; email?: string }).name || (session.user as { name?: string; email?: string }).email}</span>
                </div>
                <button
                  onClick={() => signOut()}
                  className="flex items-center space-x-1 text-sm text-white hover:text-yellow-300 transition-colors"
                >
                  <LogOut className="w-4 h-4" />
                  <span>Sign Out</span>
                </button>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <Link
                  href="/auth/signin"
                  className="text-sm text-white hover:text-yellow-300 transition-colors"
                >
                  Sign In
                </Link>
                <Link
                  href="/auth/signup"
                  className="bg-amber-400 text-blue-900 px-4 py-2 rounded-md text-sm font-medium hover:bg-yellow-400 transition-colors"
                >
                  Sign Up
                </Link>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
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
          <div className="md:hidden py-4 border-t border-primary-gold">
            <nav className="flex flex-col space-y-4">
              <Link href="/" className="text-white hover:text-yellow-300 transition-colors">
                Home
              </Link>
              <Link href="/posts" className="text-white hover:text-yellow-300 transition-colors">
                Posts
              </Link>
              <Link href="/about" className="text-white hover:text-yellow-300 transition-colors">
                About
              </Link>
              {(session?.user as { role?: string })?.role === "ADMIN" && (
                <Link href="/admin" className="text-white hover:text-yellow-300 transition-colors">
                  Admin
                </Link>
              )}
              
              <div className="pt-4 border-t border-primary-gold">
                {session ? (
                  <div className="flex flex-col space-y-2">
                    <div className="flex items-center space-x-2 text-sm">
                      <User className="w-4 h-4" />
                      <span>{(session.user as { name?: string; email?: string }).name || (session.user as { name?: string; email?: string }).email}</span>
                    </div>
                    <button
                      onClick={() => signOut()}
                      className="flex items-center space-x-1 text-sm text-white hover:text-yellow-300 transition-colors"
                    >
                      <LogOut className="w-4 h-4" />
                      <span>Sign Out</span>
                    </button>
                  </div>
                ) : (
                  <div className="flex flex-col space-y-2">
                    <Link
                      href="/auth/signin"
                      className="text-sm text-white hover:text-yellow-300 transition-colors"
                    >
                      Sign In
                    </Link>
                    <Link
                      href="/auth/signup"
                      className="bg-amber-400 text-blue-900 px-4 py-2 rounded-md text-sm font-medium hover:bg-yellow-400 transition-colors"
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
