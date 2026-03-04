const projects = [
  {
    title: "Projekt Eins",
    description: "Eine kurze Beschreibung deines ersten Projekts. Was hast du gebaut und welche Technologien hast du verwendet?",
    tags: ["React", "TypeScript", "Tailwind"],
    image: "🚀",
  },
  {
    title: "Projekt Zwei",
    description: "Beschreibe dein zweites Projekt hier. Was war die Herausforderung und wie hast du sie gelöst?",
    tags: ["Node.js", "PostgreSQL", "API"],
    image: "⚡",
  },
  {
    title: "Projekt Drei",
    description: "Noch ein spannendes Projekt. Zeige was du kannst und was du gelernt hast.",
    tags: ["Python", "ML", "Data"],
    image: "🎯",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="relative py-32">
      {/* Parallax accent */}
      <div className="absolute inset-0 bg-fixed opacity-5" style={{
        backgroundImage: "radial-gradient(circle at 20% 50%, hsl(42 78% 55%) 0%, transparent 50%)",
      }} />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <p className="font-display text-sm tracking-[0.3em] uppercase text-primary mb-4">Portfolio</p>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
            Meine <span className="text-gradient-gold">Projekte</span>
          </h2>
          <div className="section-divider mb-8" />
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, i) => (
            <div
              key={i}
              className="group bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/40 transition-all duration-500 hover:-translate-y-2"
            >
              <div className="h-48 bg-secondary flex items-center justify-center text-6xl">
                {project.image}
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-display tracking-wider uppercase bg-secondary text-secondary-foreground px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
