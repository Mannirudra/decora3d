"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send, MessageCircle } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";

const services = [
  "Product Design & Development",
  "Industrial Design",
  "CAD / CAM / CAE",
  "Additive Manufacturing",
  "Tool & Mold Manufacturing",
  "CNC Manufacturing",
  "Industry 4.0",
  "AI Vision Systems",
  "Machine Monitoring",
  "Automation Systems",
  "HydraSense",
  "Engineering Consulting",
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 lg:py-32 bg-[#0A0A0A] relative overflow-hidden">
      <div className="absolute inset-0 blueprint-bg opacity-40 pointer-events-none" />

      {/* Red glow bottom-left */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#E10600] rounded-full opacity-[0.04] blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <SectionHeader
          label="Get in Touch"
          title={`START YOUR\nPROJECT`}
          subtitle="Tell us about your engineering challenge and we'll respond within 24 hours."
          className="mb-16"
        />

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Left: Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center text-center py-20 glass border border-[#E10600]/20 rounded-2xl px-8"
              >
                <div className="w-16 h-16 rounded-full bg-[#E10600]/10 border border-[#E10600]/30 flex items-center justify-center mb-6">
                  <Send className="text-[#E10600]" size={24} />
                </div>
                <h3
                  className="text-white text-3xl mb-3"
                  style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.04em" }}
                >
                  MESSAGE RECEIVED
                </h3>
                <p className="text-[#555] text-sm leading-relaxed max-w-sm">
                  Our engineering team will review your requirement and reach out within 24 hours.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setFormData({ name: "", email: "", company: "", phone: "", service: "", message: "" }); }}
                  className="mt-8 btn-secondary text-xs py-2.5 px-5"
                >
                  Submit Another Inquiry
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="section-label text-[9px] mb-2 block">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Your full name"
                      className="form-input rounded-lg"
                    />
                  </div>
                  <div>
                    <label className="section-label text-[9px] mb-2 block">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="you@company.com"
                      className="form-input rounded-lg"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="section-label text-[9px] mb-2 block">Company / Organisation</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Your company"
                      className="form-input rounded-lg"
                    />
                  </div>
                  <div>
                    <label className="section-label text-[9px] mb-2 block">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 XXXXX XXXXX"
                      className="form-input rounded-lg"
                    />
                  </div>
                </div>

                <div>
                  <label className="section-label text-[9px] mb-2 block">Service Required *</label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="form-input rounded-lg appearance-none bg-[rgba(255,255,255,0.04)]"
                  >
                    <option value="" className="bg-[#1A1A1A]">Select a service…</option>
                    {services.map((s) => (
                      <option key={s} value={s} className="bg-[#1A1A1A]">{s}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="section-label text-[9px] mb-2 block">Project Description *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Describe your engineering challenge, requirements, timeline, and expected outcomes…"
                    className="form-input rounded-lg resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="btn-primary w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <>
                      <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="10" strokeOpacity="0.2" />
                        <path d="M12 2a10 10 0 010 20" />
                      </svg>
                      Submitting…
                    </>
                  ) : (
                    <>
                      Send Inquiry
                      <Send size={14} />
                    </>
                  )}
                </button>

                <p className="text-[#333] text-[10px] font-mono text-center">
                  All inquiries protected by NDA. Response within 24 hours.
                </p>
              </form>
            )}
          </motion.div>

          {/* Right: Contact info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Contact cards */}
            <div className="space-y-3">
              <a
                href="mailto:rudrainnovation.rlbs@gmail.com"
                className="flex items-start gap-4 p-4 glass border border-white/06 rounded-xl hover:border-[#E10600]/30 transition-all group"
              >
                <div className="w-10 h-10 rounded-lg bg-[#E10600]/10 border border-[#E10600]/20 flex items-center justify-center text-[#E10600] shrink-0 group-hover:bg-[#E10600]/15 transition-colors">
                  <Mail size={18} />
                </div>
                <div>
                  <div className="section-label text-[9px] mb-1">Email Us</div>
                  <div className="text-white text-sm font-medium">rudrainnovation.rlbs@gmail.com</div>
                  <div className="text-[#444] text-xs mt-0.5">For project inquiries & RFQs</div>
                </div>
              </a>

              <a
                href="https://wa.me/919999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 p-4 glass border border-white/06 rounded-xl hover:border-[#25D366]/30 transition-all group"
              >
                <div className="w-10 h-10 rounded-lg bg-[#25D366]/10 border border-[#25D366]/20 flex items-center justify-center shrink-0 group-hover:bg-[#25D366]/15 transition-colors">
                  <svg className="w-4.5 h-4.5 text-[#25D366]" fill="currentColor" viewBox="0 0 24 24" style={{ width: 18, height: 18 }}>
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </div>
                <div>
                  <div className="section-label text-[9px] mb-1 text-[#25D366]">WhatsApp</div>
                  <div className="text-white text-sm font-medium">Quick Consultation</div>
                  <div className="text-[#444] text-xs mt-0.5">Chat with our engineers directly</div>
                </div>
              </a>

              <div className="flex items-start gap-4 p-4 glass border border-white/06 rounded-xl">
                <div className="w-10 h-10 rounded-lg bg-[#E10600]/10 border border-[#E10600]/20 flex items-center justify-center text-[#E10600] shrink-0">
                  <MapPin size={18} />
                </div>
                <div>
                  <div className="section-label text-[9px] mb-1">Location</div>
                  <div className="text-white text-sm font-medium">India</div>
                  <div className="text-[#444] text-xs mt-0.5">Serving clients globally</div>
                </div>
              </div>
            </div>

            {/* Response promise */}
            <div className="p-5 glass-red border border-[#E10600]/15 rounded-xl">
              <div className="section-label mb-3">Our Promise</div>
              <div className="space-y-2.5">
                {[
                  "Response within 24 hours",
                  "Free initial technical consultation",
                  "NDA signed before any discussion",
                  "Detailed project quotation provided",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2.5 text-[#666] text-xs">
                    <svg className="w-3.5 h-3.5 text-[#E10600] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M9 11l3 3L22 4" />
                    </svg>
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Quick expertise tags */}
            <div>
              <div className="section-label mb-3">We Specialise In</div>
              <div className="flex flex-wrap gap-2">
                {["Automotive", "Additive Mfg", "Industry 4.0", "AI Vision", "CNC", "Tooling", "Automation"].map((tag) => (
                  <span key={tag} className="text-[10px] font-mono text-[#444] border border-white/06 px-2 py-1 hover:border-[#E10600]/30 hover:text-[#666] transition-all cursor-default">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
