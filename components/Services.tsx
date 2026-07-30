"use client";

import { motion } from "framer-motion";
import { services } from "../lib/data";
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
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
      delay: index * 0.12,
    },
  }),
};

const getServiceIcon = (title: string) => {
  switch (title) {
    case "Website Development":
      return (
        <svg viewBox="0 0 48 48" className="h-9 w-9" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="6" y="12" width="36" height="24" rx="5" stroke="currentColor" strokeWidth="2.2" opacity="0.95" />
          <path d="M12 18H36" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <path d="M12 30H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <path d="M28 30H36" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <rect x="18" y="22" width="12" height="6" rx="1.5" fill="currentColor" opacity="0.12" />
          <path d="M20 24.5L22 27.5L24 24.5L26 27.5L28 24.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "Business Systems":
      return (
        <svg viewBox="0 0 48 48" className="h-9 w-9" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="8" y="12" width="12" height="10" rx="3" fill="currentColor" opacity="0.08" />
          <rect x="28" y="12" width="12" height="10" rx="3" fill="currentColor" opacity="0.08" />
          <rect x="18" y="26" width="12" height="10" rx="3" fill="currentColor" opacity="0.08" />
          <rect x="8" y="12" width="12" height="10" rx="3" stroke="currentColor" strokeWidth="2" />
          <rect x="28" y="12" width="12" height="10" rx="3" stroke="currentColor" strokeWidth="2" />
          <rect x="18" y="26" width="12" height="10" rx="3" stroke="currentColor" strokeWidth="2" />
          <path d="M14 22H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <path d="M24 18V26" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <path d="M28 22H34" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
    case "Application Development":
      return (
        <svg viewBox="0 0 48 48" className="h-9 w-9" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="14" y="8" width="20" height="32" rx="5" stroke="currentColor" strokeWidth="2" />
          <path d="M20 14H28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <path d="M20 20H28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <path d="M20 26H28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <circle cx="24" cy="36" r="2.5" fill="currentColor" />
          <path d="M24 33V35" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 48 48" className="h-9 w-9" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="24" cy="24" r="10" stroke="currentColor" strokeWidth="2" opacity="0.95" />
          <path d="M24 18V24L28 28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <circle cx="17" cy="16" r="1.5" fill="currentColor" />
          <circle cx="30" cy="32" r="1.5" fill="currentColor" />
        </svg>
      );
  }
};

export default function Services() {
  return (
    <motion.section
      id="services"
      className="relative px-6 py-24 sm:px-8 lg:px-12"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionVariants}
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-fuchsia-300/25 to-transparent" />
      <div className="mx-auto max-w-7xl">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={sectionVariants}>
          <SectionTitle
            title="Precision services for digital growth"
            text="Vexora builds the web platforms, business systems, and applications that turn complex operations into polished software experiences."
          />
        </motion.div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.28 }}
            >
              <InteractiveCard className="group relative min-h-[22rem] overflow-hidden rounded-3xl border border-white/10 bg-[#07050d]/90 p-8 text-white shadow-[0_30px_90px_rgba(0,0,0,0.35)] backdrop-blur-xl transition duration-500 hover:border-fuchsia-400/40 hover:bg-[#14092a]/95">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(168,85,247,0.18),transparent_24%),radial-gradient(circle_at_20%_80%,rgba(99,102,241,0.12),transparent_18%)] opacity-85" />
                <div className="absolute right-6 top-6 h-20 w-20 rounded-full bg-gradient-to-br from-fuchsia-500/20 to-transparent blur-2xl transition duration-500 group-hover:scale-110" />
                <div className="absolute left-6 bottom-8 h-4 w-24 rounded-full bg-fuchsia-400/10 blur-xl" />
                <div className="relative z-10 flex min-h-[18rem] flex-col justify-between">
                  <div className="flex h-16 w-16 items-center justify-center rounded-[1.4rem] border border-fuchsia-300/15 bg-fuchsia-500/10 shadow-[0_18px_80px_rgba(168,85,247,0.16)] text-fuchsia-100">
            {getServiceIcon(service.title)}
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold tracking-tight text-white">{service.title}</h3>
                    <p className="mt-4 text-sm leading-7 text-slate-300">{service.description}</p>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-fuchsia-200">
                    <span className="h-px w-10 bg-fuchsia-300/55 transition duration-500 group-hover:w-16" />
                    <span className="text-fuchsia-100/80">Discover more</span>
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
