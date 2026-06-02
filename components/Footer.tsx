import React from 'react';
import Link from 'next/link';
import { BiCopyright } from 'react-icons/bi';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="w-full border-t border-gray-800/50 bg-[#071108]">
            <div className="max-w-7xl mx-auto px-[8%] lg:px-[16%] py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {/* Brand */}
                    <div className="md:col-span-1">
                        <Link href="#hero" className="text-4xl font-bold font-unbounded text-white">
                            Mv<span className="text-[var(--primary-color)]">Dev</span>
                        </Link>
                        <p className="text-gray-400 text-sm mt-4 leading-relaxed max-w-xs">
                            Full Stack Developer passionate about creating modern, scalable, and impactful digital solutions.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white font-semibold font-unbounded mb-4">Quick Links</h3>
                        <ul className="space-y-2.5">
                            {[
                                { name: 'Home', href: '#hero' },
                                { name: 'Services', href: '#services' },
                                { name: 'Resume', href: '#resume' },
                                { name: 'Work', href: '#work' },
                                { name: 'Contact', href: '#contact' },
                            ].map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        className="text-gray-400 hover:text-[var(--primary-color)] transition-colors duration-300 text-sm"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Social */}
                    <div>
                        <h3 className="text-white font-semibold font-unbounded mb-4">Connect</h3>
                        <div className="flex gap-3">
                            <a
                                href="https://github.com/mvdevelop"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-700 text-gray-400 hover:border-[var(--primary-color)] hover:text-[var(--primary-color)] hover:bg-[var(--primary-color)]/10 transition-all duration-300"
                            >
                                <i className="bi bi-github text-lg"></i>
                            </a>
                            <a
                                href="https://linkedin.com/in/mvdevelop"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-700 text-gray-400 hover:border-[var(--primary-color)] hover:text-[var(--primary-color)] hover:bg-[var(--primary-color)]/10 transition-all duration-300"
                            >
                                <i className="bi bi-linkedin text-lg"></i>
                            </a>
                            <a
                                href="https://instagram.com/mvdevelop"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-700 text-gray-400 hover:border-[var(--primary-color)] hover:text-[var(--primary-color)] hover:bg-[var(--primary-color)]/10 transition-all duration-300"
                            >
                                <i className="bi bi-instagram text-lg"></i>
                            </a>
                            <a
                                href="mailto:marcosvmdilly@gmail.com"
                                className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-700 text-gray-400 hover:border-[var(--primary-color)] hover:text-[var(--primary-color)] hover:bg-[var(--primary-color)]/10 transition-all duration-300"
                            >
                                <i className="bi bi-envelope text-lg"></i>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="border-t border-gray-800/50 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-gray-500 text-sm flex items-center gap-1">
                        <BiCopyright className="inline" /> {currentYear} MvDev. All rights reserved.
                    </p>
                    <p className="text-gray-500 text-sm">
                        Designed & Built with <span className="text-[var(--primary-color)]">♥</span>
                    </p>
                </div>
            </div>
        </footer>
    );
}
