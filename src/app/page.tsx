import React from "react";
import Link from "next/link";
import AnimatedBackground from "@/components/AnimatedBackground";
import type { Metadata } from "next";

export const generateMetadata = (): Metadata => {
  return {
    title: "Antonio West | AI Document Automation & Workflow Systems",
    description:
      "Production AI document pipelines, workflow automations, and full-stack Next.js + LLM systems by Antonio West.",
  };
};

export default function Home() {
  return (
    <div className="relative min-h-screen bg-gray-950 text-white overflow-hidden">
      <AnimatedBackground speedMultiplier={0.08} />

      <div className="relative z-10 max-w-5xl mx-auto px-4 py-16 sm:py-24 space-y-16">
        {/* Hero Section */}
        <div className="text-center space-y-6 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-mono tracking-wide uppercase">
            Fixed-Scope AI Document &amp; Workflow Sprints
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-white via-gray-100 to-gray-400 bg-clip-text text-transparent">
            Automating Unstructured Document Workflows with Production AI
          </h1>

          <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
            I turn messy PDFs, contracts, invoices, and unstructured operational documents into validated, structured data synced straight into your CRM or database.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link href="/projects">
              <button className="px-6 py-3 bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-white font-semibold rounded-lg shadow-lg shadow-blue-500/20 transition-all cursor-pointer">
                View Systems &amp; Case Studies &rarr;
              </button>
            </Link>
            <a
              href="mailto:antoniowestdev@gmail.com"
              className="px-6 py-3 bg-gray-900 hover:bg-gray-800 text-gray-200 font-medium rounded-lg border border-gray-800 hover:border-gray-700 transition-all"
            >
              Get in Touch &rarr;
            </a>
          </div>
        </div>

        {/* What I Deliver Grid */}
        <div className="space-y-6">
          <div className="text-center">
            <div className="text-xs font-mono text-gray-400 uppercase tracking-widest">
              The Architecture
            </div>
            <h2 className="text-2xl font-bold mt-1 text-white">
              What I Deliver in 7-Day Sprints
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-900/80 border border-gray-800 rounded-xl p-6 shadow-xl">
              <div className="text-xs font-mono text-blue-400 uppercase mb-2">01 / Ingestion &amp; OCR</div>
              <h3 className="text-lg font-bold text-white mb-2">Multi-Format Ingestion</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Automated listeners for email inboxes, webhook uploads, and drag-and-drop portals. Handles multi-page PDFs, scanned paperwork, and Word docs with zero manual effort.
              </p>
            </div>

            <div className="bg-gray-900/80 border border-gray-800 rounded-xl p-6 shadow-xl">
              <div className="text-xs font-mono text-emerald-400 uppercase mb-2">02 / AI Extraction</div>
              <h3 className="text-lg font-bold text-white mb-2">Schema-Validated Extraction</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Powered by state-of-the-art LLMs with strict Zod/JSON Schema validation, automated error retries, and confidence scoring to flag edge cases for human review.
              </p>
            </div>

            <div className="bg-gray-900/80 border border-gray-800 rounded-xl p-6 shadow-xl">
              <div className="text-xs font-mono text-purple-400 uppercase mb-2">03 / Dashboard &amp; Sync</div>
              <h3 className="text-lg font-bold text-white mb-2">Operator Review &amp; CRM Sync</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Side-by-side Next.js operator screen with 1-click approvals and direct automatic sync into Google Sheets, PostgreSQL, Supabase, or custom CRM webhooks.
              </p>
            </div>
          </div>
        </div>

        {/* Secondary Side Projects & Deep Tech */}
        <div className="border-t border-gray-800/80 pt-10 text-center space-y-3">
          <p className="text-xs font-mono text-gray-500 uppercase tracking-wider">
            Technical Deep Dives &amp; Engineering Projects
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-400">
            <Link
              href="/projects/ai-drug-pipeline"
              className="hover:text-blue-400 transition-colors inline-flex items-center gap-1"
            >
              &bull; AI Drug Discovery &amp; Toxicity ML Pipeline &rarr;
            </Link>
            <Link
              href="/projects/gpu-optimizer"
              className="hover:text-blue-400 transition-colors inline-flex items-center gap-1"
            >
              &bull; WebGL Texture &amp; GPU Memory Optimizer (Side Project) &rarr;
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

