import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Parallax Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-background/60" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <p className="font-display text-sm tracking-[0.3em] uppercase text-primary mb-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          Willkommen
        </p>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-tight mb-6 animate-fade-in-up">
          <span className="text-foreground">Dein Name</span>
          <br />
          <span className="text-gradient-gold">Hier.</span>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
          Developer · Designer · Creator
        </p>
        <button
          onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
          className="animate-fade-in-up inline-flex items-center gap-2 font-display text-sm tracking-wider uppercase text-primary border border-primary/30 px-8 py-3 rounded-full hover:bg-primary/10 transition-all duration-300"
          style={{ animationDelay: "0.6s" }}
        >
          Mehr erfahren
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 5v14M19 12l-7 7-7-7" />
          </svg>
        </button>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in" style={{ animationDelay: "1s" }}>
        <div className="w-5 h-8 border-2 border-muted-foreground/30 rounded-full flex justify-center">
          <div className="w-1 h-2 bg-primary rounded-full mt-1 animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
