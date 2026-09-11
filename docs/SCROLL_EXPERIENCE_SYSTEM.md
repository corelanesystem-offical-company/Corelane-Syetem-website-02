# Corelane Systems: Scroll-Driven Experience System

This document outlines the architecture, rules, and strategies for the scroll-driven animation system across the Corelane Systems website. It ensures a premium, coherent, and highly performant experience that communicates "engineering excellence" rather than generic agency flair.

## 1. Animation Architecture

We use a specific, strictly separated stack to avoid conflicts and maintain high performance:

- **Lenis:** Handles global smooth scrolling (Desktop only). Provides the buttery-smooth foundation that makes scroll-linked animations feel premium.
- **GSAP & ScrollTrigger:** The primary engine for scroll-linked animations (e.g., pinning, horizontal scrolling, scrubbed parallax, timelines).
- **Framer Motion:** Used exclusively for UI micro-interactions (e.g., button hovers, modal reveals, staggered grids, simple fade-ups that don't require heavy scroll tracking).

### Core Primitives
We abstract animation logic into reusable components:
- `Reveal` (Framer Motion): Simple opacity/y-offset reveals triggered when entering the viewport.
- `Parallax` (GSAP): Simple scrubbed background/foreground depth separation.
- `ScrollPin` (GSAP): Pins an element on one side while the other side scrolls (e.g., sticky sidebars).
- `HorizontalScroll` (GSAP): Translates a wide container along the X-axis while pinned on the Y-axis.

## 2. Visual Language & Metaphors

Animations must communicate: **systems, architecture, technology, data, cloud, and engineering.**

**DO:**
- Reveal systems sequentially (like a deployment pipeline).
- Use subtle parallax to represent architecture layers (foreground vs. background).
- Pin content to let data/information "flow" past it.
- Maintain sharp, precise easing curves (e.g., `ease: [0.16, 1, 0.3, 1]`).

**DO NOT:**
- Add random floating shapes or excessive particles.
- Use bouncy or playful physics.
- Add meaningless 3D flip effects.

## 3. Page Animation Strategy

Different pages serve different purposes and require different animation intensities.

- **HOME:** Cinematic experience. Features heavy pinning, parallax, and horizontal scrolling.
- **SERVICES:** Structural. Uses staggered reveals, technical diagram reveals, and subtle parallax. Focuses on presenting technology systems.
- **PROCESS:** Narrative. Uses the strongest scroll-driven timeline (pinned horizontal progression on desktop).
- **CASE STUDIES / INDUSTRY DETAIL:** Story-driven. Focuses on challenge -> architecture -> result. Restrained animations.
- **BLOG / CONTACT:** Utility-first. Readability and conversion are paramount. Minimal to zero scroll-hijacking.

## 4. Responsive & Mobile Strategy

- **Desktop (>= 1024px):** Full scroll-driven experience (Lenis smooth scroll, pinning, horizontal scrub).
- **Tablet (768px - 1023px):** Reduced complexity. No horizontal scrolling, simplified pinning.
- **Mobile (< 768px):** Native vertical scrolling. **DO NOT force smooth scrolling.** Elements should use simple `FadeUp` reveals instead of scrubbed animations.

*Rule:* Mobile must feel intentionally designed, relying on standard vertical layout flow rather than broken or disabled desktop pinning.

## 5. Reduced-Motion Strategy

We strictly respect the user's OS-level accessibility preference:
`@media (prefers-reduced-motion: reduce)`

When enabled:
- Lenis smooth scrolling is completely disabled.
- GSAP scrub animations are bypassed (`return` early from the `useLayoutEffect`).
- Framer Motion transitions are set to 0 duration or entirely bypassed.
- Content must remain fully visible and navigable.

## 6. Performance Strategy

- **CSS Properties:** Only animate `transform` and `opacity` to avoid layout thrashing. Never animate `top`, `left`, `width`, or `height`.
- **GSAP Cleanup:** Every GSAP `context` or `ScrollTrigger` MUST be cleaned up in the `return () => ctx.revert()` function of the `useEffect`.
- **Measurement:** Use `ScrollTrigger.refresh()` if dynamic content resizes the DOM.
- **DOM Depth:** Avoid deeply nested animation wrappers. Apply animations as close to the target element as possible.

## 7. QA Strategy

Before deploying any page, verify against this checklist:
1. Scroll down & up repeatedly (check for stuck pins).
2. Resize window rapidly (check if ScrollTrigger recalculates correctly).
3. Test on a physical mobile device (ensure native touch scrolling is active and fluid).
4. Emulate `prefers-reduced-motion` in DevTools (ensure no animations trigger).
5. Verify Netlify Forms and links remain clickable (no invisible overlapping divs from bad z-indexes).
