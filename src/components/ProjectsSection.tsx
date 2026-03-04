const projects = [
  {
    number: "01",
    type: "WEB APP",
    title: "Projekt Eins",
    description: "Eine kurze Beschreibung deines ersten Projekts. Was hast du gebaut und welche Technologien hast du verwendet?",
    tags: ["React", "TypeScript", "Tailwind"],
    color: "from-primary to-accent",
  },
  {
    number: "02",
    type: "MOBILE APP",
    title: "Projekt Zwei",
    description: "Beschreibe dein zweites Projekt hier. Was war die Herausforderung und wie hast du sie gelöst?",
    tags: ["Node.js", "PostgreSQL", "API"],
    color: "from-accent to-primary",
  },
  {
    number: "03",
    type: "DESKTOP APP",
    title: "Projekt Drei",
    description: "Noch ein spannendes Projekt. Zeige was du kannst und was du gelernt hast.",
    tags: ["Python", "ML", "Data"],
    color: "from-primary via-accent to-primary",
  },
  {
    number: "04",
    type: "WEB APP",
    title: "Projekt Vier",
    description: "Ein weiteres Projekt das deine Fähigkeiten demonstriert.",
    tags: ["Vue", "Firebase", "PWA"],
    color: "from-accent via-primary to-accent",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="relative py-32">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <p className="font-mono text-xs tracking-[0.3em] uppercase text-primary mb-4">Portfolio</p>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            Featured <span className="text-gradient-accent">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Eine Auswahl an Projekten, die mich als Entwickler geformt haben.
          </p>
          <div className="section-divider mx-auto mt-6" />
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((project) => (
            <div key={project.number} className="group">
              <div className="flex items-center gap-3 mb-3">
                <span className="font-mono text-xs text-muted-foreground">{project.number}</span>
                <span className="w-8 h-px bg-border" />
                <span className="font-mono text-xs tracking-wider text-muted-foreground">{project.type}</span>
              </div>
              <h3 className="font-display text-2xl font-bold text-foreground mb-4">{project.title}</h3>
              
              <div className={`rounded-2xl bg-gradient-to-br ${project.color} p-8 min-h-[220px] flex flex-col justify-between transition-transform duration-500 group-hover:scale-[1.02]`}>
                <p className="text-primary-foreground text-sm leading-relaxed max-w-xs">
                  {project.description}
                </p>
                <div className="w-full h-24 rounded-xl bg-background/10 backdrop-blur-sm mt-4" />
              </div>

              <div className="flex flex-wrap gap-2 mt-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-[10px] tracking-wider uppercase bg-secondary text-secondary-foreground px-3 py-1.5 rounded-lg"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
