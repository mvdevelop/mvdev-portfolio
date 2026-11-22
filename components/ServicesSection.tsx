"use client";
import React from "react";
import { ArrowRight, Braces, Cloud, Layers, Code2 } from "lucide-react";
import SectionTitle from "./SectionTitle";
import { useAnimateIn } from "@/lib/useScrollReveal";
import { useLanguage } from "@/lib/LanguageContext";

const serviceMeta = [
  { icon: Code2, tech: ["C#", ".NET", "Blazor"] },
  { icon: Braces, tech: ["TypeScript", "React", "Next.js"] },
  { icon: Layers, tech: ["REST API", "Auth", "SQL"] },
  { icon: Cloud, tech: ["Docker", "CI/CD", "AWS"] },
];

export default function ServicesSection() {
  const { t } = useLanguage();
  const { ref, isVisible } = useAnimateIn("up");
  return <section id="services" className="relative bg-[#0F172A] px-6 py-14 text-white md:px-12 md:py-24 lg:px-16" aria-labelledby="services-title"><div className="mx-auto max-w-[1200px]"><SectionTitle label={t.services.label} title={t.services.title} subtitle={t.services.subtitle} /><div ref={ref as React.RefObject<HTMLDivElement>} className={`grid grid-cols-1 gap-6 md:grid-cols-2 transition-all duration-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>{t.services.items.map((service, index) => { const meta = serviceMeta[index]; const Icon = meta.icon; return <article key={service.id} tabIndex={0} className="group relative min-h-[280px] overflow-visible rounded-[20px] border border-[#1F2937] bg-[#111827] p-7 shadow-[0_8px_30px_rgba(0,0,0,.35)] transition duration-300 hover:-translate-y-1 hover:border-[#3B82F6] hover:shadow-2xl focus-visible:outline-2 focus-visible:outline-[#60A5FA]"><div className="flex items-start justify-between"><span className="text-sm font-bold text-[#60A5FA]">{service.id}</span><span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1E3A8A] text-white transition group-hover:bg-[#2563EB]"><ArrowRight size={18} className="-rotate-45 transition group-hover:rotate-0" /></span></div><div className="mt-5 flex h-12 w-12 items-center justify-center rounded-full bg-[#1E3A8A] text-white"><Icon size={25} /></div><h3 className="mt-5 text-xl font-bold text-[#F8FAFC]">{service.title}</h3><p className="mt-3 text-[15px] leading-[1.6] text-[#94A3B8]">{service.description}</p><div className="mt-6 flex flex-wrap gap-2">{meta.tech.map((tech) => <span key={tech} className="rounded-full border border-[#1E40AF] bg-[#1E3A8A]/30 px-3 py-1 text-xs text-[#60A5FA]">{tech}</span>)}</div></article>; })}</div></div></section>;
}
