import React from "react";
import Link from "next/link";
import AnimatedBackground from "@/components/AnimatedBackground";
import GitHubIcon from "@/components/GitHubIcon";
import EmailLink from "@/components/EmailLink";
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
          <div className="text-xs font-mono text-gray-400 font-medium tracking-wider uppercase">
            Systems &bull; Next.js &bull; PostgreSQL &bull; Guarded LLM Pipelines
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Antonio West
          </h1>

          <p className="text-xl sm:text-2xl text-gray-200 font-medium leading-snug">
            Most AI prototypes break the moment data is malformed, networks drop, or latency matters. I build the production layers that make them actually work.
          </p>

          <p className="text-sm sm:text-base text-gray-300 leading-relaxed max-w-2xl">
            Contract AI engineer specialising in deterministic document parsing, offline-first client engines, and guarded LLM pipelines across Next.js and PostgreSQL. 3 years shipping resilient systems across client contracts and founder products.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <Link
              href="/projects"
              className="px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold rounded-lg shadow-md shadow-blue-500/20 transition-all"
            >
              View Systems &amp; Case Studies &rarr;
            </Link>
            <a
              href="https://github.com/antonio-west"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 bg-gray-900 hover:bg-gray-800 text-gray-200 hover:text-white text-sm font-medium rounded-lg border border-gray-800 hover:border-gray-700 transition-all inline-flex items-center gap-2 shadow-sm"
            >
              <GitHubIcon className="w-4 h-4 text-gray-300" />
              <span>GitHub</span>
            </a>
            <EmailLink
              className="px-4 py-2.5 bg-gray-900 hover:bg-gray-800 text-gray-300 hover:text-white text-sm font-medium rounded-lg border border-gray-800 hover:border-gray-700 transition-all cursor-pointer inline-flex items-center gap-1.5"
            >
              <span>Contact &bull; antonio@antoniowest.dev</span>
            </EmailLink>
          </div>
        </div>

        {/* Commercial Contracts */}
        <div className="space-y-6">
          <div className="border-b border-gray-800 pb-3 flex flex-wrap items-center justify-between gap-2">
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Commercial Client Systems
            </h2>
            <span className="text-xs sm:text-sm font-mono text-gray-300 font-medium">
              Production Contracts &bull; Shipped to Paying Users
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Contract Project 1: Be Act Change */}
            <div className="bg-gray-900/90 border border-gray-800 rounded-xl p-6 flex flex-col justify-between space-y-4 hover:border-gray-700 transition-colors">
              <div className="space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2 text-xs sm:text-sm font-mono">
                  <span className="text-gray-300 font-semibold whitespace-nowrap">
                    Contract AI Engineer &bull; Be Act Change
                  </span>
                  <span className="text-blue-400 font-medium">Next.js / GPT-4o</span>
                </div>
                <Link href="/projects/ai-document-pipeline" className="group/title block">
                  <h3 className="text-xl font-bold text-white tracking-tight group-hover/title:text-blue-400 transition-colors">
                    Document Parsing &amp; Personalised Coaching Pipeline
                  </h3>
                </Link>
                <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                  Engineered automated text extraction from multi-page PDF &amp; DOCX uploads using <code className="text-xs font-mono text-blue-300 bg-blue-950/60 px-1.5 py-0.5 rounded border border-blue-800/60">pdfjs-dist</code> and <code className="text-xs font-mono text-blue-300 bg-blue-950/60 px-1.5 py-0.5 rounded border border-blue-800/60">mammoth</code> to eliminate manual data entry. Built a 23-step dynamic onboarding engine with localStorage state recovery and automated GPT-4o output regeneration.
                </p>

                {/* Architecture Pipeline Strip */}
                <div className="bg-gray-950/80 border border-gray-800 rounded-lg p-3.5 sm:p-4 font-mono text-xs space-y-2.5">
                  <div className="text-xs uppercase tracking-wider text-gray-300 font-semibold flex items-center justify-between">
                    <span>Pipeline &bull; AST to Structured State</span>
                    <span className="text-blue-400 font-semibold">Strict JSON</span>
                  </div>
                  <div className="space-y-1.5 text-xs text-gray-300">
                    <div className="flex items-center gap-2">
                      <span className="text-blue-400 font-bold">01</span>
                      <span className="text-gray-400">Ingestion:</span>
                      <span className="text-gray-200">pdfjs-dist &amp; mammoth text extraction</span>
                    </div>
                    <div className="pl-4 border-l border-gray-700 text-gray-400 text-xs">
                      &darr; AST sanitisation &bull; structural boundary extraction &bull; prompt guardrails
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-blue-400 font-bold">02</span>
                      <span className="text-gray-400">Synthesis:</span>
                      <span className="text-gray-200">GPT-4o schema validation (Strict JSON)</span>
                    </div>
                    <div className="pl-4 border-l border-gray-700 text-gray-400 text-xs">
                      &darr; State transition dispatch with schema validation
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-emerald-400 font-bold">03</span>
                      <span className="text-gray-400">Client Engine:</span>
                      <span className="text-gray-200">23-step machine with localStorage sync</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-1">
                  {["Next.js", "TypeScript", "GPT-4o", "pdfjs-dist", "mammoth", "shadcn/ui"].map((t) => (
                    <span key={t} className="text-xs font-mono bg-gray-800/90 border border-gray-700 text-gray-300 px-2.5 py-1 rounded">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div className="pt-3 border-t border-gray-800/80">
                <Link
                  href="/projects/ai-document-pipeline"
                  className="text-sm font-mono font-medium text-blue-400 hover:text-blue-300 inline-flex items-center gap-1.5 transition-colors group/cta"
                >
                  <span>Read System Architecture</span>
                  <span className="group-hover/cta:translate-x-1 transition-transform">&rarr;</span>
                </Link>
              </div>
            </div>

            {/* Contract Project 2: Alive Industries / ChatSDK */}
            <div className="bg-gray-900/90 border border-gray-800 rounded-xl p-6 flex flex-col justify-between space-y-4 hover:border-gray-700 transition-colors">
              <div className="space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2 text-xs sm:text-sm font-mono">
                  <span className="text-gray-300 font-semibold whitespace-nowrap">
                    Contract Developer &bull; Alive Industries
                  </span>
                  <span className="text-blue-400 font-medium">Whereby / Drizzle</span>
                </div>
                <Link href="/projects/meeting-intelligence-engine" className="group/title block">
                  <h3 className="text-xl font-bold text-white tracking-tight group-hover/title:text-blue-400 transition-colors">
                    Meeting Audio Summarisation &amp; Intelligence Engine
                  </h3>
                </Link>
                <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                  Architected meeting intelligence pipeline ingesting Whereby recordings through a multi-provider LLM layer. Engineered background processing with caching and real-time polling for transcripts, persisting structured action items via Drizzle ORM &amp; PostgreSQL.
                </p>

                {/* Architecture Pipeline Strip */}
                <div className="bg-gray-950/80 border border-gray-800 rounded-lg p-3.5 sm:p-4 font-mono text-xs space-y-2.5">
                  <div className="text-xs uppercase tracking-wider text-gray-300 font-semibold flex items-center justify-between">
                    <span>Pipeline &bull; Audio to Relational DB</span>
                    <span className="text-blue-400 font-semibold">Async Polling</span>
                  </div>
                  <div className="space-y-1.5 text-xs text-gray-300">
                    <div className="flex items-center gap-2">
                      <span className="text-blue-400 font-bold">01</span>
                      <span className="text-gray-400">Trigger:</span>
                      <span className="text-gray-200">Whereby recording webhook listener</span>
                    </div>
                    <div className="pl-4 border-l border-gray-700 text-gray-400 text-xs">
                      &darr; Audio pipeline worker &bull; transcript cache &bull; retry polling
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-blue-400 font-bold">02</span>
                      <span className="text-gray-400">Intelligence:</span>
                      <span className="text-gray-200">Multi-provider LLM transcript summarisation</span>
                    </div>
                    <div className="pl-4 border-l border-gray-700 text-gray-400 text-xs">
                      &darr; Action item &bull; decision point extraction
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-emerald-400 font-bold">03</span>
                      <span className="text-gray-400">Persistence:</span>
                      <span className="text-gray-200">Drizzle ORM schema into PostgreSQL</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-1">
                  {["TypeScript", "Next.js", "PostgreSQL", "Drizzle ORM", "Whereby API", "Biome"].map((t) => (
                    <span key={t} className="text-xs font-mono bg-gray-800/90 border border-gray-700 text-gray-300 px-2.5 py-1 rounded">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div className="pt-3 border-t border-gray-800/80">
                <Link
                  href="/projects/meeting-intelligence-engine"
                  className="text-sm font-mono font-medium text-blue-400 hover:text-blue-300 inline-flex items-center gap-1.5 transition-colors group/cta"
                >
                  <span>Read System Architecture</span>
                  <span className="group-hover/cta:translate-x-1 transition-transform">&rarr;</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Featured Production Application */}
        <div className="space-y-6">
          <div className="border-b border-gray-800 pb-3 flex flex-wrap items-center justify-between gap-2">
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Featured Application &bull; Veribite
            </h2>
            <span className="text-xs sm:text-sm font-mono text-emerald-400 font-medium">
              Founder Case Study &bull; 70,000+ UK Products
            </span>
          </div>

          <div className="bg-gray-900/90 border border-gray-800 rounded-xl p-6 sm:p-8 space-y-5 hover:border-gray-700 transition-colors">
            <div className="flex flex-wrap items-center justify-between gap-3 text-xs sm:text-sm font-mono">
              <span className="text-gray-300 font-semibold whitespace-nowrap">
                Founder &amp; Lead Engineer &bull; Veribite
              </span>
              <span className="text-emerald-400 font-medium text-xs sm:text-sm">Offline-First PWA &bull; Supermarket Barcode Engine</span>
            </div>

            <div className="space-y-2">
              <Link href="/projects/veribite" className="group/title block">
                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight group-hover/title:text-blue-400 transition-colors">
                  Veribite &mdash; Sub-Second Allergen &amp; Ingredient Scanner
                </h3>
              </Link>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed max-w-3xl">
                Consumer food safety web application indexing 70,000+ UK grocery items for instant allergen verdicts in low-signal supermarket aisles. Built with client-side barcode scanning, an offline-first indexed cache, and a deterministic 14 EU allergen taxonomy matching engine. Built and pitched to Bethnal Green Ventures' Tech for Good programme.
              </p>
            </div>

            {/* Architecture Pipeline Strip */}
            <div className="bg-gray-950/80 border border-gray-800 rounded-lg p-3.5 sm:p-4 font-mono text-xs space-y-2.5">
              <div className="text-xs uppercase tracking-wider text-gray-300 font-semibold flex items-center justify-between">
                <span>Runtime Architecture &bull; Offline-First Scanner</span>
                <span className="text-emerald-400 font-semibold">&lt;1s Zero-Network Verdict</span>
              </div>
              <div className="space-y-1.5 text-xs text-gray-300">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-blue-400 font-bold">01</span>
                  <span className="text-gray-400">Continuous Camera Feed:</span>
                  <span className="text-gray-200">Client-side Web Worker (WASM) barcode decoding</span>
                </div>
                <div className="pl-4 border-l border-gray-700 text-gray-400 text-xs">
                  &darr; Sub-second EAN/UPC resolution without network dependency
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-blue-400 font-bold">02</span>
                  <span className="text-gray-400">Client Cache Query:</span>
                  <span className="text-gray-200">IndexedDB local catalog (70,000+ UK products, &lt;10ms query)</span>
                </div>
                <div className="pl-4 border-l border-gray-700 text-gray-400 text-xs">
                  &darr; Deterministic ingredient &bull; allergen taxonomy matching
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-emerald-400 font-bold">03</span>
                  <span className="text-gray-400">Deterministic Verdict:</span>
                  <span className="text-gray-200">14 EU allergen cross-reference with instant binary safety display</span>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {["Next.js", "TypeScript", "Offline-First", "Barcode API", "14 EU Allergens", "Tailwind CSS"].map((t) => (
                <span key={t} className="text-xs font-mono bg-gray-800/90 border border-gray-700 text-gray-300 px-2.5 py-1 rounded">
                  {t}
                </span>
              ))}
            </div>

            <div className="pt-4 border-t border-gray-800/80 flex flex-wrap items-center justify-between gap-4">
              <Link
                href="/projects/veribite"
                className="text-sm font-mono font-medium text-blue-400 hover:text-blue-300 inline-flex items-center gap-1.5 transition-colors group/cta"
              >
                <span>Read Architecture &amp; Pitch Case Study</span>
                <span className="group-hover/cta:translate-x-1 transition-transform">&rarr;</span>
              </Link>
              <a
                href="https://veribite.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs sm:text-sm font-mono text-white bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded-md font-medium transition-colors inline-flex items-center gap-1.5 shadow-md shadow-blue-500/20"
              >
                Visit Live App (veribite.com) &#x2197;
              </a>
            </div>
          </div>
        </div>

        {/* Technical Experiments & Additional Systems */}
        <div className="space-y-6">
          <div className="border-b border-gray-800 pb-3 flex flex-wrap items-center justify-between gap-2">
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Technical Experiments &amp; Systems
            </h2>
            <span className="text-xs sm:text-sm font-mono text-gray-300 font-medium">
              Applied ML &bull; WebGL Graphics
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Experiment 1: Molecular Toxicity */}
            <div className="bg-gray-900/90 border border-gray-800 rounded-xl p-6 flex flex-col justify-between space-y-4 hover:border-gray-700 transition-colors">
              <div className="space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2 text-xs sm:text-sm font-mono">
                  <span className="text-gray-300 font-semibold whitespace-nowrap">
                    Applied Machine Learning &bull; Drug Discovery
                  </span>
                  <span className="text-emerald-400 font-medium">R² 0.99 | RMSE 0.1577</span>
                </div>
                <Link href="/projects/ai-drug-pipeline" className="group/title block">
                  <h3 className="text-xl font-bold text-white tracking-tight group-hover/title:text-blue-400 transition-colors">
                    Molecular Toxicity &amp; Property ML Pipeline
                  </h3>
                </Link>
                <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                  High-throughput machine learning pipeline predicting molecular properties and compound toxicity with TreeSHAP explainability and partitioned Parquet data streaming for memory efficiency.
                </p>

                {/* Architecture Pipeline Strip */}
                <div className="bg-gray-950/80 border border-gray-800 rounded-lg p-3.5 sm:p-4 font-mono text-xs space-y-2.5">
                  <div className="text-xs uppercase tracking-wider text-gray-300 font-semibold flex items-center justify-between">
                    <span>Pipeline &bull; Parquet to Explainable ML</span>
                    <span className="text-blue-400 font-semibold">TreeSHAP</span>
                  </div>
                  <div className="space-y-1.5 text-xs text-gray-300">
                    <div className="flex items-center gap-2">
                      <span className="text-blue-400 font-bold">01</span>
                      <span className="text-gray-400">Data Stream:</span>
                      <span className="text-gray-200">PyArrow partitioned Parquet chunking</span>
                    </div>
                    <div className="pl-4 border-l border-gray-700 text-gray-400 text-xs">
                      &darr; Molecular descriptor normalisation &bull; chemical property tensors
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-blue-400 font-bold">02</span>
                      <span className="text-gray-400">Inference:</span>
                      <span className="text-gray-200">XGBoost regression with hyperparameter tuning</span>
                    </div>
                    <div className="pl-4 border-l border-gray-700 text-gray-400 text-xs">
                      &darr; Feature attribution &bull; toxic substructure mapping
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-emerald-400 font-bold">03</span>
                      <span className="text-gray-400">Attribution:</span>
                      <span className="text-gray-200">Granular TreeSHAP explainability plots</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-1">
                  {["Python", "XGBoost", "TreeSHAP", "PyArrow", "Parquet", "Scikit-Learn"].map((t) => (
                    <span key={t} className="text-xs font-mono bg-gray-800/90 border border-gray-700 text-gray-300 px-2.5 py-1 rounded">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div className="pt-3 border-t border-gray-800/80">
                <Link
                  href="/projects/ai-drug-pipeline"
                  className="text-sm font-mono font-medium text-blue-400 hover:text-blue-300 inline-flex items-center gap-1.5 transition-colors group/cta"
                >
                  <span>Read System Architecture</span>
                  <span className="group-hover/cta:translate-x-1 transition-transform">&rarr;</span>
                </Link>
              </div>
            </div>

            {/* Experiment 2: WebGL GPU Optimizer */}
            <div className="bg-gray-900/90 border border-gray-800 rounded-xl p-6 flex flex-col justify-between space-y-4 hover:border-gray-700 transition-colors">
              <div className="space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2 text-xs sm:text-sm font-mono">
                  <span className="text-gray-300 font-semibold whitespace-nowrap">
                    Graphics Systems &bull; WebGL 2.0
                  </span>
                  <span className="text-emerald-400 font-medium">-75% VRAM Reduction</span>
                </div>
                <Link href="/projects/gpu-optimizer" className="group/title block">
                  <h3 className="text-xl font-bold text-white tracking-tight group-hover/title:text-blue-400 transition-colors">
                    Zero-Dependency WebGL Shader &amp; Texture Memory Optimizer
                  </h3>
                </Link>
                <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                  Client-side utility that packs discrete PBR material channels (Roughness, Metallic, AO, Height) into single 32-bit RGBA textures, cutting browser VRAM footprint by up to 75% while locking rendering at 60 FPS.
                </p>

                {/* Architecture Pipeline Strip */}
                <div className="bg-gray-950/80 border border-gray-800 rounded-lg p-3.5 sm:p-4 font-mono text-xs space-y-2.5">
                  <div className="text-xs uppercase tracking-wider text-gray-300 font-semibold flex items-center justify-between">
                    <span>Pipeline &bull; PBR Channel Packing to Canvas</span>
                    <span className="text-blue-400 font-semibold">60 FPS Locked</span>
                  </div>
                  <div className="space-y-1.5 text-xs text-gray-300">
                    <div className="flex items-center gap-2">
                      <span className="text-blue-400 font-bold">01</span>
                      <span className="text-gray-400">Texture Input:</span>
                      <span className="text-gray-200">Discrete R, G, B, A channel source streams</span>
                    </div>
                    <div className="pl-4 border-l border-gray-700 text-gray-400 text-xs">
                      &darr; Fragment shader multi-pass coalescing &bull; memory alignment
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-blue-400 font-bold">02</span>
                      <span className="text-gray-400">GPU Packing:</span>
                      <span className="text-gray-200">Custom GLSL fragment shader packing pass</span>
                    </div>
                    <div className="pl-4 border-l border-gray-700 text-gray-400 text-xs">
                      &darr; 4 texture samplers reduced to 1 unified 32-bit texture
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-emerald-400 font-bold">03</span>
                      <span className="text-gray-400">Output:</span>
                      <span className="text-gray-200">Three.js / WebGL viewport with 75% VRAM savings</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-1">
                  {["WebGL 2.0", "GLSL Shaders", "TypeScript", "Three.js", "PBR Texture Packing", "HTML5 Canvas"].map((t) => (
                    <span key={t} className="text-xs font-mono bg-gray-800/90 border border-gray-700 text-gray-300 px-2.5 py-1 rounded">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div className="pt-3 border-t border-gray-800/80 flex items-center justify-between gap-4">
                <Link
                  href="/projects/gpu-optimizer"
                  className="text-sm font-mono font-medium text-blue-400 hover:text-blue-300 inline-flex items-center gap-1.5 transition-colors group/cta"
                >
                  <span>Read System Architecture</span>
                  <span className="group-hover/cta:translate-x-1 transition-transform">&rarr;</span>
                </Link>
                <a
                  href="https://tool.antoniowest.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs sm:text-sm font-mono text-gray-200 hover:text-white bg-gray-800 hover:bg-gray-700 px-3 py-1.5 rounded border border-gray-700 transition-colors inline-flex items-center gap-1"
                >
                  Live Demo &#x2197;
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* How I Build / Production Rules */}
        <div className="space-y-6">
          <div className="border-b border-gray-800 pb-3 flex flex-wrap items-center justify-between gap-2">
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              How I Build
            </h2>
            <span className="text-xs sm:text-sm font-mono text-blue-400 font-semibold uppercase tracking-wider">
              Production Convictions &bull; Operational Reality
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-900/90 border border-gray-800 rounded-xl p-5 sm:p-6 space-y-3 hover:border-gray-700 transition-colors h-full flex flex-col">
              <div className="text-xs sm:text-sm font-mono text-blue-400 font-semibold tracking-wide">01 &bull; Deterministic First</div>
              <h3 className="text-lg font-bold text-white tracking-tight">Code before prompt prayer</h3>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed flex-1">
                If a parser, regex, or 20-line rule can solve it with perfect reliability and zero latency, the LLM has no business near it. Models are for synthesis and fuzzy extraction&mdash;never for core business logic.
              </p>
            </div>

            <div className="bg-gray-900/90 border border-gray-800 rounded-xl p-5 sm:p-6 space-y-3 hover:border-gray-700 transition-colors h-full flex flex-col">
              <div className="text-xs sm:text-sm font-mono text-blue-400 font-semibold tracking-wide">02 &bull; Edge Reality</div>
              <h3 className="text-lg font-bold text-white tracking-tight">Client-first when networks fail</h3>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed flex-1">
                Trains, supermarket basements, and flaky mobile connections are the real environment. If a 70k product index or interactive workflow can live in a client worker, keep it off the server. Zero network hops, zero network failure.
              </p>
            </div>

            <div className="bg-gray-900/90 border border-gray-800 rounded-xl p-5 sm:p-6 space-y-3 hover:border-gray-700 transition-colors h-full flex flex-col">
              <div className="text-xs sm:text-sm font-mono text-blue-400 font-semibold tracking-wide">03 &bull; State Is Sacred</div>
              <h3 className="text-lg font-bold text-white tracking-tight">Recovery is not an afterthought</h3>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed flex-1">
                Complex flows die the moment a refresh or timeout wipes state. Every critical path needs a deterministic state machine, local snapshots, and optimistic execution&mdash;or it will break in production.
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-mono text-gray-400">
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="https://github.com/antonio-west"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors inline-flex items-center gap-1.5 whitespace-nowrap"
            >
              <GitHubIcon className="w-3.5 h-3.5 text-gray-400" />
              <span>github.com/antonio-west</span>
            </a>
            <span className="text-gray-700">&bull;</span>
            <EmailLink className="text-gray-300 hover:text-white transition-colors whitespace-nowrap cursor-pointer" />
          </div>
          <div>
            <Link
              href="/projects"
              className="text-sm font-mono font-medium text-white hover:text-blue-400 transition-colors inline-flex items-center gap-1 whitespace-nowrap"
            >
              View Full Systems Archive &rarr;
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

