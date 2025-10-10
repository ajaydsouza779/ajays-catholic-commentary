'use client'

import { useState } from 'react'

interface TreeNode {
  id: string
  label: string
  children?: TreeNode[]
}

const DATA: TreeNode[] = [
  {
    id: 'era-apostolic',
    label: 'Apostolic (33–100)',
    children: [
      { id: 'pentecost', label: 'Pentecost (33)' },
      { id: 'peter', label: 'Peter in Rome (~42)' },
      { id: 'paul', label: 'Pauline Missions (40s–60s)' },
    ],
  },
  {
    id: 'era-patristic',
    label: 'Patristic (100–451)',
    children: [
      { id: 'nicaea', label: 'Council of Nicaea (325)' },
      { id: 'athanasius', label: 'St. Athanasius (4th c.)' },
      { id: 'chalcedon', label: 'Council of Chalcedon (451)' },
    ],
  },
  {
    id: 'era-medieval',
    label: 'Medieval (500–1500)',
    children: [
      { id: 'schism', label: 'Great Schism (1054)' },
      { id: 'benedict', label: 'Monastic Reform (6th c.)' },
      { id: 'francis', label: 'St. Francis of Assisi (13th c.)' },
    ],
  },
  {
    id: 'era-reformation',
    label: 'Reformation (1500–1700)',
    children: [
      { id: 'luther', label: 'Luther (1517)' },
      { id: 'trent', label: 'Council of Trent (1545–63)' },
      { id: 'jesuits', label: 'Jesuits (1540)' },
    ],
  },
  {
    id: 'era-modern',
    label: 'Modern (1700–Present)',
    children: [
      { id: 'v1', label: 'Vatican I (1869–70)' },
      { id: 'v2', label: 'Vatican II (1962–65)' },
      { id: 'global', label: 'Global Missions' },
    ],
  },
]

function Branch({ node, depth = 0 }: { node: TreeNode; depth?: number }) {
  const [open, setOpen] = useState(true)
  const hasChildren = node.children && node.children.length > 0
  return (
    <div className="relative pl-6">
      {/* vertical connector from parent */}
      {depth > 0 && (
        <span className="absolute left-0 top-3 h-full border-l border-gray-300" />
      )}
      <div className="relative flex items-start gap-2">
        {/* elbow connector to this node */}
        {depth > 0 && (
          <span className="absolute left-0 top-3 w-4 border-t border-gray-300" />
        )}
        <button
          onClick={() => setOpen(!open)}
          className={`mt-1 inline-flex items-center px-2 py-1 rounded text-sm border ${
            hasChildren ? 'bg-white hover:bg-gray-50' : 'bg-gray-50'
          }`}
        >
          {hasChildren && (
            <span className="mr-1 text-gray-500">{open ? '▾' : '▸'}</span>
          )}
          <span className="text-gray-800">{node.label}</span>
        </button>
      </div>
      {hasChildren && open && (
        <div className="mt-2 space-y-2">
          {node.children!.map((child) => (
            <Branch key={child.id} node={child} depth={depth + 1} />
          ))}
        </div>
      )}
    </div>
  )
}

export default function TreeFlow() {
  return (
    <div className="py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Tree Flow (Collapsible with Connectors)</h1>
        <div className="bg-white rounded-lg border p-6">
          <div className="space-y-3">
            {DATA.map((root) => (
              <Branch key={root.id} node={root} />
            ))}
          </div>
        </div>
        <p className="text-xs text-gray-500 mt-2">Nodes are collapsible; connectors show parent/child relationships. We can add badges, icons, and deep-links.</p>
      </div>
    </div>
  )
}

