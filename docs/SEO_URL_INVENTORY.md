# SEO URL Inventory

This document tracks all active public routes on the Corelane Systems website to ensure comprehensive SEO coverage.

| URL Path | Page Type | Indexable | Canonical | Meta Title | H1 | Internal Links | Status |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| `/` | Homepage | Yes | `/` | Corelane Systems — Software Development & Cloud Engineering | Technology Built Around Your Business. | Yes | PASS |
| `/about` | Static | Yes | `/about` | About Corelane Systems... | About Corelane Systems | Yes | PASS |
| `/services` | Static (Hub) | Yes | `/services` | Software Development & Cloud Engineering Services... | Our Services | Yes | PASS |
| `/industries` | Static (Hub) | Yes | `/industries` | Industries We Serve... | Industries We Serve | Yes | PASS |
| `/locations` | Static (Hub) | Yes | `/locations` | International Software Development... | International Services | Yes | PASS |
| `/process` | Static | Yes | `/process` | Our Process... | Our Process | Yes | PASS |
| `/case-studies` | Static | Yes | `/case-studies` | Case Studies... | Case Studies | Yes | PASS |
| `/blog` | Static (Hub) | Yes | `/blog` | Blog & Insights... | Insights & Engineering Blog | Yes | PASS |
| `/contact` | Static | Yes | `/contact` | Contact Us... | Start a Project | Yes | PASS |
| `/thank-you` | Technical | No | `/thank-you` | Thank You... | Thank You | Yes | PASS |
| `/services/[slug]` | Dynamic (10 pages) | Yes | `/services/[slug]` | Dynamic (via services.ts) | Dynamic | Yes | PASS |
| `/industries/[slug]` | Dynamic (8 pages) | Yes | `/industries/[slug]` | Dynamic (via industries.ts) | Dynamic | Yes | PASS |
| `/locations/[slug]` | Dynamic (5 pages) | Yes | `/locations/[slug]` | Dynamic (via locations.ts) | Dynamic | Yes | PASS |
| `/blog/[slug]` | Dynamic | Yes | `/blog/[slug]` | Dynamic (via blogPosts.ts) | Dynamic | Yes | PASS |
| `/*` (404) | Fallback | No | N/A | 404 — Page Not Found... | Page Not Found | Yes | PASS |

## Notes
- All static routes have explicit canonical paths defined in their top-level component.
- All dynamic routes derive their canonical paths and titles automatically based on their slug.
- The `404` and `thank-you` pages explicitly declare `<meta name="robots" content="noindex, nofollow" />`.
- All paths are relative inside the `SEO` component and automatically resolve to the full `https://www.corelanesystems.com/` domain.
