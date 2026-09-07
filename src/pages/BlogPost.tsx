import { useParams, Navigate, Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { ArrowLeft, ArrowRight, Calendar, Clock, User, Layout, Lightbulb } from 'lucide-react'

import { blogPosts } from '@/data/blogPosts'
import { Container, Section } from '@/components/ui/LayoutPrimitives'
import SectionHeader from '@/components/ui/SectionHeader'
import Badge from '@/components/ui/Badge'
import CTASection from '@/components/sections/CTASection'
import Button from '@/components/ui/Button'
import { trackEvent } from '@/utils/analytics'
import { cn, SITE_URL } from '@/utils/cn'

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>()
  const post = blogPosts.find((p) => p.slug === slug)

  if (!post) {
    return <Navigate to="/404" replace />
  }

  const relatedPosts = blogPosts
    .filter((p) => p.category === post.category && p.slug !== post.slug)
    .slice(0, 2)

  // Schema for Article
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    author: {
      '@type': 'Organization',
      name: post.author
    },
    publisher: {
      '@type': 'Organization',
      name: 'Corelane Systems',
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/logo.png`
      }
    },
    datePublished: post.date,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${SITE_URL}/blog/${post.slug}`
    }
  }

  // Breadcrumb schema
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'Insights', item: `${SITE_URL}/blog` },
      { '@type': 'ListItem', position: 3, name: post.title, item: `${SITE_URL}/blog/${post.slug}` }
    ]
  }

  return (
    <>
      <Helmet>
        <title>{post.metaTitle}</title>
        <meta name="description" content={post.metaDescription} />
        <link rel="canonical" href={`https://www.corelanesystems.com/blog/${post.slug}`} />
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>

      {/* Hero Header */}
      <Section variant="dark" className="pt-24 pb-16 md:pt-32 md:pb-24 border-b border-border-dark bg-surface-dark">
        <Container className="max-w-4xl">
          <Link 
            to="/blog"
            className="inline-flex items-center gap-2 text-sm text-text-muted hover:text-brand-accent transition-colors mb-8 group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            Back to Insights
          </Link>
          
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <Badge variant="dark" className="bg-brand-light/10 text-brand-accent border-brand/30">
              {post.category}
            </Badge>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-inverse mb-8 text-balance">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-sm text-text-muted font-medium border-t border-border-dark pt-6 mt-8">
            <div className="flex items-center gap-2">
              <User size={16} />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar size={16} />
              <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={16} />
              <span>{post.readingTime}</span>
            </div>
          </div>
        </Container>
      </Section>

      {/* Article Body & Sidebar */}
      <Section variant="default" className="py-12 md:py-20">
        <Container>
          <div className="flex flex-col lg:flex-row gap-16 items-start max-w-6xl mx-auto">
            
            {/* Main Content */}
            <article className="lg:w-2/3 prose prose-lg max-w-none text-text-secondary
              prose-headings:text-text-primary prose-headings:font-bold
              prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
              prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
              prose-p:leading-relaxed prose-p:mb-6
              prose-a:text-brand hover:prose-a:text-brand-dark
              prose-strong:text-text-primary prose-strong:font-bold
              prose-ul:my-6 prose-li:my-2
            ">
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </article>

            {/* Sidebar */}
            <aside className="lg:w-1/3 space-y-8 w-full sticky top-32">
              
              {/* Related Services */}
              {post.relatedServices && post.relatedServices.length > 0 && (
                <div className="bg-surface-alt border border-border rounded-xl p-6 shadow-sm">
                  <h3 className="font-bold text-text-primary mb-4 text-sm uppercase tracking-wider flex items-center gap-2">
                    <Layout size={16} className="text-brand" /> Related Capabilities
                  </h3>
                  <div className="space-y-3">
                    {post.relatedServices.map(service => (
                      <Link 
                        key={service.slug} 
                        to={`/services/${service.slug}`}
                        className="block px-4 py-3 bg-surface border border-border rounded-lg hover:border-brand hover:shadow-sm transition-all text-sm font-semibold text-text-secondary hover:text-brand group"
                      >
                        {service.title}
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Related Solutions */}
              {post.relatedSolutions && post.relatedSolutions.length > 0 && (
                <div className="bg-surface-alt border border-border rounded-xl p-6 shadow-sm">
                  <h3 className="font-bold text-text-primary mb-4 text-sm uppercase tracking-wider flex items-center gap-2">
                    <Lightbulb size={16} className="text-brand" /> Business Solutions
                  </h3>
                  <div className="space-y-3">
                    {post.relatedSolutions.map(solution => (
                      <Link 
                        key={solution.slug} 
                        to={`/solutions/${solution.slug}`}
                        className="block px-4 py-3 bg-surface border border-border rounded-lg hover:border-brand hover:shadow-sm transition-all text-sm font-semibold text-text-secondary hover:text-brand group"
                      >
                        {solution.title}
                      </Link>
                    ))}
                  </div>
                </div>
              )}

            </aside>
          </div>
        </Container>
      </Section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <Section variant="alt" className="border-t border-border">
          <Container>
            <SectionHeader align="left" title="Related Insights" className="mb-8" />
            <div className="grid md:grid-cols-2 gap-8">
              {relatedPosts.map(related => (
                <Link 
                  key={related.slug}
                  to={`/blog/${related.slug}`}
                  className="group block bg-surface border border-border hover:border-brand rounded-xl p-8 shadow-sm transition-all"
                >
                  <div className="text-xs font-bold text-brand uppercase tracking-wider mb-3">
                    {related.category}
                  </div>
                  <h3 className="text-xl font-bold text-text-primary mb-3 group-hover:text-brand transition-colors">
                    {related.title}
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed mb-6">
                    {related.excerpt}
                  </p>
                  <div className="flex items-center gap-2 text-sm font-bold text-text-primary group-hover:text-brand transition-colors">
                    Read Article
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </Container>
        </Section>
      )}

      <CTASection 
        title="Discuss your engineering requirements"
        subtitle="Schedule a technical consultation to explore solutions for your business."
      />
    </>
  )
}
