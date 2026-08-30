import { useState, useEffect } from "react";
import { useTheme } from "@/hooks/use-theme";
import { useLanguage } from "@/hooks/use-language";
import { Sun, Moon } from "lucide-react";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { t } = useLanguage();

  const navItems = [
    { id: "Home", label: t.navHome, section: "home" },
    { id: "About", label: t.navAbout, section: "about" },
    { id: "Projects", label: t.navProjects, section: "projects" },
    { id: "Skills", label: t.navSkills, section: "skills" },
    { id: "Other", label: t.navOther, section: "other" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = navItems.map((item) => {
        const el = document.getElementById(item.section);
        if (!el) return { id: item.id, top: 0 };
        return { id: item.id, top: el.getBoundingClientRect().top };
      });
      const current = sections.reduce((prev, curr) =>
        Math.abs(curr.top) < Math.abs(prev.top) ? curr : prev
      );
      setActive(current.id);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navItems]);

  const scrollTo = (section: string) => {
    document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-4 left-1/2 z-50 w-full max-w-full -translate-x-1/2 px-3 transition-all duration-500">
      <div className="flex items-center justify-center gap-2 sm:gap-4">
        <button
          onClick={toggleTheme}
          className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full glass-card text-primary transition-transform hover:scale-110"
        >
          {theme === "light" ? <Sun size={18} /> : <Moon size={18} />}
        </button>

        <div className="scrollbar-hide flex max-w-[calc(100vw-5.5rem)] items-center gap-0.5 overflow-x-auto glass-card px-2 py-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.section)}
              className={`flex-shrink-0 whitespace-nowrap rounded-xl px-2.5 py-2 text-xs font-medium transition-all duration-300 sm:px-3.5 sm:text-sm ${
                active === item.id
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
