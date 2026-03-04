const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "CSS/Tailwind", level: 88 },
      { name: "JavaScript", level: 92 },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", level: 80 },
      { name: "Python", level: 75 },
      { name: "PostgreSQL", level: 70 },
      { name: "REST APIs", level: 85 },
    ],
  },
  {
    title: "Tools & Sonstiges",
    skills: [
      { name: "Git", level: 88 },
      { name: "Docker", level: 65 },
      { name: "Figma", level: 70 },
      { name: "CI/CD", level: 60 },
    ],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="relative py-32">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="font-display text-sm tracking-[0.3em] uppercase text-primary mb-4">Kompetenzen</p>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
            Meine <span className="text-gradient-gold">Skills</span>
          </h2>
          <div className="section-divider mb-8" />
        </div>

        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {skillCategories.map((category, i) => (
            <div key={i} className="bg-card border border-border rounded-2xl p-8">
              <h3 className="font-display text-lg font-semibold text-primary mb-6">{category.title}</h3>
              <div className="space-y-5">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm text-foreground">{skill.name}</span>
                      <span className="text-xs text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full transition-all duration-1000"
                        style={{
                          width: `${skill.level}%`,
                          background: "linear-gradient(90deg, hsl(42 78% 55%), hsl(42 90% 65%))",
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
