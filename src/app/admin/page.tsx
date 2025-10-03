"use client"

import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import Link from "next/link"
import { Plus, Edit, Eye, Trash2, Calendar, User, Users, BarChart3, BookOpen, History, FileText, Settings } from "lucide-react"

interface Post {
  id: string
  title: string
  slug: string
  status: string
  createdAt: string
  updatedAt: string
  author: {
    name: string
  }
}

interface Analytics {
  totalPosts: number
  publishedPosts: number
  draftPosts: number
  totalUsers: number
  totalComments: number
  totalPopes: number
  totalDivisions: number
  totalManuscripts: number
}

export default function AdminDashboard() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [posts, setPosts] = useState<Post[]>([])
  const [analytics, setAnalytics] = useState<Analytics | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (status === "loading") return
    
    if (!session || (session.user as { role?: string })?.role !== "ADMIN") {
      router.push("/")
      return
    }

    fetchData()
  }, [session, status, router])

  const fetchData = async () => {
    try {
      const [postsRes, analyticsRes] = await Promise.all([
        fetch("/api/posts"),
        fetch("/api/admin/analytics")
      ])
      
      if (postsRes.ok) {
        const postsData = await postsRes.json()
        setPosts(postsData)
      }
      
      if (analyticsRes.ok) {
        const analyticsData = await analyticsRes.json()
        setAnalytics(analyticsData)
      }
    } catch (error) {
      console.error("Error fetching data:", error)
    } finally {
      setLoading(false)
    }
  }

  const handleDeletePost = async (postId: string) => {
    if (!confirm("Are you sure you want to delete this post? This action cannot be undone.")) {
      return
    }

    try {
      const response = await fetch(`/api/posts/${postId}`, {
        method: "DELETE",
      })

      if (response.ok) {
        // Refresh the posts list
        await fetchData()
      } else {
        const error = await response.json()
        alert(error.error || "Failed to delete post")
      }
    } catch (error) {
      console.error("Error deleting post:", error)
      alert("Failed to delete post")
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

  if (!session || (session.user as { role?: string })?.role !== "ADMIN") {
    return null
  }

  return (
    <div className="min-h-screen" style={{backgroundColor: '#FFFBEB'}}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-serif mb-2" style={{color: '#1E3A8A'}} data-testid="admin-title">
                Admin Dashboard
              </h1>
              <p className="text-lg" style={{color: '#6B7280'}}>
                Welcome back, {session.user?.name || session.user?.email}
              </p>
            </div>
            <div className="flex space-x-3">
              <Link
                href="/admin/users"
                className="inline-flex items-center px-4 py-2 rounded-md font-medium transition-colors border"
                style={{borderColor: '#1E3A8A', color: '#1E3A8A'}}
              >
                <Users className="w-4 h-4 mr-2" />
                Manage Users
              </Link>
              <Link
                href="/admin/posts/new"
                className="inline-flex items-center px-4 py-2 rounded-md font-medium transition-colors"
                style={{backgroundColor: '#1E3A8A', color: 'white'}}
              >
                <Plus className="w-4 h-4 mr-2" />
                New Post
              </Link>
            </div>
          </div>
        </div>

        {/* Analytics Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center">
              <div className="p-2 rounded-lg" style={{backgroundColor: '#F59E0B'}}>
                <BookOpen className="w-6 h-6" style={{color: '#1E3A8A'}} />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium" style={{color: '#6B7280'}}>Total Posts</p>
                <p className="text-2xl font-bold" style={{color: '#1E3A8A'}}>
                  {analytics?.totalPosts || posts.length}
                </p>
                <p className="text-xs" style={{color: '#6B7280'}}>
                  {analytics?.publishedPosts || posts.filter(p => p.status === 'PUBLISHED').length} published
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center">
              <div className="p-2 rounded-lg" style={{backgroundColor: '#F59E0B'}}>
                <Users className="w-6 h-6" style={{color: '#1E3A8A'}} />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium" style={{color: '#6B7280'}}>Users</p>
                <p className="text-2xl font-bold" style={{color: '#1E3A8A'}}>
                  {analytics?.totalUsers || 0}
                </p>
                <p className="text-xs" style={{color: '#6B7280'}}>
                  {analytics?.totalComments || 0} comments
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center">
              <div className="p-2 rounded-lg" style={{backgroundColor: '#F59E0B'}}>
                <History className="w-6 h-6" style={{color: '#1E3A8A'}} />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium" style={{color: '#6B7280'}}>History Content</p>
                <p className="text-2xl font-bold" style={{color: '#1E3A8A'}}>
                  {(analytics?.totalPopes || 0) + (analytics?.totalDivisions || 0)}
                </p>
                <p className="text-xs" style={{color: '#6B7280'}}>
                  {analytics?.totalPopes || 0} popes, {analytics?.totalDivisions || 0} divisions
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center">
              <div className="p-2 rounded-lg" style={{backgroundColor: '#F59E0B'}}>
                <FileText className="w-6 h-6" style={{color: '#1E3A8A'}} />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium" style={{color: '#6B7280'}}>Bible History</p>
                <p className="text-2xl font-bold" style={{color: '#1E3A8A'}}>
                  {analytics?.totalManuscripts || 0}
                </p>
                <p className="text-xs" style={{color: '#6B7280'}}>
                  manuscripts & translations
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Link
            href="/admin/posts/new"
            className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
          >
            <div className="flex items-center">
              <div className="p-2 rounded-lg bg-green-100">
                <Plus className="w-6 h-6 text-green-600" />
              </div>
              <div className="ml-4">
                <h3 className="font-semibold text-gray-900">New Post</h3>
                <p className="text-sm text-gray-600">Create a new blog post</p>
              </div>
            </div>
          </Link>

          <Link
            href="/admin/users"
            className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
          >
            <div className="flex items-center">
              <div className="p-2 rounded-lg bg-blue-100">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <div className="ml-4">
                <h3 className="font-semibold text-gray-900">Manage Users</h3>
                <p className="text-sm text-gray-600">View and manage users</p>
              </div>
            </div>
          </Link>

          <Link
            href="/history/papal-timeline"
            className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
          >
            <div className="flex items-center">
              <div className="p-2 rounded-lg bg-purple-100">
                <History className="w-6 h-6 text-purple-600" />
              </div>
              <div className="ml-4">
                <h3 className="font-semibold text-gray-900">Papal Timeline</h3>
                <p className="text-sm text-gray-600">Manage papal history</p>
              </div>
            </div>
          </Link>

          <Link
            href="/admin/settings"
            className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
          >
            <div className="flex items-center">
              <div className="p-2 rounded-lg bg-gray-100">
                <Settings className="w-6 h-6 text-gray-600" />
              </div>
              <div className="ml-4">
                <h3 className="font-semibold text-gray-900">Settings</h3>
                <p className="text-sm text-gray-600">Site configuration</p>
              </div>
            </div>
          </Link>
        </div>

        {/* Posts Table */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden" data-testid="posts-list">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-xl font-serif" style={{color: '#1E3A8A'}}>
              Recent Posts
            </h2>
          </div>
          
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Title
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Author
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Created
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {posts.map((post) => (
                  <tr key={post.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">
                        {post.title}
                      </div>
                      <div className="text-sm text-gray-500">
                        /{post.slug}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                        post.status === 'PUBLISHED' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {post.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      <div className="flex items-center">
                        <User className="w-4 h-4 mr-2 text-gray-400" />
                        {post.author.name}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {new Date(post.createdAt).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <div className="flex space-x-2">
                        <Link
                          href={`/posts/${post.slug}`}
                          className="text-blue-600 hover:text-blue-900"
                          title="View Post"
                        >
                          <Eye className="w-4 h-4" />
                        </Link>
                        <Link
                          href={`/admin/posts/${post.id}/edit`}
                          className="text-yellow-600 hover:text-yellow-900"
                          title="Edit Post"
                        >
                          <Edit className="w-4 h-4" />
                        </Link>
                        <button
                          onClick={() => handleDeletePost(post.id)}
                          className="text-red-600 hover:text-red-900"
                          title="Delete Post"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          {posts.length === 0 && (
            <div className="text-center py-12">
              <Calendar className="w-12 h-12 mx-auto mb-4 text-gray-400" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No posts yet</h3>
              <p className="text-gray-500 mb-4">Get started by creating your first post.</p>
              <Link
                href="/admin/posts/new"
                className="inline-flex items-center px-4 py-2 rounded-md font-medium transition-colors"
                style={{backgroundColor: '#1E3A8A', color: 'white'}}
              >
                <Plus className="w-4 h-4 mr-2" />
                Create Your First Post
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
