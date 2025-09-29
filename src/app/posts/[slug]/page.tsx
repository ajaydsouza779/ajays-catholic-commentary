import Header from "@/components/Header"
import CommentForm from "./CommentForm"
import Link from "next/link"
import { prisma } from "@/lib/prisma"
import { formatDate } from "@/lib/utils"
import { notFound } from "next/navigation"

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

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = await getPost(slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-primary-cream">
      <Header />
      
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
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
              <img
                src={post.featuredImage}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>
          )}

          <div className="p-8">
            {/* Categories */}
            {post.categories.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-4">
                {post.categories.map(({ category }) => (
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
            <h1 className="text-3xl md:text-4xl font-serif text-primary-navy mb-4">
              {post.title}
            </h1>

            {/* Meta */}
            <div className="flex items-center justify-between text-neutral-600 mb-6 pb-6 border-b border-neutral-200">
              <div className="flex items-center space-x-4">
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
              className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:text-primary-navy prose-a:text-primary-navy prose-a:no-underline hover:prose-a:underline prose-strong:text-primary-navy"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Tags */}
            {post.tags.length > 0 && (
              <div className="mt-8 pt-6 border-t border-neutral-200">
                <h3 className="text-sm font-medium text-neutral-700 mb-3">Tags:</h3>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map(({ tag }) => (
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
              {post.comments.map((comment) => (
                <div key={comment.id} className="border-b border-neutral-200 pb-6 last:border-b-0">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-8 h-8 bg-primary-gold rounded-full flex items-center justify-center">
                      <span className="text-primary-navy font-bold text-sm">
                        {(comment.author.name || comment.author.email).charAt(0).toUpperCase()}
                      </span>
                    </div>
                    <div>
                      <div className="font-medium text-primary-navy">
                        {comment.author.name || comment.author.email}
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
              ))}
            </div>
          )}

          {/* Comment Form (only visible when signed in) */}
          <CommentForm postId={post.id} />
        </div>
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
