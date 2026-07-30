"use client";

import { motion } from "framer-motion";
import Button from "./Button";
import Ferrofluid from "./Ferrofluid";
import "./GradientText.css";
import ShinyText from "./ShinyText";

const heroContainer = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.16,
            delayChildren: 0.2,
        },
    },
};

const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } },
};


export default function Hero() {
    return (
        <>
            <motion.section
                id="top"
                className="relative h-screen overflow-hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
                <Ferrofluid
                    className="absolute inset-0"
                    colors={["#7C3AED", "#6366F1", "#7C3AED", "#06B6D4"]}
                    speed={0.1}
                    scale={1.05}
                    turbulence={0.8}
                    fluidity={0.1}
                    rimWidth={0.22}
                    sharpness={2.1}
                    shimmer={1.5}
                    glow={1.8}
                    opacity={0.94}
                    mouseStrength={0.9}
                    mouseRadius={0.42}
                />
                <div className="absolute inset-0 z-10 flex items-center justify-center px-6 sm:px-8 lg:px-12">
                    <div className="relative w-full max-w-5xl">
                        <div className="pointer-events-none absolute inset-x-0 -top-16 mx-auto h-48 w-full max-w-3xl rounded-full bg-purple-500/10 blur-3xl" />
                        <motion.div
                            className="relative max-w-5xl space-y-8 text-center"
                            initial="hidden"
                            animate="visible"
                            variants={heroContainer}
                        >
                           <motion.h1
  variants={fadeUp}
  className="mx-auto max-w-5xl text-5xl font-semibold leading-[0.96] tracking-tight sm:text-7xl lg:text-8xl text-slate-100"
>
  <span className="animated-gradient-text">Where</span>{' '}
  <span className="text-slate-100">Ideas Become</span>{' '}
  <span className="text-transparent animated-gradient-text drop-shadow-[0_0_38px_rgba(191,18,238,0.55)]">Software</span>
</motion.h1>

<motion.div variants={fadeUp} className="pt-6">
  <a href="#services" className="inline-flex items-center gap-2 text-lg sm:text-xl font-medium group">
    <ShinyText
      text="Explore Services"
      speed={3}
      color="#c4b5fd"
      shineColor="#ffffff"
    />
    <span className="transition-transform duration-300 group-hover:translate-x-1 text-purple-300">
      →
    </span>
  </a>
</motion.div>
                        </motion.div>
                    </div>
                </div>
            </motion.section>

            <section className="relative bg-[#050505] py-24">
                <div className="mx-auto max-w-5xl px-6 sm:px-8 lg:px-12 text-center">
                    <motion.div
                        className="space-y-8"
                        initial="hidden"
                        animate="visible"
                        variants={heroContainer}
                    >
                        
                        <motion.div
                            variants={fadeUp}
                            initial="hidden"
                            animate="visible"
                            
                        >
                            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-slate-100">Trusted to Build the Future of Digital Solutions.</h3>
                            <p className="mt-3 text-lg text-slate-400 max-w-2xl mx-auto">We create modern websites, enterprise systems, custom applications, and practical technology education that empower businesses, organizations, and future developers.</p>

                            <div className="mt-8 flex justify-center">
                                <div className="text-center">
                                    <div className="flex justify-center">
                                        <img src="/krg.svg" alt="Kurdistan Region" className="h-28 w-auto" role="img" />
                                    </div>
                                    <p className="mt-4 text-sm text-slate-300 uppercase tracking-wider">Kurdistan Region</p>
                                </div>
                            </div>
                        </motion.div>
                        
                    </motion.div>

                </div>

            </section>

        </>

    );
}
