# NO FORM

**Efficiency meets taste.**

Marketing website for NO FORM — a boutique creative + production studio that delivers AI-enhanced ad creative, video, web design, email campaigns, and UGC at scale, with manual Adobe polish.

---

## Stack

Single-file static site. No build step, no bundler, no framework installation.

| Layer | Choice |
|---|---|
| Markup | HTML5 |
| Styles | CSS custom properties (design tokens inline) |
| Components | React 18 via CDN + Babel Standalone (JSX in `<script type="text/babel">`) |
| Typography | Inter Tight — Google Fonts |
| Assets | Local imagery + SVG (no external image CDN) |

Open `index.html` directly in a browser. No `npm install`, no dev server required.

---

## Pages

| Route | Content |
|---|---|
| `#home` | Hero · Services grid · Portfolio carousel · Manifesto · Process · CTA |
| `#products` | Six service cards with imagery and descriptions |
| `#pricing` | Three monthly retainer tiers + à la carte one-off menu |
| `#portfolio` | Six-item work grid |
| `#about` | Founder cards + studio statement |

Navigation is hash-based. The brief booking modal (`Book a call`) is accessible from any page via the nav CTA and in-page buttons.

---

## Structure

```
noform/
├── index.html          # Entire app — components, screens, styles
└── assets/
    ├── imagery/        # Hero, service tiles, carousel, founder portraits
    │   ├── hero.jpeg
    │   ├── carousel-{1,2,3}.jpg
    │   ├── founder-{will,alex}.jpg
    │   └── service-*.jpg
    ├── icons/          # SVG UI icons (arrow-left, arrow-right, play, close)
    ├── logo-noform.svg
    ├── logo-noform-dark.svg
    └── mark-noform.svg
```

---

## Design system

The visual language lives in the CSS custom properties at the top of `index.html`:

- **Background**: `#0A0A0A` default, stepping up in ~6% lightness increments (`--bg-0` through `--bg-4`)
- **Type**: Inter Tight at every size — sentence case for display, `UPPERCASE 0.22em` tracking for labels, eyebrows, nav, and CTAs
- **Accent**: `#FF6B2C` ember orange — focus rings and hot states only, never buttons or backgrounds
- **Buttons**: hairline `1px rgba(255,255,255,0.32)` rectangle; fills white on hover, text inverts
- **Corners**: `0` everywhere except form inputs (4px) and circular icon buttons
- **Motion**: `220ms cubic-bezier(0.2, 0.7, 0.2, 1)` — cinematic, not bouncy

---

## Deploying

Any static host works. Example with GitHub Pages:

1. Go to **Settings → Pages** in this repo
2. Set source to `master` branch, `/ (root)`
3. Save — the site will be live at `https://bubbatees.github.io/noform`

Or drag the folder into [Netlify Drop](https://app.netlify.com/drop) for an instant URL.

---

## Local development

```bash
# No install needed — just open the file
open index.html        # macOS
start index.html       # Windows
xdg-open index.html    # Linux
```

Or serve with any static file server to avoid browser file:// restrictions on some assets:

```bash
npx serve .
# → http://localhost:3000
```
