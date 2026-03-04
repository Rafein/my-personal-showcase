import { useEffect, useRef, useState } from "react";

const techStack = [
  { name: "React", icon: "⚛️", size: "lg" },
  { name: "TypeScript", icon: "🔷", size: "lg" },
  { name: "JavaScript", icon: "🟨", size: "md" },
  { name: "Node.js", icon: "🟩", size: "md" },
  { name: "Python", icon: "🐍", size: "md" },
  { name: "CSS", icon: "🎨", size: "sm" },
  { name: "Tailwind", icon: "💨", size: "sm" },
  { name: "Git", icon: "🔀", size: "sm" },
  { name: "PostgreSQL", icon: "🐘", size: "sm" },
  { name: "Docker", icon: "🐳", size: "sm" },
  { name: "Figma", icon: "🎯", size: "sm" },
  { name: "REST APIs", icon: "🔗", size: "sm" },
];

const sizeMap = {
  lg: "w-20 h-20 text-3xl",
  md: "w-16 h-16 text-2xl",
  sm: "w-14 h-14 text-xl",
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

        {/* Orbital grid */}
        <div ref={containerRef} className="relative max-w-4xl mx-auto">
          <div className="grid grid-cols-3 md:grid-cols-4 gap-6 justify-items-center">
            {techStack.map((tech, i) => (
              <div
                key={tech.name}
                className={`flex flex-col items-center gap-2 transition-all duration-700 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className={`${sizeMap[tech.size as keyof typeof sizeMap]} rounded-2xl glass-card flex items-center justify-center hover:scale-110 transition-transform duration-300 cursor-default`}>
                  {tech.icon}
                </div>
                <span className="font-mono text-[10px] tracking-wider text-muted-foreground uppercase">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>

          {/* Decorative circles */}
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
