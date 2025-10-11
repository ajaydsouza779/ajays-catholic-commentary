import Header from "@/components/Header"
import DatabaseTestButton from "@/components/DatabaseTestButton"
import CommentForm from "./CommentForm"
import Link from "next/link"
import OptimizedImage from "@/components/OptimizedImage"
import { prisma } from "@/lib/prisma"
import { formatDate } from "@/lib/utils"
import { notFound } from "next/navigation"
import type { Metadata } from "next"

async function getPost(slug: string) {
  try {
    const post = await prisma.post.findUnique({
      where: {
        slug,
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
        },
        comments: {
          where: {
            status: "APPROVED"
          },
          include: {
            author: {
              select: {
                name: true,
                email: true
              }
            }
          },
          select: {
            id: true,
            content: true,
            createdAt: true,
            author: {
              select: {
                name: true,
                email: true
              }
            },
            guestName: true,
            guestEmail: true
          },
          orderBy: {
            createdAt: "asc"
          }
        }
      }
    })
    return post
  } catch (error) {
    console.error("Error fetching post:", error)
    return null
  }
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const post = await getPost(slug)
  
  if (!post) {
    return {
      title: "Post Not Found | Ajay's Catholic Commentary",
      description: "The requested post could not be found.",
    }
  }

  const excerpt = post.excerpt || post.content.replace(/<[^>]*>/g, '').substring(0, 160) + '...'
  const categories = post.categories.map(c => c.category.name).join(', ')
  
  return {
    title: `${post.title} | Ajay's Catholic Commentary`,
    description: excerpt,
    openGraph: {
      title: `${post.title} | Ajay's Catholic Commentary`,
      description: excerpt,
      type: "article",
      url: `https://ajaycatholic.com/posts/${post.slug}`,
      publishedTime: post.publishedAt?.toISOString(),
      authors: [post.author.name || post.author.email],
      tags: post.tags.map(t => t.tag.name),
    },
    twitter: {
      card: "summary_large_image",
      title: `${post.title} | Ajay's Catholic Commentary`,
      description: excerpt,
    },
    keywords: [categories, ...post.tags.map(t => t.tag.name), "Catholic", "Christianity", "Faith"],
  }
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = await getPost(slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-primary-cream">
      <Header />
      
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-12">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <Link
            href="/posts"
            className="text-primary-gold hover:text-primary-navy transition-colors"
          >
            ← Back to Posts
          </Link>
        </nav>

        <article className="bg-white rounded-lg shadow-md overflow-hidden">
          {/* Featured Image */}
          {post.featuredImage && (
            <div className="aspect-video bg-primary-gold">
              <OptimizedImage
                src={post.featuredImage}
                alt={post.title}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
              />
            </div>
          )}

          <div className="p-4 sm:p-6 lg:p-8">
            {/* Categories */}
            {post.categories.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-4">
                {post.categories.map(({ category }: { category: { id: string; name: string } }) => (
                  <span
                    key={category.id}
                    className="px-3 py-1 bg-primary-gold text-primary-navy text-sm font-medium rounded-full"
                  >
                    {category.name}
                  </span>
                ))}
              </div>
            )}

            {/* Title */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-serif text-primary-navy mb-4 leading-tight">
              {post.title}
            </h1>

            {/* Meta */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-neutral-600 mb-6 pb-6 border-b border-neutral-200 space-y-2 sm:space-y-0">
              <div className="flex items-center space-x-4 text-sm sm:text-base">
                <span>By {post.author.name || post.author.email}</span>
                <span>•</span>
                <time dateTime={post.publishedAt?.toISOString()}>
                  {post.publishedAt && formatDate(post.publishedAt)}
                </time>
              </div>
              <div className="text-sm">
                {post.comments.length} comment{post.comments.length !== 1 ? 's' : ''}
              </div>
            </div>

            {/* Content */}
            <div 
              className="prose prose-sm sm:prose-base lg:prose-lg max-w-none prose-headings:font-serif prose-headings:text-primary-navy prose-a:text-primary-navy prose-a:no-underline hover:prose-a:underline prose-strong:text-primary-navy prose-p:leading-relaxed prose-headings:leading-tight"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Tags */}
            {post.tags.length > 0 && (
              <div className="mt-8 pt-6 border-t border-neutral-200">
                <h3 className="text-sm font-medium text-neutral-700 mb-3">Tags:</h3>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map(({ tag }: { tag: { id: string; name: string } }) => (
                    <span
                      key={tag.id}
                      className="px-3 py-1 bg-neutral-100 text-neutral-600 text-sm rounded-full"
                    >
                      #{tag.name}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </article>

        {/* Comments Section */}
        <div className="mt-12 bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-serif text-primary-navy mb-6">
            Comments ({post.comments.length})
          </h2>

          {post.comments.length === 0 ? (
            <div className="text-center py-8 text-neutral-600">
              <p>No comments yet. Be the first to share your thoughts!</p>
            </div>
          ) : (
            <div className="space-y-6">
              {post.comments.map((comment: { 
                id: string; 
                content: string; 
                createdAt: Date; 
                author: { name: string | null; email: string } | null;
                guestName: string | null;
              }) => {
                const displayName = comment.guestName || comment.author?.name || comment.author?.email || 'Anonymous';
                const initials = displayName.charAt(0).toUpperCase();
                
                return (
                  <div key={comment.id} className="border-b border-neutral-200 pb-6 last:border-b-0">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="w-8 h-8 bg-primary-gold rounded-full flex items-center justify-center">
                        <span className="text-primary-navy font-bold text-sm">
                          {initials}
                        </span>
                      </div>
                      <div>
                        <div className="font-medium text-primary-navy">
                          {displayName}
                          {comment.guestName && (
                            <span className="text-xs text-neutral-500 ml-2">(Guest)</span>
                          )}
                        </div>
                        <time className="text-sm text-neutral-500">
                          {formatDate(comment.createdAt)}
                        </time>
                      </div>
                    </div>
                    <div className="text-neutral-700">
                      {comment.content}
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* Comment Form (only visible when signed in) */}
          <CommentForm postId={post.id} />
        </div>
      </main>

      <footer className="bg-gray-800 text-white py-12 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-serif text-xl font-bold text-amber-400 mb-4">
                Ajay&apos;s Catholic Commentary
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
                © 2024 Ajay&apos;s Catholic Commentary. All rights reserved.
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
