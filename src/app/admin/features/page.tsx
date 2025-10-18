'use client';

import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';
import { FeatureToggle } from '@/lib/feature-toggles';

export default function AdminFeaturesPage() {
  const { data: session, status } = useSession();
  const [features, setFeatures] = useState<FeatureToggle[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  useEffect(() => {
    if (status === 'loading') return;
    if (!session || (session.user as any)?.role !== 'ADMIN') {
      redirect('/auth/signin');
    }
  }, [session, status]);

  useEffect(() => {
    fetchFeatures();
  }, []);

  const fetchFeatures = async () => {
    try {
      const response = await fetch('/api/admin/features');
      if (response.ok) {
        const data = await response.json();
        setFeatures(data);
      }
    } catch (error) {
      console.error('Error fetching features:', error);
    } finally {
      setLoading(false);
    }
  };

  const toggleFeature = async (featureId: string, enabled: boolean) => {
    setSaving(true);
    try {
      const response = await fetch('/api/admin/features', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ featureId, enabled })
      });

      if (response.ok) {
        setFeatures(prev => 
          prev.map(f => f.id === featureId ? { ...f, enabled } : f)
        );
        setMessage({ type: 'success', text: 'Feature updated successfully!' });
      } else {
        setMessage({ type: 'error', text: 'Failed to update feature' });
      }
    } catch (error) {
      console.error('Error updating feature:', error);
      setMessage({ type: 'error', text: 'Failed to update feature' });
    } finally {
      setSaving(false);
      setTimeout(() => setMessage(null), 3000);
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'UI': return 'bg-blue-100 text-blue-800';
      case 'FUNCTIONALITY': return 'bg-green-100 text-green-800';
      case 'EXPERIMENTAL': return 'bg-yellow-100 text-yellow-800';
      case 'ADMIN': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  if (status === 'loading' || loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-amber-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading features...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Feature Management</h1>
              <p className="text-gray-600 mt-2">
                Enable or disable features for your site. Changes take effect immediately.
              </p>
            </div>
            <div className="text-sm text-gray-500">
              {features.filter(f => f.enabled).length} of {features.length} features enabled
            </div>
          </div>

          {message && (
            <div className={`mb-6 p-4 rounded-md ${
              message.type === 'success' 
                ? 'bg-green-50 text-green-800 border border-green-200' 
                : 'bg-red-50 text-red-800 border border-red-200'
            }`}>
              {message.text}
            </div>
          )}

          <div className="space-y-4">
            {features.map((feature) => (
              <div key={feature.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-lg font-semibold text-gray-900">{feature.name}</h3>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(feature.category)}`}>
                        {feature.category}
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm">{feature.description}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className={`text-sm font-medium ${
                      feature.enabled ? 'text-green-600' : 'text-gray-500'
                    }`}>
                      {feature.enabled ? 'Enabled' : 'Disabled'}
                    </span>
                    <button
                      onClick={() => toggleFeature(feature.id, !feature.enabled)}
                      disabled={saving}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 ${
                        feature.enabled ? 'bg-amber-600' : 'bg-gray-200'
                      } ${saving ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
                    >
                      <span
                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                          feature.enabled ? 'translate-x-6' : 'translate-x-1'
                        }`}
                      />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {features.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-400 text-6xl mb-4">⚙️</div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">No Features Found</h3>
              <p className="text-gray-600">Features will appear here once they are initialized.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}



