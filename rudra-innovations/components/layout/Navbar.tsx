"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";

const services = [
  { name: "Product Design & Dev", href: "#services" },
  { name: "CAD / CAM / CAE", href: "#services" },
  { name: "Additive Manufacturing", href: "#services" },
  { name: "CNC Manufacturing", href: "#services" },
  { name: "Industry 4.0", href: "#industry40" },
  { name: "AI Vision Systems", href: "#ai-vision" },
  { name: "Automation Systems", href: "#services" },
  { name: "HydraSense", href: "#hydrasense" },
];

const navLinks = [
  { name: "Services", href: "#services", hasDropdown: true },
  { name: "Industries", href: "#industries" },
  { name: "HydraSense", href: "#hydrasense" },
  { name: "Industry 4.0", href: "#industry40" },
  { name: "Projects", href: "#projects" },
  { name: "About", href: "#why-rudra" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "navbar-glass py-3" : "py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="w-9 h-9 bg-[#E10600] flex items-center justify-center clip-hex">
                <span
                  className="text-white font-bold text-sm"
                  style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.05em" }}
                >
                  RI
                </span>
              </div>
              <div className="absolute inset-0 bg-[#E10600] opacity-0 group-hover:opacity-30 blur-md transition-all duration-300" />
            </div>
            <div>
              <div
                className="text-white font-bold text-lg leading-none tracking-wide"
                style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.08em" }}
              >
                RUDRA INNOVATIONS
              </div>
              <div
                className="text-[#E10600] text-[0.6rem] tracking-[0.25em] uppercase"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                From Concept to Creation
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) =>
              link.hasDropdown ? (
                <div
                  key={link.name}
                  className="relative"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <button className="flex items-center gap-1 px-4 py-2 text-[#aaa] hover:text-white text-sm font-medium transition-colors hover-underline">
                    {link.name}
                    <ChevronDown
                      size={14}
                      className={`transition-transform ${servicesOpen ? "rotate-180" : ""}`}
                    />
                  </button>

                  <AnimatePresence>
                    {servicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 w-64 glass border border-white/10 rounded-lg py-2 mt-1"
                      >
                        {services.map((s) => (
                          <Link
                            key={s.name}
                            href={s.href}
                            className="block px-4 py-2.5 text-sm text-[#aaa] hover:text-white hover:bg-white/05 transition-all hover:pl-6"
                            onClick={() => setServicesOpen(false)}
                          >
                            <span className="text-[#E10600] mr-2">›</span>
                            {s.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={link.name}
                  href={link.href}
                  className="px-4 py-2 text-[#aaa] hover:text-white text-sm font-medium transition-colors hover-underline"
                >
                  {link.name}
                </Link>
              )
            )}
          </div>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a href="#contact" className="btn-primary text-xs py-2.5 px-5">
              Start Your Project
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-white p-2"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 z-40 bg-[#0A0A0A] pt-24 px-6 overflow-y-auto lg:hidden"
          >
            <div className="red-divider mb-6" />
            {navLinks.map((link, i) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.07 }}
                className="mobile-menu-item py-4"
              >
                <Link
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-2xl font-light text-white hover:text-[#E10600] transition-colors"
                  style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.05em" }}
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
            <div className="mt-8">
              <a
                href="#contact"
                className="btn-primary w-full justify-center"
                onClick={() => setMobileOpen(false)}
              >
                Start Your Project
              </a>
            </div>

            <div className="mt-12 section-label">
              <p className="text-[#555] text-xs">rudrainnovation.rlbs@gmail.com</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
