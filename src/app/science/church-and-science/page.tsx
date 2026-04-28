'use client'

import Link from 'next/link'
import {
  Landmark,
  Telescope,
  BookOpen,
  Lightbulb,
  Microscope,
  Atom,
  Sprout,
  Scroll,
  Pickaxe,
  Users,
  Heart,
  AlertTriangle,
  ArrowRight,
  Calendar,
  Quote,
  Sparkles,
} from 'lucide-react'

type Card = {
  href: string
  title: string
  blurb: string
  status: 'rich' | 'planned'
  icon: React.ComponentType<{ className?: string }>
  accent: string
}

export default function ChurchAndSciencePage() {
  const cards: Card[] = [
    {
      href: '/science/faith-and-reason',
      title: 'Faith & Reason',
      blurb:
        'The philosophical and theological foundations &mdash; Augustine, Aquinas, Anselm, Vatican I, Fides et Ratio. Why the Church teaches that faith and reason cannot truly contradict each other.',
      status: 'rich',
      icon: Lightbulb,
      accent: 'amber',
    },
    {
      href: '/science/galileo',
      title: 'The Galileo Affair',
      blurb:
        'The most famous and most misunderstood episode in the science-religion story. The man, the controversy, the trial, and the modern rehabilitation &mdash; with all the human drama in between.',
      status: 'rich',
      icon: Telescope,
      accent: 'indigo',
    },
    {
      href: '/science/evolution',
      title: 'Evolution & Creation',
      blurb:
        'Why a Belgian Catholic priest proposed the Big Bang and Catholics never had a Scopes Trial. The Church’s actual teaching on evolution, the human soul, Adam and Eve, and Genesis.',
      status: 'rich',
      icon: Sprout,
      accent: 'emerald',
    },
    {
      href: '/science/catholic-scientists',
      title: 'Catholic Scientists',
      blurb:
        'From Copernicus and Mendel to Lemaître and over thirty craters on the moon named for Jesuit astronomers. The biographies of the priests, monks, and lay Catholics who built modern science.',
      status: 'rich',
      icon: Users,
      accent: 'rose',
    },
    {
      href: '/science/big-bang',
      title: 'Big Bang & Cosmology',
      blurb:
        'Fr. Georges Lemaître’s primeval atom, the fine-tuning of the universe, and what cosmology can and cannot tell us about creation ex nihilo.',
      status: 'planned',
      icon: Atom,
      accent: 'purple',
    },
    {
      href: '/science/reading-genesis',
      title: 'Reading Genesis',
      blurb:
        'The four senses of Scripture, ancient Near Eastern context, and why the Church Fathers warned against reading Genesis 1–3 as a science textbook &mdash; long before Darwin.',
      status: 'planned',
      icon: Scroll,
      accent: 'sky',
    },
    {
      href: '/science/archaeology',
      title: 'Archaeology & Bible',
      blurb:
        'The Pilate inscription, the Dead Sea Scrolls, the Pool of Siloam, and dozens of digs that have confirmed people, places, and customs named in Scripture.',
      status: 'planned',
      icon: Pickaxe,
      accent: 'orange',
    },
    {
      href: '/science/saints-on-science',
      title: 'Saints on Science',
      blurb:
        'St. Albert the Great, the patron of natural sciences. St. Hildegard’s medicine. St. John Paul II on evolution. The saints have always taken nature seriously.',
      status: 'planned',
      icon: Heart,
      accent: 'red',
    },
    {
      href: '/science/conflicts-and-myths',
      title: 'Conflicts & Myths',
      blurb:
        'The flat-earth myth, the dark-ages myth, the burning-of-the-library-of-Alexandria myth, the Hypatia myth. What John William Draper and Andrew Dickson White got wrong &mdash; and why it stuck.',
      status: 'planned',
      icon: AlertTriangle,
      accent: 'amber',
    },
  ]

  const milestones = [
    { year: 'c. 529', label: 'St. Benedict’s monasteries become hubs of learning, copying classical and scientific texts.' },
    { year: '1088', label: 'University of Bologna founded under Church charter &mdash; the first European university.' },
    { year: '1215', label: 'Fourth Lateran Council promotes the medieval university system across Christendom.' },
    { year: '1543', label: 'Copernicus publishes De revolutionibus, dedicated to Pope Paul III.' },
    { year: '1582', label: 'Pope Gregory XIII reforms the calendar based on Jesuit astronomer Christopher Clavius’ calculations.' },
    { year: '1789', label: 'Vatican Observatory traces its roots to the Specola Vaticana under Pope Leo XIII’s revival in 1891.' },
    { year: '1870', label: 'Vatican I, Dei Filius: faith and reason cannot truly contradict each other.' },
    { year: '1927', label: 'Fr. Georges Lemaître proposes the expanding universe (the Big Bang).' },
    { year: '1936', label: 'Pius XI re-founds the Pontifical Academy of Sciences with both Catholic and non-Catholic members.' },
    { year: '1996', label: 'St. John Paul II: evolution is "more than a hypothesis."' },
    { year: '1998', label: 'St. John Paul II issues Fides et Ratio &mdash; "two wings on which the human spirit rises."' },
    { year: '2018', label: 'Vatican Observatory celebrates its 125th refoundation; runs an advanced telescope on Mt. Graham, Arizona.' },
  ]

  const accentMap: Record<string, { bg: string; text: string; border: string; hoverBorder: string }> = {
    amber: { bg: 'bg-amber-50', text: 'text-amber-700', border: 'border-amber-200', hoverBorder: 'hover:border-amber-400' },
    indigo: { bg: 'bg-indigo-50', text: 'text-indigo-700', border: 'border-indigo-200', hoverBorder: 'hover:border-indigo-400' },
    emerald: { bg: 'bg-emerald-50', text: 'text-emerald-700', border: 'border-emerald-200', hoverBorder: 'hover:border-emerald-400' },
    rose: { bg: 'bg-rose-50', text: 'text-rose-700', border: 'border-rose-200', hoverBorder: 'hover:border-rose-400' },
    purple: { bg: 'bg-purple-50', text: 'text-purple-700', border: 'border-purple-200', hoverBorder: 'hover:border-purple-400' },
    sky: { bg: 'bg-sky-50', text: 'text-sky-700', border: 'border-sky-200', hoverBorder: 'hover:border-sky-400' },
    orange: { bg: 'bg-orange-50', text: 'text-orange-700', border: 'border-orange-200', hoverBorder: 'hover:border-orange-400' },
    red: { bg: 'bg-red-50', text: 'text-red-700', border: 'border-red-200', hoverBorder: 'hover:border-red-400' },
  }

  return (
    <div className="py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Church &amp; Science</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The relationship between the Catholic Church and science is far richer &mdash; and far more
            positive &mdash; than the popular &ldquo;warfare&rdquo; narrative suggests. From founding the
            university system to giving us the Big Bang theory, the Church has been one of the greatest
            patrons of scientific inquiry in Western history.
          </p>
        </div>

        {/* Section Index intro */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-10">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
              <BookOpen className="w-6 h-6 text-amber-600" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-2">An Index to This Section</h2>
              <p className="text-gray-600">
                This page is a hub. The science section contains both deeply-researched articles and
                shorter explainers &mdash; each focused on one piece of the bigger picture. Use the cards
                below as a guide to what you&apos;ll find, and follow your curiosity.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <div className="bg-emerald-50 rounded-lg p-4 border border-emerald-200">
              <div className="flex items-center gap-2 mb-1">
                <Sparkles className="w-4 h-4 text-emerald-700" />
                <span className="font-semibold text-emerald-900">In-Depth Articles</span>
              </div>
              <p className="text-emerald-800">
                Faith &amp; Reason, Galileo, Evolution, Catholic Scientists &mdash; full multi-tab
                explorations with sources.
              </p>
            </div>
            <div className="bg-sky-50 rounded-lg p-4 border border-sky-200">
              <div className="flex items-center gap-2 mb-1">
                <Microscope className="w-4 h-4 text-sky-700" />
                <span className="font-semibold text-sky-900">Coming Soon</span>
              </div>
              <p className="text-sky-800">
                Big Bang, Reading Genesis, Archaeology, Saints on Science, Conflicts &amp; Myths &mdash;
                being researched and expanded.
              </p>
            </div>
            <div className="bg-amber-50 rounded-lg p-4 border border-amber-200">
              <div className="flex items-center gap-2 mb-1">
                <Lightbulb className="w-4 h-4 text-amber-700" />
                <span className="font-semibold text-amber-900">How to Read This Section</span>
              </div>
              <p className="text-amber-800">
                Start with <em>Faith &amp; Reason</em> for the framework, then dive into the historical
                cases that interest you most.
              </p>
            </div>
          </div>
        </div>

        {/* The Big Picture */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">The Big Picture in Five Paragraphs</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              <strong>The conflict thesis is bad history.</strong> The popular idea of a perpetual
              &ldquo;war between science and religion&rdquo; comes mainly from two 19th-century books:
              John William Draper&apos;s <em>History of the Conflict Between Religion and Science</em>{' '}
              (1874) and Andrew Dickson White&apos;s <em>A History of the Warfare of Science with
              Theology in Christendom</em> (1896). Almost every concrete claim in those books has since
              been refuted by professional historians of science. Yet the narrative survives.
            </p>
            <p>
              <strong>The Church built the institutions where science grew up.</strong> The
              cathedral schools and monasteries preserved classical learning through the early
              medieval period. The university &mdash; Bologna, Paris, Oxford, Cambridge, Salamanca
              &mdash; is a Catholic invention. The first scientific societies, the first observatories,
              the first systematic studies of optics, mechanics, and astronomy all happened inside or
              with the active sponsorship of the Catholic intellectual world.
            </p>
            <p>
              <strong>The protagonists were often clerics.</strong> Copernicus was a canon. Mendel was
              an Augustinian abbot. Lema&icirc;tre was a diocesan priest. Albertus Magnus, Roger
              Bacon, Nicolas Steno, Athanasius Kircher, Christopher Clavius, Angelo Secchi, Giuseppe
              Mercalli, Marcello Malpighi, Ren&eacute; Just Ha&uuml;y &mdash; Catholic scientists are
              not a footnote; they are central to almost every field. Over thirty craters on the moon
              are named after Jesuit astronomers.
            </p>
            <p>
              <strong>Yes, there was a Galileo affair.</strong> It happened. It was a real failure of
              ecclesial prudence. It is also the only case of its kind that the &ldquo;warfare&rdquo;
              storytellers can name &mdash; which is why it gets repeated endlessly. Read the actual
              history (the trial, the personalities, the politics) and the picture is much more
              complicated than the slogan.
            </p>
            <p>
              <strong>The Church&apos;s formal teaching is clear.</strong> Vatican I (1870) defined
              that faith and reason cannot truly contradict each other. St. John Paul II&apos;s{' '}
              <em>Fides et Ratio</em> (1998) called them &ldquo;two wings on which the human spirit
              rises to the contemplation of truth.&rdquo; The Catechism (159) says &ldquo;there can
              never be any real discrepancy between faith and reason.&rdquo; This is not a recent
              concession; it is what the Church has always held.
            </p>
          </div>
        </div>

        {/* Cards Grid */}
        <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">Explore the Articles</h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-8">
          Each card below leads to a focused article. The four marked &ldquo;in-depth&rdquo; are
          fully written; the others are being expanded over time.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {cards.map((card) => {
            const Icon = card.icon
            const a = accentMap[card.accent]
            return (
              <Link
                key={card.href}
                href={card.href}
                className={`group bg-white rounded-lg shadow-md hover:shadow-xl transition-all border-2 ${a.border} ${a.hoverBorder} p-6 flex flex-col`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-2.5 rounded-lg ${a.bg}`}>
                    <Icon className={`w-6 h-6 ${a.text}`} />
                  </div>
                  {card.status === 'rich' ? (
                    <span className="text-xs font-semibold uppercase tracking-wide px-2 py-1 rounded-full bg-emerald-100 text-emerald-800">
                      In-Depth
                    </span>
                  ) : (
                    <span className="text-xs font-semibold uppercase tracking-wide px-2 py-1 rounded-full bg-gray-100 text-gray-600">
                      Coming Soon
                    </span>
                  )}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-amber-700 transition-colors">
                  {card.title}
                </h3>
                <p
                  className="text-sm text-gray-600 leading-relaxed flex-grow"
                  dangerouslySetInnerHTML={{ __html: card.blurb }}
                />
                <div className={`mt-4 inline-flex items-center gap-1 text-sm font-semibold ${a.text}`}>
                  Read more
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            )
          })}
        </div>

        {/* Timeline */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-10">
          <div className="flex items-center gap-3 mb-6">
            <Calendar className="w-7 h-7 text-amber-600" />
            <h2 className="text-2xl font-bold text-gray-800">A Few Milestones</h2>
          </div>
          <p className="text-gray-600 mb-6">
            A small selection of moments where the Church and the sciences intersected. Each one is
            covered in more depth somewhere in this section &mdash; or will be soon.
          </p>
          <div className="space-y-3">
            {milestones.map((m) => (
              <div
                key={m.year}
                className="flex items-start gap-4 pb-3 border-b border-gray-100 last:border-0"
              >
                <div className="flex-shrink-0 w-20 text-right">
                  <span className="font-mono text-sm font-semibold text-amber-700">{m.year}</span>
                </div>
                <p
                  className="text-gray-700 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: m.label }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Pull Quote */}
        <div className="bg-amber-50 border-l-4 border-amber-400 rounded-r-lg p-8 mb-10">
          <div className="flex items-start gap-4">
            <Quote className="w-8 h-8 text-amber-600 flex-shrink-0" />
            <div>
              <p className="text-lg text-gray-800 italic leading-relaxed mb-3">
                &ldquo;Faith and reason are like two wings on which the human spirit rises to the
                contemplation of truth; and God has placed in the human heart a desire to know the
                truth &mdash; in a word, to know himself &mdash; so that, by knowing and loving God,
                men and women may also come to the fullness of truth about themselves.&rdquo;
              </p>
              <p className="text-sm font-semibold text-amber-800">
                &mdash; St. John Paul II, <em>Fides et Ratio</em> (1998), opening line
              </p>
            </div>
          </div>
        </div>

        {/* Footer note */}
        <div className="bg-gray-50 rounded-lg p-6 text-center">
          <div className="flex items-center justify-center gap-2 mb-2 text-gray-700">
            <Landmark className="w-5 h-5" />
            <span className="font-semibold">More articles are being added.</span>
          </div>
          <p className="text-sm text-gray-600 max-w-2xl mx-auto">
            This section is a living archive. As new pieces are written, they will appear as cards
            above &mdash; on topics like the Pontifical Academy of Sciences, the Vatican Observatory,
            medical ethics, and the medieval origins of the scientific method.
          </p>
        </div>
      </div>
    </div>
  )
}
