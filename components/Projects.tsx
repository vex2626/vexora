"use client";

import { motion } from "framer-motion";
import { projects } from "../lib/data";
import SectionTitle from "./SectionTitle";
import InteractiveCard from "./InteractiveCard";

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

export default function Projects() {
  return (
    <motion.section
      id="projects"
      className="relative px-6 py-24 sm:px-8 lg:px-12"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="absolute inset-x-0 top-20 h-72 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.08),transparent_62%)]" />
      <div className="relative mx-auto max-w-7xl">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={sectionVariants}>
          <SectionTitle
            title="Recent work with measurable polish"
            text="A concise showcase of systems, portals, platforms, and dashboards built for organizations that need dependable digital products."
          />
        </motion.div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.28 }}
            >
              <InteractiveCard className="group relative min-h-[21rem] overflow-hidden rounded-lg border border-white/10 bg-[#090712]/78 p-7 shadow-[0_24px_75px_rgba(0,0,0,0.26)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-fuchsia-300/30">
                <div className="absolute inset-x-0 top-0 h-28 bg-[linear-gradient(180deg,rgba(191,18,238,0.1),transparent)]" />
                <div className="absolute inset-0 bg-[repeating-linear-gradient(0deg,rgba(255,255,255,0.028)_0px,rgba(255,255,255,0.028)_1px,transparent_1px,transparent_30px)] opacity-45" />
                <div className="relative z-10 flex h-full min-h-[17rem] flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between gap-4 text-xs uppercase tracking-[0.24em] text-fuchsia-200/80">
                      <span>{project.category}</span>
                      <span className="h-px flex-1 bg-fuchsia-300/18" />
                    </div>
                    <h3 className="mt-8 text-2xl font-semibold text-white">{project.title}</h3>
                    <p className="mt-4 text-sm leading-7 text-slate-400">{project.description}</p>
                  </div>
                </div>
              </InteractiveCard>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
