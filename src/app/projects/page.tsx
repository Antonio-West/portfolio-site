import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import ProjectCard from "@/components/ProjectCard";
import AnimatedBackground from "@/components/AnimatedBackground";

export const generateMetadata = (): Metadata => {
  return {
    title: "Projects | Antonio West",
    description:
      "Engineering portfolio showcasing GPU memory optimization, WebGL shaders, and applied AI systems by Antonio West.",
  };
};

const projects = [
  {
    title: "Zero-Dependency WebGL Shader & Texture Memory Optimization Pipeline",
    slug: "gpu-optimizer",
    category: "Graphics / Systems",
    description:
      "Client-side WebGL texture channel packer and GPU memory optimizer. Coalesces discrete Roughness, Metallic, AO, and Height maps into single 32-bit RGBA textures, slashing browser VRAM by up to 75% at locked 60 FPS.",
    metrics: "-75% VRAM Reduction",
    tags: ["WebGL 2.0", "GLSL", "Texture Packing", "VRAM Optimization", "PBR Pipeline"],
    liveDemoUrl: "https://tool.antoniowest.dev",
  },
  {
    title: "AI Drug Analysis & Molecular Toxicity Pipeline",
    slug: "ai-drug-pipeline",
    category: "Applied AI / ML",
    description:
      "Production ML pipeline designed to predict molecular properties and compound toxicity with high precision and SHAP explainability.",
    metrics: "R² 0.99 | RMSE 0.1577",
    tags: ["Python", "XGBoost", "SHAP", "PyArrow", "Biomedical AI"],
  },
  {
    title: "NLP Scientific Literature Analyser",
    slug: "nlp-scientific-literature-analyser",
    category: "NLP / Deep Learning",
    description:
      "Transformer-based extraction and semantic search engine for parsing scientific papers and accelerating biomedical discovery.",
    metrics: "Knowledge Graph Engine",
    tags: ["NLP", "Transformers", "Entity Linking", "Knowledge Graphs"],
  },
];

export default function ProjectsPage() {
  return (
    <div className="relative min-h-screen bg-gray-950 text-white overflow-hidden">
      <AnimatedBackground />

      <div className="relative z-10 max-w-6xl mx-auto px-4 py-12">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 border-b border-gray-800 pb-6">
          <div>
            <div className="text-xs font-mono text-blue-400 uppercase tracking-wider mb-1">
              Antonio West &bull; Portfolio
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Featured Systems & Projects
            </h1>
          </div>
          <Link
            href="/"
            className="text-sm font-mono text-gray-400 hover:text-white transition-colors inline-flex items-center gap-1.5"
          >
            &larr; Back to Overview
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
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
  );
}
