import React from "react";
import Link from "next/link";
import AnimatedBackground from "@/components/AnimatedBackground";
import type { Metadata } from "next";

export const generateMetadata = (): Metadata => {
  return {
    title: "AI Drug Analysis Pipeline | Antonio West",
    description:
      "A machine learning pipeline designed to predict molecular properties, including drug toxicity, with high accuracy and interpretability.",
  };
};

export default function AIDrugPipeline() {
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
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-mono mb-4">
            Applied AI &bull; Molecular Discovery &bull; Model Interpretability
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4">
            AI Drug Analysis & Toxicity Pipeline
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl leading-relaxed">
            A high-throughput machine learning pipeline designed to predict molecular properties, including drug toxicity, with high accuracy and granular SHAP interpretability.
          </p>
        </section>

        {/* Features Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Key Engineering Highlights</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-900/80 border border-gray-800 p-6 rounded-xl">
              <h3 className="text-lg font-bold text-white mb-2">SHAP Explainability</h3>
              <p className="text-sm text-gray-300">
                Interpret model predictions with TreeSHAP visualisations for direct insights into molecular substructure contributions.
              </p>
            </div>
            <div className="bg-gray-900/80 border border-gray-800 p-6 rounded-xl">
              <h3 className="text-lg font-bold text-white mb-2">Partitioned Data Processing</h3>
              <p className="text-sm text-gray-300">
                Handle large chemical compound datasets efficiently with memory-optimised Parquet / PyArrow partitioning.
              </p>
            </div>
            <div className="bg-gray-900/80 border border-gray-800 p-6 rounded-xl">
              <h3 className="text-lg font-bold text-white mb-2">Precision Benchmark</h3>
              <p className="text-sm text-gray-300">
                Achieved <strong className="text-emerald-400">RMSE 0.1577</strong> and <strong className="text-emerald-400">R² 0.99</strong> on validation benchmarks.
              </p>
            </div>
          </div>
        </section>

        {/* Tech Stack Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Tech Stack</h2>
          <div className="flex flex-wrap gap-2">
            {["Python", "XGBoost", "TreeSHAP", "PyArrow", "Pandas", "Scikit-Learn"].map((tech) => (
              <span key={tech} className="bg-gray-900 border border-gray-800 font-mono text-xs text-gray-300 px-3 py-1.5 rounded-lg">
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* Results Section */}
        <section className="mb-12">
          <div className="bg-gray-900/90 border border-gray-800 p-8 rounded-2xl text-center space-y-4">
            <h3 className="text-2xl font-bold">Model Performance Metrics</h3>
            <div className="flex justify-center gap-8 pt-2">
              <div>
                <div className="text-xs font-mono text-gray-400 uppercase">RMSE</div>
                <div className="text-3xl font-mono font-bold text-emerald-400">0.1577</div>
              </div>
              <div className="border-r border-gray-800"></div>
              <div>
                <div className="text-xs font-mono text-gray-400 uppercase">R² Score</div>
                <div className="text-3xl font-mono font-bold text-blue-400">0.99</div>
              </div>
            </div>
            <p className="text-sm text-gray-400 max-w-xl mx-auto pt-2">
              Feature attribution analysis isolates top molecular descriptors responsible for toxic chemical pathways.
            </p>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center py-6">
          <a
            href="https://gitlab.com/Sheldon01/AI_Powered_Drug_Analysis_Pipeline#"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 hover:bg-blue-500 text-white font-medium py-3 px-6 rounded-lg transition-all"
          >
            View Repository on GitLab &rarr;
          </a>
        </section>
      </div>
    </div>
  );
}
