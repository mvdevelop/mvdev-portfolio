"use client";
import React, { useEffect, useRef, useState } from "react";
import { CountUp } from "countup.js";
import Link from "next/link";
import Image from "next/image";
import { useAnimateIn } from "@/lib/useScrollReveal";
import { useLanguage } from "@/lib/LanguageContext";

export default function HeroSection() {
  const { t } = useLanguage();
  const [totalCommits, setTotalCommits] = useState(797);
  const [completedProjects, setCompletedProjects] = useState(30);
  const [loading, setLoading] = useState(true);

  const statsData = [
    { value: 3, label: t.hero.stats.experience },
    { value: completedProjects, label: t.hero.stats.completed },
    { value: 12, label: t.hero.stats.technologies },
    { value: totalCommits, label: t.hero.stats.commits },
  ];

  const countRefs = useRef<(HTMLHeadingElement | null)[]>([]);
  const { ref: titleRef, isVisible: titleVisible } = useAnimateIn("up", 0);
  const { ref: imageRef, isVisible: imageVisible } = useAnimateIn("scale", 200);
  const { ref: statsRef, isVisible: statsVisible } = useAnimateIn("up", 300);

  useEffect(() => {
    async function getGitHubData() {
      try {
        const response = await fetch("/data");
        if (response.ok) {
          const data = await response.json();
          setTotalCommits(data.totalCommits);
          setCompletedProjects(data.publicRepos);
        }
      } catch (err) {
        console.error("Não foi possível buscar dados em tempo real:", err);
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
        <div
          ref={titleRef as React.RefObject<HTMLDivElement>}
          className={`lg:w-1/2 text-start md:text-left transition-all duration-700 ease-out ${titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <p className="text-lg mb-2 text-gray-400">{t.hero.role}</p>
          <h1 className="text-5xl text-start lg:text-6xl font-unbounded font-normal mb-2">
            {t.hero.greeting}{" "}
            <span className="text-[color:var(--primary-color)]">
              {t.hero.name}
            </span>
          </h1>
          <p className="text-gray-400 text-md lg:text-xl font-normal font-sora my-8">
            {t.hero.descParts[0]}
            <span className="text-[color:var(--primary-color)]">
              {t.hero.descParts[1]}
            </span>
            {t.hero.descParts[2]}
            <span className="text-[color:var(--primary-color)]">
              {t.hero.descParts[3]}
            </span>
            {t.hero.descParts[4]}
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-8 items-center">
            <Link
              href="/pdf/mvmd-en-resume.pdf"
              download
              className="group relative overflow-hidden border border-[var(--primary-color)] font-bold text-[var(--primary-color)] px-6 py-3 rounded-lg transition-all duration-500 hover:bg-[var(--primary-color)] hover:text-white"
            >
              <span className="relative z-10">
                <i className="bi bi-download me-2"></i> {t.hero.downloadCV}
              </span>
            </Link>

            <div className="flex hero-social gap-2 text-3xl">
              <Link
                href="https://github.com/mvdevelop"
                target="_blank"
                className="group"
              >
                <i className="bi bi-github cursor-pointer"></i>
              </Link>
              <Link
                href="https://linkedin.com/in/mvdevelop"
                target="_blank"
                className="group"
              >
                <i className="bi bi-linkedin cursor-pointer"></i>
              </Link>
              <Link
                href="https://instagram.com/mvdevelop"
                target="_blank"
                className="group"
              >
                <i className="bi bi-instagram cursor-pointer"></i>
              </Link>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div
          ref={imageRef as React.RefObject<HTMLDivElement>}
          className={`lg:w-1/2 w-full mt-10 lg:mt-0 flex justify-center relative transition-all duration-700 ease-out delay-200 ${imageVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
        >
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
        ref={statsRef as React.RefObject<HTMLDivElement>}
        className={`stats px-[8%] lg:px-[16%] mt-10 lg:mt-0 pb-10 hidden lg:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 transition-all duration-700 ease-out delay-300 ${statsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      >
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
