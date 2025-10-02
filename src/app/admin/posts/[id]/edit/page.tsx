"use client"

import { useSession } from "next-auth/react"
import { useRouter, useParams } from "next/navigation"
import { useState, useEffect, useCallback } from "react"
import Link from "next/link"
import { ArrowLeft, Save, Eye } from "lucide-react"
import RichTextEditor from "@/components/RichTextEditor"

interface Category {
  id: string
  name: string
  slug: string
}

interface Tag {
  id: string
  name: string
  slug: string
}

interface Post {
  id: string
  title: string
  slug: string
  content: string
  excerpt: string
  status: string
  categories: Category[]
  tags: Tag[]
}

export default function EditPost() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const params = useParams()
  const postId = params.id as string
  
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [categories, setCategories] = useState<Category[]>([])
  const [tags, setTags] = useState<Tag[]>([])
  const [post, setPost] = useState<Post | null>(null)
  
  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    content: "",
    excerpt: "",
    status: "DRAFT",
    categoryIds: [] as string[],
    tagIds: [] as string[]
  })

  useEffect(() => {
    if (status === "loading") return
    
    if (!session || session.user?.role !== "ADMIN") {
      router.push("/")
      return
    }

    fetchData()
  }, [session, status, router, postId, fetchData])

  const fetchData = useCallback(async () => {
    try {
      const [postRes, categoriesRes, tagsRes] = await Promise.all([
        fetch(`/api/posts/${postId}`),
        fetch("/api/categories"),
        fetch("/api/tags")
      ])
      
      if (postRes.ok) {
        const postData = await postRes.json()
        setPost(postData)
        setFormData({
          title: postData.title,
          slug: postData.slug,
          content: postData.content,
          excerpt: postData.excerpt,
          status: postData.status,
          categoryIds: postData.categories.map((c: Category) => c.id),
          tagIds: postData.tags.map((t: Tag) => t.id)
        })
      }
      
      if (categoriesRes.ok) {
        const categoriesData = await categoriesRes.json()
        setCategories(categoriesData)
      }
      
      if (tagsRes.ok) {
        const tagsData = await tagsRes.json()
        setTags(tagsData)
      }
    } catch (error) {
      console.error("Error fetching data:", error)
    } finally {
      setLoading(false)
    }
  }, [postId])

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9 -]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim()
  }

  const handleTitleChange = (title: string) => {
    setFormData(prev => ({
      ...prev,
      title,
      slug: generateSlug(title)
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSaving(true)

    try {
      const response = await fetch(`/api/posts/${postId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        router.push("/admin")
      } else {
        const error = await response.json()
        alert(error.error || "Failed to update post")
      }
    } catch (error) {
      console.error("Error updating post:", error)
      alert("Failed to update post")
    } finally {
      setSaving(false)
    }
  }

  if (status === "loading" || loading) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{backgroundColor: '#FFFBEB'}}>
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 mx-auto mb-4" style={{borderColor: '#1E3A8A'}}></div>
          <p style={{color: '#6B7280'}}>Loading...</p>
        </div>
      </div>
    )
  }

  if (!session || session.user?.role !== "ADMIN") {
    return null
  }

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{backgroundColor: '#FFFBEB'}}>
        <div className="text-center">
          <p style={{color: '#6B7280'}}>Post not found</p>
          <Link href="/admin" className="text-blue-600 hover:underline">
            Back to Admin
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen" style={{backgroundColor: '#FFFBEB'}}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Link
                href="/admin"
                className="mr-4 p-2 rounded-md hover:bg-gray-100 transition-colors"
              >
                <ArrowLeft className="w-5 h-5" style={{color: '#6B7280'}} />
              </Link>
              <div>
                <h1 className="text-3xl font-serif" style={{color: '#1E3A8A'}}>
                  Edit Post
                </h1>
                <p className="text-lg" style={{color: '#6B7280'}}>
                  Update your Catholic commentary
                </p>
              </div>
            </div>
            <div className="flex space-x-2">
              <Link
                href={`/posts/${post.slug}`}
                target="_blank"
                className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors"
              >
                <Eye className="w-4 h-4 mr-2" />
                Preview
              </Link>
            </div>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="space-y-6">
              {/* Title */}
              <div>
                <label htmlFor="title" className="block text-sm font-medium mb-2" style={{color: '#1E3A8A'}}>
                  Title *
                </label>
                <input
                  type="text"
                  id="title"
                  required
                  value={formData.title}
                  onChange={(e) => handleTitleChange(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400"
                  placeholder="Enter your post title..."
                />
              </div>

              {/* Slug */}
              <div>
                <label htmlFor="slug" className="block text-sm font-medium mb-2" style={{color: '#1E3A8A'}}>
                  URL Slug *
                </label>
                <input
                  type="text"
                  id="slug"
                  required
                  value={formData.slug}
                  onChange={(e) => setFormData(prev => ({ ...prev, slug: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400"
                  placeholder="url-friendly-slug"
                />
                <p className="text-sm mt-1" style={{color: '#6B7280'}}>
                  This will be the URL: /posts/{formData.slug}
                </p>
              </div>

              {/* Excerpt */}
              <div>
                <label htmlFor="excerpt" className="block text-sm font-medium mb-2" style={{color: '#1E3A8A'}}>
                  Excerpt
                </label>
                <textarea
                  id="excerpt"
                  rows={3}
                  value={formData.excerpt}
                  onChange={(e) => setFormData(prev => ({ ...prev, excerpt: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400"
                  placeholder="Brief description of your post..."
                />
                <p className="text-sm mt-1" style={{color: '#6B7280'}}>
                  This will be shown in post previews. Leave empty to auto-generate from content.
                </p>
              </div>

              {/* Content */}
              <div>
                <label htmlFor="content" className="block text-sm font-medium mb-2" style={{color: '#1E3A8A'}}>
                  Content *
                </label>
                <RichTextEditor
                  content={formData.content}
                  onChange={(content) => setFormData(prev => ({ ...prev, content }))}
                  placeholder="Write your post content here..."
                />
                <p className="text-sm mt-1" style={{color: '#6B7280'}}>
                  Use the toolbar above to format your text with headings, bold, italic, lists, and quotes.
                </p>
              </div>

              {/* Categories */}
              <div>
                <label className="block text-sm font-medium mb-2" style={{color: '#1E3A8A'}}>
                  Categories
                </label>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <label key={category.id} className="flex items-center">
                      <input
                        type="checkbox"
                        checked={formData.categoryIds.includes(category.id)}
                        onChange={(e) => {
                          if (e.target.checked) {
                            setFormData(prev => ({
                              ...prev,
                              categoryIds: [...prev.categoryIds, category.id]
                            }))
                          } else {
                            setFormData(prev => ({
                              ...prev,
                              categoryIds: prev.categoryIds.filter(id => id !== category.id)
                            }))
                          }
                        }}
                        className="mr-2"
                      />
                      <span style={{color: '#6B7280'}}>{category.name}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Tags */}
              <div>
                <label className="block text-sm font-medium mb-2" style={{color: '#1E3A8A'}}>
                  Tags
                </label>
                <div className="space-y-2">
                  {tags.map((tag) => (
                    <label key={tag.id} className="flex items-center">
                      <input
                        type="checkbox"
                        checked={formData.tagIds.includes(tag.id)}
                        onChange={(e) => {
                          if (e.target.checked) {
                            setFormData(prev => ({
                              ...prev,
                              tagIds: [...prev.tagIds, tag.id]
                            }))
                          } else {
                            setFormData(prev => ({
                              ...prev,
                              tagIds: prev.tagIds.filter(id => id !== tag.id)
                            }))
                          }
                        }}
                        className="mr-2"
                      />
                      <span style={{color: '#6B7280'}}>{tag.name}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Status */}
              <div>
                <label htmlFor="status" className="block text-sm font-medium mb-2" style={{color: '#1E3A8A'}}>
                  Status
                </label>
                <select
                  id="status"
                  value={formData.status}
                  onChange={(e) => setFormData(prev => ({ ...prev, status: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400"
                >
                  <option value="DRAFT">Draft</option>
                  <option value="PUBLISHED">Published</option>
                </select>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex justify-end space-x-4">
            <Link
              href="/admin"
              className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors"
            >
              Cancel
            </Link>
            <button
              type="submit"
              disabled={saving}
              className="inline-flex items-center px-4 py-2 rounded-md font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              style={{backgroundColor: '#1E3A8A', color: 'white'}}
            >
              {saving ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                  Saving...
                </>
              ) : (
                <>
                  <Save className="w-4 h-4 mr-2" />
                  Update Post
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
