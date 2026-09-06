# Phase 16 — Google Ads Search Campaign Strategy

## Objective
To prepare a professional, highly targeted Google Search Ads campaign structure designed to generate qualified B2B software engineering leads for Corelane Systems. This strategy is engineered to capture commercial and transactional search intent while avoiding wasted ad spend on low-intent, informational queries.

## Business Positioning
Corelane Systems is positioned strictly as a professional software engineering and technology partner. We are avoiding terms associated with cheap "web design agencies" or generic digital marketing services. Our target audience is Startups, SMEs, and growing international businesses seeking durable, scalable technical solutions (Custom Software, Web Apps, Cloud/DevOps).

## Campaign Architecture
| Campaign | Ad Group | Keyword Theme | Landing Page | CTA | Conversion |
|----------|----------|---------------|--------------|-----|------------|
| CL - Search - Custom Software | Enterprise Software | "custom business software" | `/landing/custom-software` | Discuss Your Project | `lead_generated` |
| CL - Search - Custom Software | Software Development | "custom software development company" | `/landing/custom-software` | Discuss Your Project | `lead_generated` |
| CL - Search - Web Apps | Web App Development | "custom web application development" | `/landing/web-application` | Get an Estimate | `lead_generated` |
| CL - Search - Automation | Business Automation | "workflow automation software" | `/landing/automation` | Automate Workflows | `lead_generated` |
| CL - Search - Cloud / DevOps | Cloud Engineering | "cloud engineering consulting" | `/landing/cloud-devops` | Consult an Engineer | `lead_generated` |

## Campaign Priorities
1. **P1 (Launch Candidates):** Custom Software Development. (High commercial intent, highest LTV, landing page is fully prepared).
2. **P2 (Test Later):** Web Application Development, Business Automation. (Strong intent, requires dedicated landing pages to be rolled out via the Phase 14 architecture).
3. **P3 (Future):** Cloud / DevOps Services. (Highly specialized, often requires longer B2B sales cycles; better suited for LinkedIn Ads or ABM in the future, but worth capturing bottom-of-funnel search demand later).

## Keyword Strategy
Focus strictly on High Commercial Intent search terms.

| Keyword | Intent | Match Type | Campaign | Ad Group |
|---------|--------|------------|----------|----------|
| [custom software development company] | HIGH | Exact | Custom Software | Software Development |
| "custom business software" | HIGH | Phrase | Custom Software | Enterprise Software |
| "business software development" | HIGH | Phrase | Custom Software | Enterprise Software |
| [custom web application development] | HIGH | Exact | Web Apps | Web App Development |
| "workflow automation software development" | HIGH | Phrase | Automation | Business Automation |
| [cloud engineering consulting] | HIGH | Exact | Cloud / DevOps | Cloud Engineering |

## Negative Keyword Strategy
We must aggressively filter out low-intent searchers (students, job seekers, DIYers).

| Negative Keyword | Reason | Scope |
|------------------|--------|-------|
| jobs | Seeking employment, not services | Account |
| salary | Seeking career info | Account |
| course | Seeking education | Account |
| tutorial | Seeking DIY education | Account |
| free | Not a commercial buyer | Account |
| cheap | Low budget / wrong persona | Account |
| github | Seeking open source code | Account |
| template | Seeking DIY solutions | Campaign (Custom Software) |
| internship | Seeking employment | Account |

## Match Type Strategy
**Initial Launch:** Start strictly with Exact Match `[]` and tight Phrase Match `""` to maintain absolute control over search term relevance during the learning phase.
**Growth Phase:** Broad match will ONLY be tested after the account achieves at least 15-30 verified `lead_generated` conversions per month, allowing Google's Smart Bidding algorithm (Target CPA) to effectively qualify broad traffic.

## Ad Group Structure
Ad groups are tightly themed (Single Intent Ad Groups) to ensure the search term perfectly matches the Ad Headline, which perfectly matches the Landing Page headline.

## Ad Copy
Responsive Search Ads (RSAs) focusing on outcome and technical capability.

| Campaign | Headline | Description | CTA Theme |
|----------|----------|-------------|-----------|
| Custom Software | Custom Software Development | Build custom business software around your actual workflows and operational requirements. | Discuss Your Project |
| Custom Software | Software Built For Your Business | Replace disconnected spreadsheets with centralized, scalable web applications. | Talk to an Engineer |
| Custom Software | Modernize Manual Workflows | Expert engineering teams ready to design, build, and deploy your custom system. | Request Consultation |

## Landing Page Mapping
| Campaign | Landing Page |
|----------|--------------|
| Custom Software | `/landing/custom-software` |
| Web Applications | `/landing/web-applications` (To be created) |
| Business Automation | `/landing/business-automation` (To be created) |
| Cloud / DevOps | `/landing/cloud-devops` (To be created) |

*Note: Paid traffic is directed to `/landing/*` routes (no main navbar) to maximize conversion rates, rather than standard informational `/services/*` pages.*

## Location Strategy
- **Priority (Test First):** Pakistan (Lower CPCs, good for initial conversion tracking verification and local lead generation), UAE (High commercial value, geographically close).
- **Test (Secondary):** UK, USA (Higher CPCs, requires higher daily budgets and strong conversion rates to prove ROI).
- **Strategy:** Distinct campaigns per major region (e.g., `CL-Search-PK-CustomSoftware`, `CL-Search-US-CustomSoftware`) to allow budget control by geography. No fake local addresses will be used in ad copy.

## Budget Framework
- **Test Tier (Months 1-2):** Limited budget allocated to exact/phrase match on P1 campaigns. Focus is on capturing intent and verifying that the `lead_generated` event fires correctly in the Google Ads interface.
- **Moderate Tier (Months 3-4):** Expand to P2 campaigns and additional priority locations as Cost Per Lead (CPL) stabilizes.
- **Growth Tier (Months 5+):** Uncapped budgets on campaigns meeting target ROAS/CPL.

## Bidding Framework
- **Phase 1 (0 Conversions):** *Maximize Clicks* (with a strict Max CPC bid limit) or *Manual CPC* to aggressively gather initial search term data and force the first few conversions.
- **Phase 2 (15+ Conversions/mo):** Switch to *Maximize Conversions* (Target CPA) to let Google optimize for the `lead_generated` action.

## Conversion Tracking
The system relies exclusively on the robust Phase 15 architecture:
- Primary Optimization Action: `lead_generated` (Fires only on verified form submittal via `/thank-you` session flag).
- Secondary Observation Actions: `landing_whatsapp_click`, `landing_email_click` (Used to gauge intent but not to train the primary bidding algorithm).

## UTM / GCLID Readiness
Auto-tagging will be enabled in the Google Ads account. The `captureUTMs` utility in the React application is already prepared to intercept manual UTMs for internal analytics without breaking the GCLID routing.

## Search Term Optimization
- **Weekly Cadence:** Review the Search Terms report.
- **Action:** Add irrelevant terms to the Negative Keyword List. Promote highly converting long-tail terms to their own Exact Match ad groups.

## Launch Checklist
Please refer to `GOOGLE_ADS_LAUNCH_CHECKLIST.md` for the final verification steps required before toggling the campaigns to active.

## Risks
- **High CPCs in US/UK:** B2B software terms are highly competitive. Budgets can be exhausted quickly if broad match is used too early.
- **Lead Quality:** Filtering out students and small businesses wanting "cheap websites" requires aggressive negative keyword management.

## Recommendations
Do NOT launch until the Google Ads Conversion Tracking tag (gtag) is physically injected into `index.html` and tested via Google Tag Assistant. Stick to the P1 campaign first to prove the funnel.
