"use client";

import React from "react";

const AnimatedBackground = ({
  speedMultiplier: _speedMultiplier = 0.6,
}: {
  speedMultiplier?: number;
}) => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
      {/* Top ambient systems glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[500px] bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(59,130,246,0.12),rgba(255,255,255,0))] pointer-events-none" />

      {/* Engineering technical grid with radial fade mask */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#37415115_1px,transparent_1px),linear-gradient(to_bottom,#37415115_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_20%,#000_60%,transparent_100%)] pointer-events-none" />

      {/* Vignette border fade */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-950/40 to-gray-950 pointer-events-none" />
    </div>
  );
};

export default AnimatedBackground;
