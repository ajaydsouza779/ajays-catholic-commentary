import Link from "next/link"
import OptimizedImage from "@/components/OptimizedImage"
import LazyLoad from "@/components/LazyLoad"
import { prisma } from "@/lib/prisma"
import { formatDate } from "@/lib/utils"
import type { Metadata } from "next"

type PostListItem = {
  id: string
  title: string
  slug: string
  excerpt: string | null
  featuredImage: string | null
  publishedAt: Date | null
  author: { name: string | null; email: string }
  categories: { category: { id: string; name: string } }[]
  tags: { tag: { id: string; name: string } }[]
}

async function getPosts(categorySlug?: string) {
  try {
    const whereClause: any = {
      status: "PUBLISHED"
    }
    
    if (categorySlug) {
      whereClause.categories = {
        some: {
          category: {
            slug: categorySlug
          }
        }
      }
    }
    
    const posts = await prisma.post.findMany({
      where: whereClause,
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

interface PostsPageProps {
  searchParams: { category?: string }
}

export const metadata: Metadata = {
  title: "Catholic Commentary Posts",
  description: "Explore thoughtful reflections on Catholic teachings, scripture, and spiritual life. Discover insights from Church history, papal teachings, and biblical studies.",
  openGraph: {
    title: "Catholic Commentary Posts | Ajay's Catholic Commentary",
    description: "Explore thoughtful reflections on Catholic teachings, scripture, and spiritual life.",
    type: "website",
    url: "https://ajaycatholic.com/posts",
  },
  twitter: {
    card: "summary_large_image",
    title: "Catholic Commentary Posts | Ajay's Catholic Commentary",
    description: "Explore thoughtful reflections on Catholic teachings, scripture, and spiritual life.",
  },
}

export default async function PostsPage({ searchParams }: PostsPageProps) {
  const posts = await getPosts(searchParams.category)

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-8">
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif text-gray-900 mb-4 leading-tight">
            {searchParams.category ? 
              searchParams.category.split('-').map(word => 
                word.charAt(0).toUpperCase() + word.slice(1)
              ).join(' ') : 
              'All Posts'
            }
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            {searchParams.category ? 
              `Explore ${searchParams.category.split('-').map(word => 
                word.charAt(0).toUpperCase() + word.slice(1)
              ).join(' ')} content and reflections.` :
              'Explore thoughtful reflections on Catholic teachings, scripture, and spiritual life.'
            }
          </p>
        </div>

        {posts.length === 0 ? (
          <div className="text-center py-8 sm:py-16">
            <div className="bg-white rounded-lg shadow-md p-6 sm:p-8 lg:p-12 max-w-2xl mx-auto">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <span className="text-xl sm:text-2xl">📖</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-serif text-gray-900 mb-3 sm:mb-4">
                Coming Soon
              </h2>
              <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">
                Ajay is preparing his first Catholic commentary. Check back soon for insightful reflections on faith, scripture, and Catholic tradition.
              </p>
              <Link
                href="/auth/signup"
                className="inline-block bg-amber-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-md font-medium hover:bg-amber-700 transition-colors text-sm sm:text-base"
              >
                Get Notified
              </Link>
            </div>
          </div>
        ) : (
          <div className="grid gap-4 sm:gap-6 lg:gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post: PostListItem) => (
              <LazyLoad key={post.id}>
                <article data-testid="post-card" className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                  {post.featuredImage && (
                    <div className="aspect-video bg-amber-100">
                      <OptimizedImage
                        src={post.featuredImage}
                        alt={post.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                  )}
                <div className="p-4 sm:p-6">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {post.categories.map(({ category }: { category: { id: string; name: string } }) => (
                      <span
                        key={category.id}
                        className="px-2 py-1 bg-amber-100 text-amber-800 text-xs font-medium rounded-full"
                      >
                        {category.name}
                      </span>
                    ))}
                  </div>
                  <h2 className="text-lg sm:text-xl font-serif text-gray-900 mb-3 line-clamp-2 leading-tight">
                    <Link
                      href={`/posts/${post.slug}`}
                      className="hover:text-amber-600 transition-colors"
                    >
                      {post.title}
                    </Link>
                  </h2>
                  {post.excerpt && (
                    <p className="text-sm sm:text-base text-gray-600 mb-4 line-clamp-3 leading-relaxed">
                      {post.excerpt}
                    </p>
                  )}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-xs sm:text-sm text-gray-500 gap-1 sm:gap-0">
                    <span>By {post.author.name || post.author.email}</span>
                    <time dateTime={post.publishedAt?.toISOString()}>
                      {post.publishedAt && formatDate(post.publishedAt)}
                    </time>
                  </div>
                  {post.tags.length > 0 && (
                    <div className="flex flex-wrap gap-1 mt-3">
                      {post.tags.map(({ tag }: { tag: { id: string; name: string } }) => (
                        <span
                          key={tag.id}
                          className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded"
                        >
                          #{tag.name}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
                </article>
              </LazyLoad>
            ))}
          </div>
        )}
    </div>
  )
}
