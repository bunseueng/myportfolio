"use client";

import { motion } from "framer-motion";
import { IconArrowRight, IconFileText, IconMail } from "@tabler/icons-react";
import { Button } from "@/components/ui/MovingBorder";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card";
import Link from "next/link";

export default function Resume() {
  return (
    <div className="min-h-screen bg-[#050d1a] py-12 px-4 sm:px-6 lg:px-8">
      <Link href={"/"}>
        <Button
          variant="outline"
          className="flex items-center space-x-2 px-4 py-2"
        >
          Back Home
        </Button>
      </Link>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto mt-4"
      >
        <Card className="bg-gray-800 shadow-xl">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-gray-100">
              Resume
            </CardTitle>
            <CardDescription className="text-gray-400">
              Thank you for your interest in my professional background.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-center py-8">
              <IconFileText className="mx-auto h-16 w-16 text-gray-400 mb-2" />
              <Button
                variant="outline"
                className="flex items-center space-x-2 px-4 py-2"
              >
                <a href="/ENGBUNSEU.pdf" download>
                  Download Resume
                </a>
              </Button>
              {/* <h3 className="mt-2 text-sm font-semibold text-gray-100">
                No resume available
              </h3>
              <p className="mt-1 text-sm text-gray-400">
                I&#39;m currently updating my resume to reflect my latest
                experiences and skills.
              </p> */}
            </div>
            <div className="mt-6">
              <h4 className="text-lg font-semibold text-gray-100 mb-2">
                What you can do instead:
              </h4>
              <ul className="list-disc pl-5 space-y-2 text-gray-400">
                <li>
                  Check out my projects section to see examples of my work
                </li>
                <li>
                  Visit my GitHub profile for code samples and contributions
                </li>
                <li>
                  Connect with me on Facebook/Instagram/Gmail for a more
                  detailed professional history
                </li>
                <li>
                  Reach out directly if you have any specific questions about my
                  experience
                </li>
              </ul>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button
              variant="outline"
              className="flex items-center space-x-2 px-4 py-2"
            >
              <IconMail className="h-4 w-4" />
              <Link href="/#contact">Contact Me</Link>
            </Button>
            <Button className="flex items-center space-x-2 px-4 py-2">
              <Link href="/#project">View Projects</Link>
              <IconArrowRight className="h-4 w-4" />
            </Button>
          </CardFooter>
        </Card>
      </motion.div>
    </div>
  );
}
