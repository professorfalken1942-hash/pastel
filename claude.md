# Claude Context for pastel-makeup-and-style.com

## Project Overview

**pastel-makeup-and-style.com** is a luxury wedding makeup artist portfolio built to showcase work, build trust with brides, and seamlessly integrate booking.

- **URL:** https://pastelstyle.art (custom domain)
- **Staging:** https://pastel-navy.vercel.app
- **Stack:** Next.js 16, React 19, Sanity, Tailwind v4, Vercel
- **Deployment:** Vercel (automatic from main branch)
- **Client:** Julianna (wedding makeup artist)
- **Aesthetic:** Scandinavian, minimal, mobile-first luxury

## Design System

### Spacing & Grid
- **Base unit:** 8pt grid system (multiples of 8px)
- **Fine adjustments:** 4pt baseline grid for typography
- **Touch targets:** 48px minimum (inputs, buttons, interactive elements)
- **Content max-width:** 1280px with side padding (64px desktop, 24px mobile)

### Styling
- **Border-radius:** 0px everywhere (sharp corners only)
- **Framework:** Tailwind v4 + custom CSS variables in `globals.css`
- **Typography:** Baseline grid alignment (all line-heights multiples of 4px)

### Color Palette
```
--canvas: #faf8f5 (cream background)
--pink: rgb(255, 174, 215) (primary accent — bright pink CTA)
--forest: #1a2e1a (deep green)
--charcoal: #2c2c2c (text)
```

**Key update:** Pink replaced dusty-rose throughout (buttons, labels, CTAs). Button text is charcoal for readability on pink background.

## Architecture

```
pastel/
├── app/              # Next.js app router (pages)
│   └── book/         # HoneyBook booking portal page
├── components/       # Reusable React components
├── globals.css       # Design tokens, spacing scale, colors
├── package.json      # Dependencies
├── next.config.ts    # Next.js configuration
├── tsconfig.json     # TypeScript config
└── sanity/           # (Optional) Sanity CMS for blog content
```

## Key Components

- **Nav.tsx** — Navigation header with logo
- **Hero.tsx** — Homepage hero (portfolio showcase)
- **Gallery.tsx** — Wedding makeup portfolio grid
- **About.tsx** — Julianna's story & approach
- **Services.tsx** — Makeup services & packages
- **BookingCTA.tsx** — Call-to-action for booking
- **Footer.tsx** — Site footer with links

## Booking Integration

### HoneyBook Portal
- **Embedded at:** `/book` page
- **Portal URL:** https://1757625758.hbportal.co/public/68c33e10dc84ad00010b83ad
- **Status:** Working seamlessly (no X-Frame-Options blocking)
- **Implementation:** Iframe embed in `src/app/book/page.tsx`

Brides can:
- Check availability
- See service packages
- Book appointments
- Make payments directly through HoneyBook

## Recent Changes (March 2026)

- **Color palette:** Introduced bright pink `rgb(255, 174, 215)` as primary accent
- **Button styling:** Changed text from white → charcoal for readability on pink
- **CTA emphasis:** Pink buttons now stand out across all pages
- **HoneyBook integration:** Booking portal fully functional

## Development Workflow

1. **Local development:** `npm run dev` (runs on `localhost:3000`)
2. **Build locally:** `npm run build` (catches errors before deploy)
3. **Deploy:** `vercel --prod --yes` (after git commit)
4. **CI/CD:** Vercel auto-deploys main branch

## Common Tasks

### Running Locally
```bash
cd /Users/professorfalken/studio/projects/pastel
npm run dev
```

### Building & Testing
```bash
npm run build
npm run lint
```

### Deploying to Production
```bash
git add .
git commit -m "Your message"
vercel --prod --yes
```

## Known Issues & Solutions

- **HoneyBook iframe:** Works perfectly — no additional config needed
- **Pink contrast:** Charcoal text (not white) for readability on pink buttons
- **Subagent deployment bugs:** Always run `npm run build` locally first
- **Vercel caching:** Use `vercel --prod --yes` for fresh deploy

## Next Steps

- Add client testimonials section
- Expand gallery with before/after makeup looks
- Add blog for makeup tips & trends (Sanity integration)
- Email newsletter signup
- Instagram feed integration (optional)

## Contact & Access

- **Repository:** Local at `/Users/professorfalken/studio/projects/pastel`
- **Deployment:** Vercel (connected to GitHub)
- **Domain:** pastelstyle.art (IONOS managed, pointing to Vercel)
- **Client:** Julianna
- **CMS:** Sanity (optional)

---

**Last updated:** March 21, 2026
