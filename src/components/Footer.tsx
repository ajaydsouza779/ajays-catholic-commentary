"use client"

import { useState } from "react"
import DatabaseTestButton from "./DatabaseTestButton"

export default function Footer() {
  return (
    <footer className="bg-white/95 backdrop-blur border-t border-amber-200 mt-16 print:hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center justify-between">
          <p className="text-gray-600 text-sm">
            © 2024 Ajay&apos;s Catholic Commentary. All rights reserved.
          </p>
          <DatabaseTestButton />
        </div>
      </div>
    </footer>
  )
}
