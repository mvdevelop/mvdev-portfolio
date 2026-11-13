"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { CountUp } from "countup.js";
import Image from "next/image";
import { FaGithub, FaLinkedin, FaInstagram, FaArrowRight, FaDownload } from "react-icons/fa";
import { siteConfig } from "@/lib/site-config";
import { useLanguage } from "@/lib/LanguageContext";
import { ButtonLink } from "@/components/ui/Button";
import ResumeLink from "@/components/ResumeLink";

type GitHubStatsResponse = {
  totalCommits: number;
  publicRepos: number;
  source: "github" | "fallback";
};

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
  const experienceYears = 3; // Fixed at 3+ as per portfolio positioning

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
  }, [loading, totalCommits, completedProjects, statsData]);

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center text-white py-0 relative overflow-hidden"
      aria-labelledby="hero-title"
    >
      {/* Animated Background Blobs */}
      <div className="absolute top-0 left-0 w-[300px] h-[300px] rounded-full bg-gradient-to-r from-[var(--primary-color)]/5 to-transparent blur-[100px] -z-10 animate-pulse-slow"></div>
      <div className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full bg-gradient-to-r from-[var(--primary-color)]/5 to-transparent blur-[120px] -z-10 animate-pulse-slower"></div>
      <div className="absolute bottom-0 left-[20%] w-[500px] h-[500px] rounded-full bg-gradient-to-r from-[var(--primary-color)]/5 to-transparent blur-[100px] -z-10 animate-pulse-slow"></div>

      <div className="flex pt-28 md:pt-32 lg:pt-0 flex-col lg:flex-row items-center justify-between px-[5%] md:px-[8%] lg:px-[12%] xl:px-[16%] flex-1">
        {/* Left Content */}
        <div className="lg:w-1/2 text-start md:text-left mb-10 lg:mb-0">
          {/* Role Badge */}
          <p className="text-sm font-semibold text-[var(--primary-color)] uppercase tracking-wider mb-3">
            {t.hero.role}
          </p>

          <h1 id="hero-title" className="text-4xl md:text-5xl lg:text-6xl font-unbounded font-normal mb-4 leading-tight">
            {t.hero.greeting}{" "}
            <span className="text-[color:var(--primary-color)]">
              {t.hero.name}
            </span>
          </h1>

          <p className="text-gray-400 text-base md:text-lg lg:text-xl font-sora my-6 lg:my-8 leading-relaxed">
            {t.hero.descParts.map((part, index) => {
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
          <div className="flex flex-wrap gap-3 md:gap-4 items-center mb-8">
            <ButtonLink href="#contact">
              {t.hero.contactCta}
              <FaArrowRight className="ms-2" aria-hidden="true" />
            </ButtonLink>
            <ButtonLink href="#work" variant="secondary">
              {t.hero.viewProjects}
            </ButtonLink>
            <ResumeLink
              className="px-4 py-3 font-semibold text-gray-400 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary-color)]"
            >
              <FaDownload className="me-2" aria-hidden="true" />
              {t.hero.downloadCV}
            </ResumeLink>
          </div>

          <div className="flex hero-social gap-3 text-2xl md:text-3xl">
            <Link
              href={siteConfig.socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center w-10 h-10 rounded-full border border-[var(--primary-color)] text-[var(--primary-color)] hover:bg-[var(--primary-color)] hover:text-white transition-all duration-300"
              aria-label="GitHub profile"
            >
              <FaGithub size={20} />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link
              href={siteConfig.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center w-10 h-10 rounded-full border border-[var(--primary-color)] text-[var(--primary-color)] hover:bg-[var(--primary-color)] hover:text-white transition-all duration-300"
              aria-label="LinkedIn profile"
            >
              <FaLinkedin size={20} />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link
              href={siteConfig.socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center w-10 h-10 rounded-full border border-[var(--primary-color)] text-[var(--primary-color)] hover:bg-[var(--primary-color)] hover:text-white transition-all duration-300"
              aria-label="Instagram profile"
            >
              <FaInstagram size={20} />
              <span className="sr-only">Instagram</span>
            </Link>
          </div>
        </div>

        {/* Right Image */}
        <div className="lg:w-1/2 w-full mt-8 lg:mt-0 flex justify-center relative">
          <div className="relative rounded-full flex items-center justify-center w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
            <div className="relative hero-image w-full h-full rounded-full overflow-hidden bg-gradient-to-r from-[var(--hero-image-from)] to-[var(--hero-image-to)]">
              <Image
                src="/images/mvdevelop.jpeg"
                alt="Vinicius Dilly - Full Stack Developer"
                width={320}
                height={320}
                className="w-full h-full object-cover rounded-full"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div
        className="stats px-[5%] md:px-[8%] lg:px-[12%] xl:px-[16%] mt-10 lg:mt-0 pb-10 grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-y-6"
        aria-busy={loading}
        role="region"
        aria-label="Statistics"
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
          <div key={index} className="flex flex-col md:flex-row gap-2 items-start md:items-center">
            <h2
              ref={(el) => {
                if (el) countRefs.current[index] = el;
              }}
              className="text-3xl md:text-4xl lg:text-5xl font-unbounded font-bold"
              aria-live="polite"
            >
              0
            </h2>
            <p className="text-sm md:text-base lg:text-xl ps-0 md:ps-4 text-gray-400 font-semibold whitespace-pre-line md:whitespace-normal">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
