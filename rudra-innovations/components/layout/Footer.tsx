"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, Twitter, Instagram, Youtube, ArrowUpRight } from "lucide-react";

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
];

const industries = [
  "Automotive",
  "Manufacturing",
  "Industrial Equipment",
  "Consumer Products",
  "Electronics",
  "Factory Automation",
  "Energy",
  "Heavy Engineering",
];

const quickLinks = [
  { name: "About Us", href: "#why-rudra" },
  { name: "HydraSense", href: "#hydrasense" },
  { name: "Our Process", href: "#process" },
  { name: "Projects", href: "#projects" },
  { name: "Blog", href: "#" },
  { name: "Careers", href: "#" },
  { name: "Contact", href: "#contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#0A0A0A] border-t border-white/05 relative overflow-hidden">
      {/* Blueprint grid */}
      <div className="absolute inset-0 blueprint-bg opacity-30 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Top CTA Banner */}
        <div className="py-16 border-b border-white/05">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div>
              <div className="section-label mb-3">Ready to Engineer the Future?</div>
              <h2
                className="text-[clamp(2rem,5vw,3.5rem)] text-white leading-none"
                style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.04em" }}
              >
                FROM CONCEPT TO CREATION
              </h2>
              <p className="text-[#666] mt-2 text-sm">
                Let&apos;s transform your engineering challenge into reality.
              </p>
            </div>
            <div className="flex gap-4 flex-wrap">
              <a href="#contact" className="btn-primary whitespace-nowrap">
                Start Your Project
              </a>
              <a href="https://wa.me/919999999999" target="_blank" rel="noopener noreferrer"
                className="btn-secondary whitespace-nowrap flex items-center gap-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>

        {/* Main Footer Grid */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-9 h-9 bg-[#E10600] flex items-center justify-center">
                <span
                  className="text-white font-bold text-sm"
                  style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                >
                  RI
                </span>
              </div>
              <div>
                <div
                  className="text-white font-bold text-base leading-none tracking-wide"
                  style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.08em" }}
                >
                  RUDRA INNOVATIONS
                </div>
                <div
                  className="text-[#E10600] text-[0.55rem] tracking-[0.25em] uppercase mt-0.5"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  Engineering Possibilities
                </div>
              </div>
            </div>

            <p className="text-[#555] text-sm leading-relaxed mb-6">
              Premium engineering technology company delivering end-to-end solutions
              from concept design to manufacturing, automation and Industry 4.0 deployment.
            </p>

            <div className="space-y-3">
              <a href="mailto:rudrainnovation.rlbs@gmail.com"
                className="flex items-center gap-3 text-[#666] hover:text-[#E10600] text-sm transition-colors">
                <Mail size={14} className="text-[#E10600] shrink-0" />
                rudrainnovation.rlbs@gmail.com
              </a>
              <div className="flex items-start gap-3 text-[#666] text-sm">
                <MapPin size={14} className="text-[#E10600] shrink-0 mt-0.5" />
                <span>India</span>
              </div>
            </div>

            <div className="flex gap-3 mt-8">
              {[
                { icon: Linkedin, href: "#" },
                { icon: Twitter, href: "#" },
                { icon: Instagram, href: "#" },
                { icon: Youtube, href: "#" },
              ].map(({ icon: Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  className="w-9 h-9 border border-white/10 flex items-center justify-center text-[#666] hover:border-[#E10600] hover:text-[#E10600] transition-all"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="section-label mb-5">Services</h4>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s}>
                  <a href="#services"
                    className="text-[#555] hover:text-white text-sm transition-colors flex items-center gap-2 group">
                    <span className="w-1 h-1 rounded-full bg-[#E10600] opacity-0 group-hover:opacity-100 transition-opacity" />
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h4 className="section-label mb-5">Industries</h4>
            <ul className="space-y-2.5">
              {industries.map((ind) => (
                <li key={ind}>
                  <a href="#industries"
                    className="text-[#555] hover:text-white text-sm transition-colors flex items-center gap-2 group">
                    <span className="w-1 h-1 rounded-full bg-[#E10600] opacity-0 group-hover:opacity-100 transition-opacity" />
                    {ind}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="section-label mb-5">Quick Links</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href}
                    className="text-[#555] hover:text-white text-sm transition-colors flex items-center gap-2 group">
                    <span className="w-1 h-1 rounded-full bg-[#E10600] opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-8 p-4 glass border border-white/05 rounded">
              <div className="section-label mb-2">Certifications</div>
              <div className="flex flex-wrap gap-2 mt-3">
                {["ISO 9001", "MSME", "Make in India"].map((cert) => (
                  <span key={cert} className="text-[10px] text-[#666] border border-white/10 px-2 py-1 font-mono">
                    {cert}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/05 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#444]">
          <p>© {year} Rudra Innovations. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Sitemap</a>
          </div>
          <p className="font-mono text-[10px] text-[#333]">
            BUILT FOR ENGINEERING EXCELLENCE
          </p>
        </div>
      </div>
    </footer>
  );
}
