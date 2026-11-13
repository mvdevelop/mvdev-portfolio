"use client";
import React, { useId, useRef } from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import Image from "next/image";
import {
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiDotnet,
  SiTypescript,
  SiNextdotjs,
  SiSupabase,
  SiVite,
} from "react-icons/si";
import SectionTitle from "./SectionTitle";
import { useAnimateIn } from "@/lib/useScrollReveal";
import { useLanguage } from "@/lib/LanguageContext";
import { projects as projectContent } from "@/lib/content";

export default function WorkSection() {
  const { t } = useLanguage();
  const { ref, isVisible } = useAnimateIn("up");
  const swiperId = useId().replace(/:/g, "");
  const swiperRef = useRef<import("swiper").Swiper | null>(null);

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
        <Swiper
          modules={[Navigation]}
          loop={true}
          navigation={{
            prevEl: `#${swiperId}-previous`,
            nextEl: `#${swiperId}-next`,
          }}
          spaceBetween={30}
          slidesPerView={1}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          aria-label="Featured projects"
          aria-roledescription="carousel"
        >
          {projects.map((project) => (
            <SwiperSlide key={project.id}>
              <div className="grid md:grid-cols-2 gap-8 md:gap-10 items-center">
                <div className="work-content order-2 md:order-1">
                  <h2 className="text-6xl md:text-7xl font-bold stroke-text">
                    {project.id}
                  </h2>
                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-semibold font-unbounded mt-3 md:mt-4">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mt-2 md:mt-3 text-base md:text-lg leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex gap-3 md:gap-4 mt-4 flex-wrap">
                    {project.tech.map((tech, index) => {
                      let IconComponent: React.ElementType | null = null;

                      switch (tech.toLowerCase().trim()) {
                        case "js":
                        case "javascript":
                          IconComponent = SiJavascript;
                          break;
                        case "ts":
                        case "typescript":
                          IconComponent = SiTypescript;
                          break;
                        case "react":
                          IconComponent = SiReact;
                          break;
                        case "react vite":
                        case "vite":
                          IconComponent = SiVite;
                          break;
                        case "nextjs":
                        case "next.js":
                          IconComponent = SiNextdotjs;
                          break;
                        case "tailwindcss":
                          IconComponent = SiTailwindcss;
                          break;
                        case ".net":
                        case "dotnet":
                          IconComponent = SiDotnet;
                          break;
                        case "supabase":
                          IconComponent = SiSupabase;
                          break;
                      }

                      return IconComponent ? (
                        <div
                          key={index}
                          className="work-icons text-2xl md:text-3xl text-[color:var(--primary-color)] cursor-pointer hover:text-white transition-all duration-300"
                          title={tech}
                        >
                          <IconComponent aria-hidden="true" />
                          <span className="sr-only">{tech}</span>
                        </div>
                      ) : null;
                    })}
                  </div>

                  <div className="work-share flex gap-3 md:gap-4 mt-5 md:mt-6 border-t border-gray-500 pt-4 md:pt-5">
                    <Link
                      href={`/projects/${project.slug}`}
                      aria-label={`${project.title} project details`}
                      className="flex items-center rounded-full bg-gray-500/5 px-4 md:px-5 py-2 md:py-3 text-xs md:text-sm font-semibold transition-all duration-500 hover:-translate-y-1 hover:bg-white hover:text-black"
                    >
                      Details
                    </Link>
                    <Link
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.title} live demo`}
                      className="w-10 h-10 md:w-15 md:h-15 flex items-center justify-center rounded-full bg-gray-500/5 hover:text-black hover:bg-white transition-all duration-500 hover:-translate-y-1"
                    >
                      <i aria-hidden="true" className="bi bi-arrow-up-right text-xl md:text-3xl"></i>
                    </Link>
                    <Link
                      href={project.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.title} source code`}
                      className="w-10 h-10 md:w-15 md:h-15 flex items-center justify-center rounded-full bg-gray-500/5 hover:text-black hover:bg-white transition-all duration-500 hover:-translate-y-1"
                    >
                      <i aria-hidden="true" className="bi bi-github text-xl md:text-3xl"></i>
                    </Link>
                  </div>
                </div>

                <div className="relative work-image order-1 md:order-2">
                  <Image
                    src={project.img}
                    alt={`${project.title} screenshot`}
                    width={650}
                    height={300}
                    className="project-img rounded-lg shadow-lg hover:shadow-[var(--primary-color)]/10 transition-shadow duration-500 w-full"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}

          <div className="flex gap-2 md:gap-3 justify-end mt-4 md:mt-6">
            <button
              type="button"
              aria-label="Previous project"
              id={`${swiperId}-previous`}
              onClick={() => swiperRef.current?.slidePrev()}
              className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-[color:var(--primary-color)] text-white rounded-lg shadow hover:bg-white hover:text-black hover:-translate-y-0.5 cursor-pointer transition-all duration-500"
            >
              <i aria-hidden="true" className="bi bi-arrow-left text-xl md:text-2xl"></i>
            </button>
            <button
              type="button"
              aria-label="Next project"
              id={`${swiperId}-next`}
              onClick={() => swiperRef.current?.slideNext()}
              className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-[color:var(--primary-color)] text-white rounded-lg shadow hover:bg-white hover:text-black hover:-translate-y-0.5 cursor-pointer transition-all duration-500"
            >
              <i aria-hidden="true" className="bi bi-arrow-right text-xl md:text-2xl"></i>
            </button>
          </div>
        </Swiper>
      </div>
    </section>
  );
}
