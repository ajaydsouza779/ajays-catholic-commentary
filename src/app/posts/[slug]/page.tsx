import CommentsWrapper from "@/components/CommentsWrapper"
import Link from "next/link"
import OptimizedImage from "@/components/OptimizedImage"
import { prisma } from "@/lib/prisma"
import { formatDate } from "@/lib/utils"
import DOMPurify from "isomorphic-dompurify"
import { notFound } from "next/navigation"
import { getServerSession } from "next-auth/next"
import { authOptions } from "../../api/auth/[...nextauth]/route"

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
                id: true,
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
  const session = await getServerSession(authOptions)

  if (!post) {
    notFound()
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <Link
            href="/posts"
            className="text-amber-600 hover:text-amber-700 transition-colors"
          >
            ← Back to Posts
          </Link>
        </nav>

        <article className="bg-white rounded-lg shadow-md overflow-hidden">
          {/* Featured Image */}
          {post.featuredImage && (
            <div className="aspect-video bg-amber-100">
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

          <div className="p-8">
            {/* Categories */}
            {post.categories.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-4">
                {post.categories.map(({ category }: { category: { id: string; name: string } }) => (
                  <span
                    key={category.id}
                    className="px-3 py-1 bg-amber-100 text-amber-800 text-sm font-medium rounded-full"
                  >
                    {category.name}
                  </span>
                ))}
              </div>
            )}

            {/* Title */}
            <h1 className="text-3xl md:text-4xl font-serif text-gray-900 mb-4">
              {post.title}
            </h1>

            {/* Meta */}
            <div className="flex items-center justify-between text-gray-600 mb-6 pb-6 border-b border-gray-200">
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
              className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:text-gray-900 prose-a:text-amber-600 prose-a:no-underline hover:prose-a:underline prose-strong:text-gray-900"
              data-testid="post-content"
              dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(post.content.replace(/<\/h1>/gi, '</h2>').replace(/<h1/gi, '<h2')) }}
            />

            {/* Tags */}
            {post.tags.length > 0 && (
              <div className="mt-8 pt-6 border-t border-gray-200">
                <h3 className="text-sm font-medium text-gray-700 mb-3">Tags:</h3>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map(({ tag }: { tag: { id: string; name: string } }) => (
                    <span
                      key={tag.id}
                      className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full"
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
          <h2 className="text-2xl font-serif text-gray-900 mb-6">
            Comments ({post.comments.length})
          </h2>

          <CommentsWrapper
            comments={post.comments}
            isAdmin={session?.user?.role === 'ADMIN'}
            currentUserId={session?.user?.id}
            postId={post.id}
          />
        </div>
    </div>
  )
}
