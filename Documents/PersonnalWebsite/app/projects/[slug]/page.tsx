import { notFound } from "next/navigation";
import Link from "next/link";
import { getProjectBySlug, getAllProjects } from "@/lib/content";
import { serializeMDX, MDXRemote, components } from "@/lib/mdx";
import { Tag } from "@/components/Tag";
import { Badge } from "@/components/ui/badge";
import { ArticleJsonLd } from "@/components/ArticleJsonLd";
import type { Metadata } from "next";

export async function generateStaticParams() {
  const projects = getAllProjects();
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const project = getProjectBySlug(params.slug);
  
  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} — Amaury Lechapelain`,
    description: project.tagline,
    openGraph: {
      title: project.title,
      description: project.tagline,
      type: "article",
    },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: { slug: string };
}) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  const mdxSource = await serializeMDX(project.content);
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://amaury-lechapelain.com";
  const projectUrl = `${baseUrl}/projects/${project.slug}`;

  return (
    <>
      <ArticleJsonLd
        title={project.title}
        description={project.tagline}
        datePublished={new Date().toISOString()}
        url={projectUrl}
      />
      <article className="container mx-auto px-4 py-12">
      <div className="mx-auto max-w-3xl">
        {/* Header */}
        <header className="mb-8">
          <div className="mb-4 flex items-center gap-2">
            {project.topics.map((topic) => (
              <Tag key={topic}>{topic}</Tag>
            ))}
          </div>
          <h1 className="mb-4 text-4xl font-bold leading-tight md:text-5xl">
            {project.title}
          </h1>
          <p className="mb-4 text-xl text-muted-foreground">
            {project.tagline}
          </p>
          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <Badge variant="outline">{project.year}</Badge>
            <span>{project.role}</span>
          </div>
        </header>

        {/* Content */}
        <div className="prose prose-lg max-w-none dark:prose-invert">
          <MDXRemote {...mdxSource} components={components} />
        </div>

        {/* Breadcrumb */}
        <nav className="mt-12 border-t pt-8" aria-label="Breadcrumb">
          <ol className="flex items-center gap-2 text-sm text-muted-foreground">
            <li>
              <Link href="/" className="hover:text-foreground">
                Home
              </Link>
            </li>
            <li>/</li>
            <li>
              <Link href="/projects" className="hover:text-foreground">
                Projects
              </Link>
            </li>
            <li>/</li>
            <li className="text-foreground">{project.title}</li>
          </ol>
        </nav>
      </div>
    </article>
    </>
  );
}

