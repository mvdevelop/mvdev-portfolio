"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import { ExternalLink, Github } from "lucide-react";
import SectionTitle from "./SectionTitle";
import { useAnimateIn } from "@/lib/useScrollReveal";
import { useLanguage } from "@/lib/LanguageContext";
import { projects as projectContent } from "@/lib/content";

const FaArrowRight = dynamic(() => import("react-icons/fa").then((mod) => mod.FaArrowRight), { ssr: false });

function ProjectCover({ project }: { project: { title: string; img: string } }) {
  const [failed, setFailed] = useState(false);
  return <div className="relative h-[320px] overflow-hidden bg-gradient-to-br from-[#1E3A8A] via-[#172554] to-[#0F172A]">{failed ? <div className="flex h-full flex-col items-center justify-center text-center"><span className="text-5xl font-extrabold text-white">Mv</span><span className="mt-2 text-2xl font-bold text-white">{project.title}</span></div> : <Image src={project.img} alt={`${project.title} screenshot`} fill className="object-cover transition-transform duration-500 group-hover:scale-105" sizes="(max-width: 768px) 100vw, 50vw" onError={() => setFailed(true)} />}</div>;
}

export default function WorkSection() {
  const { t } = useLanguage();
  const { ref, isVisible } = useAnimateIn("up");
  const projects = t.work.projects.flatMap((localizedProject) => { const contentProject = projectContent.find((project) => project.id === localizedProject.id); return contentProject ? [{ ...localizedProject, ...contentProject }] : []; });
  return <section id="work" className="relative bg-[#0F172A] px-6 py-14 text-white md:px-12 md:py-24 lg:px-16" aria-labelledby="work-title"><div className="mx-auto max-w-[1200px]"><SectionTitle label={t.work.label} title={t.work.title} subtitle={t.work.subtitle} /><div ref={ref as React.RefObject<HTMLDivElement>} className={`grid grid-cols-1 gap-7 md:grid-cols-2 transition-all duration-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>{projects.map((project) => <article key={project.id} className="group overflow-hidden rounded-[20px] border border-[#334155] bg-[#1E293B] transition duration-300 hover:-translate-y-1.5 hover:border-[#3B82F6]"><ProjectCover project={project} /><div className="p-7"><span className="text-sm font-bold text-[#60A5FA]">{project.id}</span><h3 className="mt-2 text-[22px] font-bold text-[#F8FAFC]">{project.title}</h3><p className="mt-3 text-[15px] leading-[1.6] text-[#94A3B8]">{project.description}</p><div className="mt-5 flex flex-wrap gap-2">{project.tech.map((tech) => <span key={tech} className="rounded-full border border-[#334155] bg-[#0F172A] px-3 py-1 text-xs text-[#CBD5E1]">{tech}</span>)}</div><div className="mt-6 flex items-center justify-between border-t border-[#334155] pt-5"><Link href={`/projects/${project.slug}`} className="flex items-center gap-2 font-bold text-[#60A5FA] hover:text-white">View Case Study <FaArrowRight size={14} /></Link><div className="flex gap-2"><a href={project.repo} target="_blank" rel="noopener noreferrer" aria-label={`View source code of ${project.title}`} className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#0F172A] text-[#CBD5E1] hover:text-[#60A5FA]"><Github size={16} /></a><a href={project.href} target="_blank" rel="noopener noreferrer" aria-label={`View live demo of ${project.title}`} className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#0F172A] text-[#CBD5E1] hover:text-[#60A5FA]"><ExternalLink size={16} /></a></div></div></div></article>)}</div></div></section>;
}
