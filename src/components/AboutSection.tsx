const AboutSection = () => {
  return (
    <section id="about" className="relative py-32 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          {/* Left */}
          <div>
            <p className="font-display text-sm tracking-[0.3em] uppercase text-primary mb-4">Über mich</p>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
              Leidenschaft für <span className="text-gradient-gold">Technologie</span>
            </h2>
            <div className="section-divider !mx-0 mb-8" />
            <p className="text-muted-foreground leading-relaxed mb-6">
              Hier kannst du dich vorstellen. Erzähle etwas über deinen Hintergrund, 
              deine Erfahrungen und was dich antreibt. Was macht dich einzigartig?
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Beschreibe deine Reise, deine Ziele und was du in der Zukunft 
              erreichen möchtest. Lass die Besucher wissen, wer du bist.
            </p>
          </div>

          {/* Right - Stats */}
          <div className="grid grid-cols-2 gap-6">
            {[
              { number: "5+", label: "Jahre Erfahrung" },
              { number: "20+", label: "Projekte" },
              { number: "10+", label: "Technologien" },
              { number: "∞", label: "Leidenschaft" },
            ].map((stat, i) => (
              <div
                key={i}
                className="bg-card border border-border rounded-xl p-6 text-center hover:border-primary/30 transition-all duration-300 glow-gold hover:glow-gold"
              >
                <span className="text-3xl md:text-4xl font-display font-bold text-gradient-gold">
                  {stat.number}
                </span>
                <p className="text-muted-foreground text-sm mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
