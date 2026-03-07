import { useLanguage } from "@/hooks/use-language";
import gegnerFliegend from "@/assets/gegner-fliegend.png";
import profSprite from "@/assets/prof-sprite.png";
import slimePurple from "@/assets/slime-purple.png";
import godotIcon from "@/assets/godot-icon.png";

const ProjectsSection = () => {
  const { lang, t } = useLanguage();

  const projects = [
    {
      number: "01",
      type: "GAME",
      title: lang === "de" ? "Godot Spiel – Gegner Design" : "Godot Game – Enemy Design",
      description: lang === "de"
        ? "In einem Team-Projekt haben wir ein 2D-Spiel mit Godot entwickelt. Ich war für das Design und die Erstellung der Gegner-Sprites (Aseprite), die Gegner-Logik, das Map-Design und die Lore verantwortlich."
        : "In a team project we developed a 2D game with Godot. I was responsible for designing and creating the enemy sprites (Aseprite), enemy logic, map design and the lore.",
      tags: ["Godot", "Aseprite", "GDScript", "2D Art"],
      color: "from-primary to-accent",
      sprites: [gegnerFliegend, profSprite, slimePurple],
      link: "https://github.com/Ka1serM/HSDvania",
    },
    {
      number: "02",
      type: "MOBILE APP",
      title: lang === "de" ? "Projekt Zwei" : "Project Two",
      description: lang === "de"
        ? "Beschreibe dein zweites Projekt hier. Was war die Herausforderung und wie hast du sie gelöst?"
        : "Describe your second project here. What was the challenge and how did you solve it?",
      tags: ["Node.js", "PostgreSQL", "API"],
      color: "from-accent to-primary",
    },
    {
      number: "03",
      type: "DESKTOP APP",
      title: lang === "de" ? "Projekt Drei" : "Project Three",
      description: lang === "de"
        ? "Noch ein spannendes Projekt. Zeige was du kannst und was du gelernt hast."
        : "Another exciting project. Show what you can do and what you've learned.",
      tags: ["Python", "ML", "Data"],
      color: "from-primary via-accent to-primary",
    },
    {
      number: "04",
      type: "WEB APP",
      title: lang === "de" ? "Projekt Vier" : "Project Four",
      description: lang === "de"
        ? "Ein weiteres Projekt das deine Fähigkeiten demonstriert."
        : "Another project demonstrating your skills.",
      tags: ["Vue", "Firebase", "PWA"],
      color: "from-accent via-primary to-accent",
    },
  ];

  return (
    <section id="projects" className="relative py-32">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <p className="font-mono text-xs tracking-[0.3em] uppercase text-primary mb-4">Portfolio</p>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            {t.projectsSectionTitle} <span className="text-gradient-accent">{t.projectsSectionAccent}</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            {t.projectsSubtitle}
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
              <div className="flex items-center gap-2 mb-4">
                {project.link ? (
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="font-display text-2xl font-bold text-foreground hover:text-primary transition-colors">
                    {project.title}
                  </a>
                ) : (
                  <h3 className="font-display text-2xl font-bold text-foreground">{project.title}</h3>
                )}
                {project.number === "01" && (
                  <img src={godotIcon} alt="Godot" className="w-7 h-7 object-contain" />
                )}
              </div>

              <div className={`rounded-2xl bg-gradient-to-br ${project.color} p-8 min-h-[220px] flex flex-col justify-between transition-transform duration-500 group-hover:scale-[1.02] overflow-hidden`}>
                <p className="text-primary-foreground text-sm leading-relaxed max-w-xs">
                  {project.description}
                </p>
                {project.sprites ? (
                  <div className="flex items-end gap-4 mt-4 justify-center overflow-hidden">
                    {project.sprites.map((sprite, i) => (
                      <img
                        key={i}
                        src={sprite}
                        alt={`Sprite ${i + 1}`}
                        className="w-16 h-16 md:w-24 md:h-24 object-contain drop-shadow-lg flex-shrink-0"
                        style={{ imageRendering: "pixelated" }}
                      />
                    ))}
                  </div>
                ) : (
                  <div className="w-full h-24 rounded-xl bg-background/10 backdrop-blur-sm mt-4" />
                )}
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
