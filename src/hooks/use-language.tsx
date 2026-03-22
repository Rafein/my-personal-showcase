import { useState, createContext, useContext, type ReactNode } from "react";

type Language = "de" | "en";

const translations = {
  de: {
    // Navbar
    navHome: "Home",
    navAbout: "Ueber mich",
    navProjects: "Projekte",
    navSkills: "Skills",
    navOther: "Mehr",
    // Hero
    heroGreeting: "Hi, ich bin",
    heroDescription: "Fullstack Developer mit Leidenschaft fuer moderne Web-Technologien, sauberen Code und kreative Loesungen.",
    heroStudent: "Student",
    heroDeveloper: "Developer",
    heroCreator: "Creator",
    heroCountry: "Deutschland",
    heroScroll: "Mehr erfahren",
    // About
    aboutTitle: "Mehr ueber",
    aboutTitleAccent: "mich",
    aboutMindset: "Mindset",
    aboutMindsetText: "Mehr als nur Code.",
    aboutMindsetDesc: "Meine Interessen in Web, Games, Film und Gestaltung geben mir Disziplin, Neugier und den Blick dafuer, wie digitale Dinge wirklich wirken.",
    aboutRole: "Medieninformatik Student",
    aboutCraft: "Craft",
    aboutCraftText: "Apps, Websites und Automationen.",
    aboutCraftDesc: "Ich mag Loesungen, die klar gedacht sind, technisch sauber laufen und nicht wie ein Standard-Template aussehen.",
    aboutFocus: "Fokus",
    aboutFocusTitle: "Zwischen Interface, Technik und Story.",
    aboutFocusDesc: "Mich interessiert nicht nur, ob etwas funktioniert, sondern wie es wirkt, wie klar es kommuniziert und ob es im Alltag wirklich hilft.",
    aboutApproach: "Arbeitsweise",
    aboutApproachTitle: "Struktur, bevor es fancy wird.",
    aboutApproachDesc: "Ich denke zuerst ueber Aufbau, Nutzen und Charakter nach. Danach wird gestaltet, verfeinert und technisch sauber umgesetzt.",
    aboutBlendLabel: "Was bei mir zusammenkommt",
    aboutBlendItems: ["Web & UI", "Games & Interaktion", "Film & Storytelling", "Konzept & Umsetzung"],
    aboutAreas: ["Frontend mit React", "Konzeption & Gestaltung", "Prototyping", "Content mit Charakter"],
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
    otherSubtitle: "Weiteres und Kontaktmoeglichkeiten",
    otherHobbies: "Hobbies",
    otherContact: "Kontakt",
    otherImprint: "Impressum",
    otherImprintLink: "Zur Impressum-Seite",
    otherImprintName: "Name",
    otherImprintAddress: "Adresse",
    otherImprintEmail: "E-Mail",
    otherAvailable: "Offen fuer Zusammenarbeit & Freelance",
    otherFooter: "(c) 2026 Rafein Abdulla. Mit Leidenschaft gebaut.",
    otherFooterDisclaimer:
      "© All rights reserved. All trademarks, logos, and brand names featured on this website are the property of their respective owners. Their use is for informational and illustrative purposes only and does not imply any affiliation, endorsement, or sponsorship.",
    hobbies: ["Gitarre spielen", "Gym", "Gaming", "Lesen"],
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
    aboutMindsetDesc: "My interests in web, games, film and design give me discipline, curiosity and a better sense for how digital work actually feels.",
    aboutRole: "Media Informatics Student",
    aboutCraft: "Craft",
    aboutCraftText: "Apps, websites and automations.",
    aboutCraftDesc: "I like solutions that are clearly structured, technically solid and do not feel like generic templates.",
    aboutFocus: "Focus",
    aboutFocusTitle: "Between interface, tech and story.",
    aboutFocusDesc: "I care about more than whether something works. It should communicate clearly, feel intentional and actually help in day-to-day use.",
    aboutApproach: "Approach",
    aboutApproachTitle: "Structure before it gets fancy.",
    aboutApproachDesc: "I think about structure, usefulness and character first. Then I refine the visual side and build it properly.",
    aboutBlendLabel: "What I bring together",
    aboutBlendItems: ["Web & UI", "Games & interaction", "Film & storytelling", "Concept & execution"],
    aboutAreas: ["Frontend with React", "Concept & design", "Prototyping", "Content with character"],
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
    otherImprint: "Legal Notice",
    otherImprintLink: "Open legal notice page",
    otherImprintName: "Name",
    otherImprintAddress: "Address",
    otherImprintEmail: "Email",
    otherAvailable: "Open for collaboration & freelance",
    otherFooter: "(c) 2026 Rafein Abdulla. Built with passion.",
    otherFooterDisclaimer:
      "© All rights reserved. All trademarks, logos, and brand names featured on this website are the property of their respective owners. Their use is for informational and illustrative purposes only and does not imply any affiliation, endorsement, or sponsorship.",
    hobbies: ["Playing guitar", "Gym", "Gaming", "Reading"],
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
