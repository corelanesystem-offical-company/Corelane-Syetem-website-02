import { Helmet } from 'react-helmet-async'
import { SITE_URL } from '@/utils/cn'

interface SEOProps {
  title: string
  description: string
  canonical?: string
  ogImage?: string
  ogType?: 'website' | 'article'
  noIndex?: boolean
  jsonLd?: object | object[]
}

const DEFAULT_OG_IMAGE = `${SITE_URL}/og-default.jpg`

export default function SEO({
  title,
  description,
  canonical,
  ogImage = DEFAULT_OG_IMAGE,
  ogType = 'website',
  noIndex = false,
  jsonLd,
}: SEOProps) {
  // Build canonical: if explicitly provided (even "/"), use it; otherwise default to root
  const canonicalUrl = canonical !== undefined
    ? `${SITE_URL}${canonical === '/' ? '' : canonical}`
    : SITE_URL
  const fullOgImage = ogImage.startsWith('http') ? ogImage : `${SITE_URL}${ogImage}`

  const jsonLdArray = jsonLd
    ? Array.isArray(jsonLd)
      ? jsonLd
      : [jsonLd]
    : []

  return (
    <Helmet>
      {/* Primary */}
      <title>{title}</title>
      <meta name="description" content={description} />
      {noIndex && <meta name="robots" content="noindex, nofollow" />}

      {/* Canonical */}
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content="Corelane Systems" />
      <meta property="og:image" content={fullOgImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter / X */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullOgImage} />

      {/* JSON-LD Structured Data */}
      {jsonLdArray.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </Helmet>
  )
}

/* ===================================================
   Reusable JSON-LD schema builders
   =================================================== */

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Corelane Systems',
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    description:
      'Corelane Systems provides software development, web development, cloud engineering, and digital transformation services for startups, SMEs, and growing businesses.',
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      email: 'hello@corelanesystems.com',
      availableLanguage: ['English', 'Urdu'],
    },
    sameAs: [],
  }
}

export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Corelane Systems',
    url: SITE_URL,
  }
}

export function serviceSchema(name: string, description: string, url: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    provider: {
      '@type': 'Organization',
      name: 'Corelane Systems',
      url: SITE_URL,
    },
    url: `${SITE_URL}${url}`,
  }
}

export function breadcrumbSchema(
  items: { name: string; url: string }[]
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.url}`,
    })),
  }
}

export function faqSchema(items: { q: string; a: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a,
      },
    })),
  }
}

/**
 * Location page schema — describes Corelane as an organization serving
 * a specific country/region. Does NOT claim a physical office address
 * in countries where Corelane does not have one.
 */
export function locationSchema(
  country: string,
  description: string,
  url: string
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Corelane Systems',
    description,
    url: `${SITE_URL}${url}`,
    areaServed: {
      '@type': 'Country',
      name: country,
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer support',
      email: 'corelanesystem@gmail.com',
      availableLanguage: ['English'],
    },
  }
}

/** @deprecated Use locationSchema instead — LocalBusiness schema should only be used for businesses with a physical presence */
export function localBusinessSchema(
  country: string,
  description: string,
  url: string
) {
  return locationSchema(country, description, url)
}

export function articleSchema(
  title: string,
  description: string,
  url: string,
  datePublished: string,
  authorName: string = 'Corelane Systems'
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: title,
    description: description,
    url: `${SITE_URL}${url}`,
    datePublished: datePublished,
    author: {
      '@type': 'Organization',
      name: authorName,
      url: SITE_URL,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Corelane Systems',
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/logo.png`,
      },
    },
  }
}
