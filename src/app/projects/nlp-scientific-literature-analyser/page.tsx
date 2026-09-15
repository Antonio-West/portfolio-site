import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import AnimatedBackground from "@/components/AnimatedBackground";

export const generateMetadata = (): Metadata => {
  return {
    title: "NLP Scientific Literature Analyser | Antonio West",
    description:
      "Extract meaningful insights from scientific literature using natural language processing for enhanced drug discovery workflows.",
  };
};

export default function NLPScientificLiteratureAnalyser() {
  return (
    <div className="relative min-h-screen bg-gray-950 text-white overflow-hidden">
      <AnimatedBackground speedMultiplier={0.1} />

      <div className="relative z-10 max-w-5xl mx-auto px-4 py-12">
        <div className="mb-8">
          <Link
            href="/projects"
            className="text-sm font-mono text-gray-400 hover:text-white transition-colors inline-flex items-center gap-1.5"
          >
            &larr; Back to Projects
          </Link>
        </div>

        {/* Hero Section */}
        <section className="border-b border-gray-800 pb-10 mb-10 text-center sm:text-left">
          <div className="text-xs font-mono text-gray-400 font-medium mb-4">
            NLP &bull; Biomedical Knowledge Graphs &bull; Information Retrieval
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4">
            NLP Scientific Literature Analyser
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl leading-relaxed">
            Automating structured information extraction, named-entity recognition, and relationship graph mapping across biomedical research papers.
          </p>
        </section>

        {/* Coming Soon Section */}
        <section className="py-6">
          <div className="bg-gray-900/80 border border-gray-800 p-8 rounded-2xl text-center space-y-3">
            <h2 className="text-2xl font-bold text-blue-400">
              Pipeline Implementation in Progress
            </h2>
            <p className="text-gray-300 max-w-xl mx-auto text-sm leading-relaxed">
              Transformer fine-tuning and graph database integration are actively being deployed. Production demo and repository access will be published upon benchmark completion.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
