const AboutSection = () => {
  return (
    <section id="about" className="relative py-32">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="font-mono text-xs tracking-[0.3em] uppercase text-primary mb-4">Über mich</p>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
            Mehr über <span className="text-gradient-accent">mich</span>
          </h2>
          <div className="section-divider mx-auto mb-8" />
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {/* Mindset */}
          <div className="glass-card-hover p-8">
            <h3 className="font-display text-xl font-bold text-foreground mb-3">Mindset</h3>
            <div className="section-divider mb-4" />
            <p className="text-muted-foreground text-sm leading-relaxed">
              <strong className="text-foreground">Mehr als nur Code.</strong> Meine Leidenschaften geben mir die Disziplin und den Fokus, den ich brauche um zu wachsen.
            </p>
          </div>

          {/* Center - Profile */}
          <div className="glass-card-hover p-8 flex flex-col items-center justify-center text-center row-span-2 md:row-span-1">
            <div className="w-20 h-20 rounded-2xl bg-secondary flex items-center justify-center text-4xl mb-4">
              🧑‍💻
            </div>
            <h3 className="font-display text-lg font-bold text-foreground">DEIN NAME</h3>
            <p className="font-mono text-xs text-muted-foreground tracking-wider mt-1">FULLSTACK DEVELOPER</p>
          </div>

          {/* Craft */}
          <div className="glass-card-hover p-8">
            <h3 className="font-display text-xl font-bold text-foreground mb-3">Craft</h3>
            <div className="section-divider mb-4" />
            <p className="text-muted-foreground text-sm leading-relaxed">
              Entwicklung skalierbarer <strong className="text-foreground">Apps, Websites und Automationen.</strong>
            </p>
            <p className="text-muted-foreground text-sm leading-relaxed mt-2">
              Ich verstehe die Vorteile moderner Technologien und berate zu den Lösungen, die wirklich benötigt werden.
            </p>
          </div>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mt-8">
          {[
            { number: "5+", label: "Jahre Erfahrung" },
            { number: "20+", label: "Projekte" },
            { number: "10+", label: "Technologien" },
            { number: "∞", label: "Motivation" },
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
