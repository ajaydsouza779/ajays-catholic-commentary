import Header from "@/components/Header"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-primary-cream">
      <Header />
      
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-md p-8 md:p-12">
          <h1 className="text-4xl md:text-5xl font-serif text-primary-navy mb-8 text-center">
            About Ajay&apos;s Catholic Commentary
          </h1>

          <div className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:text-primary-navy prose-a:text-primary-navy prose-a:no-underline hover:prose-a:underline">
            <p className="text-xl text-neutral-600 mb-8 text-center">
              A platform dedicated to sharing Catholic insights, teachings, and reflections with the community.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div>
                <h2 className="text-2xl font-serif text-primary-navy mb-4">Our Mission</h2>
                <p className="text-neutral-700 mb-4">
                  To provide thoughtful commentary on Catholic teachings, scripture, and spiritual life, 
                  fostering a deeper understanding and appreciation of the Catholic faith.
                </p>
                <p className="text-neutral-700">
                  We believe that sharing wisdom and insights helps strengthen our community and 
                  deepens our relationship with God.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-serif text-primary-navy mb-4">Our Vision</h2>
                <p className="text-neutral-700 mb-4">
                  To create a welcoming space where Catholics and seekers can explore the beauty 
                  of Catholic tradition through thoughtful reflection and discussion.
                </p>
                <p className="text-neutral-700">
                  We aim to make Catholic teachings accessible and relevant to modern life while 
                  maintaining the depth and richness of our tradition.
                </p>
              </div>
            </div>

            <div className="bg-primary-gold bg-opacity-10 p-8 rounded-lg mb-8">
              <h2 className="text-2xl font-serif text-primary-navy mb-4">About Ajay</h2>
              <p className="text-neutral-700 mb-4">
                Ajay is a dedicated Catholic who shares his insights and reflections on faith, 
                scripture, and Catholic tradition. His commentary draws from years of study, 
                prayer, and spiritual reflection.
              </p>
              <p className="text-neutral-700">
                Through this platform, Ajay hopes to contribute to the ongoing conversation 
                about Catholic faith and help others on their spiritual journey.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center p-6 bg-neutral-50 rounded-lg">
                <div className="w-12 h-12 bg-primary-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary-navy font-bold text-xl">📖</span>
                </div>
                <h3 className="text-lg font-serif text-primary-navy mb-2">Scripture Study</h3>
                <p className="text-sm text-neutral-600">
                  Deep dives into biblical texts and their relevance to modern Catholic life.
                </p>
              </div>

              <div className="text-center p-6 bg-neutral-50 rounded-lg">
                <div className="w-12 h-12 bg-primary-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary-navy font-bold text-xl">⛪</span>
                </div>
                <h3 className="text-lg font-serif text-primary-navy mb-2">Catholic Tradition</h3>
                <p className="text-sm text-neutral-600">
                  Exploring the rich history and teachings of the Catholic Church.
                </p>
              </div>

              <div className="text-center p-6 bg-neutral-50 rounded-lg">
                <div className="w-12 h-12 bg-primary-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary-navy font-bold text-xl">🙏</span>
                </div>
                <h3 className="text-lg font-serif text-primary-navy mb-2">Spiritual Life</h3>
                <p className="text-sm text-neutral-600">
                  Practical guidance for living a faithful Catholic life in today&apos;s world.
                </p>
              </div>
            </div>

            <div className="text-center">
              <h2 className="text-2xl font-serif text-primary-navy mb-4">Join Our Community</h2>
              <p className="text-neutral-700 mb-6">
                We welcome all who are interested in exploring Catholic faith and tradition. 
                Whether you&apos;re a lifelong Catholic or just beginning your journey, 
                there&apos;s a place for you here.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/auth/signup"
                  className="bg-primary-navy text-white px-8 py-3 rounded-md font-medium hover:bg-primary-gold hover:text-primary-navy transition-colors"
                >
                  Join the Community
                </Link>
                <Link
                  href="/posts"
                  className="border-2 border-primary-navy text-primary-navy px-8 py-3 rounded-md font-medium hover:bg-primary-navy hover:text-white transition-colors"
                >
                  Read Commentary
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-primary-navy text-white py-8 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-primary-gold font-serif text-lg mb-2">
            Ajay&apos;s Catholic Commentary
          </p>
          <p className="text-sm text-neutral-300">
            Sharing the beauty of Catholic faith and tradition
          </p>
        </div>
      </footer>
    </div>
  )
}
