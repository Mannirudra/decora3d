"use client";

import { motion } from "framer-motion";

interface SectionHeaderProps {
  label: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export default function SectionHeader({
  label,
  title,
  subtitle,
  centered = false,
  className = "",
}: SectionHeaderProps) {
  return (
    <div className={`${centered ? "text-center" : ""} ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="section-label mb-4 inline-flex items-center gap-2"
      >
        <span className="w-6 h-px bg-[#E10600]" />
        {label}
        <span className="w-6 h-px bg-[#E10600]" />
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="section-title text-[clamp(2.5rem,6vw,5rem)] text-white"
        style={{ fontFamily: "'Bebas Neue', sans-serif" }}
      >
        {title}
      </motion.h2>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-4 text-[#888] text-lg max-w-2xl leading-relaxed"
          style={{ marginLeft: centered ? "auto" : undefined, marginRight: centered ? "auto" : undefined }}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
