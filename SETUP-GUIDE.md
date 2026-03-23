# DECORA3D — COMPLETE SHOPIFY SETUP GUIDE
**www.decora3d.in | Delhi NCR | Built by Rudra Innovations**

---

## 📁 WHAT'S IN THIS PACKAGE

```
decora3d/
├── assets/
│   ├── decora3d-custom.css        ← Full brand CSS (dark theme, gold palette)
│   ├── decora3d-animations.css    ← All animations & motion effects
│   └── decora3d-animations.js     ← Particles, tilt, counter, cursor trail, etc.
├── config/
│   └── settings_data.json         ← Brand colours pre-configured
├── data/
│   └── products.json              ← All 28 products + 8 collections (reference)
├── layout/
│   └── theme.liquid               ← Main layout with WhatsApp + Rudra Innovations credit
├── pages/
│   ├── about.html                 ← About page content
│   ├── corporate-gifting.html     ← Corporate gifting page + enquiry form
│   ├── return-policy.html         ← Return & refund policy
│   ├── shipping-policy.html       ← Shipping policy
│   └── visit-studio.html          ← Visit studio page
├── sections/
│   ├── d3d-corporate-strip.liquid ← Gold corporate banner section
│   ├── d3d-four-ways.liquid       ← 4 pillars section
│   ├── d3d-hero-banner.liquid     ← Full-width hero with particles
│   ├── d3d-testimonials.liquid    ← Customer reviews section
│   ├── d3d-trust-badges.liquid    ← 5 trust signals row
│   └── d3d-workshop-preview.liquid← Workshop cards section
├── snippets/
│   ├── d3d-free-shipping-bar.liquid← Cart free shipping progress bar
│   ├── d3d-led-safety.liquid      ← LED safety warning (auto on lamp products)
│   ├── d3d-product-badges.liquid  ← Material/print-time badges on product page
│   └── d3d-sticky-atc.liquid      ← Sticky Add to Cart bar on scroll
├── templates/
│   └── index.json                 ← Homepage section layout (Dawn OS 2.0)
└── SETUP-GUIDE.md                 ← This file
```

---

## 🚀 STEP 1 — CREATE YOUR SHOPIFY STORE

1. Go to **shopify.com** → Start free trial → **Basic plan** (₹1,994/month)
2. Store name: **decora3d** → URL: `decora3d.myshopify.com`
3. Fill in business details (India, Delhi NCR)

---

## 🎨 STEP 2 — INSTALL DAWN THEME

1. **Online Store → Themes → Explore free themes → Dawn → Add**
2. Click **Actions → Edit Code** (do NOT use the visual customizer for file uploads)

---

## 📂 STEP 3 — UPLOAD THEME FILES

### A. Upload CSS files
In the code editor, go to **assets/** folder:
1. Click **Add a new asset** → Create blank file → Name: `decora3d-custom.css`
2. Paste the contents of `assets/decora3d-custom.css` from this package → Save
3. Repeat for `decora3d-animations.css`

### B. Upload JavaScript
1. **Add a new asset** → `decora3d-animations.js`
2. Paste the contents of `assets/decora3d-animations.js` → Save

### C. Upload Sections
Go to **sections/** folder, click **Add a new section** for each:
- `d3d-hero-banner.liquid`
- `d3d-trust-badges.liquid`
- `d3d-four-ways.liquid`
- `d3d-corporate-strip.liquid`
- `d3d-workshop-preview.liquid`
- `d3d-testimonials.liquid`

Paste content from respective files in this package.

### D. Upload Snippets
Go to **snippets/** folder, create each file:
- `d3d-led-safety.liquid`
- `d3d-product-badges.liquid`
- `d3d-free-shipping-bar.liquid`
- `d3d-sticky-atc.liquid`

### E. Replace theme.liquid
In **layout/theme.liquid**, replace the ENTIRE content with `layout/theme.liquid` from this package.

> ⚠️ **CRITICAL:** After pasting, find `91XXXXXXXXXX` and replace with your actual WhatsApp Business number.

### F. Replace index.json
In **templates/index.json**, replace with `templates/index.json` from this package.

---

## 🎨 STEP 4 — CONFIGURE THEME COLOURS

Go to **Online Store → Customize → Theme Settings → Colors**:

| Setting | Value |
|---------|-------|
| Background | `#1A1A1A` |
| Background 2 | `#222222` |
| Text | `#F5F5F0` |
| Headings | `#E8D5A0` |
| Accent 1 | `#C8A84B` |
| Accent 2 | `#9A7C2A` |
| Solid button labels | `#111111` |
| Outline button labels | `#C8A84B` |

---

## 📦 STEP 5 — CREATE COLLECTIONS

Go to **Products → Collections → Create collection** (8 total):

| Collection Title | Handle | Notes |
|-----------------|--------|-------|
| Lamps & Lighting | `lamps-lighting` | Add tag: lamp |
| Wall Art & Panels | `wall-art` | |
| Planters & Vases | `planters-vases` | |
| Desk & Home Organizers | `organizers` | |
| Spiritual & Temple Decor | `spiritual-decor` | |
| Corporate Gifting | `corporate-gifting` | Add "Get a Quote" link |
| Keychains & Accessories | `keychains-accessories` | |
| Workshop Experiences | `workshops` | |

For each collection, set:
- Collection image (800×800px minimum)
- SEO title (from `data/products.json`)
- Condition: **Manual** (drag to reorder products)

---

## 🛒 STEP 6 — ADD ALL 28 PRODUCTS

Reference `data/products.json` for all product details. For each product:

1. **Products → Add product**
2. Fill: Title, Description (from descriptions doc), Price, Compare-at price, SKU
3. Add variants (Colour + Size/LED as per the JSON)
4. Set weight (from JSON)
5. Add images (7 per product — see image sourcing guide below)
6. Set tags (from JSON)
7. Fill SEO title + meta description
8. Assign to collection

### Workshop Products specifically:
- Uncheck **"This is a physical product"** (no shipping)
- Set **Inventory** → uncheck "Track quantity"
- Set **Product type**: Experience

### Corporate Products:
- Set inventory to **9999** (don't show stock count)

---

## 🖼️ STEP 7 — SOURCE PRODUCT IMAGES

**Priority order** (get these first):
1. **Voronoi Pendant Lamp** → search Printables.com
2. **Mandala Wall Panel** → search Cults3D.com
3. **Hex Drawer Organizer** → search Thingiverse
4. **Ganesha Bust** → search Cults3D.com
5. **Self-watering Planter** → search Printables.com

**Free sources:**
- printables.com — search product type
- cults3d.com — free section
- sketchfab.com — 3D renders
- unsplash.com — search "3d printed lamp", "geometric vase"
- pexels.com — similar

**Alt text format for all images:**
```
[Product Name] — 3D printed [material] | Decora3D Delhi
```

---

## 💳 STEP 8 — PAYMENTS

### Razorpay
1. Go to **razorpay.com** → Create account (need PAN + bank details)
2. **Shopify → Settings → Payments → Third-party providers → Razorpay**
3. Paste API Key ID + Secret from Razorpay dashboard
4. Enable: UPI, Cards, Net Banking, Wallets, EMI (min ₹3,000)
5. Test with Razorpay test cards

### COD
- **Settings → Payments → Manual payment methods → Cash on Delivery**
- Restrict to orders under ₹2,000

### GST
- **Settings → Taxes → India**
- Standard rate: **18%**
- Add your GSTIN
- Prices include tax: **NO**

---

## 🚚 STEP 9 — SHIPPING (SHIPROCKET)

1. Sign up at **shiprocket.in**
2. Install **Shiprocket** from Shopify App Store
3. Connect your account

**Shipping zones to create in Shopify (Settings → Shipping):**

**Zone 1 — Delhi NCR:**
- Regions: Delhi, Haryana (Gurugram, Faridabad), Uttar Pradesh (Noida, Ghaziabad)
- Rate: Free shipping (all orders)

**Zone 2 — Metro:**
- Maharashtra, Karnataka, Tamil Nadu, West Bengal, Telangana
- Rate: Free ≥₹999 | ₹99 flat below ₹999

**Zone 3 — Rest of India:**
- All remaining states
- Rate: Free ≥₹999 | ₹99 flat below ₹999

---

## 📱 STEP 10 — WHATSAPP SETUP

1. Register a **WhatsApp Business** number (dedicated, not personal)
2. Set profile: Name = "Decora3D", photo = Decora3D logo
3. In `layout/theme.liquid`, replace `91XXXXXXXXXX` with your number (no spaces, no +)
4. Test the float button on your store

**Wati (WhatsApp API):** Sign up at wati.io, connect business number, upload 3 message templates (see brief for template text).

---

## 🧩 STEP 11 — APPS TO INSTALL

**Day 1 (before launch):**

| App | Source | Cost |
|-----|--------|------|
| Razorpay | Shopify App Store | Free |
| Shiprocket | Shopify App Store | Free |
| Judge.me Product Reviews | apps.shopify.com/judge-me | Free |
| BookThatApp | apps.shopify.com/bookthatapp | ₹1,200/mo |
| Wati (WhatsApp) | apps.shopify.com/wati | ₹2,499/mo |
| Free Shipping Bar | apps.shopify.com/free-shipping-bar | Free |
| GDPR Cookie Banner | apps.shopify.com/eu-cookie-bar | Free |

**Week 2:**

| App | Cost |
|-----|------|
| Klaviyo Email | Free up to 250 contacts |
| Loox Photo Reviews | ₹900/mo |
| Google Channel | Free |
| Facebook & Instagram | Free |
| Privy (email popups) | Free tier |

---

## 📄 STEP 12 — CREATE PAGES

Go to **Online Store → Pages → Add page** for each:

| Page Title | Handle | Source |
|-----------|--------|--------|
| About Decora3D | `about` | Copy HTML from `pages/about.html` |
| Visit Our Studio | `visit-studio` | `pages/visit-studio.html` |
| Corporate Gifting | `corporate-gifting` | `pages/corporate-gifting.html` |
| Shipping Policy | `shipping-policy` | `pages/shipping-policy.html` |
| Return Policy | `return-policy` | `pages/return-policy.html` |
| Privacy Policy | `privacy-policy` | Use Shopify auto-generate |
| Terms of Service | `terms-of-service` | Use Shopify auto-generate |

> To paste HTML: In each page editor, click the `<>` (source code) button, then paste.

---

## 🗺️ STEP 13 — NAVIGATION MENUS

### Main Menu
**Online Store → Navigation → Main menu**

```
Shop ▾
  ├── Lighting           → /collections/lamps-lighting
  ├── Wall Art           → /collections/wall-art
  ├── Planters           → /collections/planters-vases
  ├── Organizers         → /collections/organizers
  ├── Spiritual Decor    → /collections/spiritual-decor
  └── All Products       → /collections/all
Workshop               → /collections/workshops
Corporate              → /pages/corporate-gifting
About                  → /pages/about
```

### Footer Menus (create 4 menus):

**footer-shop:**
- Lamps & Lighting, Wall Art, Planters & Vases, Organizers, Spiritual Decor, All Products

**footer-experience:**
- Workshops, Visit Studio, Corporate Gifting, About Us

**footer-support:**
- Shipping Policy, Return Policy, Privacy Policy, Terms of Service, Contact

**footer-brand:**
- Tagline, Instagram link, WhatsApp link

---

## 🔍 STEP 14 — SEO

### Homepage
- **Online Store → Preferences**
- Title: `Decora3D — 3D Printed Home Decor | Lamps, Wall Art & More | Delhi NCR`
- Description: `Shop unique 3D printed lamps, mandala wall art, geometric planters & corporate gifts. Made in Delhi NCR. Book workshops. ✓ Pan India Delivery ✓ Custom Orders`

### Google Search Console
1. search.google.com/search-console → Add URL prefix property: `https://www.decora3d.in`
2. Verify via HTML tag → paste in **Online Store → Themes → Edit code → layout/theme.liquid** `<head>` section
3. Submit sitemap: `https://www.decora3d.in/sitemap.xml`

### Google Analytics 4
1. analytics.google.com → Create property → Get Measurement ID (G-XXXXXXXXXX)
2. **Shopify → Online Store → Preferences → Google Analytics** → paste ID

---

## 🌐 STEP 15 — CONNECT CUSTOM DOMAIN

1. **Shopify → Settings → Domains → Add existing domain**
2. Enter: `www.decora3d.in`
3. At your domain registrar, set DNS:
   - A record: `@` → `23.227.38.65`
   - CNAME: `www` → `shops.myshopify.com`
4. Wait 24–48 hours for propagation
5. SSL will activate automatically

---

## ✅ STEP 16 — PRE-LAUNCH CHECKLIST

- [ ] Password removed (**Online Store → Preferences → Disable password**)
- [ ] All 28 products uploaded with images, prices, variants
- [ ] All 8 collections created and products assigned
- [ ] Razorpay test transaction successful
- [ ] COD configured (orders under ₹2,000)
- [ ] Shipping zones configured
- [ ] WhatsApp number set in theme.liquid
- [ ] All 7 pages created
- [ ] Main menu + footer menus configured
- [ ] Judge.me installed
- [ ] BookThatApp configured with workshop dates
- [ ] Free Shipping Bar showing ₹999 threshold
- [ ] Google Analytics tracking
- [ ] Domain connected + SSL active
- [ ] Test full purchase flow (add → checkout → pay → confirmation email)
- [ ] Mobile tested (70% Indian traffic is mobile)
- [ ] Instagram bio updated: www.decora3d.in

---

## 🎬 LAUNCH DAY ACTIONS

1. Remove store password
2. Post Instagram Reel (3D print time-lapse)
3. Send WhatsApp broadcast to all contacts
4. Update Google Business Profile URL
5. Update Instagram bio

---

## 🎯 MONTH 1 REVENUE TARGET: ₹1,75,000

| Week | Action | Target |
|------|--------|--------|
| Week 1 | Store live, Instagram Reel, WhatsApp broadcast | ₹15,000 |
| Week 2 | First Instagram ad ₹500/day, Judge.me reviews | ₹40,000 |
| Week 3 | Corporate outreach (20 companies), school visits | ₹65,000 |
| Week 4 | Retargeting ads, Klaviyo email automation | ₹55,000 |

---

## 🔧 CUSTOM METAFIELDS TO CREATE

Go to **Settings → Custom data → Products → Add definition**:

| Name | Namespace.Key | Type | Used for |
|------|--------------|------|----------|
| Print Time | `custom.print_time` | Single line text | "6–8 hours" |
| Material Detail | `custom.material_detail` | Single line text | "PLA+ from sugarcane" |
| LED Compatible | `custom.led_compatible` | True/False | Lamp safety check |
| Minimum Order | `custom.minimum_order` | Integer | Corporate products |
| Duration | `custom.duration` | Single line text | Workshop products |
| Capacity | `custom.capacity` | Single line text | Workshop products |

---

## 🎨 ANIMATIONS INCLUDED

The `decora3d-animations.js` file provides:

1. **Gold particle canvas** on the hero banner (floating gold dust)
2. **3D card tilt** — product cards respond to mouse movement
3. **Scroll progress bar** — thin gold bar at top of page
4. **Scroll-triggered reveals** — sections fade up on scroll
5. **Animated stat counters** — numbers count up when visible
6. **Gold cursor trail** — 8-dot gold trail follows cursor (desktop only)
7. **Page transition** — smooth dark overlay between pages
8. **Header shrink** — header gets compact + blur on scroll
9. **Sticky ATC** — Add to Cart bar appears when product form scrolls past
10. **Magnetic buttons** — CTA buttons subtly follow cursor
11. **WhatsApp button entrance** — bounces in after 2 seconds
12. **Console branding** — Gold "DECORA3D | Built by Rudra Innovations" in browser console

---

## 👨‍💻 DEVELOPED BY

**Rudra Innovations**
Delhi NCR | rudrainnovations.com

For technical support or Shopify customizations, contact the development team.

---

*Document version 1.0 | Decora3D | www.decora3d.in*
