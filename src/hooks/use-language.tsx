import { useState, createContext, useContext, type ReactNode } from "react";

type Language = "de" | "en";

const translations = {
  de: {
    // Navbar
    navHome: "Home",
    navAbout: "Über mich",
    navProjects: "Projekte",
    navSkills: "Skills",
    navOther: "Mehr",
    // Hero
    heroGreeting: "Hi, ich bin",
    heroDescription: "Fullstack Developer mit Leidenschaft für moderne Web-Technologien, sauberen Code und kreative Lösungen.",
    heroStudent: "Student",
    heroDeveloper: "Developer",
    heroCreator: "Creator",
    heroCountry: "Deutschland",
    heroScroll: "Mehr erfahren",
    // About
    aboutTitle: "Mehr über",
    aboutTitleAccent: "mich",
    aboutMindset: "Mindset",
    aboutMindsetText: "Mehr als nur Code.",
    aboutMindsetDesc: "Meine Leidenschaften geben mir die Disziplin und den Fokus, den ich brauche um zu wachsen.",
    aboutRole: "Medieninformatik Student",
    aboutCraft: "Craft",
    aboutCraftText: "Apps, Websites und Automationen.",
    aboutCraftDesc: "Ich verstehe die Vorteile moderner Technologien und berate zu den Lösungen, die wirklich benötigt werden.",
    aboutProjects: "Projekte",
    aboutTech: "Technologien",
    aboutMotivation: "Motivation",
    // Projects
    projectsSectionTitle: "Featured",
    projectsSectionAccent: "Projects",
    projectsSubtitle: "Eine Auswahl an Projekten, die mich als Entwickler geformt haben.",
    // Skills
    skillsTitle: "My",
    skillsAccent: "Skills",
    // Other
    otherTitle: "More to",
    otherAccent: "Explore",
    otherSubtitle: "Zusätzliche Ressourcen und Kontaktmöglichkeiten",
    otherHobbies: "Hobbies",
    otherContact: "Kontakt",
    otherAvailable: "Offen für Zusammenarbeit & Freelance",
    otherFooter: "© 2026 Rafein Abdulla. Mit Leidenschaft gebaut.",
    hobbies: ["Fotografie", "Open Source Beiträge", "Gaming", "Lesen"],
  },
  en: {
    navHome: "Home",
    navAbout: "About",
    navProjects: "Projects",
    navSkills: "Skills",
    navOther: "More",
    heroGreeting: "Hi, I'm",
    heroDescription: "Fullstack Developer passionate about modern web technologies, clean code and creative solutions.",
    heroStudent: "Student",
    heroDeveloper: "Developer",
    heroCreator: "Creator",
    heroCountry: "Germany",
    heroScroll: "Learn more",
    aboutTitle: "More about",
    aboutTitleAccent: "me",
    aboutMindset: "Mindset",
    aboutMindsetText: "More than just code.",
    aboutMindsetDesc: "My passions give me the discipline and focus I need to grow.",
    aboutRole: "Media Informatics Student",
    aboutCraft: "Craft",
    aboutCraftText: "Apps, websites and automations.",
    aboutCraftDesc: "I understand the advantages of modern technologies and advise on the solutions that are truly needed.",
    aboutProjects: "Projects",
    aboutTech: "Technologies",
    aboutMotivation: "Motivation",
    projectsSectionTitle: "Featured",
    projectsSectionAccent: "Projects",
    projectsSubtitle: "A selection of projects that shaped me as a developer.",
    skillsTitle: "My",
    skillsAccent: "Skills",
    otherTitle: "More to",
    otherAccent: "Explore",
    otherSubtitle: "Additional resources and contact options",
    otherHobbies: "Hobbies",
    otherContact: "Contact",
    otherAvailable: "Open for collaboration & freelance",
    otherFooter: "© 2026 Rafein Abdulla. Built with passion.",
    hobbies: ["Photography", "Open Source Contributions", "Gaming", "Reading"],
  },
} as const;

type Translations = typeof translations.de | typeof translations.en;

const LanguageContext = createContext<{
  lang: Language;
  toggleLang: () => void;
  t: Translations;
}>({ lang: "de", toggleLang: () => {}, t: translations.de });

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Language>("de");
  const toggleLang = () => setLang((l) => (l === "de" ? "en" : "de"));
  const t = translations[lang];

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
