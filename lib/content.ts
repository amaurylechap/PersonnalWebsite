import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { Project } from "@/components/ProjectCard";

const projectsDirectory = path.join(process.cwd(), "content/projects");

export function getAllProjects(): Project[] {
  if (!fs.existsSync(projectsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(projectsDirectory);
  const projects = fileNames
    .filter((name) => name.endsWith(".mdx"))
    .map((fileName) => {
      const fullPath = path.join(projectsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data } = matter(fileContents);

      return {
        slug: fileName.replace(/\.mdx$/, ""),
        title: data.title || "",
        tagline: data.tagline || "",
        year: data.year || "",
        role: data.role || "",
        topics: data.topics || [],
        featured: data.featured || false,
      } as Project;
    });

  return projects.sort((a, b) => {
    // Sort by featured first, then by year (descending)
    if (a.featured && !b.featured) return -1;
    if (!a.featured && b.featured) return 1;
    return b.year.localeCompare(a.year);
  });
}

export function getProjectBySlug(slug: string) {
  const fullPath = path.join(projectsDirectory, `${slug}.mdx`);
  
  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    slug,
    title: data.title || "",
    tagline: data.tagline || "",
    year: data.year || "",
    role: data.role || "",
    topics: data.topics || [],
    featured: data.featured || false,
    content,
  };
}

