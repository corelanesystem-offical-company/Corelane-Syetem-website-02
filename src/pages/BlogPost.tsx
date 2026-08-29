import { useParams, Navigate } from 'react-router-dom'
import { blogPosts } from '@/data/blogPosts'
import BlogArticle from '@/components/sections/BlogArticle'

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>()
  
  if (!slug) return <Navigate to="/blog" replace />

  const post = blogPosts.find((p) => p.slug === slug)
  
  if (!post) return <Navigate to="/404" replace />

  return <BlogArticle post={post} />
}
