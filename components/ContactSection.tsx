"use client";
import React, { useState } from "react";
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
  const [formError, setFormError] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormError("");

    const formData = new FormData(event.currentTarget);
    const firstName = String(formData.get("firstName") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();

    if (!firstName || !email || !message) {
      setFormError("Please fill in your name, email, and message.");
      return;
    }

    const subject = encodeURIComponent(`Portfolio contact from ${firstName}`);
    const body = encodeURIComponent(
      `${message}\n\nReply to: ${email}`
    );

    window.location.href = `mailto:marcosvmdilly@gmail.com?subject=${subject}&body=${body}`;
  };

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

          <form className="space-y-6" onSubmit={handleSubmit} noValidate>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="sr-only">
                  {t.contact.firstName}
                </label>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  placeholder={t.contact.firstName}
                  autoComplete="given-name"
                  className="w-full bg-[#0e0f12] border border-gray-700 rounded-lg px-4 py-4 text-sm focus:outline-none focus:border-[var(--primary-color)] focus:ring-1 focus:ring-[var(--primary-color)]/30 transition-all duration-500"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="sr-only">
                  {t.contact.lastName}
                </label>
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  placeholder={t.contact.lastName}
                  autoComplete="family-name"
                  className="w-full bg-[#0e0f12] border border-gray-700 rounded-lg px-4 py-4 text-sm focus:outline-none focus:border-[var(--primary-color)] focus:ring-1 focus:ring-[var(--primary-color)]/30 transition-all duration-500"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="email" className="sr-only">
                  {t.contact.email}
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder={t.contact.email}
                  autoComplete="email"
                  className="w-full bg-[#0e0f12] border border-gray-700 rounded-lg px-4 py-4 text-sm focus:outline-none focus:border-[var(--primary-color)] focus:ring-1 focus:ring-[var(--primary-color)]/30 transition-all duration-500"
                />
              </div>
              <div>
                <label htmlFor="phone" className="sr-only">
                  {t.contact.phone}
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder={t.contact.phone}
                  autoComplete="tel"
                  className="w-full bg-[#0e0f12] border border-gray-700 rounded-lg px-4 py-4 text-sm focus:outline-none focus:border-[var(--primary-color)] focus:ring-1 focus:ring-[var(--primary-color)]/30 transition-all duration-500"
                />
              </div>
            </div>
            <div>
              <label htmlFor="service" className="sr-only">
                {t.contact.selectService}
              </label>
              <select
                id="service"
                name="service"
                defaultValue=""
                className="w-full bg-[#0e0f12] border border-gray-700 rounded-lg px-4 py-4 text-sm focus:outline-none focus:border-[var(--primary-color)] focus:ring-1 focus:ring-[var(--primary-color)]/30 transition-all duration-500 appearance-none"
              >
                <option value="" disabled>
                  {t.contact.selectService}
                </option>
                {t.contact.serviceOptions.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="message" className="sr-only">
                {t.contact.message}
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                placeholder={t.contact.message}
                className="w-full bg-[#0e0f12] border border-gray-700 rounded-lg px-4 py-4 text-sm focus:outline-none focus:border-[var(--primary-color)] focus:ring-1 focus:ring-[var(--primary-color)]/30 transition-all duration-500 resize-none"
              ></textarea>
            </div>

            {formError && (
              <p role="alert" className="text-sm text-red-400">
                {formError}
              </p>
            )}

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
                {item.icon === "email" ? (
                  <a
                    href={`mailto:${item.value}`}
                    className="font-medium text-white hover:text-[var(--primary-color)] transition-colors"
                  >
                    {item.value}
                  </a>
                ) : item.icon === "phone" || item.icon === "message" ? (
                  <a
                    href={
                      item.icon === "message"
                        ? "https://wa.me/5521990506596"
                        : `tel:${item.value.replace(/[^\d+]/g, "")}`
                    }
                    target={item.icon === "message" ? "_blank" : undefined}
                    rel={item.icon === "message" ? "noopener noreferrer" : undefined}
                    className="font-medium text-white hover:text-[var(--primary-color)] transition-colors"
                  >
                    {item.value}
                  </a>
                ) : item.icon === "globe" ? (
                  <a
                    href="https://www.mvdevelop.com.br"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-white hover:text-[var(--primary-color)] transition-colors"
                  >
                    {item.value}
                  </a>
                ) : (
                  <p className="font-medium text-white">{item.value}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
