import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import ProjectCard from "@/components/ProjectCard";
import AnimatedBackground from "@/components/AnimatedBackground";

export const generateMetadata = (): Metadata => {
  return {
    title: "Projects & Systems | Antonio West",
    description:
      "Production AI document automation, ML pipelines, and technical systems built by Antonio West.",
  };
};

const productionProjects = [
  {
    title: "AI Document & Contract Extraction Pipeline",
    slug: "ai-document-pipeline",
    category: "Workflow Automation / LLM",
    description:
      "Fixed-scope production pipeline converting multi-page PDFs, lease agreements, and invoices into schema-validated JSON data with side-by-side operator review and automatic database/CRM sync.",
    metrics: "Saves 40+ hrs/mo • 99.4% Accuracy",
    tags: ["Next.js 16", "TypeScript", "GPT-4o / Claude 3.5", "Zod", "Supabase", "OCR"],
  },
  {
    title: "AI Drug Analysis & Molecular Property Pipeline",
    slug: "ai-drug-pipeline",
    category: "Applied Machine Learning",
    description:
      "Production ML pipeline designed to predict molecular properties and chemical toxicity with TreeSHAP feature attribution and partitioned Parquet data streaming.",
    metrics: "R² 0.99 | RMSE 0.1577",
    tags: ["Python", "XGBoost", "TreeSHAP", "PyArrow", "Parquet", "Biomedical AI"],
  },
  {
    title: "NLP Scientific Literature Analyser",
    slug: "nlp-scientific-literature-analyser",
    category: "NLP / Deep Learning",
    description:
      "Transformer-based extraction and semantic search engine for parsing scientific papers and constructing biomedical knowledge graphs.",
    metrics: "In Active Development",
    tags: ["NLP", "Transformers", "Entity Linking", "Knowledge Graphs"],
  },
];

const sideProjects = [
  {
    title: "Zero-Dependency WebGL Shader & Texture Memory Optimizer",
    slug: "gpu-optimizer",
    category: "Graphics / Systems (Side Project)",
    description:
      "Client-side WebGL utility that packs discrete PBR material channels (Roughness, Metallic, AO, Height) into single 32-bit RGBA textures, cutting browser VRAM by up to 75% at 60 FPS.",
    metrics: "-75% VRAM Reduction",
    tags: ["WebGL 2.0", "GLSL Shaders", "Texture Channel Packing", "HTML5 Canvas"],
    liveDemoUrl: "https://tool.antoniowest.dev",
  },
];

export default function ProjectsPage() {
  return (
    <div className="relative min-h-screen bg-gray-950 text-white overflow-hidden">
      <AnimatedBackground speedMultiplier={0.08} />

      <div className="relative z-10 max-w-6xl mx-auto px-4 py-12 space-y-12">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-gray-800 pb-6">
          <div>
            <div className="text-xs font-mono text-blue-400 uppercase tracking-wider mb-1">
              Antonio West &bull; Systems Portfolio
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Production AI &amp; Software Systems
            </h1>
          </div>
          <Link
            href="/"
            className="text-sm font-mono text-gray-400 hover:text-white transition-colors inline-flex items-center gap-1.5"
          >
            &larr; Back to Overview
          </Link>
        </div>

        {/* Primary Production Systems */}
        <div>
          <div className="text-xs font-mono text-gray-400 uppercase tracking-wider mb-4">
            Production Pipelines &amp; Systems
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {productionProjects.map((project) => (
              <div key={project.slug} className="block h-full">
                <ProjectCard
                  title={project.title}
                  slug={project.slug}
                  category={project.category}
                  description={project.description}
                  metrics={project.metrics}
                  tags={project.tags}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Side Projects & Experiments */}
        <div className="border-t border-gray-800/80 pt-8">
          <div className="text-xs font-mono text-gray-400 uppercase tracking-wider mb-4">
            Technical Experiments &amp; Side Projects
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sideProjects.map((project) => (
              <div key={project.slug} className="block h-full">
                <ProjectCard
                  title={project.title}
                  slug={project.slug}
                  category={project.category}
                  description={project.description}
                  metrics={project.metrics}
                  tags={project.tags}
                  liveDemoUrl={project.liveDemoUrl}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
