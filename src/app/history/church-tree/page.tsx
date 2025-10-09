'use client'

import { useMemo, useState } from 'react'
import { ShieldCheck, AlertTriangle, GitBranch, Landmark, Cross, Sparkles } from 'lucide-react'

type NodeType = 'church' | 'council' | 'heresy' | 'division' | 'event' | 'saint' | 'movement'

interface TreeNode {
  id: string
  label: string
  summary?: string
  year?: string
  type?: NodeType
  children?: TreeNode[]
}

const TYPE_BADGE: Record<NodeType, { text: string; cls: string; icon?: any; pad?: string }> = {
  church:   { text: 'Church',    cls: 'bg-green-100 text-green-800', icon: Landmark, pad: '' },
  council:  { text: 'Council',   cls: 'bg-amber-100 text-amber-800', icon: ShieldCheck, pad: 'pl-4' },
  heresy:   { text: 'Heresy',    cls: 'bg-red-100 text-red-800', icon: AlertTriangle, pad: 'pl-8' },
  division: { text: 'Division',  cls: 'bg-gray-200 text-gray-800', icon: GitBranch, pad: 'pl-6' },
  event:    { text: 'Event',     cls: 'bg-blue-100 text-blue-800', icon: Sparkles, pad: '' },
  saint:    { text: 'Saint',     cls: 'bg-emerald-100 text-emerald-800', icon: Cross, pad: '' },
  movement: { text: 'Movement',  cls: 'bg-indigo-100 text-indigo-800', icon: Sparkles, pad: '' },
}

const TREE: TreeNode[] = [
  {
    id: 'trunk',
    label: 'Catholic Church — One, Holy, Catholic, Apostolic',
    type: 'church',
    summary: 'Single trunk: continuity from Christ and the Apostles to today.',
    children: [
      {
        id: 'apostolic',
        label: 'Apostolic Era (33–100)',
        summary: 'Birth of the Church; missionary expansion; foundational doctrine.',
        children: [
          { id: 'pentecost', label: 'Pentecost (33)', summary: 'Descent of the Holy Spirit; birth of the Church.', year: '33', type: 'event' },
          { id: 'jerusalem', label: 'Council of Jerusalem (c. 49)', summary: 'Resolved Gentile admission; unity preserved.', year: 'c. 49', type: 'council' },
          { id: 'peter-rome', label: 'Peter in Rome (~42)', summary: 'Primacy of the Roman See established.', year: '~42', type: 'event' },
          { id: 'pauline', label: 'Pauline Missions (40s–60s)', summary: 'Gospel spreads across the Mediterranean.', year: '40s–60s', type: 'event' },
        ],
      },
      {
        id: 'patristic',
        label: 'Patristic Era (100–451)',
        summary: 'Church Fathers and ecumenical councils clarify doctrine.',
        children: [
          { id: 'arianism', label: 'Arianism', summary: 'Denied the Son’s full divinity; grave doctrinal error.', type: 'heresy' },
          { id: 'nicaea', label: 'Council of Nicaea (325)', summary: 'Affirmed divinity of the Son; issued Nicene Creed.', year: '325', type: 'council' },
          { id: 'athanasius', label: 'St. Athanasius', summary: 'Defender of Nicene orthodoxy against Arianism.', type: 'saint' },
          { id: 'chalcedon', label: 'Council of Chalcedon (451)', summary: 'Defined two natures of Christ in one Person.', year: '451', type: 'council' },
        ],
      },
      {
        id: 'medieval',
        label: 'Medieval Era (500–1500)',
        summary: 'Monasticism, evangelization, scholasticism, East–West relations.',
        children: [
          { id: 'benedict', label: 'Rule of St. Benedict (~530)', summary: 'Framework for Western monastic life.', year: '~530', type: 'movement' },
          { id: 'schism', label: 'Great Schism (1054)', summary: 'Separation of Eastern and Western Churches.', year: '1054', type: 'division' },
          { id: 'francis', label: 'St. Francis & Mendicants', summary: 'Renewal through poverty and preaching.', year: '13th c.', type: 'saint' },
          { id: 'scholastic', label: 'Scholastic Theology', summary: 'Synthesis of faith and reason (Aquinas, Bonaventure).', type: 'movement' },
        ],
      },
      {
        id: 'reformation',
        label: 'Reformation & Renewal (1500–1700)',
        summary: 'Reformation and Catholic renewal; global missions.',
        children: [
          { id: 'luther', label: 'Luther (1517)', summary: 'Sparked separations from the Catholic Church.', year: '1517', type: 'division' },
          { id: 'trent', label: 'Council of Trent (1545–63)', summary: 'Clarified doctrine; reformed discipline.', year: '1545–63', type: 'council' },
          { id: 'jesuits', label: 'Jesuits Founded (1540)', summary: 'Education, missions, and reform.', year: '1540', type: 'movement' },
          { id: 'missions', label: 'Global Missions', summary: 'Evangelization across continents.', type: 'movement' },
        ],
      },
      {
        id: 'modern',
        label: 'Modern Era (1700–Present)',
        summary: 'Councils, social doctrine, global Church.',
        children: [
          { id: 'vatican1', label: 'Vatican I (1869–70)', summary: 'Papal primacy and infallibility.', year: '1869–70', type: 'council' },
          { id: 'vatican2', label: 'Vatican II (1962–65)', summary: 'Renewal of liturgy; ecumenism; laity.', year: '1962–65', type: 'council' },
          { id: 'ecumenism', label: 'Ecumenical Dialogue', summary: 'Pursuit of Christian unity.', type: 'movement' },
          { id: 'social', label: 'Catholic Social Teaching', summary: 'Human dignity, solidarity, subsidiarity, common good.', type: 'movement' },
        ],
      },
    ],
  },
]

function useFlatten(nodes: TreeNode[]) {
  return useMemo(() => {
    const map = new Map<string, TreeNode>()
    const walk = (n: TreeNode) => {
      map.set(n.id, n)
      n.children?.forEach(walk)
    }
    nodes.forEach(walk)
    return map
  }, [nodes])
}

function TypeBadge({ type }: { type?: NodeType }) {
  if (!type) return null
  const meta = TYPE_BADGE[type]
  const Icon = meta.icon
  return (
    <span className={`inline-flex items-center gap-1 px-2 py-0.5 text-[10px] font-medium rounded-full ${meta.cls}`}>
      {Icon && <Icon className="w-3 h-3" />} {meta.text}
    </span>
  )
}

function filterTree(nodes: TreeNode[], show: Record<NodeType, boolean>): TreeNode[] {
  const accept = (n: TreeNode): boolean => {
    if (!n.type) return true // keep structural nodes
    return show[n.type]
  }
  const walk = (n: TreeNode): TreeNode | null => {
    const kids = n.children?.map(c => walk(c)).filter(Boolean) as TreeNode[] | undefined
    const selfOk = accept(n)
    const hasKids = kids && kids.length > 0
    if (selfOk || hasKids) {
      return { ...n, children: kids }
    }
    return null
  }
  return nodes.map(walk).filter(Boolean) as TreeNode[]
}

function Branch({ node, depth = 0, onSelect }: { node: TreeNode; depth?: number; onSelect: (n: TreeNode) => void }) {
  const [open, setOpen] = useState(true)
  const hasChildren = node.children && node.children.length > 0
  const type = node.type
  const meta = type ? TYPE_BADGE[type] : undefined
  const borderCls = type === 'division' ? 'border-red-300' : type === 'heresy' ? 'border-red-400' : type === 'council' ? 'border-amber-300' : 'border-gray-300'
  const padType = meta?.pad ?? ''
  return (
    <div className={`relative pl-6 ${padType}`}>
      {depth > 0 && (
        <span className={`absolute left-0 top-3 h-full border-l ${borderCls}`} />
      )}
      <div className="relative flex items-start gap-2">
        {depth > 0 && (
          <span className={`absolute left-0 top-3 w-4 border-t ${borderCls}`} />
        )}
        <button
          onClick={() => (hasChildren ? setOpen(!open) : onSelect(node))}
          className={`mt-1 inline-flex items-center px-2 py-1 rounded text-sm border ${
            hasChildren ? 'bg-white hover:bg-gray-50' : type==='division' ? 'bg-red-50' : type==='heresy' ? 'bg-red-50' : type==='council' ? 'bg-amber-50' : 'bg-gray-50 hover:bg-gray-100'
          }`}
        >
          {hasChildren && (
            <span className="mr-1 text-gray-500">{open ? '▾' : '▸'}</span>
          )}
          <span className="text-gray-800">{node.label}</span>
          <span className="ml-2"><TypeBadge type={type} /></span>
        </button>
      </div>
      {node.summary && (
        <div className="ml-6 mt-1 text-[12px] text-gray-600">
          {node.summary}
          <button className="ml-2 text-amber-700 underline" onClick={()=>onSelect(node)}>More</button>
        </div>
      )}
      {hasChildren && open && (
        <div className="mt-2 space-y-2">
          {node.children!.map((child) => (
            <Branch key={child.id} node={child} depth={depth + 1} onSelect={onSelect} />
          ))}
        </div>
      )}
    </div>
  )
}

export default function ChurchHistoryTree() {
  const [selectedId, setSelectedId] = useState<string | null>(null)
  const [show, setShow] = useState<Record<NodeType, boolean>>({
    church: true,
    council: true,
    heresy: true,
    division: true,
    event: true,
    saint: true,
    movement: true,
  })
  const flat = useFlatten(TREE)
  const selected = selectedId ? flat.get(selectedId) ?? null : null
  const filteredTree = useMemo(() => filterTree(TREE, show), [show])

  return (
    <div className="py-8">
      {/* Development Progress Notification */}
      <div className="container mx-auto px-4 mb-6">
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse"></div>
            <span className="text-amber-800 font-medium text-sm">Development in Progress</span>
          </div>
          <p className="text-amber-700 text-sm mt-1">
            This Church History Tree is under active development. Content, filters, and interactions are being refined.
          </p>
        </div>
      </div>
      
      <div className="container mx-auto px-4 grid lg:grid-cols-4 gap-6">
        {/* Left Sidebar Filters */}
        <div className="bg-white rounded-lg border p-4 h-fit">
          <h3 className="text-sm font-semibold text-gray-800 mb-3">Filter by Type</h3>
          <div className="space-y-2">
            {(Object.keys(TYPE_BADGE) as Array<NodeType>).map((t) => (
              <label key={t} className="flex items-center gap-2 text-xs cursor-pointer hover:bg-gray-50 p-1 rounded">
                <input
                  type="checkbox"
                  checked={show[t]}
                  onChange={(e)=>setShow({ ...show, [t]: e.target.checked })}
                  className="rounded"
                />
                <span className={`px-2 py-1 rounded text-[10px] font-medium ${TYPE_BADGE[t].cls}`}>
                  {TYPE_BADGE[t].text}
                </span>
              </label>
            ))}
          </div>
          <div className="mt-4 pt-3 border-t border-gray-200">
            <button 
              onClick={() => setShow({ church: true, council: true, heresy: true, division: true, event: true, saint: true, movement: true })}
              className="text-xs text-blue-600 hover:text-blue-800"
            >
              Show All
            </button>
            <span className="mx-2 text-gray-300">|</span>
            <button 
              onClick={() => setShow({ church: true, council: true, heresy: false, division: false, event: false, saint: false, movement: false })}
              className="text-xs text-blue-600 hover:text-blue-800"
            >
              Core Only
            </button>
          </div>
        </div>

        {/* Main Tree Content */}
        <div className="lg:col-span-2 bg-white rounded-lg border p-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-2">Church History Tree</h1>
          <p className="text-gray-600 text-sm mb-4">Trunk = Catholic Church; Councils = strengths; Heresies = dangers; Divisions = separated branches.</p>
          <div className="space-y-3">
            {filteredTree.map((root) => (
              <Branch key={root.id} node={root} onSelect={(n)=>setSelectedId(n.id)} />
            ))}
          </div>
        </div>

        {/* Right Details Panel */}
        <div className="bg-white rounded-lg border p-6">
          {selected ? (
            <div className="space-y-2 text-gray-700">
              <div className="text-lg font-semibold">{selected.label}</div>
              {selected.year && <div className="text-sm">Year: {selected.year}</div>}
              {selected.summary && <div className="text-sm">{selected.summary}</div>}
              <div className="pt-2 text-sm text-gray-600">(Detailed view) Add sources, related popes, deeper context, and links.</div>
            </div>
          ) : (
            <p className="text-gray-500 text-sm">Click "More" on any item to view details here.</p>
          )}
        </div>
      </div>
    </div>
  )
}
