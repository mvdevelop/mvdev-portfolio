import Image from "next/image";
import Link from "next/link";
import { projects } from "@/lib/content";

export const metadata = {
  title: "Projects | MvDev",
  description: "Selected projects built by MvDev.",
};

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-[var(--secondary-color)] px-[8%] py-32 text-white lg:px-[16%]">
      <div className="mx-auto max-w-7xl">
        <Link
          href="/#work"
          className="mb-10 inline-flex text-sm text-gray-400 transition-colors hover:text-[var(--primary-color)]"
        >
          ← Back to portfolio
        </Link>

        <header className="mb-16 max-w-3xl">
          <span className="mb-4 inline-block rounded-full border border-[var(--primary-color)]/20 bg-[var(--primary-color)]/10 px-5 py-1.5 text-sm font-semibold text-[var(--primary-color)]">
            Portfolio
          </span>
          <h1 className="font-unbounded text-4xl font-bold md:text-5xl">
            Selected Projects
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-gray-400">
            A collection of applications and experiments that demonstrate the
            technologies and problem-solving areas explored by MvDev.
          </p>
        </header>

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.id}
              className="overflow-hidden rounded-xl border border-gray-800 bg-gray-500/5 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--primary-color)]/50"
            >
              <Image
                src={project.img}
                alt={project.title}
                width={650}
                height={300}
                className="aspect-[13/6] w-full object-cover"
              />
              <div className="p-6">
                <p className="text-sm font-semibold text-[var(--primary-color)]">
                  {project.id}
                </p>
                <h2 className="mt-2 font-unbounded text-2xl font-semibold">
                  {project.title}
                </h2>
                <p className="mt-3 text-gray-400">{project.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tech.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full border border-gray-700 px-3 py-1 text-xs text-gray-300"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
                <div className="mt-6 flex flex-wrap gap-4 border-t border-gray-800 pt-5">
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-[var(--primary-color)] transition-colors hover:text-white"
                  >
                    Live project ↗
                  </a>
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-gray-300 transition-colors hover:text-[var(--primary-color)]"
                  >
                    Source code ↗
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
