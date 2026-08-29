# B2B Conversion & Lead Generation System

## 1. Primary CTA
The primary conversion action is **"Start a Project"**, which directs users to the centralized `/contact` page. This CTA is used consistently across the hero sections, navigation bar, and sticky mobile footers to capture high-intent users.

## 2. Secondary CTA
The secondary conversion action is **"WhatsApp Us"**. This is used for faster, lower-friction inquiries and is positioned alongside the primary CTA on major sections, as a floating action button on desktop, and in the sticky mobile footer.

## 3. Contact Flow
When a user clicks "Start a Project":
1. They are taken to `/contact`.
2. They are presented with a professional, comprehensive project inquiry form (Name, Company, Work Email, Service Required, Project Type, Budget, Timeline, Message).
3. The form tracks engagement via `contact_form_start`.
4. Upon successful validation and submission, the form tracks `contact_form_submit` and forwards the user to `/thank-you` (simulated until backend integration).
5. The `/thank-you` page confirms receipt and offers options to explore services or connect via WhatsApp.

## 4. WhatsApp Flow
When a user clicks "WhatsApp Us":
1. The click is tracked via `cta_whatsapp`.
2. The user is redirected to the WhatsApp API (`https://api.whatsapp.com/send/`) with the pre-filled Corelane Systems number (+92 301 2756091).
3. The message is pre-filled with a professional template:
   ```
   Hello Corelane Systems,
   I would like to discuss a technology project.
   Business:
   Service:
   Project requirement:
   Please let me know how we can proceed.
   ```

## 5. Lead Qualification
Leads are qualified internally based on the data provided in the contact form or WhatsApp message:
*   **HOT**: Clear project objective + defined budget/timeline + specific business requirement.
*   **WARM**: Has a real requirement but timeline or budget is unclear ("Prefer to discuss").
*   **EXPLORING**: Researching options, "Just exploring", or "Not sure".

## 6. Conversion Funnel
The documented visitor journey is:
`Landing Page` → `Service / Industry Page` → `Trust Building (Projects/Capabilities)` → `CTA` → `Contact Form / WhatsApp` → `Lead Qualification` → `Discovery Call` → `Architecture & Proposal` → `Client`.

## 7. Analytics Events
A centralized tracking utility is located at `src/utils/analytics.ts`. It currently logs events to the console in development and is prepared for future integration with Google Analytics, Plausible, or PostHog.
Tracked Events:
*   `cta_start_project`
*   `cta_whatsapp`
*   `cta_email`
*   `contact_form_start`
*   `contact_form_submit`
*   `contact_form_error`
*   `service_cta_click`
*   `industry_cta_click`
*   `location_cta_click`

## 8. Future Form Integration
Currently, the `/contact` form simulates submission because the website operates as a static React SPA without a backend.
**To activate the form:**
1. Connect the `handleSubmit` function in `src/pages/Contact.tsx` to a form provider (e.g., Netlify Forms, Formspree, or a custom API endpoint).
2. Remove the `setTimeout` simulation.
3. Pass the `formData` state object in the POST request body.
4. Render the `contact_form_error` event if the network request fails.

## 9. Sales-Team Handoff Process
1. Inquiry received (via Form integration or WhatsApp).
2. Initial review by the engineering/sales team within 24 hours.
3. Lead qualification (Hot/Warm/Exploring).
4. Initial response to schedule a 30-minute technical Discovery Call.
5. Post-call, delivery of an architecture plan and engagement model.
