"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { CheckCircle, ArrowRight, Wifi, Shield, Zap, Eye } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Collision Prevention",
    description: "Real-time proximity detection prevents carrier-to-carrier collisions during hydraulic operations.",
  },
  {
    icon: Eye,
    title: "Vehicle Detection",
    description: "Intelligent sensor array detects vehicle presence and positioning for safe hydraulic actuation.",
  },
  {
    icon: Zap,
    title: "Hydraulic Automation",
    description: "Smart control logic automates hydraulic arm sequencing based on sensor inputs and safety conditions.",
  },
  {
    icon: Wifi,
    title: "IoT Integration",
    description: "Real-time monitoring, alerts, and remote diagnostics via cloud-connected sensor hub.",
  },
];

const specs = [
  { label: "Response Time", value: "<50ms" },
  { label: "Detection Range", value: "0.1 – 5m" },
  { label: "Sensor Accuracy", value: "±2mm" },
  { label: "Operating Temp", value: "-20°C to 85°C" },
  { label: "IP Rating", value: "IP67" },
  { label: "Communication", value: "CAN / IoT" },
];

export default function HydraSense() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);

  return (
    <section id="hydrasense" ref={ref} className="py-24 lg:py-32 bg-[#0A0A0A] relative overflow-hidden">
      {/* Blueprint grid */}
      <div className="absolute inset-0 blueprint-bg opacity-40 pointer-events-none" />

      {/* Red gradient */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#E10600]/04 to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-label mb-3 flex items-center gap-2"
          >
            <span className="w-6 h-px bg-[#E10600]" />
            Signature Product
            <span className="w-6 h-px bg-[#E10600]" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="section-title text-[clamp(3rem,8vw,7rem)] text-white"
            style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.04em" }}
          >
            HYDRA<span className="text-[#E10600]">SENSE</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[#666] text-lg mt-3 max-w-xl"
          >
            Smart hydraulic safety & automation system engineered for automotive car carriers.
          </motion.p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Product Visual */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            {/* Product diagram */}
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Outer ring */}
              <div className="absolute inset-0 rounded-full border border-[#E10600]/10 animate-spin" style={{ animationDuration: "30s" }} />
              <div className="absolute inset-4 rounded-full border border-[#E10600]/08 animate-spin" style={{ animationDuration: "20s", animationDirection: "reverse" }} />

              {/* Center product box */}
              <div className="absolute inset-16 flex items-center justify-center">
                <div className="relative w-full h-full glass border border-[#E10600]/20 rounded-2xl flex items-center justify-center red-glow-sm overflow-hidden">
                  {/* Scan animation */}
                  <div className="ai-scanner" />

                  {/* Product silhouette */}
                  <div className="text-center p-8">
                    <div className="font-mono text-[#E10600] text-sm mb-4 tracking-[0.2em]">HYDRASENSE</div>
                    <div className="relative mx-auto w-32 h-32">
                      {/* Car carrier diagram */}
                      <svg viewBox="0 0 120 120" className="w-full h-full text-[#E10600]/60" fill="none" stroke="currentColor" strokeWidth="1">
                        {/* Truck body */}
                        <rect x="10" y="60" width="100" height="30" rx="3" />
                        {/* Hydraulic arms */}
                        <line x1="25" y1="60" x2="20" y2="30" strokeWidth="2" />
                        <line x1="60" y1="60" x2="60" y2="25" strokeWidth="2" />
                        <line x1="95" y1="60" x2="100" y2="30" strokeWidth="2" />
                        {/* Cars */}
                        <rect x="15" y="24" width="25" height="12" rx="2" className="text-white/20" stroke="currentColor" />
                        <rect x="50" y="18" width="25" height="12" rx="2" className="text-white/20" stroke="currentColor" />
                        <rect x="80" y="24" width="25" height="12" rx="2" className="text-white/20" stroke="currentColor" />
                        {/* Sensor dots */}
                        <circle cx="20" cy="24" r="3" className="fill-current text-[#E10600]" />
                        <circle cx="60" cy="18" r="3" className="fill-current text-[#E10600]" />
                        <circle cx="100" cy="24" r="3" className="fill-current text-[#E10600]" />
                        {/* Wheels */}
                        <circle cx="30" cy="93" r="6" />
                        <circle cx="90" cy="93" r="6" />
                      </svg>
                    </div>
                    <div className="mt-4 flex justify-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                      <span className="font-mono text-[10px] text-[#555]">SYSTEM ACTIVE</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sensor nodes */}
              {[
                { angle: 0, label: "COLLISION DETECT" },
                { angle: 90, label: "VEHICLE SENSOR" },
                { angle: 180, label: "HYDRAULIC CTRL" },
                { angle: 270, label: "IoT GATEWAY" },
              ].map((node, i) => {
                const rad = (node.angle * Math.PI) / 180;
                const x = 50 + 45 * Math.cos(rad);
                const y = 50 + 45 * Math.sin(rad);
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + i * 0.15 }}
                    style={{ left: `${x}%`, top: `${y}%`, transform: "translate(-50%, -50%)" }}
                    className="absolute"
                  >
                    <div className="w-3 h-3 rounded-full bg-[#E10600] red-glow-sm animate-pulse" />
                    <div className={`absolute font-mono text-[8px] text-[#E10600]/60 whitespace-nowrap ${
                      i === 0 ? "top-full mt-1 left-1/2 -translate-x-1/2" :
                      i === 1 ? "left-full ml-2 top-1/2 -translate-y-1/2" :
                      i === 2 ? "bottom-full mb-1 left-1/2 -translate-x-1/2" :
                      "right-full mr-2 top-1/2 -translate-y-1/2"
                    }`}>
                      {node.label}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Right: Features & Specs */}
          <div>
            {/* Features */}
            <div className="space-y-4 mb-10">
              {features.map((feature, i) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-4 p-4 glass border border-white/05 rounded-xl hover:border-[#E10600]/20 transition-all group"
                >
                  <div className="shrink-0 w-10 h-10 rounded-lg bg-[#E10600]/10 border border-[#E10600]/20 flex items-center justify-center text-[#E10600] group-hover:bg-[#E10600]/15 transition-colors">
                    <feature.icon size={18} />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-sm mb-1">{feature.title}</h4>
                    <p className="text-[#555] text-xs leading-relaxed">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Tech Specs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="glass border border-[#E10600]/15 rounded-xl p-6"
            >
              <div className="section-label mb-4">Technical Specifications</div>
              <div className="grid grid-cols-2 gap-3">
                {specs.map((spec) => (
                  <div key={spec.label} className="flex flex-col gap-0.5">
                    <span className="text-[#444] text-[10px] font-mono">{spec.label}</span>
                    <span className="text-white text-sm font-semibold">{spec.value}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="mt-6 flex gap-4"
            >
              <a href="#contact" className="btn-primary text-xs py-3 px-6">
                Request Product Demo <ArrowRight size={14} />
              </a>
              <a href="#contact" className="btn-secondary text-xs py-3 px-6">
                Download Datasheet
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
