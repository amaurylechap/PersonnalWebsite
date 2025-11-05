interface ArticleJsonLdProps {
  title: string;
  description: string;
  datePublished?: string;
  dateModified?: string;
  author?: string;
  url: string;
}

export function ArticleJsonLd({
  title,
  description,
  datePublished,
  dateModified,
  author,
  url,
}: ArticleJsonLdProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    datePublished: datePublished || new Date().toISOString(),
    dateModified: dateModified || new Date().toISOString(),
    author: {
      "@type": "Person",
      name: author || "Amaury Lechapelain",
    },
    url,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

