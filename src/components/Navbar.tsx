import { useState, useEffect } from "react";
import { useTheme } from "@/hooks/use-theme";
import { Sun, Moon } from "lucide-react";

const navItems = ["Home", "About", "Projects", "Skills", "Other"];

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = navItems.map((item) => {
        const el = document.getElementById(item.toLowerCase());
        if (!el) return { id: item, top: 0 };
        return { id: item, top: el.getBoundingClientRect().top };
      });
      const current = sections.reduce((prev, curr) =>
        Math.abs(curr.top) < Math.abs(prev.top) ? curr : prev
      );
      setActive(current.id);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-500`}>
      <div className="flex items-center gap-6">
        {/* Theme toggle */}
        <button
          onClick={toggleTheme}
          className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-primary hover:scale-110 transition-transform"
        >
          {theme === "light" ? <Sun size={18} /> : <Moon size={18} />}
        </button>

        {/* Nav pills */}
        <div className="glass-card px-2 py-2 flex items-center gap-1">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => scrollTo(item)}
              className={`text-sm font-medium px-4 py-2 rounded-xl transition-all duration-300 ${
                active === item
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
