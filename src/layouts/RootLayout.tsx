import { Outlet } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import FloatingActions from '@/components/layout/FloatingActions'
import { useScrollTop } from '@/hooks/useScrollTop'
import { organizationSchema, websiteSchema } from '@/components/seo/SEO'

export default function RootLayout() {
  useScrollTop()

  return (
    <>
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
          focus:px-4 focus:py-2 focus:bg-teal focus:text-white focus:rounded-lg focus:font-medium"
      >
        Skip to main content
      </a>

      <Navbar />

      <main id="main-content" className="pt-16 md:pt-18 min-h-screen flex flex-col">
        <Outlet />
      </main>

      <Footer />
      <FloatingActions />
    </>
  )
}
