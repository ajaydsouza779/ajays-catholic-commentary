import Header from "@/components/Header"
import DatabaseTestButton from "@/components/DatabaseTestButton"
import Link from "next/link"
import Image from "next/image"
import { prisma } from "@/lib/prisma"
import { formatDate } from "@/lib/utils"

async function getPosts() {
  try {
    const posts = await prisma.post.findMany({
      where: {
        status: "PUBLISHED"
      },
      include: {
        author: {
          select: {
            name: true,
            email: true
          }
        },
        categories: {
          include: {
            category: true
          }
        },
        tags: {
          include: {
            tag: true
          }
        }
      },
      orderBy: {
        publishedAt: "desc"
      }
    })
    return posts
  } catch (error) {
    console.error("Error fetching posts:", error)
    return []
  }
}

export default async function PostsPage() {
  const posts = await getPosts()

  return (
    <div className="min-h-screen bg-primary-cream">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-serif text-primary-navy mb-4">
            Catholic Commentary
          </h1>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Explore thoughtful reflections on Catholic teachings, scripture, and spiritual life.
          </p>
        </div>

        {posts.length === 0 ? (
          <div className="text-center py-16">
            <div className="bg-white rounded-lg shadow-md p-12 max-w-2xl mx-auto">
              <div className="w-16 h-16 bg-primary-gold rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-primary-navy font-bold text-2xl">📖</span>
              </div>
              <h2 className="text-2xl font-serif text-primary-navy mb-4">
                Coming Soon
              </h2>
              <p className="text-neutral-600 mb-6">
                Ajay is preparing his first Catholic commentary. Check back soon for insightful reflections on faith, scripture, and Catholic tradition.
              </p>
              <Link
                href="/auth/signup"
                className="inline-block bg-primary-navy text-white px-6 py-3 rounded-md font-medium hover:bg-primary-gold hover:text-primary-navy transition-colors"
              >
                Get Notified
              </Link>
            </div>
          </div>
        ) : (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post: any) => (
              <article key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                {post.featuredImage && (
                  <div className="aspect-video bg-primary-gold">
                    <Image
                      src={post.featuredImage}
                      alt={post.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {post.categories.map(({ category }: any) => (
                      <span
                        key={category.id}
                        className="px-2 py-1 bg-primary-gold text-primary-navy text-xs font-medium rounded-full"
                      >
                        {category.name}
                      </span>
                    ))}
                  </div>
                  <h2 className="text-xl font-serif text-primary-navy mb-3 line-clamp-2">
                    <Link
                      href={`/posts/${post.slug}`}
                      className="hover:text-primary-gold transition-colors"
                    >
                      {post.title}
                    </Link>
                  </h2>
                  {post.excerpt && (
                    <p className="text-neutral-600 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                  )}
                  <div className="flex items-center justify-between text-sm text-neutral-500">
                    <span>By {post.author.name || post.author.email}</span>
                    <time dateTime={post.publishedAt?.toISOString()}>
                      {post.publishedAt && formatDate(post.publishedAt)}
                    </time>
                  </div>
                  {post.tags.length > 0 && (
                    <div className="flex flex-wrap gap-1 mt-3">
                      {post.tags.map(({ tag }: any) => (
                        <span
                          key={tag.id}
                          className="px-2 py-1 bg-neutral-100 text-neutral-600 text-xs rounded"
                        >
                          #{tag.name}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        )}
      </main>

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
                <Link href="/" className="block text-gray-300 hover:text-white text-sm transition-colors">Home</Link>
                <Link href="/posts" className="block text-gray-300 hover:text-white text-sm transition-colors">All Posts</Link>
                <Link href="/about" className="block text-gray-300 hover:text-white text-sm transition-colors">About</Link>
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
