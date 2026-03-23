# Decora3D — Shopify Theme

**www.decora3d.in** · Delhi NCR's first 3D printing experience studio
Built by [Rudra Innovations](https://rudrainnovations.com)

---

## Branch → Store Map

| Branch | Deploys to | Purpose |
|--------|-----------|---------|
| `main` | Live store (decora3d.in) | Production — auto-deploys on push |
| `staging` | Unpublished preview theme | Test before going live |
| `feature/*` | — | Your working branches, open PR → main |

---

## One-Time GitHub → Shopify Setup

### Step 1 — Create GitHub repo
1. Go to **github.com → New repository**
2. Name: `decora3d-theme` · Private · No README
3. Copy the repo URL

### Step 2 — Push this code to GitHub
```bash
git remote add origin https://github.com/YOUR_USERNAME/decora3d-theme.git
git branch -M main
git push -u origin main
```

### Step 3 — Add GitHub Secrets
In GitHub repo → **Settings → Secrets and variables → Actions → New secret**:

| Secret name | Where to get it |
|-------------|----------------|
| `SHOPIFY_STORE` | `decora3d.myshopify.com` |
| `SHOPIFY_CLI_THEME_TOKEN` | Shopify Admin → Settings → Custom apps → Create app → Admin API token (Themes: Read/Write) |
| `SHOPIFY_PRODUCTION_THEME_ID` | Shopify Admin → Online Store → Themes → your theme → copy ID from URL |

### Step 4 — Connect GitHub natively in Shopify (optional, simpler alternative)
> Use this instead of GitHub Actions if you don't want to deal with tokens.

1. Shopify Admin → **Online Store → Themes → Add theme → Connect from GitHub**
2. Authorize → select repo `decora3d-theme` → branch `main`
3. Shopify auto-deploys every time you push to `main`

> ⚠️ Native connection = simpler but less control. GitHub Actions = full CI/CD with staging previews and lint checks.

---

## Day-to-Day Workflow

```bash
# Make a change
git checkout -b feature/update-hero
# ... edit files ...
git add . && git commit -m "update hero headline"
git push origin feature/update-hero

# Open Pull Request on GitHub → main
# → Staging preview auto-deploys, you get a preview URL in the PR comment
# → Merge PR → production auto-deploys in ~60 seconds
```

---

## One-Time Data Import (products + collections)

These are done once via CSV — not part of theme deployment:

```
1. Products:    Shopify Admin → Products → Import → data/shopify-products-import.csv
2. Collections: Install Matrixify app → Import → data/shopify-collections-import.csv
3. Images:      Settings → Files → Upload all assets/images/*.svg
                Then run: python3 update-image-urls.py
                Then re-import: data/shopify-products-FINAL.csv
4. Pages:       Online Store → Pages → paste HTML from pages/*.html
```

---

## Repo Structure

```
decora3d-theme/
├── .github/
│   └── workflows/
│       ├── deploy-production.yml   ← push to main → live store
│       ├── deploy-staging.yml      ← push to staging / PR → preview
│       └── theme-check.yml         ← Liquid lint on every push
│
├── assets/
│   ├── decora3d-custom.css         ← brand CSS (dark gold theme)
│   ├── decora3d-animations.css     ← all animation keyframes
│   ├── decora3d-animations.js      ← particles, tilt, counters, cursor trail
│   └── images/
│       └── placeholder-*.svg       ← 36 product placeholder images
│
├── config/
│   └── settings_data.json          ← brand colours pre-configured
│
├── layout/
│   └── theme.liquid                ← fonts, WhatsApp button, Rudra credit
│
├── sections/
│   ├── d3d-hero-banner.liquid
│   ├── d3d-trust-badges.liquid
│   ├── d3d-four-ways.liquid
│   ├── d3d-corporate-strip.liquid
│   ├── d3d-workshop-preview.liquid
│   └── d3d-testimonials.liquid
│
├── snippets/
│   ├── d3d-led-safety.liquid
│   ├── d3d-product-badges.liquid
│   ├── d3d-free-shipping-bar.liquid
│   └── d3d-sticky-atc.liquid
│
├── templates/
│   └── index.json                  ← homepage section layout
│
├── data/                           ← reference + import files (not deployed to Shopify)
│   ├── products.json
│   ├── shopify-products-import.csv
│   └── shopify-collections-import.csv
│
├── pages/                          ← HTML for Shopify pages (paste manually once)
│   ├── about.html
│   ├── corporate-gifting.html
│   ├── visit-studio.html
│   ├── shipping-policy.html
│   └── return-policy.html
│
├── .shopifyignore                  ← tells Shopify CLI what NOT to deploy
├── shopify.theme.toml              ← Shopify CLI config
└── update-image-urls.py            ← image CDN URL helper
```

---

## After Every Change — It's This Simple

```bash
git add .
git commit -m "your message"
git push
# Done — live in 60 seconds
```

---

*Developed by [Rudra Innovations](https://rudrainnovations.com) · Delhi NCR*
