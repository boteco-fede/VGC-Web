import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "What We Do", href: "#what-we-do" },
  { name: "The Opportunity", href: "#opportunity" },
  { name: "Team", href: "#team" },
];

function LogoMark({ size = "sm" }: { size?: "sm" | "lg" }) {
  const box = size === "sm" ? "w-8 h-8 text-lg" : "w-12 h-12 text-2xl";
  const text = size === "sm" ? "text-base" : "text-2xl";
  const sub = size === "sm" ? "text-xs" : "text-sm";
  return (
    <div className="flex items-center gap-2.5">
      <div
        className={`${box} rounded-sm bg-background border border-primary/50 flex items-center justify-center shadow-[0_0_14px_rgba(212,175,55,0.18)] shrink-0`}
      >
        <span className="font-display font-bold text-primary leading-none"
          style={{ fontSize: size === "sm" ? "1.2rem" : "1.7rem" }}>V</span>
      </div>
      <div className="flex flex-col leading-none">
        <span className={`font-display font-semibold text-foreground tracking-tight ${text}`}>
          Venny Growth
        </span>
        <span className={`font-light text-muted-foreground tracking-widest uppercase ${sub} mt-0.5`}>
          Capital
        </span>
      </div>
    </div>
  );
}

export { LogoMark };

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/90 backdrop-blur-md border-b border-border/50 py-3 shadow-lg"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <Link href="/" className="group">
          <LogoMark size="sm" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => handleNavClick(link.href)}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              {link.name}
            </button>
          ))}
          <button
            onClick={() => handleNavClick("#contact")}
            className="px-6 py-2.5 rounded-sm font-medium text-sm bg-gradient-gold text-background hover:opacity-90 hover:shadow-[0_0_20px_rgba(212,175,55,0.3)] transition-all duration-300 hover:-translate-y-0.5"
          >
            Get in Touch
          </button>
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-foreground p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden absolute top-full left-0 w-full bg-background border-b border-border/50 overflow-hidden shadow-2xl"
          >
            <div className="px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.href)}
                  className="text-left text-lg font-medium text-foreground py-2 border-b border-white/5"
                >
                  {link.name}
                </button>
              ))}
              <button
                onClick={() => handleNavClick("#contact")}
                className="mt-4 w-full px-6 py-3 rounded-sm font-medium bg-gradient-gold text-background"
              >
                Get in Touch
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
