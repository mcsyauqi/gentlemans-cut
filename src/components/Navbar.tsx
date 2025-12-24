"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Scissors } from "lucide-react";

const links = [
  { href: "/", label: "Beranda" },
  { href: "/layanan", label: "Layanan" },
  { href: "/barber", label: "Barber" },
  { href: "/galeri", label: "Galeri" },
  { href: "/harga", label: "Harga" },
  { href: "/booking", label: "Booking" },
  { href: "/kontak", label: "Kontak" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#1A1A2E]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <Scissors className="w-6 h-6 text-[#C9A962]" />
            <div>
              <div className="text-white font-bold text-lg font-heading tracking-wide">GENTLEMAN'S CUT</div>
              <div className="text-[#C9A962] text-[10px] tracking-widest -mt-1">Gaya Pria Sejati</div>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-6">
            {links.map((link) => (
              <Link key={link.href} href={link.href} className="text-white text-sm hover:text-[#C9A962] transition-colors">
                {link.label}
              </Link>
            ))}
            <Link href="/booking" className="bg-[#C9A962] text-[#1A1A2E] px-4 py-2 text-sm font-bold rounded hover:bg-[#b8983e] transition-colors">
              BOOKING
            </Link>
          </div>

          <button className="lg:hidden text-white" onClick={() => setOpen(!open)}>
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden bg-[#1A1A2E] border-t border-white/10 px-4 py-4">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="block text-white py-2 hover:text-[#C9A962]" onClick={() => setOpen(false)}>
              {link.label}
            </Link>
          ))}
          <Link href="/booking" className="block bg-[#C9A962] text-[#1A1A2E] px-4 py-2 text-center font-bold rounded mt-4" onClick={() => setOpen(false)}>
            BOOKING SEKARANG
          </Link>
        </div>
      )}
    </nav>
  );
}
