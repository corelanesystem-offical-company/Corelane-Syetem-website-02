# SEO Implementation & Architecture

This document serves as the central record for Corelane Systems' technical SEO architecture on the Netlify Static React SPA.

## 1. SEO Component Architecture
All pages utilize a centralized `<SEO />` component (`src/components/seo/SEO.tsx`) leveraging `react-helmet-async`.
This ensures consistent and deduplicated rendering of:
- Meta Title & Description
- Canonical URLs (Absolute paths referencing the base domain)
- Open Graph (OG) & Twitter Cards
- JSON-LD Structured Data

## 2. Canonical Strategy
The permanent canonical domain is set to `https://corelanesystem.com/` in `src/utils/cn.ts` (`SITE_URL`).
The `<SEO />` component constructs canonical URLs dynamically:
- Homepage: `canonical="/"` resolves to `https://corelanesystem.com/`
- Subpages: `canonical="/about"` resolves to `https://corelanesystem.com/about`
- Dynamic pages (e.g., Services): `canonical={"/services/" + slug}` resolves to the specific service page.

## 3. Metadata & JSON-LD
We rely heavily on structured JSON-LD data to accurately communicate Corelane Systems' identity to search engines without spamming visible text:
- **Index.html**: Contains static `WebSite` and `Organization` schemas.
- **Service Pages**: Generate specific `Service` JSON-LD payloads.
- **Location Pages**: Generate an `Organization` schema with `areaServed` specific to the targeted country (Pakistan, UAE, UK, USA, Canada). *Note: We intentionally do NOT use `LocalBusiness` schema for international locations to avoid claiming fake physical offices.*
- **Blog Posts**: Automatically inject `BlogPosting` schemas.

## 4. Redirect Strategy & Netlify Routing
The `public/_redirects` and `netlify.toml` files manage the domain flow:
1. **Canonical Enforcement**: Any request to `www.corelanesystem.com` is `301` redirected to the `non-www` root domain.
2. **SPA Fallback**: The React application is served via `/* /index.html 200`. Since invalid URLs technically return a `200` from the server, we strictly handle 404s inside React (`<NotFound />`) which injects a `<meta name="robots" content="noindex, nofollow" />` to prevent soft-404 indexation issues.

## 5. Sitemap & Robots Strategy
- **Sitemap**: A static `sitemap.xml` exists in `/public/sitemap.xml` referencing the primary canonical production domain. All dynamic/static marketing routes are included.
- **Robots**: The `robots.txt` explicitly disallows utility paths (`/404`, `/thank-you`) and specific non-HTML paths (`/svg`) that caused previous crawl errors, while allowing open access to all other paths.

## 6. International SEO
Corelane maintains distinct hub pages for regions (Pakistan, UAE, UK, USA, Canada).
These are independent crawlable URLs (`/locations/[country]`) rather than dynamically localized content or forced IP-redirects. Each location has unique H1 tags, localized context, and `areaServed` JSON-LD to naturally rank for regional queries.

## 7. Future Custom-Domain Migration
Because `SITE_URL` is configured centrally as `https://corelanesystem.com` and hardcoded in the `sitemap.xml` and base `index.html` schemas, connecting the final domain to Netlify will require **no code changes**. The site is inherently ready for the production domain.
