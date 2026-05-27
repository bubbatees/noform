# NO FORM Website — UI Kit

Interactive recreation of the NO FORM marketing site, derived from the single brand reference at `assets/reference/homepage.png` in the project root. **This is a UI kit, not production code** — components are cosmetic and click-through.

## Run
Open `index.html` in the preview. Click navigation links to move between screens. Hover tiles for the scale-up motion. Try `LET'S CREATE →` to open the brief modal.

## Screens
1. **Home** — wordmark hero, services grid, portfolio carousel, manifesto block, footer.
2. **Products** — full services detail, tier comparison.
3. **Pricing** — three-tier table.
4. **Portfolio** — case studies grid (placeholder tiles).
5. **About** — manifesto + founder bios.
6. **Brief modal** — outlined form drawer for `LET'S CREATE →`.

## Files
- `index.html` — page shell, React + Babel, mounts `<App />`.
- `components.jsx` — primitive components (`Button`, `IconButton`, `TopNav`, `Tile`, `EyebrowHeadline`, `Footer`, `Wordmark`, `MediaWell`).
- `screens.jsx` — `<Home />`, `<Products />`, `<Pricing />`, `<Portfolio />`, `<About />`, `<BriefModal />`.
- `app.jsx` — top-level `<App />` with simple hash router.

## Caveats
- **All imagery is generated via CSS gradients.** When real campaign assets are available, replace the `<MediaWell tone="...">` swatches with `<img>` tags or `<image-slot>` web components.
- **No real photography of the founders / team / studio** — those tiles are placeholders.
- **The font is Inter Tight (Google Fonts)** as a substitution for an unidentified licensed grotesque on the reference. Swap when the official face is acquired.
