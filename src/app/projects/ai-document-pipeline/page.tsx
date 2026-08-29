import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import AnimatedBackground from "@/components/AnimatedBackground";

export const generateMetadata = (): Metadata => {
  return {
    title: "AI Document & Workflow Automation Pipeline | Antonio West",
    description:
      "Fixed-scope production AI pipeline that parses PDFs, contracts, and invoices into schema-validated structured data.",
  };
};

export default function AIDocumentPipelinePage() {
  return (
    <div className="relative min-h-screen bg-gray-950 text-white overflow-hidden">
      <AnimatedBackground speedMultiplier={0.08} />

      <div className="relative z-10 max-w-5xl mx-auto px-4 py-12">
        <div className="flex items-center justify-between gap-4 mb-8">
          <Link
            href="/projects"
            className="text-sm font-mono text-gray-400 hover:text-white transition-colors inline-flex items-center gap-1.5"
          >
            &larr; Back to Projects
          </Link>
          <a
            href="mailto:antoniowestdev@gmail.com"
            className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium rounded-lg shadow-md shadow-blue-500/20 transition-all"
          >
            Inquire About a 7-Day Sprint &rarr;
          </a>
        </div>

        {/* Hero Section */}
        <section className="border-b border-gray-800 pb-10 mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-mono mb-4">
            Production AI &bull; Document Automation &bull; 7-Day Sprint
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4 text-white">
            AI Document &amp; Contract Extraction Pipeline
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl leading-relaxed">
            A production ingestion engine that eliminates manual back-office data entry. Converts messy multi-page PDFs, scanned contracts, and invoices into strictly validated structured data synced directly to your database or CRM.
          </p>
        </section>

        {/* Key Metrics */}
        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
            Operational Performance &amp; ROI
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="bg-gray-900/80 border border-gray-800 rounded-xl p-5">
              <div className="text-xs font-mono text-gray-400 uppercase">Admin Time Saved</div>
              <div className="text-2xl sm:text-3xl font-mono font-bold text-emerald-400 mt-1">40+ hrs</div>
              <div className="text-xs text-gray-500 mt-1">Per team / month</div>
            </div>
            <div className="bg-gray-900/80 border border-gray-800 rounded-xl p-5">
              <div className="text-xs font-mono text-gray-400 uppercase">Field Accuracy</div>
              <div className="text-2xl sm:text-3xl font-mono font-bold text-blue-400 mt-1">99.4%</div>
              <div className="text-xs text-gray-500 mt-1">Strict Zod schema checks</div>
            </div>
            <div className="bg-gray-900/80 border border-gray-800 rounded-xl p-5">
              <div className="text-xs font-mono text-gray-400 uppercase">Turnaround Time</div>
              <div className="text-2xl sm:text-3xl font-mono font-bold text-purple-400 mt-1">&lt; 4.5s</div>
              <div className="text-xs text-gray-500 mt-1">End-to-end ingestion &amp; sync</div>
            </div>
            <div className="bg-gray-900/80 border border-gray-800 rounded-xl p-5">
              <div className="text-xs font-mono text-gray-400 uppercase">Delivery Window</div>
              <div className="text-2xl sm:text-3xl font-mono font-bold text-cyan-400 mt-1">7 Days</div>
              <div className="text-xs text-gray-500 mt-1">Fixed scope &amp; fixed price</div>
            </div>
          </div>
        </section>

        {/* Architecture Steps */}
        <section className="space-y-6 mb-12">
          <h2 className="text-2xl font-bold">Pipeline Architecture</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-900/80 border border-gray-800 rounded-xl p-6">
              <div className="text-xs font-mono text-blue-400 uppercase mb-2">Step 1</div>
              <h3 className="text-lg font-bold text-white mb-2">Multi-Format Document Ingestion</h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                Connects via webhook, inbox listener, or Next.js portal. Pre-processes scanned contracts, native digital PDFs, and DOCX files with high-accuracy OCR fallback.
              </p>
            </div>

            <div className="bg-gray-900/80 border border-gray-800 rounded-xl p-6">
              <div className="text-xs font-mono text-emerald-400 uppercase mb-2">Step 2</div>
              <h3 className="text-lg font-bold text-white mb-2">Schema-Constrained LLM Extraction</h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                Extracts nested business entities using structured outputs with strict Zod validation schemas. Invalid fields trigger automated localized self-correction retries.
              </p>
            </div>

            <div className="bg-gray-900/80 border border-gray-800 rounded-xl p-6">
              <div className="text-xs font-mono text-purple-400 uppercase mb-2">Step 3</div>
              <h3 className="text-lg font-bold text-white mb-2">Human-in-the-Loop Operator Review</h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                Clean review screen displays original PDF on the left and parsed JSON fields on the right. Operator approves with 1-click or edits uncertain fields directly.
              </p>
            </div>

            <div className="bg-gray-900/80 border border-gray-800 rounded-xl p-6">
              <div className="text-xs font-mono text-cyan-400 uppercase mb-2">Step 4</div>
              <h3 className="text-lg font-bold text-white mb-2">Automated Downstream Sync</h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                Approved data is pushed in real time to PostgreSQL/Supabase, Google Sheets, or custom CRM webhooks with complete audit logs and historical document tracking.
              </p>
            </div>
          </div>
        </section>

        {/* Schema Example */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Sample Zod Extraction Contract</h2>
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-5 overflow-x-auto">
            <pre className="font-mono text-xs text-gray-300 leading-relaxed">
{`import { z } from "zod";

// Strict validation contract for automated lease extraction
export const LeaseDocumentSchema = z.object({
  contract_metadata: z.object({
    document_type: z.enum(["residential_lease", "commercial_lease", "amendment"]),
    execution_date: z.string().describe("ISO 8601 date string"),
    term_months: z.number().int().positive(),
  }),
  parties: z.object({
    landlord_entity: z.string().min(1),
    tenant_name: z.string().min(1),
    guarantor: z.string().nullable(),
  }),
  financials: z.object({
    monthly_rent_gbp: z.number().positive(),
    security_deposit_gbp: z.number().positive(),
    payment_due_day: z.number().min(1).max(31),
    break_clause_terms: z.string().nullable(),
  }),
  confidence_score: z.number().min(0).max(1),
});`}
            </pre>
          </div>
        </section>

        {/* Tech Stack */}
        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4">Core Technology Stack</h2>
          <div className="flex flex-wrap gap-2">
            {["Next.js 16 (App Router)", "TypeScript", "GPT-4o / Claude 3.5", "Zod Validation", "Supabase / PostgreSQL", "TailwindCSS", "PDF.js / OCR Engine"].map((tech) => (
              <span
                key={tech}
                className="bg-gray-900 border border-gray-800 text-gray-300 font-mono text-xs px-3 py-1.5 rounded-lg"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-blue-900/30 via-gray-900 to-gray-900 border border-blue-500/20 rounded-2xl p-8 text-center space-y-4">
          <h2 className="text-2xl font-bold text-white">Have a Document Workflow to Automate?</h2>
          <p className="text-gray-300 max-w-xl mx-auto text-sm">
            We scope your exact document intake requirements and deliver a fully functional ingestion, extraction, and sync pipeline in a fixed 7-day sprint.
          </p>
          <div className="pt-2">
            <a
              href="mailto:antoniowestdev@gmail.com"
              className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-lg shadow-lg shadow-blue-500/20 transition-all"
            >
              Get in Touch &rarr;
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
