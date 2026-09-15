import { Geist, Geist_Mono } from "next/font/google";
import "../styles/globals.css";
import type { Metadata } from "next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Antonio West | AI Document Automation & Workflow Systems",
  description:
    "Production AI document extraction pipelines, workflow automations, and full-stack Next.js + LLM systems by Antonio West.",
  metadataBase: new URL("https://antoniowest.dev"),
  openGraph: {
    title: "Antonio West | AI Document Automation & Workflow Systems",
    description:
      "Turn unstructured PDFs, contracts, and documents into validated structured data synced directly to your CRM or database.",
    url: "https://antoniowest.dev",
    siteName: "Antonio West",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased bg-gray-950 text-gray-100 min-h-screen selection:bg-blue-500 selection:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
