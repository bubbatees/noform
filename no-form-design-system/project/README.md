# NO FORM — Design System

> **Efficiency meets taste.** AI‑enhanced creative production with human direction.

NO FORM is a boutique creative + marketing studio launching in 2026, founded by a CMO‑turned‑creative‑director and an Adobe veteran (Alex). The studio's edge is a *hybrid* production pipeline — AI generation for scale and spectacle (Higgsfield, Freepik, Nano‑banana, GPT 2.0 image, Kling, Seedance, Beeble) paired with manual Adobe polish (Premiere, After Effects, Photoshop). The result: scroll‑stopping ad creative, video, web, packaging and UGC delivered faster and bigger than a traditional studio could manage, without the cheap "AI look".

Services are sold as monthly retainers:

| Tier | Price (USD/mo) | Roughly |
|---|---|---|
| **Tier 1** | $1–2K | Landing page concept • 30 days of social stills • email campaign • 3 video ads |
| **Tier 2** | $3–4K | Everything in Tier 1 • ~20 video ads |
| **Tier 3** | ~$10K | Everything above • Meta ads setup & management (~$2K ad spend bundled) |

The acquisition wedge: every cold call opens with **personalised creative already made for that client's brand** — proof of quality before the pitch.

---

## Sources

This design system was built from a single brand reference at project kickoff. No codebase, no Figma. Keep this list updated as more sources arrive.

| Source | Path | Notes |
|---|---|---|
| Home page concept (Magnific render) | `assets/reference/homepage.png` | Original brand reference — hero, services grid, portfolio carousel layout. |
| Hero imagery | `assets/imagery/hero.jpeg` | Cinematic rim-lit subject with ember/fire motion blur. The brand's tentpole image. |
| Service tile imagery | `assets/imagery/service-*.png` | One real client/sample image per service. |
| Portfolio carousel | `assets/imagery/carousel-{1,2,3}.png` | Three editorial fashion campaign frames. |

> **Caveat:** the reference is an AI render; imagery in `assets/imagery/` is real client/campaign work. When type/color decisions need verification against the brand, defer to the imagery — it is the source of truth.

---

## Index

Root manifest — open these in order to onboard:

- **`README.md`** *(you are here)* — brand context, content + visual fundamentals, iconography
- **`colors_and_type.css`** — CSS custom properties for the full system (colors, type, spacing, motion)
- **`SKILL.md`** — agent‑invocation contract for designing in this brand
- **`assets/`**
  - **`assets/imagery/`** — real campaign + service imagery (hero, service tiles, carousel)
  - **`assets/icons/`** — UI icons (arrow-right, arrow-left, play, close)
  - **`assets/reference/`** — original brand reference render
  - logos & marks at the root (`logo-noform.svg`, `logo-noform-dark.svg`, `mark-noform.svg`)
- **`preview/`** — design‑system cards (rendered in the Design System tab)
- **`ui_kits/`**
  - **`website/`** — NO FORM marketing site — `index.html` is the interactive walkthrough; `components.jsx`, `screens.jsx`, `app.jsx` are the React source

---

## CONTENT FUNDAMENTALS

Voice is **editorial, declarative, premium‑confident**. Closer to a fashion magazine masthead than a SaaS product. The studio talks about its work the way a director talks about a film — with restraint, never selling, never explaining the joke.

### Tone

- **Declarative, not promotional.** Sentences end with a full stop. No exclamation marks, ever. *"Efficiency meets taste."* not *"Efficiency meets taste!"*
- **Short.** Two‑to‑five word taglines preferred. One‑sentence value props. If a sentence wraps to three lines, it gets cut.
- **Pairs and contrasts.** The brand thinks in dualities: *Efficiency / taste. AI / direction. Vision / precision.* Most headlines are a setup‑and‑payoff in one breath.
- **Cinema vocabulary.** *Scroll‑stopping. Cinematic. Storytelling. Built for every platform. Crafted with vision. Delivered with precision.* Drop the marketing‑automation jargon (engagement, optimization, leverage).
- **No emoji. No exclamation marks. No em dashes used as drum rolls.** When a brand pause is needed, use a full stop and start a new sentence.

### Casing & punctuation

- **Display headlines** are sentence case, end with a period. *"Efficiency meets taste."*
- **Tile titles, nav labels, CTAs, eyebrows** are `UPPERCASE` with wide letter‑spacing (`0.18–0.22em`). *"AD CREATIVES" • "PRODUCTS" • "LET'S CREATE →"*
- **Body copy** is sentence case. No Title Case For Subheadings, ever — that reads corporate, not editorial.
- **Numbers**: spelled when conversational ("three video ads"), numeral when spec'd ("$680.00 USD", "30 days").

### Pronouns & POV

- "We" when describing the studio (the founders, plural). *"We deliver…"*
- "You" when addressing a prospective client. *"Material you could own."*
- Never "I". Even in founder bios, lead with the work.

### CTA verb library

`Let's create → · See our work → · Start the brief → · Book a call → · Add to cart` *(in mockups)*. CTAs always end with the right‑arrow glyph `→` and are letterspaced uppercase inside a hairline rectangle.

### Examples from the reference

| Slot | Copy |
|---|---|
| Nav | `PRODUCTS · PRICING · PORTFOLIO · ABOUT US` |
| CTA primary | `LET'S CREATE →` |
| Hero headline | `Efficiency meets taste.` |
| Hero body | `AI-enhanced creative production with human direction.` |
| Hero CTA | `SEE OUR WORK →` |
| Tile title | `VIDEO CREATIVES` |
| Tile sub | `Cinematic storytelling built for every platform.` |
| Section eyebrow | `OUR PORTFOLIO` |
| Section headline | `Crafted with vision. Delivered with precision.` |

### Don'ts

- Don't write "Unleash", "Supercharge", "Unlock", "Game‑changing".
- Don't reveal the toolchain in client‑facing copy. The Higgsfield/Kling/Beeble stack is *how* the work gets made, never *what* is sold. Sell the result.
- Don't apologise for AI. The brand stance is: AI is a tool the same way a camera is a tool. The taste is the product.

---

## VISUAL FOUNDATIONS

### Vibe in one paragraph

A black gallery with one spotlit object. NO FORM's visual language is **architectural, monochromatic, and cinematic**. Pages read like a fashion editorial: enormous tracked wordmark at the top, one huge declarative headline, then a grid of square photographic tiles on a deep matte ground. No gradient backgrounds in UI. No rounded chrome. No drop shadows for "depth". Every accent of warmth and color is delivered by *imagery* — the rim‑light, fire, motion blur of the hero render — never by the interface chrome.

### Color

Black-on-black. The full system steps from `#000000` (full‑bleed media) up to `#2E2E2E` (pressed surface) in ~6% lightness increments. White text is pure `#FFFFFF`; secondary text dims to `#B5B5B5` and tertiary eyebrows go to `#5C5C5C`. The brand has one accent — **ember orange `#FF6B2C`** — pulled directly from the rim‑light bloom on the hero subject. It is reserved for focus rings, hot states, links, and the occasional pull‑quote underline. *It does not appear in buttons or backgrounds.*

Light mode exists as an *inverted* surface (`--nf-paper #F4F4F2` over `--nf-ink #0A0A0A` text) for printed material and one‑off black‑on‑white assets. Default everywhere is dark.

See `colors_and_type.css` for tokens. Reach for semantic vars (`--bg-1`, `--fg-1`) in new work, raw `--nf-*` only when you need a specific shade.

### Typography

**One family, used at every size: Inter Tight** *(Google Fonts, free)*. This is a substitution — the reference looks closer to a licensed grotesque like PP Neue Montreal or Neue Haas Grotesk Display. Inter Tight reproduces the same condensed‑neutral grotesque feel at zero license cost; swap when a licensed face is acquired.

- **Display** (hero, section openers): Inter Tight 400, `-0.02em` tracking, line‑height ~1.0. Sentence case, ends with period.
- **Headings** (h1–h4): Inter Tight 500.
- **Body**: Inter Tight 400, line‑height 1.55.
- **Eyebrows / labels / nav / CTAs**: Inter Tight 400, **UPPERCASE**, `letter-spacing: 0.18em` (`0.22em` for the wordmark itself). This tracked‑caps treatment is the most recognisable visual signature of the brand — it appears on nav, every tile title, every eyebrow, every button.
- **Mono** (rare, for receipts/specs in client deliverables): JetBrains Mono.

Display sizes are deliberately enormous (up to `112px` / `7.5vw`). Don't shrink them to fit — let them break.

### Spacing & layout

A modular 4px grid with named steps `--s-1` (4px) through `--s-11` (192px). Section vertical padding is typically `--s-8`–`--s-10`. Tile gutters are tight (`--s-4` / 16px). The hero block sits flush to the page edges at the top — no inset margin. The whole layout is grid‑based; floats and absolute positioning are reserved for full‑bleed media.

### Backgrounds

- **Default page background**: `--bg-1 #0A0A0A`. Not pure black — pure black flattens against video content; `#0A0A0A` gives a hair of breathing room.
- **Section banding**: alternate `--bg-1` and `--bg-2 #141414` to subtly delineate. No borders between sections.
- **Hero & full‑bleed media wells**: `--bg-0 #000000` to let cinematic imagery dominate.
- **No gradients in UI chrome.** Gradients live inside imagery (the fiery glow on the hero subject) — never on buttons, cards, or section dividers.
- **No repeating patterns, no noise textures.** The brand is clean architecture.

### Imagery treatment

This is the loudest part of the brand. NO FORM imagery is:

- **Cinematic, high‑contrast, rim‑lit.** Subjects are isolated against deep darkness with one strong light source.
- **Warm color in motion** — orange, amber, ember bloom, fire, motion blur — placed against the cold black ground. The warmth in imagery is what makes the cold UI feel alive.
- **Editorial fashion staging.** Models in oversized garments, isolated against negative space, often shot from low angles or with dramatic perspective.
- **AI + photographic hybrid.** The brand uses AI generation (Higgsfield, Nano‑banana) for spectacle and surreal moments, then real product/UGC photography for credibility. Both share the same color treatment.
- **Square or tall portraits in grids; wide cinematic crops for hero.**
- **Grain is acceptable; saturation never neon.**

### Borders

Hairline borders are the core "container" device in place of shadows. Always `1px solid rgba(255,255,255,0.16)` (`--border-2`) for buttons and outlined tiles, `0.08` for dividers, `0.32` when focused. **Borders are never coloured** — no red/green/blue accent borders.

### Shadows & elevation

In the dark, drop shadows almost disappear. The system uses **surface lifting** (`bg-2 → bg-3 → bg-4`) for elevation, not shadows. The only hard shadows live on floating overlays (menus, modals): `--shadow-2` and `--shadow-3`. The focus ring is a solid 2px `--accent` outline, not a glow.

### Corner radii

**Default is `0`.** Tiles, sections, buttons, and the wordmark plate are all sharp rectangles. The only radii in the system: `--r-2` (4px) for form inputs, `--r-pill` (999px) for circular icon‑buttons (carousel arrows, play buttons) and the optional pill chip. Never `16px` rounded cards.

### Cards & tiles

A "tile" is the workhorse component: square or 3:4 portrait, fills with imagery, ends with a hairline divider and a 2‑line caption (tracked‑caps title + sentence‑case sub). No surrounding border, no shadow, no radius. Hover state: secondary text fades to full white, image scales `1.02` over 420ms.

### Buttons

Two shapes only:

1. **Hairline pill / rectangle button** — outlined `1px rgba(255,255,255,0.16)` rectangle, ~48px tall, ~24px horizontal padding, tracked‑caps label, trailing `→`. Background is transparent in the wild; on hover it fills to `--fg-0` and text inverts to `--bg-0`.
2. **Circular icon button** — 48px circle, same hairline border. Used for carousel nav, play, scroll affordances.

Primary and secondary buttons share the same chrome. **Hierarchy comes from placement, not color.** No coloured solid buttons.

### Hover, press, focus

- **Hover** on links/labels: fade `--fg-1 → --fg-0` over 120ms.
- **Hover** on tiles: image `transform: scale(1.02)` over 420ms `--ease-out`; caption opacity stays 1.
- **Hover** on outlined buttons: background fills `--fg-0`, text becomes `--bg-0`. Border vanishes (now opaque).
- **Press**: scale `0.98` for 80ms. No colour change on press.
- **Focus**: 2px solid `--accent` (ember) ring, 2px offset. The only place the accent colour touches UI chrome.
- **Disabled**: opacity 0.4, no other change.

### Motion

Restrained. Cinematic, not bouncy. Default duration `--t-med` 220ms, easing `cubic-bezier(0.2, 0.7, 0.2, 1)`. Page entrances fade + 12px translate‑up. Hero imagery does a slow Ken‑Burns scale (1.0 → 1.04 over 12s, looped) when supported. **No spring animations, no bounces, no parallax.** Carousel transitions are crossfades, not slide‑swipes.

### Transparency & blur

Sparingly. The nav bar gets `rgba(0,0,0,0.6)` + `backdrop-filter: blur(20px)` when content scrolls under it. Modals dim the page with `rgba(0,0,0,0.7)`. No frosted‑glass cards, no translucent buttons.

### Protection gradients

When text sits on imagery (hero, tile captions overlaid on photos), use a vertical *protection gradient* — `linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.0) 40%, rgba(0,0,0,0.65) 100%)` from the bottom up. Never use a solid plate or capsule behind text on imagery — the gradient keeps the photograph readable.

### Fixed elements

The top nav is fixed at the page top, full‑width, transparent until first scroll then dark‑blurred. No fixed footers. No sticky sidebars. No cookie banners in mocks.

### Iconography

See next section.

---

## ICONOGRAPHY

Icons are **rare** in NO FORM's world. The brand is a typographic brand first — most "icons" you'd reach for in a SaaS product (a hamburger menu, a search loupe, a settings cog) are *replaced with tracked‑caps wordmarks* on this site (e.g. `MENU` instead of ☰, `SEARCH` instead of 🔍, the LET'S CREATE button instead of a generic + ). When an icon is actually needed, it follows these rules:

### Style

- **Stroke‑based, 1.5px stroke, sharp 0° corners.** Match the hairline borders elsewhere. No filled icons, no rounded line‑caps, no two‑tone.
- **24px or 16px nominal size**, drawn on a 24px grid.
- **Monochromatic** — white at full opacity on dark surfaces, never coloured. (Ember accent is *type* and *focus rings* only.)
- **Geometric, neutral**, no character or hand‑drawn flair. Think Phosphor Light or Lucide stripped of curves.

### Source

- **Lucide via CDN** is the substitution: `https://unpkg.com/lucide-static@latest/icons/<name>.svg`. Use `lucide-react` if a UI kit needs React: `<Icon name="arrow-right" strokeWidth={1.5} />`. **Flag**: this is a substitution; the brand does not yet have its own icon set. When one is commissioned, swap.
- The four hard‑coded shapes that appear in the reference (`→` arrow, `←` arrow, `▶` play, `×` close) are inlined as SVG in `assets/icons/` to guarantee exact rendering — see that folder.

### Emoji

**Never.** Not in marketing copy, not in UI, not in CTAs, not in social posts representing the brand voice. (Client work may include emoji where the *client's* brand requires it — the studio adapts.)

### Unicode glyphs

The two we *do* use as type: **`→`** (U+2192 RIGHTWARDS ARROW) inside every CTA, and the **`·`** (U+00B7 MIDDLE DOT) as the bullet separator in dense nav rows. Both rendered in the display font, never replaced with image equivalents.

### Logo & mark

- **Primary wordmark** — `assets/logo-noform.svg` — "NO FORM" tracked at `0.34em`, white. The hero space is the wordmark space.
- **Inverted wordmark** — `assets/logo-noform-dark.svg` — same, on light surfaces.
- **Compact mark** — `assets/mark-noform.svg` — a 1px‑outlined square containing `NO / FM` stacked. For favicons, app icons, watermarks on client decks. Use sparingly.

There is no monogram, no symbol, no mascot. The brand name *is* the brand mark — that is intentional and editorial.
