"use client"

import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import Link from "next/link"
import { ArrowLeft, Users, UserPlus, Mail, Calendar, Shield } from "lucide-react"

interface User {
  id: string
  name: string
  email: string
  role: string
  emailVerified: string | null
  createdAt: string
  _count: {
    posts: number
    comments: number
  }
}

export default function UsersPage() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [users, setUsers] = useState<User[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")

  useEffect(() => {
    if (status === "loading") return
    
    if (!session || (session.user as { role?: string })?.role !== "ADMIN") {
      router.push("/")
      return
    }

    fetchUsers()
  }, [session, status, router])

  const fetchUsers = async () => {
    try {
      const response = await fetch("/api/admin/users")
      if (response.ok) {
        const data = await response.json()
        setUsers(data)
      } else {
        setError("Failed to fetch users")
      }
    } catch (error) {
      console.error("Error fetching users:", error)
      setError("Failed to fetch users")
    } finally {
      setLoading(false)
    }
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  if (status === "loading" || loading) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{backgroundColor: '#FFFBEB'}}>
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 mx-auto mb-4" style={{borderColor: '#1E3A8A'}}></div>
          <p style={{color: '#6B7280'}}>Loading users...</p>
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
            <div className="flex items-center">
              <Link
                href="/admin"
                className="mr-4 p-2 rounded-md hover:bg-gray-100 transition-colors"
              >
                <ArrowLeft className="w-5 h-5" style={{color: '#6B7280'}} />
              </Link>
              <div>
                <h1 className="text-3xl font-serif mb-2" style={{color: '#1E3A8A'}}>
                  User Management
                </h1>
                <p className="text-lg" style={{color: '#6B7280'}}>
                  Manage registered users and their roles
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-2 text-sm" style={{color: '#6B7280'}}>
              <Users className="w-4 h-4" />
              <span>{users.length} total users</span>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center">
              <div className="p-2 rounded-lg" style={{backgroundColor: '#F59E0B'}}>
                <Users className="w-6 h-6" style={{color: '#1E3A8A'}} />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium" style={{color: '#6B7280'}}>Total Users</p>
                <p className="text-2xl font-bold" style={{color: '#1E3A8A'}}>{users.length}</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center">
              <div className="p-2 rounded-lg" style={{backgroundColor: '#F59E0B'}}>
                <Shield className="w-6 h-6" style={{color: '#1E3A8A'}} />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium" style={{color: '#6B7280'}}>Admins</p>
                <p className="text-2xl font-bold" style={{color: '#1E3A8A'}}>
                  {users.filter(user => user.role === 'ADMIN').length}
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center">
              <div className="p-2 rounded-lg" style={{backgroundColor: '#F59E0B'}}>
                <UserPlus className="w-6 h-6" style={{color: '#1E3A8A'}} />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium" style={{color: '#6B7280'}}>Regular Users</p>
                <p className="text-2xl font-bold" style={{color: '#1E3A8A'}}>
                  {users.filter(user => user.role === 'USER').length}
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center">
              <div className="p-2 rounded-lg" style={{backgroundColor: '#F59E0B'}}>
                <Mail className="w-6 h-6" style={{color: '#1E3A8A'}} />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium" style={{color: '#6B7280'}}>Verified</p>
                <p className="text-2xl font-bold" style={{color: '#1E3A8A'}}>
                  {users.filter(user => user.emailVerified).length}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Users Table */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-xl font-serif" style={{color: '#1E3A8A'}}>
              All Users
            </h2>
          </div>
          
          {error && (
            <div className="p-4 bg-red-50 border-l-4 border-red-400">
              <p className="text-red-600">{error}</p>
            </div>
          )}
          
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    User
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Role
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Activity
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Joined
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {users.map((user) => (
                  <tr key={user.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10">
                          <div className="h-10 w-10 rounded-full bg-primary-gold flex items-center justify-center">
                            <span className="text-primary-navy font-bold text-sm">
                              {user.name.charAt(0).toUpperCase()}
                            </span>
                          </div>
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">
                            {user.name}
                          </div>
                          <div className="text-sm text-gray-500">
                            {user.email}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                        user.role === 'ADMIN' 
                          ? 'bg-purple-100 text-purple-800' 
                          : 'bg-blue-100 text-blue-800'
                      }`}>
                        {user.role}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      <div className="space-y-1">
                        <div>{user._count.posts} posts</div>
                        <div>{user._count.comments} comments</div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                        user.emailVerified 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {user.emailVerified ? 'Verified' : 'Pending'}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2 text-gray-400" />
                        {formatDate(user.createdAt)}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          {users.length === 0 && !error && (
            <div className="text-center py-12">
              <Users className="w-12 h-12 mx-auto mb-4 text-gray-400" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No users found</h3>
              <p className="text-gray-500">Users will appear here once they register.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
