const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden dot-pattern">
      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto pt-24">
        {/* Avatar placeholder */}
        <div className="w-28 h-28 mx-auto mb-8 rounded-full bg-secondary border-4 border-primary/20 flex items-center justify-center text-5xl animate-float">
          👨‍💻
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold leading-tight mb-4 animate-fade-in-up">
          Hi, ich bin{" "}
          <span className="text-gradient-accent">Dein Name</span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto mb-10 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          Fullstack Developer mit Leidenschaft für moderne Web-Technologien, 
          sauberen Code und kreative Lösungen.
        </p>

        {/* Quick info cards */}
        <div className="glass-card p-8 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { emoji: "🎓", label: "Student" },
              { emoji: "💻", label: "Developer" },
              { emoji: "🚀", label: "Creator" },
              { emoji: "🌍", label: "Deutschland" },
            ].map((item) => (
              <div key={item.label} className="text-center">
                <span className="text-2xl block mb-1">{item.emoji}</span>
                <span className="text-xs font-medium text-muted-foreground">{item.label}</span>
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
          Mehr erfahren
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 5v14M19 12l-7 7-7-7" />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
