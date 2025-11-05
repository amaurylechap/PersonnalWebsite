import { Button } from "@/components/ui/button";
import { Mail, Phone, ArrowRight } from "lucide-react";
import Link from "next/link";
import { profile } from "@/data/profile";

interface CTAButtonsProps {
  variant?: "default" | "compact";
  showResume?: boolean;
  showProjects?: boolean;
}

export function CTAButtons({
  variant = "default",
  showResume = false,
  showProjects = true,
}: CTAButtonsProps) {
  const size = variant === "compact" ? "sm" : "default";
  const iconSize = variant === "compact" ? 16 : 18;

  return (
    <div className="flex flex-wrap gap-3">
      <Button asChild size={size} variant="default">
        <a href={profile.social[0].href}>
          <Mail className="mr-2 h-4 w-4" />
          Email Me
        </a>
      </Button>
      <Button asChild size={size} variant="outline">
        <a href={profile.social[1].href}>
          <Phone className="mr-2 h-4 w-4" />
          Call Me
        </a>
      </Button>
      {showResume && (
        <Button asChild size={size} variant="outline">
          <Link href="/resume">
            <FileText className="mr-2 h-4 w-4" />
            View Resume
          </Link>
        </Button>
      )}
      {showProjects && (
        <Button asChild size={size} variant="outline">
          <a href="#experiences">
            View Experiences
            <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </Button>
      )}
    </div>
  );
}

