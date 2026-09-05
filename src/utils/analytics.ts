export type AnalyticsEvent = 
  | 'cta_start_project'
  | 'cta_whatsapp'
  | 'cta_email'
  | 'contact_form_start'
  | 'contact_form_submit'
  | 'contact_form_error'
  | 'service_cta_click'
  | 'industry_cta_click'
  | 'solution_cta_click'
  | 'location_cta_click'
  | 'blog_cta_click'

/**
 * Reusable tracking utility for analytics.
 * Currently logs to console. Can be integrated with Google Analytics,
 * Plausible, Mixpanel, or PostHog in the future.
 */
export const trackEvent = (eventName: AnalyticsEvent, payload?: Record<string, any>) => {
  if (import.meta.env.DEV) {
    console.log(`[Analytics Event]: ${eventName}`, payload || '')
  }
  
  // Future integration points:
  // if (typeof window !== 'undefined' && window.gtag) {
  //   window.gtag('event', eventName, payload)
  // }
}
