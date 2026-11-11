"use client";
import React from "react";
import SectionTitle from "./SectionTitle";
import { useAnimateIn } from "@/lib/useScrollReveal";
import { useLanguage } from "@/lib/LanguageContext";
import Card from "@/components/ui/Card";

export default function ServicesSection() {
  const { t } = useLanguage();
  const { ref, isVisible } = useAnimateIn("up");

  return (
    <section id="services" className="relative overflow-hidden px-[8%] py-24 text-white lg:px-[16%]">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-[var(--primary-color)]/[0.02] to-transparent" />
      <SectionTitle label={t.services.label} title={t.services.title} subtitle={t.services.subtitle} />
      <div ref={ref as React.RefObject<HTMLDivElement>} className={`grid grid-cols-1 gap-10 transition-all duration-700 ease-out md:grid-cols-2 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
        {t.services.items.map((service, index) => (
          <Card key={service.id} className="service-card group cursor-pointer px-10 py-4 transition-all duration-500 hover:-translate-y-1 hover:border-[var(--primary-color)] hover:shadow-lg hover:shadow-[var(--primary-color)]/5" style={{ transitionDelay: `${index * 100}ms` }}>
            <div className="mb-4 flex items-center justify-between">
              <h3 className="stroke-text text-4xl font-bold text-gray-400 transition-colors duration-300 group-hover:text-[var(--primary-color)]">{service.id}</h3>
              <div className="flex h-13 w-13 items-center justify-center rounded-full bg-white text-black transition-all duration-300 group-hover:rotate-45 group-hover:bg-[var(--primary-color)] group-hover:text-white">
                <i aria-hidden="true" className="bi bi-arrow-up-right text-2xl" />
              </div>
            </div>
            <h2 className="mb-5 font-unbounded text-3xl font-normal transition-colors duration-300 group-hover:text-[var(--primary-color)]">{service.title}</h2>
            <p className="text-gray-400">{service.description}</p>
            <div className="mt-5 border-t border-gray-700 duration-300 group-hover:border-[var(--primary-color)]" />
          </Card>
        ))}
      </div>
    </section>
  );
}
