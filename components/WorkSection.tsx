"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import SectionTitle from "./SectionTitle";
import { useAnimateIn } from "@/lib/useScrollReveal";
import { useLanguage } from "@/lib/LanguageContext";
import { projects as projectContent } from "@/lib/content";

// Dynamic imports for icons
const FaGithub = dynamic(() => import("react-icons/fa").then((mod) => mod.FaGithub), { ssr: false });
const FaArrowRight = dynamic(() => import("react-icons/fa").then((mod) => mod.FaArrowRight), { ssr: false });
const FaExternalLinkAlt = dynamic(() => import("react-icons/fa").then((mod) => mod.FaExternalLinkAlt), { ssr: false });

export default function WorkSection() {
  const { t } = useLanguage();
  const { ref, isVisible } = useAnimateIn("up");

  // Get localized projects and merge with detailed content
  const projects = t.work.projects.flatMap((localizedProject) => {
    const contentProject = projectContent.find(
      (project) => project.id === localizedProject.id,
    );

    if (!contentProject) {
      return [];
    }

    return [{
      ...localizedProject,
      ...contentProject,
    }];
  });

  return (
    <section
      id="work"
      className="relative py-20 md:py-24 px-[5%] md:px-[8%] lg:px-[12%] xl:px-[16%] text-white overflow-hidden"
      aria-labelledby="work-title"
    >
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--primary-color)]/[0.02] to-transparent pointer-events-none"></div>

      <SectionTitle
        label={t.work.label}
        title={t.work.title}
        subtitle={t.work.subtitle}
      />

      <div
        ref={ref as React.RefObject<HTMLDivElement>}
        className={`transition-all duration-700 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      >
        {/* Professional Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {projects.map((project) => (
            <article
              key={project.id}
              className="group relative rounded-2xl overflow-hidden bg-[var(--color-surface-muted)] border border-[var(--color-border)] hover:border-[var(--color-primary)]/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-[var(--primary-color)]/10"
            >
              {/* Project Image */}
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={project.img}
                  alt={`${project.title} screenshot`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg-primary)] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Content */}
              <div className="p-6 md:p-8">
                {/* Category Badge */}
                <span className="inline-block px-3 py-1 rounded-full bg-[var(--color-primary-light)] text-[var(--color-primary)] text-xs font-semibold mb-4">
                  {project.id}
                </span>

                {/* Title */}
                <h2 className="text-2xl md:text-3xl font-display font-bold mb-3 group-hover:text-[var(--color-primary)] transition-colors">
                  {project.title}
                </h2>

                {/* Description */}
                <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.slice(0, 4).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 rounded-md bg-[var(--color-surface-hover)] text-gray-300 text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 4 && (
                    <span className="px-3 py-1 rounded-md bg-[var(--color-surface-hover)] text-gray-400 text-xs">
                      +{project.tech.length - 4} more
                    </span>
                  )}
                </div>

                {/* Actions */}
                <div className="flex items-center justify-between pt-4 border-t border-[var(--color-border)]">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="inline-flex items-center gap-2 text-[var(--color-primary)] font-semibold hover:text-white transition-colors group/link"
                  >
                    View Case Study
                    <FaArrowRight size={16} className="transition-transform group-hover/link:translate-x-1" />
                  </Link>

                  <div className="flex gap-3">
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-lg border border-[var(--color-border)] flex items-center justify-center text-gray-400 hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] transition-all"
                      aria-label={`View live demo of ${project.title}`}
                      title="Live Demo"
                    >
                      <FaExternalLinkAlt size={16} />
                    </a>
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-lg border border-[var(--color-border)] flex items-center justify-center text-gray-400 hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] transition-all"
                      aria-label={`View source code of ${project.title}`}
                      title="GitHub Repository"
                    >
                      <FaGithub size={16} />
                    </a>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
