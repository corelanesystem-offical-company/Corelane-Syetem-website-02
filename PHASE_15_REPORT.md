# Phase 15 — Lead Generation + Conversion Tracking

## Objective
To build a reliable, privacy-conscious lead-generation and conversion tracking architecture that maps the visitor journey from initial touchpoint to final conversion. The system must operate entirely on the frontend without exposing sensitive user data, while providing seamless readiness hooks for Google Ads and Meta Ads integration.

## Existing Tracking Audit
The existing tracking was centralized within `src/utils/analytics.ts`. It securely handled standard event tracking by logging to the console in development mode. No Google, Meta, or third-party pixels were active, and no sensitive personal information was stored.

## Conversion Funnel
1. **Top of Funnel:** `page_view`, `landing_view`
2. **Intent / Engagement:** `landing_hero_cta`, `cta_start_project`, `landing_form_start`
3. **Soft Conversion (Intent):** `cta_whatsapp`, `landing_whatsapp_click`, `cta_email`
4. **Hard Conversion:** `landing_form_submit`, `contact_form_submit`
5. **Verified Lead:** `thank_you_view` → `lead_generated`

## Event Taxonomy
Event names were standardized and fully typed in `AnalyticsEvent` to prevent string typos:
- `page_view`, `landing_view`, `thank_you_view`
- `cta_start_project`, `cta_whatsapp`, `cta_email`
- `landing_hero_cta`, `landing_form_start`, `landing_form_submit`
- `landing_whatsapp_click`, `landing_email_click`
- `contact_form_start`, `contact_form_submit`, `contact_form_error`
- `service_cta_click`, `solution_cta_click`, `industry_cta_click`, `location_cta_click`, `blog_cta_click`
- `lead_generated`

## Event Properties
Events accept a contextual `payload` object containing data like:
- `service`, `projectType` (for forms)
- `campaign` (for landing pages)
- `source` (for attribution)
No personally identifiable information (PII) like names, phone numbers, or emails are ever passed into the analytics payload.

## UTM Tracking
A new `captureUTMs` utility was integrated into `RootLayout.tsx` and `LandingPage.tsx`. It intercepts URL parameters (`utm_source`, `utm_medium`, `utm_campaign`, `utm_term`, `utm_content`) and stores them in `sessionStorage`.

## Attribution
The system implements a **First-Touch Session Attribution** model. Once UTMs are captured in a session, they are locked into `sessionStorage` and automatically appended to all subsequent events fired by `trackEvent`. This ensures the conversion is correctly attributed to the ad click, even if the user navigates through multiple internal pages before converting.

## Form Conversion
- **Contact Page:** Uses a manual `fetch` to submit the Netlify form. Upon a `200 OK`, it fires `contact_form_submit`, flags `pending_lead` in session storage, and navigates to `/thank-you`.
- **Landing Page:** Uses a native HTML `<form action="/thank-you">`. The `onSubmit` handler fires `landing_form_submit` and flags `pending_lead` just before the browser follows the native redirect.

## WhatsApp Conversion
WhatsApp clicks are tracked accurately (`cta_whatsapp`, `landing_whatsapp_click`) via click handlers on anchor tags. These represent high-intent soft conversions but are intentionally distinct from `lead_generated`.

## Email Conversion
Email clicks (`cta_email`, `landing_email_click`) are tracked similarly to WhatsApp to measure outbound communication intent.

## Thank You Flow
The `/thank-you` page includes a `useEffect` hook that checks for a valid `pending_lead` flag in `sessionStorage`. If present, it fires the highly-valued `lead_generated` event and immediately clears the flag.

## Duplicate Conversion Protection
By requiring the `pending_lead` flag to fire `lead_generated`, the system is immune to duplicate conversion fires caused by:
- Refreshing the `/thank-you` page.
- Using the browser back button to return to the `/thank-you` page.
- Direct linking to the `/thank-you` page by curious users.

## Privacy
- The system operates strictly via first-party contextual tracking.
- No PII is collected in the analytics stream.
- UTM parameters are stored in ephemeral `sessionStorage` (which clears when the tab closes) rather than persistent cookies.
- No cross-site tracking or fingerprinting is utilized.

## Google Ads Readiness
- A global `window.gtag` interface was defined.
- `trackEvent` safely forwards all events to `gtag` if the script is present on the page.
- Includes a dedicated `lead_generated` block pre-configured to fire a Google Ads Conversion action (`send_to: AW-CONVERSION_ID/CONVERSION_LABEL`).

## Meta Ads Readiness
- A global `window.fbq` interface was defined.
- Events seamlessly map to standard Meta Pixel events (`fbq('track', 'Lead')`) for confirmed conversions, and `trackCustom` for granular UI interactions.

## Testing
- Form submittal verified successfully with zero console errors.
- Session storage attribution flow (UTM → Form → Thank You → Flag clearing) logic validated.

## Build Verification
- Vite build completed in under 8 seconds.
- Zero TypeScript errors.

## Remaining Limitations
- While the architecture is complete, the actual Google Analytics / Google Ads tags must still be added to `index.html` before live paid traffic begins.
