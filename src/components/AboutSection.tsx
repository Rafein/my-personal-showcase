import { useLanguage } from "@/hooks/use-language";

const AboutSection = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="relative overflow-hidden py-32">
      <div className="container relative z-10 mx-auto px-6">
        <div className="mb-16 text-center">
          <h2 className="mb-6 text-4xl font-display font-bold text-foreground md:text-5xl">
            {t.aboutTitle} <span className="text-gradient-accent">{t.aboutTitleAccent}</span>
          </h2>
          <div className="section-divider mx-auto mb-8" />
        </div>

        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="glass-card-hover p-8 md:p-10">
            <div className="mb-6">
              <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.35em] text-primary">{t.aboutMindset}</p>
              <h3 className="max-w-md text-2xl font-display font-bold text-foreground md:text-3xl">
                {t.aboutMindsetText}
              </h3>
            </div>

            <div className="section-divider mb-4" />
            <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
              {t.aboutMindsetDesc}
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-[1.75rem] border border-border/60 bg-background/55 p-5">
                <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.3em] text-primary">{t.aboutFocus}</p>
                <h4 className="mb-2 font-display text-lg font-bold text-foreground">{t.aboutFocusTitle}</h4>
                <p className="text-sm leading-relaxed text-muted-foreground">{t.aboutFocusDesc}</p>
              </div>

              <div className="rounded-[1.75rem] border border-border/60 bg-background/55 p-5">
                <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.3em] text-primary">{t.aboutApproach}</p>
                <h4 className="mb-2 font-display text-lg font-bold text-foreground">{t.aboutApproachTitle}</h4>
                <p className="text-sm leading-relaxed text-muted-foreground">{t.aboutApproachDesc}</p>
              </div>
            </div>
          </div>

          <div className="grid gap-6">
            <div className="glass-card-hover p-8">
              <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.35em] text-primary">{t.aboutRole}</p>
              <h3 className="text-3xl font-display font-bold leading-tight text-foreground">
                Rafein Abdulla
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                {t.aboutCraftDesc}
              </p>

              <div className="mt-6">
                <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.28em] text-muted-foreground">
                  {t.aboutBlendLabel}
                </p>
                <div className="flex flex-wrap gap-2">
                  {t.aboutBlendItems.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1.5 text-[11px] font-mono uppercase tracking-[0.18em] text-foreground"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="glass-card-hover p-8">
              <h3 className="mb-3 font-display text-xl font-bold text-foreground">{t.aboutCraft}</h3>
              <div className="section-divider mb-4" />
              <p className="text-sm leading-relaxed text-muted-foreground">
                <strong className="text-foreground">{t.aboutCraftText}</strong>
              </p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {t.aboutCraftDesc}
              </p>

              <div className="mt-6 grid grid-cols-2 gap-3">
                {t.aboutAreas.map((area) => (
                  <div key={area} className="rounded-2xl border border-border/60 bg-background/45 px-4 py-4">
                    <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">{area}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-8 grid max-w-5xl gap-4 md:grid-cols-[1.2fr_0.8fr]">
          <div className="glass-card p-6 md:p-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-primary">Direction</p>
            <p className="mt-4 max-w-xl font-display text-2xl font-bold leading-tight text-foreground">
              Ich will digitale Projekte bauen, die klar aussehen, Charakter haben und nicht nach Baukasten wirken.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="glass-card p-6 text-center">
              <span className="text-3xl font-display font-bold text-gradient-accent">3</span>
              <p className="mt-1 text-xs text-muted-foreground">{t.aboutProjects}</p>
            </div>
            <div className="glass-card p-6 text-center">
              <span className="text-3xl font-display font-bold text-gradient-accent">10+</span>
              <p className="mt-1 text-xs text-muted-foreground">{t.aboutTech}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
