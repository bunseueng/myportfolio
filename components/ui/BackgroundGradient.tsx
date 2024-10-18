"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";

export default function MouseTrackingBackground({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const updateMousePosition = useCallback((ev: MouseEvent) => {
    setMousePosition({ x: ev.clientX, y: ev.clientY });
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", updateMousePosition);
    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, [updateMousePosition]);

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-[#050d1a] z-50">
      <motion.div
        className="pointer-events-none fixed inset-0 z-50"
        animate={{
          background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(29, 78, 216, 0.18), transparent 80%)`,
        }}
        transition={{ type: "tween", duration: 0.2 }}
      />
      <div
        className="fixed inset-0 z-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%' height='100%' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          opacity: 0.1,
        }}
      />
      <div className="z-10">{children}</div>
    </div>
  );
}
