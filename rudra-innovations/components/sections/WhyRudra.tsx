"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import SectionHeader from "@/components/ui/SectionHeader";

const stats = [
  {
    value: 1000,
    suffix: "+",
    label: "Projects Delivered",
    description: "Across product design, manufacturing, automation, and Industry 4.0.",
  },
  {
    value: 500,
    suffix: "+",
    label: "Prototypes Developed",
    description: "From concept sketches to functional, test-validated prototypes.",
  },
  {
    value: 50,
    suffix: "+",
    label: "Manufacturing Customers",
    description: "Automotive OEMs, industrial equipment, and consumer product brands.",
  },
  {
    value: 10,
    suffix: "+",
    label: "Engineering Domains",
    description: "Mechanical, electrical, software, AI, and automation expertise.",
  },
];

const differentiators = [
  {
    title: "End-to-End Engineering",
    desc: "From concept to deployed product — design, simulate, prototype, manufacture, and automate under one roof.",
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
  },
  {
    title: "Simulation-First Approach",
    desc: "FEA, CFD, and digital twin validation before cutting metal — reducing costly physical iterations.",
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
        <path d="M7 8l3 3 2-2 4 4" />
      </svg>
    ),
  },
  {
    title: "Industry 4.0 Native",
    desc: "Every solution designed for connectivity — IoT-ready, OEE-trackable, and cloud-integrated from day one.",
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="2" />
        <circle cx="12" cy="4" r="1" />
        <circle cx="20" cy="8" r="1" />
        <circle cx="20" cy="16" r="1" />
        <circle cx="12" cy="20" r="1" />
        <circle cx="4" cy="16" r="1" />
        <circle cx="4" cy="8" r="1" />
        <path d="M12 6v4M18.9 9.5l-3.5 2M18.9 14.5l-3.5-2M12 18v-4M5.1 14.5l3.5-2M5.1 9.5l3.5 2" />
      </svg>
    ),
  },
  {
    title: "Speed to Market",
    desc: "Rapid prototyping, agile design iterations, and parallel manufacturing tracks compress time-to-market.",
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
  },
  {
    title: "Automotive-Grade Quality",
    desc: "Rigorous dimensional inspection, material certification, and PPAP documentation capability.",
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M9 11l3 3L22 4" />
        <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
      </svg>
    ),
  },
  {
    title: "IP-Protected Engagement",
    desc: "All projects conducted under strict NDA. Your designs, data, and innovations stay yours.",
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0110 0v4" />
      </svg>
    ),
  },
];

const partners = ["Siemens", "ABB", "Stratasys", "Markforged", "ANSYS", "SolidWorks", "Keyence", "Fanuc"];

export default function WhyRudra() {
  return (
    <section id="why-rudra" className="py-24 lg:py-32 bg-[#0A0A0A] relative overflow-hidden">
      <div className="absolute inset-0 blueprint-bg opacity-30 pointer-events-none" />

      {/* Large background text */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden"
        aria-hidden
      >
        <span
          className="text-[20vw] font-bold text-white/[0.015] select-none whitespace-nowrap"
          style={{ fontFamily: "'Bebas Neue', sans-serif" }}
        >
          RUDRA
        </span>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <SectionHeader
          label="Why Rudra Innovations"
          title={`ENGINEERING\nEXCELLENCE`}
          subtitle="Numbers that reflect two decades of solving complex engineering problems."
          centered
          className="mb-16"
        />

        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center group"
            >
              <div className="relative inline-block">
                <div
                  className="text-white counter-value"
                  style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(3rem,7vw,5.5rem)" }}
                >
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} duration={2200} />
                </div>
                {/* Underline accent */}
                <div className="mt-1 h-0.5 w-0 bg-[#E10600] group-hover:w-full transition-all duration-500 mx-auto" />
              </div>
              <h3 className="text-white font-semibold text-sm mt-3 mb-2">{stat.label}</h3>
              <p className="text-[#444] text-xs leading-relaxed">{stat.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Differentiators */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-20">
          {differentiators.map((d, i) => (
            <motion.div
              key={d.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: (i % 3) * 0.1 }}
              className="flex gap-4 p-5 glass border border-white/05 rounded-xl hover:border-[#E10600]/20 transition-all group"
            >
              <div className="text-[#E10600] shrink-0 group-hover:scale-110 transition-transform">
                {d.icon}
              </div>
              <div>
                <h4 className="text-white font-semibold text-sm mb-1.5">{d.title}</h4>
                <p className="text-[#444] text-xs leading-relaxed">{d.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tech Partners */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="section-label mb-6">Technology Partners & Toolchain</div>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {partners.map((p, i) => (
              <motion.div
                key={p}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="px-4 py-2 border border-white/08 rounded text-[#333] text-xs font-mono hover:border-[#E10600]/30 hover:text-[#555] transition-all"
              >
                {p}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
