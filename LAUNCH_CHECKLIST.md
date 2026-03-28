# Pastel Launch Checklist

**Status:** ~80% complete. Ready to launch within 1-2 sprints.

---

## Critical Path Items (MUST HAVE)

### Core Pages
- ✅ Home page (hero, brand, CTA)
- ✅ Services page (makeup packages)
- ✅ Pricing page (service tiers)
- ✅ Book page (HoneyBook portal embed)
- ⚠️ Gallery/Portfolio page (before/after makeup looks)
- ⚠️ Contact page (email form or direct booking link)
- ✅ Navigation & footer

### Design System
- ✅ 8pt grid system
- ✅ Color palette (cream, pink, forest, charcoal)
- ✅ Typography (serif + sans)
- ✅ Touch targets (48px minimum)
- ✅ Sharp corners (0px border-radius)

### Functionality
- ✅ Responsive design (mobile, tablet, desktop)
- ✅ HoneyBook booking integration (working)
- ✅ Navigation menu (mobile hamburger + desktop)
- ⚠️ Portfolio gallery (images + grid layout)
- ⚠️ SEO meta tags (all pages)
- ⚠️ Analytics tracking (Google Analytics or similar)

### Technical
- ✅ Next.js 16 + React 19 setup
- ✅ Tailwind v4
- ✅ TypeScript
- ✅ Vercel deployment configured
- ✅ Custom domain (pastelstyle.art) DNS setup
- ⚠️ SSL certificate (should auto-generate on Vercel)
- ⚠️ Environment variables (.env.local configured)

### Performance
- ⚠️ Lighthouse score > 90 (needs testing)
- ⚠️ Page load time < 3 seconds
- ⚠️ Image optimization (WebP, lazy loading)
- ⚠️ Mobile viewport tested

### Content
- ⚠️ Portfolio images (12-20 wedding makeup looks)
- ⚠️ Julianna's professional bio
- ⚠️ Service descriptions (bridal, bridesmaid, party makeup)
- ⚠️ Testimonials from past clients
- ⚠️ Logo & branding assets

---

## Pre-Launch (1-2 Weeks Before)

### Quality Assurance
- [ ] **Local build test:** `npm run build` (zero errors)
- [ ] **Lighthouse audit:** Run locally, target >90 on all metrics
- [ ] **Desktop browsers:** Test on Chrome, Firefox, Safari
- [ ] **Mobile testing:** iPhone 12-15, Android (Samsung, Pixel)
- [ ] **Tablet:** iPad Pro, iPad Air responsive test
- [ ] **Link validation:** Check all internal + external links work
- [ ] **Form testing:** Test contact form (if applicable)
- [ ] **HoneyBook workflow:** Full end-to-end booking test
- [ ] **Image loading:** Test all gallery images load quickly
- [ ] **Accessibility:** Keyboard navigation, screen reader test (WAVE, Axe)

### SEO Preparation
- [ ] Meta title + description on all pages
- [ ] OG images for social sharing (1200x630px)
- [ ] Robots.txt configured
- [ ] Sitemap.xml generated
- [ ] Canonical URLs set
- [ ] Google Search Console setup
- [ ] Bing Webmaster Tools (optional)

### Content Finalization
- [ ] Portfolio images ready (12-20 before/after makeup looks)
- [ ] Image compression (WebP format, <200KB each)
- [ ] Image alt text written for accessibility + SEO
- [ ] Julianna's bio finalized
- [ ] Service descriptions polished
- [ ] Pricing confirmed & locked
- [ ] Testimonials collected from clients
- [ ] Footer content complete (links, social, copyright)

### Infrastructure
- [ ] Environment variables in Vercel dashboard
- [ ] SSL certificate active (Vercel handles automatically)
- [ ] Domain DNS pointing to Vercel (A records + CNAME verified)
- [ ] Vercel deployment configured for auto-deploy on main branch push
- [ ] Error logging / monitoring setup (optional: Sentry)
- [ ] Analytics tracking code added (Google Analytics snippet)

### Documentation
- [ ] README.md updated
- [ ] Development guide for future updates
- [ ] Deployment instructions
- [ ] Emergency rollback plan (if needed)

---

## Launch Day (Go-Live Checklist)

### Final Verification (30 min before launch)
- [ ] Production build deployed to Vercel
- [ ] Test production URL: https://pastelstyle.art
- [ ] Verify all pages load correctly
- [ ] Test HoneyBook booking workflow live
- [ ] Check mobile responsiveness one more time
- [ ] Verify analytics tracking is firing

### Communication
- [ ] Email Julianna confirmation: "Site is live!"
- [ ] Share live URL in team/stakeholder group
- [ ] Social media post: "Website is live! Check out portfolio at pastelstyle.art"
- [ ] Add to Google My Business profile (if applicable)
- [ ] Update any business directories/listings

### Post-Launch Monitoring (First 48 Hours)
- [ ] Monitor Vercel deployment logs for errors
- [ ] Check analytics for initial traffic
- [ ] Test a real booking through HoneyBook
- [ ] Monitor error reports (Sentry, if enabled)
- [ ] Respond to any client inquiries immediately
- [ ] Check mobile experience on multiple devices (real phones)

---

## Nice-to-Have (Can Ship Later)

- [ ] Blog/journal section (makeup tips, behind-the-scenes)
- [ ] Instagram feed integration
- [ ] Video showcase (makeup application tutorial)
- [ ] Client testimonials carousel (if not already implemented)
- [ ] Email newsletter signup
- [ ] FAQ section
- [ ] Team/artist profile pages
- [ ] Before/after slider component
- [ ] Lightbox gallery (click to expand)
- [ ] Google Reviews widget
- [ ] Chatbot or live chat support

---

## Task Breakdown by Priority

### CRITICAL (Must complete before launch)
- [ ] Portfolio gallery with 12-20 images
- [ ] Image optimization & lazy loading
- [ ] SEO meta tags on all pages
- [ ] Final content review & polish
- [ ] Local build passes without errors
- [ ] Lighthouse score >90
- [ ] Cross-browser testing (desktop + mobile)
- [ ] HoneyBook booking verified end-to-end

### HIGH (Should complete before launch)
- [ ] Contact form (if not using HoneyBook only)
- [ ] Analytics tracking
- [ ] Social media OG images
- [ ] Robots.txt & sitemap.xml
- [ ] Accessibility audit (WCAG AA)
- [ ] Image alt text for all gallery images
- [ ] Julianna's professional bio + photo

### MEDIUM (Can do in first week post-launch)
- [ ] Google Search Console submission
- [ ] Bing Webmaster Tools (optional)
- [ ] Social media follow buttons
- [ ] Email newsletter signup form
- [ ] Testimonials page or section

### LOW (Post-launch iterations)
- [ ] Blog section
- [ ] Video content
- [ ] Advanced gallery features
- [ ] Email integration (Mailchimp, etc.)

---

## Open Questions for Julianna

- [ ] Do we have 12-20 portfolio images ready (before/after makeup looks)?
- [ ] Should contact form direct to her email, or is HoneyBook booking enough?
- [ ] Any testimonials/reviews from past clients ready to display?
- [ ] Social media accounts to link to (Instagram, Pinterest, etc.)?
- [ ] Professional photo for bio section?
- [ ] Any specific FAQ questions from potential brides?
- [ ] Preferred way to track inquiries? (Email, spreadsheet, CRM?)

---

## Timeline

**Current week (Mar 25-31):**
- [ ] Finalize portfolio images (at least 12)
- [ ] Write/refine all copy (services, pricing, bio)
- [ ] Local build testing
- [ ] Lighthouse optimization

**Next week (Apr 1-7):**
- [ ] Image optimization & lazy loading
- [ ] SEO setup (meta tags, sitemap, robots.txt)
- [ ] Accessibility audit
- [ ] Full QA (cross-browser, mobile, links)
- [ ] Final content review

**Launch window (Apr 8-10):**
- [ ] Final verification
- [ ] Deploy to production
- [ ] Monitor first 48 hours

---

## Success Criteria

✅ Site is live at pastelstyle.art  
✅ All pages load quickly (<3s)  
✅ Lighthouse score >90  
✅ HoneyBook booking works end-to-end  
✅ Mobile responsive on all devices  
✅ No console errors  
✅ Portfolio images showcase work beautifully  
✅ SEO tags properly configured  
✅ Julianna happy with design & functionality  

---

**Last updated:** March 25, 2026  
**Next review:** April 1, 2026 (after portfolio images finalized)
