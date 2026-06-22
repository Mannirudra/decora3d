"use client";

import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";

const processSteps = [
  { label: "IDEA", icon: "💡" },
  { label: "DESIGN", icon: "✏️" },
  { label: "PROTOTYPE", icon: "🔧" },
  { label: "MANUFACTURE", icon: "⚙️" },
  { label: "DEPLOY", icon: "🚀" },
];

const floatingTags = [
  { text: "Product Design", x: "8%", y: "25%", delay: 0 },
  { text: "CAD/CAM/CAE", x: "75%", y: "20%", delay: 0.5 },
  { text: "3D Printing", x: "85%", y: "60%", delay: 1 },
  { text: "CNC Machining", x: "5%", y: "65%", delay: 1.5 },
  { text: "Industry 4.0", x: "60%", y: "78%", delay: 0.8 },
  { text: "AI Vision", x: "15%", y: "80%", delay: 1.2 },
];

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#0A0A0A]"
      id="hero"
    >
      {/* Blueprint Grid */}
      <div className="absolute inset-0 blueprint-bg opacity-60 pointer-events-none" />
      <div className="absolute inset-0 blueprint-bg-fine opacity-40 pointer-events-none" />

      {/* Red radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#E10600] rounded-full opacity-[0.04] blur-[120px] pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-[#E10600] rounded-full opacity-[0.03] blur-[80px] pointer-events-none" />

      {/* Animated scan line */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ y: ["0%", "100vh"] }}
          transition={{ duration: 6, repeat: Infinity, ease: "linear", repeatDelay: 4 }}
          className="w-full h-px bg-gradient-to-r from-transparent via-[#E10600]/40 to-transparent absolute top-0"
        />
      </div>

      {/* Floating engineering tags */}
      {floatingTags.map((tag, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.6, 0.4, 0.7, 0.5] }}
          transition={{ duration: 3, delay: tag.delay, repeat: Infinity, repeatType: "reverse" }}
          style={{ left: tag.x, top: tag.y }}
          className="absolute hidden lg:flex items-center gap-1.5 text-[10px] font-mono text-[#E10600]/50 border border-[#E10600]/15 px-2 py-1 pointer-events-none"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#E10600]/50 animate-pulse" />
          {tag.text}
        </motion.div>
      ))}

      {/* Corner decorations */}
      <div className="absolute top-24 left-8 w-12 h-12 border-t border-l border-[#E10600]/30 hidden lg:block" />
      <div className="absolute top-24 right-8 w-12 h-12 border-t border-r border-[#E10600]/30 hidden lg:block" />
      <div className="absolute bottom-24 left-8 w-12 h-12 border-b border-l border-[#E10600]/30 hidden lg:block" />
      <div className="absolute bottom-24 right-8 w-12 h-12 border-b border-r border-[#E10600]/30 hidden lg:block" />

      {/* Coordinate labels */}
      <div className="absolute top-28 left-12 font-mono text-[10px] text-[#333] hidden lg:block">
        [00:00]
      </div>
      <div className="absolute top-28 right-12 font-mono text-[10px] text-[#333] hidden lg:block">
        [EN:00]
      </div>

      {/* Main Content */}
      <motion.div
        style={{ y, opacity }}
        className="relative z-10 text-center max-w-6xl mx-auto px-6 pt-24"
      >
        {/* Pre-label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-3 mb-8"
        >
          <span className="w-8 h-px bg-[#E10600]" />
          <span
            className="text-[#E10600] text-xs tracking-[0.35em] uppercase"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            Premium Engineering Technology
          </span>
          <span className="w-8 h-px bg-[#E10600]" />
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-[clamp(3.5rem,11vw,10rem)] leading-[0.9] font-bold tracking-tight"
          style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.04em" }}
        >
          <span className="text-white block">FROM</span>
          <span className="block relative">
            <span className="text-[#E10600] text-red-glow">CONCEPT</span>
          </span>
          <span className="text-white block">TO CREATION</span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-8 text-[#888] text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed font-light"
        >
          Engineering solutions that transform ideas into products, prototypes,
          automation systems and smart manufacturing solutions.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-wrap items-center justify-center gap-4 mt-10"
        >
          <a href="#contact" className="btn-primary text-sm py-4 px-8">
            <span>Start Your Project</span>
            <ArrowRight size={16} />
          </a>
          <a href="#services" className="btn-secondary text-sm py-4 px-8">
            View Capabilities
          </a>
        </motion.div>

        {/* Process Animation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-16 flex items-center justify-center gap-0 overflow-x-auto pb-2"
        >
          {processSteps.map((step, i) => (
            <div key={step.label} className="flex items-center shrink-0">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 1.2 + i * 0.15 }}
                className="flex flex-col items-center gap-2 px-4"
              >
                <div className="w-12 h-12 rounded-full border border-white/10 bg-white/03 flex items-center justify-center text-xl relative">
                  {step.icon}
                  {i === 4 && (
                    <div className="absolute inset-0 rounded-full border border-[#E10600]/40 animate-ping opacity-40" />
                  )}
                </div>
                <span
                  className="text-[10px] text-[#555] tracking-[0.15em]"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  {step.label}
                </span>
              </motion.div>

              {i < processSteps.length - 1 && (
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 1.4 + i * 0.15, duration: 0.4 }}
                  className="w-8 lg:w-12 h-px bg-gradient-to-r from-[#E10600]/60 to-[#E10600]/20 origin-left shrink-0"
                />
              )}
            </div>
          ))}
        </motion.div>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto"
        >
          {[
            { value: "1000+", label: "Projects" },
            { value: "500+", label: "Prototypes" },
            { value: "50+", label: "Customers" },
            { value: "10+", label: "Domains" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div
                className="text-white text-xl font-bold"
                style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.05em" }}
              >
                {stat.value}
              </div>
              <div
                className="text-[#555] text-xs tracking-[0.15em] mt-0.5"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span
          className="text-[#333] text-[10px] tracking-[0.2em]"
          style={{ fontFamily: "'JetBrains Mono', monospace" }}
        >
          SCROLL
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={18} className="text-[#E10600]" />
        </motion.div>
      </motion.div>
    </section>
  );
}
