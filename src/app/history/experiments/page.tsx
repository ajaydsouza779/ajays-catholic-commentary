export default function ExperimentsHub() {
  const items = [
    { href: '/history/experiments/era-cards', title: 'Era Cards + Sub-timelines', desc: 'Large eras with expandable key topics.' },
    { href: '/history/experiments/swimlane', title: 'Swimlane Timeline', desc: 'Parallel lanes for events, councils, saints, heresies.' },
    { href: '/history/experiments/node-map', title: 'Node Map (Clustered Graph)', desc: 'Clickable node clusters by era with detail pane.' },
    { href: '/history/experiments/accordion', title: 'Accordion Tree + Badges', desc: 'Compact hierarchy with colored topic badges.' },
    { href: '/history/experiments/storyboard', title: 'Milestone Storyboard', desc: 'Chapter cards with next/previous navigation.' },
  ]
  return (
    <div className="py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Church History UI Experiments</h1>
        <div className="grid md:grid-cols-2 gap-4">
          {items.map((it) => (
            <a key={it.href} href={it.href} className="block p-5 rounded-lg border bg-white hover:shadow">
              <h2 className="text-xl font-semibold text-gray-800">{it.title}</h2>
              <p className="text-gray-600 text-sm mt-1">{it.desc}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
