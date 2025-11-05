import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import type { MDXRemoteSerializeResult } from "next-mdx-remote";
import React from "react";

const components = {
  h1: (props: React.HTMLAttributes<HTMLHeadingElement>) =>
    React.createElement("h1", {
      className: "mb-4 text-4xl font-bold leading-tight",
      ...props,
    }),
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) =>
    React.createElement("h2", {
      className: "mb-3 mt-8 text-3xl font-semibold leading-tight",
      ...props,
    }),
  h3: (props: React.HTMLAttributes<HTMLHeadingElement>) =>
    React.createElement("h3", {
      className: "mb-2 mt-6 text-2xl font-semibold leading-tight",
      ...props,
    }),
  p: (props: React.HTMLAttributes<HTMLParagraphElement>) =>
    React.createElement("p", {
      className: "mb-4 text-base leading-relaxed",
      ...props,
    }),
  ul: (props: React.HTMLAttributes<HTMLUListElement>) =>
    React.createElement("ul", {
      className: "mb-4 ml-6 list-disc space-y-2",
      ...props,
    }),
  ol: (props: React.HTMLAttributes<HTMLOListElement>) =>
    React.createElement("ol", {
      className: "mb-4 ml-6 list-decimal space-y-2",
      ...props,
    }),
  li: (props: React.HTMLAttributes<HTMLLIElement>) =>
    React.createElement("li", {
      className: "text-base leading-relaxed",
      ...props,
    }),
  strong: (props: React.HTMLAttributes<HTMLElement>) =>
    React.createElement("strong", {
      className: "font-semibold",
      ...props,
    }),
  a: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) =>
    React.createElement("a", {
      className: "text-primary underline-offset-4 hover:underline",
      ...props,
    }),
  blockquote: (props: React.HTMLAttributes<HTMLQuoteElement>) =>
    React.createElement("blockquote", {
      className: "my-4 border-l-4 border-primary pl-4 italic",
      ...props,
    }),
};

export async function serializeMDX(
  content: string
): Promise<MDXRemoteSerializeResult> {
  return await serialize(content, {
    mdxOptions: {
      rehypePlugins: [
        rehypeSlug,
        [rehypeAutolinkHeadings, { behavior: "wrap" }],
      ],
    },
  });
}

export { MDXRemote, components };

