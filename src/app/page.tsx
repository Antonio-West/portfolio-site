import React from "react";
import Link from "next/link";
import AnimatedBackground from "@/components/AnimatedBackground";
import type { Metadata } from "next";

export const generateMetadata = (): Metadata => {
  return {
    title: "Antonio West | Full-Stack AI & LLM Systems Engineer",
    description:
      "Full-Stack AI Engineer specializing in Next.js, PostgreSQL, OpenAI APIs, and automated document & audio extraction pipelines.",
  };
};

export default function Home() {
  return (
    <div className="relative min-h-screen bg-gray-950 text-white overflow-hidden">
      <AnimatedBackground speedMultiplier={0.05} />

      <div className="relative z-10 max-w-5xl mx-auto px-4 py-16 sm:py-20 space-y-16">
        {/* Hero Section */}
        <div className="space-y-6 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono">
            TypeScript &bull; Next.js &bull; PostgreSQL &bull; OpenAI APIs
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Antonio West
          </h1>

          <p className="text-xl text-gray-200 font-medium">
            Full-Stack AI Engineer architecting production LLM pipelines, automated document extraction, and high-availability Next.js applications.
          </p>

          <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
            3 years shipping production systems. Contract experience architecting document ingestion pipelines (<code className="text-xs font-mono text-blue-300">pdfjs-dist</code>, <code className="text-xs font-mono text-blue-300">mammoth</code>, GPT-4o), meeting intelligence engines (Whereby API + Drizzle/Postgres), and resilient client-side web architectures.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <Link
              href="/projects"
              className="px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold rounded-lg shadow-md shadow-blue-500/20 transition-all"
            >
              View Production Case Studies &rarr;
            </Link>
            <a
              href="mailto:antoniowestdev@gmail.com"
              className="px-5 py-2.5 bg-gray-900 hover:bg-gray-800 text-gray-300 hover:text-white text-sm font-medium rounded-lg border border-gray-800 transition-all"
            >
              Contact &bull; antoniowestdev@gmail.com
            </a>
          </div>
        </div>

        {/* Real Contract Highlights Section */}
        <div className="space-y-6">
          <div className="border-b border-gray-800 pb-3">
            <h2 className="text-lg font-bold font-mono uppercase tracking-wider text-gray-300">
              Shipped Commercial Systems
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Contract Project 1: Be Act Change */}
            <div className="bg-gray-900/90 border border-gray-800 rounded-xl p-6 flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded border border-blue-500/20">
                    Contract AI Engineer &bull; Be Act Change
                  </span>
                  <span className="text-gray-500">Next.js / GPT-4o</span>
                </div>
                <h3 className="text-lg font-bold text-white">
                  Document Parsing &amp; Personalised Coaching Pipeline
                </h3>
                <p className="text-sm text-gray-300 leading-relaxed">
                  Engineered automated text extraction from multi-page PDF &amp; DOCX uploads using <code className="text-xs font-mono text-gray-200">pdfjs-dist</code> and <code className="text-xs font-mono text-gray-200">mammoth</code> to eliminate manual data entry. Built a 23-step dynamic onboarding engine with localStorage state recovery and automated GPT-4o output regeneration.
                </p>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {["Next.js", "TypeScript", "GPT-4o", "pdfjs-dist", "mammoth", "shadcn/ui"].map((t) => (
                    <span key={t} className="text-xs font-mono bg-gray-800 text-gray-400 px-2 py-0.5 rounded">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div className="pt-2 border-t border-gray-800/80">
                <Link
                  href="/projects/ai-document-pipeline"
                  className="text-xs font-mono text-blue-400 hover:text-blue-300 inline-flex items-center gap-1"
                >
                  Read System Architecture &rarr;
                </Link>
              </div>
            </div>

            {/* Contract Project 2: Alive Industries / ChatSDK */}
            <div className="bg-gray-900/90 border border-gray-800 rounded-xl p-6 flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                    Contract Developer &bull; Alive Industries
                  </span>
                  <span className="text-gray-500">Whereby / Drizzle</span>
                </div>
                <h3 className="text-lg font-bold text-white">
                  Meeting Audio Summarisation &amp; Intelligence Engine
                </h3>
                <p className="text-sm text-gray-300 leading-relaxed">
                  Architected meeting intelligence pipeline ingesting Whereby recordings through a multi-provider LLM layer. Engineered background processing with caching and real-time polling for transcripts, persisting structured action items via Drizzle ORM &amp; PostgreSQL.
                </p>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {["TypeScript", "Next.js", "PostgreSQL", "Drizzle ORM", "Whereby API", "Biome"].map((t) => (
                    <span key={t} className="text-xs font-mono bg-gray-800 text-gray-400 px-2 py-0.5 rounded">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div className="pt-2 border-t border-gray-800/80">
                <Link
                  href="/projects/meeting-intelligence-engine"
                  className="text-xs font-mono text-blue-400 hover:text-blue-300 inline-flex items-center gap-1"
                >
                  Read System Architecture &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Technical Deep Dives & Side Projects */}
        <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-mono text-gray-400">
          <div>Other Projects:</div>
          <div className="flex flex-wrap gap-4">
            <Link href="/projects/ai-drug-pipeline" className="hover:text-blue-400 transition-colors">
              &bull; Molecular Toxicity ML Pipeline (GitLab) &rarr;
            </Link>
            <a href="https://tool.antoniowest.dev" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
              &bull; WebGL Texture &amp; VRAM Packer (Live Demo ↗)
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

