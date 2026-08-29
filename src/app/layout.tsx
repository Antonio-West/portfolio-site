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
  title: "Antonio West | Systems, Graphics & AI Engineering",
  description:
    "Portfolio of high-performance GPU optimization, WebGL shaders, and applied AI systems by Antonio West.",
  metadataBase: new URL("https://antoniowest.dev"),
  openGraph: {
    title: "Antonio West | Systems, Graphics & AI Engineering",
    description:
      "Client-side GPU memory optimization, WebGL pipelines, and machine learning systems.",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-950 text-gray-100 min-h-screen selection:bg-blue-500 selection:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
