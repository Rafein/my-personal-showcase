import { useLanguage } from "@/hooks/use-language";
import gegnerFliegend from "@/assets/gegner-fliegend.png";
import profSprite from "@/assets/prof-sprite.png";
import slimePurple from "@/assets/slime-purple.png";
import godotIcon from "@/assets/godot-icon.png";
import myhsdLogo from "@/assets/myhsd-logo.png";
import myhsdMockup from "@/assets/myhsd-mockup.png";
import woIstFhidoProject from "@/assets/wo-ist-fhido-project.png";
import { useState } from "react";

const ProjectsSection = () => {
  const { lang, t } = useLanguage();
  const [hoveredMediaProject, setHoveredMediaProject] = useState<string | null>(null);

  const projects = [
    {
      number: "01",
      type: "GAME",
      title: lang === "de" ? "HSDvania – Godot Spiel" : "HSDvania – Godot Game",
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
      type: "WEB APP",
      title: lang === "de" ? "myHSD – Progressive Web App" : "myHSD – Progressive Web App",
      description: lang === "de"
        ? "Eine React-basierte Progressive Web App mit NestJS-API und Docker-Deployment. Die Anwendung unterstützt Studierende der Hochschule Düsseldorf bei der Organisation ihres Studienalltags. Mit einem Team, war ich an der Weiterentwicklung des Projekts unter der Leitung von Prof. Dr. Thomas Franz beteiligt."
        : "A React-based Progressive Web App with NestJS API and Docker deployment. The application supports students at Hochschule Düsseldorf in organizing their academic life. With a Team, I contributed to the further development of the project under the supervision of Prof. Dr. Thomas Franz.",
      tags: ["React", "NestJS", "Docker", "GitLab CI/CD", "ESLint", "Prettier"],
      color: "from-accent to-primary",
      mockup: myhsdMockup,
    },
    {
      number: "03",
      type: lang === "de" ? "FILMPROJEKT" : "FILM PROJECT",
      title: "Wo ist Fhido? – Mockumentary zur HSD",
      description: lang === "de"
        ? "Im Rahmen eines Hochschulprojekts entstand dieser satirische Dokumentarfilm über das plötzliche Verschwinden des Maskottchens der Hochschule Düsseldorf. Ich war in Drehbuchentwicklung, Regie, Schauspiel und Postproduktion eingebunden."
        : "This satirical documentary was created as part of a university project about the sudden disappearance of Hochschule Duesseldorf's mascot. I contributed to script development, directing, acting and post-production.",
      tags: ["Filmgestaltung", "DaVinci Resolve", "Premiere", "Photoshop"],
      color: "from-primary via-accent to-primary",
      mockup: woIstFhidoProject,
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
                {project.number === "02" && (
                  <img src={myhsdLogo} alt="myHSD" className="w-10 h-7 object-contain" />
                )}
              </div>

              <div className={`relative rounded-2xl bg-gradient-to-br ${project.color} p-8 min-h-[220px] flex flex-col justify-between transition-transform duration-500 hover:scale-[1.02] overflow-hidden`}>
                <div className={`absolute inset-0 transition-colors duration-300 ${hoveredMediaProject === project.number ? "bg-black/10" : "bg-black/0"}`} />

                <p className="relative z-10 text-primary-foreground text-sm leading-relaxed max-w-xs">
                  {project.description}
                </p>
                {project.sprites ? (
                  <div className="relative z-10 flex items-end gap-4 mt-4 justify-center p-4">
                    {project.sprites.map((sprite, i) => (
                      <img
                        key={i}
                        src={sprite}
                        alt={`Sprite ${i + 1}`}
                        className="w-16 h-16 md:w-24 md:h-24 object-contain drop-shadow-lg flex-shrink-0 hover:scale-110 transition-transform duration-300"
                        onMouseEnter={() => setHoveredMediaProject(project.number)}
                        onMouseLeave={() => setHoveredMediaProject(null)}
                        style={{ imageRendering: "pixelated" }}
                      />
                    ))}
                  </div>
                ) : project.mockup ? (
                  <div className="relative z-10 flex justify-center mt-4">
                    <div
                      className="relative w-28 md:w-36"
                      onMouseEnter={() => setHoveredMediaProject(project.number)}
                      onMouseLeave={() => setHoveredMediaProject(null)}
                    >
                      <img
                        src={project.mockup}
                        alt="App Mockup"
                        className="w-full h-auto object-cover transition-transform duration-300 hover:scale-110"
                      />
                    </div>
                  </div>
                ) : (
                  <div className="relative z-10 w-full h-24 rounded-xl bg-background/10 backdrop-blur-sm mt-4" />
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
