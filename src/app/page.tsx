import React from "react";
import Link from "next/link";
import AnimatedBackground from "@/components/AnimatedBackground";
import type { Metadata } from "next";

export const generateMetadata = (): Metadata => {
  return {
    title: "Antonio West | Systems, Graphics & AI Engineering",
    description:
      "Showcasing high-throughput GPU memory optimization, WebGL shaders, and applied AI systems by Antonio West.",
  };
};

export default function Home() {
  return (
    <div className="relative min-h-screen bg-gray-950 text-white flex flex-col items-center justify-center overflow-hidden px-4">
      <AnimatedBackground />

      <div className="relative z-10 max-w-3xl text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-mono tracking-wide uppercase mb-2">
          Systems &bull; Graphics &bull; Applied AI
        </div>

        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
          Antonio West
        </h1>

        <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
          Engineering high-throughput GPU memory pipelines, zero-dependency WebGL/WebGPU tools, and production machine learning architectures.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <Link href="/projects">
            <button className="px-6 py-3 bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-white font-medium rounded-lg shadow-lg shadow-blue-500/20 transition-all cursor-pointer">
              Explore Projects &rarr;
            </button>
          </Link>
          <a
            href="https://tool.antoniowest.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-gray-800 hover:bg-gray-700 active:bg-gray-800 text-gray-200 font-medium rounded-lg border border-gray-700 transition-all"
          >
            Launch WebGL Optimizer &#x2197;
          </a>
        </div>
      </div>
    </div>
  );
}

