import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { getProjectsDetail } from "@/lib/i18n/projects-detail";
import { siteConfig } from "@/lib/site-config";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const allProjects = getProjectsDetail("en");
  return allProjects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const projects = getProjectsDetail("en");
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found",
      description: "The requested project could not be found.",
    };
  }

  const ogParams = new URLSearchParams({
    title: project.title,
    subtitle: project.category,
    project: project.title,
  });

  return {
    title: `${project.title} | MvDev Portfolio`,
    description: project.summary,
    openGraph: {
      title: `${project.title} - Case Study`,
      description: project.summary,
      url: `${siteConfig.websiteUrl}/projects/${project.slug}`,
      type: "website",
      images: [
        {
          url: `/api/og?${ogParams.toString()}`,
          width: 1200,
          height: 630,
          alt: `${project.title} case study preview`,
        },
        {
          url: project.imageUrl,
          width: 1200,
          height: 630,
          alt: `${project.title} screenshot`,
        },
      ],
    },
    alternates: {
      canonical: `${siteConfig.websiteUrl}/projects/${project.slug}`,
    },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const projects = getProjectsDetail("en");
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[var(--color-bg-primary)] text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-[5%] md:px-[8%] lg:px-[12%] xl:px-[16%] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary-light)]/10 via-transparent to-transparent pointer-events-none"></div>

        <div className="relative z-10 max-w-6xl mx-auto">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center gap-2 text-sm text-gray-400">
              <li>
                <Link href="/" className="hover:text-[var(--color-primary)] transition-colors">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">
                <span className="mx-2">/</span>
              </li>
              <li>
                <Link href="#work" className="hover:text-[var(--color-primary)] transition-colors">
                  Projects
                </Link>
              </li>
              <li aria-hidden="true">
                <span className="mx-2">/</span>
              </li>
              <li className="text-[var(--color-primary)] font-medium" aria-current="page">
                {project.title}
              </li>
            </ol>
          </nav>

          {/* Title & Category */}
          <div className="mb-8">
            <span className="inline-block px-4 py-2 rounded-full bg-[var(--color-primary-light)] border border-[var(--color-primary-lighter)] text-[var(--color-primary)] text-sm font-semibold mb-4">
              {project.category}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4">
              {project.title}
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed max-w-3xl">
              {project.summary}
            </p>
          </div>

          {/* Image */}
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl mt-8">
            <Image
              src={project.imageUrl}
              alt={`${project.title} screenshot`}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 mt-8">
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--color-primary)] text-white rounded-lg font-semibold hover:bg-[var(--color-primary-dark)] transition-all duration-300 hover:-translate-y-0.5"
            >
              <FaExternalLinkAlt size={18} />
              Live Demo
            </a>
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border border-[var(--color-border)] text-white rounded-lg font-semibold hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] transition-all duration-300"
            >
              <FaGithub size={18} />
              View Source
            </a>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-20 px-[5%] md:px-[8%] lg:px-[12%] xl:px-[16%]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-16">
            {/* Problem & Objective */}
            <article>
              <h2 className="text-2xl font-display font-bold mb-6 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-[var(--color-primary)] flex items-center justify-center text-sm">01</span>
                Challenge & Solution
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 rounded-xl bg-[var(--color-surface-muted)] border border-[var(--color-border)]">
                  <h3 className="font-semibold text-[var(--color-primary)] mb-3">Problem</h3>
                  <p className="text-gray-300 leading-relaxed">{project.problem}</p>
                </div>
                <div className="p-6 rounded-xl bg-[var(--color-surface-muted)] border border-[var(--color-border)]">
                  <h3 className="font-semibold text-[var(--color-primary)] mb-3">Objective</h3>
                  <p className="text-gray-300 leading-relaxed">{project.objective}</p>
                </div>
              </div>
            </article>

            {/* Features */}
            <article>
              <h2 className="text-2xl font-display font-bold mb-6 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-[var(--color-primary)] flex items-center justify-center text-sm">02</span>
                Key Features
              </h2>
              <div className="space-y-4">
                {project.features.map((feature, index) => (
                  <div
                    key={index}
                    className="p-5 rounded-xl bg-[var(--color-surface-muted)] border border-[var(--color-border)] hover:border-[var(--color-primary)]/50 transition-colors duration-300"
                  >
                    <h3 className="font-semibold text-white mb-2">{feature.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
                  </div>
                ))}
              </div>
            </article>

            {/* Architecture Decisions */}
            <article>
              <h2 className="text-2xl font-display font-bold mb-6 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-[var(--color-primary)] flex items-center justify-center text-sm">03</span>
                Architecture Decisions
              </h2>
              <div className="space-y-4">
                {project.architecture.map((decision, index) => (
                  <div
                    key={index}
                    className="p-5 rounded-xl bg-[var(--color-surface-muted)] border border-[var(--color-border)]"
                  >
                    <div className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[var(--color-primary-light)] flex items-center justify-center text-xs font-bold text-[var(--color-primary)]">
                        {index + 1}
                      </span>
                      <div>
                        <h3 className="font-semibold text-white mb-1">{decision.decision}</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">{decision.rationale}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </article>

            {/* Challenges */}
            <article>
              <h2 className="text-2xl font-display font-bold mb-6 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-[var(--color-primary)] flex items-center justify-center text-sm">04</span>
                Technical Challenges
              </h2>
              <div className="space-y-4">
                {project.challenges.map((challenge, index) => (
                  <div
                    key={index}
                    className="p-5 rounded-xl bg-[var(--color-surface-muted)] border border-[var(--color-border)]"
                  >
                    <h3 className="font-semibold text-red-400 mb-2">Challenge: {challenge.challenge}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      <span className="text-[var(--color-primary)] font-medium">Solution:</span>{" "}
                      {challenge.solution}
                    </p>
                  </div>
                ))}
              </div>
            </article>

            {/* Learnings */}
            <article>
              <h2 className="text-2xl font-display font-bold mb-6 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-[var(--color-primary)] flex items-center justify-center text-sm">05</span>
                Key Learnings
              </h2>
              <ul className="space-y-3">
                {project.learnings.map((learning, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 p-4 rounded-lg bg-[var(--color-surface-muted)] border border-[var(--color-border)]"
                  >
                    <svg
                      className="w-5 h-5 text-[var(--color-primary)] flex-shrink-0 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray-300 text-sm leading-relaxed">{learning}</span>
                  </li>
                ))}
              </ul>
            </article>
          </div>

          {/* Sidebar */}
          <aside className="space-y-8">
            {/* Technologies */}
            <div className="p-6 rounded-xl bg-[var(--color-surface-muted)] border border-[var(--color-border)]">
              <h3 className="font-semibold text-white mb-4 flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-[var(--color-primary)]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                  />
                </svg>
                Technologies Used
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className={`px-3 py-1 rounded-full text-xs font-medium ${getTechBadgeColor(tech.category)}`}
                  >
                    {tech.name}
                  </span>
                ))}
              </div>
            </div>

            {/* Results */}
            {project.results.length > 0 && (
              <div className="p-6 rounded-xl bg-[var(--color-surface-muted)] border border-[var(--color-border)]">
                <h3 className="font-semibold text-white mb-4 flex items-center gap-2">
                  <svg
                    className="w-5 h-5 text-[var(--color-primary)]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                  Results
                </h3>
                <div className="space-y-4">
                  {project.results.map((result, index) => (
                    <div key={index} className="pb-4 border-b border-[var(--color-border)] last:border-0">
                      <div className="text-2xl font-bold text-[var(--color-primary)]">{result.value}</div>
                      <div className="text-sm font-medium text-white">{result.metric}</div>
                      <div className="text-xs text-gray-500 mt-1">{result.context}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* My Role */}
            <div className="p-6 rounded-xl bg-[var(--color-surface-muted)] border border-[var(--color-border)]">
              <h3 className="font-semibold text-white mb-3 flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-[var(--color-primary)]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                My Role
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">{project.myRole}</p>
            </div>

            {/* Quick Links */}
            <div className="flex flex-col gap-3">
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full px-4 py-3 bg-[var(--color-primary)] text-white rounded-lg font-semibold hover:bg-[var(--color-primary-dark)] transition-colors flex items-center justify-center gap-2"
              >
                <FaExternalLinkAlt size={16} />
                Live Demo
              </a>
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full px-4 py-3 border border-[var(--color-border)] text-white rounded-lg font-semibold hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] transition-colors flex items-center justify-center gap-2"
              >
                <FaGithub size={16} />
                GitHub Repository
              </a>
            </div>
          </aside>
        </div>
      </section>

      {/* Back to Projects */}
      <section className="py-12 border-t border-[var(--color-border)]">
        <div className="px-[5%] md:px-[8%] lg:px-[12%] xl:px-[16%] max-w-6xl mx-auto">
          <Link
            href="#work"
            className="inline-flex items-center gap-2 text-[var(--color-primary)] hover:text-white transition-colors"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Back to Projects
          </Link>
        </div>
      </section>
    </main>
  );
}

function getTechBadgeColor(category: string): string {
  switch (category) {
    case "frontend":
      return "bg-blue-500/10 text-blue-400 border border-blue-500/20";
    case "backend":
      return "bg-[#F8FAFC]/10 text-[#F8FAFC] border border-[#F8FAFC]/20";
    case "database":
      return "bg-[#007bff]/10 text-[#F8FAFC] border border-[#007bff]/20";
    case "devops":
      return "bg-purple-500/10 text-purple-400 border border-purple-500/20";
    default:
      return "bg-gray-500/10 text-gray-400 border border-gray-500/20";
  }
}
