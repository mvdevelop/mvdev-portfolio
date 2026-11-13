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
      className="relative py-20 md:py-24 px-[5%] md:px-[8%] lg:px-[12%] xl:px-[16%] text-white overflow-hidden"
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
        className={`grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 transition-all duration-700 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
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
                      ? "bg-[var(--primary-color)] text-white shadow-lg shadow-[var(--primary-color)]/20"
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
          <h2 className="text-2xl md:text-3xl font-unbounded font-bold mb-4 md:mb-6 text-[var(--primary-color)]">
            {tabLabel}
          </h2>

          {activeTab === "experience" && (
            <div className="md:max-h-[400px] lg:max-h-[500px] md:overflow-y-auto md:pr-2 custom-scrollbar">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                {content.experience.map((exp, index) => (
                  <div
                    key={index}
                    className="bg-gray-500/5 hover:bg-gray-500/10 border border-gray-800 rounded-lg px-4 md:px-5 py-4 md:py-6 hover:border-[var(--primary-color)] transition-all duration-500 cursor-pointer hover:-translate-y-1 hover:shadow-lg hover:shadow-[var(--primary-color)]/5"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <h3 className="text-[color:var(--primary-color)] font-semibold text-sm md:text-base my-1 md:my-2">
                      {exp.date}
                    </h3>
                    <h4 className="text-xl md:text-2xl font-normal font-unbounded mb-1">
                      {exp.role}
                    </h4>
                    <p className="text-gray-400 flex items-center text-xs md:text-sm mt-2">
                      <span className="text-[color:var(--primary-color)] text-lg md:text-2xl pe-2">
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
                          className="text-xs text-[var(--primary-color)] bg-[var(--primary-color)]/10 px-2 py-1 rounded"
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
            <div className="md:max-h-[400px] lg:max-h-[500px] md:overflow-y-auto md:pr-2 custom-scrollbar">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                {content.education.map((edu, index) => (
                  <div
                    key={index}
                    className="bg-gray-500/5 hover:bg-gray-500/10 border border-gray-800 rounded-lg px-4 md:px-5 py-4 md:py-6 hover:border-[var(--primary-color)] transition-all duration-500 cursor-pointer hover:-translate-y-1 hover:shadow-lg hover:shadow-[var(--primary-color)]/5"
                  >
                    <h3 className="text-[color:var(--primary-color)] font-semibold text-sm md:text-base my-1 md:my-2">
                      {edu.year}
                    </h3>
                    <h4 className="text-xl md:text-2xl font-normal font-unbounded mb-1">
                      {edu.degree}
                    </h4>
                    <p className="text-gray-400 flex items-center text-xs md:text-sm mt-2">
                      <span className="text-[color:var(--primary-color)] text-lg md:text-2xl pe-2">
                        &bull;
                      </span>{" "}
                      {edu.institute}
                    </p>
                    <span className={`inline-block mt-2 text-xs px-2 py-1 rounded ${
                      edu.type === "academic" ? "bg-blue-500/20 text-blue-400" :
                      edu.type === "course" ? "bg-green-500/20 text-green-400" :
                      "bg-purple-500/20 text-purple-400"
                    }`}>
                      {edu.type === "academic" ? "Degree" : edu.type === "course" ? "Course" : "Language"}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "skills" && (
            <div className="space-y-6 md:space-y-8">
              {content.skills.map((group) => (
                <div key={group.category}>
                  <h3 className="mb-3 md:mb-4 text-lg md:text-xl font-semibold text-[var(--primary-color)]">{group.category}</h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                    {group.items.map((skill) => (
                      <li key={skill.name} className="rounded-lg border border-[var(--border-color)] bg-[var(--surface-muted)] p-3 md:p-5">
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
