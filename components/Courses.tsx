"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { courses } from "../lib/data";
import SectionTitle from "./SectionTitle";

const sectionVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 * index },
  }),
};


export default function Courses() {
  return (
    <motion.section
      id="courses"
      className="relative px-6 py-24 sm:px-8 lg:px-12"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="mx-auto max-w-7xl">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={sectionVariants}>
          <SectionTitle
            title="Professional academy pathways"
            text="Focused technical programs for developers who want practical foundations, modern workflows, and production-grade habits."
          />
        </motion.div>

      </div>
    </motion.section>
  );
}
