# SEO Implementation — Ready to Deploy

## Next Steps (In Priority Order)

### 1. Add Meta Tags to Layout (CRITICAL)
**File:** `src/app/layout.tsx`

Add these to the head:
```tsx
<meta name="description" content="Award-winning bridal and wedding makeup artist serving Syracuse, Ithaca, and the Finger Lakes.">
<meta name="keywords" content="wedding makeup artist, bridal makeup, Syracuse, Finger Lakes, Ithaca">
<meta name="author" content="Pastel Makeup and Style">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<!-- OG Tags for Social Sharing -->
<meta property="og:site_name" content="Pastel Makeup and Style">
<meta property="og:type" content="website">
<meta property="og:locale" content="en_US">

<!-- Geo-tagging (Syracuse) -->
<meta name="geo.position" content="43.0481;-76.1474">
<meta name="ICBM" content="43.0481, -76.1474">
<meta name="geo.placename" content="Syracuse, NY">

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
```

### 2. Create Page-Specific Meta Tags
Update each page's metadata:

**Home (`src/app/page.tsx`):**
```tsx
<meta name="description" content="Award-winning bridal and wedding makeup artist serving Syracuse, Ithaca, and the Finger Lakes. Luxury makeup for your big day.">
<meta property="og:title" content="Wedding & Bridal Makeup Artist Syracuse NY | Pastel">
<meta property="og:description" content="Luxury bridal makeup services for Syracuse, Ithaca & Finger Lakes weddings.">
<meta property="og:url" content="https://pastelstyle.art/">
```

**Services (`src/app/services/page.tsx`):**
```tsx
<meta name="description" content="Professional bridal makeup, wedding day styling, bridesmaid makeup, and engagement session services in Syracuse and Finger Lakes.">
<meta property="og:title" content="Wedding & Bridal Makeup Services | Syracuse NY">
```

**Pricing (`src/app/pricing/page.tsx`):**
```tsx
<meta name="description" content="Transparent bridal makeup pricing for Syracuse, Ithaca, and Finger Lakes weddings. Professional rates.">
<meta property="og:title" content="Wedding Makeup Pricing | Syracuse & Finger Lakes">
```

**Book (`src/app/book/page.tsx`):**
```tsx
<meta name="description" content="Book your bridal makeup appointment with Julianna. Serving Syracuse, Ithaca, and Finger Lakes.">
<meta property="og:title" content="Book Your Wedding Makeup | Syracuse Bridal Makeup Artist">
```

### 3. Add Schema.org Structured Data
**File:** Create `src/components/SchemaMarkup.tsx`

```tsx
export function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org/",
    "@type": "LocalBusiness",
    "name": "Pastel Makeup and Style",
    "image": "https://pastelstyle.art/logo.png",
    "description": "Award-winning bridal and wedding makeup artist serving Syracuse, Ithaca, and the Finger Lakes.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Syracuse",
      "addressRegion": "NY",
      "addressCountry": "US"
    },
    "telephone": "[Phone Number]",
    "email": "[Email]",
    "url": "https://pastelstyle.art",
    "priceRange": "$$",
    "areaServed": [
      "Syracuse, NY",
      "Ithaca, NY",
      "Finger Lakes, NY"
    ],
    "serviceType": [
      "Bridal Makeup",
      "Wedding Makeup",
      "Event Makeup",
      "Bridesmaid Makeup"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
```

Add to `src/app/layout.tsx`:
```tsx
import { LocalBusinessSchema } from '@/components/SchemaMarkup'

export default function RootLayout() {
  return (
    <html>
      <head>
        <LocalBusinessSchema />
        {/* other head content */}
      </head>
      {/* body */}
    </html>
  )
}
```

### 4. Create robots.txt
**File:** `public/robots.txt`

```
User-agent: *
Allow: /
Disallow: /admin
Disallow: /studio
Disallow: /.next

Sitemap: https://pastelstyle.art/sitemap.xml
```

### 5. Verify Sitemap.xml
Next.js auto-generates sitemap at `https://pastelstyle.art/sitemap.xml`

**Verify it includes:**
- `/`
- `/services`
- `/pricing`
- `/book`

If not auto-generating, create `public/sitemap.xml` manually.

### 6. Set Up Google Analytics
**File:** `src/app/layout.tsx`

Add GA script to head:
```tsx
<Script
  strategy="afterInteractive"
  src={`https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX`}
/>
<Script
  id="google-analytics"
  strategy="afterInteractive"
  dangerouslySetInnerHTML={{
    __html: `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-XXXXXXXXXX');
    `,
  }}
/>
```

**Replace `G-XXXXXXXXXX` with actual Google Analytics ID**

### 7. Create OG Image Template
**File:** `public/og-image.jpg` (1200×630px)

Design template with:
- Pastel logo/branding
- "Wedding Makeup Artist Syracuse"
- Pastelstyle.art

(Can use existing design/color scheme)

### 8. Create About Page (When Ready)
**File:** `src/app/about/page.tsx`

Include:
- Julianna's story & experience
- Professional photo
- Service philosophy
- Keywords: "wedding makeup artist Syracuse," "bridal makeup artist Ithaca"

### 9. Google My Business Setup
**Action Items (Not in code):**
- [ ] Go to https://business.google.com/
- [ ] Claim/verify "Pastel Makeup and Style" (or create new)
- [ ] Add full address (Syracuse area)
- [ ] Add phone number
- [ ] Add service categories: Bridal Makeup, Hair & Makeup, Cosmetology
- [ ] Upload 5-10 high-quality photos (makeup looks)
- [ ] Add service area: Syracuse, Ithaca, Finger Lakes
- [ ] Ask clients for Google reviews

### 10. Submit to Local Directories
**Action Items (Not in code):**
- [ ] The Knot (theknot.com)
- [ ] WeddingWire (weddingwire.com)
- [ ] Yelp (yelp.com)
- [ ] Local Syracuse business directory

---

## Implementation Checklist

- [ ] Meta tags added to layout.tsx
- [ ] Page-specific meta tags added (home, services, pricing, book)
- [ ] Schema.org markup created & added
- [ ] robots.txt created
- [ ] Sitemap.xml verified
- [ ] Google Analytics code added (waiting for GA ID)
- [ ] OG image created (1200×630px)
- [ ] About page created (when content ready)
- [ ] Local build test: `npm run build` passes
- [ ] Lighthouse SEO score: 100
- [ ] Deploy to production
- [ ] Submit sitemap to Google Search Console
- [ ] Google My Business claimed & optimized
- [ ] Local directory listings created

---

## What's Needed from Julianna

- [ ] Phone number (for schema & GMB)
- [ ] Service address (or business address)
- [ ] Professional photo (for GMB)
- [ ] Service area confirmation (Syracuse, Ithaca, Finger Lakes)
- [ ] Past client reviews/testimonials (for social proof)

---

## Timeline

**This week (Mar 25-31):**
- Add meta tags & schema markup
- Create robots.txt & verify sitemap
- Set up Google Analytics (once we have GA ID)
- Create About page (if content ready)

**Next week (Apr 1-7):**
- Deploy all changes
- Submit to Google Search Console
- Set up Google My Business

**Week after (Apr 8-15):**
- Submit to local directories (The Knot, WeddingWire, etc.)
- Monitor keyword rankings in Search Console

---

## Helpful Resources

- **Google Search Console:** https://search.google.com/search-console
- **Google My Business:** https://business.google.com/
- **Schema.org Reference:** https://schema.org/LocalBusiness
- **Next.js SEO Guide:** https://nextjs.org/learn/seo/introduction-to-seo

---

**Ready to start?** Let me know and I can begin adding these implementations to the codebase.
