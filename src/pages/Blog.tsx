import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { ArrowRight, BookOpen, Clock, Calendar } from 'lucide-react'

import { Container, Section } from '@/components/ui/LayoutPrimitives'
import SectionHeader from '@/components/ui/SectionHeader'
import Badge from '@/components/ui/Badge'
import CTASection from '@/components/sections/CTASection'
import Button from '@/components/ui/Button'
import { blogPosts } from '@/data/blogPosts'

export default function Blog() {
  const featuredPost = blogPosts[0]
  const latestPosts = blogPosts.slice(1)

  return (
    <>
      <Helmet>
        <title>Engineering Insights & Blog | Corelane Systems</title>
        <meta name="description" content="Engineering insights, architecture decisions, and business technology strategies for building better digital systems." />
        <link rel="canonical" href="https://corelanesystem.com/blog" />
      </Helmet>

      {/* Hero */}
      <Section variant="dark" className="pt-24 pb-16 md:pt-32 md:pb-24 border-b border-border-dark bg-surface-dark relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:32px_32px]" />
        
        <Container className="relative z-10 max-w-4xl">
          <div className="flex items-center gap-2 text-sm text-text-muted mb-8">
            <Link to="/" className="hover:text-brand-accent transition-colors">Home</Link>
            <span>/</span>
            <span className="text-text-inverse font-medium">Insights</span>
          </div>

          <Badge variant="dark" className="mb-6 tracking-widest uppercase bg-brand-light/10 text-brand-accent border-brand/30">
            Technology Blog
          </Badge>
          <h1 className="text-display font-bold text-text-inverse mb-6 text-balance">
            Engineering insights for building better digital systems.
          </h1>
          <p className="text-xl text-text-muted mb-10 leading-relaxed max-w-3xl">
            Thoughts, technical perspectives, and operational strategies on software engineering, cloud architecture, DevOps, and data.
          </p>
        </Container>
      </Section>

      {/* Featured Post */}
      <Section variant="default" className="border-b border-border">
        <Container>
          <SectionHeader align="left" title="Featured Insight" className="mb-8" />
          
          <Link 
            to={`/blog/${featuredPost.slug}`}
            className="group block bg-surface border border-border hover:border-brand rounded-2xl p-8 lg:p-12 shadow-sm transition-all overflow-hidden relative"
          >
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity pointer-events-none">
              <BookOpen size={120} />
            </div>
            
            <div className="relative z-10 max-w-3xl">
              <div className="flex flex-wrap items-center gap-4 mb-6 text-sm">
                <Badge variant="default" className="text-brand border-brand/20 bg-brand/5">
                  {featuredPost.category}
                </Badge>
                <div className="flex items-center gap-1.5 text-text-muted font-medium">
                  <Calendar size={14} />
                  <span>{new Date(featuredPost.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                </div>
                <div className="flex items-center gap-1.5 text-text-muted font-medium">
                  <Clock size={14} />
                  <span>{featuredPost.readingTime}</span>
                </div>
              </div>

              <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-6 group-hover:text-brand transition-colors text-balance">
                {featuredPost.title}
              </h2>
              
              <p className="text-lg text-text-secondary leading-relaxed mb-8">
                {featuredPost.excerpt}
              </p>
              
              <div className="flex items-center gap-2 text-brand font-bold">
                Read Article
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </Link>
        </Container>
      </Section>

      {/* Latest Posts */}
      <Section variant="alt" className="border-b border-border">
        <Container>
          <SectionHeader align="left" title="Latest Articles" className="mb-8" />
          
          <div className="grid md:grid-cols-2 gap-8">
            {latestPosts.map((post) => (
              <Link 
                key={post.slug}
                to={`/blog/${post.slug}`}
                className="group flex flex-col bg-surface border border-border hover:border-brand rounded-xl p-8 shadow-sm transition-all h-full"
              >
                <div className="flex flex-wrap items-center gap-3 mb-4 text-xs">
                  <span className="font-bold text-brand uppercase tracking-wider">{post.category}</span>
                  <span className="text-border-dark">•</span>
                  <span className="text-text-muted font-medium">{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                </div>
                
                <h3 className="text-2xl font-bold text-text-primary mb-4 group-hover:text-brand transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-text-secondary leading-relaxed mb-8 flex-1">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center gap-2 text-sm font-bold text-text-primary group-hover:text-brand transition-colors mt-auto">
                  Read More
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      <CTASection 
        title="Need engineering expertise?"
        subtitle="Let's discuss how our capabilities align with your business requirements."
      />
    </>
  )
}
