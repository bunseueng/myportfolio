"use client";

import { socialIcons } from "@/app/constants/data";
import { motion } from "framer-motion";
import Image from "next/image";

export default function SocialIconComponent() {
  return (
    <div className="flex justify-center md:justify-start items-center">
      <div className="flex space-x-4">
        {socialIcons.map((link) => (
          <motion.a
            href={link.url}
            key={link.id}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <div>
                <Image
                  src={link?.icon}
                  alt={link?.name}
                  width={50}
                  height={50}
                  style={{
                    width: "100%",
                    height: "100%",
                  }}
                />
              </div>
            </motion.div>
          </motion.a>
        ))}
      </div>
    </div>
  );
}
