"use client";
import React from "react";
import SectionTitle from "./SectionTitle";
import { useAnimateIn } from "@/lib/useScrollReveal";
import { useLanguage } from "@/lib/LanguageContext";

export default function ServicesSection() {
  const { t } = useLanguage();
  const { ref, isVisible } = useAnimateIn("up");

  return (
    <section
      id="services"
      className="relative py-24 px-[8%] lg:px-[16%] text-white overflow-hidden"
    >
      {/* Background transition accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--primary-color)]/[0.02] to-transparent pointer-events-none"></div>

      <SectionTitle
        label={t.services.label}
        title={t.services.title}
        subtitle={t.services.subtitle}
      />

      <div
        ref={ref as React.RefObject<HTMLDivElement>}
        className={`grid grid-cols-1 md:grid-cols-2 gap-10 transition-all duration-700 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      >
        {t.services.items.map((service, index) => (
          <div
            key={index}
            className="service-card group py-4 px-10 border border-gray-800 rounded-xl transition-all duration-500 cursor-pointer hover:border-[--primary-color] hover:shadow-lg hover:shadow-[var(--primary-color)]/5 hover:-translate-y-1"
            style={{ transitionDelay: `${index * 100}ms` }}
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-4xl stroke-text font-bold text-gray-400 transition-colors duration-300 group-hover:text-[--primary-color]">
                {service.id}
              </h3>
              <div className="w-13 h-13 flex items-center justify-center rounded-full bg-white text-black transition-all duration-300 group-hover:bg-[var(--primary-color)] group-hover:text-white group-hover:rotate-45">
                <i className="bi bi-arrow-up-right text-2xl"></i>
              </div>
            </div>

            <h2 className="text-3xl font-normal font-unbounded mb-5 transition-colors duration-300 group-hover:text-[var(--primary-color)]">
              {service.title}
            </h2>

            <p className="text-gray-400 text-normal">{service.description}</p>
            <div className="border-t border-gray-700 group-hover:border-[var(--primary-color)] mt-5 duration-300"></div>
          </div>
        ))}
      </div>
    </section>
  );
}
