import { ExternalLink } from "lucide-react";
import { useLanguage } from "@/hooks/use-language";

const ResearchSection = () => {
  const { lang } = useLanguage();

  const factors = [
    {
      name: "Chromatisch",
      nameEn: "Chromatic",
      tag: lang === "de" ? "Signalwirkung" : "Signal effect",
      desc:
        lang === "de"
          ? "Gezielte Kontraste steuern die Aufmerksamkeit."
          : "Targeted contrasts direct attention.",
      hypothesis:
        lang === "de"
          ? "H1: Kann bei hoher Informationsdichte schnell ueberfordern."
          : "H1: Can quickly overwhelm at high information density.",
      swatches: ["bg-primary", "bg-accent", "bg-secondary"],
    },
    {
      name: "Monochrom",
      nameEn: "Monochrome",
      tag: lang === "de" ? "Harmonie" : "Harmony",
      desc:
        lang === "de"
          ? "Abstufungen einer Basisfarbe schaffen visuelle Hierarchie."
          : "Shades of one base color create visual hierarchy.",
      hypothesis:
        lang === "de"
          ? "H3: Bester Kompromiss aus Ruhe und Klarheit."
          : "H3: Best balance of calm and clarity.",
      swatches: ["bg-primary/40", "bg-primary/70", "bg-primary"],
    },
    {
      name: "Achromatisch",
      nameEn: "Achromatic",
      tag: lang === "de" ? "Reduktion" : "Reduction",
      desc:
        lang === "de"
          ? "Nur Helligkeit und Kontrast, keine Farbe."
          : "Brightness and contrast only, no color.",
      hypothesis:
        lang === "de"
          ? "H2: Kann wirkungslos oder leblos wirken."
          : "H2: Risks feeling flat or lifeless.",
      swatches: ["bg-foreground/20", "bg-foreground/50", "bg-foreground/80"],
    },
  ];

  const prototypes = [
    {
      title: "Kalender-App",
      context: lang === "de" ? "Funktional" : "Functional",
      desc:
        lang === "de"
          ? "Informationssuche, Terminbearbeitung, Erkennung von Statusaenderungen."
          : "Finding information, editing appointments, recognizing status changes.",
      href: "https://www.figma.com/make/xGXHMhZwhBIldtC1mKVjDs/KalenderApp?t=wMZWf4GzPWULDsPV-1",
    },
    {
      title: "Online-Shop",
      context: lang === "de" ? "Emotional / Kommerziell" : "Emotional / Commercial",
      desc:
        lang === "de"
          ? "Produktsuche, Mengenanpassung, Entscheidungsprozesse."
          : "Product search, quantity adjustment, decision-making.",
      href: "https://www.figma.com/make/vri7jbcH7ooSCpPxoWeHdw/iPhone-16-Product-Shop?fullscreen=1&t=42HK7aW9o8zFsjJ7-1",
    },
  ];

  const findings = [
    {
      label: lang === "de" ? "Shop · Chromatisch" : "Shop · Chromatic",
      verdict: lang === "de" ? "Positiv" : "Positive",
      verdictClass: "text-primary",
      desc:
        lang === "de"
          ? "Starke visuelle Hierarchie, hohe aesthetische Akzeptanz, gezielte Aufmerksamkeitssteuerung."
          : "Strong visual hierarchy, high aesthetic acceptance, targeted attention control.",
    },
    {
      label: lang === "de" ? "Kalender · Chromatisch" : "Calendar · Chromatic",
      verdict: lang === "de" ? "Negativ" : "Negative",
      verdictClass: "text-accent",
      desc:
        lang === "de"
          ? "Hohe visuelle Ueberforderung und Ablenkung – bestaetigt erhoehten Cognitive Load bei informationsdichten Interfaces."
          : "High visual overload and distraction – confirms increased cognitive load in information-dense interfaces.",
    },
    {
      label: lang === "de" ? "Kalender · Monochrom/Achromatisch" : "Calendar · Monochrome/Achromatic",
      verdict: lang === "de" ? "Vorteil" : "Advantage",
      verdictClass: "text-primary",
      desc:
        lang === "de"
          ? "Vermittelt Ruhe, Uebersichtlichkeit und Fokus – besonders erfolgreich im funktionalen Kontext."
          : "Conveys calm, clarity and focus – especially effective in a functional context.",
    },
  ];

  return (
    <section id="research" className="relative py-32">
      <div className="container relative z-10 mx-auto px-6">
        <div className="mb-16 text-center">
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
            Case Study &middot; User Research
          </p>
          <h2 className="mb-6 text-4xl font-display font-bold text-foreground md:text-5xl">
            {lang === "de" ? "Farbe &" : "Color &"} <span className="text-gradient-accent">{lang === "de" ? "Aufmerksamkeit" : "Attention"}</span>
          </h2>
          <p className="mx-auto max-w-lg text-muted-foreground">
            {lang === "de"
              ? "Ein Semesterprojekt im Modul Mobile Anwendung – User Research (HSD), gemeinsam mit Angelina Jochim, Finn Buecker und Mahmoud Almarie."
              : "A semester project in the Mobile Application – User Research module (HSD), together with Angelina Jochim, Finn Buecker and Mahmoud Almarie."}
          </p>
          <div className="section-divider mx-auto mt-6" />
        </div>

        <div className="mx-auto mb-12 max-w-3xl glass-card p-8 text-center md:p-10">
          <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
            {lang === "de" ? "Forschungsfrage" : "Research Question"}
          </p>
          <p className="font-display text-2xl font-bold leading-tight text-foreground md:text-3xl">
            {lang === "de"
              ? "Verbessern bestimmte Farbschemata die Aufmerksamkeit und Zufriedenheit von Usern bei mobilen Apps?"
              : "Do certain color schemes improve user attention and satisfaction in mobile apps?"}
          </p>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">
            {lang === "de"
              ? "Farbe wird in mobilen Interfaces oft nur intuitiv gewaehlt. Wir wollten wissen, ob gezielte Farbschemata Aufmerksamkeit und Zufriedenheit messbar beeinflussen – oder ob die falsche Wahl eher ueberfordert als hilft."
              : "Color in mobile interfaces is often chosen only intuitively. We wanted to know whether targeted color schemes measurably affect attention and satisfaction – or whether the wrong choice overwhelms more than it helps."}
          </p>
        </div>

        <div className="mx-auto mb-12 grid max-w-5xl gap-6 md:grid-cols-3">
          {factors.map((factor) => (
            <div key={factor.name} className="glass-card-hover p-6">
              <div className="mb-4 flex gap-1.5">
                {factor.swatches.map((swatch, i) => (
                  <span key={i} className={`h-3 w-3 rounded-full ${swatch}`} />
                ))}
              </div>
              <p className="mb-1 font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground">{factor.tag}</p>
              <h3 className="mb-2 font-display text-lg font-bold text-foreground">
                {lang === "de" ? factor.name : factor.nameEn}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{factor.desc}</p>
              <p className="mt-3 text-xs leading-relaxed text-muted-foreground/80">{factor.hypothesis}</p>
            </div>
          ))}
        </div>

        <div className="mx-auto mb-12 grid max-w-3xl gap-6 sm:grid-cols-2">
          {prototypes.map((proto) => (
            <a
              key={proto.title}
              href={proto.href}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card-hover group p-6"
            >
              <div className="mb-3 flex items-center justify-between">
                <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground">{proto.context}</p>
                <ExternalLink size={14} className="text-muted-foreground transition-colors group-hover:text-primary" />
              </div>
              <h3 className="mb-2 font-display text-lg font-bold text-foreground">{proto.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{proto.desc}</p>
            </a>
          ))}
        </div>

        <div className="mx-auto mb-12 grid max-w-5xl gap-6 md:grid-cols-3">
          {findings.map((finding) => (
            <div key={finding.label} className="glass-card p-6">
              <div className="mb-3 flex items-center justify-between">
                <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">{finding.label}</p>
                <span className={`font-mono text-[11px] font-bold uppercase tracking-[0.2em] ${finding.verdictClass}`}>
                  {finding.verdict}
                </span>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">{finding.desc}</p>
            </div>
          ))}
        </div>

        <div className="mx-auto max-w-3xl glass-card p-6 text-center md:p-8">
          <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
            {lang === "de" ? "Fazit" : "Conclusion"}
          </p>
          <p className="font-display text-xl font-bold leading-tight text-foreground md:text-2xl">
            {lang === "de"
              ? "Bestimmte Farbschemata verbessern Aufmerksamkeit und Zufriedenheit signifikant – wenn sie auf den funktionalen Kern der Anwendung abgestimmt sind. Chromatisch wirkt auf Aufmerksamkeit und Emotion, Monochrom und Achromatisch auf Fokus und Struktur."
              : "Certain color schemes significantly improve attention and satisfaction – when matched to the app's functional core. Chromatic drives attention and emotion, monochrome and achromatic support focus and structure."}
          </p>
        </div>

        <p className="mx-auto mt-8 max-w-3xl text-center text-xs leading-relaxed text-muted-foreground/80">
          {lang === "de" ? "Methodik: qualitative Inhaltsanalyse nach Mayring." : "Method: qualitative content analysis following Mayring."}{" "}
          {lang === "de" ? "Externe Referenz: " : "External reference: "}
          <a
            href="https://moldstud.com/articles/p-how-color-influences-user-experience-in-mobile-apps-enhance-engagement-and-retention"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary underline underline-offset-4 hover:text-primary/80"
          >
            MoldStud &ndash; How Color Influences User Experience in Mobile Apps
          </a>
        </p>
      </div>
    </section>
  );
};

export default ResearchSection;
