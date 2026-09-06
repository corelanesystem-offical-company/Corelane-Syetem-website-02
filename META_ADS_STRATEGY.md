# Meta Ads (Facebook + Instagram) Lead Generation Strategy

## 1. Executive Summary
This document outlines the Meta Ads B2B lead generation strategy for Corelane Systems. The focus is exclusively on driving qualified project inquiries for custom software, business automation, and cloud/DevOps engineering. The strategy avoids vanity metrics, generic "web design" positioning, and cheap traffic tactics, aiming instead for high-value B2B decision-makers.

## 2. Business Objective
**Primary Objective:** QUALIFIED B2B LEADS.
**Primary Conversion Action:** Qualified contact form submission (`lead_generated`), Project inquiry, WhatsApp conversation.
**Secondary Actions:** Landing page views, CTA clicks.
The goal is to convert founders, business owners, and technical decision-makers into verifiable project consultations.

## 3. Campaign Architecture
We recommend starting with a focused, limited number of campaigns to prevent budget fragmentation.

### CAMPAIGN 1 — B2B CUSTOM SOFTWARE LEADS (Priority: P1)
- **Offer:** Custom Business Software / Web Applications
- **Target:** Business owners, Founders, SMEs, Operations leaders.
- **Landing Page:** `/landing/custom-software` (Ready)
- **Reasoning:** Highest LTV, broadest applicability to non-technical founders suffering from manual spreadsheet workflows.

### CAMPAIGN 2 — BUSINESS AUTOMATION (Priority: P2)
- **Offer:** Workflow Automation & Process Engineering
- **Target:** Operations managers, SME owners scaling up.
- **Landing Page:** Needs `/landing/business-automation` (Future Phase)
- **Reasoning:** Highly compelling pain point (saving time/money) but requires a dedicated, outcome-focused landing page before launching.

### CAMPAIGN 3 — CLOUD + DEVOPS (Priority: P3)
- **Offer:** Cloud Architecture, CI/CD, Deployment Infrastructure
- **Target:** Technical decision-makers, CTOs of startups.
- **Landing Page:** Needs `/landing/cloud-devops` (Future Phase)
- **Reasoning:** Highly niche audience on Meta. Longer sales cycle. Best reserved for Retargeting or tested later.

## 4. Market Strategy
- **Pakistan (Priority 1):** Best for initial algorithm training and testing creative resonance at a lower CPM. High commercial intent for local digital transformation.
- **UAE (Priority 2):** High commercial value, geographic proximity. Excellent for B2B expansion.
- **UK / USA / Canada (Priority 3-5):** High CPMs. Wait until the funnel is proven in PK/UAE. Position as a premium, remote international engineering partner. No fake local office claims.

## 5. Audience Strategy
Targeting must rely on Meta's current broad machine learning and proven interest categories.
- **A. BROAD BUSINESS AUDIENCE:** Business owners, Founders, Entrepreneurship. Let the ad copy and creative do the filtering.
- **B. TECHNOLOGY-ORIENTED:** Interests in SaaS, Cloud computing, Business software.
- **C. RETARGETING:** 7-day landing page visitors, 14-day engaged social users, 30-day website visitors. Exclude recent converters (leads).

## 6. Creative Strategy
Avoid generic "Top IT Company" graphics. Use:
- **Problem → Solution:** Visualizing spreadsheet chaos vs. a clean custom dashboard.
- **Technical Credibility:** Showcasing clean code snippets, cloud architecture diagrams, or modern UI layouts.
- **Educational:** Carousel posts breaking down the cost of manual workflows.

## 7. Ad Copy Framework (Custom Software)
- **Angle A (Business Problem):** "Spending 10 hours a week copying data between spreadsheets? Custom software automates the manual work so your team can focus on growth."
- **Angle B (Disconnected Systems):** "When your CRM, accounting, and operations tools don't talk to each other, errors happen. We build custom API integrations to connect your business."
- **Angle C (Scaling Business):** "Off-the-shelf software forces you to change your business. Corelane builds custom web applications designed exactly around your workflows."

## 8. Landing Page Mapping
- **Custom Software Ad** → `/landing/custom-software`
- *Future:* **Automation Ad** → `/landing/business-automation`
- **Message Match:** The headline of the ad MUST match the headline of the landing page. No bait-and-switch.

## 9. Lead Funnel
1. **Meta Ad Click**
2. **Landing Page View** (`landing_view` fired)
3. **CTA Interaction** (`landing_hero_cta`, `landing_form_start` fired)
4. **Form Submission** (Netlify Form submits, `pending_lead` stored)
5. **Thank You Page** (`lead_generated` fired to Meta Pixel)
6. **Sales Follow-up**

## 10. Tracking Architecture
We are utilizing the Phase 15 architecture found in `src/utils/analytics.ts`.
- `window.fbq` is pre-configured to capture standard events.
- `lead_generated` maps to Meta's standard `Lead` event.
- High-intent WhatsApp clicks map to `WhatsAppClick` Custom Event.

## 11. UTM Strategy
Append the following to all Meta Ads URLs to ensure attribution passes through to the Netlify Form:
`?utm_source=facebook&utm_medium=paid_social&utm_campaign={{campaign.name}}&utm_content={{ad.name}}`
Our `captureUTMs` utility will store this in `sessionStorage` and append it to the lead event.

## 12. Retargeting Strategy
- **7-Day High Intent:** Visited `/landing/custom-software` but did not reach `/thank-you`. Show technical credibility / FAQ carousel.
- **30-Day General:** Visited main website. Show business automation or consultation offer.

## 13. Lead Qualification
- **HOT:** Defined software problem, has budget, requested consultation via form.
- **WARM:** Exploring options, engaged via WhatsApp with general questions.
- **COLD:** Student looking for internships (Filtered via creative and ad copy exclusions).

## 14. Testing Framework
- **Primary KPI:** Cost Per Qualified Lead (CPQL).
- **Secondary KPIs:** CTR (Hook strength), Landing Page Conversion Rate (Offer strength).
- **Test Matrix:** 2 Audiences × 3 Creatives × 2 Copy Angles. Do not change everything at once.

## 15. Budget Framework
- **TEST:** 1 Campaign, Broad Audience, 3 Creatives. Validate tracking and identify baseline CTR/CPL.
- **MODERATE:** Expand to Lookalike audiences and UAE market once baseline is established.
- **GROWTH:** Scale daily budgets by 20% every 3 days on winning ad sets. Introduce P2 campaigns.

## 16. Optimization Framework
- **Low CTR:** Hook/Creative is failing. Pause and replace.
- **High CTR, Low Conversion:** Landing page message mismatch or form is too long.
- **High Conversion, Low Quality:** Ad copy is too clickbaity or targeting is too broad. Tighten copy (e.g., mention "B2B", "Enterprise").

## 17. Sales Handoff
- Leads arrive via Netlify Forms email notification.
- SDR/Founder reviews submission (Name, Business, Problem, Project Stage).
- Outreach via Email or WhatsApp to schedule a Technical Discovery Call.

## 18. Compliance Checklist
- [x] No guaranteed ROI claims.
- [x] No deceptive before/after software claims.
- [x] No assumptions of user's personal attributes.
- [x] Clear privacy policy links on landing page.
- [x] Non-discriminatory targeting (No exclusion by age/gender for business services).

## 19. Launch Checklist
- [ ] Meta Business Manager configured.
- [ ] Meta Pixel base code installed in `index.html`.
- [ ] Events tested via Meta Events Manager.
- [ ] Domain verified in Meta Business Manager.
- [ ] Aggregated Event Measurement configured.
- [ ] Creatives loaded and UTMs applied.
