"use client";
import React from "react";
import { ArrowRight, Braces, Cloud, Layers, Code2 } from "lucide-react";
import SectionTitle from "./SectionTitle";
import { useAnimateIn } from "@/lib/useScrollReveal";
import { useLanguage } from "@/lib/LanguageContext";

const serviceMeta = [
  { icon: Code2, color: "#2DD4BF", soft: "rgba(45,212,191,.12)", tech: ["C#", ".NET", "Blazor"] },
  { icon: Braces, color: "#A78BFA", soft: "rgba(167,139,250,.12)", tech: ["TypeScript", "React", "Next.js"] },
  { icon: Layers, color: "#FBBF24", soft: "rgba(251,191,36,.12)", tech: ["REST API", "Auth", "SQL"] },
  { icon: Cloud, color: "#F8FAFC", soft: "rgba(248,250,252,.12)", tech: ["Docker", "CI/CD", "AWS"] },
];

export default function ServicesSection() {
  const { t } = useLanguage();
  const { ref, isVisible } = useAnimateIn("up");
  return <section id="services" className="relative bg-gradient-to-br from-[#0B0F19] via-[#0F1420] to-[#111722] px-6 py-14 text-white md:px-12 md:py-24 lg:px-16" aria-labelledby="services-title"><div className="mx-auto max-w-[1200px]"><SectionTitle label={t.services.label} title={t.services.title} subtitle={t.services.subtitle} /><div ref={ref as React.RefObject<HTMLDivElement>} className={`grid grid-cols-1 gap-6 md:grid-cols-2 transition-all duration-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>{t.services.items.map((service, index) => { const meta = serviceMeta[index]; const Icon = meta.icon; return <article key={service.id} tabIndex={0} style={{ "--service-color": meta.color, "--service-soft": meta.soft } as React.CSSProperties} className="group relative min-h-[280px] overflow-visible rounded-[20px] border border-[#232C3F] bg-[#141A28] p-7 shadow-[0_8px_30px_rgba(0,0,0,.35)] transition duration-300 hover:-translate-y-1 hover:border-[var(--service-color)] hover:shadow-2xl focus-visible:outline-2 focus-visible:outline-[var(--service-color)]"><div className="flex items-start justify-between"><span className="text-sm font-bold text-[var(--service-color)]">{service.id}</span><span className="flex h-10 w-10 items-center justify-center rounded-full text-[#64748B] transition group-hover:text-[var(--service-color)]"><ArrowRight size={18} className="-rotate-45 transition group-hover:rotate-0" /></span></div><div className="mt-5 flex h-12 w-12 items-center justify-center rounded-full text-[var(--service-color)]" style={{ backgroundColor: meta.soft }}><Icon size={25} /></div><h3 className="mt-5 text-xl font-bold text-[#F1F5F9]">{service.title}</h3><p className="mt-3 text-[15px] leading-[1.6] text-[#94A3B8]">{service.description}</p><div className="mt-6 flex flex-wrap gap-2">{meta.tech.map((tech) => <span key={tech} className="rounded-full border border-[#232C3F] bg-[#0F1420] px-3 py-1 text-xs text-[var(--service-color)]">{tech}</span>)}</div></article>; })}</div></div></section>;
}
