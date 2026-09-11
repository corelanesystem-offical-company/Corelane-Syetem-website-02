import { Outlet, useSearchParams } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { useEffect } from 'react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import WhatsAppFAB from '@/components/layout/WhatsAppFAB'
import { useScrollTop } from '@/hooks/useScrollTop'
import { organizationSchema, websiteSchema } from '@/components/seo/SEO'
import { captureUTMs } from '@/utils/analytics'
import SmoothScrollProvider from '@/providers/SmoothScrollProvider'

export default function RootLayout() {
  useScrollTop()
  const [searchParams] = useSearchParams()

  useEffect(() => {
    captureUTMs(searchParams)
  }, [searchParams])

  return (
    <SmoothScrollProvider>
      {/* Global JSON-LD (rendered on every page) */}
      <Helmet>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema()) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema()) }}
        />
      </Helmet>

      {/* Skip to main content (accessibility) */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100]
          focus:px-4 focus:py-2 focus:bg-brand focus:text-white focus:rounded-lg focus:font-medium shadow-elevated"
      >
        Skip to main content
      </a>

      <Navbar />

      <main id="main-content" className="pt-12 md:pt-14 min-h-screen flex flex-col focus-visible:outline-none">
        <Outlet />
      </main>

      <Footer />
      <WhatsAppFAB />
    </SmoothScrollProvider>
  )
}

