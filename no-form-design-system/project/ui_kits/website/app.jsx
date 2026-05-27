// NO FORM — Website UI kit — app shell + Tweaks
// Depends on components.jsx + screens.jsx + tweaks-panel.jsx (window.* exports).

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accent": "#FF6B2C",
  "heroHeadline": "Efficiency meets taste.",
  "heroSub": "AI-enhanced creative production with human direction.",
  "featuredTier": "Studio +",
  "studioPlusPrice": "1999",
  "showALaCarte": true
}/*EDITMODE-END*/;

const App = () => {
  const [route, setRoute] = React.useState(() => (window.location.hash || "#home").replace("#", "") || "home");
  const [briefOpen, setBriefOpen] = React.useState(false);
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);

  // Push --accent live so every consumer (focus rings, ember buttons, bullets,
  // tier badges) updates without prop drilling.
  React.useEffect(() => {
    document.documentElement.style.setProperty("--accent", t.accent);
  }, [t.accent]);

  React.useEffect(() => {
    const onHash = () => {
      const r = (window.location.hash || "#home").replace("#", "") || "home";
      setRoute(r);
      window.scrollTo({ top: 0, behavior: "instant" });
    };
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  const go = (r) => { window.location.hash = `#${r}`; };
  const openBrief = () => setBriefOpen(true);
  const closeBrief = () => setBriefOpen(false);

  const tweakProps = {
    heroHeadline: t.heroHeadline,
    heroSub: t.heroSub,
    featuredTier: t.featuredTier,
    studioPlusPrice: t.studioPlusPrice,
    showALaCarte: t.showALaCarte,
  };

  return (
    <div className="nf-page" style={{ minHeight: "100vh", background: "var(--bg-1)" }}>
      <TopNav current={route} onNavigate={go} onBriefOpen={openBrief}/>
      {route === "home"      && <Home onNavigate={go} onBriefOpen={openBrief} {...tweakProps}/>}
      {route === "products"  && <Products onBriefOpen={openBrief}/>}
      {route === "pricing"   && <Pricing onBriefOpen={openBrief} {...tweakProps}/>}
      {route === "portfolio" && <Portfolio/>}
      {route === "about"     && <About onBriefOpen={openBrief}/>}
      <Footer onNavigate={go} onBriefOpen={openBrief}/>
      <BriefModal open={briefOpen} onClose={closeBrief}/>

      <TweaksPanel title="Tweaks">
        <TweakSection label="Brand" />
        <TweakColor
          label="Accent"
          value={t.accent}
          options={["#FF6B2C", "#F2B53A", "#6BD58A", "#3A82F6", "#FFFFFF"]}
          onChange={(v) => setTweak("accent", v)}
        />

        <TweakSection label="Hero copy" />
        <TweakText
          label="Headline"
          value={t.heroHeadline}
          onChange={(v) => setTweak("heroHeadline", v)}
        />
        <TweakText
          label="Sub"
          value={t.heroSub}
          onChange={(v) => setTweak("heroSub", v)}
        />

        <TweakSection label="Pricing" />
        <TweakRadio
          label="Featured tier"
          value={t.featuredTier}
          options={["Studio", "Studio +", "Studio Max"]}
          onChange={(v) => setTweak("featuredTier", v)}
        />
        <TweakText
          label="Studio + price"
          value={t.studioPlusPrice}
          onChange={(v) => setTweak("studioPlusPrice", v)}
        />
        <TweakToggle
          label="Show à la carte"
          value={t.showALaCarte}
          onChange={(v) => setTweak("showALaCarte", v)}
        />

        <TweakButton onClick={() => go("home")}>Jump to home</TweakButton>
        <TweakButton onClick={() => go("pricing")}>Jump to pricing</TweakButton>
        <TweakButton onClick={() => go("about")}>Jump to about</TweakButton>
      </TweaksPanel>
    </div>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<App/>);
