---
name: no-form-design
description: Use this skill to generate well-branded interfaces and assets for NO FORM, a dark-editorial creative + marketing studio. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping. Use for landing pages, decks, ad creatives, social posts, email templates, internal tools — anything that needs to look like NO FORM made it.
user-invocable: true
---

# NO FORM — design skill

Read the **README.md** at the root of this skill first. It contains the full brand context, content fundamentals, visual foundations, and iconography guide.

After README, you'll most often want:

- `colors_and_type.css` — drop into any HTML to inherit the full token system (CSS vars for color, type, spacing, motion).
- `assets/` — logos (`logo-noform.svg`, `mark-noform.svg`), icons (`assets/icons/`), and real campaign imagery (`assets/imagery/`).
- `ui_kits/website/` — pixel-fidelity React components for the marketing site. Lift these directly when building NO FORM web surfaces.
- `preview/` — small reference cards for every primitive in the system, useful as visual reminders.

## How to design in this brand

The brand in one sentence: **a black gallery with one spotlit object — editorial fashion-grade, monochromatic, cinematic, never a SaaS site.**

- **Background is `--bg-1` (#0A0A0A)**, not pure black. Cards lift in 6% lightness steps.
- **Type is Inter Tight at every size**, sentence-case for headlines (ending in a period), `UPPERCASE` tracked `0.18–0.22em` for labels/eyebrows/CTAs/nav. This tracked-caps treatment is the brand's most recognisable signature.
- **No rounded corners except form inputs (4px) and circular icon buttons.** Tiles, sections, buttons are sharp rectangles.
- **One accent colour: ember `#FF6B2C`** — used only on focus rings and hot moments. Never in buttons or backgrounds.
- **Buttons are hairline outlined rectangles** (1px `rgba(255,255,255,0.32)`), pad ~16px/26px, label tracked-caps `0.22em`, trailing `→`. On hover the button fills white and text inverts. Always end CTA labels with `→`.
- **Imagery does the colour work.** Cinematic AI renders, editorial fashion, warm UGC, rim-lit subjects. Stick to the `assets/imagery/` set or AI generation that matches that mood.
- **No emoji. No exclamation marks. No gradients in UI chrome.** Gradients live inside imagery only.
- **Copy is short, declarative, ends with a period.** Pairs and contrasts ("Efficiency meets taste.", "Vision / precision"). No marketing-automation jargon.

## When invoked

If a user invokes this skill without further guidance:

1. Ask what they want to build (landing page section, ad creative, email, deck slide, something else).
2. Ask a couple of clarifying questions (audience, copy, any specific imagery to use).
3. Output as HTML by default (linking `colors_and_type.css` and copying assets), unless the user asks for production React/JSX. The UI kit at `ui_kits/website/` is a good lift-and-shift source.
4. Always copy assets you reference into the output's folder — never deep-link to skill-internal paths from a user-facing artifact.

If working inside a codebase (production), copy `colors_and_type.css` into the project, port the assets you need, and write production-quality components that match the visual foundations in README.md.
