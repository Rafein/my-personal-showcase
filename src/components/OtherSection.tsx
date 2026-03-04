const OtherSection = () => {
  return (
    <section id="other" className="relative py-32">
      {/* Parallax accent */}
      <div className="absolute inset-0 bg-fixed opacity-5" style={{
        backgroundImage: "radial-gradient(circle at 80% 50%, hsl(42 78% 55%) 0%, transparent 50%)",
      }} />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <p className="font-display text-sm tracking-[0.3em] uppercase text-primary mb-4">Mehr</p>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
            <span className="text-gradient-gold">Sonstiges</span>
          </h2>
          <div className="section-divider mb-8" />
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Hobbies */}
          <div className="bg-card border border-border rounded-2xl p-8 hover:border-primary/30 transition-all duration-300">
            <h3 className="font-display text-xl font-semibold text-primary mb-4">🎨 Hobbies</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                Fotografie
              </li>
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                Open Source Beiträge
              </li>
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                Gaming
              </li>
            </ul>
          </div>

          {/* Kontakt */}
          <div className="bg-card border border-border rounded-2xl p-8 hover:border-primary/30 transition-all duration-300">
            <h3 className="font-display text-xl font-semibold text-primary mb-4">📬 Kontakt</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                email@beispiel.de
              </li>
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                GitHub: /dein-username
              </li>
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                LinkedIn: /in/dein-profil
              </li>
            </ul>
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
