"use client";

import Link from "next/link";
import { useState } from "react";

const services = [
  { name: "Classic Haircut", price: "75.000", time: "30 min" },
  { name: "Premium Haircut", price: "120.000", time: "45 min" },
  { name: "Classic Shave", price: "50.000", time: "20 min" },
  { name: "Hot Towel Shave", price: "100.000", time: "40 min" },
  { name: "Beard Grooming", price: "80.000", time: "30 min" },
  { name: "Hair Coloring", price: "150.000", time: "60 min" },
  { name: "Kids Haircut", price: "50.000", time: "25 min" },
  { name: "Hair Treatment", price: "200.000", time: "60 min" },
];

export default function LayananPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/95 border-b border-neutral-800">
        <div className="flex items-center justify-between h-[60px] px-[20px] max-w-[1200px] mx-auto">
          <Link href="/" className="text-[#b8960c] text-[18px] font-bold tracking-wider">GENTLEMAN'S CUT</Link>
          <div className="hidden md:flex items-center gap-[32px]">
            <Link href="/" className="text-[14px] text-neutral-400 hover:text-white">Home</Link>
            <Link href="/layanan" className="text-[14px] text-white">Layanan</Link>
            <Link href="/barber" className="text-[14px] text-neutral-400 hover:text-white">Barber</Link>
            <Link href="/galeri" className="text-[14px] text-neutral-400 hover:text-white">Galeri</Link>
            <Link href="/harga" className="text-[14px] text-neutral-400 hover:text-white">Harga</Link>
            <Link href="/kontak" className="text-[14px] text-neutral-400 hover:text-white">Kontak</Link>
          </div>
          <Link href="/booking" className="hidden md:block bg-[#b8960c] text-black text-[13px] font-semibold px-[20px] py-[10px]">BOOKING</Link>
          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-[24px]">{menuOpen ? "✕" : "☰"}</button>
        </div>
        {menuOpen && (
          <div className="md:hidden bg-black border-t border-neutral-800 px-[20px] py-[20px] flex flex-col gap-[16px]">
            <Link href="/" className="text-neutral-400">Home</Link>
            <Link href="/layanan" className="text-white">Layanan</Link>
            <Link href="/barber" className="text-neutral-400">Barber</Link>
            <Link href="/galeri" className="text-neutral-400">Galeri</Link>
            <Link href="/harga" className="text-neutral-400">Harga</Link>
            <Link href="/kontak" className="text-neutral-400">Kontak</Link>
            <Link href="/booking" className="bg-[#b8960c] text-black text-center font-semibold py-[12px]">BOOKING</Link>
          </div>
        )}
      </nav>

      {/* Content */}
      <section className="pt-[60px]">
        <div className="max-w-[1200px] mx-auto px-[20px] py-[80px]">
          <div className="mb-[48px]">
            <p className="text-[#b8960c] text-[12px] tracking-[4px] mb-[12px]">LAYANAN</p>
            <h1 className="text-[48px] font-bold mb-[16px]">Our Services</h1>
            <p className="text-neutral-400 text-[18px]">Layanan grooming premium dengan perhatian pada detail.</p>
          </div>

          <div className="flex flex-col gap-[16px]">
            {services.map((s) => (
              <div key={s.name} className="bg-neutral-900 border border-neutral-800 p-[32px] flex flex-col md:flex-row md:items-center justify-between gap-[20px] hover:border-[#b8960c] transition-colors">
                <div>
                  <h3 className="text-[20px] font-semibold mb-[8px]">{s.name}</h3>
                  <p className="text-neutral-500 text-[14px]">{s.time}</p>
                </div>
                <div className="flex items-center gap-[24px]">
                  <span className="text-[#b8960c] text-[24px] font-bold">Rp {s.price}</span>
                  <Link href="/booking" className="bg-[#b8960c] text-black font-semibold px-[24px] py-[12px] text-[14px]">BOOK</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-neutral-800">
        <div className="max-w-[1200px] mx-auto px-[20px] py-[40px]">
          <div className="flex flex-col md:flex-row justify-between items-center gap-[16px] text-[12px] text-neutral-600">
            <p>© 2025 Gentleman's Cut</p>
            <p>Made with ❤️ by <a href="https://creativism.id" target="_blank" className="text-[#b8960c]">Creativism Digital Marketing Agency</a></p>
          </div>
        </div>
      </footer>
    </div>
  );
}
