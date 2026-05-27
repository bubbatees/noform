// NO FORM — Website UI kit — screens (using real imagery from assets/imagery/)
// Depends on components.jsx (window.* primitives).

const IMG = "../../assets/imagery/";

// Standalone-bundle resolver: when this file is exported via super_inline_html,
// window.__resources is populated with blob URLs keyed by resource-id (set in
// the index.html meta tags). At dev-time it falls through to the relative path.
const NFAsset = (f) => {
  const key = "img_" + f.replace(/[.\-]/g, "_");
  return (typeof window !== "undefined" && window.__resources && window.__resources[key]) || (IMG + f);
};

const HERO_HEADLINE = "Efficiency meets taste.";
const HERO_SUB = "AI-enhanced creative production with human direction.";

const Home = ({ onNavigate, onBriefOpen, heroHeadline, heroSub }) => (
  <main>
    <Hero onBriefOpen={onBriefOpen} headline={heroHeadline || HERO_HEADLINE} sub={heroSub || HERO_SUB}/>
    <ServicesSection/>
    <PortfolioCarouselSection/>
    <ManifestoStripe/>
    <ProcessSection/>
    <CTASection onBriefOpen={onBriefOpen}/>
  </main>
);

// ---------------------------------------------------------------
// HERO — full-bleed photographic, headline left, image right
// ---------------------------------------------------------------
const Hero = ({ onBriefOpen, headline = HERO_HEADLINE, sub = HERO_SUB }) => {
  // Allow newline characters (\n) in headline to be rendered as <br/>.
  const lines = headline.split("\n");
  return (
  <section style={{
    position: "relative", minHeight: "100vh",
    paddingTop: 100, paddingLeft: 48, paddingRight: 48, paddingBottom: 80,
    background: "var(--bg-0)", overflow: "hidden",
    display: "flex", flexDirection: "column", justifyContent: "center",
  }}>
    {/* Real hero image — full bleed */}
    <div style={{
      position: "absolute", inset: 0,
      backgroundImage: `url(${NFAsset("hero.jpeg")})`,
      backgroundSize: "cover",
      backgroundPosition: "center right",
    }}/>
    {/* Protection gradient — keeps headline readable on left */}
    <div style={{
      position: "absolute", inset: 0,
      background: "linear-gradient(90deg, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.55) 35%, rgba(0,0,0,0.05) 60%, transparent 100%)",
    }}/>
    {/* Bottom fade */}
    <div style={{
      position: "absolute", inset: 0,
      background: "linear-gradient(180deg, transparent 0%, transparent 70%, rgba(0,0,0,0.7) 100%)",
    }}/>

    <div style={{ position: "relative", zIndex: 2, maxWidth: 720, display: "flex", flexDirection: "column", gap: 28 }}>
      <h1 style={{
        margin: 0,
        fontFamily: "var(--font-display)", fontWeight: 400,
        fontSize: "clamp(56px, 7.2vw, 112px)", lineHeight: 1.0,
        letterSpacing: "-0.02em", color: "var(--fg-0)",
      }}>
        {lines.length > 1
          ? lines.map((l, i) => <React.Fragment key={i}>{l}{i < lines.length - 1 ? <br/> : null}</React.Fragment>)
          : headline}
      </h1>
      <p style={{
        margin: 0, fontFamily: "var(--font-body)",
        fontSize: 18, lineHeight: 1.55, color: "var(--fg-1)",
        maxWidth: 360,
      }}>{sub}</p>
      <div style={{ display: "flex", gap: 14 }}>
        <Button onClick={onBriefOpen}>See our work</Button>
      </div>
    </div>
  </section>
);
};

// ---------------------------------------------------------------
// SERVICES GRID — 2 rows × 3 cols, 3:4 aspect, real imagery
// ---------------------------------------------------------------
const SERVICES = [
  { img: "service-ad-creatives.jpg",   title: "Ad creatives",   sub: "Scroll-stopping ads that sell." },
  { img: "service-video-creatives.jpg",title: "Video creatives",sub: "Cinematic storytelling built for every platform." },
  { img: "service-web-design.jpg",     title: "Web design",     sub: "Beautiful, conversion-focused websites." },
  { img: "service-email-sms.jpg",      title: "Email & SMS",    sub: "Campaigns that convert and retain." },
  { img: "service-product-cards.jpg",  title: "Product cards",  sub: "Clean, optimized visuals that drive clicks." },
  { img: "service-ai-ugc.jpg",         title: "AI UGC",         sub: "Authentic content at scale, without the big budget." },
];

const ServicesSection = () => (
  <section style={{ padding: "120px 48px", background: "var(--bg-1)" }}>
    <div style={{
      display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24,
      maxWidth: 1480, margin: "0 auto",
    }}>
      {SERVICES.map((s, i) => (
        <ServiceTile key={i} {...s}/>
      ))}
    </div>
  </section>
);

const ServiceTile = ({ img, title, sub }) => {
  const [hover, setHover] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        position: "relative",
        cursor: "pointer",
        overflow: "hidden",
        aspectRatio: "3/4",
        background: "var(--bg-2)",
      }}
    >
      {/* Image */}
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: `url(${NFAsset(img)})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        transform: hover ? "scale(1.03)" : "scale(1)",
        transition: "transform 520ms var(--ease-out)",
      }}/>
      {/* Protection gradient */}
      <div style={{
        position: "absolute", inset: 0,
        background: "linear-gradient(180deg, transparent 0%, transparent 50%, rgba(0,0,0,0.85) 100%)",
      }}/>
      {/* Caption */}
      <div style={{
        position: "absolute", left: 28, right: 28, bottom: 28,
        display: "flex", flexDirection: "column", gap: 8,
      }}>
        <div style={{
          fontFamily: "var(--font-display)", fontWeight: 500,
          fontSize: 18, letterSpacing: "0.1em", textTransform: "uppercase",
          color: "var(--fg-0)",
        }}>{title}</div>
        <div style={{
          fontFamily: "var(--font-body)", fontSize: 14,
          color: "rgba(255,255,255,0.78)", lineHeight: 1.45, maxWidth: 280,
        }}>{sub}</div>
      </div>
    </div>
  );
};

// ---------------------------------------------------------------
// PORTFOLIO CAROUSEL — 3 visible (sides dimmed), arrows L/R
// ---------------------------------------------------------------
const PORTFOLIO = [
  { img: "carousel-1.jpg", title: "DANKE SCHÖN", category: "Fashion · Lookbook" },
  { img: "carousel-2.jpg", title: "CARDINALS",   category: "Streetwear · Campaign" },
  { img: "carousel-3.jpg", title: "FREEFALL",    category: "Editorial · Motion" },
];

const PortfolioCarouselSection = () => {
  const [idx, setIdx] = React.useState(0);
  const total = PORTFOLIO.length;
  const next = () => setIdx((idx + 1) % total);
  const prev = () => setIdx((idx - 1 + total) % total);
  return (
    <section style={{ padding: "120px 0", background: "var(--bg-1)", borderTop: "1px solid var(--border-1)" }}>
      <div style={{ padding: "0 48px", marginBottom: 56 }}>
        <EyebrowHeadline
          align="center"
          eyebrow="Our portfolio"
          headline="Crafted with vision. Delivered with precision."
        />
      </div>

      <div style={{
        position: "relative", display: "flex", alignItems: "center",
        gap: 24, padding: "0 48px",
      }}>
        <IconButton onClick={prev} ariaLabel="Previous" size={56}>←</IconButton>

        <div style={{
          flex: 1,
          display: "grid", gridTemplateColumns: "1fr 1.6fr 1fr", gap: 20,
          alignItems: "center",
        }}>
          {[-1, 0, 1].map(off => {
            const i = (idx + off + total) % total;
            const p = PORTFOLIO[i];
            const isCenter = off === 0;
            return (
              <CarouselSlide
                key={off + "-" + i}
                img={p.img}
                title={p.title}
                category={p.category}
                isCenter={isCenter}
                onClick={!isCenter ? () => setIdx(i) : undefined}
              />
            );
          })}
        </div>

        <IconButton onClick={next} ariaLabel="Next" size={56}>→</IconButton>
      </div>

      <div style={{ display: "flex", justifyContent: "center", gap: 8, marginTop: 40 }}>
        {PORTFOLIO.map((_, i) => (
          <div key={i} onClick={() => setIdx(i)} style={{
            width: i === idx ? 32 : 8, height: 2,
            background: i === idx ? "var(--fg-0)" : "var(--fg-3)",
            transition: "all 320ms var(--ease-out)", cursor: "pointer",
          }}/>
        ))}
      </div>
    </section>
  );
};

const CarouselSlide = ({ img, title, category, isCenter, onClick }) => (
  <div
    onClick={onClick}
    style={{
      position: "relative", overflow: "hidden",
      aspectRatio: isCenter ? "4/5" : "3/4",
      cursor: onClick ? "pointer" : "default",
      opacity: isCenter ? 1 : 0.32,
      transform: isCenter ? "scale(1)" : "scale(0.94)",
      transition: "opacity 520ms var(--ease-out), transform 520ms var(--ease-out)",
      background: "var(--bg-2)",
    }}
  >
    <div style={{
      position: "absolute", inset: 0,
      backgroundImage: `url(${NFAsset(img)})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}/>
    {isCenter && (
      <React.Fragment>
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(180deg, transparent 0%, transparent 55%, rgba(0,0,0,0.82) 100%)",
        }}/>
        <div style={{
          position: "absolute", left: 32, right: 32, bottom: 32,
          display: "flex", flexDirection: "column", gap: 8,
        }}>
          <Eyebrow style={{ color: "rgba(255,255,255,0.75)" }}>{category}</Eyebrow>
          <div style={{
            fontFamily: "var(--font-display)", fontWeight: 400,
            fontSize: 36, letterSpacing: "0.04em", color: "var(--fg-0)",
            lineHeight: 1.05,
          }}>{title}</div>
        </div>
      </React.Fragment>
    )}
  </div>
);

// ---------------------------------------------------------------
// MANIFESTO STRIPE
// ---------------------------------------------------------------
const ManifestoStripe = () => (
  <section style={{
    padding: "160px 48px", background: "var(--bg-0)",
    borderTop: "1px solid var(--border-1)", borderBottom: "1px solid var(--border-1)",
  }}>
    <div style={{ maxWidth: 1080, margin: "0 auto" }}>
      <Eyebrow style={{ marginBottom: 32 }}>Manifesto</Eyebrow>
      <p style={{
        margin: 0, fontFamily: "var(--font-display)", fontWeight: 400,
        fontSize: "clamp(28px, 3.4vw, 48px)", lineHeight: 1.2,
        letterSpacing: "-0.01em", color: "var(--fg-0)",
      }}>
        We build campaigns the way a director builds a film. AI is the camera —
        <span style={{ color: "var(--fg-3)" }}> faster, cheaper, larger than life</span>.
        Taste is the cut.
        <span style={{ color: "var(--fg-3)" }}> Vision is the reason anyone watches.</span>
      </p>
    </div>
  </section>
);

// ---------------------------------------------------------------
// PROCESS
// ---------------------------------------------------------------
const PROCESS = [
  { n: "01", t: "Brief", c: "We meet, you talk, we listen. By the end of the call you have three personalised concepts already in motion." },
  { n: "02", t: "Generate", c: "Higgsfield, Kling, Nano-banana, Seedance. We spin up scale at machine speed, and pull only the frames worth keeping." },
  { n: "03", t: "Polish", c: "Premiere, After Effects, Beeble for background plates. Hand-cut, colour-graded, sound-designed." },
  { n: "04", t: "Ship", c: "Master files plus platform cuts for Meta, TikTok, YouTube. Ready to spend behind." },
];

const ProcessSection = () => (
  <section style={{ padding: "120px 48px", background: "var(--bg-1)" }}>
    <EyebrowHeadline
      align="center"
      eyebrow="How it works"
      headline="Hybrid by design."
      sub="AI generation for spectacle and scale. Adobe craft for polish. Every deliverable touched by a human."
    />
    <div style={{
      marginTop: 72,
      display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 0,
      borderTop: "1px solid var(--border-1)",
      maxWidth: 1400, margin: "72px auto 0",
    }}>
      {PROCESS.map((p, i) => (
        <div key={i} style={{
          padding: "32px 28px", display: "flex", flexDirection: "column", gap: 14,
          borderRight: i < 3 ? "1px solid var(--border-1)" : "none",
          borderBottom: "1px solid var(--border-1)",
        }}>
          <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--fg-3)" }}>{p.n}</div>
          <div style={{
            fontFamily: "var(--font-display)", fontWeight: 500,
            fontSize: 22, letterSpacing: "-0.01em", color: "var(--fg-0)",
          }}>{p.t}</div>
          <div style={{ fontFamily: "var(--font-body)", fontSize: 14, color: "var(--fg-1)", lineHeight: 1.5 }}>{p.c}</div>
        </div>
      ))}
    </div>
  </section>
);

// ---------------------------------------------------------------
// CTA section
// ---------------------------------------------------------------
const CTASection = ({ onBriefOpen }) => (
  <section style={{
    padding: "160px 48px", background: "var(--bg-0)",
    position: "relative", overflow: "hidden",
  }}>
    <div style={{
      position: "absolute", inset: "0", pointerEvents: "none",
      backgroundImage: `url(${NFAsset("hero.jpeg")})`,
      backgroundSize: "cover", backgroundPosition: "center",
      opacity: 0.28, filter: "blur(20px)",
    }}/>
    <div style={{
      position: "absolute", inset: 0,
      background: "linear-gradient(180deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.85) 100%)",
    }}/>
    <div style={{ position: "relative", maxWidth: 760, margin: "0 auto", textAlign: "center", display: "flex", flexDirection: "column", gap: 28, alignItems: "center" }}>
      <Eyebrow>Let's create</Eyebrow>
      <h2 style={{
        margin: 0, fontFamily: "var(--font-display)", fontWeight: 400,
        fontSize: "clamp(40px, 5vw, 72px)", lineHeight: 1.05,
        letterSpacing: "-0.02em", color: "var(--fg-0)",
      }}>Bring us your brand. Walk out with the campaign.</h2>
      <p style={{ margin: 0, color: "var(--fg-1)", fontSize: 16, lineHeight: 1.5, maxWidth: 520 }}>
        First call ends with three personalised concepts you can own. No deck, no theory — real material.
      </p>
      <Button onClick={onBriefOpen} variant="fill">Book the call</Button>
    </div>
  </section>
);

// ---------------------------------------------------------------
// PRODUCTS PAGE
// ---------------------------------------------------------------
const Products = ({ onBriefOpen }) => (
  <main>
    <PageHeader eyebrow="Products" title="Six surfaces. One studio." sub="Pick a service or the whole shop. Each one ships under the same direction, same polish, same monthly rhythm."/>
    <section style={{ padding: "0 48px 120px", background: "var(--bg-1)" }}>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 24, maxWidth: 1400, margin: "0 auto" }}>
        {SERVICES.map((s, i) => (
          <ProductDetailRow key={i} {...s} idx={String(i+1).padStart(2,"0")}/>
        ))}
      </div>
    </section>
    <CTASection onBriefOpen={onBriefOpen}/>
  </main>
);

const ProductDetailRow = ({ img, title, sub, idx }) => (
  <div style={{ background: "var(--bg-2)", display: "flex", flexDirection: "column" }}>
    <div style={{
      aspectRatio: "16/10",
      backgroundImage: `url(${NFAsset(img)})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}/>
    <div style={{ padding: "28px 32px 32px", display: "flex", flexDirection: "column", gap: 12 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
        <div style={{
          fontFamily: "var(--font-display)", fontWeight: 500,
          fontSize: 22, letterSpacing: "0.08em", textTransform: "uppercase",
          color: "var(--fg-0)",
        }}>{title}</div>
        <div style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--fg-3)" }}>{idx}</div>
      </div>
      <p style={{ margin: 0, color: "var(--fg-1)", fontSize: 15, lineHeight: 1.55 }}>{sub}</p>
    </div>
  </div>
);

// ---------------------------------------------------------------
// PRICING PAGE
// ---------------------------------------------------------------
const TIERS = [
  {
    name: "Studio", price: "499", cadence: "/ month",
    blurb: "The foundation. One brand, monthly cadence, every surface touched.",
    bullets: [
      "Landing or homepage concept",
      "30 days of social stills",
      "1 email campaign (weekly emails)",
      "3 video ads",
      "Concept + revision rounds",
    ],
    cta: "Start with Studio",
  },
  {
    name: "Studio +", price: "1999", cadence: "/ month",
    blurb: "When video carries the campaign.",
    bullets: [
      "Everything in Studio",
      "20 video ads per month",
      "UGC + studio cuts",
      "Bi-weekly strategy calls",
      "Priority slot",
    ],
    cta: "Start with Studio +",
    featured: true,
  },
  {
    name: "Studio Max", price: "5999", cadence: "/ month",
    blurb: "Full creative + Meta ads management.",
    bullets: [
      "Everything in Studio +",
      "Meta ads setup",
      "~$2K ad spend bundled",
      "Weekly reporting",
      "Dedicated account director",
    ],
    cta: "Talk to us",
  },
];

const ALACARTE = [
  { title: "Landing or homepage concept", note: "+ 2 revisions", price: "299" },
  { title: "Packaging concept",            note: "per SKU · + 2 revisions", price: "249" },
  { title: "Static social pack — 15 posts", note: "+ 1 revision per post", price: "149" },
  { title: "Static social pack — 30 posts", note: "+ 1 revision per post", price: "249" },
  { title: "Short-form video ad — single", note: "+ 2 revisions · 15–30s, multiple ratios", price: "99" },
  { title: "Video ad pack — 10 ads",       note: "+ 2 revisions per ad · best per-unit value", price: "699" },
  { title: "UGC-style creative pack — 5 shorts", note: "+ 1 revision per asset · Marketing Studio + polish", price: "399" },
  { title: "Email campaign — 1 hero + 2 follow-ups", note: "+ 2 revisions", price: "179" },
  { title: "Brand identity / mini brand sprint", note: "+ 2 revisions · required for new clients without a kit", price: "599" },
  { title: "Meta Ads setup — one-time",    note: "Audit, pixel, audiences, first 5 campaigns built", price: "649" },
];

const Pricing = ({ onBriefOpen, featuredTier = "Studio +", studioPlusPrice, showALaCarte = true }) => {
  const tiers = TIERS.map(t => ({
    ...t,
    featured: t.name === featuredTier,
    price: (t.name === "Studio +" && studioPlusPrice) ? studioPlusPrice : t.price,
  }));
  return (
  <main>
    <PageHeader eyebrow="Pricing" title="Three rooms. Same studio."
      sub="Monthly retainers. No setup fees. Cancel with 30 days."/>
    <section style={{ padding: "0 48px 120px", background: "var(--bg-1)" }}>
      <div style={{
        display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16,
        maxWidth: 1280, margin: "0 auto",
      }}>
        {tiers.map((t, i) => <TierCard key={i} {...t} onBriefOpen={onBriefOpen}/>)}
      </div>
      {showALaCarte && <ALaCarteSection onBriefOpen={onBriefOpen}/>}
    </section>
  </main>
  );
};

const ALaCarteSection = ({ onBriefOpen }) => (
  <div style={{ marginTop: 96, maxWidth: 1280, margin: "96px auto 0" }}>
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 40, flexWrap: "wrap", gap: 20 }}>
      <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
        <Eyebrow>À la carte</Eyebrow>
        <h2 style={{
          margin: 0, fontFamily: "var(--font-display)", fontWeight: 400,
          fontSize: "clamp(32px, 3.6vw, 48px)", lineHeight: 1.05,
          letterSpacing: "-0.02em", color: "var(--fg-0)", maxWidth: 640,
        }}>One-off projects, fixed scope.</h2>
      </div>
      <p style={{ margin: 0, color: "var(--fg-1)", fontSize: 15, lineHeight: 1.55, maxWidth: 360 }}>
        For brands not ready for a retainer. Each item ships in 7–14 days.
      </p>
    </div>
    <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 0, borderTop: "1px solid var(--border-1)" }}>
      {ALACARTE.map((item, i) => (
        <ALaCarteRow key={i} {...item} idx={i} onBriefOpen={onBriefOpen}/>
      ))}
    </div>
  </div>
);

const ALaCarteRow = ({ title, note, price, idx, onBriefOpen }) => {
  const [hover, setHover] = React.useState(false);
  // Border logic for a 2-col grid: right border on left col, bottom border always.
  const isLeftCol = idx % 2 === 0;
  return (
    <div style={{
      padding: "28px 32px",
      display: "grid",
      gridTemplateColumns: "1fr auto auto",
      alignItems: "center",
      gap: 24,
      borderRight: isLeftCol ? "1px solid var(--border-1)" : "none",
      borderBottom: "1px solid var(--border-1)",
      background: hover ? "var(--bg-2)" : "transparent",
      transition: "background 220ms var(--ease-out)",
    }}
    onMouseEnter={() => setHover(true)}
    onMouseLeave={() => setHover(false)}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: 6, minWidth: 0 }}>
        <div style={{
          fontFamily: "var(--font-display)", fontWeight: 500,
          fontSize: 17, letterSpacing: "0.02em", color: "var(--fg-0)",
          lineHeight: 1.25,
        }}>{title}</div>
        <div style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "var(--fg-2)", lineHeight: 1.4 }}>{note}</div>
      </div>
      <div style={{ display: "flex", alignItems: "baseline", gap: 2, fontFamily: "var(--font-display)", color: "var(--fg-0)" }}>
        <span style={{ fontSize: 14, color: "var(--fg-2)" }}>$</span>
        <span style={{ fontSize: 26, fontWeight: 400, letterSpacing: "-0.01em" }}>{price}</span>
      </div>
      <EmberButton onClick={onBriefOpen}>Add</EmberButton>
    </div>
  );
};

// Hairline button variant that fills ember on hover (not white).
const EmberButton = ({ children, onClick, size = "sm", block = false }) => {
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const isLg = size === "lg";
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => { setHover(false); setPress(false); }}
      onMouseDown={() => setPress(true)}
      onMouseUp={() => setPress(false)}
      style={{
        display: "inline-flex", alignItems: "center", justifyContent: "center",
        gap: isLg ? 14 : 10,
        padding: isLg ? "18px 28px" : "11px 20px",
        width: block ? "100%" : "auto",
        background: hover ? "var(--accent)" : "transparent",
        color: hover ? "var(--bg-0)" : "var(--fg-0)",
        border: `1px solid ${hover ? "var(--accent)" : "rgba(255,255,255,0.32)"}`,
        borderRadius: 0,
        fontFamily: "var(--font-display)",
        fontWeight: hover ? (isLg ? 500 : 600) : 400,
        fontSize: isLg ? 12 : 10, letterSpacing: "0.22em", textTransform: "uppercase",
        cursor: "pointer",
        transition: "background 220ms var(--ease-out), color 220ms var(--ease-out), border-color 220ms var(--ease-out), transform 80ms var(--ease-out)",
        transform: press ? "scale(0.97)" : "scale(1)",
        whiteSpace: "nowrap",
      }}
    >
      {children}
      <span style={{ fontSize: isLg ? 14 : 12 }}>→</span>
    </button>
  );
};

const TierCard = ({ name, price, cadence, blurb, bullets, cta, featured, onBriefOpen }) => (
  <div style={{
    background: featured ? "var(--bg-3)" : "var(--bg-2)",
    border: `1px solid ${featured ? "var(--border-3)" : "var(--border-1)"}`,
    padding: "40px 32px", display: "flex", flexDirection: "column", gap: 24,
    position: "relative",
  }}>
    {featured && (
      <div style={{
        position: "absolute", top: -1, right: -1,
        padding: "6px 14px", background: "var(--accent)", color: "var(--bg-0)",
        fontFamily: "var(--font-display)", fontSize: 10, letterSpacing: "0.22em", textTransform: "uppercase",
        fontWeight: 600,
      }}>Most chosen</div>
    )}
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      <Eyebrow>{name}</Eyebrow>
      <div style={{ display: "flex", alignItems: "baseline", gap: 6 }}>
        <span style={{ fontFamily: "var(--font-display)", fontSize: 14, color: "var(--fg-1)" }}>$</span>
        <span style={{ fontFamily: "var(--font-display)", fontSize: 64, fontWeight: 400, letterSpacing: "-0.02em", color: "var(--fg-0)", lineHeight: 1 }}>{price}</span>
        <span style={{ fontFamily: "var(--font-display)", fontSize: 13, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--fg-2)" }}>{cadence}</span>
      </div>
      <p style={{ margin: 0, color: "var(--fg-1)", fontSize: 15, lineHeight: 1.5 }}>{blurb}</p>
    </div>
    <div style={{ height: 1, background: "var(--border-1)" }}/>
    <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 14 }}>
      {bullets.map((b, i) => (
        <li key={i} style={{ display: "flex", gap: 12, color: "var(--fg-1)", fontSize: 14, lineHeight: 1.4 }}>
          <span style={{ color: "var(--accent)", fontFamily: "var(--font-mono)" }}>→</span>{b}
        </li>
      ))}
    </ul>
    <div style={{ flex: 1 }}/>
    <Button variant={featured ? "fill" : "outline"} onClick={onBriefOpen}>{cta}</Button>
  </div>
);

// ---------------------------------------------------------------
// PORTFOLIO PAGE
// ---------------------------------------------------------------
const PORTFOLIO_FULL = [
  { img: "carousel-1.jpg", title: "DANKE SCHÖN", category: "Fashion · Lookbook", year: "2026" },
  { img: "carousel-2.jpg", title: "CARDINALS",   category: "Streetwear · Campaign", year: "2026" },
  { img: "carousel-3.jpg", title: "FREEFALL",    category: "Editorial · Motion", year: "2025" },
  { img: "service-product-cards.jpg", title: "OBSIDIAN",   category: "Outerwear · DTC", year: "2025" },
  { img: "service-email-sms.jpg",     title: "DANKE SCHÖN — SS26", category: "Email · Launch", year: "2025" },
  { img: "service-ad-creatives.jpg",  title: "CARDINALS HERO", category: "Ad · Performance", year: "2025" },
];

const Portfolio = () => (
  <main>
    <PageHeader eyebrow="Portfolio" title="Selected work, 2025 – 26."
      sub="Real client deliverables. Some confidential and shown with permission."/>
    <section style={{ padding: "0 48px 120px", background: "var(--bg-1)" }}>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16, maxWidth: 1400, margin: "0 auto" }}>
        {PORTFOLIO_FULL.map((p, i) => (
          <div key={i} style={{ position: "relative", aspectRatio: "3/4", overflow: "hidden", background: "var(--bg-2)" }}>
            <div style={{
              position: "absolute", inset: 0,
              backgroundImage: `url(${NFAsset(p.img)})`,
              backgroundSize: "cover", backgroundPosition: "center",
            }}/>
            <div style={{
              position: "absolute", inset: 0,
              background: "linear-gradient(180deg, transparent 50%, rgba(0,0,0,0.82) 100%)",
            }}/>
            <div style={{ position: "absolute", left: 22, bottom: 20, right: 22, display: "flex", flexDirection: "column", gap: 6 }}>
              <Eyebrow style={{ color: "rgba(255,255,255,0.75)" }}>{p.category} · {p.year}</Eyebrow>
              <div style={{ fontFamily: "var(--font-display)", fontSize: 22, letterSpacing: "0.04em", color: "var(--fg-0)" }}>{p.title}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  </main>
);

// ---------------------------------------------------------------
// ABOUT PAGE
// ---------------------------------------------------------------
const About = ({ onBriefOpen }) => (
  <main>
    <PageHeader eyebrow="About us" title="Two operators. One pipeline." sub="No Form is run by two people. We do not subcontract creative direction. We do not white-label."/>
    <section style={{ padding: "0 48px 120px", background: "var(--bg-1)" }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, maxWidth: 1280, margin: "0 auto" }}>
        <FounderCard img="founder-will.jpg" name="Will" role="Creative direction · AI" bio="Started in music, added marketing and creative direction. Now CMO at betterskin.com."/>
        <FounderCard img="founder-alex.jpg" name="Alex" role="Post · Adobe craft" bio="Premiere, After Effects, color, sound. Veteran of agency post and music video. The reason the work doesn't look like AI."/>
      </div>
      <div style={{ maxWidth: 760, margin: "120px auto 0", textAlign: "center" }}>
        <p style={{
          fontFamily: "var(--font-display)", fontWeight: 400,
          fontSize: "clamp(24px, 2.6vw, 36px)", lineHeight: 1.35,
          color: "var(--fg-0)", margin: 0,
        }}>
          "The cheapest creative agency in the world is one that doesn't exist. The second cheapest is one that uses AI badly. We are neither."
        </p>
      </div>
    </section>
    <CTASection onBriefOpen={onBriefOpen}/>
  </main>
);

const FounderCard = ({ img, name, role, bio }) => (
  <div style={{ background: "var(--bg-2)" }}>
    <div style={{
      aspectRatio: "4/3",
      backgroundImage: `url(${NFAsset(img)})`,
      backgroundSize: "cover", backgroundPosition: "center",
    }}/>
    <div style={{ padding: "32px 32px 36px", display: "flex", flexDirection: "column", gap: 14 }}>
      <Eyebrow>{role}</Eyebrow>
      <div style={{ fontFamily: "var(--font-display)", fontSize: 36, color: "var(--fg-0)", letterSpacing: "-0.01em" }}>{name}</div>
      <p style={{ margin: 0, color: "var(--fg-1)", fontSize: 15, lineHeight: 1.6 }}>{bio}</p>
    </div>
  </div>
);

// ---------------------------------------------------------------
// PAGE HEADER (shared)
// ---------------------------------------------------------------
const PageHeader = ({ eyebrow, title, sub }) => (
  <section style={{
    padding: "180px 48px 80px", background: "var(--bg-0)",
    borderBottom: "1px solid var(--border-1)",
  }}>
    <div style={{ maxWidth: 1280, margin: "0 auto", display: "flex", flexDirection: "column", gap: 24 }}>
      <Eyebrow>{eyebrow}</Eyebrow>
      <h1 style={{
        margin: 0, fontFamily: "var(--font-display)", fontWeight: 400,
        fontSize: "clamp(48px, 6vw, 96px)", lineHeight: 1.0,
        letterSpacing: "-0.02em", color: "var(--fg-0)", maxWidth: 1080,
      }}>{title}</h1>
      {sub && <p style={{ margin: 0, color: "var(--fg-1)", fontSize: 18, lineHeight: 1.55, maxWidth: 600 }}>{sub}</p>}
    </div>
  </section>
);

// ---------------------------------------------------------------
// BOOK A CALL MODAL
// ---------------------------------------------------------------
const BriefModal = ({ open, onClose }) => {
  const [tier, setTier] = React.useState(null); // optional
  const [sent, setSent] = React.useState(false);
  React.useEffect(() => {
    if (open) {
      setSent(false);
      setTier(null);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [open]);
  if (!open) return null;
  return (
    <div role="dialog" aria-modal="true" style={{
      position: "fixed", inset: 0, zIndex: 100,
      background: "rgba(0,0,0,0.78)",
      display: "flex", justifyContent: "flex-end",
      animation: "nfFade 220ms var(--ease-out)",
    }} onClick={onClose}>
      <style>{`@keyframes nfFade { from { opacity:0 } to { opacity: 1 } } @keyframes nfSlide { from { transform: translateX(40px); opacity: 0 } to { transform: translateX(0); opacity: 1 } }`}</style>
      <div onClick={(e) => e.stopPropagation()} style={{
        width: 520, maxWidth: "100%", height: "100%",
        background: "var(--bg-1)", borderLeft: "1px solid var(--border-1)",
        padding: "40px 40px 48px", display: "flex", flexDirection: "column", gap: 24,
        overflowY: "auto",
        animation: "nfSlide 320ms var(--ease-out)",
      }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <Eyebrow>Book a call</Eyebrow>
          <IconButton size={40} onClick={onClose} ariaLabel="Close">✕</IconButton>
        </div>
        {!sent ? (
          <React.Fragment>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <h3 style={{
                margin: 0, fontFamily: "var(--font-display)", fontWeight: 400,
                fontSize: 36, lineHeight: 1.05, letterSpacing: "-0.02em", color: "var(--fg-0)",
              }}>Book a <span style={{ color: "var(--accent)", fontStyle: "italic" }}>free</span> consultation.</h3>
              <p style={{ margin: 0, color: "var(--fg-1)", fontSize: 15, lineHeight: 1.55 }}>
                Tell us what you need.
              </p>
            </div>
            <Field label="Your name" placeholder="Alex Romero"/>
            <Field label="Email" placeholder="alex@brand.com"/>
            <Field label="Brand or company" placeholder="Acme Atelier"/>
            <Field label="Company website · optional" placeholder="acme-atelier.com"/>
            <Field label="What do you need?" placeholder="A campaign, a launch, a single asset — tell us in your own words." multiline/>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              <Eyebrow style={{ fontSize: 10 }}>Interested in a tier</Eyebrow>
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                {["Studio","Studio +","Studio Max","Not sure yet"].map(t => (
                  <button key={t} onClick={() => setTier(tier === t ? null : t)} style={{
                    padding: "8px 14px", border: `1px solid ${tier === t ? "var(--fg-0)" : "var(--border-2)"}`,
                    background: tier === t ? "var(--fg-0)" : "transparent",
                    color: tier === t ? "var(--bg-0)" : "var(--fg-0)",
                    fontFamily: "var(--font-display)", fontSize: 10,
                    letterSpacing: "0.22em", textTransform: "uppercase",
                    borderRadius: 999, cursor: "pointer",
                    transition: "background 220ms var(--ease-out), color 220ms var(--ease-out), border-color 220ms var(--ease-out)",
                  }}>{t}</button>
                ))}
              </div>
            </div>
            <EmberButton size="lg" block onClick={() => setSent(true)}>Book now</EmberButton>
            <p style={{ margin: 0, color: "var(--fg-3)", fontSize: 12, lineHeight: 1.5, textAlign: "center" }}>
              Free 30-minute call. No commitment.
            </p>
          </React.Fragment>
        ) : (
          <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "flex-start", gap: 18 }}>
            <Eyebrow>Booked</Eyebrow>
            <h3 style={{ margin: 0, fontFamily: "var(--font-display)", fontWeight: 400, fontSize: 40, lineHeight: 1.05, letterSpacing: "-0.02em", color: "var(--fg-0)" }}>We'll reach out within 24 hours to lock the time.</h3>
            <p style={{ margin: 0, color: "var(--fg-1)", fontSize: 15 }}>We'll see you on the call.</p>
            <Button onClick={onClose}>Close</Button>
          </div>
        )}
      </div>
    </div>
  );
};

// (EmberButton is defined above near the à la carte section.)


const Field = ({ label, placeholder, multiline }) => {
  const [focus, setFocus] = React.useState(false);
  const [value, setValue] = React.useState("");
  const Tag = multiline ? "textarea" : "input";
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      <label style={{ fontFamily: "var(--font-display)", fontSize: 10, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--fg-2)" }}>{label}</label>
      <Tag
        rows={multiline ? 4 : undefined}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onFocus={() => setFocus(true)} onBlur={() => setFocus(false)}
        placeholder={placeholder}
        style={{
          padding: "14px 16px", background: "var(--bg-2)",
          border: `${focus ? 2 : 1}px solid ${focus ? "var(--accent)" : "var(--border-2)"}`,
          borderRadius: 4, color: "var(--fg-0)",
          fontFamily: "var(--font-body)", fontSize: 14, outline: "none",
          resize: multiline ? "vertical" : "none",
        }}
      />
    </div>
  );
};

Object.assign(window, {
  Home, Products, Pricing, Portfolio, About,
  BriefModal, PageHeader, Field,
});
