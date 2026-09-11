# Phase 19: Premium Scroll-Driven Homepage Redesign

This plan outlines the architecture and execution steps to transform the Corelane Systems Homepage into a continuous, Awwwards-level visual story using modern animation libraries.

## User Review Required
> [!IMPORTANT]
> **Performance & Compatibility:** Introducing GSAP, ScrollTrigger, and Lenis will slightly increase the initial JS bundle size. We will use dynamic imports where possible to optimize load times.
> **Mobile Experience:** Complex scroll animations (like horizontal scrolling) can sometimes feel clunky on mobile devices. We will design these animations to either degrade gracefully or use touch-optimized variants on smaller screens.

## Open Questions
> [!TIP]
> 1. Do you want the "Scroll-Driven Horizontal Section" to be used for the **Process** section or the **Services** section? (I recommend **Process** as it naturally reads like a timeline left-to-right).
> 2. Should we disable smooth scrolling on mobile devices? (Native mobile scrolling is often better for touch, while Lenis is perfect for desktop mice/trackpads).

## Proposed Changes

### 1. Foundation & Dependencies
- **[NEW]** Install required packages:
  `npm install gsap framer-motion @studio-freight/lenis`

### 2. Smooth Scroll Architecture
We must ensure Lenis operates in perfect sync with GSAP's `ticker` to prevent jittering during pinned animations.

#### [NEW] `src/providers/SmoothScrollProvider.tsx`
- Setup `@studio-freight/lenis`.
- Integrate `gsap.ticker.add` with `lenis.raf`.
- Respect `prefers-reduced-motion` media queries (disable Lenis if true).

#### [MODIFY] `src/layouts/RootLayout.tsx`
- Wrap the `<main>` application layer in `<SmoothScrollProvider>`.

### 3. Animation Utility Components
To keep the codebase clean and avoid mixing GSAP and Framer Motion concerns, we will build strictly purposed wrappers.

#### [NEW] `src/components/animations/Reveal.tsx` (Framer Motion)
- For small UI interactions (fade up, scale in) using Framer Motion's `useInView` and `motion` components.

#### [NEW] `src/components/animations/Parallax.tsx` (GSAP)
- For background and foreground depth separation.

### 4. Homepage Visual Storytelling (Section Overhauls)

#### [MODIFY] `src/components/sections/home/HeroSection.tsx`
- **GSAP:** Add a scroll-linked parallax effect. As the user scrolls, the background grid and visual nodes fade/scale down while the text moves up at a different velocity.

#### [MODIFY] `src/components/sections/home/ProcessSection.tsx`
- **GSAP ScrollTrigger:** Transform this into a **Horizontal Scroll Timeline**. As the user scrolls down into the section, it "pins" to the screen, and the process steps slide horizontally from right to left, simulating a journey.

#### [MODIFY] `src/components/sections/home/BusinessProblemsSection.tsx`
- **GSAP ScrollTrigger:** Pin the "Problems" text on the left side of the screen while the "Solutions/Our Approach" cards scroll past on the right side.

#### [MODIFY] `src/components/sections/home/ServicesSection.tsx`
- **Framer Motion:** Implement staggered reveal animations for the service cards so they elegantly pop into view one by one as they enter the viewport.

## Verification Plan

### Automated Tests
- `npm run build` to ensure no TypeScript or Vite bundle errors with the new libraries.
- Check ESLint/Oxlint for unused imports.

### Manual Verification
1. Test scroll behavior on Desktop (Chrome, Safari, Firefox).
2. Test pinning mechanics on Mobile (iOS/Android).
3. Verify that disabling animations in OS settings (Reduced Motion) bypasses GSAP and Lenis smoothly.
