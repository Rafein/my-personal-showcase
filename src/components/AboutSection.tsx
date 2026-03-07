import { useLanguage } from "@/hooks/use-language";

const AboutSection = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="relative py-32">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
            {t.aboutTitle} <span className="text-gradient-accent">{t.aboutTitleAccent}</span>
          </h2>
          <div className="section-divider mx-auto mb-8" />
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="glass-card-hover p-8">
            <h3 className="font-display text-xl font-bold text-foreground mb-3">{t.aboutMindset}</h3>
            <div className="section-divider mb-4" />
            <p className="text-muted-foreground text-sm leading-relaxed">
              <strong className="text-foreground">{t.aboutMindsetText}</strong> {t.aboutMindsetDesc}
            </p>
          </div>

          <div className="glass-card-hover p-8 flex flex-col items-center justify-center text-center row-span-2 md:row-span-1">
            <div className="w-20 h-20 rounded-2xl bg-secondary flex items-center justify-center text-4xl mb-4">
              🧑‍💻
            </div>
            <h3 className="font-display text-lg font-bold text-foreground">Rafein Abdulla</h3>
            <p className="font-mono text-xs text-muted-foreground tracking-wider mt-1">{t.aboutRole}</p>
          </div>

          <div className="glass-card-hover p-8">
            <h3 className="font-display text-xl font-bold text-foreground mb-3">{t.aboutCraft}</h3>
            <div className="section-divider mb-4" />
            <p className="text-muted-foreground text-sm leading-relaxed">
              <strong className="text-foreground">{t.aboutCraftText}</strong>
            </p>
            <p className="text-muted-foreground text-sm leading-relaxed mt-2">
              {t.aboutCraftDesc}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 max-w-3xl mx-auto mt-8">
          {[
            { number: "5+", label: t.aboutProjects },
            { number: "10+", label: t.aboutTech },
            { number: "∞", label: t.aboutMotivation },
          ].map((stat, i) => (
            <div key={i} className="glass-card p-6 text-center">
              <span className="text-3xl font-display font-bold text-gradient-accent">{stat.number}</span>
              <p className="text-muted-foreground text-xs mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
