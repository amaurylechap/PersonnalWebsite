import Link from "next/link";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Tag } from "@/components/Tag";
import { ArrowRight } from "lucide-react";

export interface Project {
  slug: string;
  title: string;
  tagline: string;
  year: string;
  role: string;
  topics: string[];
  featured?: boolean;
}

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link href={`/projects/${project.slug}`}>
      <Card className="card-hover h-full cursor-pointer">
        <CardHeader>
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <CardTitle className="mb-2">{project.title}</CardTitle>
              <CardDescription className="text-sm leading-relaxed">
                {project.tagline}
              </CardDescription>
            </div>
            {project.featured && (
              <Tag className="ml-2 shrink-0">Featured</Tag>
            )}
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.topics.slice(0, 3).map((topic) => (
              <Tag key={topic}>{topic}</Tag>
            ))}
          </div>
          <div className="text-xs text-muted-foreground">
            <span>{project.year}</span>
            <span className="mx-2">•</span>
            <span>{project.role}</span>
          </div>
        </CardContent>
        <CardFooter className="pt-0">
          <span className="text-sm font-medium flex items-center gap-2 text-primary">
            View Project <ArrowRight className="h-4 w-4" />
          </span>
        </CardFooter>
      </Card>
    </Link>
  );
}

