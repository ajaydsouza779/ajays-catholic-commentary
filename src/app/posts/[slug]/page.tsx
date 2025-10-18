import CommentsWrapper from "@/components/CommentsWrapper"
import Link from "next/link"
import OptimizedImage from "@/components/OptimizedImage"
import { prisma } from "@/lib/prisma"
import { formatDate } from "@/lib/utils"
import DOMPurify from "isomorphic-dompurify"
import { notFound } from "next/navigation"
import { getServerSession } from "next-auth/next"
import { authOptions } from "../../api/auth/[...nextauth]/route"
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
          select: {
            id: true,
            content: true,
            createdAt: true,
            author: {
              select: {
                id: true,
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
    title: post.title,
    description: excerpt,
    keywords: [
      categories,
      ...post.tags.map(t => t.tag.name),
      "Catholic",
      "Christianity",
      "Faith",
      "Scripture",
      "Spiritual Reflection"
    ],
    authors: [{ name: post.author.name || post.author.email }],
    openGraph: {
      title: post.title,
      description: excerpt,
      type: "article",
      url: `https://ajaycatholic.com/posts/${post.slug}`,
      publishedTime: post.publishedAt?.toISOString(),
      authors: [post.author.name || post.author.email],
      tags: post.tags.map(t => t.tag.name),
      images: post.featuredImage ? [
        {
          url: post.featuredImage,
          width: 1200,
          height: 630,
          alt: post.title,
        }
      ] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: excerpt,
      images: post.featuredImage ? [post.featuredImage] : undefined,
    },
    alternates: {
      canonical: `/posts/${post.slug}`,
    },
  }
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = await getPost(slug)
  const session = await getServerSession(authOptions)

  if (!post) {
    notFound()
  }

  // Structured data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.excerpt || post.content.replace(/<[^>]*>/g, '').substring(0, 160),
    "image": post.featuredImage,
    "author": {
      "@type": "Person",
      "name": post.author.name || post.author.email
    },
    "publisher": {
      "@type": "Organization",
      "name": "Ajay's Catholic Commentary",
      "logo": {
        "@type": "ImageObject",
        "url": "https://ajaycatholic.com/logo.png"
      }
    },
    "datePublished": post.publishedAt?.toISOString(),
    "dateModified": post.updatedAt?.toISOString(),
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://ajaycatholic.com/posts/${post.slug}`
    },
    "keywords": [
      ...post.categories.map(c => c.category.name),
      ...post.tags.map(t => t.tag.name)
    ],
    "articleSection": post.categories.map(c => c.category.name).join(', '),
    "wordCount": post.content.replace(/<[^>]*>/g, '').split(' ').length
  }

  // Breadcrumb structured data
  const breadcrumbStructuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://ajaycatholic.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Posts",
        "item": "https://ajaycatholic.com/posts"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": post.title,
        "item": `https://ajaycatholic.com/posts/${post.slug}`
      }
    ]
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }}
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-8">
        {/* Breadcrumb */}
        <nav className="mb-4 sm:mb-8">
          <Link
            href="/posts"
            className="text-amber-600 hover:text-amber-700 transition-colors text-sm sm:text-base"
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

          <div className="p-4 sm:p-6 lg:p-8">
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
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-serif text-gray-900 mb-4 leading-tight">
              {post.title}
            </h1>

            {/* Meta */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-gray-600 mb-6 pb-6 border-b border-gray-200 gap-2 sm:gap-0">
              <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-1 sm:space-y-0">
                <span className="text-sm sm:text-base">By {post.author.name || post.author.email}</span>
                <span className="hidden sm:inline">•</span>
                <time dateTime={post.publishedAt?.toISOString()} className="text-sm sm:text-base">
                  {post.publishedAt && formatDate(post.publishedAt)}
                </time>
              </div>
              <div className="text-sm">
                {post.comments.length} comment{post.comments.length !== 1 ? 's' : ''}
              </div>
            </div>

            {/* Content */}
            <div 
              className="prose prose-sm sm:prose-base lg:prose-lg max-w-none prose-headings:font-serif prose-headings:text-gray-900 prose-a:text-amber-600 prose-a:no-underline hover:prose-a:underline prose-strong:text-gray-900 prose-p:leading-relaxed prose-p:text-gray-700"
              data-testid="post-content"
              dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(post.content.replace(/<\/h1>/gi, '</h2>').replace(/<h1/gi, '<h2')) }}
            />

            {/* Tags */}
            {post.tags.length > 0 && (
              <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-gray-200">
                <h3 className="text-sm font-medium text-gray-700 mb-3">Tags:</h3>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map(({ tag }: { tag: { id: string; name: string } }) => (
                    <span
                      key={tag.id}
                      className="px-2 sm:px-3 py-1 bg-gray-100 text-gray-600 text-xs sm:text-sm rounded-full"
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
        <div className="mt-8 sm:mt-12 bg-white rounded-lg shadow-md p-4 sm:p-6 lg:p-8">
          <h2 className="text-xl sm:text-2xl font-serif text-gray-900 mb-4 sm:mb-6">
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
    </>
  )
}
