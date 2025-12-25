"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/", label: "Home" },
  { href: "/layanan", label: "Services" },
  { href: "/barber", label: "Our Team" },
  { href: "/galeri", label: "Gallery" },
  { href: "/harga", label: "Pricing" },
  { href: "/kontak", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="bg-black/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="flex flex-col">
            <span className="text-2xl font-display font-bold text-gold tracking-wide">GENTLEMAN'S</span>
            <span className="text-xs tracking-[0.3em] text-white/60 -mt-1">CUT BARBERSHOP</span>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {links.map((link) => (
              <Link key={link.href} href={link.href} className="text-sm text-white/70 hover:text-gold transition-colors uppercase tracking-wider">
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Link href="/booking" className="bg-gold text-black px-6 py-3 text-sm font-semibold uppercase tracking-wider hover:bg-white transition-colors">
              Book Now
            </Link>
          </div>

          <button className="lg:hidden text-white" onClick={() => setOpen(!open)}>
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden bg-black/95 backdrop-blur-md border-b border-white/10">
          <nav className="px-6 py-6 flex flex-col gap-4">
            {links.map((link) => (
              <Link key={link.href} href={link.href} onClick={() => setOpen(false)} className="text-white/70 hover:text-gold py-2 uppercase tracking-wider text-sm">
                {link.label}
              </Link>
            ))}
            <Link href="/booking" onClick={() => setOpen(false)} className="bg-gold text-black px-6 py-3 text-sm font-semibold uppercase tracking-wider text-center mt-4">
              Book Now
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
