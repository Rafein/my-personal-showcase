import { useState } from "react";
import { useLanguage } from "@/hooks/use-language";
import gegnerFliegend from "@/assets/gegner-fliegend.png";
import profSprite from "@/assets/prof-sprite.png";
import slimePurple from "@/assets/slime-purple.png";
import godotIcon from "@/assets/godot-icon.png";
import myhsdLogo from "@/assets/myhsd-logo.png";
import myhsdMockup from "@/assets/myhsd-mockup.png";
import woIstFhidoProject from "@/assets/wo-ist-fhido-project.png";

const ProjectsSection = () => {
  const { lang, t } = useLanguage();
  const [hoveredMediaProject, setHoveredMediaProject] = useState<string | null>(null);

  const projects = [
    {
      number: "01",
      type: "GAME",
      title: lang === "de" ? "HSDvania - Godot Spiel" : "HSDvania - Godot Game",
      description:
        lang === "de"
          ? "In einem Teamprojekt haben wir ein 2D-Spiel mit Godot entwickelt. Ich war fuer Design, Gegner-Sprites, Gegner-Logik, Map-Design und Lore verantwortlich."
          : "In a team project we developed a 2D game with Godot. I was responsible for design, enemy sprites, enemy logic, map design and the lore.",
      tags: ["Godot", "Aseprite", "GDScript", "2D Art"],
      color: "from-primary to-accent",
      sprites: [gegnerFliegend, profSprite, slimePurple],
      link: "https://github.com/Ka1serM/HSDvania",
    },
    {
      number: "02",
      type: "WEB APP",
      title: "myHSD - Progressive Web App",
      description:
        lang === "de"
          ? "Eine React-basierte Progressive Web App mit NestJS-API und Docker-Deployment. Ich war an der Weiterentwicklung des Projekts fuer Studierende der Hochschule Duesseldorf beteiligt."
          : "A React-based progressive web app with a NestJS API and Docker deployment. I contributed to the continued development of the project for students at Hochschule Duesseldorf.",
      tags: ["React", "NestJS", "Docker", "GitLab CI/CD", "ESLint", "Prettier"],
      color: "from-accent to-primary",
      mockup: myhsdMockup,
    },
    {
      number: "03",
      type: lang === "de" ? "FILMPROJEKT" : "FILM PROJECT",
      title: "Wo ist Fhido? - Mockumentary zur HSD",
      description:
        lang === "de"
          ? "Im Rahmen eines Hochschulprojekts entstand dieser satirische Dokumentarfilm ueber das ploetzliche Verschwinden des Maskottchens der Hochschule Duesseldorf. Ich war in Drehbuch, Regie, Schauspiel und Postproduktion eingebunden."
          : "This satirical documentary was created as part of a university project about the sudden disappearance of Hochschule Duesseldorf's mascot. I contributed to writing, directing, acting and post-production.",
      tags: ["Filmgestaltung", "DaVinci Resolve", "Premiere", "Photoshop"],
      color: "from-primary via-accent to-primary",
      mockup: woIstFhidoProject,
    },
  ];

  return (
    <section id="projects" className="relative py-32">
      <div className="container relative z-10 mx-auto px-6">
        <div className="mb-16 text-center">
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-primary">Portfolio</p>
          <h2 className="mb-4 text-4xl font-display font-bold text-foreground md:text-5xl">
            {t.projectsSectionTitle} <span className="text-gradient-accent">{t.projectsSectionAccent}</span>
          </h2>
          <p className="mx-auto max-w-lg text-muted-foreground">{t.projectsSubtitle}</p>
          <div className="section-divider mx-auto mt-6" />
        </div>

        <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <div key={project.number} className="group">
              <div className="mb-3 flex items-center gap-3">
                <span className="font-mono text-xs text-muted-foreground">{project.number}</span>
                <span className="h-px w-8 bg-border" />
                <span className="font-mono text-xs tracking-wider text-muted-foreground">{project.type}</span>
              </div>

              <div className="mb-4 flex items-center gap-2">
                {project.link ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-display text-2xl font-bold text-foreground transition-colors hover:text-primary"
                  >
                    {project.title}
                  </a>
                ) : (
                  <h3 className="font-display text-2xl font-bold text-foreground">{project.title}</h3>
                )}

                {project.number === "01" && (
                  <img src={godotIcon} alt="Godot" className="h-7 w-7 object-contain" />
                )}
                {project.number === "02" && (
                  <img src={myhsdLogo} alt="myHSD" className="h-7 w-10 object-contain" />
                )}
              </div>

              <div
                className={`relative flex min-h-[220px] flex-col justify-between overflow-hidden rounded-2xl bg-gradient-to-br ${project.color} p-8 transition-transform duration-500 hover:scale-[1.02]`}
              >
                <div
                  className={`absolute inset-0 transition-colors duration-300 ${
                    hoveredMediaProject === project.number ? "bg-black/10" : "bg-black/0"
                  }`}
                />

                <p className="relative z-10 max-w-xs text-sm leading-relaxed text-primary-foreground">
                  {project.description}
                </p>

                {project.sprites ? (
                  <div className="relative z-10 mt-4 flex items-end justify-center gap-4 p-4">
                    {project.sprites.map((sprite, index) => (
                      <img
                        key={index}
                        src={sprite}
                        alt={`Sprite ${index + 1}`}
                        className="h-16 w-16 flex-shrink-0 object-contain drop-shadow-lg transition-transform duration-300 hover:scale-110 md:h-24 md:w-24"
                        onMouseEnter={() => setHoveredMediaProject(project.number)}
                        onMouseLeave={() => setHoveredMediaProject(null)}
                        style={{ imageRendering: "pixelated" }}
                      />
                    ))}
                  </div>
                ) : (
                  <div className="relative z-10 mt-4 flex justify-center">
                    <div
                      className="relative w-28 md:w-36"
                      onMouseEnter={() => setHoveredMediaProject(project.number)}
                      onMouseLeave={() => setHoveredMediaProject(null)}
                    >
                      <img
                        src={project.mockup}
                        alt="Project preview"
                        className="h-auto w-full object-cover transition-transform duration-300 hover:scale-110"
                      />
                    </div>
                  </div>
                )}
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-lg bg-secondary px-3 py-1.5 font-mono text-[10px] uppercase tracking-wider text-secondary-foreground"
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
