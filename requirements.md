# Requirements — pastel-makeup-and-style.com

## Functional Requirements

### Core Pages
- [ ] **Home** — Hero + Portfolio preview + Services overview + CTA
- [ ] **Gallery / Portfolio** — Wedding makeup showcases (grid layout, filterable)
- [ ] **Services** — Makeup packages & pricing
- [ ] **About** — Julianna's story & approach
- [ ] **Booking** — HoneyBook portal embed (seamless integration)
- [ ] **Contact** — Email form or direct HoneyBook link

### Portfolio Gallery
- [ ] Display wedding makeup looks (before/after preferred)
- [ ] Responsive grid (3 columns desktop, 1-2 mobile)
- [ ] Image lazy loading & optimization
- [ ] Filter by event type or look style (optional)
- [ ] Lightbox/modal for full image view

### Services & Pricing
- [ ] List makeup packages (bridal, bridesmaid, party, etc.)
- [ ] Clear pricing per service
- [ ] Description of what's included
- [ ] Direct link to booking via HoneyBook

### Booking Integration
- [ ] HoneyBook portal embedded at `/book`
- [ ] Brides can check availability, select services, book appointments
- [ ] Payment processing through HoneyBook
- [ ] Confirmation emails to client
- [ ] Calendar sync (optional)

### Performance
- [ ] Page load time < 3 seconds
- [ ] Lighthouse score > 90 (Performance, Accessibility, Best Practices)
- [ ] Mobile responsiveness (viewport testing)
- [ ] Image optimization (WebP, lazy loading)
- [ ] SEO optimized (meta tags, OG images)

---

## Non-Functional Requirements

### Design System
- [ ] 8pt grid spacing system (all spacing in 8px multiples)
- [ ] 4pt baseline grid for typography
- [ ] 48px minimum touch targets (buttons, inputs, interactive elements)
- [ ] Sharp corners (0px border-radius)
- [ ] Consistent color palette (CSS variables in `globals.css`)
- [ ] Proper typography scale (4px line-height multiples)

### Color Palette
- [ ] Canvas background: `#faf8f5` (cream)
- [ ] Primary accent: `rgb(255, 174, 215)` (bright pink for CTAs)
- [ ] Forest: `#1a2e1a` (deep green)
- [ ] Charcoal: `#2c2c2c` (text)
- [ ] Button text on pink: Charcoal (not white) for readability

### Technology Stack
- [ ] Next.js 16 with App Router
- [ ] React 19
- [ ] Tailwind CSS v4
- [ ] TypeScript for type safety
- [ ] Sanity (optional, for blog/testimonials)
- [ ] Vercel deployment

### Code Quality
- [ ] ESLint configuration enforced
- [ ] TypeScript strict mode
- [ ] No console errors or warnings
- [ ] Semantic HTML
- [ ] Accessible color contrast (WCAG AA minimum)
- [ ] `'use client'` directives where needed

### Deployment
- [ ] Vercel connected to GitHub
- [ ] Auto-deploy on main branch push
- [ ] Environment variables configured (`.env.local`)
- [ ] Production build tested locally before deploy
- [ ] Custom domain (pastelstyle.art) pointing to Vercel

### SEO & Analytics
- [ ] Meta title & description on all pages
- [ ] OG images for social sharing
- [ ] Robots.txt & sitemap.xml
- [ ] Google Analytics or similar tracking
- [ ] Canonical URLs

### Laws of UX & Gestalt Principles
**Heuristics:**
- [ ] **Visibility of System Status** — Real-time feedback on user actions (hover states, loading states, form validation)
- [ ] **Match Between System & Real World** — Use language & concepts users understand; wedding/makeup industry language
- [ ] **User Control & Freedom** — Clear navigation, easy access to booking, obvious back/exit options
- [ ] **Error Prevention & Recovery** — Prevent booking errors; clear confirmation & cancellation options
- [ ] **Recognition vs Recall** — Portfolio images instantly communicate quality; visible CTAs
- [ ] **Flexibility & Efficiency** — Quick access to booking, clear pricing, minimal friction
- [ ] **Aesthetic & Minimalist Design** — Scandinavian minimal style; focus on beautiful makeup photography
- [ ] **Help & Documentation** — FAQ for common booking questions, clear service descriptions

**Gestalt Principles:**
- [ ] **Proximity** — Group related services together (bridal packages in one section)
- [ ] **Similarity** — Consistent gallery card styling, uniform CTA buttons (pink)
- [ ] **Continuation** — Visual flow guides eyes through portfolio → services → booking
- [ ] **Closure** — Gallery cards feel complete; clear section boundaries
- [ ] **Figure-Ground** — Makeup photos pop against cream background; clear hierarchy
- [ ] **Symmetry** — Balanced gallery layout, centered CTAs, organized service tiers
- [ ] **Common Fate** — Hover animations on gallery cards, button states change together

---

## Content Requirements

### Copy
- [ ] Compelling homepage headline (e.g., "Wedding Makeup That Lasts All Day")
- [ ] Service descriptions (bridal, bridesmaid, special events)
- [ ] Pricing clarity (what's included in each package)
- [ ] Julianna's bio & experience
- [ ] Booking instructions & availability info
- [ ] FAQ section (common questions about services, timing, touch-ups)
- [ ] Footer links (contact, social, privacy)

### Imagery
- [ ] Hero image (stunning wedding makeup look)
- [ ] Portfolio images (12-20 before/after makeup looks)
- [ ] Julianna's professional headshot
- [ ] Behind-the-scenes prep photos (optional)
- [ ] Testimonial photos (brides/clients)
- [ ] Logo/branding

### Social Media Integration
- [ ] Instagram feed embed (optional, showcases recent work)
- [ ] Social sharing buttons on gallery images
- [ ] Links to Instagram, Pinterest profiles

---

## Booking Workflow

### HoneyBook Integration
- [ ] Clients visit `/book` page
- [ ] HoneyBook portal loads seamlessly (iframe)
- [ ] Clients browse available dates
- [ ] Clients select services & add-ons
- [ ] Clients enter contact info
- [ ] Payment processed through HoneyBook
- [ ] Confirmation email sent to client & Julianna
- [ ] Calendar updated in real-time

---

## Future Enhancements

### Phase 2
- [ ] Client testimonials section
- [ ] Makeup blog (tips, trends, behind-the-scenes)
- [ ] Video showcase (makeup application tutorial)
- [ ] Email newsletter signup
- [ ] Instagram feed auto-sync

### Phase 3
- [ ] Makeup lookbook (downloadable)
- [ ] Collaboration features (wedding planner referrals)
- [ ] Gift card sales (Shopify integration)
- [ ] Team expansion (additional makeup artists)

---

## Testing Checklist

- [ ] Desktop browser testing (Chrome, Firefox, Safari)
- [ ] Mobile testing (iOS Safari, Chrome Mobile)
- [ ] Tablet responsiveness
- [ ] HoneyBook booking workflow end-to-end
- [ ] Image gallery loading & performance
- [ ] Link validation (internal + external)
- [ ] Form submission workflows
- [ ] Accessibility testing (screen readers, keyboard nav)
- [ ] SEO audit (Google Search Console)
- [ ] Performance audit (Lighthouse)

---

## Deployment Checklist

Before going live:
- [ ] All tests passing
- [ ] Lighthouse score > 90
- [ ] HoneyBook integration verified
- [ ] Environment variables configured
- [ ] Custom domain (pastelstyle.art) working
- [ ] SSL certificate valid
- [ ] Analytics tracking verified
- [ ] Mobile viewport tested
- [ ] Broken link check complete
- [ ] SEO meta tags verified
- [ ] Social sharing previews checked
- [ ] Portfolio images optimized
- [ ] Gallery performance tested

---

**Last updated:** March 21, 2026
**Status:** Active Development
