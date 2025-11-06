import { profile } from "@/data/profile";
import { experiences } from "@/data/experiences";

export function JsonLd() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://amaury-lechapelain.com";
  
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: profile.title,
    description: profile.summary,
    email: profile.email,
    telephone: profile.phone,
    url: baseUrl,
    address: {
      "@type": "PostalAddress",
      addressCountry: profile.location,
    },
    sameAs: profile.social.map((s) => s.href),
    knowsAbout: [
      "Aerospace Engineering",
      "UAV Systems",
      "Flight Testing",
      "Autonomous Systems",
      "Composite Materials",
      "Navigation Systems",
      "Flight Simulation",
      "Rapid Prototyping",
    ],
    alumniOf: experiences
      .filter((exp) => exp.type === "internship" && exp.company)
      .map((exp) => ({
        "@type": "EducationalOrganization",
        name: exp.company!,
      })),
    worksFor: experiences
      .filter((exp) => exp.type === "employment" && exp.company)
      .map((exp) => ({
        "@type": "Organization",
        name: exp.company!,
      })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

