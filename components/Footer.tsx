"use client";
import React from "react";
import Link from "next/link";
import { BiCopyright } from "react-icons/bi";
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";
import { useLanguage } from "@/lib/LanguageContext";
import { siteConfig } from "@/lib/site-config";

export default function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  const footerLinks = t.nav.links.map((link) => ({
    name: link.name,
    href: link.href,
  }));

  return (
    <footer className="w-full border-t border-[#252D3A] bg-gradient-to-br from-[#0B0E14] via-[#0F141D] to-[#111722]">
      <div className="mx-auto max-w-[1200px] px-6 py-14 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link
              href="#hero"
              className="text-4xl font-bold font-unbounded text-white"
            >
              <span className="text-white">Mv</span><span className="text-[#007bff]" style={{textShadow:"0 0 4px rgba(0,123,255,0.6),0 0 12px rgba(0,123,255,0.4)"}}>Dev</span>
            </Link>
            <p className="text-[#94A3B8] text-sm mt-4 leading-relaxed max-w-xs">
              {t.footer.description}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold font-unbounded mb-4">
              {t.footer.quickLinks}
            </h3>
            <ul className="space-y-2.5">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    aria-label={`Navigate to ${link.name}`}
                    className="text-[#94A3B8] hover:text-[#F8FAFC] transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-white font-semibold font-unbounded mb-4">
              {t.footer.connect}
            </h3>
            <div className="flex gap-3">
              <a
                href={siteConfig.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-lg border border-[#232C3F] text-[#94A3B8] hover:border-[#F8FAFC] hover:text-[#F8FAFC] hover:bg-[#007bff]/10 transition-all duration-300"
                aria-label="GitHub profile"
              >
                <FaGithub size={20} />
              </a>
              <a
                href={siteConfig.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-lg border border-[#232C3F] text-[#94A3B8] hover:border-[#F8FAFC] hover:text-[#F8FAFC] hover:bg-[#007bff]/10 transition-all duration-300"
                aria-label="LinkedIn profile"
              >
                <FaLinkedin size={20} />
              </a>
              <a
                href={siteConfig.socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-lg border border-[#232C3F] text-[#94A3B8] hover:border-[#F8FAFC] hover:text-[#F8FAFC] hover:bg-[#007bff]/10 transition-all duration-300"
                aria-label="Instagram profile"
              >
                <FaInstagram size={20} />
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="w-10 h-10 flex items-center justify-center rounded-lg border border-[#232C3F] text-[#94A3B8] hover:border-[#F8FAFC] hover:text-[#F8FAFC] hover:bg-[#007bff]/10 transition-all duration-300"
                aria-label="Send email"
              >
                <FaEnvelope size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#252D3A]/50 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#64748B] text-sm flex items-center gap-1">
            <BiCopyright className="inline" /> {currentYear} MvDev.{" "}
            {t.footer.copyright}
          </p>
          <p className="text-[#64748B] text-sm">
            {t.footer.builtWith}{" "}
            <span className="text-[#007bff]">♥</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
