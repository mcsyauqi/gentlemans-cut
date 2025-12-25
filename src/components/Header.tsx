"use client";

import Link from "next/link";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/layanan", label: "Layanan" },
  { href: "/barber", label: "Barber" },
  { href: "/galeri", label: "Galeri" },
  { href: "/harga", label: "Harga" },
  { href: "/kontak", label: "Kontak" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a] border-b border-[#222]">
      <div className="h-16 px-6 flex items-center justify-between max-w-7xl mx-auto">
        <Link href="/" className="text-[#d4af37] text-xl font-bold tracking-wide">
          GENTLEMAN'S CUT
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="text-[#999] text-sm hover:text-white">
              {l.label}
            </Link>
          ))}
        </nav>

        <Link href="/booking" className="hidden md:block bg-[#d4af37] text-black text-sm font-semibold px-5 py-2">
          BOOK NOW
        </Link>

        <button onClick={() => setOpen(!open)} className="md:hidden text-white text-xl">
          {open ? "✕" : "☰"}
        </button>
      </div>

      {open && (
        <nav className="md:hidden bg-[#0a0a0a] border-t border-[#222] px-6 py-6 space-y-4">
          {links.map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="block text-[#999] hover:text-white">
              {l.label}
            </Link>
          ))}
          <Link href="/booking" onClick={() => setOpen(false)} className="block bg-[#d4af37] text-black text-center font-semibold py-3 mt-4">
            BOOK NOW
          </Link>
        </nav>
      )}
    </header>
  );
}
