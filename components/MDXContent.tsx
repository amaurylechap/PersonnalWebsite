"use client";

import { MDXRemote, type MDXRemoteSerializeResult } from "next-mdx-remote";
import { components } from "@/lib/mdx";
import React from "react";

interface MDXContentProps {
  source: MDXRemoteSerializeResult;
}

export default function MDXContent({ source }: MDXContentProps) {
  return <MDXRemote {...source} components={components} />;
}

