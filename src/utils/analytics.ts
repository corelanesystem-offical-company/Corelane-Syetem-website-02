export type AnalyticsEvent = 
  | 'page_view'
  | 'landing_view'
  | 'cta_start_project'
  | 'cta_whatsapp'
  | 'cta_email'
  | 'contact_form_start'
  | 'contact_form_submit'
  | 'contact_form_error'
  | 'service_cta_click'
  | 'solution_cta_click'
  | 'industry_cta_click'
  | 'location_cta_click'
  | 'blog_cta_click'
  | 'landing_hero_cta'
  | 'landing_form_start'
  | 'landing_form_submit'
  | 'landing_whatsapp_click'
  | 'landing_email_click'
  | 'lead_generated'
  | 'thank_you_view'

// Global window typing for Google/Meta pixels
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    fbq?: (...args: any[]) => void;
  }
}

/**
 * Capture non-sensitive UTM and attribution parameters from URL
 * and store them in sessionStorage for first-touch attribution within the session.
 */
export const captureUTMs = (searchParams: URLSearchParams) => {
  if (typeof window === 'undefined') return;
  
  const utm_source = searchParams.get('utm_source');
  if (utm_source) {
    // Only set if not already set, preserving first-touch in this session
    if (!sessionStorage.getItem('first_touch_source')) {
      sessionStorage.setItem('first_touch_source', utm_source);
      sessionStorage.setItem('first_touch_medium', searchParams.get('utm_medium') || '');
      sessionStorage.setItem('first_touch_campaign', searchParams.get('utm_campaign') || '');
      sessionStorage.setItem('first_touch_term', searchParams.get('utm_term') || '');
      sessionStorage.setItem('first_touch_content', searchParams.get('utm_content') || '');
    }
  }
}

/**
 * Reusable tracking utility for analytics.
 * Supports privacy-conscious event tracking, appending session attribution data,
 * and hooking into ad platforms.
 */
export const trackEvent = (eventName: AnalyticsEvent, payload: Record<string, any> = {}) => {
  if (typeof window === 'undefined') return;

  // Append lightweight attribution data
  const attribution = {
    first_touch_source: sessionStorage.getItem('first_touch_source') || undefined,
    first_touch_medium: sessionStorage.getItem('first_touch_medium') || undefined,
    first_touch_campaign: sessionStorage.getItem('first_touch_campaign') || undefined,
  };

  const eventData = {
    ...payload,
    ...attribution,
    timestamp: new Date().toISOString()
  };

  if (import.meta.env.DEV) {
    console.log(`[Analytics Event]: ${eventName}`, eventData)
  }

  // =========================================================
  // GOOGLE ADS / GOOGLE ANALYTICS READINESS
  // Do NOT hardcode IDs. If gtag is available on window, push to it.
  // =========================================================
  if (window.gtag) {
    window.gtag('event', eventName, eventData);
    
    // Explicit conversion mapping (can be expanded later)
    if (eventName === 'lead_generated') {
      window.gtag('event', 'conversion', {
        'send_to': 'AW-CONVERSION_ID/CONVERSION_LABEL' // Placeholder for future ads
      });
    }
  }

  // =========================================================
  // META ADS (FACEBOOK PIXEL) READINESS
  // =========================================================
  if (window.fbq) {
    // Map custom events to standard Meta events where appropriate
    if (eventName === 'lead_generated') {
      window.fbq('track', 'Lead', eventData);
    } else if (eventName === 'cta_whatsapp' || eventName === 'landing_whatsapp_click') {
      window.fbq('trackCustom', 'WhatsAppClick', eventData);
    } else {
      window.fbq('trackCustom', eventName, eventData);
    }
  }
}

/**
 * Mark a pending lead in sessionStorage to prevent duplicate fires on refresh
 */
export const setPendingLead = (source: string) => {
  if (typeof window !== 'undefined') {
    sessionStorage.setItem('pending_lead', 'true');
    sessionStorage.setItem('pending_lead_source', source);
  }
}
