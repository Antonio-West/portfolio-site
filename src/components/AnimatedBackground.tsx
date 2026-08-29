"use client";

import { useEffect, useRef } from "react";

const AnimatedBackground = ({ speedMultiplier = 0.6 }: { speedMultiplier?: number }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const animationFrameId = useRef<number | null>(null);
  const particlesRef = useRef<{ x: number; y: number; vx: number; vy: number; radius: number }[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const updateCanvasSize = () => {
      const scale = window.devicePixelRatio || 1;
      const parent = canvas.parentElement;

      if (parent) {
        canvas.width = parent.clientWidth * scale;
        canvas.height = parent.clientHeight * scale;
      } else {
        canvas.width = window.innerWidth * scale;
        canvas.height = window.innerHeight * scale;
      }

      ctx.scale(scale, scale);
      canvas.style.width = "100%";
      canvas.style.height = "100%";
    };

    updateCanvasSize();

    const width = canvas.width / (window.devicePixelRatio || 1);
    const height = canvas.height / (window.devicePixelRatio || 1);
    // Lower particle density to eliminate visual clutter
    const particleCount = Math.floor((width * height) / 16000);
    const maxDist = width < 768 ? 90 : 130;

    // Initialize particles with smaller radius and gentle velocity
    particlesRef.current = Array.from({ length: particleCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() * 0.3 - 0.15) * speedMultiplier,
      vy: (Math.random() * 0.3 - 0.15) * speedMultiplier,
      radius: Math.random() * 1.5 + 0.8,
    }));

    const drawParticles = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw connecting lines with very subtle opacity (max 15%)
      particlesRef.current.forEach((p1, i) => {
        particlesRef.current.forEach((p2, j) => {
          if (i > j) {
            const dist = Math.hypot(p1.x - p2.x, p1.y - p2.y);
            if (dist < maxDist) {
              const alpha = (1 - dist / maxDist) * 0.14;
              ctx.beginPath();
              ctx.strokeStyle = `rgba(59, 130, 246, ${alpha})`;
              ctx.lineWidth = 0.6;
              ctx.moveTo(p1.x, p1.y);
              ctx.lineTo(p2.x, p2.y);
              ctx.stroke();
            }
          }
        });
      });

      // Draw subtle nodes with 20% opacity
      particlesRef.current.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(96, 165, 250, 0.22)";
        ctx.fill();
      });

      // Move particles
      particlesRef.current.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;
      });

      animationFrameId.current = requestAnimationFrame(drawParticles);
    };

    drawParticles();

    const handleResize = () => {
      updateCanvasSize();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
      window.removeEventListener("resize", handleResize);
    };
  }, [speedMultiplier]);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-60" />
      {/* Dark radial gradient mask to keep central text zone 100% clean and high-contrast */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(3,7,18,0.75)_0%,rgba(3,7,18,0.95)_100%)]" />
    </div>
  );
};

export default AnimatedBackground;
