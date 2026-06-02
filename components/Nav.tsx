"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { BiPhone, BiEnvelope, BiMap, BiTime, BiMessageDetail, BiGlobe } from "react-icons/bi";

const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "Services", href: "#services" },
    { name: "Resume", href: "#resume" },
    { name: "Work", href: "#work" },
    { name: "Contact", href: "#contact" },
];

const sectionIds = ["hero", "services", "resume", "work", "contact"];

export default function Nav() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [showContact, setShowContact] = useState(false);
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

    const handleHireClick = () => {
        setShowContact(true);
    };

    const handleClose = () => {
        setShowContact(false);
    };

    return (
        <>
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
                            {navLinks.map((link) => {
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

                        {/* Hire Button */}
                        <button
                            onClick={handleHireClick}
                            className="ms-3 bg-[var(--primary-color)] px-5 py-2 text-lg text-white font-semibold cursor-pointer rounded-full transition-all duration-300 hover:bg-transparent shadow-md hover:shadow-[var(--primary-color)]/20 border border-[var(--primary-color)]"
                        >
                            Hire
                        </button>
                    </div>

                    {/* Mobile Button */}
                    <button
                        className="lg:hidden text-2xl cursor-pointer text-white"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        <i className={isMenuOpen ? "ri-close-line" : "ri-menu-2-fill"}></i>
                    </button>
                </div>

                {/* Mobile Side Menu */}
                <div
                    className={`lg:hidden bg-[#071108]/95 backdrop-blur-md text-white border-t border-[var(--primary-color)]/20 px-[8%] overflow-hidden transition-all duration-500 ease-in-out ${
                        isMenuOpen ? "max-h-96 py-5 opacity-100" : "max-h-0 py-0 opacity-0"
                    }`}
                >
                    <ul className="space-y-3 menu">
                        {navLinks.map((link) => {
                            const isActive = activeSection === link.href.replace("#", "");
                            return (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        onClick={(e) => handleNavClick(e, link.href)}
                                        className={`block text-base relative py-2 transition-colors ${
                                            isActive ? "text-[var(--primary-color)]" : "text-white/80 hover:text-white"
                                        }`}
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            );
                        })}
                        <li className="pt-3">
                            <button
                                onClick={handleHireClick}
                                className="w-full bg-[var(--primary-color)] px-5 py-3 text-white font-semibold cursor-pointer rounded-full transition-all duration-300 hover:bg-transparent border border-[var(--primary-color)]"
                            >
                                Hire Me
                            </button>
                        </li>
                    </ul>
                </div>
            </nav>

            {/* Contact Modal */}
            {showContact && (
                <div className="fixed inset-0 flex justify-center items-center bg-black/70 z-[9999]">
                    <div className="bg-[#1a1b1f] p-8 rounded-2xl shadow-lg max-w-md w-[90%] border border-[var(--primary-color)]/30 text-white animate-fade-in">
                        <h2 className="text-xl font-semibold text-center mb-6 text-[color:var(--primary-color)]">
                            Contact Info
                        </h2>

                        <div className="flex flex-col space-y-3">
                            <ContactItem icon={<BiPhone size={20} />} label="Phone" value="(+55) 21 99050-6596" />
                            <ContactItem icon={<BiEnvelope size={20} />} label="E-mail" value="marcosvmdilly@gmail.com" />
                            <ContactItem icon={<BiMap size={20} />} label="Address" value="Rio de Janeiro, RJ - Brazil" />
                            <ContactItem icon={<BiTime size={20} />} label="Working Hours" value="Mon - Fri: 08:00 - 18:00 / Sat - Sun: 08:00 - 14:00" />
                            <ContactItem icon={<BiMessageDetail size={20} />} label="WhatsApp" value="(+55) 21 99050-6596" />
                            <ContactItem icon={<BiGlobe size={20} />} label="Website" value="www.mvdevelop.com.br" />
                        </div>

                        <div className="text-center mt-8">
                            <button
                                onClick={handleClose}
                                className="bg-[var(--primary-color)] px-6 py-2 rounded-lg hover:opacity-80 transition cursor-pointer"
                            >
                                Thank You!
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

type ContactItemProps = {
    icon: React.ReactNode;
    label: string;
    value: string;
};

function ContactItem({ icon, label, value }: ContactItemProps) {
    return (
        <div className="flex items-center space-x-4 border-b border-gray-700/50 pb-3">
            <span className="bg-[#0f1012] p-3 border border-[var(--primary-color)]/30 rounded-lg text-[color:var(--primary-color)]">
                {icon}
            </span>
            <div>
                <p className="text-sm text-gray-400">{label}</p>
                <p className="font-medium">{value}</p>
            </div>
        </div>
    );
}
