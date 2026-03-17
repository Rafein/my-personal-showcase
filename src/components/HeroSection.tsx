import { useLanguage } from "@/hooks/use-language";

const HeroSection = () => {
  const { lang, toggleLang, t } = useLanguage();

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden dot-pattern">
      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto pt-24">
        {/* Language toggle */}
        <button
          onClick={toggleLang}
          className="mb-8 inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full text-sm font-mono tracking-wider hover:scale-105 transition-transform cursor-pointer"
        >
          <span className={lang === "de" ? "text-primary font-bold" : "text-muted-foreground"}>DE</span>
          <span className="text-border">|</span>
          <span className={lang === "en" ? "text-primary font-bold" : "text-muted-foreground"}>EN</span>
        </button>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold leading-tight mb-4 animate-fade-in-up">
          {t.heroGreeting}{" "}
          <span className="text-gradient-accent">Rafein Abdulla</span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto mb-10 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          {t.heroDescription}
        </p>

        {/* Quick info cards */}
        <div className="glass-card p-8 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: t.heroStudent },
              { label: t.heroDeveloper },
              { label: t.heroCreator },
              { label: t.heroCountry },
            ].map((item) => (
              <div
                key={item.label}
                data-cursor="interactive"
                className="text-center rounded-2xl border border-border/60 bg-background/40 px-4 py-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/35 hover:bg-background/75 hover:shadow-[0_12px_30px_hsl(145_60%_42%_/_0.10)]"
              >
                <span className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll CTA */}
        <button
          onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
          className="mt-12 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors animate-fade-in-up"
          style={{ animationDelay: "0.6s" }}
        >
          {t.heroScroll}
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 5v14M19 12l-7 7-7-7" />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
