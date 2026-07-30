"use client";

import { motion } from "framer-motion";
import Button from "./Button";

const reveal = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } },
};

export default function Contact() {
  return (
    <motion.section
      id="contact"
      className="relative px-6 py-24 sm:px-8 lg:px-12"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.28 }}
      variants={reveal}
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-fuchsia-300/25 to-transparent" />
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-lg border border-white/10 bg-[#0b0714]/78 p-8 text-center shadow-[0_40px_120px_rgba(0,0,0,0.38),0_0_90px_rgba(191,18,238,0.08)] backdrop-blur-xl sm:p-12 lg:p-16">
        <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-[#bf12ee]/70 to-transparent" />
        <div className="mx-auto max-w-3xl">
          <p className="text-sm uppercase tracking-[0.3em] text-fuchsia-300/80">Start your next chapter</p>
          <h2 className="mt-6 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Let&apos;s build something exceptional.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
            If your business is ready to transform with premium software, we create tailored systems, polished products, and practical outcomes that last.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button variant="solid" href="https://wa.me/07501755179" className="min-w-[14rem]">
              WhatsApp
            </Button>
            <Button variant="outline" href="mailto:hello@vexora.com" className="min-w-[14rem]">
              Email
            </Button>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
