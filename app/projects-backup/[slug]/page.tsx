import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/lib/content";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return { title: "Project not found | MvDev" };
  }

  return {
    title: `${project.title} | MvDev Projects`,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[var(--secondary-color)] px-[8%] py-32 text-white lg:px-[16%]">
      <article className="mx-auto max-w-5xl">
        <Link
          href="/projects"
          className="mb-10 inline-flex text-sm text-gray-400 transition-colors hover:text-[var(--primary-color)]"
        >
          ← Back to projects
        </Link>

        <header className="mb-10">
          <p className="text-sm font-semibold text-[var(--primary-color)]">
            Project {project.id}
          </p>
          <h1 className="mt-3 font-unbounded text-4xl font-bold md:text-6xl">
            {project.title}
          </h1>
          <p className="mt-5 max-w-2xl text-xl text-gray-400">
            {project.description}
          </p>
        </header>

        <Image
          src={project.img}
          alt={project.title}
          width={650}
          height={300}
          priority
          className="aspect-[13/6] w-full rounded-xl object-cover shadow-lg"
        />

        <div className="mt-10 grid gap-10 md:grid-cols-[1fr_280px]">
          <section>
            <h2 className="font-unbounded text-2xl font-semibold">
              Project overview
            </h2>
            <p className="mt-4 leading-relaxed text-gray-400">
              This page presents the currently validated information for this
              project. Detailed case-study content such as responsibilities,
              architecture decisions, challenges, and outcomes will only be
              added after those details are confirmed.
            </p>
          </section>

          <aside className="rounded-xl border border-gray-800 bg-gray-500/5 p-6">
            <h2 className="font-unbounded text-lg font-semibold">Technologies</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tech.map((technology) => (
                <span
                  key={technology}
                  className="rounded-full border border-gray-700 px-3 py-1 text-sm text-gray-300"
                >
                  {technology}
                </span>
              ))}
            </div>
          </aside>
        </div>

        <div className="mt-10 flex flex-wrap gap-4 border-t border-gray-800 pt-6">
          <a
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-[var(--primary-color)] px-5 py-3 font-semibold text-white transition-colors hover:bg-white hover:text-black"
          >
            Visit live project ↗
          </a>
          <a
            href={project.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-gray-700 px-5 py-3 font-semibold text-gray-300 transition-colors hover:border-[var(--primary-color)] hover:text-[var(--primary-color)]"
          >
            View source code ↗
          </a>
        </div>
      </article>
    </main>
  );
}
