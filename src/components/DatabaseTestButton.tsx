"use client"

import { useState } from 'react'
import { Database, CheckCircle, XCircle, Loader2 } from 'lucide-react'

interface TestResult {
  success: boolean
  message: string
  userCount?: number
  timestamp: string
  environment?: string
}

export default function DatabaseTestButton() {
  const [isLoading, setIsLoading] = useState(false)
  const [testResult, setTestResult] = useState<TestResult | null>(null)

  const testDatabaseConnection = async () => {
    setIsLoading(true)
    setTestResult(null)
    
    try {
      const response = await fetch('/api/test-db', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })
      
      const result = await response.json()
      setTestResult(result)
      
    } catch {
      const errorResult = {
        success: false,
        message: 'Network error - unable to reach server',
        timestamp: new Date().toISOString(),
        environment: 'unknown'
      }
      setTestResult(errorResult)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <button
      onClick={testDatabaseConnection}
      disabled={isLoading}
      className={`
        flex items-center gap-2 px-3 py-2 rounded-full text-sm font-medium transition-all duration-200
        ${isLoading 
          ? 'bg-gray-400 text-white cursor-not-allowed' 
          : testResult?.success 
            ? 'bg-green-500 hover:bg-green-600 text-white' 
            : testResult?.success === false 
              ? 'bg-red-500 hover:bg-red-600 text-white'
              : 'bg-blue-500 hover:bg-blue-600 text-white'
        }
      `}
      title="Database Status"
    >
      {isLoading ? (
        <Loader2 className="w-4 h-4 animate-spin" />
      ) : testResult?.success ? (
        <CheckCircle className="w-4 h-4" />
      ) : testResult?.success === false ? (
        <XCircle className="w-4 h-4" />
      ) : (
        <Database className="w-4 h-4" />
      )}
      <span className="hidden sm:inline">
        {isLoading ? 'Testing...' : 'DB Status'}
      </span>
    </button>
  )
}
