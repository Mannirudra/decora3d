"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";

const services = [
  {
    id: "01",
    title: "Product Design & Development",
    description:
      "End-to-end product development from concept ideation to production-ready designs. CAD models, product renderings, and concept validation.",
    tags: ["Concept Development", "CAD Modeling", "Product Rendering", "DFM"],
    gradient: "from-[#E10600]/10 to-transparent",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
  },
  {
    id: "02",
    title: "Industrial Design",
    description:
      "Human-centric industrial design combining aesthetics with engineering function. Sketch exploration, surface design, and design for manufacture.",
    tags: ["Sketching", "Surface Design", "Ergonomics", "CMF Design"],
    gradient: "from-[#E10600]/08 to-transparent",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
      </svg>
    ),
  },
  {
    id: "03",
    title: "CAD / CAM / CAE",
    description:
      "Advanced simulation and analysis — FEA, CFD, topology optimization, and toolpath programming for precision manufacturing.",
    tags: ["FEA Analysis", "CFD Simulation", "Topology Optimization", "CAM Programming"],
    gradient: "from-[#E10600]/10 to-transparent",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <path d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18" />
      </svg>
    ),
  },
  {
    id: "04",
    title: "Additive Manufacturing",
    description:
      "Industrial 3D printing across FDM, SLA, SLS, and Metal AM technologies. Functional prototypes to production-grade parts.",
    tags: ["FDM / SLA / SLS", "Metal 3D Printing", "Production Parts", "Post-Processing"],
    gradient: "from-[#E10600]/08 to-transparent",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
        <line x1="12" y1="22.08" x2="12" y2="12" />
      </svg>
    ),
  },
  {
    id: "05",
    title: "Tool & Mold Manufacturing",
    description:
      "Precision tooling design and manufacturing — injection molds, press tools, jigs and fixtures for high-volume production.",
    tags: ["Injection Molds", "Press Tools", "Jigs & Fixtures", "Tool Design"],
    gradient: "from-[#E10600]/10 to-transparent",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
      </svg>
    ),
  },
  {
    id: "06",
    title: "CNC Manufacturing",
    description:
      "5-axis CNC precision machining for metals, plastics, and composites. Tight tolerances, complex geometries, and quality-certified output.",
    tags: ["5-Axis CNC", "Precision Machining", "Metal Components", "Quality Control"],
    gradient: "from-[#E10600]/08 to-transparent",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.07 4.93A10 10 0 012 10a9.95 9.95 0 001.63 5.45M21.49 14.37A10 10 0 0112 22a9.95 9.95 0 01-6.02-2" />
        <circle cx="12" cy="12" r="10" strokeDasharray="4 2" />
      </svg>
    ),
  },
  {
    id: "07",
    title: "Industry 4.0",
    description:
      "Connected factory solutions with real-time OEE monitoring, IoT sensor integration, predictive maintenance, and live production dashboards.",
    tags: ["IoT Integration", "OEE Monitoring", "Predictive Maintenance", "Connected Factory"],
    gradient: "from-[#E10600]/10 to-transparent",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <path d="M8 21h8M12 17v4" />
        <path d="M7 8l3 3 2-2 3 3" />
      </svg>
    ),
  },
  {
    id: "08",
    title: "AI Vision Systems",
    description:
      "Machine vision and AI-powered quality inspection systems for defect detection, dimensional measurement, and production monitoring.",
    tags: ["Defect Detection", "Quality Inspection", "Smart Cameras", "AI Analytics"],
    gradient: "from-[#E10600]/08 to-transparent",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
  },
  {
    id: "09",
    title: "Machine Monitoring",
    description:
      "Real-time machine utilization tracking, OEE measurement, downtime analysis, and predictive analytics for production floor optimization.",
    tags: ["OEE Dashboard", "Utilization Tracking", "Downtime Analysis", "Live Alerts"],
    gradient: "from-[#E10600]/10 to-transparent",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
  },
  {
    id: "10",
    title: "Automation Systems",
    description:
      "Custom automation solutions integrating robotics, PLC programming, pneumatic systems, and hydraulic automation for manufacturing lines.",
    tags: ["Robotics", "PLC Programming", "Hydraulic Systems", "Custom Automation"],
    gradient: "from-[#E10600]/08 to-transparent",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <rect x="3" y="11" width="18" height="10" rx="2" />
        <circle cx="12" cy="5" r="2" />
        <path d="M12 7v4M8 11V9a4 4 0 018 0v2" />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 lg:py-32 bg-[#0A0A0A] relative overflow-hidden">
      {/* Blueprint background */}
      <div className="absolute inset-0 blueprint-bg opacity-30 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <SectionHeader
            label="Our Capabilities"
            title={`ENGINEERING\nSERVICES`}
            subtitle="Complete engineering solutions from concept to production — under one roof."
          />
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="shrink-0"
          >
            <a href="#contact" className="btn-secondary text-xs">
              Discuss Your Project <ArrowUpRight size={14} />
            </a>
          </motion.div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4">
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
              className="service-card glass border border-white/06 rounded-xl p-6 cursor-pointer group"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="text-[#E10600] group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <span
                  className="text-[#222] font-mono text-3xl font-bold leading-none"
                  style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                >
                  {service.id}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-white font-semibold text-base mb-2 group-hover:text-[#E10600] transition-colors leading-tight">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-[#555] text-sm leading-relaxed mb-4">
                {service.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mt-auto">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] text-[#444] border border-white/06 px-2 py-0.5 font-mono group-hover:border-[#E10600]/20 group-hover:text-[#666] transition-all"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Arrow */}
              <div className="mt-4 flex items-center gap-1 text-[#333] group-hover:text-[#E10600] transition-colors text-xs">
                <span
                  className="tracking-[0.1em]"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  EXPLORE
                </span>
                <ArrowUpRight size={12} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
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
          <p className="text-[#444] text-sm mb-6 font-mono">
            Don&apos;t see your specific requirement?
          </p>
          <a href="#contact" className="btn-primary">
            Discuss Custom Engineering Solutions
          </a>
        </motion.div>
      </div>
    </section>
  );
}
