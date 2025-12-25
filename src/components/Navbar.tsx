"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/layanan", label: "Layanan" },
  { href: "/barber", label: "Barber" },
  { href: "/galeri", label: "Galeri" },
  { href: "/harga", label: "Harga" },
  { href: "/kontak", label: "Kontak" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-dark/90 backdrop-blur-md border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="h-16 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex flex-col leading-none">
            <span className="text-xl font-display font-bold text-gold tracking-wide">
              GENTLEMAN'S
            </span>
            <span className="text-[10px] tracking-[0.2em] text-white/50">
              CUT BARBERSHOP
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-white/70 hover:text-gold transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <Link
            href="/booking"
            className="hidden lg:block bg-gold text-dark px-5 py-2 text-sm font-semibold hover:bg-gold-light transition-colors"
          >
            Book Now
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-dark border-t border-white/10">
          <nav className="max-w-6xl mx-auto px-4 py-4 flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-white/70 hover:text-gold py-2 transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/booking"
              onClick={() => setIsOpen(false)}
              className="bg-gold text-dark px-5 py-3 text-sm font-semibold text-center mt-2"
            >
              Book Now
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
