"use client";

import { motion } from "framer-motion";
import SectionHeader from "@/components/ui/SectionHeader";

const industries = [
  {
    name: "Automotive",
    description: "Body panels, powertrain components, interior tooling, ADAS sensor housings, EV battery enclosures.",
    capabilities: ["Sheet Metal Tooling", "Prototype Parts", "Hydraulic Systems", "ADAS Integration"],
    color: "#E10600",
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
        <path d="M5 17H3a2 2 0 01-2-2V5a2 2 0 012-2h11l5 5v5h-3" />
        <circle cx="7.5" cy="17.5" r="2.5" />
        <circle cx="17.5" cy="17.5" r="2.5" />
      </svg>
    ),
  },
  {
    name: "Manufacturing",
    description: "Custom jigs, fixtures, tooling inserts, automation cells, production monitoring systems.",
    capabilities: ["Custom Tooling", "Factory Automation", "OEE Monitoring", "Process Optimization"],
    color: "#E10600",
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
        <path d="M2 20h20M5 20V10M10 20V4M15 20V14M20 20V8" />
      </svg>
    ),
  },
  {
    name: "Industrial Equipment",
    description: "Heavy machinery components, hydraulic systems, pressure vessel design, structural analysis.",
    capabilities: ["FEA Analysis", "Hydraulic Design", "Structural Engineering", "Custom Machining"],
    color: "#E10600",
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
        <path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16" />
      </svg>
    ),
  },
  {
    name: "Consumer Products",
    description: "Ergonomic product design, injection-molded parts, rapid prototyping, retail-ready aesthetics.",
    capabilities: ["Industrial Design", "Injection Molding", "Prototyping", "CMF Design"],
    color: "#E10600",
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
      </svg>
    ),
  },
  {
    name: "Electronics",
    description: "Enclosure design, thermal management, PCB housings, DFM for electronics, EMI shielding.",
    capabilities: ["Enclosure Design", "Thermal Analysis", "DFM", "EMC Compliance"],
    color: "#E10600",
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
        <path d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18" />
      </svg>
    ),
  },
  {
    name: "Factory Automation",
    description: "End-of-line automation, pick-and-place systems, conveyor integration, safety interlocks.",
    capabilities: ["PLC Programming", "Robotics Integration", "Safety Systems", "Vision Inspection"],
    color: "#E10600",
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.07 4.93A10 10 0 002 12h2" />
        <path d="M4.93 19.07A10 10 0 0022 12h-2" />
        <path d="M12 2v2M12 20v2M4.22 4.22l1.41 1.41M18.37 18.37l1.41 1.41M2 12h2M20 12h2M4.22 19.78l1.41-1.41M18.37 5.63l1.41-1.41" />
      </svg>
    ),
  },
  {
    name: "Energy",
    description: "Renewable energy component design, pressure systems, heat exchangers, structural analysis for wind and solar.",
    capabilities: ["CFD Simulation", "Pressure Vessel Design", "Structural Analysis", "Renewable Energy"],
    color: "#E10600",
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
  },
  {
    name: "Heavy Engineering",
    description: "Large-scale structural design, heavy fabrication support, crane components, mining equipment.",
    capabilities: ["Structural Engineering", "FEA / CFD", "Heavy Fabrication", "Weld Design"],
    color: "#E10600",
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
        <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2" />
        <line x1="12" y1="22" x2="12" y2="15.5" />
        <polyline points="22 8.5 12 15.5 2 8.5" />
        <polyline points="2 15.5 12 8.5 22 15.5" />
        <line x1="12" y1="2" x2="12" y2="8.5" />
      </svg>
    ),
  },
];

export default function Industries() {
  return (
    <section id="industries" className="py-24 lg:py-32 bg-[#111] relative overflow-hidden">
      <div className="absolute inset-0 blueprint-bg opacity-20 pointer-events-none" />

      {/* Red accent line */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-[#E10600] to-transparent opacity-30" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <SectionHeader
          label="Industry Verticals"
          title={`INDUSTRIES\nWE SERVE`}
          subtitle="Deep domain expertise across engineering-intensive sectors."
          className="mb-16"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {industries.map((industry, i) => (
            <motion.div
              key={industry.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.08 }}
              className="group relative glass border border-white/06 rounded-xl p-6 cursor-pointer hover:border-[#E10600]/30 transition-all duration-400 overflow-hidden"
            >
              {/* Background gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#E10600]/05 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none" />

              <div className="relative z-10">
                {/* Icon */}
                <div className="text-[#E10600] mb-4 group-hover:scale-110 transition-transform duration-300">
                  {industry.icon}
                </div>

                {/* Name */}
                <h3
                  className="text-white font-semibold text-lg mb-2 group-hover:text-[#E10600] transition-colors"
                  style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.04em", fontSize: "1.3rem" }}
                >
                  {industry.name}
                </h3>

                {/* Description */}
                <p className="text-[#555] text-xs leading-relaxed mb-4">
                  {industry.description}
                </p>

                {/* Capabilities */}
                <div className="space-y-1">
                  {industry.capabilities.map((cap) => (
                    <div key={cap} className="flex items-center gap-2 text-xs text-[#444] group-hover:text-[#666] transition-colors">
                      <span className="w-1 h-1 rounded-full bg-[#E10600]/50 shrink-0" />
                      {cap}
                    </div>
                  ))}
                </div>
              </div>

              {/* Corner bracket */}
              <div className="absolute top-3 right-3 w-4 h-4 border-t border-r border-[#E10600]/20 group-hover:border-[#E10600]/60 transition-colors" />
              <div className="absolute bottom-3 left-3 w-4 h-4 border-b border-l border-[#E10600]/20 group-hover:border-[#E10600]/60 transition-colors" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
