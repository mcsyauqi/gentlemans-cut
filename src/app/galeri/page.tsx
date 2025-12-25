"use client";

import Link from "next/link";
import { useState } from "react";

const images = [
  { id: 1, title: "Classic Taper" },
  { id: 2, title: "Modern Fade" },
  { id: 3, title: "Textured Crop" },
  { id: 4, title: "Skin Fade" },
  { id: 5, title: "Hot Towel Shave" },
  { id: 6, title: "Beard Trim" },
  { id: 7, title: "Our Space" },
  { id: 8, title: "Barber Station" },
];

export default function GaleriPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/95 border-b border-neutral-800">
        <div className="flex items-center justify-between h-[60px] px-[20px] max-w-[1200px] mx-auto">
          <Link href="/" className="text-[#b8960c] text-[18px] font-bold tracking-wider">GENTLEMAN'S CUT</Link>
          <div className="hidden md:flex items-center gap-[32px]">
            <Link href="/" className="text-[14px] text-neutral-400 hover:text-white">Home</Link>
            <Link href="/layanan" className="text-[14px] text-neutral-400 hover:text-white">Layanan</Link>
            <Link href="/barber" className="text-[14px] text-neutral-400 hover:text-white">Barber</Link>
            <Link href="/galeri" className="text-[14px] text-white">Galeri</Link>
            <Link href="/harga" className="text-[14px] text-neutral-400 hover:text-white">Harga</Link>
            <Link href="/kontak" className="text-[14px] text-neutral-400 hover:text-white">Kontak</Link>
          </div>
          <Link href="/booking" className="hidden md:block bg-[#b8960c] text-black text-[13px] font-semibold px-[20px] py-[10px]">BOOKING</Link>
          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-[24px]">{menuOpen ? "✕" : "☰"}</button>
        </div>
        {menuOpen && (
          <div className="md:hidden bg-black border-t border-neutral-800 px-[20px] py-[20px] flex flex-col gap-[16px]">
            <Link href="/" className="text-neutral-400">Home</Link>
            <Link href="/layanan" className="text-neutral-400">Layanan</Link>
            <Link href="/barber" className="text-neutral-400">Barber</Link>
            <Link href="/galeri" className="text-white">Galeri</Link>
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
            <p className="text-[#b8960c] text-[12px] tracking-[4px] mb-[12px]">PORTFOLIO</p>
            <h1 className="text-[48px] font-bold mb-[16px]">Gallery</h1>
            <p className="text-neutral-400 text-[18px]">Showcase karya terbaik kami.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-[16px]">
            {images.map((img) => (
              <div key={img.id} className="aspect-square bg-neutral-900 border border-neutral-800 flex flex-col items-center justify-center p-[24px] hover:border-[#b8960c] transition-colors cursor-pointer">
                <span className="text-[48px] font-bold text-neutral-800 mb-[16px]">{String(img.id).padStart(2, "0")}</span>
                <p className="text-[14px] font-semibold text-center">{img.title}</p>
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
