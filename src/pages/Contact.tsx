import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import SEO from '@/components/seo/SEO'
import Button from '@/components/ui/Button'
import { CONTACT } from '@/utils/cn'
import { Mail, MessageCircle, MapPin } from 'lucide-react'
import { trackEvent } from '@/utils/analytics'

const SERVICES = [
  'Website Development',
  'Web Application Development',
  'Custom Software',
  'Mobile App Development',
  'UI/UX Design',
  'Cloud Engineering',
  'DevOps',
  'Data Engineering',
  'Data Analytics',
  'Business Automation',
  'Not Sure / Need Consultation'
]

const PROJECT_TYPES = [
  'New Project',
  'Existing Website Improvement',
  'Existing Application Improvement',
  'Cloud / Infrastructure',
  'Automation',
  'Migration',
  'Maintenance / Support',
  'Consultation',
  'Not Sure'
]

const BUDGETS = [
  'Not decided yet',
  'Under $1,000',
  '$1,000 – $5,000',
  '$5,000 – $10,000',
  '$10,000+',
  'Prefer to discuss'
]

const TIMELINES = [
  'As soon as possible',
  'Within 1 month',
  '1–3 months',
  '3–6 months',
  'Just exploring',
  'Not sure'
]

export default function Contact() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    country: '',
    website: '',
    service: '',
    projectType: '',
    budget: '',
    timeline: '',
    message: ''
  })
  
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formStarted, setFormStarted] = useState(false)
  const [submitError, setSubmitError] = useState(false)

  // Track form start
  useEffect(() => {
    const handleFormStart = () => {
      if (!formStarted) {
        setFormStarted(true)
        trackEvent('contact_form_start')
      }
    }
    
    // Attach to all inputs
    const inputs = document.querySelectorAll('input, select, textarea')
    inputs.forEach(input => {
      input.addEventListener('focus', handleFormStart)
      input.addEventListener('change', handleFormStart)
    })
    
    return () => {
      inputs.forEach(input => {
        input.removeEventListener('focus', handleFormStart)
        input.removeEventListener('change', handleFormStart)
      })
    }
  }, [formStarted])

  const validate = () => {
    const newErrors: Record<string, string> = {}
    
    if (!formData.fullName.trim()) newErrors.fullName = 'Full Name is required'
    if (!formData.companyName.trim()) newErrors.companyName = 'Company Name is required'
    
    if (!formData.email.trim()) {
      newErrors.email = 'Work Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }
    
    if (!formData.service) newErrors.service = 'Please select a required service'
    if (!formData.projectType) newErrors.projectType = 'Please select a project type'
    if (!formData.message.trim()) newErrors.message = 'Please tell us about your project'

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validate()) {
      trackEvent('contact_form_error', { fields: Object.keys(errors) })
      return
    }

    setIsSubmitting(true)
    setSubmitError(false)
    
    // Construct the payload for Netlify Forms
    const form = e.target as HTMLFormElement
    const formDataObj = new FormData(form)
    
    // Explicitly add form-name just in case hidden input is missed
    const urlParams = new URLSearchParams(formDataObj as any)
    urlParams.set('form-name', 'contact')

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: urlParams.toString()
      })

      if (response.ok) {
        trackEvent('contact_form_submit', { 
          service: formData.service,
          projectType: formData.projectType 
        })
        setIsSubmitting(false)
        navigate('/thank-you')
      } else {
        throw new Error('Network response was not ok')
      }
    } catch (error) {
      console.error('Form submission error:', error)
      trackEvent('contact_form_error', { type: 'submission_failed' })
      setSubmitError(true)
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    // Clear error for this field
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev }
        delete newErrors[name]
        return newErrors
      })
    }
  }

  return (
    <>
      <SEO 
        title="Contact Us | Corelane Systems" 
        description="Let's build something that matters. Tell us about your business, project, or technology challenge."
        canonical="/contact"
      />

      <section className="bg-white pt-28 pb-16 md:pt-40 md:pb-24 border-b border-slate-200 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-slate-pattern opacity-50"></div>
        <div className="container-content text-center max-w-3xl relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
            Let's Build Something That Matters.
          </h1>
          <p className="text-lg md:text-xl text-slate-600">
            Tell us about your business, project, or technology challenge. We'll review your requirements and get back to you.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-slate-50">
        <div className="container-content max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            
            {/* Contact Form */}
            <div className="lg:col-span-8 bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-slate-200">
              <h2 className="text-2xl font-bold text-slate-900 mb-8">Project Inquiry</h2>
              
              <form 
                onSubmit={handleSubmit} 
                className="space-y-6"
                name="contact"
                method="POST"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
              >
                {/* Netlify required hidden fields */}
                <input type="hidden" name="form-name" value="contact" />
                <div hidden>
                  <label>
                    Don't fill this out if you're human: <input name="bot-field" />
                  </label>
                </div>
                {/* Personal Info */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="fullName" className="block text-sm font-medium text-slate-700 mb-2">Full Name *</label>
                    <input 
                      type="text" 
                      id="fullName" 
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className={`w-full px-4 py-3 rounded-lg border ${errors.fullName ? 'border-red-500 focus:ring-red-500' : 'border-slate-300 focus:ring-teal'} focus:outline-none focus:ring-2 focus:border-transparent transition-colors`}
                    />
                    {errors.fullName && <p className="mt-1 text-xs text-red-500">{errors.fullName}</p>}
                  </div>
                  <div>
                    <label htmlFor="companyName" className="block text-sm font-medium text-slate-700 mb-2">Business / Company Name *</label>
                    <input 
                      type="text" 
                      id="companyName" 
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleChange}
                      placeholder="Acme Corp"
                      className={`w-full px-4 py-3 rounded-lg border ${errors.companyName ? 'border-red-500 focus:ring-red-500' : 'border-slate-300 focus:ring-teal'} focus:outline-none focus:ring-2 focus:border-transparent transition-colors`}
                    />
                    {errors.companyName && <p className="mt-1 text-xs text-red-500">{errors.companyName}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">Work Email *</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@acmecorp.com"
                      className={`w-full px-4 py-3 rounded-lg border ${errors.email ? 'border-red-500 focus:ring-red-500' : 'border-slate-300 focus:ring-teal'} focus:outline-none focus:ring-2 focus:border-transparent transition-colors`}
                    />
                    {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">Phone / WhatsApp</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+1 (555) 000-0000"
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 bg-slate-50 focus:bg-white text-slate-900 focus:border-teal focus:outline-none focus:ring-4 focus:ring-teal-100 placeholder:text-slate-400 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="country" className="block text-sm font-medium text-slate-700 mb-2">Country</label>
                    <input 
                      type="text" 
                      id="country" 
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      placeholder="United States"
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 bg-slate-50 focus:bg-white text-slate-900 focus:border-teal focus:outline-none focus:ring-4 focus:ring-teal-100 placeholder:text-slate-400 transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="website" className="block text-sm font-medium text-slate-700 mb-2">Company Website</label>
                    <input 
                      type="url" 
                      id="website" 
                      name="website"
                      value={formData.website}
                      onChange={handleChange}
                      placeholder="https://acmecorp.com"
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 bg-slate-50 focus:bg-white text-slate-900 focus:border-teal focus:outline-none focus:ring-4 focus:ring-teal-100 placeholder:text-slate-400 transition-colors"
                    />
                  </div>
                </div>

                {/* Project Details */}
                <div className="pt-6 border-t border-slate-100">
                  <h3 className="text-lg font-bold text-slate-900 mb-6">Project Requirements</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-slate-700 mb-2">Service Required *</label>
                      <select 
                        id="service" 
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-lg border bg-white ${errors.service ? 'border-red-500 focus:ring-red-500' : 'border-slate-300 focus:ring-teal'} focus:outline-none focus:ring-2 focus:border-transparent transition-colors`}
                      >
                        <option value="">Select a service...</option>
                        {SERVICES.map(s => <option key={s} value={s}>{s}</option>)}
                      </select>
                      {errors.service && <p className="mt-1 text-xs text-red-500">{errors.service}</p>}
                    </div>
                    <div>
                      <label htmlFor="projectType" className="block text-sm font-medium text-slate-700 mb-2">Project Type *</label>
                      <select 
                        id="projectType" 
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-lg border bg-white ${errors.projectType ? 'border-red-500 focus:ring-red-500' : 'border-slate-300 focus:ring-teal'} focus:outline-none focus:ring-2 focus:border-transparent transition-colors`}
                      >
                        <option value="">Select project type...</option>
                        {PROJECT_TYPES.map(s => <option key={s} value={s}>{s}</option>)}
                      </select>
                      {errors.projectType && <p className="mt-1 text-xs text-red-500">{errors.projectType}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="budget" className="block text-sm font-medium text-slate-700 mb-2">Project Budget</label>
                      <select 
                        id="budget" 
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 bg-white bg-slate-50 focus:bg-white text-slate-900 focus:border-teal focus:outline-none focus:ring-4 focus:ring-teal-100 placeholder:text-slate-400 transition-colors"
                      >
                        <option value="">Select estimated budget...</option>
                        {BUDGETS.map(s => <option key={s} value={s}>{s}</option>)}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="timeline" className="block text-sm font-medium text-slate-700 mb-2">Project Timeline</label>
                      <select 
                        id="timeline" 
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 bg-white bg-slate-50 focus:bg-white text-slate-900 focus:border-teal focus:outline-none focus:ring-4 focus:ring-teal-100 placeholder:text-slate-400 transition-colors"
                      >
                        <option value="">Select expected timeline...</option>
                        {TIMELINES.map(s => <option key={s} value={s}>{s}</option>)}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">Tell us about your project *</label>
                    <textarea 
                      id="message" 
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      placeholder="Please describe your business goals, required features, and any technical constraints..."
                      className={`w-full px-4 py-3 rounded-lg border ${errors.message ? 'border-red-500 focus:ring-red-500' : 'border-slate-300 focus:ring-teal'} focus:outline-none focus:ring-2 focus:border-transparent transition-colors resize-y`}
                    ></textarea>
                    {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message}</p>}
                  </div>
                </div>

                <div className="pt-4 flex items-center justify-between">
                  <p className="text-xs text-slate-500 max-w-xs">
                    Your information is secure. We will never share your details with third parties.
                  </p>
                  <Button 
                    type="submit" 
                    size="lg" 
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Submit Inquiry'}
                  </Button>
                </div>
                
                {/* Integration Notice / Errors */}
                {Object.keys(errors).length > 0 && (
                  <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-sm text-red-600">
                    Please correct the errors above before submitting.
                  </div>
                )}
                {submitError && (
                  <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-sm text-red-600">
                    We couldn't submit your request right now. Please try again or contact us directly through WhatsApp or email.
                  </div>
                )}
              </form>
            </div>

            {/* Contact Info Sidebar */}
            <div className="lg:col-span-4 space-y-8">
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                <h3 className="text-xl font-bold text-slate-900 mb-6">Direct Contact</h3>
                
                <div className="space-y-6">
                  <a 
                    href={CONTACT.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackEvent('cta_whatsapp', { source: 'contact_page_sidebar' })}
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-10 h-10 bg-green-50 text-[#25D366] rounded-full flex items-center justify-center group-hover:bg-[#25D366] group-hover:text-white transition-colors">
                      <MessageCircle size={20} />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-slate-900 mb-1">WhatsApp</p>
                      <p className="text-sm text-slate-600">+92 301 2756091</p>
                      <p className="text-xs text-teal mt-1">Available 24/7</p>
                    </div>
                  </a>

                  <a 
                    href={`mailto:${CONTACT.email}`}
                    onClick={() => trackEvent('cta_email', { source: 'contact_page_sidebar' })}
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-10 h-10 bg-teal/10 text-teal rounded-full flex items-center justify-center group-hover:bg-teal group-hover:text-white transition-colors">
                      <Mail size={20} />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-slate-900 mb-1">Email</p>
                      <p className="text-sm text-slate-600">{CONTACT.email}</p>
                    </div>
                  </a>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-slate-100 text-slate-600 rounded-full flex items-center justify-center">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-slate-900 mb-1">Global Delivery</p>
                      <p className="text-sm text-slate-600">Pakistan, UAE, UK, USA, Canada</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-navy p-8 rounded-2xl border border-navy-800 text-white">
                <h3 className="text-lg font-bold mb-4">What happens next?</h3>
                <ul className="space-y-4 text-sm text-slate-400">
                  <li className="flex gap-3">
                    <div className="text-teal font-mono">01</div>
                    <div>We review your requirements within 24 hours.</div>
                  </li>
                  <li className="flex gap-3">
                    <div className="text-teal font-mono">02</div>
                    <div>We schedule a brief discovery call to discuss technical options.</div>
                  </li>
                  <li className="flex gap-3">
                    <div className="text-teal font-mono">03</div>
                    <div>We provide a clear architecture plan and engagement model.</div>
                  </li>
                </ul>
              </div>
            </div>
            
          </div>
        </div>
      </section>
    </>
  )
}
