# Phase 14 — Paid Ads Landing Page System

## Objective
The goal of this phase was to engineer a dedicated, high-conversion landing page architecture (`/landing/:slug`) specifically for paid traffic (Google Ads, LinkedIn Ads, Meta Ads). The system needed to remain completely separate from the core corporate website layout, focusing heavily on lead generation while reusing existing Corelane UI primitives to maintain brand consistency.

## Architecture
- **Dedicated Layout:** Bypassed the standard `RootLayout` in React Router to remove the corporate navbar and footer. This prevents visitors from navigating away from the conversion goal.
- **Data-Driven Approach:** Landing pages are generated dynamically via a single `LandingPage.tsx` component that reads from a central configuration file (`src/data/landingPages.ts`).
- **Minimal Header & Footer:** Includes only the Corelane logo and primary CTAs, with a simplified copyright footer.

## Route
- Added `<Route path="landing/:slug" element={<LandingPage />} />` to `src/router/index.tsx`.
- The route sits safely outside of the standard corporate `Navbar/Footer` hierarchy but preserves full React Router navigation capabilities.

## Reusable Components
- **Leveraged Core UI:** Relied on existing `Section`, `Container`, `Button`, `SectionHeader`, and `Badge` components.
- **WhatsApp FAB:** Imported the existing `WhatsAppFAB` to ensure cross-platform consistency for direct messaging.
- **Icons:** Utilized `lucide-react` for lightweight, scalable SVGs.

## Data Model
- Created the `LandingPageConfig` TypeScript interface in `src/data/landingPages.ts`.
- The schema is strictly typed to include: `hero`, `problem`, `solution`, `capabilities`, `technology`, `process`, `industries`, `faq`, and `cta`.

## Initial Campaign
- **Campaign Name:** Custom Business Software
- **Slug:** `/landing/custom-software`
- **Positioning:** Built for businesses seeking to replace disconnected spreadsheets and manual workflows with dedicated internal systems, portals, and dashboards.
- **Primary CTA:** "Discuss Your Project"

## Conversion Strategy
- **Frictionless Form:** Uses a focused 4-field structure (Name, Email, Phone, Requirements) tied directly to Netlify Forms.
- **Sticky Header CTA:** Ensures the primary call-to-action is always visible as the user scrolls.
- **WhatsApp Integration:** Secondary CTA provides an immediate, low-friction chat alternative.

## Analytics
- Extended `AnalyticsEvent` in `src/utils/analytics.ts`.
- Added custom events: `landing_view`, `landing_hero_cta`, `landing_form_submit`, and `landing_whatsapp_click`.
- Added UTM tracking capabilities to parse source/campaign data during the initial `landing_view` event.

## UTM Support
- Utilizes React Router's `useSearchParams` to capture `utm_source`, `utm_medium`, and `utm_campaign` on mount, passing them directly to the `trackEvent` analytics function.

## Netlify Forms
- Integrated perfectly with the existing Netlify infrastructure.
- Uses `data-netlify="true"`, hidden `form-name="landing-contact"`, a honeypot field, and correctly formats the payload for Netlify bots.
- Submissions redirect to the standard `/thank-you` page.

## SEO Strategy
- Added dynamic `<Helmet>` support for `metaTitle`, `metaDescription`, and Open Graph tags.
- Allows configuration-level `noIndex` flags so that paid landing pages do not unnecessarily cannibalize organic rankings for the main corporate service pages.
- Added self-referencing canonical URLs.

## Google Ads Readiness
- The pages load instantly, are completely responsive, and do not use bridge/gateway redirects.
- They conform to Google Ads' Destination Requirements (functional back button, clear business purpose, no intrusive popups).

## Accessibility
- Implemented standard contrast ratios, readable typography, and semantic HTML (H1, H2, H3 hierarchy).
- Form inputs have associated labels and semantic types (`email`, `tel`).

## Performance
- The architecture is extremely lightweight. Relies on Tailwind utility classes and lazy loading.
- Avoids heavy background videos, sliders, or particle effects, ensuring immediate First Contentful Paint (FCP) on mobile networks.

## Mobile QA
- Tested down to 320px screens. All grids stack vertically (`grid-cols-1`).
- CTA buttons stretch to full width on mobile (`w-full sm:w-auto`) for easier touch targets.

## Desktop QA
- Constrained with `max-w-4xl` for Hero copy and `max-w-7xl` (via Container) for content sections to maintain readability on ultra-wide monitors.

## Build Verification
- Build: PASS
- TypeScript: PASS (0 errors)
- Fast compilation time (~5 seconds) with perfect chunking.

## Future Campaign Expansion
- New campaigns (e.g., Cloud Engineering, Business Automation) can be launched in minutes simply by adding a new JSON object to `landingPages.ts`. No new React components are required.

## Known Limitations
- Analytics currently logs to the console in development mode. Before running live paid traffic, the `trackEvent` utility must be connected to the specific tracking pixel (e.g., Google Ads Conversion Tracking, Meta Pixel, or GA4).
