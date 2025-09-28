import Header from "@/components/Header"
import Link from "next/link"
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
            {posts.map((post) => (
              <article key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                {post.featuredImage && (
                  <div className="aspect-video bg-primary-gold">
                    <img
                      src={post.featuredImage}
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {post.categories.map(({ category }) => (
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
                      {post.tags.map(({ tag }) => (
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

      <footer className="bg-primary-navy text-white py-8 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-primary-gold font-serif text-lg mb-2">
            Ajay&apos;s Catholic Commentary
          </p>
          <p className="text-sm text-neutral-300">
            Sharing the beauty of Catholic faith and tradition
          </p>
        </div>
      </footer>
    </div>
  )
}
