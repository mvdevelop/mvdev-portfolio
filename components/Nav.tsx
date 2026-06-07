"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useLanguage } from "@/lib/LanguageContext";

const sectionIds = ["hero", "services", "resume", "work", "contact"];

export default function Nav() {
  const { t, language, setLanguage } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [scrolled, setScrolled] = useState(false);

  // Track scroll position for navbar background and active section
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Find active section
      const scrollPos = window.scrollY + 200;
      let current = "hero";

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const offset = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= offset && scrollPos < offset + height) {
            current = id;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle anchor click with smooth scroll
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav
      className={`w-full z-50 transition-all duration-500 fixed top-0 left-0 ${
        scrolled
          ? "bg-[#071108]/90 backdrop-blur-md shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="flex justify-between items-center px-[8%] lg:px-[16%] py-5">
        <Link
          href="#hero"
          onClick={(e) => handleNavClick(e, "#hero")}
          className="text-5xl font-bold font-unbounded text-white logo"
        >
          Mv
          <span className="text-[var(--primary-color)] font-unbounded">
            Dev
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-2">
          <div className="flex nav-menu items-center">
            {t.nav.links.map((link) => {
              const isActive = activeSection === link.href.replace("#", "");
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`text-base font-bold transition-all text-white/80 relative px-4 py-2 rounded-lg hover:text-white ${
                    isActive
                      ? "active-links text-[var(--primary-color)]"
                      : ""
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </div>

          {/* Language Toggle */}
          <div className="ms-3 flex items-center bg-gray-800/50 rounded-lg border border-gray-600 overflow-hidden">
            <button
              onClick={() => setLanguage("en")}
              className={`px-3 py-1.5 text-sm font-bold uppercase transition-all duration-300 cursor-pointer ${
                language === "en"
                  ? "bg-[var(--primary-color)] text-white"
                  : "text-white/60 hover:text-white"
              }`}
              aria-label="English"
            >
              EN
            </button>
            <button
              onClick={() => setLanguage("pt")}
              className={`px-3 py-1.5 text-sm font-bold uppercase transition-all duration-300 cursor-pointer ${
                language === "pt"
                  ? "bg-[var(--primary-color)] text-white"
                  : "text-white/60 hover:text-white"
              }`}
              aria-label="Português"
            >
              PT
            </button>
          </div>
        </div>

        {/* Mobile Button */}
        <div className="flex lg:hidden items-center gap-3">
          {/* Mobile Language Toggle */}
          <div className="flex items-center bg-gray-800/50 rounded-lg border border-gray-600 overflow-hidden">
            <button
              onClick={() => setLanguage("en")}
              className={`px-2 py-1 text-xs font-bold uppercase transition-all duration-300 cursor-pointer ${
                language === "en"
                  ? "bg-[var(--primary-color)] text-white"
                  : "text-white/60 hover:text-white"
              }`}
              aria-label="English"
            >
              EN
            </button>
            <button
              onClick={() => setLanguage("pt")}
              className={`px-2 py-1 text-xs font-bold uppercase transition-all duration-300 cursor-pointer ${
                language === "pt"
                  ? "bg-[var(--primary-color)] text-white"
                  : "text-white/60 hover:text-white"
              }`}
              aria-label="Português"
            >
              PT
            </button>
          </div>

          <button
            className="text-2xl cursor-pointer text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <i className={isMenuOpen ? "ri-close-line" : "ri-menu-2-fill"}></i>
          </button>
        </div>
      </div>

      {/* Mobile Side Menu */}
      <div
        className={`lg:hidden bg-[#071108]/95 backdrop-blur-md text-white border-t border-[var(--primary-color)]/20 px-[8%] overflow-hidden transition-all duration-500 ease-in-out ${
          isMenuOpen ? "max-h-96 py-5 opacity-100" : "max-h-0 py-0 opacity-0"
        }`}
      >
        <ul className="space-y-3 menu">
          {t.nav.links.map((link) => {
            const isActive = activeSection === link.href.replace("#", "");
            return (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`block text-base relative py-2 transition-colors ${
                    isActive
                      ? "text-[var(--primary-color)]"
                      : "text-white/80 hover:text-white"
                  }`}
                >
                  {link.name}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
