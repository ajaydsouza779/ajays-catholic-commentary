"use client"

import Header from "@/components/Header"
import HistoryNavigation from "@/components/HistoryNavigation"
import Footer from "@/components/Footer"
import Link from "next/link"
import { useState, useEffect } from "react"
import {
  BookOpen,
  Users,
  FileText,
  Church,
  MapPin,
  Crown,
  Calendar,
  ArrowRight,
  Eye,
  Heart,
  Flame,
  Star,
} from "lucide-react"

function LatestPostsSection() {
  const [posts, setPosts] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("/api/posts?limit=3", { cache: "no-store" })
        if (response.ok) {
          setPosts(await response.json())
        }
      } catch (err) {
        console.error("Error fetching posts:", err)
      } finally {
        setLoading(false)
      }
    }
    fetchPosts()
  }, [])

  if (loading) {
    return (
      <div className="text-center py-12">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-amber-600 mx-auto"></div>
        <p className="mt-3 text-sm text-gray-500">Loading posts...</p>
      </div>
    )
  }

  if (posts.length === 0) {
    return (
      <div className="text-center py-12">
        <BookOpen className="w-10 h-10 text-amber-300 mx-auto mb-3" />
        <p className="text-gray-500">No posts yet. Check back soon!</p>
      </div>
    )
  }

  return (
    <div className="grid md:grid-cols-3 gap-6">
      {posts.map((post: any) => (
        <article
          key={post.id}
          className="bg-white rounded-xl border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow"
        >
          <div className="p-6">
            <div className="flex items-center gap-2 text-xs text-gray-400 mb-3">
              <Calendar className="w-3.5 h-3.5" />
              <time dateTime={post.publishedAt}>
                {new Date(post.publishedAt).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
            </div>
            <h3 className="font-serif text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
              <Link href={`/posts/${post.slug}`} className="hover:text-amber-700 transition-colors">
                {post.title}
              </Link>
            </h3>
            {post.excerpt && (
              <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">{post.excerpt}</p>
            )}
            <Link
              href={`/posts/${post.slug}`}
              className="inline-flex items-center gap-1 text-amber-600 hover:text-amber-700 text-sm font-medium"
            >
              Read More <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </article>
      ))}
    </div>
  )
}

const exploreGroups = [
  {
    heading: "History",
    items: [
      { title: "Papal Timeline", description: "History of the Chair of St. Peter", icon: Crown, href: "/history/papal-timeline", color: "bg-indigo-50 border-indigo-200 text-indigo-700" },
      { title: "Church History", description: "Divisions and unity across the centuries", icon: Users, href: "/history/church-divisions", color: "bg-emerald-50 border-emerald-200 text-emerald-700" },
      { title: "Bible History", description: "Formation, manuscripts, and translations", icon: FileText, href: "/history/bible-origin", color: "bg-sky-50 border-sky-200 text-sky-700" },
      { title: "Mass History", description: "From the Last Supper to the modern liturgy", icon: Church, href: "/history/mass-history", color: "bg-purple-50 border-purple-200 text-purple-700" },
      { title: "Indian Church", description: "Two millennia of Christianity in India", icon: MapPin, href: "/history/indian-church", color: "bg-orange-50 border-orange-200 text-orange-700" },
    ],
  },
  {
    heading: "Mysteries",
    items: [
      { title: "Public Revelation", description: "Scripture, Tradition, and the deposit of faith", icon: BookOpen, href: "/mysteries/public-revelation", color: "bg-blue-50 border-blue-200 text-blue-700" },
      { title: "Private Revelations", description: "Approved visions, locutions, and mystical experiences", icon: Eye, href: "/mysteries/private-revelations", color: "bg-violet-50 border-violet-200 text-violet-700" },
      { title: "Marian Apparitions", description: "Guadalupe, Lourdes, Fatima, and more", icon: Heart, href: "/mysteries/marian-apparitions", color: "bg-rose-50 border-rose-200 text-rose-700" },
      { title: "Eucharistic Miracles", description: "Visible signs of the Real Presence", icon: Flame, href: "/mysteries/eucharistic-miracles", color: "bg-amber-50 border-amber-200 text-amber-700" },
      { title: "Incorruptible Saints", description: "Bodies preserved from decay as signs of holiness", icon: Star, href: "/mysteries/incorruptible-saints", color: "bg-teal-50 border-teal-200 text-teal-700" },
    ],
  },
]

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Ajay's Catholic Commentary",
    url: "https://ajaycatholic.com",
    description:
      "A platform for sharing Catholic insights, teachings, and reflections.",
    author: { "@type": "Person", name: "Ajay D'Souza" },
    potentialAction: {
      "@type": "SearchAction",
      target: "https://ajaycatholic.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="min-h-screen bg-neutral-50">
        <Header />
        <HistoryNavigation />

        <main>
          {/* Explore Sections */}
          <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-2 text-center">
              Explore
            </h2>
            <p className="text-gray-500 text-center mb-8 text-sm">
              Catholic commentary, historical research, and spiritual reflection
            </p>

            {/* Posts card standalone */}
            <div className="mb-8">
              <Link
                href="/posts"
                className="group rounded-xl p-5 border bg-amber-50 border-amber-200 hover:shadow-md transition-all block max-w-md mx-auto"
              >
                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-lg bg-white/70 text-amber-700">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-gray-900 mb-1 group-hover:text-amber-800 transition-colors">Posts</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">Catholic commentary and theological reflections</p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-amber-600 mt-1 shrink-0 transition-colors" />
                </div>
              </Link>
            </div>

            {exploreGroups.map((group) => (
              <div key={group.heading} className="mb-8">
                <h3 className="text-lg font-serif font-semibold text-gray-800 mb-4">{group.heading}</h3>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {group.items.map((item) => {
                    const Icon = item.icon
                    const [bg, border, text] = item.color.split(" ")
                    return (
                      <Link
                        key={item.title}
                        href={item.href}
                        className={`group rounded-xl p-5 border ${bg} ${border} hover:shadow-md transition-all`}
                      >
                        <div className="flex items-start gap-4">
                          <div className={`p-2.5 rounded-lg bg-white/70 ${text}`}>
                            <Icon className="w-5 h-5" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="font-semibold text-gray-900 mb-1 group-hover:text-amber-800 transition-colors">
                              {item.title}
                            </h3>
                            <p className="text-sm text-gray-600 leading-relaxed">
                              {item.description}
                            </p>
                          </div>
                          <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-amber-600 mt-1 shrink-0 transition-colors" />
                        </div>
                      </Link>
                    )
                  })}
                </div>
              </div>
            ))}
          </section>

          {/* Latest Posts */}
          <section className="bg-white border-y border-gray-100">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-serif font-bold text-gray-900">
                  Latest Posts
                </h2>
                <Link
                  href="/posts"
                  className="inline-flex items-center gap-1 text-amber-600 hover:text-amber-700 text-sm font-medium"
                >
                  View All <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              <LatestPostsSection />
            </div>
          </section>

          {/* About */}
          <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 max-w-2xl mx-auto text-center">
              <h3 className="text-xl font-serif font-bold text-gray-900 mb-4">
                About This Platform
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                This platform is dedicated to exploring Catholic faith through
                commentary, historical research, and spiritual reflection. From
                the Apostolic era to the modern Church, discover the depth and
                beauty of Catholic tradition.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-1 text-amber-600 hover:text-amber-700 text-sm font-medium"
              >
                Learn more about Ajay <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  )
}
