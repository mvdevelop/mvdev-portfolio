"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import { ArrowRight, Download, MapPin, Briefcase } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { useLanguage } from "@/lib/LanguageContext";
import { ButtonLink } from "@/components/ui/Button";
import ResumeLink from "@/components/ResumeLink";

// Dynamic imports for social icons
const FaGithub = dynamic(() => import("react-icons/fa").then((mod) => mod.FaGithub), { ssr: false });
const FaLinkedin = dynamic(() => import("react-icons/fa").then((mod) => mod.FaLinkedin), { ssr: false });
const FaInstagram = dynamic(() => import("react-icons/fa").then((mod) => mod.FaInstagram), { ssr: false });

export default function HeroSection() {
  const { t } = useLanguage();

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center text-white py-0 relative overflow-hidden"
      aria-labelledby="hero-title"
    >
      {/* Subtle Background - Professional Engineering Aesthetic */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-bg-primary)] via-[var(--color-bg-secondary)] to-[var(--color-bg-primary)]"></div>
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-5">
        {/* Abstract code/terminal pattern */}
        <div className="w-full h-full bg-[linear-gradient(rgba(77,139,233,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(77,139,233,0.1)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)]"></div>
      </div>

      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between px-[5%] md:px-[8%] lg:px-[12%] xl:px-[16%] pt-32 md:pt-36 lg:pt-28 xl:pt-32 pb-32 min-h-screen gap-12 lg:gap-0">
        {/* Left Content - Professional & Clean */}
        <div className="w-full lg:w-[55%] xl:w-[50%] text-start mb-12 lg:mb-0">
          {/* Role Badge */}
          <p className="text-caption font-semibold text-[var(--color-primary)] uppercase tracking-widest mb-4">
            {t.hero.role}
          </p>

          {/* Main Heading */}
          <h1 id="hero-title" className="text-h1 font-display font-semibold mb-6 leading-tight max-w-[480px] xl:max-w-[540px]">
            {t.hero.greeting}{" "}
            <span className="text-[color:var(--color-primary)]">
              {t.hero.name}
            </span>
          </h1>

          {/* Headline - Strong Engineering Focus */}
          <p className="text-xl md:text-2xl font-display font-medium text-white/90 mb-6 leading-snug">
            {t.hero.headline}
          </p>

          {/* Description - Professional Summary */}
          <p className="text-body my-6 lg:my-8 leading-relaxed max-w-[580px]">
            {t.hero.description}
          </p>

          {/* Location & Availability */}
          <div className="flex flex-wrap gap-4 mb-8 text-sm text-gray-400">
            <span className="flex items-center gap-2">
              <MapPin size={16} className="text-[var(--color-primary)]" aria-hidden="true" />
              {t.hero.location}
            </span>
            <span className="flex items-center gap-2">
              <Briefcase size={16} className="text-[var(--color-primary)]" aria-hidden="true" />
              {t.hero.availability}
            </span>
          </div>

          {/* Primary Actions - Clear CTAs */}
          <div className="flex flex-wrap gap-4 items-center mb-10">
            <ButtonLink href="#contact" variant="primary">
              {t.hero.contactCta}
              <ArrowRight className="ms-2" size={18} aria-hidden="true" />
            </ButtonLink>
            <ButtonLink href="#work" variant="secondary">
              {t.hero.viewProjects}
            </ButtonLink>
            <ResumeLink className="btn btn-ghost px-6 py-3">
              <Download className="me-2" size={18} aria-hidden="true" />
              {t.hero.downloadCV}
            </ResumeLink>
          </div>

          {/* Social Links - Minimal & Professional */}
          <div className="flex hero-social gap-4 text-2xl">
            <Link
              href={siteConfig.socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center w-12 h-12 rounded-lg border border-[var(--color-border)] text-[var(--color-text-secondary)] hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] transition-all duration-300"
              aria-label="GitHub profile"
            >
              <FaGithub size={22} />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link
              href={siteConfig.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center w-12 h-12 rounded-lg border border-[var(--color-border)] text-[var(--color-text-secondary)] hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] transition-all duration-300"
              aria-label="LinkedIn profile"
            >
              <FaLinkedin size={22} />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link
              href={siteConfig.socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center w-12 h-12 rounded-lg border border-[var(--color-border)] text-[var(--color-text-secondary)] hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] transition-all duration-300"
              aria-label="Instagram profile"
            >
              <FaInstagram size={22} />
              <span className="sr-only">Instagram</span>
            </Link>
          </div>
        </div>

        {/* Right Image - Professional Photo */}
        <div className="lg:w-[40%] w-full flex justify-center relative">
          <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-[22rem] lg:h-[22rem] xl:w-[24rem] xl:h-[24rem]">
            {/* Decorative Ring */}
            <div className="absolute inset-0 rounded-full border-2 border-[var(--color-primary)]/20 animate-spin-slow" style={{ animationDuration: '20s' }}></div>

            {/* Profile Image */}
            <div className="relative w-full h-full rounded-full overflow-hidden bg-gradient-to-r from-[var(--color-primary-light)] to-[var(--color-primary-lighter)] p-2">
              <Image
                src="/images/mvdevelop.jpeg"
                alt={`${t.hero.name} - Full Stack Developer`}
                width={384}
                height={384}
                className="w-full h-full object-cover rounded-full"
                priority
              />
            </div>

            {/* Tech Stack Indicators - Subtle & Meaningful */}
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 flex gap-3">
              <div className="w-10 h-10 rounded-full bg-[var(--color-bg-secondary)] border border-[var(--color-border)] flex items-center justify-center" title="C#">
                <span className="text-xs font-bold text-[var(--color-primary)]">#</span>
              </div>
              <div className="w-10 h-10 rounded-full bg-[var(--color-bg-secondary)] border border-[var(--color-border)] flex items-center justify-center" title=".NET">
                <span className="text-xs font-bold text-[var(--color-primary)]">N</span>
              </div>
              <div className="w-10 h-10 rounded-full bg-[var(--color-bg-secondary)] border border-[var(--color-border)] flex items-center justify-center" title="TypeScript">
                <span className="text-xs font-bold text-[var(--color-primary)]">TS</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
