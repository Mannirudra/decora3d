"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";

const categories = [
  "All",
  "Product Development",
  "Tooling",
  "Additive Manufacturing",
  "Automotive",
  "Automation",
  "AI Solutions",
];

const projects = [
  {
    id: 1,
    title: "Electric Vehicle Battery Enclosure",
    category: "Product Development",
    tags: ["CAD Design", "FEA", "Composite Materials"],
    problem: "OEM required lightweight, crash-safe battery enclosure for EV platform.",
    solution: "Topology-optimized aluminum extrusion with integrated thermal management channels.",
    outcome: "32% weight reduction vs. steel baseline, meeting FMVSS safety standards.",
    tech: ["SolidWorks", "ANSYS FEA", "CNC Machining"],
    accent: "#E10600",
  },
  {
    id: 2,
    title: "Injection Mold for Medical Device Housing",
    category: "Tooling",
    tags: ["Injection Mold", "Medical Grade", "P20 Steel"],
    problem: "Medical device startup needed production-ready mold with 500K shot life.",
    solution: "H13 hardened steel mold with conformal cooling channels and mirror-finish cavities.",
    outcome: "Cycle time reduced 22%, ±0.05mm dimensional accuracy, FDA-compliant surface finish.",
    tech: ["Moldflow", "CAM Programming", "EDM/Wire Cut"],
    accent: "#E10600",
  },
  {
    id: 3,
    title: "Hydraulic Press Tool Automation",
    category: "Automation",
    tags: ["PLC", "Hydraulics", "Safety Systems"],
    problem: "Manual press operation causing inconsistent part quality and operator safety risks.",
    solution: "Fully automated hydraulic press cell with vision-guided part loading and PLC control.",
    outcome: "40% productivity increase, zero operator incidents, Cpk > 1.67.",
    tech: ["Siemens S7 PLC", "Keyence Vision", "Hydraulic Design"],
    accent: "#E10600",
  },
  {
    id: 4,
    title: "Industrial Robot Gripper — Additive Manufacturing",
    category: "Additive Manufacturing",
    tags: ["SLS Nylon", "Topology Opt.", "Functional Part"],
    problem: "Standard gripper too heavy for collaborative robot payload; needed custom geometry.",
    solution: "Topology-optimized SLS nylon gripper with integrated pneumatic channels.",
    outcome: "65% lighter than aluminum alternative, printed and validated in 4 days.",
    tech: ["SLS 3D Printing", "Topology Optimization", "Post-Processing"],
    accent: "#E10600",
  },
  {
    id: 5,
    title: "Car Carrier HydraSense Retrofit",
    category: "Automotive",
    tags: ["Hydraulic Safety", "IoT Sensors", "Automotive"],
    problem: "Fleet of 50 car carriers had no collision prevention during hydraulic arm deployment.",
    solution: "HydraSense sensor array retrofitted to all carriers with cloud monitoring.",
    outcome: "Zero collision incidents post-deployment, 30% faster loading cycle achieved.",
    tech: ["HydraSense", "CAN Bus", "IoT Cloud"],
    accent: "#E10600",
  },
  {
    id: 6,
    title: "AI Weld Inspection System",
    category: "AI Solutions",
    tags: ["AI Vision", "Defect Detection", "Welding QC"],
    problem: "Manual weld inspection failing to catch micro-cracks on structural automotive parts.",
    solution: "Multi-angle camera AI system detecting cracks, porosity, and undercut defects.",
    outcome: "99.2% defect detection rate, inspecting 180 welds/minute vs. 20 manual.",
    tech: ["Custom AI Model", "Industrial Cameras", "Edge Computing"],
    accent: "#E10600",
  },
];

export default function Projects() {
  const [active, setActive] = useState("All");
  const [expanded, setExpanded] = useState<number | null>(null);

  const filtered =
    active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="projects" className="py-24 lg:py-32 bg-[#0D0D0D] relative overflow-hidden">
      <div className="absolute inset-0 blueprint-bg opacity-25 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
          <SectionHeader
            label="Project Showcase"
            title={`ENGINEERING\nPORTFOLIO`}
            subtitle="Real engineering challenges. Proven solutions. Measurable outcomes."
          />
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-4 py-2 text-xs font-mono tracking-[0.1em] border transition-all duration-200 ${
                active === cat
                  ? "border-[#E10600] text-white bg-[#E10600]/10"
                  : "border-white/08 text-[#555] hover:border-white/20 hover:text-white"
              }`}
            >
              {cat.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="group relative glass border border-white/06 rounded-xl overflow-hidden cursor-pointer hover:border-[#E10600]/30 transition-all duration-300"
                onClick={() => setExpanded(expanded === project.id ? null : project.id)}
              >
                {/* Category badge */}
                <div className="absolute top-4 right-4 z-10">
                  <span className="text-[9px] font-mono text-[#E10600] border border-[#E10600]/30 px-2 py-0.5 bg-[#E10600]/05">
                    {project.category.toUpperCase()}
                  </span>
                </div>

                {/* Top accent line */}
                <div className="h-0.5 w-0 bg-gradient-to-r from-[#E10600] to-[#FF2D20] group-hover:w-full transition-all duration-500" />

                <div className="p-6">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-[9px] font-mono text-[#333] border border-white/05 px-1.5 py-0.5">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Title */}
                  <h3 className="text-white font-semibold text-base mb-4 leading-snug group-hover:text-[#E10600] transition-colors">
                    {project.title}
                  </h3>

                  {/* Collapsed: Problem preview */}
                  <AnimatePresence mode="wait">
                    {expanded !== project.id ? (
                      <motion.div
                        key="collapsed"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                      >
                        <p className="text-[#444] text-xs leading-relaxed line-clamp-2">
                          {project.problem}
                        </p>
                        <div className="mt-4 flex items-center gap-1 text-[#E10600]/60 text-[10px] font-mono">
                          VIEW CASE STUDY
                          <ArrowUpRight size={10} />
                        </div>
                      </motion.div>
                    ) : (
                      <motion.div
                        key="expanded"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="space-y-3"
                      >
                        <div>
                          <div className="section-label text-[9px] mb-1">Problem</div>
                          <p className="text-[#555] text-xs leading-relaxed">{project.problem}</p>
                        </div>
                        <div>
                          <div className="section-label text-[9px] mb-1">Solution</div>
                          <p className="text-[#555] text-xs leading-relaxed">{project.solution}</p>
                        </div>
                        <div>
                          <div className="section-label text-[9px] mb-1 text-[#00ff88]">Outcome</div>
                          <p className="text-[#00ff88]/70 text-xs leading-relaxed font-medium">{project.outcome}</p>
                        </div>
                        <div>
                          <div className="section-label text-[9px] mb-2">Tech Stack</div>
                          <div className="flex flex-wrap gap-1">
                            {project.tech.map((t) => (
                              <span key={t} className="text-[9px] font-mono text-[#E10600]/60 border border-[#E10600]/20 px-1.5 py-0.5">
                                {t}
                              </span>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-14 text-center"
        >
          <a href="#contact" className="btn-primary inline-flex">
            Discuss Your Engineering Challenge
          </a>
        </motion.div>
      </div>
    </section>
  );
}
