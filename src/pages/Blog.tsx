import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import SEO from '@/components/seo/SEO'
import Breadcrumb from '@/components/ui/Breadcrumb'
import CTASection from '@/components/sections/CTASection'
import { blogPosts } from '@/data/blogPosts'
import { Search, Calendar, Clock, ArrowRight } from 'lucide-react'

const CATEGORIES = [
  'All',
  'Web Development',
  'Software Development',
  'Cloud Engineering',
  'DevOps',
  'Data',
  'Automation',
  'Business Technology'
]

export default function Blog() {
  const [searchQuery, setSearchQuery] = useState('')
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredPosts = useMemo(() => {
    return blogPosts.filter((post) => {
      const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
      const matchesCategory = activeCategory === 'All' || post.category === activeCategory
      return matchesSearch && matchesCategory
    }).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  }, [searchQuery, activeCategory])

  return (
    <>
      <SEO
        title="Blog & Insights | Corelane Systems"
        description="Practical insights about software development, cloud engineering, DevOps, data, automation and digital transformation."
        canonical="/blog"
      />

      <section className="bg-navy pt-8 pb-16 md:pt-12 md:pb-24">
        <div className="container-content">
          <Breadcrumb items={[{ label: 'Blog' }]} light className="mb-8" />
          <h1 className="text-h1 font-bold text-white text-balance mb-6">
            Insights for Modern Businesses
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl leading-relaxed mb-10">
            Practical insights about software development, cloud engineering, DevOps, data, automation and digital transformation.
          </p>

          <div className="flex flex-col md:flex-row gap-4 max-w-4xl">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-navy-800 text-white border border-navy-700 rounded-lg pl-12 pr-4 py-3 focus:outline-none focus:border-teal transition-colors placeholder:text-slate-500"
              />
            </div>
            <div className="overflow-x-auto pb-2 md:pb-0 hide-scrollbar flex items-center">
              <div className="flex gap-2">
                {CATEGORIES.map(category => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`whitespace-nowrap px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      activeCategory === category 
                        ? 'bg-teal text-white' 
                        : 'bg-navy-800 text-slate-300 hover:bg-navy-700'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-slate-50 min-h-[50vh]">
        <div className="container-content">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-20">
              <h3 className="text-xl font-bold text-slate-800 mb-2">No articles found</h3>
              <p className="text-slate-600">Try adjusting your search or category filter.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <article key={post.slug} className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col">
                  <div className="p-6 md:p-8 flex-1 flex flex-col">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="bg-teal-50 text-teal-dark px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">
                        {post.category}
                      </span>
                    </div>
                    <Link to={`/blog/${post.slug}`} className="block mb-4">
                      <h2 className="text-xl font-bold text-slate-800 hover:text-teal transition-colors">
                        {post.title}
                      </h2>
                    </Link>
                    <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-1">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between mt-auto pt-6 border-t border-slate-100">
                      <div className="flex items-center gap-4 text-xs text-slate-500 font-medium">
                        <span className="flex items-center gap-1.5">
                          <Calendar size={14} />
                          {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Clock size={14} />
                          {post.readingTime}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-slate-50 px-6 py-4 border-t border-slate-100">
                    <Link to={`/blog/${post.slug}`} className="text-teal font-semibold text-sm flex items-center gap-2 hover:gap-3 transition-all">
                      Read Article <ArrowRight size={16} />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      <CTASection />
    </>
  )
}
