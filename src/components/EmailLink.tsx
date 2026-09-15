"use client";

import React, { useState } from "react";

interface EmailLinkProps {
  email?: string;
  className?: string;
  children?: React.ReactNode;
  copiedText?: string;
}

export default function EmailLink({
  email = "antonio@antoniowest.dev",
  className = "",
  children,
  copiedText = "Copied to clipboard!",
}: EmailLinkProps) {
  const [copied, setCopied] = useState(false);

  const handleClick = () => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    }
  };

  return (
    <a
      href={`mailto:${email}`}
      onClick={handleClick}
      className={className}
      title={`Email ${email} (click to open client & copy address)`}
    >
      {copied ? (
        <span className="text-gray-200 font-medium inline-flex items-center gap-1.5">
          <svg
            className="w-3.5 h-3.5 text-blue-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2.5"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          </svg>
          <span>{copiedText}</span>
        </span>
      ) : (
        children || email
      )}
    </a>
  );
}
