import { useEffect, useRef, useState } from "react";
import indesignIcon from "@/assets/adobe-indesign-cc-icon.svg";
import photoshopIcon from "@/assets/adobe-photoshop-2.svg";
import premiereIcon from "@/assets/premiere-pro-cc.svg";
import ciscoIcon from "@/assets/cisco-2.svg";

const techStack = [
  { name: "HTML", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", size: "lg" },
  { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", size: "lg" },
  { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", size: "lg" },
  { name: "Java", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", size: "md" },
  { name: "Flutter", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg", size: "md" },
  { name: "Dart", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg", size: "md" },
  { name: "Tailwind", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg", size: "sm" },
  { name: "OracleSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg", size: "sm" },
  { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", size: "sm" },
  { name: "Figma", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg", size: "sm" },
  { name: "InDesign", logo: indesignIcon, size: "sm" },
  { name: "Photoshop", logo: photoshopIcon, size: "sm" },
  { name: "Premiere", logo: premiereIcon, size: "sm" },
  { name: "Cisco", logo: ciscoIcon, size: "sm" },
];

const sizeMap = {
  lg: "w-20 h-20",
  md: "w-16 h-16",
  sm: "w-14 h-14",
};

const imgSizeMap = {
  lg: "w-10 h-10",
  md: "w-8 h-8",
  sm: "w-7 h-7",
};

const SkillsSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="relative py-32">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="font-mono text-xs tracking-[0.3em] uppercase text-primary mb-4">Tech Stack</p>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
            My <span className="text-gradient-accent">Skills</span>
          </h2>
          <div className="section-divider mx-auto mb-8" />
        </div>

        <div ref={containerRef} className="relative max-w-4xl mx-auto">
          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 justify-items-center">
            {techStack.map((tech, i) => (
              <div
                key={tech.name}
                className={`flex flex-col items-center gap-2 transition-all duration-700 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className={`${sizeMap[tech.size as keyof typeof sizeMap]} rounded-2xl glass-card flex items-center justify-center hover:scale-110 transition-transform duration-300 cursor-default`}>
                  <img
                    src={tech.logo}
                    alt={tech.name}
                    className={`${imgSizeMap[tech.size as keyof typeof imgSizeMap]}`}
                    loading="lazy"
                  />
                </div>
                <span className="font-mono text-[10px] tracking-wider text-muted-foreground uppercase">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>

          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full border border-border/30" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-border/20" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
