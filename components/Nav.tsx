"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/lib/LanguageContext";
import { scrollToWithLenis } from "./Lenis";

const sectionIds = ["hero", "services", "resume", "work", "contact"];

export default function Nav() {
  const { t, language, setLanguage } = useLanguage();
  const pathname = usePathname();
  const isProjectsRoute = pathname.startsWith("/projects");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [scrolled, setScrolled] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isMenuOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    mobileMenuRef.current?.querySelector<HTMLAnchorElement>("a")?.focus();

    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isMenuOpen]);

  useEffect(() => {
    if (!isMenuOpen) return;

    const handleOutsideClick = (event: MouseEvent) => {
      const target = event.target as Node;
      if (
        !mobileMenuRef.current?.contains(target) &&
        !menuButtonRef.current?.contains(target)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [isMenuOpen]);

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const currentActiveSection = isProjectsRoute ? "projects" : activeSection;
  const isMobileMenuOpen = isMenuOpen ? "true" : "false";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isProjectsRoute) return;

    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section));

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleSection) {
          setActiveSection(visibleSection.target.id);
        }
      },
      { rootMargin: "-25% 0px -55% 0px", threshold: [0.1, 0.25, 0.5] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [isProjectsRoute]);

  // Handle anchor click with smooth scroll
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (!href.startsWith("#")) {
      setIsMenuOpen(false);
      return;
    }

    e.preventDefault();
    const id = href.replace("#", "");
    scrollToWithLenis(`#${id}`);
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
          href="/#hero"
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
              const isActive = link.href === "/projects"
                ? isProjectsRoute
                : !isProjectsRoute && currentActiveSection === link.href.replace("#", "");
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  aria-current={isActive ? "page" : undefined}
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
            ref={menuButtonRef}
            className="text-2xl cursor-pointer text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-navigation"
          >
            <i className={isMenuOpen ? "ri-close-line" : "ri-menu-2-fill"}></i>
          </button>
        </div>
      </div>

      {/* Mobile Side Menu */}
      <div
        ref={mobileMenuRef}
        id="mobile-navigation"
        aria-hidden={!isMenuOpen}
        className={`lg:hidden bg-[#071108]/95 backdrop-blur-md text-white border-t border-[var(--primary-color)]/20 px-[8%] overflow-hidden transition-all duration-500 ease-in-out ${
          isMenuOpen ? "max-h-96 py-5 opacity-100" : "max-h-0 py-0 opacity-0"
        }`}
      >
        <ul className="space-y-3 menu">
          {t.nav.links.map((link) => {
            const isActive = link.href === "/projects"
              ? isProjectsRoute
              : !isProjectsRoute && currentActiveSection === link.href.replace("#", "");
            return (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  aria-current={isActive ? "page" : undefined}
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
