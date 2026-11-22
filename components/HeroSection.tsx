"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import { ArrowRight, Download, MapPin } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { useLanguage } from "@/lib/LanguageContext";
import { ButtonLink } from "@/components/ui/Button";
import ResumeLink from "@/components/ResumeLink";

const FaGithub = dynamic(() => import("react-icons/fa").then((mod) => mod.FaGithub), { ssr: false });
const FaLinkedin = dynamic(() => import("react-icons/fa").then((mod) => mod.FaLinkedin), { ssr: false });
const FaInstagram = dynamic(() => import("react-icons/fa").then((mod) => mod.FaInstagram), { ssr: false });

export default function HeroSection() {
  const { t } = useLanguage();
  return (
    <section id="hero" className="relative flex min-h-[85vh] items-center overflow-hidden px-6 pb-20 pt-32 text-white md:px-12 lg:px-16 lg:pt-28" aria-labelledby="hero-title">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_45%,rgba(75,131,209,0.10),transparent_34%),linear-gradient(135deg,#0B0E14,#111722)]" />
      <div className="absolute right-0 top-0 h-full w-1/2 opacity-20 [background-image:linear-gradient(rgba(96,165,250,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(96,165,250,.08)_1px,transparent_1px)] [background-size:40px_40px] [mask-image:linear-gradient(to_left,black,transparent)]" />
      <div className="relative z-10 mx-auto grid w-full max-w-[1200px] items-center gap-14 lg:grid-cols-[3fr_2fr]">
        <div>
          <div className="mb-5 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-[#60A5FA]"><span className="h-px w-8 bg-[#60A5FA]" />{t.hero.role}</div>
          <h1 id="hero-title" className="max-w-3xl text-[clamp(2.5rem,6vw,3.5rem)] font-extrabold leading-[1.1] tracking-tight text-[#F8FAFC]">{t.hero.greeting}{" "}<span className="bg-gradient-to-r from-[#60A5FA] to-[#3B82F6] bg-clip-text text-transparent">{t.hero.name}</span></h1>
          <p className="mt-6 max-w-[520px] text-[clamp(1.5rem,3vw,1.75rem)] font-bold leading-tight text-[#E2E8F0]">{t.hero.headline}</p>
          <p className="mt-6 max-w-[520px] text-base leading-[1.7] text-[#94A3B8]">{t.hero.description}</p>
          <div className="mt-6 flex flex-wrap gap-3 text-xs text-[#CBD5E1]"><span className="flex items-center gap-2 rounded-full border border-[#334155] bg-[#1E293B] px-3 py-2"><MapPin size={15} className="text-[#60A5FA]" />{t.hero.location}</span><span className="flex items-center gap-2 rounded-full border border-[#334155] bg-[#1E293B] px-3 py-2"><span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />{t.hero.availability}</span></div>
          <div className="mt-8 flex flex-wrap items-center gap-4"><ButtonLink href="#contact">{t.hero.contactCta}<ArrowRight size={18} /></ButtonLink><ButtonLink href="#work" variant="secondary">{t.hero.viewProjects}</ButtonLink><ResumeLink className="inline-flex items-center gap-2 px-2 py-3 text-[#CBD5E1] underline-offset-4 hover:text-[#60A5FA] hover:underline"><Download size={18} />{t.hero.downloadCV}</ResumeLink></div>
          <div className="mt-8 flex gap-3">{[[siteConfig.socialLinks.github, FaGithub, "GitHub"],[siteConfig.socialLinks.linkedin, FaLinkedin, "LinkedIn"],[siteConfig.socialLinks.instagram, FaInstagram, "Instagram"]].map(([href, Icon, label]) => <Link key={label as string} href={href as string} target="_blank" rel="noopener noreferrer" aria-label={`${label} profile`} className="flex h-10 w-10 items-center justify-center rounded-[10px] border border-[#334155] bg-[#1E293B] text-[#CBD5E1] transition hover:-translate-y-0.5 hover:border-[#3B82F6] hover:text-[#60A5FA]"><Icon size={19} /></Link>)}</div>
        </div>
        <div className="flex justify-center lg:justify-end"><div className="relative h-64 w-64 sm:h-80 sm:w-80 lg:h-[380px] lg:w-[380px]"><div className="absolute -inset-2 rounded-full border border-white/10" /><div className="relative h-full w-full overflow-hidden rounded-full border border-white/10 bg-[#1E293B] p-1 shadow-2xl"><Image src="/images/mvdevelop.jpeg" alt={`${t.hero.name} - Full Stack Developer`} fill className="object-cover" priority sizes="(max-width: 1024px) 320px, 380px" /></div><div className="absolute -bottom-7 left-1/2 w-max -translate-x-1/2 rounded-2xl border border-[#334155] bg-[#1E293B] px-4 py-3 text-center text-xs text-[#CBD5E1] shadow-xl"><strong className="block text-[#F8FAFC]">3+ Years Experience</strong><span>C# / .NET / TypeScript</span></div></div></div>
      </div>
    </section>
  );
}
