"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { CountUp } from "countup.js";
import Image from "next/image";
import { siteConfig } from "@/lib/site-config";
import { useLanguage } from "@/lib/LanguageContext";
import { ButtonLink } from "@/components/ui/Button";

type GitHubStatsResponse = {
  totalCommits: number;
  publicRepos: number;
  source: "github" | "fallback";
};

// Calculate years of experience from September 2023
const EXPERIENCE_START = new Date("2023-09-01");

function getExperienceYears(): number {
  const now = new Date();
  const diffYears = (now.getTime() - EXPERIENCE_START.getTime()) / (1000 * 60 * 60 * 24 * 365.25);
  return Math.floor(diffYears) + 1; // Show "+ Years" format
}

export default function HeroSection() {
  const { t } = useLanguage();
  const [totalCommits, setTotalCommits] = useState<number>(
    siteConfig.stats.githubFallback.totalCommits,
  );
  const [completedProjects, setCompletedProjects] = useState<number>(
    siteConfig.stats.githubFallback.publicRepos,
  );
  const [loading, setLoading] = useState(true);
  const [statsSource, setStatsSource] = useState<"github" | "fallback">("fallback");
  const [statsError, setStatsError] = useState(false);
  const experienceYears = getExperienceYears();

  const statsData = [
    { value: experienceYears, label: t.hero.stats.experience },
    { value: completedProjects, label: t.hero.stats.completed },
    { value: siteConfig.stats.technologies, label: t.hero.stats.technologies },
    { value: totalCommits, label: t.hero.stats.commits },
  ];

  const countRefs = useRef<(HTMLHeadingElement | null)[]>([]);

  useEffect(() => {
    async function getGitHubData() {
      try {
        const response = await fetch("/data");
        if (response.ok) {
          const data = (await response.json()) as GitHubStatsResponse;
          setTotalCommits(data.totalCommits);
          setCompletedProjects(data.publicRepos);
          setStatsSource(data.source);
        }
      } catch (err) {
        console.error("Failed to fetch GitHub stats:", err);
        setStatsError(true);
      } finally {
        setLoading(false);
      }
    }
    getGitHubData();
  }, []);

  useEffect(() => {
    if (loading) return;
    countRefs.current.forEach((el, index) => {
      if (el) {
        const countUP = new CountUp(el, statsData[index].value, {
          duration: 3,
          separator: ",",
        });
        if (!countUP.error) {
          countUP.start();
        } else {
          console.error(countUP.error);
        }
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading, totalCommits, completedProjects]);

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center text-white py-0 relative overflow-hidden"
    >
      {/* Animated Background Blobs */}
      <div className="absolute top-0 left-0 w-[300px] h-[300px] rounded-full bg-gradient-to-r from-[var(--primary-color)]/5 to-transparent blur-[100px] -z-10 animate-pulse-slow"></div>
      <div className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full bg-gradient-to-r from-[var(--primary-color)]/5 to-transparent blur-[120px] -z-10 animate-pulse-slower"></div>
      <div className="absolute bottom-0 left-[20%] w-[500px] h-[500px] rounded-full bg-gradient-to-r from-[var(--primary-color)]/5 to-transparent blur-[100px] -z-10 animate-pulse-slow"></div>

      <div className="flex pt-32 lg:pt-0 flex-col lg:flex-row items-center justify-between px-[8%] lg:px-[16%] flex-1">
        {/* Left Content */}
        <div className="lg:w-1/2 text-start md:text-left">
          {/* Role Badge */}
          <p className="text-sm font-semibold text-[var(--primary-color)] uppercase tracking-wider mb-3">
            {t.hero.role}
          </p>

          <h1 className="text-5xl md:text-6xl font-unbounded font-normal mb-4 leading-tight">
            {t.hero.greeting}{" "}
            <span className="text-[color:var(--primary-color)]">
              {t.hero.name}
            </span>
          </h1>

          <p className="text-gray-400 text-lg lg:text-xl font-sora my-8 leading-relaxed">
            {t.hero.descParts.map((part, index) => {
              // Highlight key technologies
              const isHighlighted = part.includes("C#") ||
                                   part.includes(".NET") ||
                                   part.includes("TypeScript") ||
                                   part.includes("React");
              return isHighlighted ? (
                <span key={index} className="text-[color:var(--primary-color)] font-semibold">
                  {part}
                </span>
              ) : (
                <span key={index}>{part}</span>
              );
            })}
          </p>

          {/* Primary actions */}
          <div className="flex flex-wrap gap-4 items-center mb-8">
            <ButtonLink href="#contact">
              {t.hero.contactCta}
              <i aria-hidden="true" className="bi bi-arrow-up-right ms-2"></i>
            </ButtonLink>
            <ButtonLink href="#work" variant="secondary">
              {t.hero.viewProjects}
            </ButtonLink>
            <Link
              href={siteConfig.resume.en}
              download
              className="inline-flex items-center px-2 py-3 font-semibold text-gray-400 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary-color)]"
            >
              <i aria-hidden="true" className="bi bi-download me-2"></i>
              {t.hero.downloadCV}
            </Link>
          </div>

          <div className="flex hero-social gap-2 text-3xl">
            <Link
              href={siteConfig.socialLinks.github}
              target="_blank"
              className="group"
            >
              <i aria-hidden="true" className="bi bi-github cursor-pointer"></i>
              <span className="sr-only">GitHub</span>
            </Link>
            <Link
              href={siteConfig.socialLinks.linkedin}
              target="_blank"
              className="group"
            >
              <i aria-hidden="true" className="bi bi-linkedin cursor-pointer"></i>
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link
              href={siteConfig.socialLinks.instagram}
              target="_blank"
              className="group"
            >
              <i aria-hidden="true" className="bi bi-instagram cursor-pointer"></i>
              <span className="sr-only">Instagram</span>
            </Link>
          </div>
        </div>

        {/* Right Image */}
        <div className="lg:w-1/2 w-full mt-10 lg:mt-0 flex justify-center relative">
          <div className="relative rounded-full flex items-center justify-center">
            <div className="relative hero-image w-full h-full rounded-full overflow-hidden bg-gradient-to-r from-[var(--hero-image-from)] to-[var(--hero-image-to)]">
              <Image
                src="/images/mvdevelop.jpeg"
                alt="Portfolio Picture"
                width={320}
                height={320}
                className="w-80 h-80 object-cover rounded"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div
        className="stats px-[8%] lg:px-[16%] mt-10 lg:mt-0 pb-10 grid grid-cols-2 lg:grid-cols-4 gap-y-6"
        aria-busy={loading}
      >
        {statsError && (
          <p role="status" className="col-span-full text-sm text-gray-500">
            Showing cached GitHub statistics.
          </p>
        )}
        {statsSource === "fallback" && !statsError && (
          <p role="status" className="col-span-full text-sm text-gray-500">
            GitHub statistics may be approximate.
          </p>
        )}
        {statsData.map((stat, index) => (
          <div key={index} className="flex gap-2 items-center">
            <h1
              ref={(el) => {
                if (el) countRefs.current[index] = el;
              }}
              className="text-5xl font-unbounded font-bold"
            >
              0
            </h1>
            <p className="text-xl ps-4 text-gray-400 font-semibold whitespace-pre-line">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
