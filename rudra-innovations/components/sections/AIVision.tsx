"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import SectionHeader from "@/components/ui/SectionHeader";

const defects = [
  { x: 23, y: 35, type: "Surface Crack", severity: "critical", conf: 98.2 },
  { x: 67, y: 52, type: "Void", severity: "warn", conf: 94.7 },
  { x: 45, y: 71, type: "Burr", severity: "minor", conf: 89.1 },
];

const metrics = [
  { label: "Defects Detected", value: "1,847", delta: "+23 today", color: "#E10600" },
  { label: "Inspection Speed", value: "240/min", delta: "±0 ppm", color: "#ffffff" },
  { label: "False Positive Rate", value: "0.3%", delta: "▼ 0.1%", color: "#00ff88" },
  { label: "Model Accuracy", value: "99.4%", delta: "▲ 0.2%", color: "#00ff88" },
];

const capabilities = [
  {
    title: "Defect Detection",
    desc: "Sub-millimeter surface defect identification across cracks, voids, scratches, and dimensional anomalies.",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="11" cy="11" r="8" />
        <path d="M21 21l-4.35-4.35M11 8v6M8 11h6" />
      </svg>
    ),
  },
  {
    title: "Quality Inspection",
    desc: "Dimensional measurement, tolerance verification, and color/texture classification at production speed.",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M9 11l3 3L22 4" />
        <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
      </svg>
    ),
  },
  {
    title: "AI Analytics",
    desc: "Trend analysis, defect clustering, shift-by-shift quality reports, and predictive failure forecasting.",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M21 21H4.6A1.6 1.6 0 013 19.4V3" />
        <path d="M7 16l4-8 4 4 3-6" />
      </svg>
    ),
  },
  {
    title: "Production Monitoring",
    desc: "Live camera feeds, batch tracking, shift-level quality scores, and real-time NOK/OK classification.",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <path d="M8 21h8M12 17v4" />
        <circle cx="12" cy="10" r="2" />
        <path d="M12 8v-1M12 13v1M14.12 9.88l.7-.7M9.17 14.83l-.7.7M14 10h1M9 10H8M14.12 10.12l.7.7M9.17 9.17l-.7-.7" />
      </svg>
    ),
  },
];

export default function AIVision() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeDefect, setActiveDefect] = useState<number | null>(null);

  return (
    <section id="ai-vision" ref={ref} className="py-24 lg:py-32 bg-[#080808] relative overflow-hidden">
      <div className="absolute inset-0 blueprint-bg opacity-20 pointer-events-none" />

      {/* Green scanner glow */}
      <div className="absolute top-1/2 right-0 w-96 h-96 -translate-y-1/2 bg-[#00ff88]/03 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Vision Dashboard */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="order-2 lg:order-1"
          >
            {/* Camera feed panel */}
            <div className="relative glass border border-white/08 rounded-2xl overflow-hidden">
              {/* Title bar */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-white/05 bg-white/02">
                <div className="flex items-center gap-2">
                  <div className="status-dot" />
                  <span className="font-mono text-[10px] text-[#555]">CAMERA_01 · LIVE INSPECTION</span>
                </div>
                <span className="font-mono text-[10px] text-[#333]">240 fps</span>
              </div>

              {/* Camera feed area */}
              <div className="relative bg-[#050505] aspect-video">
                {/* Grid overlay */}
                <div className="absolute inset-0 blueprint-bg opacity-60 pointer-events-none" />

                {/* Scanning line */}
                <motion.div
                  animate={{ y: ["0%", "100%"] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "linear", repeatDelay: 0.5 }}
                  className="absolute left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#00ff88]/80 to-transparent"
                  style={{ boxShadow: "0 0 12px rgba(0,255,136,0.6)" }}
                />

                {/* Part silhouette */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg viewBox="0 0 200 120" className="w-48 text-white/15" fill="none" stroke="currentColor" strokeWidth="1">
                    {/* Engine block silhouette */}
                    <rect x="20" y="20" width="160" height="80" rx="4" />
                    <rect x="35" y="35" width="40" height="50" rx="2" />
                    <rect x="85" y="35" width="40" height="50" rx="2" />
                    <rect x="135" y="35" width="30" height="50" rx="2" />
                    <circle cx="55" cy="60" r="12" />
                    <circle cx="105" cy="60" r="12" />
                    <circle cx="150" cy="60" r="8" />
                    <line x1="20" y1="20" x2="20" y2="100" />
                    <line x1="180" y1="20" x2="180" y2="100" />
                  </svg>
                </div>

                {/* Defect markers */}
                {defects.map((defect, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 1 + i * 0.4 }}
                    style={{ left: `${defect.x}%`, top: `${defect.y}%` }}
                    className="absolute cursor-pointer"
                    onMouseEnter={() => setActiveDefect(i)}
                    onMouseLeave={() => setActiveDefect(null)}
                  >
                    <div
                      className={`w-5 h-5 rounded-full border-2 flex items-center justify-center -translate-x-1/2 -translate-y-1/2 ${
                        defect.severity === "critical"
                          ? "border-[#E10600] bg-[#E10600]/20"
                          : defect.severity === "warn"
                          ? "border-orange-400 bg-orange-400/20"
                          : "border-yellow-400 bg-yellow-400/20"
                      }`}
                    >
                      <div
                        className={`w-1.5 h-1.5 rounded-full ${
                          defect.severity === "critical" ? "bg-[#E10600]" :
                          defect.severity === "warn" ? "bg-orange-400" : "bg-yellow-400"
                        } animate-pulse`}
                      />
                    </div>

                    {/* Tooltip */}
                    {activeDefect === i && (
                      <motion.div
                        initial={{ opacity: 0, y: 4 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="absolute left-6 top-0 z-10 bg-[#0A0A0A] border border-white/10 rounded px-2 py-1.5 whitespace-nowrap pointer-events-none"
                      >
                        <div className="font-mono text-[9px] text-white">{defect.type}</div>
                        <div className="font-mono text-[9px] text-[#555]">Conf: {defect.conf}%</div>
                      </motion.div>
                    )}
                  </motion.div>
                ))}

                {/* Crosshair corners */}
                <div className="absolute top-3 left-3 w-6 h-6 border-t-2 border-l-2 border-[#00ff88]/40" />
                <div className="absolute top-3 right-3 w-6 h-6 border-t-2 border-r-2 border-[#00ff88]/40" />
                <div className="absolute bottom-3 left-3 w-6 h-6 border-b-2 border-l-2 border-[#00ff88]/40" />
                <div className="absolute bottom-3 right-3 w-6 h-6 border-b-2 border-r-2 border-[#00ff88]/40" />
              </div>

              {/* Metrics row */}
              <div className="grid grid-cols-4 divide-x divide-white/05">
                {metrics.map((m) => (
                  <div key={m.label} className="p-3 text-center">
                    <div className="font-bold text-sm" style={{ color: m.color, fontFamily: "'Bebas Neue', sans-serif" }}>
                      {m.value}
                    </div>
                    <div className="font-mono text-[8px] text-[#333] mt-0.5">{m.label}</div>
                    <div className="font-mono text-[8px] mt-0.5" style={{ color: m.color === "#E10600" ? "#E10600" : "#555" }}>
                      {m.delta}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Defect list */}
            <div className="mt-4 space-y-2">
              {defects.map((d, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 1.5 + i * 0.15 }}
                  className="flex items-center gap-3 glass border border-white/04 rounded-lg px-4 py-2.5"
                >
                  <div
                    className={`w-2 h-2 rounded-full shrink-0 ${
                      d.severity === "critical" ? "bg-[#E10600]" :
                      d.severity === "warn" ? "bg-orange-400" : "bg-yellow-400"
                    }`}
                  />
                  <span className="text-white text-xs flex-1">{d.type}</span>
                  <span className="font-mono text-[10px] text-[#555]">Conf: {d.conf}%</span>
                  <span
                    className={`text-[9px] font-mono px-1.5 py-0.5 rounded ${
                      d.severity === "critical" ? "bg-[#E10600]/10 text-[#E10600]" :
                      d.severity === "warn" ? "bg-orange-400/10 text-orange-400" :
                      "bg-yellow-400/10 text-yellow-400"
                    }`}
                  >
                    {d.severity.toUpperCase()}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Content */}
          <div className="order-1 lg:order-2">
            <SectionHeader
              label="AI Vision Systems"
              title={`MACHINE\nVISION &\nAI QUALITY`}
              subtitle="Camera-based AI inspection systems that detect defects, measure dimensions, and monitor production quality — at machine speed."
            />

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {capabilities.map((cap, i) => (
                <motion.div
                  key={cap.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-4 glass border border-white/06 rounded-xl hover:border-[#E10600]/20 transition-all group"
                >
                  <div className="text-[#E10600] mb-3 group-hover:scale-110 transition-transform">
                    {cap.icon}
                  </div>
                  <h4 className="text-white font-semibold text-sm mb-1.5">{cap.title}</h4>
                  <p className="text-[#555] text-xs leading-relaxed">{cap.desc}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="mt-8 p-5 glass-red border border-[#E10600]/15 rounded-xl"
            >
              <div className="section-label mb-3">Why AI Vision?</div>
              <div className="grid grid-cols-3 gap-4 text-center">
                {[
                  { value: "10x", label: "Faster than manual" },
                  { value: "99.4%", label: "Accuracy" },
                  { value: "0", label: "Fatigue errors" },
                ].map((s) => (
                  <div key={s.label}>
                    <div
                      className="text-[#E10600] text-2xl font-bold"
                      style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                    >
                      {s.value}
                    </div>
                    <div className="text-[#555] text-[10px] mt-1 font-mono">{s.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
              className="mt-8 flex gap-4"
            >
              <a href="#contact" className="btn-primary text-xs py-3 px-6 inline-flex">
                Request AI Vision Demo
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
