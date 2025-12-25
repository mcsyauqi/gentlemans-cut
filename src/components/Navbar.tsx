"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed w-full top-0 z-50 bg-black/90 backdrop-blur">
      <div className="max-w-5xl mx-auto px-4 h-14 flex items-center justify-between">
        <Link href="/" className="text-[#C9A962] font-bold text-lg">
          GENTLEMAN'S CUT
        </Link>

        <div className="hidden md:flex items-center gap-6 text-sm text-white/70">
          <Link href="/" className="hover:text-[#C9A962]">Home</Link>
          <Link href="/layanan" className="hover:text-[#C9A962]">Layanan</Link>
          <Link href="/barber" className="hover:text-[#C9A962]">Barber</Link>
          <Link href="/galeri" className="hover:text-[#C9A962]">Galeri</Link>
          <Link href="/harga" className="hover:text-[#C9A962]">Harga</Link>
          <Link href="/kontak" className="hover:text-[#C9A962]">Kontak</Link>
        </div>

        <Link
          href="/booking"
          className="hidden md:block bg-[#C9A962] text-black text-sm font-medium px-4 py-2"
        >
          Book Now
        </Link>

        <button onClick={() => setOpen(!open)} className="md:hidden text-white text-2xl">
          {open ? "✕" : "☰"}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-black border-t border-white/10 px-4 py-4 space-y-3">
          <Link href="/" onClick={() => setOpen(false)} className="block text-white/70">Home</Link>
          <Link href="/layanan" onClick={() => setOpen(false)} className="block text-white/70">Layanan</Link>
          <Link href="/barber" onClick={() => setOpen(false)} className="block text-white/70">Barber</Link>
          <Link href="/galeri" onClick={() => setOpen(false)} className="block text-white/70">Galeri</Link>
          <Link href="/harga" onClick={() => setOpen(false)} className="block text-white/70">Harga</Link>
          <Link href="/kontak" onClick={() => setOpen(false)} className="block text-white/70">Kontak</Link>
          <Link href="/booking" onClick={() => setOpen(false)} className="block bg-[#C9A962] text-black text-center py-2 font-medium">Book Now</Link>
        </div>
      )}
    </nav>
  );
}
