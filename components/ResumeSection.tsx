"use client";
import React, { useState } from "react";
import SectionTitle from "./SectionTitle";
import { resumeTabIds, type ResumeTabId, resumeContent } from "@/lib/content";
import { useAnimateIn } from "@/lib/useScrollReveal";
import { useLanguage } from "@/lib/LanguageContext";

export default function ResumeSection() {
  const { t, language } = useLanguage();
  const [activeTab, setActiveTab] = useState<ResumeTabId>("experience");
  const tabs = t.resume.tabs;
  const content = resumeContent[language];
  const { ref, isVisible } = useAnimateIn("up");

  const getTabLabel = (tabId: ResumeTabId) =>
    tabs[resumeTabIds.indexOf(tabId)];

  const tabLabel = getTabLabel(activeTab);

  return (
    <section
      id="resume"
      className="relative bg-[#0F172A] px-6 py-14 text-white md:px-12 md:py-24 lg:px-16 overflow-hidden"
      aria-labelledby="resume-title"
    >
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--primary-color)]/[0.02] to-transparent pointer-events-none"></div>

      <SectionTitle
        label={t.resume.label}
        title={t.resume.title}
        subtitle={t.resume.subtitle}
      />

      <div
        ref={ref as React.RefObject<HTMLDivElement>}
        className={`mx-auto max-w-[1200px] grid grid-cols-1 md:grid-cols-[35%_65%] gap-8 md:gap-12 transition-all duration-700 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      >
        {/* Left Sidebar */}
        <div>
          <h2 id="why-hire-heading" className="text-2xl md:text-3xl font-unbounded font-bold mb-3 md:mb-4">
            {t.resume.whyHire}
          </h2>
          <p className="text-gray-400 text-sm md:text-base mt-4 md:mt-6 mb-8 md:mb-10">{t.resume.whyHireDesc}</p>
          <div className="flex flex-col gap-3 md:gap-5" role="tablist" aria-label={t.resume.title}>
            {tabs.map((tab, index) => {
              const tabId = resumeTabIds[index];

              return (
                <button
                  key={tabId}
                  type="button"
                  id={`resume-tab-${tabId}`}
                  onClick={() => setActiveTab(tabId)}
                  aria-selected={activeTab === tabId}
                  role="tab"
                  aria-controls={`resume-panel-${tabId}`}
                  className={`px-4 md:px-6 py-3 md:py-4 text-left rounded-md font-semibold transition-all duration-300 cursor-pointer text-sm md:text-base ${
                    activeTab === tabId
                      ? "bg-[#007bff] text-white shadow-lg shadow-[#007bff]/20"
                      : "bg-gray-500/5 text-gray-400 hover:bg-gray-500/20 hover:text-white"
                  }`}
                >
                  {tab}
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Content */}
        <div
          id={`resume-panel-${activeTab}`}
          className="md:col-span-2"
          role="tabpanel"
          aria-labelledby={`resume-tab-${activeTab}`}
        >
          <h2 className="text-2xl md:text-3xl font-unbounded font-bold mb-4 md:mb-6 text-[#F8FAFC]">
            {tabLabel}
          </h2>

          {activeTab === "experience" && (
            <div className="md:pr-2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                {content.experience.map((exp, index) => (
                  <div
                    key={index}
                    className="bg-gray-500/5 hover:bg-gray-500/10 border border-[#232C3F] rounded-lg px-4 md:px-5 py-4 md:py-6 hover:border-[#F8FAFC]/40 transition-all duration-500 cursor-pointer hover:-translate-y-1 hover:shadow-lg hover:shadow-[rgba(248,250,252,0.2)]"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <h3 className="text-[#F8FAFC] font-semibold text-sm md:text-base my-1 md:my-2">
                      {exp.date}
                    </h3>
                    <h4 className="text-xl md:text-2xl font-normal font-unbounded mb-1">
                      {exp.role}
                    </h4>
                    <p className="text-gray-400 flex items-center text-xs md:text-sm mt-2">
                      <span className="text-[#F8FAFC] text-lg md:text-2xl pe-2">
                        &bull;
                      </span>{" "}
                      {exp.company}
                    </p>
                    <p className="text-gray-500 text-xs mt-1">{exp.location}</p>
                    <p className="text-gray-400 text-xs md:text-sm mt-3 line-clamp-3">{exp.description}</p>
                    <div className="flex flex-wrap gap-1 md:gap-2 mt-3">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs text-[#F8FAFC] bg-[var(--primary-color)]/10 px-2 py-1 rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "education" && (
            <div className="md:pr-2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                {content.education.map((edu, index) => (
                  <div
                    key={index}
                    className="bg-gray-500/5 hover:bg-gray-500/10 border border-[#232C3F] rounded-lg px-4 md:px-5 py-4 md:py-6 hover:border-[#F8FAFC]/40 transition-all duration-500 cursor-pointer hover:-translate-y-1 hover:shadow-lg hover:shadow-[rgba(248,250,252,0.2)]"
                  >
                    <h3 className="text-[#F8FAFC] font-semibold text-sm md:text-base my-1 md:my-2">
                      {edu.year}
                    </h3>
                    <h4 className="text-xl md:text-2xl font-normal font-unbounded mb-1">
                      {edu.degree}
                    </h4>
                    <p className="text-gray-400 flex items-center text-xs md:text-sm mt-2">
                      <span className="text-[#F8FAFC] text-lg md:text-2xl pe-2">
                        &bull;
                      </span>{" "}
                      {edu.institute}
                    </p>
                    <div className="flex items-center gap-2 mt-2">
                      <span className={`text-xs px-2 py-1 rounded ${
                        edu.type === "academic" ? "bg-blue-500/20 text-blue-400" :
                        edu.type === "course" ? "bg-[#F8FAFC]/15 text-[#F8FAFC] border border-[#F8FAFC]/25" :
                        "bg-purple-500/20 text-purple-400"
                      }`}>
                        {edu.type === "academic"
                          ? (language === "pt" ? "Graduação" : "Degree")
                          : edu.type === "course"
                            ? (language === "pt" ? "Curso" : "Course")
                            : (language === "pt" ? "Idioma" : "Language")}
                      </span>
                      {edu.free && (
                        <span className="text-xs px-2 py-1 rounded bg-[#F8FAFC]/15 text-[#F8FAFC] border border-[#F8FAFC]/25 font-medium">
                          {language === "pt" ? "Curso Gratuito" : "Free Course"}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "skills" && (
            <div className="space-y-6 md:space-y-8">
              {content.skills.map((group) => (
                <div key={group.category}>
                  <h3 className="mb-3 md:mb-4 text-lg md:text-xl font-semibold text-[#F8FAFC]">{group.category}</h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                    {group.items.map((skill) => (
                      <li key={skill.name} className="rounded-lg border border-[#232C3F] bg-[#141A28] p-3 md:p-5 transition-all duration-300 hover:border-[#F8FAFC]/40 hover:bg-[#202938]">
                        <h4 className="font-semibold text-white text-sm md:text-base">{skill.name}</h4>
                        <p className="mt-1 md:mt-2 text-xs md:text-sm text-gray-400">{skill.description}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}

          {activeTab === "about" && (
            <div className="text-gray-400 space-y-3 md:space-y-4 animate-fade-in">
              <p className="text-sm md:text-base leading-relaxed whitespace-pre-line">
                {content.about.join("\n")}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
