"use client";
import React, { useState } from "react";
import {
  SiDocker,
  SiMongodb,
  SiNodedotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiDotnet,
  SiLinux,
  SiBlazor,
} from "react-icons/si";
import { BsDatabaseFill } from "react-icons/bs";
import { TbBrandCSharp } from "react-icons/tb";
import { FaCloud } from "react-icons/fa";
import SectionTitle from "./SectionTitle";
import { resumeTabIds, skills, type ResumeTabId } from "@/lib/content";
import { useAnimateIn } from "@/lib/useScrollReveal";
import { useLanguage } from "@/lib/LanguageContext";

export default function ResumeSection() {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<ResumeTabId>("experience");
  const tabs = t.resume.tabs;
  const { ref, isVisible } = useAnimateIn("up");

  const getTabLabel = (tabId: ResumeTabId) =>
    tabs[resumeTabIds.indexOf(tabId)];

  const tabLabel = getTabLabel(activeTab);

  const skillIcons = {
    typescript: <SiTypescript />,
    react: <SiReact />,
    tailwind: <SiTailwindcss />,
    nodejs: <SiNodedotjs />,
    csharp: <TbBrandCSharp />,
    dotnet: <SiDotnet />,
    mongodb: <SiMongodb />,
    sql: <BsDatabaseFill />,
    docker: <SiDocker />,
    linux: <SiLinux />,
    cloud: <FaCloud />,
    blazor: <SiBlazor />,
  } as const;

  const aboutHighlights = [1, 3, 5, 7, 9, 11, 13, 15, 17];

  return (
    <section
      id="resume"
      className="relative py-24 px-[8%] lg:px-[16%] text-white overflow-hidden"
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
        className={`grid grid-cols-1 md:grid-cols-3 gap-12 transition-all duration-700 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      >
        {/* Left Sidebar */}
        <div>
          <h2 className="text-3xl font-unbounded font-bold mb-4">
            {t.resume.whyHire}
          </h2>
          <p className="text-gray-400 mt-6 mb-10">{t.resume.whyHireDesc}</p>
          <div className="flex flex-col gap-5" role="tablist" aria-label={t.resume.title}>
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
                  className={`px-6 py-4 text-left rounded-md font-semibold transition-all duration-300 cursor-pointer ${
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
          <h2 className="text-3xl font-unbounded font-bold mb-4 text-[var(--primary-color)]">
            {tabLabel}
          </h2>

          {activeTab === "experience" && (
            <div className="md:max-h-[500px] md:overflow-y-auto md:pr-2 md:custom-scrollbar">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {t.resume.experiences.map((exp, index) => (
                  <div
                    key={index}
                    className="bg-gray-500/5 hover:bg-gray-500/10 border border-gray-800 rounded-lg px-5 py-6 hover:border-[var(--primary-color)] transition-all duration-500 cursor-pointer hover:-translate-y-1 hover:shadow-lg hover:shadow-[var(--primary-color)]/5"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <h3 className="text-[color:var(--primary-color)] font-semibold my-2">
                      {exp.date}
                    </h3>
                    <h4 className="text-2xl font-normal font-unbounded mb-1">
                      {exp.role}
                    </h4>
                    <p className="text-gray-400 flex items-center text-sm mt-2">
                      <span className="text-[color:var(--primary-color)] text-2xl pe-2">
                        &bull;
                      </span>{" "}
                      {exp.company}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "education" && (
            <div className="md:max-h-[500px] md:overflow-y-auto md:pr-2 md:custom-scrollbar">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {t.resume.educations.map((edu, index) => (
                  <div
                    key={index}
                    className="bg-gray-500/5 hover:bg-gray-500/10 border border-gray-800 rounded-lg px-5 py-6 hover:border-[var(--primary-color)] transition-all duration-500 cursor-pointer hover:-translate-y-1 hover:shadow-lg hover:shadow-[var(--primary-color)]/5"
                  >
                    <h3 className="text-[color:var(--primary-color)] font-semibold my-2">
                      {edu.year}
                    </h3>
                    <h4 className="text-2xl font-normal font-unbounded mb-1">
                      {edu.degree}
                    </h4>
                    <p className="text-gray-400 flex items-center text-sm mt-2">
                      <span className="text-[color:var(--primary-color)] text-2xl pe-2">
                        &bull;
                      </span>{" "}
                      {edu.institute}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "skills" && (
            <ul className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-gray-200 mt-4">
              {skills.map((skill, index) => (
                <li
                  key={index}
                  className="relative cursor-pointer bg-gray-500/5 rounded-lg py-9 flex flex-col items-center group border border-transparent hover:border-[var(--primary-color)]/30 transition-all duration-500 hover:shadow-lg hover:shadow-[var(--primary-color)]/5"
                >
                  <i
                    aria-hidden="true"
                    className="text-5xl group-hover:text-[color:var(--primary-color)] transition-all duration-500 group-hover:scale-110"
                  >
                    {skillIcons[skill.id]}
                  </i>
                  <span className="mt-3 text-sm text-gray-300 text-center">
                    {skill.name}
                  </span>
                </li>
              ))}
            </ul>
          )}

          {activeTab === "about" && (
            <div className="text-gray-400 space-y-4 animate-fade-in">
              <p className="text-normal leading-relaxed whitespace-pre-line">
                {t.resume.aboutParts.map((part, index) =>
                  aboutHighlights.includes(index) ? (
                    <span
                      key={index}
                      className="text-[color:var(--primary-color)] font-semibold"
                    >
                      {part}
                    </span>
                  ) : (
                    <React.Fragment key={index}>{part}</React.Fragment>
                  )
                )}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
