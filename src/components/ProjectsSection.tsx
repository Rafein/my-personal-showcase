import { useState } from "react";
import { ExternalLink } from "lucide-react";
import { useLanguage } from "@/hooks/use-language";
import gegnerFliegend from "@/assets/gegner-fliegend.png";
import profSprite from "@/assets/prof-sprite.png";
import slimePurple from "@/assets/slime-purple.png";
import godotIcon from "@/assets/godot-icon.png";
import myhsdLogo from "@/assets/myhsd-logo.png";
import myhsdMockup from "@/assets/myhsd-mockup.png";
import woIstFhidoProject from "@/assets/wo-ist-fhido-project.png";
import smileyChromatic from "@/assets/smiley-chromatic.svg";
import smileyMonochrome from "@/assets/smiley-monochrome.svg";
import smileyAchromatic from "@/assets/smiley-achromatic.svg";
import mediamonMark from "@/assets/mediamon-mark.svg";
import bauchbindePattern from "@/assets/bauchbinde-pattern.svg";
import bauchbindeCloudRed from "@/assets/bauchbinde-cloud-red.svg";
import bauchbindeCloudTeal from "@/assets/bauchbinde-cloud-teal.svg";

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
      color: "bg-primary",
      textClass: "text-primary-foreground",
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
      color: "bg-secondary",
      textClass: "text-secondary-foreground",
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
      color: "bg-accent",
      textClass: "text-accent-foreground",
      mockup: woIstFhidoProject,
    },
    {
      number: "04",
      type: "UX RESEARCH",
      title: lang === "de" ? "Farbe & Aufmerksamkeit" : "Color & Attention",
      description:
        lang === "de"
          ? "Teamprojekt im Modul User Research: Wir haben untersucht, ob chromatische, monochrome und achromatische Farbschemata die Aufmerksamkeit und Zufriedenheit von Usern beeinflussen - getestet an zwei Prototypen."
          : "Team project in the User Research module: we tested whether chromatic, monochrome and achromatic color schemes affect user attention and satisfaction - validated with two prototypes.",
      tags: ["User Research", "Content Analysis", "Prototyping", "Color Psychology"],
      color: "bg-slate-800",
      textClass: "text-slate-50",
      protoLinks: [
        { label: "Kalender-App", href: "https://www.figma.com/make/xGXHMhZwhBIldtC1mKVjDs/KalenderApp?t=wMZWf4GzPWULDsPV-1" },
        { label: "Online-Shop", href: "https://www.figma.com/make/vri7jbcH7ooSCpPxoWeHdw/iPhone-16-Product-Shop?fullscreen=1&t=42HK7aW9o8zFsjJ7-1" },
      ],
    },
    {
      number: "05",
      type: lang === "de" ? "DOKUMENTARFILM / EVENTFILM" : "DOCUMENTARY / EVENT FILM",
      title: "Tag der offenen Tür - HSD 2026",
      description:
        lang === "de"
          ? "Im Rahmen eines Hochschulmoduls hat unser Team zwei Filme zum Tag der offenen Tür der Hochschule Duesseldorf produziert: einen Dokumentarfilm mit Interviews zu Planung, Regie und Teammeetings sowie einen Eventfilm mit Ausschnitten und Einblicken vom Tag selbst."
          : "As part of a university module, our team produced two films about Hochschule Duesseldorf's open house day: a documentary with interviews on planning, directing and team meetings, and an event film capturing highlights from the day itself.",
      tags: ["Dokumentarfilm", "Eventfilm", "Regie", "Interviews", "DaVinci Resolve"],
      color: "bg-[#e4dfe1]",
      textClass: "text-[#2C2C2C]",
      filmLinks: [
        { label: lang === "de" ? "Dokumentarfilm" : "Documentary", href: "#" },
        { label: lang === "de" ? "Eventfilm" : "Event film", href: "#" },
      ],
    },
  ];

  return (
    <section id="projects" className="relative py-32">
      <div className="container relative z-10 mx-auto px-6">
        <div className="mb-16 text-center">
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">Portfolio</p>
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
                {project.number === "05" && (
                  <img src={mediamonMark} alt="MEDIAMON" className="h-7 w-7 object-contain" />
                )}
              </div>

              <div className="relative">
                {project.number === "04" && (
                  <>
                    <img
                      src={smileyChromatic}
                      alt=""
                      aria-hidden="true"
                      className="pointer-events-none absolute -top-6 -right-6 z-0 h-16 w-16 rotate-12 drop-shadow-md"
                    />
                    <img
                      src={smileyAchromatic}
                      alt=""
                      aria-hidden="true"
                      className="pointer-events-none absolute -top-5 -left-7 z-0 h-12 w-12 -rotate-6 drop-shadow-md dark:invert"
                    />
                    <img
                      src={smileyMonochrome}
                      alt=""
                      aria-hidden="true"
                      className="pointer-events-none absolute -bottom-6 -left-4 z-0 h-14 w-14 rotate-6 drop-shadow-md"
                    />
                  </>
                )}

                <div
                  className={`relative z-10 flex min-h-[220px] flex-col justify-between overflow-hidden rounded-lg ${project.color} p-8 transition-transform duration-500 hover:scale-[1.01]`}
                >

                  <div
                    className={`absolute inset-0 transition-colors duration-300 ${
                      hoveredMediaProject === project.number ? "bg-black/10" : "bg-black/0"
                    }`}
                  />

                  <p className={`relative z-10 max-w-xs text-sm leading-relaxed ${project.textClass}`}>
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
                ) : project.mockup ? (
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
                ) : project.protoLinks ? (
                  <div className="relative z-10 mt-4 flex flex-wrap justify-center gap-3">
                    {project.protoLinks.map((proto) => (
                      <a
                        key={proto.label}
                        href={proto.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center gap-1.5 rounded-lg border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-medium ${project.textClass} transition-colors hover:bg-white/20`}
                      >
                        {proto.label}
                        <ExternalLink size={12} />
                      </a>
                    ))}
                  </div>
                ) : project.filmLinks ? (
                  <div className="relative z-10 mt-2 flex flex-col items-center gap-5">
                    {/* Recreation of the animated lower-third ("Bauchbinde") badge I designed for the doc */}
                    <div className="flex items-center">
                      <img
                        src={bauchbindeCloudRed}
                        alt=""
                        aria-hidden="true"
                        className="h-9 w-14 -mr-4 drop-shadow-sm"
                      />
                      <div
                        className="relative z-10 rounded-full border-2 border-[#992937] bg-[#FBF3F1] px-5 py-2.5 text-center shadow-sm"
                        style={{ backgroundImage: `url(${bauchbindePattern})` }}
                      >
                        <p className="flex items-center justify-center gap-1.5 whitespace-nowrap font-badge text-base font-bold uppercase tracking-wide text-[#2C2C2C]">
                          <span className="text-[#BF2A22]">&#10022;</span>
                          Tag der offenen Tuer
                        </p>
                        <p className="mt-0.5 font-mono text-[9px] uppercase tracking-[0.15em] text-[#992937]">
                          HSD 2026 &middot; Doku &amp; Eventfilm
                        </p>
                      </div>
                      <img
                        src={bauchbindeCloudTeal}
                        alt=""
                        aria-hidden="true"
                        className="h-9 w-14 -ml-4 drop-shadow-sm"
                      />
                    </div>
                    <div className="flex flex-wrap justify-center gap-3">
                      {project.filmLinks.map((film) => (
                        <a
                          key={film.label}
                          href={film.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`inline-flex items-center gap-1.5 rounded-lg border border-[#992937]/25 bg-[#992937]/5 px-3 py-1.5 text-xs font-medium text-[#992937] transition-colors hover:bg-[#992937]/10`}
                        >
                          {film.label}
                          <ExternalLink size={12} />
                        </a>
                      ))}
                    </div>
                  </div>
                ) : null}
                </div>
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
