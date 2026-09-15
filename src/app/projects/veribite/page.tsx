import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import AnimatedBackground from "@/components/AnimatedBackground";
import GitHubIcon from "@/components/GitHubIcon";

export const generateMetadata = (): Metadata => {
  return {
    title: "Veribite — Offline-First Allergen & Ingredient Scanner | Antonio West",
    description:
      "Architecture breakdown of Veribite, an offline-first consumer food safety app indexing 70k+ UK products with sub-second barcode allergen verdicts.",
  };
};

export default function VeribitePage() {
  return (
    <div className="relative min-h-screen bg-gray-950 text-white overflow-hidden">
      <AnimatedBackground speedMultiplier={0.05} />

      <div className="relative z-10 max-w-5xl mx-auto px-4 py-12">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <Link
            href="/projects"
            className="text-sm font-mono text-gray-400 hover:text-white transition-colors inline-flex items-center gap-1.5"
          >
            &larr; Back to Projects
          </Link>
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-xs font-mono text-gray-400 font-medium">
              Founder &amp; Lead Engineer &bull; Veribite
            </span>
            <a
              href="https://github.com/antonio-west"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono text-gray-300 hover:text-white bg-gray-900 hover:bg-gray-800 px-3 py-1.5 rounded-md border border-gray-800 hover:border-gray-700 transition-colors inline-flex items-center gap-1.5"
            >
              <GitHubIcon className="w-3.5 h-3.5 text-gray-400" />
              <span>GitHub</span>
            </a>
            <a
              href="https://veribite.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono text-white bg-blue-600 hover:bg-blue-500 px-3.5 py-1.5 rounded-md font-medium transition-colors inline-flex items-center gap-1 shadow-md shadow-blue-500/20"
            >
              Visit Live App (veribite.com) &#x2197;
            </a>
          </div>
        </div>

        {/* Hero Section */}
        <section className="border-b border-gray-800 pb-10 mb-10">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4 text-white">
            Veribite — Offline-First Allergen &amp; Ingredient Intelligence
          </h1>
          <p className="text-base sm:text-lg text-gray-300 max-w-3xl leading-relaxed">
            Engineered an offline-first consumer mobile web platform designed to solve supermarket allergen confusion. Scans grocery barcodes and returns instant, personalised Go/No-Go verdicts against 70,000+ UK products and 14 EU-regulated allergens—even in low-signal supermarket basements.
          </p>
        </section>

        {/* Performance Metrics */}
        <section className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
          <div className="bg-gray-900/80 border border-gray-800 p-4 rounded-lg">
            <div className="text-2xl font-extrabold text-white font-mono">70,000+</div>
            <div className="text-xs text-gray-400 mt-1">UK Products Indexed</div>
          </div>
          <div className="bg-gray-900/80 border border-gray-800 p-4 rounded-lg">
            <div className="text-2xl font-extrabold text-white font-mono">&lt;1s</div>
            <div className="text-xs text-gray-400 mt-1">Barcode Verdict Time</div>
          </div>
          <div className="bg-gray-900/80 border border-gray-800 p-4 rounded-lg">
            <div className="text-2xl font-extrabold text-white font-mono">100%</div>
            <div className="text-xs text-gray-400 mt-1">Offline-Ready in Store</div>
          </div>
          <div className="bg-gray-900/80 border border-gray-800 p-4 rounded-lg">
            <div className="text-2xl font-extrabold text-white font-mono">14 EU</div>
            <div className="text-xs text-gray-400 mt-1">Regulated Allergens</div>
          </div>
        </section>

        {/* Engineering Architecture */}
        <section className="space-y-6 mb-12">
          <h2 className="text-xl font-bold font-mono text-gray-200 uppercase tracking-wider">
            Engineering Architecture
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-900/90 border border-gray-800 rounded-xl p-6">
              <div className="text-xs font-mono text-blue-400 uppercase mb-2">01 / Ingestion Layer</div>
              <h3 className="text-base sm:text-lg font-bold text-white mb-2 tracking-tight">Sub-Second Barcode Scanning</h3>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                Integrated browser-based video stream processing and client-side barcode detection, eliminating round-trip server latency for barcode parsing. The scanner captures EAN-13 and UPC codes instantly via camera stream with automated bounding-box stabilization.
              </p>
            </div>

            <div className="bg-gray-900/90 border border-gray-800 rounded-xl p-6">
              <div className="text-xs font-mono text-emerald-400 uppercase mb-2">02 / Persistence &amp; Caching</div>
              <h3 className="text-base sm:text-lg font-bold text-white mb-2 tracking-tight">Offline-First Indexed Product Cache</h3>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                Supermarkets are notorious for dead cellular zones. Designed an offline-first storage architecture that caches frequently scanned UK grocery lines locally, enabling instant verdict lookups even when offline in supermarket aisles.
              </p>
            </div>

            <div className="bg-gray-900/90 border border-gray-800 rounded-xl p-6">
              <div className="text-xs font-mono text-purple-400 uppercase mb-2">03 / Rule Engine</div>
              <h3 className="text-base sm:text-lg font-bold text-white mb-2 tracking-tight">14 EU Allergen Matching &amp; Safe Swaps</h3>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                Engineered a deterministic evaluation engine that normalises raw manufacturer ingredient text against strict taxonomy rules for gluten, dairy, nuts, soy, and 10 other allergens, automatically recommending verified safe product alternatives.
              </p>
            </div>

            <div className="bg-gray-900/90 border border-gray-800 rounded-xl p-6">
              <div className="text-xs font-mono text-amber-400 uppercase mb-2">04 / Product Validation</div>
              <h3 className="text-base sm:text-lg font-bold text-white mb-2 tracking-tight">User Testing &amp; Accelerator Pitch</h3>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                Interviewed and pitched at Bethnal Green Ventures' Tech for Good programme following prototype validation with UK food allergy communities and London in-store trials.
              </p>
            </div>
          </div>
        </section>

        {/* Tech Stack */}
        <section className="bg-gray-900/60 border border-gray-800 rounded-xl p-6 mb-12">
          <h3 className="text-sm font-bold font-mono text-gray-300 uppercase tracking-wider mb-3">
            Technology Stack &bull; Veribite
          </h3>
          <div className="flex flex-wrap gap-2">
            {[
              "Next.js",
              "TypeScript",
              "React",
              "Tailwind CSS",
              "PWA / Mobile Web",
              "Offline-First Indexing",
              "Barcode Detection API",
              "14 EU Allergen Taxonomy",
              "Vercel Deployment"
            ].map((tech) => (
              <span key={tech} className="text-xs font-mono bg-gray-800/80 border border-gray-700/60 text-gray-300 px-3 py-1 rounded">
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* Footer CTA */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-gray-800 text-sm">
          <div className="flex items-center gap-4">
            <Link href="/projects" className="text-blue-400 hover:text-blue-300 font-mono text-xs">
              &larr; Back to all projects
            </Link>
            <span className="text-gray-700">&bull;</span>
            <a
              href="https://github.com/antonio-west"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono text-gray-400 hover:text-white transition-colors inline-flex items-center gap-1.5 whitespace-nowrap"
            >
              <GitHubIcon className="w-3.5 h-3.5" />
              <span>github.com/antonio-west</span>
            </a>
          </div>
          <a
            href="https://veribite.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-mono text-white bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded-md font-medium transition-colors inline-flex items-center gap-1.5 shadow-md shadow-blue-500/20"
          >
            Launch Live Website: veribite.com &#x2197;
          </a>
        </div>
      </div>
    </div>
  );
}
