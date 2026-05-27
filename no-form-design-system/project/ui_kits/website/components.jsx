// NO FORM — Website UI kit — primitive components
// Load order: this file is loaded BEFORE screens.jsx and app.jsx.
// Exposes components onto window for the other Babel scripts.

const Wordmark = ({ size = 16, color = "var(--fg-0)", spacing = "0.34em" }) => (
  <div
    style={{
      fontFamily: "var(--font-display)",
      fontWeight: 400,
      fontSize: size,
      letterSpacing: spacing,
      color,
      textTransform: "uppercase",
      whiteSpace: "nowrap",
    }}
  >
    NO&nbsp;FORM
  </div>
);

const Eyebrow = ({ children, color = "var(--fg-2)", style = {} }) => (
  <div
    style={{
      fontFamily: "var(--font-display)",
      fontWeight: 400,
      fontSize: 11,
      lineHeight: 1,
      letterSpacing: "0.22em",
      textTransform: "uppercase",
      color,
      ...style,
    }}
  >
    {children}
  </div>
);

// Hairline rectangle button — the only button shape in the brand.
const Button = ({
  children,
  variant = "outline", // "outline" | "fill"
  size = "md",         // "md" | "sm"
  onClick,
  trailing = "→",
  style = {},
}) => {
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const isFill = variant === "fill" || hover;
  const pad = size === "sm" ? "10px 18px" : "16px 26px";
  const fontSize = size === "sm" ? 10 : 11;
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => { setHover(false); setPress(false); }}
      onMouseDown={() => setPress(true)}
      onMouseUp={() => setPress(false)}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 14,
        padding: pad,
        background: isFill ? "var(--fg-0)" : "transparent",
        color: isFill ? "var(--bg-0)" : "var(--fg-0)",
        border: `1px solid ${isFill ? "var(--fg-0)" : "rgba(255,255,255,0.32)"}`,
        borderRadius: 0,
        fontFamily: "var(--font-display)",
        fontWeight: isFill ? 500 : 400,
        fontSize,
        letterSpacing: "0.22em",
        textTransform: "uppercase",
        cursor: "pointer",
        transition: "transform 80ms var(--ease-out), background 220ms var(--ease-out), color 220ms var(--ease-out), border-color 220ms var(--ease-out)",
        transform: press ? "scale(0.98)" : "scale(1)",
        ...style,
      }}
    >
      {children}
      {trailing && <span style={{ fontSize: size === "sm" ? 12 : 14 }}>{trailing}</span>}
    </button>
  );
};

// Circular icon button — carousel arrows, play, close, etc.
const IconButton = ({
  children,
  size = 48,
  onClick,
  ariaLabel,
  style = {},
}) => {
  const [hover, setHover] = React.useState(false);
  return (
    <button
      aria-label={ariaLabel}
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        width: size,
        height: size,
        borderRadius: 999,
        background: "transparent",
        border: `1px solid ${hover ? "var(--fg-0)" : "rgba(255,255,255,0.32)"}`,
        color: "var(--fg-0)",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        fontFamily: "var(--font-display)",
        fontSize: 16,
        transition: "border-color 220ms var(--ease-out)",
        ...style,
      }}
    >
      {children}
    </button>
  );
};

// CSS-painted cinematic backdrops. tone determines mood.
const MediaWell = ({
  tone = "cinematic", // cinematic | studio | warm | webdesign | mobile | product | model | ember
  aspect = "4/3",
  children,
  style = {},
}) => {
  const tones = {
    cinematic: {
      background:
        "radial-gradient(ellipse at 55% 50%, rgba(255,107,44,0.55) 0%, rgba(170,40,15,0.35) 22%, rgba(15,8,5,0.95) 60%, #000 100%)",
    },
    ember: {
      background:
        "radial-gradient(ellipse at 70% 45%, rgba(255,140,70,0.7) 0%, rgba(200,60,20,0.45) 18%, rgba(30,10,5,0.95) 55%, #000 100%)",
    },
    studio: {
      background:
        "linear-gradient(180deg, #2a2a2a 0%, #181818 60%, #0a0a0a 100%)",
    },
    warm: {
      background:
        "linear-gradient(135deg, #2a1a14 0%, #4a2e1c 40%, #1a0e08 100%)",
    },
    webdesign: {
      background:
        "linear-gradient(160deg, #1a1a1a 0%, #0e0e0e 100%)",
    },
    mobile: {
      background:
        "linear-gradient(180deg, #161616 0%, #0a0a0a 100%)",
    },
    product: {
      background:
        "radial-gradient(ellipse at 50% 70%, #2a2a2a 0%, #0a0a0a 70%)",
    },
    model: {
      background:
        "linear-gradient(180deg, #1c1c1c 0%, #0a0a0a 100%)",
    },
  };
  return (
    <div
      style={{
        aspectRatio: aspect,
        position: "relative",
        overflow: "hidden",
        ...tones[tone],
        ...style,
      }}
    >
      {/* universal subtle grain */}
      <div style={{
        position: "absolute", inset: 0,
        background: "radial-gradient(circle at 30% 70%, rgba(255,255,255,0.04), transparent 50%)",
        pointerEvents: "none",
      }}/>
      {children}
    </div>
  );
};

// A service tile (image well + tracked title + sentence sub).
const Tile = ({ tone, eyebrow, title, sub, aspect = "4/3", inset, onClick }) => {
  const [hover, setHover] = React.useState(false);
  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        background: "var(--bg-2)",
        cursor: onClick ? "pointer" : "default",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div style={{ overflow: "hidden" }}>
        <MediaWell tone={tone} aspect={aspect} style={{
          transform: hover ? "scale(1.02)" : "scale(1)",
          transition: "transform 420ms var(--ease-out)",
        }}>
          {inset}
        </MediaWell>
      </div>
      <div style={{ padding: "20px 22px 24px", display: "flex", flexDirection: "column", gap: 6 }}>
        {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
        <div style={{
          fontFamily: "var(--font-display)", fontWeight: 500,
          fontSize: 16, letterSpacing: "0.08em", textTransform: "uppercase",
          color: "var(--fg-0)",
        }}>{title}</div>
        <div style={{
          fontFamily: "var(--font-body)", fontSize: 13,
          color: "var(--fg-1)", lineHeight: 1.45, maxWidth: 320,
        }}>{sub}</div>
      </div>
    </div>
  );
};

const EyebrowHeadline = ({ eyebrow, headline, sub, align = "center", maxWidth = 720 }) => (
  <div style={{
    display: "flex", flexDirection: "column",
    alignItems: align === "center" ? "center" : "flex-start",
    textAlign: align,
    gap: 14, maxWidth, margin: align === "center" ? "0 auto" : 0,
  }}>
    {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
    <h2 style={{
      margin: 0,
      fontFamily: "var(--font-display)", fontWeight: 400,
      fontSize: "clamp(32px, 4.2vw, 56px)", lineHeight: 1.05,
      letterSpacing: "-0.02em", color: "var(--fg-0)",
    }}>{headline}</h2>
    {sub && <p style={{
      margin: 0, fontFamily: "var(--font-body)",
      fontSize: 16, lineHeight: 1.55, color: "var(--fg-1)",
      maxWidth: 540,
    }}>{sub}</p>}
  </div>
);

const TopNav = ({ current, onNavigate, onBriefOpen }) => {
  const items = [
    { id: "products", label: "Products" },
    { id: "pricing", label: "Pricing" },
    { id: "portfolio", label: "Portfolio" },
    { id: "about", label: "About us" },
  ];
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
      display: "flex", alignItems: "center", justifyContent: "space-between",
      padding: "22px 48px",
      background: scrolled ? "rgba(0,0,0,0.6)" : "transparent",
      backdropFilter: scrolled ? "blur(20px)" : "none",
      WebkitBackdropFilter: scrolled ? "blur(20px)" : "none",
      borderBottom: scrolled ? "1px solid var(--border-1)" : "1px solid transparent",
      transition: "background 220ms var(--ease-out), border-color 220ms var(--ease-out)",
    }}>
      <a
        href="#home"
        onClick={(e) => { e.preventDefault(); onNavigate("home"); }}
        style={{ textDecoration: "none" }}
      >
        <Wordmark />
      </a>
      <div style={{ display: "flex", gap: 48 }}>
        {items.map(it => (
          <a key={it.id}
            href={`#${it.id}`}
            onClick={(e) => { e.preventDefault(); onNavigate(it.id); }}
            style={{
              fontFamily: "var(--font-display)", fontWeight: 400,
              fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase",
              color: current === it.id ? "var(--fg-0)" : "var(--fg-1)",
              textDecoration: "none", cursor: "pointer",
              transition: "color 120ms var(--ease-out)",
            }}
            onMouseEnter={(e) => e.currentTarget.style.color = "var(--fg-0)"}
            onMouseLeave={(e) => e.currentTarget.style.color = current === it.id ? "var(--fg-0)" : "var(--fg-1)"}
          >{it.label}</a>
        ))}
      </div>
      <Button onClick={onBriefOpen}>Let's create</Button>
    </nav>
  );
};

const Footer = ({ onNavigate, onBriefOpen }) => (
  <footer style={{
    background: "var(--bg-0)",
    borderTop: "1px solid var(--border-1)",
    padding: "80px 48px 32px",
    display: "flex", flexDirection: "column", gap: 64,
  }}>
    <div style={{
      display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr 1fr",
      gap: 48, alignItems: "start",
    }}>
      <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
        <Wordmark size={20} />
        <p style={{ margin: 0, color: "var(--fg-1)", fontSize: 14, lineHeight: 1.5, maxWidth: 320 }}>
          A creative studio building scroll‑stopping campaigns. AI‑enhanced production, manual polish.
        </p>
        <Button size="sm" onClick={onBriefOpen}>Start a brief</Button>
      </div>

      <FooterColumn title="Studio" links={[
        { label: "Products", id: "products" },
        { label: "Pricing", id: "pricing" },
        { label: "Portfolio", id: "portfolio" },
        { label: "About us", id: "about" },
      ]} onNavigate={onNavigate}/>

      <FooterColumn title="Services" links={[
        { label: "Ad creatives" },
        { label: "Video creatives" },
        { label: "Web design" },
        { label: "Email & SMS" },
        { label: "AI UGC" },
      ]}/>

      <FooterColumn title="Contact" links={[
        { label: "hello@noform.studio" },
        { label: "Instagram" },
        { label: "LinkedIn" },
        { label: "Vimeo" },
      ]}/>
    </div>

    <div style={{
      display: "flex", justifyContent: "space-between", alignItems: "center",
      paddingTop: 32, borderTop: "1px solid var(--border-1)",
      fontFamily: "var(--font-display)", fontSize: 10,
      letterSpacing: "0.22em", textTransform: "uppercase",
      color: "var(--fg-3)",
    }}>
      <span>© 2026 No Form Studio</span>
      <span>Built with vision · Delivered with precision</span>
    </div>
  </footer>
);

const FooterColumn = ({ title, links, onNavigate }) => (
  <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
    <Eyebrow>{title}</Eyebrow>
    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
      {links.map((l, i) => (
        <a
          key={i}
          href={l.id ? `#${l.id}` : "#"}
          onClick={(e) => { if (l.id && onNavigate) { e.preventDefault(); onNavigate(l.id); } }}
          style={{
            fontFamily: "var(--font-body)", fontSize: 14,
            color: "var(--fg-1)", textDecoration: "none", cursor: "pointer",
            transition: "color 120ms var(--ease-out)",
          }}
          onMouseEnter={(e) => e.currentTarget.style.color = "var(--fg-0)"}
          onMouseLeave={(e) => e.currentTarget.style.color = "var(--fg-1)"}
        >{l.label}</a>
      ))}
    </div>
  </div>
);

Object.assign(window, {
  Wordmark, Eyebrow, Button, IconButton, MediaWell, Tile,
  EyebrowHeadline, TopNav, Footer, FooterColumn,
});
