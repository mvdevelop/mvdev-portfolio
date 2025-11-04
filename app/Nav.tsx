
"use client";
import React, { useState } from "react";
import Link from "next/link";

import { usePathname } from "next/navigation";
import { BiPhone, BiEnvelope, BiMap, BiTime, BiMessageDetail, BiGlobe } from "react-icons/bi";

export default function Nav() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [showContact, setShowContact] = useState(false);
    const pathname = usePathname();

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "Services", href: "/Services" },
        { name: "Resume", href: "/Resume" },
        { name: "Work", href: "/Work" },
        { name: "Contact", href: "/Contact" },
    ];

    const handleHireClick = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        setShowContact(true);
    };

    const handleClose = () => {
        setShowContact(false);
    };

    return (
        <>
            <nav className="w-full z-50 transition-all duration-300 relative">
                <div className="flex justify-between items-center px-[8%] lg:px-[16%] py-5">
                    <Link
                        href="/"
                        className="text-5xl font-bold font-unbounded text-white logo"
                    >
                        Mv
                        <span className="text-[var(--primary-color)] font-unbounded">
                            Dev
                        </span>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="flex items-center gap-3">
                        <div className="hidden lg:flex nav-menu items-center space-x-5">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className={`text-base font-bold transition-all text-white relative px-2 py-2 rounded hover:text-[--primary-color] ${pathname === link.href
                                        ? "active-links text-[--primary-color]"
                                        : ""
                                        }`}
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>

                        {/* Hire Button */}
                        <button
                            onClick={handleHireClick}
                            className="bg-[var(--primary-color)] px-5 py-2 text-xl text-white font-semibold cursor-pointer rounded-full transition-all duration-300 hover:bg-transparent shadow-md hover:custom-shadow border border-[var(--primary-color)]"
                        >
                            Hire
                        </button>
                    </div>

                    {/* Mobile Button */}
                    <button
                        className="lg:hidden text-2xl cursor-pointer"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <i className="ri-menu-2-fill text-white"></i>
                    </button>
                </div>

                {/* Mobile Side Menu */}
                <div
                    className={`lg:hidden bg-[#020317] text-white border-y border-[--primary-color] px-[8%] overflow-hidden transition-all duration-500 ease-in-out ${isMenuOpen ? "max-h-96 py-5 opacity-100" : "max-h-0 py-0 opacity-0"
                        }`}
                >
                    <ul className="space-y-4 menu">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <Link
                                    href={link.href}
                                    className="block text-base relative"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>

            {/* Contact Modal */}
            {showContact && (
                <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-70 z-[9999]">
                    <div className="bg-[#1a1b1f] p-8 rounded-2xl shadow-lg max-w-md w-[90%] border border-[var(--primary-color)] text-white">
                        <h2 className="text-xl font-semibold text-center mb-6 text-[color:var(--primary-color)]">
                            Contact Info
                        </h2>

                        <div className="flex flex-col space-y-3">
                            <ContactItem
                                icon={<BiPhone size={20} />}
                                label="Phone"
                                value="(+55) 21 99050-6596"
                            />
                            <ContactItem
                                icon={<BiEnvelope size={20} />}
                                label="E-mail"
                                value="marcosvmdilly@gmail.com"
                            />
                            <ContactItem
                                icon={<BiMap size={20} />}
                                label="Address"
                                value="Rio de Janeiro, RJ - Brazil"
                            />
                            <ContactItem
                                icon={<BiTime size={20} />}
                                label="Working Hours"
                                value="Mon - Fri: 08:00 - 18:00 / Sat - Sun: 08:00 - 14:00"
                            />
                            <ContactItem
                                icon={<BiMessageDetail size={20} />}
                                label="WhatsApp"
                                value="(+55) 21 99050-6596"
                            />
                            <ContactItem
                                icon={<BiGlobe size={20} />}
                                label="Website"
                                value="www.mvdevelop.com.br"
                            />
                        </div>

                        {/* OK Button */}
                        <div className="text-center mt-8">
                            <button
                                onClick={handleClose}
                                className="bg-[var(--primary-color)] px-6 py-2 rounded-lg hover:opacity-80 transition"
                            >
                                Thank You !
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
    <div className="flex items-center space-x-4 border-b border-gray-700 pb-3">
      <span className="bg-[#0f1012] p-3 border border-[var(--primary-color)] rounded-lg text-[color:var(--primary-color)]">
        {icon}
      </span>
      <div>
        <p className="text-sm text-gray-400">{label}</p>
        <p className="font-medium">{value}</p>
      </div>
    </div>
  );
}
