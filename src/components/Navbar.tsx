import { useState, useEffect } from "react";

const navItems = ["Home", "About", "Projects", "Skills", "Other"];

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [scrolled, setScrolled] = useState(false);

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
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-background/80 backdrop-blur-lg border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <span className="font-display text-xl font-bold text-gradient-gold">Portfolio</span>
        <ul className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item}>
              <button
                onClick={() => scrollTo(item)}
                className={`font-display text-sm tracking-wider uppercase transition-colors duration-300 ${
                  active === item ? "text-primary" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item}
              </button>
            </li>
          ))}
        </ul>
        <button
          className="md:hidden text-foreground"
          onClick={() => {
            const menu = document.getElementById("mobile-menu");
            menu?.classList.toggle("hidden");
          }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M3 12h18M3 6h18M3 18h18" />
          </svg>
        </button>
      </div>
      <div id="mobile-menu" className="hidden md:hidden bg-background/95 backdrop-blur-lg border-b border-border">
        <ul className="flex flex-col items-center gap-4 py-4">
          {navItems.map((item) => (
            <li key={item}>
              <button
                onClick={() => {
                  scrollTo(item);
                  document.getElementById("mobile-menu")?.classList.add("hidden");
                }}
                className={`font-display text-sm tracking-wider uppercase ${
                  active === item ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {item}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
