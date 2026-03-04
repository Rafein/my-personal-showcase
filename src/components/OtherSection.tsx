const OtherSection = () => {
  return (
    <section id="other" className="relative py-32">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <p className="font-mono text-xs tracking-[0.3em] uppercase text-primary mb-4">Mehr</p>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
            More to <span className="text-gradient-accent">Explore</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Zusätzliche Ressourcen und Kontaktmöglichkeiten
          </p>
          <div className="section-divider mx-auto mt-6" />
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* Hobbies */}
          <div className="glass-card-hover p-8">
            <h3 className="font-display text-xl font-bold text-foreground mb-4">🎨 Hobbies</h3>
            <ul className="space-y-3 text-muted-foreground text-sm">
              {["Fotografie", "Open Source Beiträge", "Gaming", "Lesen"].map((hobby) => (
                <li key={hobby} className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  {hobby}
                </li>
              ))}
            </ul>
          </div>

          {/* Kontakt */}
          <div className="glass-card-hover p-8">
            <h3 className="font-display text-xl font-bold text-foreground mb-4">📬 Kontakt</h3>
            <ul className="space-y-3 text-muted-foreground text-sm">
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                email@beispiel.de
              </li>
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                GitHub: /dein-username
              </li>
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                LinkedIn: /in/dein-profil
              </li>
            </ul>
          </div>

          {/* Availability */}
          <div className="glass-card p-6 md:col-span-2 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
              <span className="text-sm text-foreground font-medium">Offen für Zusammenarbeit & Freelance</span>
            </div>
            <span className="font-mono text-xs text-muted-foreground">🇩🇪 Deutschland</span>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-24 pt-8 border-t border-border">
          <p className="text-muted-foreground text-sm">
            © 2026 Dein Name. Mit Leidenschaft gebaut.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OtherSection;
