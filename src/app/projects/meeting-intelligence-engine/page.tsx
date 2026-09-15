import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import AnimatedBackground from "@/components/AnimatedBackground";
import GitHubIcon from "@/components/GitHubIcon";

export const generateMetadata = (): Metadata => {
  return {
    title: "LLM Meeting Intelligence & Audio Summarisation Engine | Antonio West",
    description:
      "Production meeting intelligence pipeline ingesting Whereby recordings, multi-provider LLM summarisation, and Drizzle/PostgreSQL persistence.",
  };
};

export default function MeetingIntelligencePage() {
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
              Commercial Contract &bull; Alive Industries
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
              href="mailto:antonio@antoniowest.dev"
              className="text-xs font-mono text-gray-300 hover:text-white bg-gray-900 hover:bg-gray-800 px-3 py-1.5 rounded-md border border-gray-800 transition-colors"
            >
              antonio@antoniowest.dev
            </a>
          </div>
        </div>

        {/* Hero Section */}
        <section className="border-b border-gray-800 pb-10 mb-10">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4 text-white">
            LLM Meeting Intelligence &amp; Audio Summarisation Engine
          </h1>
          <p className="text-base sm:text-lg text-gray-300 max-w-3xl leading-relaxed">
            Architected and shipped an end-to-end meeting summarisation system for ChatSDK. Ingests raw video/audio recordings from Whereby, executes multi-provider LLM summarisation passes with async background polling, and visualises participant insights and structured action items in a Next.js dashboard.
          </p>
        </section>

        {/* System Architecture */}
        <section className="space-y-6 mb-12">
          <h2 className="text-xl font-bold font-mono text-gray-200 uppercase tracking-wider">
            Engineering Architecture
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-900/90 border border-gray-800 rounded-xl p-6">
              <div className="text-xs font-mono text-emerald-400 uppercase mb-2">01 / Ingestion</div>
              <h3 className="text-base sm:text-lg font-bold text-white mb-2 tracking-tight">Whereby Webhook &amp; Recording Processing</h3>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                Listens for Whereby room session completion events, extracts audio streams, and dispatches them to background transcription workers.
              </p>
            </div>

            <div className="bg-gray-900/90 border border-gray-800 rounded-xl p-6">
              <div className="text-xs font-mono text-blue-400 uppercase mb-2">02 / LLM Layer</div>
              <h3 className="text-base sm:text-lg font-bold text-white mb-2 tracking-tight">Multi-Provider Summarisation Layer</h3>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                Chunks transcripts and routes requests across LLM providers with automatic fallback, generating executive takeaways, topic clusters, and categorized action items.
              </p>
            </div>

            <div className="bg-gray-900/90 border border-gray-800 rounded-xl p-6">
              <div className="text-xs font-mono text-purple-400 uppercase mb-2">03 / Async Workers</div>
              <h3 className="text-base sm:text-lg font-bold text-white mb-2 tracking-tight">Background Polling &amp; In-Memory Caching</h3>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                Engineered fault-tolerant job polling to handle variable transcription latency, caching intermediate stages to prevent duplicate LLM calls during network reconnections.
              </p>
            </div>

            <div className="bg-gray-900/90 border border-gray-800 rounded-xl p-6">
              <div className="text-xs font-mono text-cyan-400 uppercase mb-2">04 / Storage &amp; UI</div>
              <h3 className="text-base sm:text-lg font-bold text-white mb-2 tracking-tight">Drizzle ORM + Meeting Dashboard</h3>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                Relational PostgreSQL schema managed via Drizzle ORM. Built the Meeting Summary Dashboard UI in Next.js using shadcn/ui, Tailwind CSS, and Framer Motion.
              </p>
            </div>
          </div>
        </section>

        {/* Database Schema Artifact */}
        <section className="mb-12">
          <h2 className="text-xl font-bold font-mono text-gray-200 uppercase tracking-wider mb-4">
            Drizzle ORM Schema Architecture
          </h2>
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-5 overflow-x-auto">
            <pre className="font-mono text-xs text-gray-300 leading-relaxed">
{`import { pgTable, text, timestamp, uuid, jsonb, integer } from "drizzle-orm/pg-core";

// Meeting Session Record
export const meetingSessions = pgTable("meeting_sessions", {
  id: uuid("id").defaultRandom().primaryKey(),
  wherebyRoomId: text("whereby_room_id").notNull(),
  recordingUrl: text("recording_url"),
  durationSeconds: integer("duration_seconds"),
  status: text("status", { enum: ["queued", "processing", "completed", "failed"] }).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

// Structured Meeting Insights & Action Items
export const meetingSummaries = pgTable("meeting_summaries", {
  id: uuid("id").defaultRandom().primaryKey(),
  sessionId: uuid("session_id").references(() => meetingSessions.id, { onDelete: "cascade" }),
  executiveSummary: text("executive_summary").notNull(),
  actionItems: jsonb("action_items").$type<Array<{ assignee: string; task: string; priority: "low" | "medium" | "high" }>>(),
  participantMetadata: jsonb("participant_metadata").$type<Array<{ name: string; talkTimePercent: number }>>(),
  tokensUsed: integer("tokens_used"),
  generatedAt: timestamp("generated_at").defaultNow().notNull(),
});`}
            </pre>
          </div>
        </section>

        {/* Tech Stack */}
        <section className="mb-12">
          <h2 className="text-base font-bold font-mono text-gray-400 uppercase tracking-wider mb-4">
            Production Stack
          </h2>
          <div className="flex flex-wrap gap-2">
            {["Next.js (App Router)", "TypeScript", "PostgreSQL", "Drizzle ORM", "Whereby API", "OpenAI / Claude", "shadcn/ui", "Framer Motion", "Biome"].map((tech) => (
              <span
                key={tech}
                className="bg-gray-900/80 border border-gray-800/80 text-gray-300 font-mono text-xs px-3 py-1.5 rounded-lg"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* Footer */}
        <div className="border-t border-gray-800 pt-6 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-gray-400">
          <div className="flex items-center gap-4">
            <Link href="/projects" className="text-blue-400 hover:text-blue-300 transition-colors">
              &larr; Back to all projects
            </Link>
            <span className="text-gray-700">&bull;</span>
            <a
              href="https://github.com/antonio-west"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors inline-flex items-center gap-1.5 whitespace-nowrap"
            >
              <GitHubIcon className="w-3.5 h-3.5" />
              <span>github.com/antonio-west</span>
            </a>
          </div>
          <a href="mailto:antonio@antoniowest.dev" className="hover:text-white transition-colors whitespace-nowrap">
            antonio@antoniowest.dev
          </a>
        </div>
      </div>
    </div>
  );
}
