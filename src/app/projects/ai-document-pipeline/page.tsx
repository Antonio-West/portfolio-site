import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import AnimatedBackground from "@/components/AnimatedBackground";

export const generateMetadata = (): Metadata => {
  return {
    title: "Document Parsing & AI Personalisation Pipeline | Antonio West",
    description:
      "Production document parsing engine (pdfjs-dist, mammoth, GPT-4o) with 23-step persistent onboarding built for Be Act Change.",
  };
};

export default function AIDocumentPipelinePage() {
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
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono text-blue-400 bg-blue-500/10 px-3 py-1 rounded border border-blue-500/20">
              Commercial Contract &bull; Be Act Change
            </span>
            <a
              href="mailto:antonio@antoniowest.dev"
              className="text-xs font-mono text-gray-300 hover:text-white bg-gray-900 hover:bg-gray-800 px-3 py-1 rounded border border-gray-800 transition-colors"
            >
              Contact &rarr;
            </a>
          </div>
        </div>

        {/* Hero Section */}
        <section className="border-b border-gray-800 pb-10 mb-10">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4 text-white">
            Document Parsing &amp; AI Personalisation Pipeline
          </h1>
          <p className="text-base sm:text-lg text-gray-300 max-w-3xl leading-relaxed">
            Shipped the end-to-end AI document ingestion and user coaching workflow for the PITCH coaching PWA. Automatically extracts structured context from uploaded PDF and DOCX documents to eliminate manual onboarding data entry, driving a 23-step dynamic onboarding state machine.
          </p>
        </section>

        {/* System Architecture */}
        <section className="space-y-6 mb-12">
          <h2 className="text-xl font-bold font-mono text-gray-200 uppercase tracking-wider">
            Engineering Architecture
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-900/90 border border-gray-800 rounded-xl p-6">
              <div className="text-xs font-mono text-blue-400 uppercase mb-2">01 / Extraction Engine</div>
              <h3 className="text-base font-bold text-white mb-2">PDF &amp; DOCX Text Parsing</h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                Integrated <code className="text-xs font-mono text-gray-200">pdfjs-dist</code> for portable PDF text layer extraction and <code className="text-xs font-mono text-gray-200">mammoth</code> for structured Word (.docx) document parsing directly within the application.
              </p>
            </div>

            <div className="bg-gray-900/90 border border-gray-800 rounded-xl p-6">
              <div className="text-xs font-mono text-emerald-400 uppercase mb-2">02 / Guardrails</div>
              <h3 className="text-base font-bold text-white mb-2">Strict Prompt Constraints &amp; Banlists</h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                Integrated GPT-4/4o APIs with strict negative prompt constraints, structured formatting rules, and automated fallback retries when responses fail validation.
              </p>
            </div>

            <div className="bg-gray-900/90 border border-gray-800 rounded-xl p-6">
              <div className="text-xs font-mono text-purple-400 uppercase mb-2">03 / State Engine</div>
              <h3 className="text-base font-bold text-white mb-2">23-Step Persistent Onboarding Flow</h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                Engineered dynamic multi-stage onboarding state machine with automatic localStorage persistence, guaranteeing zero data loss during user session drop-offs.
              </p>
            </div>

            <div className="bg-gray-900/90 border border-gray-800 rounded-xl p-6">
              <div className="text-xs font-mono text-cyan-400 uppercase mb-2">04 / Interface</div>
              <h3 className="text-base font-bold text-white mb-2">Chat Workflows &amp; Persisted History</h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                Built responsive chat assistant interfaces with conversational state persistence using Next.js, shadcn/ui, Tailwind CSS, and Framer Motion transitions.
              </p>
            </div>
          </div>
        </section>

        {/* Code Snippet */}
        <section className="mb-12">
          <h2 className="text-xl font-bold font-mono text-gray-200 uppercase tracking-wider mb-4">
            Document Ingestion &amp; Sanitization Wrapper
          </h2>
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-5 overflow-x-auto">
            <pre className="font-mono text-xs text-gray-300 leading-relaxed">
{`// Client-Side Multi-Format Text Extractor (pdfjs-dist + mammoth)
export async function parseUploadedDocument(file: File): Promise<string> {
  const fileType = file.name.split('.').pop()?.toLowerCase();
  
  if (fileType === 'pdf') {
    const arrayBuffer = await file.arrayBuffer();
    const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;
    let fullText = '';
    
    for (let i = 1; i <= pdf.numPages; i++) {
      const page = await pdf.getPage(i);
      const textContent = await page.getTextContent();
      const pageText = textContent.items.map((item: any) => item.str).join(' ');
      fullText += pageText + '\\n';
    }
    return sanitizeExtractedText(fullText);
  }
  
  if (fileType === 'docx') {
    const arrayBuffer = await file.arrayBuffer();
    const result = await mammoth.extractRawText({ arrayBuffer });
    return sanitizeExtractedText(result.value);
  }
  
  throw new Error('Unsupported document format. Please upload a PDF or DOCX file.');
}`}
            </pre>
          </div>
        </section>

        {/* Tech Stack */}
        <section className="mb-12">
          <h2 className="text-base font-bold font-mono text-gray-400 uppercase tracking-wider mb-4">
            Production Stack
          </h2>
          <div className="flex flex-wrap gap-2">
            {["Next.js (App Router)", "TypeScript", "GPT-4 / GPT-4o", "pdfjs-dist", "mammoth", "shadcn/ui", "Tailwind CSS", "Framer Motion"].map((tech) => (
              <span
                key={tech}
                className="bg-gray-900 border border-gray-800 text-gray-300 font-mono text-xs px-3 py-1.5 rounded-lg"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
