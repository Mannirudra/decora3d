"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import SectionHeader from "@/components/ui/SectionHeader";

const steps = [
  {
    id: "01",
    name: "DISCOVER",
    color: "#E10600",
    description:
      "Deep-dive into your engineering challenge. Requirements gathering, feasibility analysis, and technical brief formulation.",
    deliverables: ["Requirements Doc", "Feasibility Report", "Project Brief"],
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="11" cy="11" r="8" />
        <path d="M21 21l-4.35-4.35" />
      </svg>
    ),
  },
  {
    id: "02",
    name: "DESIGN",
    color: "#E10600",
    description:
      "Concept development, industrial design, CAD modeling, and design-for-manufacture reviews.",
    deliverables: ["CAD Models", "Design Concepts", "DFM Review"],
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 20h9M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z" />
      </svg>
    ),
  },
  {
    id: "03",
    name: "SIMULATE",
    color: "#E10600",
    description:
      "FEA structural analysis, CFD thermal/flow simulation, kinematic simulation, and tolerance stack-up.",
    deliverables: ["FEA Report", "CFD Analysis", "Simulation Data"],
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M7 8l3 3 2-2 4 4" />
      </svg>
    ),
  },
  {
    id: "04",
    name: "PROTOTYPE",
    color: "#E10600",
    description:
      "Rapid prototyping via SLA, FDM, SLS, or metal AM. Functional prototype build for real-world testing.",
    deliverables: ["Physical Prototype", "3D Printed Parts", "Assembly"],
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
      </svg>
    ),
  },
  {
    id: "05",
    name: "VALIDATE",
    color: "#E10600",
    description:
      "Testing against design requirements — dimensional inspection, functional testing, environmental qualification.",
    deliverables: ["Test Reports", "Inspection Data", "Validation Sign-off"],
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M9 11l3 3L22 4" />
        <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
      </svg>
    ),
  },
  {
    id: "06",
    name: "MANUFACTURE",
    color: "#E10600",
    description:
      "Production tooling, CNC machining, injection molding, and assembly with full quality documentation.",
    deliverables: ["Production Parts", "PPAP Documents", "Quality Records"],
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
      </svg>
    ),
  },
  {
    id: "07",
    name: "DEPLOY",
    color: "#E10600",
    description:
      "Automation system installation, commissioning, software deployment, and operator training.",
    deliverables: ["Installed System", "SOP Training", "Commissioning Report"],
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
      </svg>
    ),
  },
  {
    id: "08",
    name: "SUPPORT",
    color: "#E10600",
    description:
      "Ongoing monitoring, predictive maintenance, design iterations, and continuous improvement partnerships.",
    deliverables: ["Support SLA", "Remote Monitoring", "Improvement Roadmap"],
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M18 8h1a4 4 0 010 8h-1M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8zM6 1v3M10 1v3M14 1v3" />
      </svg>
    ),
  },
];

export default function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="process" ref={ref} className="py-24 lg:py-32 bg-[#111] relative overflow-hidden">
      <div className="absolute inset-0 blueprint-bg opacity-30 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <SectionHeader
          label="Our Process"
          title={`HOW WE\nENGINEER`}
          subtitle="A rigorous 8-phase engineering process ensuring nothing is left to chance."
          centered
          className="mb-16"
        />

        {/* Desktop: Horizontal scroll timeline */}
        <div className="hidden lg:block">
          {/* Connector line */}
          <div className="relative mb-4">
            <div className="absolute top-8 left-0 right-0 h-px bg-white/05" />
            <motion.div
              className="absolute top-8 left-0 h-px bg-gradient-to-r from-[#E10600] to-[#E10600]/20"
              initial={{ width: 0 }}
              animate={isInView ? { width: "100%" } : {}}
              transition={{ duration: 2, ease: "easeOut", delay: 0.3 }}
            />
          </div>

          <div className="grid grid-cols-8 gap-2">
            {steps.map((step, i) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                className="flex flex-col items-center text-center group"
              >
                {/* Step node */}
                <div className="relative z-10 mb-4">
                  <div className="w-16 h-16 rounded-full bg-[#0A0A0A] border border-white/10 flex items-center justify-center text-[#E10600] group-hover:border-[#E10600]/50 group-hover:bg-[#E10600]/05 transition-all duration-300">
                    {step.icon}
                  </div>
                  <div className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-[#E10600] flex items-center justify-center">
                    <span className="text-white text-[8px] font-mono font-bold">{i + 1}</span>
                  </div>
                </div>

                {/* Step name */}
                <div
                  className="text-white font-bold text-xs tracking-[0.15em] mb-2"
                  style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "0.85rem" }}
                >
                  {step.name}
                </div>

                {/* Description */}
                <p className="text-[#333] text-[10px] leading-relaxed mb-2">{step.description}</p>

                {/* Deliverables */}
                <div className="space-y-1 mt-auto">
                  {step.deliverables.map((d) => (
                    <div key={d} className="text-[#E10600]/40 text-[9px] font-mono">
                      › {d}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile: Vertical list */}
        <div className="lg:hidden space-y-4">
          {steps.map((step, i) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="flex gap-4 p-4 glass border border-white/05 rounded-xl"
            >
              {/* Number + connector */}
              <div className="flex flex-col items-center shrink-0">
                <div className="w-10 h-10 rounded-full border border-[#E10600]/30 bg-[#E10600]/05 flex items-center justify-center text-[#E10600]">
                  {step.icon}
                </div>
                {i < steps.length - 1 && (
                  <div className="w-px h-full bg-gradient-to-b from-[#E10600]/30 to-transparent mt-2" />
                )}
              </div>

              <div className="pt-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-[#E10600] font-mono text-[10px]">{step.id}</span>
                  <h3
                    className="text-white font-bold text-sm"
                    style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.1em" }}
                  >
                    {step.name}
                  </h3>
                </div>
                <p className="text-[#444] text-xs leading-relaxed">{step.description}</p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {step.deliverables.map((d) => (
                    <span key={d} className="text-[9px] font-mono text-[#E10600]/40 border border-[#E10600]/15 px-1.5 py-0.5">
                      {d}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-[#333] text-sm font-mono mb-6">
            Ready to start the journey from concept to creation?
          </p>
          <a href="#contact" className="btn-primary">
            Begin Discovery Phase
          </a>
        </motion.div>
      </div>
    </section>
  );
}
