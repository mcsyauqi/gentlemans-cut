"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Scissors } from "lucide-react";

const navLinks = [
  { href: "/", label: "Beranda" },
  { href: "/layanan", label: "Layanan" },
  { href: "/barber", label: "Barber" },
  { href: "/galeri", label: "Galeri" },
  { href: "/harga", label: "Harga" },
  { href: "/booking", label: "Booking" },
  { href: "/kontak", label: "Kontak" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#1A1A2E]/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <Scissors className="w-8 h-8 text-[#C9A962] group-hover:rotate-45 transition-transform duration-300" />
            <div className="flex flex-col">
              <span className="text-xl font-bold text-white tracking-wider" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                GENTLEMAN&apos;S CUT
              </span>
              <span className="text-xs text-[#C9A962] tracking-widest">Gaya Pria Sejati</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white hover:text-[#C9A962] transition-colors duration-300 text-sm font-medium tracking-wide"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/booking"
              className="bg-[#C9A962] text-[#1A1A2E] px-6 py-2 rounded font-bold text-sm hover:bg-[#b8983e] transition-colors duration-300"
            >
              BOOKING
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#1A1A2E] border-t border-[#C9A962]/20"
          >
            <div className="px-4 py-4 space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-white hover:text-[#C9A962] transition-colors duration-300 py-2 text-lg"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/booking"
                className="block bg-[#C9A962] text-[#1A1A2E] px-6 py-3 rounded font-bold text-center mt-4 hover:bg-[#b8983e] transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                BOOKING SEKARANG
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
