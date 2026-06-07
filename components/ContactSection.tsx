"use client";
import React from "react";
import {
  BiPhone,
  BiEnvelope,
  BiMap,
  BiTime,
  BiMessageDetail,
  BiGlobe,
} from "react-icons/bi";
import SectionTitle from "./SectionTitle";
import { useAnimateIn } from "@/lib/useScrollReveal";
import { useLanguage } from "@/lib/LanguageContext";

const iconMap = {
  phone: <BiPhone size={20} />,
  email: <BiEnvelope size={20} />,
  map: <BiMap size={20} />,
  time: <BiTime size={20} />,
  message: <BiMessageDetail size={20} />,
  globe: <BiGlobe size={20} />,
} as const;

export default function ContactSection() {
  const { t } = useLanguage();
  const { ref, isVisible } = useAnimateIn("up");

  return (
    <section
      id="contact"
      className="relative py-24 px-[8%] lg:px-[16%] text-white overflow-hidden"
    >
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--primary-color)]/[0.02] to-transparent pointer-events-none"></div>

      <SectionTitle
        label={t.contact.label}
        title={t.contact.title}
        subtitle={t.contact.subtitle}
      />

      <div
        ref={ref as React.RefObject<HTMLDivElement>}
        className={`grid lg:grid-cols-2 gap-12 w-full transition-all duration-700 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      >
        {/* Contact Form */}
        <div className="bg-gray-500/5 p-8 rounded-xl shadow-lg border border-gray-800/50 hover:border-[var(--primary-color)]/20 transition-all duration-500">
          <h2 className="text-2xl font-unbounded font-normal text-[color:var(--primary-color)] mb-6">
            {t.contact.formTitle}
          </h2>

          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder={t.contact.firstName}
                className="w-full bg-[#0e0f12] border border-gray-700 rounded-lg px-4 py-4 text-sm focus:outline-none focus:border-[var(--primary-color)] focus:ring-1 focus:ring-[var(--primary-color)]/30 transition-all duration-500"
              />
              <input
                type="text"
                placeholder={t.contact.lastName}
                className="w-full bg-[#0e0f12] border border-gray-700 rounded-lg px-4 py-4 text-sm focus:outline-none focus:border-[var(--primary-color)] focus:ring-1 focus:ring-[var(--primary-color)]/30 transition-all duration-500"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="email"
                placeholder={t.contact.email}
                className="w-full bg-[#0e0f12] border border-gray-700 rounded-lg px-4 py-4 text-sm focus:outline-none focus:border-[var(--primary-color)] focus:ring-1 focus:ring-[var(--primary-color)]/30 transition-all duration-500"
              />
              <input
                type="tel"
                placeholder={t.contact.phone}
                className="w-full bg-[#0e0f12] border border-gray-700 rounded-lg px-4 py-4 text-sm focus:outline-none focus:border-[var(--primary-color)] focus:ring-1 focus:ring-[var(--primary-color)]/30 transition-all duration-500"
              />
            </div>
            <select className="w-full bg-[#0e0f12] border border-gray-700 rounded-lg px-4 py-4 text-sm focus:outline-none focus:border-[var(--primary-color)] focus:ring-1 focus:ring-[var(--primary-color)]/30 transition-all duration-500 appearance-none">
              <option>{t.contact.selectService}</option>
              {t.contact.serviceOptions.map((opt, i) => (
                <option key={i}>{opt}</option>
              ))}
            </select>

            <textarea
              rows={4}
              placeholder={t.contact.message}
              className="w-full bg-[#0e0f12] border border-gray-700 rounded-lg px-4 py-4 text-sm focus:outline-none focus:border-[var(--primary-color)] focus:ring-1 focus:ring-[var(--primary-color)]/30 transition-all duration-500 resize-none"
            ></textarea>

            <button
              type="submit"
              className="bg-[var(--primary-color)] hover:bg-white text-white hover:text-black px-8 py-3 rounded-lg font-semibold transition-all duration-500 cursor-pointer hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[var(--primary-color)]/20"
            >
              {t.contact.send}
              <i className="bi bi-send ms-2"></i>
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col justify-center gap-2">
          {t.contact.info.map((item, index) => (
            <div
              key={index}
              className="contact-col flex items-center space-x-4 border-b border-gray-800 pb-5 hover:border-[var(--primary-color)]/30 transition-all duration-500 group"
            >
              <span className="bg-[#1a1b1f] p-4 border border-gray-700 group-hover:border-[var(--primary-color)] rounded-lg text-[color:var(--primary-color)] transition-all duration-500 group-hover:shadow-lg group-hover:shadow-[var(--primary-color)]/10">
                {iconMap[item.icon as keyof typeof iconMap]}
              </span>
              <div>
                <p className="text-sm text-gray-400">{item.label}</p>
                <p className="font-medium text-white">{item.value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
