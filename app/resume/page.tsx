import React from "react";
import Resume from "./Resume";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume",
  description: "My Resume",
};

const ResumePage = () => {
  return <Resume />;
};

export default ResumePage;
