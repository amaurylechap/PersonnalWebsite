import { profile } from "@/data/profile";
import { experiences } from "@/data/experiences";
import { CTAButtons } from "@/components/CTAButtons";
import { Tag } from "@/components/Tag";
import { Badge } from "@/components/ui/badge";
import { Rocket, Calendar, Building2, Briefcase, GraduationCap, Mail, Phone } from "lucide-react";
import Image from "next/image";

// Helper function to convert URLs in text to clickable links
function renderTextWithLinks(text: string) {
  // Check for custom link format: <link:url>text</link>
  const linkRegex = /<link:(https?:\/\/[^\s>]+)>([^<]+)<\/link>/g;
  const parts = [];
  let lastIndex = 0;
  let match;
  
  while ((match = linkRegex.exec(text)) !== null) {
    // Add text before the link
    if (match.index > lastIndex) {
      parts.push({ type: 'text', content: text.substring(lastIndex, match.index) });
    }
    // Add the link
    parts.push({
      type: 'link',
      url: match[1],
      text: match[2]
    });
    lastIndex = match.index + match[0].length;
  }
  
  // Add remaining text
  if (lastIndex < text.length) {
    parts.push({ type: 'text', content: text.substring(lastIndex) });
  }
  
  // If no custom links found, fall back to URL detection
  if (parts.length === 0) {
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    const urlParts = text.split(urlRegex);
    return urlParts.map((part, i) => {
      if (urlRegex.test(part)) {
        return (
          <a
            key={i}
            href={part}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary underline hover:text-primary/80"
          >
            {part}
          </a>
        );
      }
      return <span key={i}>{part}</span>;
    });
  }
  
  return parts.map((part, i) => {
    if (part.type === 'link') {
      return (
        <a
          key={i}
          href={part.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary underline hover:text-primary/80"
        >
          {part.text}
        </a>
      );
    }
    return <span key={i}>{part.content}</span>;
  });
}

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://amaury-lechapelain.com";

export const metadata = {
  title: "Amaury Lechapelain — Aerospace Engineer",
  description:
    "Aerospace engineer focused on UAV systems, flight testing, autonomy, and composites. I build, fly, and iterate fast. Specialized in rapid prototyping, field testing, and practical engineering solutions.",
  keywords: [
    "aerospace engineer",
    "UAV systems",
    "drone engineering",
    "flight testing",
    "autonomous systems",
    "composite materials",
    "aerospace engineering",
    "UAV navigation",
    "flight simulation",
    "aerospace engineer France",
  ],
  openGraph: {
    title: "Amaury Lechapelain — Aerospace Engineer",
    description:
      "Aerospace engineer focused on UAV systems, flight testing, autonomy, and composites. I build, fly, and iterate fast.",
    url: baseUrl,
    type: "website",
    images: [
      {
        url: `${baseUrl}/images/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Amaury Lechapelain — Aerospace Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Amaury Lechapelain — Aerospace Engineer",
    description:
      "Aerospace engineer focused on UAV systems, flight testing, autonomy, and composites. I build, fly, and iterate fast.",
    images: [`${baseUrl}/images/og-image.jpg`],
  },
  alternates: {
    canonical: baseUrl,
  },
};

function getTypeIcon(type: string) {
  switch (type) {
    case "startup":
      return Rocket;
    case "employment":
      return Briefcase;
    case "internship":
      return GraduationCap;
    default:
      return Rocket;
  }
}

function getTypeLabel(type: string) {
  switch (type) {
    case "startup":
      return "Startup Project";
    case "employment":
      return "Employment";
    case "internship":
      return "Internship";
    case "project":
      return "Project";
    default:
      return type;
  }
}

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Journal Entry Section - Intro with Image */}
      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-8 md:grid-cols-2 md:gap-12">
              {/* Journal Entry Text - Left */}
              <div className="journal-entry">
                <div className="mb-8 text-sm font-medium uppercase tracking-wider text-muted-foreground">
                  Presentation
                </div>
                <div className="space-y-6 text-justify leading-relaxed">
                  <p className="text-base">
                    Dear Reader,
                  </p>
                  <p className="text-base">
                    Thank you for taking the time to look at my work. I'm an aerospace engineer who believes in fast iteration, field testing, and learning from real-world performance. I care less about polished theory and more about building systems that actually fly, survive, and deliver value. What you'll see here reflects that mindset: simple ideas tested quickly, refined repeatedly, and pushed until they work.
                  </p>
                  <p className="text-base">
                    This website showcases key projects across UAV systems, flight testing, navigation, and onboard autonomy. Each project demonstrates rapid prototyping cycles, performance analysis, and implementation of improvements based on field results. I look forward to contributing this iterative, hardware-driven approach to future aerospace challenges.
                  </p>
                </div>
              </div>
              
              {/* Image - Right */}
              <div className="flex items-start justify-center md:justify-end">
                <div className="relative aspect-[3/4] w-full max-w-sm overflow-hidden rounded-lg bg-muted -mt-16 -ml-8">
                  <Image 
                    src="/images/amaury.png" 
                    alt="Amaury Lechapelain" 
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experiences Section */}
      <section id="experiences" className="section-padding bg-background">
        <div className="container mx-auto">
          <div className="mx-auto max-w-6xl space-y-24">
            {experiences.map((experience) => {
              const TypeIcon = getTypeIcon(experience.type);

              return (
                <article key={experience.id} className="space-y-8">
                  {/* Header */}
                  <div className="text-left">
                    <div className="mb-4 flex flex-wrap items-center gap-3 text-sm text-muted-foreground justify-start">
                      <div className="flex items-center gap-1.5">
                        <Calendar className="h-4 w-4" />
                        <span>{experience.year}</span>
                      </div>
                      {experience.company && (
                        <>
                          <span>•</span>
                          <div className="flex items-center gap-1.5">
                            <Building2 className="h-4 w-4" />
                            <span>{experience.company}</span>
                          </div>
                        </>
                      )}
                      {experience.id !== 2 && experience.id !== 3 && (
                        <>
                          <span>•</span>
                          <Badge variant="outline" className="flex items-center gap-1.5">
                            <TypeIcon className="h-3 w-3" />
                            {getTypeLabel(experience.type)}
                          </Badge>
                        </>
                      )}
                    </div>
                    <h2 className="mb-4 text-5xl md:text-6xl lg:text-7xl font-normal">
                      {experience.title}
                    </h2>
                    {/* Image for One Way Attack UAV - Directly after title, before tagline */}
                    {experience.id === 3 && experience.images && experience.images.length > 0 && (
                      <div className="mb-4 w-full">
                        <div className="relative w-full overflow-hidden rounded-lg bg-muted">
                          <div className="relative w-full">
                            <Image
                              src={typeof experience.images[0] === 'string' ? experience.images[0] : experience.images[0].src}
                              alt={`${experience.title} - Image 1`}
                              width={800}
                              height={600}
                              className="w-full h-auto object-contain"
                              unoptimized
                            />
                          </div>
                        </div>
                        {typeof experience.images[0] === 'object' && experience.images[0].caption && (
                          <p className="mt-3 text-sm text-muted-foreground italic">
                            {experience.images[0].caption}
                          </p>
                        )}
                      </div>
                    )}
                    {/* Image for Flight Simulator - Directly after title, before description */}
                    {experience.id === 4 && experience.images && experience.images.length > 0 && (
                      <div className="mb-4 w-full">
                        <div className="relative w-full overflow-hidden rounded-lg bg-muted">
                          <div className="relative w-full">
                            <Image
                              src={typeof experience.images[0] === 'string' ? experience.images[0] : experience.images[0].src}
                              alt={`${experience.title} - Image 1`}
                              width={800}
                              height={600}
                              className="w-full h-auto object-contain"
                              unoptimized
                            />
                          </div>
                        </div>
                        {typeof experience.images[0] === 'object' && experience.images[0].caption && (
                          <p className="mt-3 text-sm text-muted-foreground italic">
                            {experience.images[0].caption}
                          </p>
                        )}
                      </div>
                    )}
                    {/* Description before tagline for Flight Simulator */}
                    {experience.id === 4 && (
                      <p className="mb-4 text-base leading-relaxed text-foreground">
                        {experience.description}
                      </p>
                    )}
                    {experience.id !== 1 && (
                      <h3 className="text-xl font-semibold text-foreground">
                        {experience.tagline}
                      </h3>
                    )}
                    {/* Quote for Flight Simulator after tagline */}
                    {experience.id === 4 && (
                      <blockquote className="my-8 border-l-4 border-primary pl-6 italic text-2xl md:text-3xl font-normal text-foreground leading-relaxed">
                        I fully developed a realistic flight simulator using Unity Game Engine.
                      </blockquote>
                    )}
                  </div>

                  {/* Content with Images */}
                  <div className="space-y-8">
                    {/* Special layout for Airbus Helicopters (id === 5) */}
                    {experience.id === 5 && experience.images && experience.images.length > 1 ? (
                      <>
                        {/* Top row: Text content (left) | Image #2 (right) */}
                        <div className="grid gap-8 md:grid-cols-2 md:gap-12">
                          {/* Text Content - Left */}
                          <div className="text-left">
                            {experience.mission && (
                              <p className="mb-6 text-base font-medium text-foreground">
                                {experience.mission}
                              </p>
                            )}

                            {experience.companyDescription && (
                              <p className="mb-6 text-base leading-relaxed text-foreground">
                                {experience.companyDescription}
                              </p>
                            )}

                            {/* Description */}
                            <div className="mb-6 space-y-4 text-justify leading-relaxed">
                              <p className="text-base">{experience.description}</p>
                            </div>

                            {/* Highlights (without the title object) */}
                            {experience.highlights && experience.highlights.length > 0 && (
                              <div className="mb-6 space-y-4 text-justify leading-relaxed">
                                {experience.highlights.map((highlight, i) => {
                                  // Skip title objects - they will be shown separately on the right
                                  if (typeof highlight === 'object' && highlight !== null && 'title' in highlight) {
                                    return null;
                                  }
                                  
                                  // Check if this is a quote object
                                  if (typeof highlight === 'object' && highlight !== null && 'quote' in highlight) {
                                    if ('text' in highlight) {
                                      return (
                                        <div key={i} className="space-y-2">
                                          <blockquote className="my-8 border-l-4 border-primary pl-6 italic text-2xl md:text-3xl font-normal text-foreground leading-relaxed">
                                            {highlight.quote}
                                          </blockquote>
                                          <p className="text-base">
                                            {highlight.text}
                                          </p>
                                        </div>
                                      );
                                    } else {
                                      return (
                                        <blockquote key={i} className="my-8 border-l-4 border-primary pl-6 italic text-2xl md:text-3xl font-normal text-foreground leading-relaxed">
                                          {highlight.quote}
                                        </blockquote>
                                      );
                                    }
                                  }
                                  
                                  return (
                                    <p key={i} className="text-base">
                                      {highlight}
                                    </p>
                                  );
                                })}
                              </div>
                            )}

                            {/* Technical Tags */}
                            {experience.technical && experience.technical.length > 0 && (
                              <div className="flex flex-wrap gap-2">
                                {experience.technical.map((tech, i) => (
                                  <Tag key={i}>{tech}</Tag>
                                ))}
                              </div>
                            )}
                          </div>

                          {/* Image #2 - Right */}
                          <div className="flex items-start justify-end">
                            <div className="w-[70%]">
                              <div className="relative w-full overflow-hidden rounded-lg bg-muted">
                                <div className="relative w-full">
                                  <Image
                                    src={typeof experience.images[1] === 'string' ? experience.images[1] : experience.images[1].src}
                                    alt={`${experience.title} - Image 2`}
                                    width={800}
                                    height={600}
                                    className="w-full h-auto object-contain"
                                    unoptimized
                                  />
                                </div>
                              </div>
                              {typeof experience.images[1] === 'object' && experience.images[1].caption && (
                                <p className="mt-3 text-sm text-muted-foreground italic text-center">
                                  {experience.images[1].caption}
                                </p>
                              )}
                            </div>
                          </div>
                        </div>

                        {/* Bottom row: Image #1 (left) | Title text (right) */}
                        <div className="grid gap-8 md:grid-cols-2 md:gap-12">
                          {/* Image #1 - Left */}
                          <div className="flex items-start justify-start">
                            <div className="w-full">
                              <div className="relative w-full overflow-hidden rounded-lg bg-muted">
                                <div className="relative w-full">
                                  <Image
                                    src={typeof experience.images[0] === 'string' ? experience.images[0] : experience.images[0].src}
                                    alt={`${experience.title} - Image 1`}
                                    width={800}
                                    height={600}
                                    className="w-full h-auto object-contain"
                                    unoptimized
                                  />
                                </div>
                              </div>
                              {typeof experience.images[0] === 'object' && experience.images[0].caption && (
                                <p className="mt-3 text-sm text-muted-foreground italic">
                                  {experience.images[0].caption}
                                </p>
                              )}
                            </div>
                          </div>

                          {/* Title text - Right */}
                          <div className="flex items-start justify-start">
                            <div className="w-full">
                              {experience.highlights && experience.highlights.map((highlight, i) => {
                                if (typeof highlight === 'object' && highlight !== null && 'title' in highlight) {
                                  return (
                                    <div key={i} className="space-y-2">
                                      <h3 className="text-xl font-semibold text-foreground mb-2">
                                        {highlight.title}
                                      </h3>
                                      <p className="text-base text-justify leading-relaxed">
                                        {highlight.text}
                                      </p>
                                    </div>
                                  );
                                }
                                return null;
                              })}
                            </div>
                          </div>
                        </div>
                      </>
                    ) : experience.id === 2 && experience.images && experience.images.length > 1 ? (
                      <>
                        {/* Top row: Image #1 (left) | Text content (right) */}
                        <div className="grid gap-8 md:grid-cols-2 md:gap-12">
                          {/* Image #1 - Left */}
                          <div className="flex items-start justify-start">
                            <div className="w-full">
                              <div className="relative w-full overflow-hidden rounded-lg bg-muted">
                                <div className="relative w-full">
                                  <Image
                                    src={typeof experience.images[0] === 'string' ? experience.images[0] : experience.images[0].src}
                                    alt={`${experience.title} - Image 1`}
                                    width={800}
                                    height={600}
                                    className="w-full h-auto object-contain"
                                    unoptimized
                                  />
                                </div>
                              </div>
                              {typeof experience.images[0] === 'object' && experience.images[0].caption && (
                                <p className="mt-3 text-sm text-muted-foreground italic">
                                  {experience.images[0].caption}
                                </p>
                              )}
                            </div>
                          </div>

                          {/* Text Content - Right */}
                          <div className="text-left">
                            {experience.mission && (
                              <p className="mb-6 text-base font-medium text-foreground">
                                {experience.mission}
                              </p>
                            )}

                            {experience.companyDescription && (
                              <p className="mb-6 text-base leading-relaxed text-foreground">
                                {experience.companyDescription}
                              </p>
                            )}

                            {/* Description */}
                            <div className="mb-6 space-y-4 text-justify leading-relaxed">
                              <p className="text-base">{experience.description}</p>
                            </div>

                            {/* Highlights (without the quote) */}
                            {experience.highlights && experience.highlights.length > 0 && (
                              <div className="mb-6 space-y-4 text-justify leading-relaxed">
                                {experience.highlights.map((highlight, i) => {
                                  // Skip the quote object - it will be shown separately on the right
                                  if (typeof highlight === 'object' && highlight !== null && 'quote' in highlight) {
                                    return null;
                                  }
                                  
                                  // Check if this is a title object
                                  if (typeof highlight === 'object' && highlight !== null && 'title' in highlight) {
                                    return (
                                      <div key={i} className="space-y-2">
                                        <h3 className="text-xl font-semibold text-foreground mb-2">
                                          {highlight.title}
                                        </h3>
                                        <p className="text-base">
                                          {highlight.text}
                                        </p>
                                      </div>
                                    );
                                  }
                                  
                                  return (
                                    <p key={i} className="text-base">
                                      {highlight}
                                    </p>
                                  );
                                })}
                              </div>
                            )}

                            {/* Technical Tags */}
                            {experience.technical && experience.technical.length > 0 && (
                              <div className="flex flex-wrap gap-2">
                                {experience.technical.map((tech, i) => (
                                  <Tag key={i}>{tech}</Tag>
                                ))}
                              </div>
                            )}
                          </div>
                        </div>

                        {/* Bottom row: Quote text (left) | Image #2 (right) */}
                        <div className="grid gap-8 md:grid-cols-2 md:gap-12">
                          {/* Quote text - Left */}
                          <div className="flex items-start justify-start">
                            <div className="w-full">
                              {experience.highlights && experience.highlights.map((highlight, i) => {
                                if (typeof highlight === 'object' && highlight !== null && 'quote' in highlight) {
                                  return (
                                    <div key={i} className="space-y-2">
                                      <blockquote className="my-8 border-l-4 border-primary pl-6 italic text-2xl md:text-3xl font-normal text-foreground leading-relaxed">
                                        {highlight.quote}
                                      </blockquote>
                                      <p className="text-base text-justify leading-relaxed">
                                        {highlight.text}
                                      </p>
                                    </div>
                                  );
                                }
                                return null;
                              })}
                            </div>
                          </div>

                          {/* Image #2 - Right */}
                          <div className="flex items-start justify-end">
                            <div className="w-full">
                              <div className="relative w-full overflow-hidden rounded-lg bg-muted">
                                <div className="relative w-full">
                                  <Image
                                    src={typeof experience.images[1] === 'string' ? experience.images[1] : experience.images[1].src}
                                    alt={`${experience.title} - Image 2`}
                                    width={800}
                                    height={600}
                                    className="w-full h-auto object-contain"
                                    unoptimized
                                  />
                                </div>
                              </div>
                              {typeof experience.images[1] === 'object' && experience.images[1].caption && (
                                <p className="mt-3 text-sm text-muted-foreground italic text-center">
                                  {experience.images[1].caption}
                                </p>
                              )}
                            </div>
                          </div>
                        </div>
                      </>
                    ) : experience.images && experience.images.length > 1 ? (
                      /* Two-column layout: Text + Second Image (if exists), or full width text */
                      <div className="grid gap-8 md:grid-cols-2 md:gap-12">
                        {/* Text Content - Left */}
                        <div className="text-left">
                          {experience.mission && (
                            <p className="mb-6 text-base font-medium text-foreground">
                              {experience.mission}
                            </p>
                          )}

                          {experience.companyDescription && (
                            <p className="mb-6 text-base leading-relaxed text-foreground">
                              {experience.companyDescription}
                            </p>
                          )}

                          {/* Stats */}
                          {experience.stats && experience.stats.length > 0 && (
                            <div className="mb-6 grid grid-cols-3 gap-4 rounded-lg border bg-muted/50 p-4">
                              {experience.stats.map((stat, i) => (
                                <div key={i} className="text-center">
                                  <div className="text-2xl font-bold">{stat.value}</div>
                                  <div className="text-xs text-muted-foreground">
                                    {stat.label}
                                  </div>
                                </div>
                              ))}
                            </div>
                          )}

                          {/* Description - skip for Flight Simulator (already shown in header) */}
                          {experience.id !== 4 && (
                            <div className="mb-6 space-y-4 text-justify leading-relaxed">
                              <p className="text-base">{experience.description}</p>
                            </div>
                          )}

                          {/* Highlights */}
                          {experience.highlights && experience.highlights.length > 0 && (
                            <div className="mb-6 space-y-4 text-justify leading-relaxed">
                              {experience.highlights.map((highlight, i) => {
                                // Check if this is a title object
                                if (typeof highlight === 'object' && highlight !== null && 'title' in highlight) {
                                  return (
                                    <div key={i} className="space-y-2">
                                      <h3 className="text-xl font-semibold text-foreground mb-2">
                                        {highlight.title}
                                      </h3>
                                      <p className="text-base">
                                        {highlight.text}
                                      </p>
                                    </div>
                                  );
                                }
                                
                                // Check if this is a split quote object (for Head of Sales)
                                if (typeof highlight === 'object' && highlight !== null && 'quote' in highlight) {
                                  // Check if it has a text property (split quote) or just quote (simple quote)
                                  if ('text' in highlight) {
                                    return (
                                      <div key={i} className="space-y-2">
                                        <blockquote className="my-8 border-l-4 border-primary pl-6 italic text-2xl md:text-3xl font-normal text-foreground leading-relaxed">
                                          {highlight.quote}
                                        </blockquote>
                                        <p className="text-base">
                                          {highlight.text}
                                        </p>
                                      </div>
                                    );
                                  } else {
                                    // Simple quote object (just quote property)
                                    return (
                                      <blockquote key={i} className="my-8 border-l-4 border-primary pl-6 italic text-2xl md:text-3xl font-normal text-foreground leading-relaxed">
                                        {highlight.quote}
                                      </blockquote>
                                    );
                                  }
                                }
                                
                                // Check if this should be formatted as a quote (AI Optical Navigation System)
                                const isQuote = experience.id === 1 && i === 0;
                                return isQuote ? (
                                  <blockquote key={i} className="my-8 border-l-4 border-primary pl-6 italic text-2xl md:text-3xl font-normal text-foreground leading-relaxed">
                                    {highlight}
                                  </blockquote>
                                ) : (
                                  <p key={i} className="text-base">
                                    {highlight}
                                  </p>
                                );
                              })}
                            </div>
                          )}

                          {/* Technical Tags */}
                          {experience.technical && experience.technical.length > 0 && (
                            <div className="flex flex-wrap gap-2">
                              {experience.technical.map((tech, i) => (
                                <Tag key={i}>{tech}</Tag>
                              ))}
                            </div>
                          )}

                          {/* First Image - Below Text (Left Side) */}
                          {experience.images && experience.images.length > 0 && (
                            <div className="mt-8">
                              <div className="relative w-full overflow-hidden rounded-lg bg-muted">
                                <div className="relative w-full">
                                  <Image
                                    src={typeof experience.images[0] === 'string' ? experience.images[0] : experience.images[0].src}
                                    alt={`${experience.title} - Image 1`}
                                    width={800}
                                    height={600}
                                    className="w-full h-auto object-contain"
                                    unoptimized
                                  />
                                </div>
                              </div>
                              {typeof experience.images[0] === 'object' && experience.images[0].caption && (
                                <p className="mt-3 text-sm text-muted-foreground italic">
                                  {experience.images[0].caption}
                                </p>
                              )}
                            </div>
                          )}
                        </div>

                        {/* Second Image - Right */}
                        <div className="flex items-start justify-end">
                          <div className="w-[70%]">
                            <div className="relative w-full overflow-hidden rounded-lg bg-muted">
                              <div className="relative w-full">
                                <Image
                                  src={typeof experience.images[1] === 'string' ? experience.images[1] : experience.images[1].src}
                                  alt={`${experience.title} - Image 2`}
                                  width={800}
                                  height={600}
                                  className="w-full h-auto object-contain"
                                  unoptimized
                                />
                              </div>
                            </div>
                            {typeof experience.images[1] === 'object' && experience.images[1].caption && (
                              <p className="mt-3 text-sm text-muted-foreground italic text-center">
                                {experience.images[1].caption}
                              </p>
                            )}
                          </div>
                        </div>
                      </div>
                    ) : (
                      /* Single column layout when only 1 image or no images */
                      <div className="max-w-4xl">
                        {experience.mission && (
                          <p className="mb-6 text-base font-medium text-foreground">
                            {experience.mission}
                          </p>
                        )}

                        {experience.companyDescription && (
                          <p className="mb-6 text-base leading-relaxed text-foreground">
                            {experience.companyDescription}
                          </p>
                        )}

                        {/* Description - skip for Flight Simulator (already shown in header) */}
                        {experience.id !== 4 && (
                          <div className="mb-6 space-y-4 text-justify leading-relaxed">
                            <p className="text-base">{experience.description}</p>
                          </div>
                        )}

                        {/* Stats */}
                        {experience.stats && experience.stats.length > 0 && (
                          <div className="mb-6 grid grid-cols-3 gap-4 rounded-lg border bg-muted/50 p-4">
                            {experience.stats.map((stat, i) => (
                              <div key={i} className="text-center">
                                <div className="text-2xl font-bold">{stat.value}</div>
                                <div className="text-xs text-muted-foreground">
                                  {stat.label}
                                </div>
                              </div>
                            ))}
                          </div>
                        )}

                        {/* Description - skip for Flight Simulator (already shown in header) */}
                        {experience.id !== 4 && (
                          <div className="mb-6 space-y-4 text-justify leading-relaxed">
                            <p className="text-base">{experience.description}</p>
                          </div>
                        )}

                        {/* Highlights */}
                        {experience.highlights && experience.highlights.length > 0 && (
                          <div className="mb-6 space-y-4 text-justify leading-relaxed">
                            {experience.highlights.map((highlight, i) => {
                              // Check if this is a title object
                              if (typeof highlight === 'object' && highlight !== null && 'title' in highlight) {
                                return (
                                  <div key={i} className="space-y-2">
                                    <h3 className="text-xl font-semibold text-foreground mb-2">
                                      {highlight.title}
                                    </h3>
                                    <p className="text-base">
                                      {highlight.text}
                                    </p>
                                  </div>
                                );
                              }
                              
                              // Check if this is a quote object
                              if (typeof highlight === 'object' && highlight !== null && 'quote' in highlight) {
                                // Check if it has a text property (split quote) or just quote (simple quote)
                                if ('text' in highlight) {
                                  return (
                                    <div key={i} className="space-y-2">
                                      <blockquote className="my-8 border-l-4 border-primary pl-6 italic text-2xl md:text-3xl font-normal text-foreground leading-relaxed">
                                        {highlight.quote}
                                      </blockquote>
                                      <p className="text-base">
                                        {highlight.text}
                                      </p>
                                    </div>
                                  );
                                } else {
                                  // Simple quote object (just quote property)
                                  return (
                                    <blockquote key={i} className="my-8 border-l-4 border-primary pl-6 italic text-2xl md:text-3xl font-normal text-foreground leading-relaxed">
                                      {highlight.quote}
                                    </blockquote>
                                  );
                                }
                              }
                              
                              // Check if this should be formatted as a quote (AI Optical Navigation System)
                              const isQuote = experience.id === 1 && i === 0;
                              return isQuote ? (
                                <blockquote key={i} className="my-8 border-l-4 border-primary pl-6 italic text-2xl md:text-3xl font-normal text-foreground leading-relaxed">
                                  {renderTextWithLinks(highlight)}
                                </blockquote>
                              ) : (
                                <p key={i} className="text-base">
                                  {renderTextWithLinks(highlight)}
                                </p>
                              );
                            })}
                          </div>
                        )}

                        {/* Technical Tags */}
                        {experience.technical && experience.technical.length > 0 && (
                          <div className="flex flex-wrap gap-2">
                            {experience.technical.map((tech, i) => (
                              <Tag key={i}>{tech}</Tag>
                            ))}
                          </div>
                        )}

                        {/* First Image - Below Text (when only 1 image, but not for One Way Attack UAV or Flight Simulator) */}
                        {experience.id !== 3 && experience.id !== 4 && experience.images && experience.images.length > 0 && (
                          <div className="mt-8">
                            <div className="relative w-full overflow-hidden rounded-lg bg-muted">
                              <div className="relative w-full">
                                <Image
                                  src={typeof experience.images[0] === 'string' ? experience.images[0] : experience.images[0].src}
                                  alt={`${experience.title} - Image 1`}
                                  width={800}
                                  height={600}
                                  className="w-full h-auto object-contain"
                                  unoptimized
                                />
                              </div>
                            </div>
                            {typeof experience.images[0] === 'object' && experience.images[0].caption && (
                              <p className="mt-3 text-sm text-muted-foreground italic">
                                {experience.images[0].caption}
                              </p>
                            )}
                          </div>
                        )}
                      </div>
                    )}

                    {/* Additional Images (3rd, 4th, etc.) - Right Side */}
                    {experience.images && experience.images.length > 2 && (
                      <div className="grid gap-8 md:grid-cols-2 md:gap-12">
                        <div></div>
                        <div className="flex flex-col items-start justify-start gap-6">
                          {experience.images.slice(2).map((image, i) => {
                            const imageSrc = typeof image === 'string' ? image : image.src;
                            const imageCaption = typeof image === 'object' ? image.caption : undefined;
                            return (
                              <div key={i + 2} className="w-full">
                                <div className="relative w-full overflow-hidden rounded-lg bg-muted">
                                  <div className="relative w-full">
                                    <Image
                                      src={imageSrc}
                                      alt={`${experience.title} - Image ${i + 3}`}
                                      width={800}
                                      height={600}
                                      className="w-full h-auto object-contain"
                                      unoptimized
                                    />
                                  </div>
                                </div>
                                {imageCaption && (
                                  <p className="mt-3 text-sm text-muted-foreground italic text-center">
                                    {imageCaption}
                                  </p>
                                )}
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Company Tags */}
      {/* Contact CTA */}
      <section className="border-t border-border/50 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-4 py-24 md:py-32">
          <div className="mx-auto max-w-3xl">
            {/* Decorative elements */}
            <div className="mb-8 flex items-center justify-center gap-4">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border to-border"></div>
              <div className="h-px flex-1 bg-gradient-to-l from-transparent via-border to-border"></div>
            </div>

            {/* Main heading */}
            <div className="mb-6 text-center">
              <h2 className="mb-3 text-4xl font-normal tracking-tight md:text-5xl lg:text-6xl">
                Let's work together
              </h2>
              <div className="mx-auto mb-6 h-1 w-24 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
            </div>

            {/* Availability text with icon */}
            <div className="mb-10 flex items-center justify-center gap-3 text-center">
              <div className="h-2 w-2 rounded-full bg-primary"></div>
              <p className="text-lg font-medium text-foreground">
                {profile.availability}
              </p>
              <div className="h-2 w-2 rounded-full bg-primary"></div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <CTAButtons variant="default" showProjects={false} />
            </div>

            {/* Decorative elements bottom */}
            <div className="mt-12 flex items-center justify-center gap-4">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border to-border"></div>
              <div className="flex gap-2">
                <div className="h-1 w-1 rounded-full bg-primary/50"></div>
                <div className="h-1 w-1 rounded-full bg-primary"></div>
                <div className="h-1 w-1 rounded-full bg-primary/50"></div>
              </div>
              <div className="h-px flex-1 bg-gradient-to-l from-transparent via-border to-border"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

