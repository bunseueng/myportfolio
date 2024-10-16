"use client";

import React from "react";
import { IconBrandGithub } from "@tabler/icons-react";
import Image from "next/image";
import { FloatingNav } from "./ui/FloatingNavbar";
import Link from "next/link";
import { motion } from "framer-motion";

const links = [
  {
    name: "About",
    link: "#about",
  },
  {
    name: "Skills",
    link: "#skill",
  },
  {
    name: "Project",
    link: "#project",
  },
  {
    name: "Contact",
    link: "#contact",
  },
];
const Navbar = () => {
  return (
    <nav className="relative">
      <div className="absolute inset-0 max-w-6xl mx-auto p-5">
        <div className="flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="z-[9999]"
          >
            <Link href="/" className="flex items-center cursor-pointer">
              <svg
                className="mr-1 h-10 w-10 stroke-cyan-600"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M0 0h24v24H0z" stroke="none"></path>
                <rect x="3" y="12" width="6" height="8" rx="1"></rect>
                <rect x="9" y="8" width="6" height="12" rx="1"></rect>
                <rect x="15" y="4" width="6" height="16" rx="1"></rect>
                <path d="M4 20h14"></path>
              </svg>
              <h1 className="text-xl font-bold text-cyan-400">Bunseu</h1>
            </Link>
          </motion.div>
          <motion.ul
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-x-3 font-bold text-gray-200 cursor-pointer z-[9999]"
          >
            <li className="hover:text-whiter pr-3">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/bunseujjy"
                className="flex items-center space-x-2"
              >
                <IconBrandGithub />
                <span>Github</span>
              </a>
            </li>
            <li className="hover:text-white cursor-pointer">
              <Link href="/resume" className="flex items-center space-x-2">
                <Image src="/resume.png" alt="resume" width={22} height={22} />
                <span>Resume</span>
              </Link>
            </li>
          </motion.ul>
        </div>
      </div>
      <div className="container mx-auto px-4 flex items-center justify-end fixed top-0 left-0 right-0 z-50 h-20 bg-transparent">
        <FloatingNav navItems={links} />
      </div>
    </nav>
  );
};

export default Navbar;
