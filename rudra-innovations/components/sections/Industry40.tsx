"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import SectionHeader from "@/components/ui/SectionHeader";

const machines = [
  { id: "M-001", name: "CNC Mill #1", status: "running", oee: 87, utilization: 92, uptime: "18h 32m" },
  { id: "M-002", name: "3D Printer #3", status: "running", oee: 94, utilization: 96, uptime: "22h 15m" },
  { id: "M-003", name: "Lathe #2", status: "idle", oee: 0, utilization: 0, uptime: "—" },
  { id: "M-004", name: "CMM #1", status: "running", oee: 78, utilization: 83, uptime: "12h 44m" },
  { id: "M-005", name: "Press #4", status: "maintenance", oee: 0, utilization: 0, uptime: "—" },
  { id: "M-006", name: "Welding #2", status: "running", oee: 91, utilization: 88, uptime: "16h 08m" },
];

const alerts = [
  { time: "14:32", type: "info", msg: "M-002: 3D Print batch completed — 48 parts" },
  { time: "13:57", type: "warn", msg: "M-005: Scheduled maintenance started" },
  { time: "12:18", type: "success", msg: "OEE target of 85% achieved — Shift A" },
  { time: "11:45", type: "info", msg: "M-001: Tool change — Spindle #3 replaced" },
];

function OEEGauge({ value, label }: { value: number; label: string }) {
  const ref = useRef<SVGCircleElement>(null);
  const inView = useInView(ref, { once: true });
  const circumference = 2 * Math.PI * 45;
  const offset = circumference - (value / 100) * circumference;

  return (
    <div className="flex flex-col items-center">
      <div className="relative w-28 h-28">
        <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="45" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="8" />
          <motion.circle
            ref={ref}
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="#E10600"
            strokeWidth="8"
            strokeLinecap="round"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            animate={inView ? { strokeDashoffset: offset } : {}}
            transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-white text-xl font-bold" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
            {value}%
          </span>
        </div>
      </div>
      <span className="text-[#555] text-xs font-mono mt-2 tracking-[0.1em]">{label}</span>
    </div>
  );
}

function ProgressBar({ value, animated }: { value: number; animated: boolean }) {
  return (
    <div className="progress-bar w-full">
      <motion.div
        className="progress-fill"
        initial={{ width: 0 }}
        animate={animated ? { width: `${value}%` } : { width: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      />
    </div>
  );
}

export default function Industry40() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setTick((p) => p + 1), 3000);
    return () => clearInterval(t);
  }, []);

  const liveOEE = 84 + (tick % 3);
  const liveParts = 1247 + tick * 2;

  return (
    <section id="industry40" ref={sectionRef} className="py-24 lg:py-32 bg-[#0D0D0D] relative overflow-hidden">
      <div className="absolute inset-0 blueprint-bg opacity-30 pointer-events-none" />

      {/* Network visualization dots */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {Array.from({ length: 16 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-[#E10600]/30"
            style={{
              left: `${10 + (i % 4) * 25}%`,
              top: `${10 + Math.floor(i / 4) * 25}%`,
            }}
            animate={{ opacity: [0.2, 0.8, 0.2], scale: [1, 1.5, 1] }}
            transition={{ duration: 3 + i * 0.3, repeat: Infinity, delay: i * 0.2 }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          {/* Left: Section info */}
          <div className="lg:w-1/3 lg:sticky lg:top-32">
            <SectionHeader
              label="Industry 4.0"
              title={`SMART\nFACTORY`}
              subtitle="Real-time visibility into every machine, process, and production metric across your factory floor."
            />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="mt-8 space-y-3"
            >
              {[
                "Real-time OEE monitoring",
                "Machine utilization tracking",
                "Predictive maintenance alerts",
                "Downtime root-cause analysis",
                "Connected factory visualization",
                "IoT sensor integration",
                "Cloud & edge deployment",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-[#555] text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E10600]/60 shrink-0" />
                  {item}
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="mt-8"
            >
              <a href="#contact" className="btn-primary text-xs py-3 px-6 inline-flex">
                Get Industry 4.0 Assessment
              </a>
            </motion.div>
          </div>

          {/* Right: Live Dashboard */}
          <div className="lg:w-2/3 space-y-4">
            {/* Top KPI bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-3"
            >
              {[
                { label: "PLANT OEE", value: `${liveOEE}%`, color: "#00ff88", status: "▲ 2.3%" },
                { label: "MACHINES ACTIVE", value: "4/6", color: "#E10600", status: "↓ 2 down" },
                { label: "PARTS TODAY", value: liveParts.toString(), color: "#ffffff", status: "▲ On Track" },
                { label: "ALERTS", value: "2", color: "#ffa500", status: "1 critical" },
              ].map((kpi) => (
                <div key={kpi.label} className="dashboard-metric">
                  <div className="section-label mb-1 text-[9px]">{kpi.label}</div>
                  <div
                    className="text-2xl font-bold"
                    style={{ fontFamily: "'Bebas Neue', sans-serif", color: kpi.color }}
                  >
                    {kpi.value}
                  </div>
                  <div className="text-[10px] text-[#444] mt-1 font-mono">{kpi.status}</div>
                </div>
              ))}
            </motion.div>

            {/* OEE Gauges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="glass border border-white/05 rounded-xl p-6"
            >
              <div className="section-label mb-6">OEE Breakdown</div>
              <div className="flex items-center justify-around gap-4 flex-wrap">
                <OEEGauge value={88} label="AVAILABILITY" />
                <OEEGauge value={93} label="PERFORMANCE" />
                <OEEGauge value={97} label="QUALITY" />
                <OEEGauge value={liveOEE} label="OVERALL OEE" />
              </div>
            </motion.div>

            {/* Machine Status Table */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="glass border border-white/05 rounded-xl overflow-hidden"
            >
              <div className="flex items-center justify-between p-4 border-b border-white/05">
                <span className="section-label">Machine Status — Live</span>
                <div className="flex items-center gap-2">
                  <div className="status-dot" />
                  <span className="font-mono text-[10px] text-[#555]">LIVE</span>
                </div>
              </div>
              <div className="divide-y divide-white/03">
                {machines.map((m, i) => (
                  <motion.div
                    key={m.id}
                    initial={{ opacity: 0, x: -10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.5 + i * 0.08 }}
                    className="flex items-center gap-4 px-4 py-3 hover:bg-white/02 transition-colors"
                  >
                    <div
                      className={`w-2 h-2 rounded-full shrink-0 ${
                        m.status === "running"
                          ? "bg-green-400"
                          : m.status === "maintenance"
                          ? "bg-orange-400"
                          : "bg-[#333]"
                      }`}
                    />
                    <div className="w-24 shrink-0">
                      <div className="text-white text-xs font-medium">{m.name}</div>
                      <div className="text-[#333] text-[10px] font-mono">{m.id}</div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <ProgressBar value={m.utilization} animated={isInView} />
                    </div>
                    <div className="w-16 text-right shrink-0">
                      <div className="text-white text-xs font-mono">{m.oee > 0 ? `${m.oee}%` : "—"}</div>
                      <div className="text-[#333] text-[10px]">OEE</div>
                    </div>
                    <div className="w-16 text-right shrink-0 hidden sm:block">
                      <div className="text-[#555] text-[10px] font-mono">{m.uptime}</div>
                    </div>
                    <div className="w-20 text-right shrink-0">
                      <span
                        className={`text-[10px] px-2 py-0.5 font-mono rounded ${
                          m.status === "running"
                            ? "bg-green-400/10 text-green-400"
                            : m.status === "maintenance"
                            ? "bg-orange-400/10 text-orange-400"
                            : "bg-white/05 text-[#444]"
                        }`}
                      >
                        {m.status.toUpperCase()}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Alert Feed */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="glass border border-white/05 rounded-xl p-4"
            >
              <div className="section-label mb-3">Recent Alerts</div>
              <div className="space-y-2">
                {alerts.map((alert, i) => (
                  <div key={i} className="flex items-start gap-3 text-xs">
                    <span className="font-mono text-[#333] shrink-0 mt-0.5">{alert.time}</span>
                    <span
                      className={`w-1.5 h-1.5 rounded-full mt-1 shrink-0 ${
                        alert.type === "success"
                          ? "bg-green-400"
                          : alert.type === "warn"
                          ? "bg-orange-400"
                          : "bg-[#E10600]"
                      }`}
                    />
                    <span className="text-[#555]">{alert.msg}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
