import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import ProjectCard from "@/components/ProjectCard";
import AnimatedBackground from "@/components/AnimatedBackground";

export const generateMetadata = (): Metadata => {
  return {
    title: "Projects & Systems | Antonio West",
    description:
      "Production AI document automation, LLM meeting intelligence, and machine learning systems built by Antonio West.",
  };
};

const productionProjects = [
  {
    title: "Document Parsing & AI Personalisation Pipeline",
    slug: "ai-document-pipeline",
    category: "Contract • Be Act Change",
    description:
      "Automated multi-format PDF & DOCX text extraction pipeline using pdfjs-dist and mammoth to enrich AI personalisation. Features a 23-step dynamic onboarding state machine with localStorage persistence and GPT-4o prompt guardrails.",
    metrics: "Production PWA",
    tags: ["Next.js", "TypeScript", "GPT-4o", "pdfjs-dist", "mammoth", "shadcn/ui", "Framer Motion"],
  },
  {
    title: "Meeting Audio Summarisation & Intelligence Engine",
    slug: "meeting-intelligence-engine",
    category: "Contract • Alive Industries",
    description:
      "End-to-end meeting intelligence pipeline for ChatSDK. Ingests Whereby recordings, executes multi-provider LLM summarisation with background polling & caching, and persists structured action items via Drizzle ORM and PostgreSQL.",
    metrics: "ChatSDK Infrastructure",
    tags: ["TypeScript", "Next.js", "PostgreSQL", "Drizzle ORM", "Whereby API", "shadcn/ui"],
  },
  {
    title: "Molecular Toxicity & Property ML Pipeline",
    slug: "ai-drug-pipeline",
    category: "Applied Machine Learning",
    description:
      "High-throughput machine learning pipeline predicting molecular properties and compound toxicity with TreeSHAP explainability and partitioned Parquet data streaming.",
    metrics: "R² 0.99 | RMSE 0.1577",
    tags: ["Python", "XGBoost", "TreeSHAP", "PyArrow", "Parquet", "Scikit-Learn"],
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
      <AnimatedBackground speedMultiplier={0.05} />

      <div className="relative z-10 max-w-6xl mx-auto px-4 py-12 space-y-12">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-gray-800 pb-6">
          <div>
            <div className="text-xs font-mono text-blue-400 uppercase tracking-wider mb-1">
              Antonio West &bull; Engineering Portfolio
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Production AI &amp; Software Systems
            </h1>
          </div>
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="text-sm font-mono text-gray-400 hover:text-white transition-colors inline-flex items-center gap-1.5"
            >
              &larr; Back to Overview
            </Link>
            <a
              href="mailto:antonio@antoniowest.dev"
              className="text-xs font-mono text-gray-300 hover:text-white bg-gray-900 hover:bg-gray-800 px-3.5 py-1.5 rounded-md border border-gray-800 transition-colors"
            >
              Contact &bull; antonio@antoniowest.dev
            </a>
          </div>
        </div>

        {/* Primary Production Systems */}
        <div>
          <div className="text-xs font-mono text-gray-400 uppercase tracking-wider mb-4">
            Commercial Contracts &amp; ML Pipelines
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
