import { useState } from 'react'
import { Link } from 'react-router-dom'
import SEO, { articleSchema, breadcrumbSchema, organizationSchema } from '@/components/seo/SEO'
import Breadcrumb from '@/components/ui/Breadcrumb'
import Button from '@/components/ui/Button'
import { type BlogPost, blogPosts } from '@/data/blogPosts'
import { Calendar, Clock, ArrowRight, Share2, Link as LinkIcon, CheckCircle2 } from 'lucide-react'
import { SITE_URL } from '@/utils/cn'

interface BlogArticleProps {
  post: BlogPost
}

export default function BlogArticle({ post }: BlogArticleProps) {
  const [copied, setCopied] = useState(false)
  const currentUrl = `${SITE_URL}/blog/${post.slug}`

  const handleCopyLink = () => {
    navigator.clipboard.writeText(currentUrl)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const getRelatedArticles = () => {
    return post.relatedArticles
      .map(r => blogPosts.find(p => p.slug === r.slug))
      .filter((p): p is BlogPost => p !== undefined)
      .slice(0, 2)
  }

  return (
    <>
      <SEO
        title={post.metaTitle}
        description={post.metaDescription}
        canonical={`/blog/${post.slug}`}
        ogType="article"
        jsonLd={[
          organizationSchema(),
          breadcrumbSchema([
            { name: 'Blog', url: '/blog' },
            { name: post.title, url: `/blog/${post.slug}` }
          ]),
          articleSchema(post.title, post.metaDescription, `/blog/${post.slug}`, post.date, post.author)
        ]}
      />

      {/* Hero */}
      <section className="bg-navy pt-8 pb-16 md:pt-12 md:pb-24">
        <div className="container-content max-w-4xl">
          <Breadcrumb 
            items={[
              { label: 'Blog', href: '/blog' },
              { label: post.title }
            ]} 
            light 
            className="mb-8"
          />
          
          <div className="flex items-center gap-2 mb-6">
            <span className="bg-teal-500/20 text-teal-300 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider border border-teal-500/30">
              {post.category}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-balance mb-8 leading-tight">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-sm text-slate-300 font-medium">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-slate-700 rounded-full flex items-center justify-center text-white font-bold text-xs">
                CS
              </div>
              <span>{post.author}</span>
            </div>
            <span className="flex items-center gap-1.5">
              <Calendar size={16} />
              {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock size={16} />
              {post.readingTime}
            </span>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-white">
        <div className="container-content max-w-4xl flex flex-col lg:flex-row gap-12">
          
          {/* Main Content */}
          <div className="flex-1 min-w-0">
            <div className="prose prose-slate prose-lg max-w-none prose-headings:font-bold prose-h2:text-3xl prose-h2:text-slate-800 prose-h2:mt-12 prose-h2:mb-6 prose-p:text-slate-600 prose-p:leading-relaxed prose-a:text-teal prose-a:no-underline hover:prose-a:underline prose-li:text-slate-600">
              <p className="text-xl text-slate-700 font-medium leading-relaxed mb-10">
                {post.excerpt}
              </p>
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </div>

            {/* Social Sharing */}
            <div className="mt-16 pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-6">
              <span className="font-semibold text-slate-800">Share this article:</span>
              <div className="flex items-center gap-3">
                <a 
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-[#0077b5] hover:text-white transition-colors"
                  aria-label="Share on LinkedIn"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                </a>
                <a 
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-[#1877F2] hover:text-white transition-colors"
                  aria-label="Share on Facebook"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                </a>
                <a 
                  href={`https://api.whatsapp.com/send?text=${encodeURIComponent(post.title + ' ' + currentUrl)}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-[#25D366] hover:text-white transition-colors"
                  aria-label="Share on WhatsApp"
                >
                  <Share2 size={18} />
                </a>
                <button 
                  onClick={handleCopyLink}
                  className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-teal hover:text-white transition-colors"
                  aria-label="Copy link"
                >
                  {copied ? <CheckCircle2 size={18} /> : <LinkIcon size={18} />}
                </button>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:w-80 flex-shrink-0 space-y-10">
            
            {/* Related Services */}
            {post.relatedServices && post.relatedServices.length > 0 && (
              <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                <h3 className="font-bold text-slate-800 mb-4">Related Services</h3>
                <ul className="space-y-3">
                  {post.relatedServices.map((service, i) => (
                    <li key={i}>
                      <Link to={`/services/${service.slug}`} className="group flex items-center justify-between text-sm text-slate-600 hover:text-teal font-medium">
                        {service.title}
                        <ArrowRight size={14} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Related Industries */}
            {post.relatedIndustries && post.relatedIndustries.length > 0 && (
              <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                <h3 className="font-bold text-slate-800 mb-4">Industries Served</h3>
                <div className="flex flex-wrap gap-2">
                  {post.relatedIndustries.map((ind, i) => (
                    <Link key={i} to={`/industries/${ind.slug}`} className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-xs font-medium text-slate-600 hover:border-teal hover:text-teal transition-colors">
                      {ind.title}
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Related Locations (Optional bonus link juice) */}
            {post.relatedLocations && post.relatedLocations.length > 0 && (
              <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                <h3 className="font-bold text-slate-800 mb-4">Global Delivery</h3>
                <div className="flex flex-wrap gap-2">
                  {post.relatedLocations.map((loc, i) => (
                    <Link key={i} to={`/locations/${loc.slug}`} className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-xs font-medium text-slate-600 hover:border-teal hover:text-teal transition-colors">
                      {loc.title}
                    </Link>
                  ))}
                </div>
              </div>
            )}

          </aside>
        </div>
      </section>

      {/* Related Articles Section */}
      {post.relatedArticles && post.relatedArticles.length > 0 && (
        <section className="py-16 bg-slate-50 border-t border-slate-200">
          <div className="container-content max-w-6xl">
            <h2 className="text-2xl font-bold text-slate-800 mb-8">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {getRelatedArticles().map(relatedPost => (
                <Link key={relatedPost.slug} to={`/blog/${relatedPost.slug}`} className="group">
                  <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm group-hover:shadow-md transition-shadow h-full flex flex-col">
                    <span className="text-teal text-xs font-bold uppercase tracking-wider mb-2 block">{relatedPost.category}</span>
                    <h3 className="text-lg font-bold text-slate-800 group-hover:text-teal transition-colors mb-3">
                      {relatedPost.title}
                    </h3>
                    <p className="text-sm text-slate-600 line-clamp-2">
                      {relatedPost.excerpt}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Custom CTA */}
      <section className="bg-navy section-padding" aria-labelledby="cta-heading">
        <div className="container-content text-center">
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px w-16 bg-navy-700" aria-hidden />
            <span className="text-teal text-sm font-semibold uppercase tracking-widest">Get in touch</span>
            <div className="h-px w-16 bg-navy-700" aria-hidden />
          </div>
          <h2 id="cta-heading" className="text-h1 font-bold text-white mb-4 text-balance">
            Need Help With Your Technology Project?
          </h2>
          <p className="text-lg text-slate-400 mb-10 max-w-xl mx-auto">
            Tell us about your business requirements and let's discuss a practical technology solution.
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="w-full sm:w-auto">
                Start a Project
              </Button>
            </Link>
            <a href="https://api.whatsapp.com/send/?phone=923012756091&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="w-full sm:w-auto bg-[#25D366] hover:bg-[#20ba59] text-white border-none">
                WhatsApp Us
              </Button>
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
