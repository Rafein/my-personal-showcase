import { useLanguage } from "@/hooks/use-language";

const OtherSection = () => {
  const { t } = useLanguage();

  return (
    <section id="other" className="relative py-32">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <p className="font-mono text-xs tracking-[0.3em] uppercase text-primary mb-4">{t.navOther}</p>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
            {t.otherTitle} <span className="text-gradient-accent">{t.otherAccent}</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">{t.otherSubtitle}</p>
          <div className="section-divider mx-auto mt-6" />
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div className="glass-card-hover p-8">
            <h3 className="font-display text-xl font-bold text-foreground mb-4">{t.otherHobbies}</h3>
            <ul className="space-y-3 text-muted-foreground text-sm">
              {t.hobbies.map((hobby) => (
                <li key={hobby} className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  {hobby}
                </li>
              ))}
            </ul>
          </div>

          <div className="glass-card-hover p-8">
            <h3 className="font-display text-xl font-bold text-foreground mb-4">{t.otherContact}</h3>
            <ul className="space-y-3 text-muted-foreground text-sm">
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                <a href="mailto:Rafeinab@outlook.de">Rafeinab@outlook.de</a>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                <a href="https://github.com/Rafein" target="_blank">GitHub</a>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                <a href="https://www.linkedin.com/in/rafein-abdulla-824149376/" target="_blank">LinkedIn</a>
              </li>
            </ul>
          </div>

          <div className="glass-card p-6 md:col-span-2 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
              <span className="text-sm text-foreground font-medium">{t.otherAvailable}</span>
            </div>
            <span className="font-mono text-xs text-muted-foreground">Deutschland</span>
          </div>
        </div>

        <div className="text-center mt-24 pt-8 border-t border-border">
          <p className="text-muted-foreground text-sm">{t.otherFooter}</p>
        </div>
      </div>
    </section>
  );
};

export default OtherSection;
