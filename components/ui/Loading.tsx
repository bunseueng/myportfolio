"use client";

import React from "react";
import { motion } from "framer-motion";

export default function LoadingAnimation() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900">
      <motion.svg
        width="100"
        height="100"
        viewBox="0 0 100 100"
        initial="hidden"
        animate="visible"
      >
        <motion.path
          d="M 0 50 L 25 50 L 50 25 L 75 75 L 100 50"
          fill="none"
          stroke="#64ffda"
          strokeWidth="8"
          strokeLinecap="round"
          variants={{
            hidden: { pathLength: 0 },
            visible: {
              pathLength: 1,
              transition: {
                duration: 1.5,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "loop",
                repeatDelay: 0.5,
              },
            },
          }}
        />
      </motion.svg>
    </div>
  );
}
