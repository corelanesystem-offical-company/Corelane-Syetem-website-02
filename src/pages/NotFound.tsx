import SEO from '@/components/seo/SEO'
import { Link } from 'react-router-dom'
import Button from '@/components/ui/Button'

export default function NotFound() {
  return (
    <>
      <SEO
        title="404 — Page Not Found | Corelane Systems"
        description="The page you are looking for does not exist. Return to the homepage or explore our services."
        noIndex={true}
      />

      <section className="min-h-[70vh] flex items-center justify-center bg-navy px-4">
        <div className="text-center max-w-lg mx-auto">
          <div className="text-teal text-xs font-semibold uppercase tracking-widest mb-4">404 Error</div>
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-4">Page Not Found</h1>
          <p className="text-slate-400 mb-10 text-lg">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/">
              <Button variant="primary" size="lg">Return Home</Button>
            </Link>
            <Link to="/services">
              <Button variant="secondary" size="lg">View Services</Button>
            </Link>
            <Link to="/contact">
              <Button variant="ghost" size="lg">Contact Us</Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
