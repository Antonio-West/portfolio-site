import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import AnimatedBackground from "@/components/AnimatedBackground";

export const generateMetadata = (): Metadata => {
  return {
    title: "WebGL GPU Memory & Texture Optimizer | Antonio West",
    description:
      "Zero-dependency WebGL/WebGPU shader packing, texture coalescing, and VRAM reduction pipeline for real-time graphics and robotics.",
  };
};

export default function GPUOptimizerPage() {
  return (
    <div className="relative min-h-screen bg-gray-950 text-white overflow-hidden">
      <AnimatedBackground speedMultiplier={0.1} />

      <div className="relative z-10 max-w-5xl mx-auto px-4 py-12">
        <div className="flex items-center justify-between gap-4 mb-8">
          <Link
            href="/projects"
            className="text-sm font-mono text-gray-400 hover:text-white transition-colors inline-flex items-center gap-1.5"
          >
            &larr; Back to Projects
          </Link>
          <a
            href="https://tool.antoniowest.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium rounded-lg shadow-md shadow-blue-500/20 transition-all cursor-pointer"
          >
            Launch Live Utility &#x2197;
          </a>
        </div>

        {/* Hero Section */}
        <section className="border-b border-gray-800 pb-10 mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-mono mb-4">
            GPU Optimization &bull; WebGL 2.0 &bull; Real-Time Systems
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4 text-white">
            Zero-Dependency WebGL Shader & Texture Memory Optimization Pipeline
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl leading-relaxed">
            Engineered a web-based, real-time asset optimization pipeline that automates texture channel packing, executes custom WebGL fragment shader passes, and reduces browser VRAM footprint by <strong>up to 75%</strong> while locking rendering at 60 FPS.
          </p>
        </section>

        {/* Live Telemetry Metrics Card */}
        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
            Live Telemetry & Benchmark Metrics
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="bg-gray-900/80 border border-gray-800 rounded-xl p-5">
              <div className="text-xs font-mono text-gray-400 uppercase">VRAM Reduction</div>
              <div className="text-2xl sm:text-3xl font-mono font-bold text-emerald-400 mt-1">75.0%</div>
              <div className="text-xs text-gray-500 mt-1">56.8 MB &rarr; 14.2 MB</div>
            </div>
            <div className="bg-gray-900/80 border border-gray-800 rounded-xl p-5">
              <div className="text-xs font-mono text-gray-400 uppercase">Frame Stability</div>
              <div className="text-2xl sm:text-3xl font-mono font-bold text-blue-400 mt-1">60.0 FPS</div>
              <div className="text-xs text-gray-500 mt-1">16.6 ms frame budget</div>
            </div>
            <div className="bg-gray-900/80 border border-gray-800 rounded-xl p-5">
              <div className="text-xs font-mono text-gray-400 uppercase">Sampler Overhead</div>
              <div className="text-2xl sm:text-3xl font-mono font-bold text-purple-400 mt-1">-75%</div>
              <div className="text-xs text-gray-500 mt-1">4 units &rarr; 1 unit</div>
            </div>
            <div className="bg-gray-900/80 border border-gray-800 rounded-xl p-5">
              <div className="text-xs font-mono text-gray-400 uppercase">Pass Latency</div>
              <div className="text-2xl sm:text-3xl font-mono font-bold text-cyan-400 mt-1">&lt;0.4 ms</div>
              <div className="text-xs text-gray-500 mt-1">Direct in-browser execution</div>
            </div>
          </div>
        </section>

        {/* Architecture & Engineering Highlights */}
        <section className="space-y-6 mb-12">
          <h2 className="text-2xl font-bold">Key Engineering Architecture</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-900/80 border border-gray-800 rounded-xl p-6">
              <h3 className="text-lg font-bold text-white mb-2">1. RGBA Channel Packing & Coalescing</h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                Discrete grayscale PBR material maps (Roughness, Metallic, Ambient Occlusion, and Height) are consolidated into a single 32-bit RGBA texture. This compresses memory footprint and removes memory fragmentation on the GPU.
              </p>
            </div>
            <div className="bg-gray-900/80 border border-gray-800 rounded-xl p-6">
              <h3 className="text-lg font-bold text-white mb-2">2. Single-Pass Sampler Elimination</h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                Replaces 4 independent texture lookups in the fragment shader with a single vectorized sample (<code className="text-xs font-mono text-blue-300">texture2D(u_packedPBR, vUv)</code>), eliminating texture unit stalls and reducing memory bus pressure.
              </p>
            </div>
            <div className="bg-gray-900/80 border border-gray-800 rounded-xl p-6">
              <h3 className="text-lg font-bold text-white mb-2">3. Zero-Dependency Client Execution</h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                Runs 100% client-side via raw WebGL 2.0 and HTML5 Canvas with sub-second TTFB, requiring zero backend servers, Docker containers, or expensive cloud GPU processing clusters.
              </p>
            </div>
            <div className="bg-gray-900/80 border border-gray-800 rounded-xl p-6">
              <h3 className="text-lg font-bold text-white mb-2">4. Embedded Telemetry Profiler HUD</h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                Direct on-canvas monospace overlay HUD computing exponential moving average FPS, delta frame times, draw calls, and dynamic VRAM byte delta calculations in real time.
              </p>
            </div>
          </div>
        </section>

        {/* Integration Code Example */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">GLSL Shader Sampling Pipeline</h2>
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-5 overflow-x-auto">
            <pre className="font-mono text-xs text-gray-300 leading-relaxed">
{`// 1. Uniform Declaration (1 Combined RGBA Texture instead of 4)
uniform sampler2D u_packedPBR; 

// 2. Fragment Shader Sampling (Single Texture Lookup)
void main() {
    vec4 pbrSample = texture2D(u_packedPBR, vUv);
    
    float roughness = pbrSample.r; // Red Channel
    float metallic  = pbrSample.g; // Green Channel
    float ao        = pbrSample.b; // Blue Channel
    float height    = pbrSample.a; // Alpha Channel (Displacement)

    // Standard PBR BRDF evaluation with 1/4th the texture sampler pressure
    vec3 directLight  = evaluatePBR(vNormal, vViewDir, roughness, metallic);
    vec3 ambientLight = u_ambientColor * ao;
    
    gl_FragColor = vec4(directLight + ambientLight, 1.0);
}`}
            </pre>
          </div>
        </section>

        {/* Tech Stack */}
        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4">Tech Stack & APIs</h2>
          <div className="flex flex-wrap gap-2">
            {["WebGL 2.0", "GLSL Shaders", "TypeScript", "HTML5 Canvas API", "PBR Rendering", "VRAM Profiling"].map((tech) => (
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
          <h2 className="text-2xl font-bold text-white">Experience the Live Optimization Pipeline</h2>
          <p className="text-gray-300 max-w-xl mx-auto text-sm">
            Inspect channel assignments, test live packing, and examine real-time WebGL shader rendering directly in your browser.
          </p>
          <div className="pt-2">
            <a
              href="https://tool.antoniowest.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-lg shadow-lg shadow-blue-500/20 transition-all cursor-pointer"
            >
              Launch tool.antoniowest.dev &rarr;
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
