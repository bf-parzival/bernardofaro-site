# bernardofaro.com

Personal site. Astro + Markdown + Cloudflare Pages.

Architecture matches the bernie-brand-os mental model: content as typed objects, Markdown source of truth, presentation separate from data, ships in seconds.

## Quick start

```bash
cd /Users/bbf/.cursor-tutor/bernardofaro-site
npm install
npm run dev
```

Open http://localhost:4321.

## Build

```bash
npm run build       # outputs dist/
npm run preview     # serve dist/ locally
```

## Add an essay

Drop a `.md` file in `src/content/essays/`:

```markdown
---
title: "Title with optional <em>italics</em>"
description: "One-line italic descriptor that renders below the title in the list."
pubDate: 2026-05-13
tags: ["ai", "strategy"]
status: "evergreen"   # or "growing"
readingTime: "4 min"
draft: false           # true to hide from index, RSS, and routes
---

Body in Markdown.
```

Slug = filename. To use a custom callout in an essay body:

```html
<div class="callout">
<span class="callout-label">Worked example</span>

Body of the callout, Markdown allowed.

</div>
```

## Customise

- **Design tokens**: `src/styles/global.css` `:root` block. Single accent (`--green`), warm grays, paper, ink. No terracotta.
- **Hero copy**: `src/pages/index.astro` (top section).
- **About**: `src/pages/about.astro`.
- **Newsletter embed**: replace `YOURSUBSTACK` in `src/pages/index.astro` with your Substack subdomain.
- **Footer links**: `src/layouts/Base.astro`.
- **Site URL**: `astro.config.mjs` (used by canonical URLs, sitemap, RSS).

## Deploy to Cloudflare Pages

1. `git init && git add . && git commit -m "v1"`
2. Push to a new GitHub repo.
3. Cloudflare Pages → Create project → connect repo.
   - Framework preset: **Astro**
   - Build command: `npm run build`
   - Build output directory: `dist`
4. Add custom domain `bernardofaro.com` (Cloudflare auto-handles DNS if domain is on Cloudflare).
5. Wait for cert (~5 min).

## What lives where

```
src/
├── content/
│   ├── config.ts                    # typed schema for essays
│   └── essays/                      # Markdown essays (one per file)
├── layouts/
│   └── Base.astro                   # nav + footer + meta tags
├── pages/
│   ├── index.astro                  # home (hero · essays · about · subscribe)
│   ├── about.astro                  # about page
│   ├── essays/[...slug].astro       # essay detail page
│   └── rss.xml.js                   # RSS feed
├── styles/
│   └── global.css                   # design system + components
public/
└── favicon.svg                      # B monogram
```

## SEO / AEO

Out of the box: canonical URLs, OG meta, Twitter cards, RSS, sitemap (`@astrojs/sitemap`), JSON-LD `Article` schema on essay pages, semantic HTML.

To improve: add an OG image (`public/og.png`, 1200×630), submit sitemap to Google Search Console, add `robots.txt` if you want.

## Cost

$0/month forever on Cloudflare Pages free tier.
$0 one-time. Domain already paid.

## Writing rules baked into the design

- No em-dashes (use periods or commas).
- No opening questions in essays or hero.
- Italic via `<em>` in titles renders as Fraunces italic 320.
- Status: `evergreen` shows a green dot, `growing` is the default.
- Reading time is freeform (`"4 min"`, `"7 min"`).
