"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function LoadingAnimation({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate content loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[#050d1a] relative">
      {isLoading ? (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 0.5, delay: 1.5 }}
        >
          <svg width="100" height="100" viewBox="0 0 100 100">
            <motion.path
              d="M 0 50 L 25 50 L 50 25 L 75 75 L 100 50"
              fill="none"
              stroke="#64ffda"
              strokeWidth="8"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{
                duration: 1.5,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "loop",
                repeatDelay: 0.5,
              }}
            />
          </svg>
        </motion.div>
      ) : (
        <div>{children}</div> // Render the wrapped content once loading is finished
      )}
    </div>
  );
}
