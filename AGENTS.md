# AGENTS.md — bernardofaro-site

> 🛰️ **Mission Control:** `~/vault-bernie/`. Sessions here are for **Astro site work only** (the public-facing bernardofaro.com).
> Bernie HQ Notion: https://www.notion.so/36286e32aabd8155bef4c35c87ec1842

Astro site that renders bernardofaro.com. Deployed via Cloudflare (Pages/Workers — see `wrangler.jsonc`). Repository: `bf-parzival/bernardofaro-site` (private).

## What this repo is

Astro 4.x content collections + Cloudflare deploy. Renders essays from `src/content/essays/` to bernardofaro.com.

```
bernardofaro-site/
├── astro.config.mjs
├── wrangler.jsonc           Cloudflare config
├── package.json
├── public/                  static assets
├── src/
│   ├── content/
│   │   ├── config.ts        Astro content collection schema
│   │   └── essays/*.md      THE published essays (symlinked from vault-bernie)
│   ├── layouts/
│   ├── pages/
│   └── styles/
└── scripts/
```

## Essay publish flow (the daily move)

1. Bernie writes in `~/vault-bernie/03 — ESSAYS/drafts/<slug>.md`
2. Polishes → moves to `ready/`
3. Publishes → drags into `_published-to-site/` (symlinked to **this repo's** `src/content/essays/`)
4. Two repos show changes in GitHub Desktop:
   - vault-bernie: deletion in `ready/`
   - **bernardofaro-site: new file in `src/content/essays/`**
5. Push both → Cloudflare auto-rebuilds (~30-60s)

The symlink direction: `vault-bernie/03 — ESSAYS/_published-to-site` → `~/code/bernardofaro-site/src/content/essays/`. So Bernie writes IN the vault, but the canonical file *is* in this repo. Astro reads from here.

## Astro content schema (hard constraints)

Every essay's frontmatter must satisfy:

| Field | Type | Required |
|---|---|---|
| `title` | string (may contain `<em>`) | yes |
| `description` | string (1-2 sentences) | yes |
| `pubDate` | date YYYY-MM-DD | yes |
| `tags` | string[] (lowercase) | default `[]` |
| `status` | `'evergreen' \| 'growing'` | default `'growing'` |
| `readingTime` | string e.g. `"4 min"` | optional |
| `draft` | boolean | default `false` |

Build fails if `description` is empty or `status` isn't one of the two enum values. See `~/vault-bernie/03 — ESSAYS/_TEMPLATE.md` for the canonical frontmatter starter.

## Deploy

GitHub push → Cloudflare auto-build → bernardofaro.com updated. No manual step.

```bash
# Local dev
npm run dev   # localhost:4321

# Build check before pushing
npm run build
```

## Related repos

- `~/vault-bernie/` — Mission Control + essay sources (`03 — ESSAYS/`)
- `~/code/agentic-content-system/` — content pipeline that produces the drafts
