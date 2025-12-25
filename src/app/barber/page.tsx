"use client";

import Link from "next/link";
import { useState } from "react";

const barbers = [
  { name: "Master Aldo", role: "Founder & Head Barber", exp: "15+ tahun", bio: "Pendiri Gentleman's Cut dengan visi menghadirkan barbering premium di Jakarta." },
  { name: "Ricky", role: "Senior Barber", exp: "10+ tahun", bio: "Spesialis fade dengan transisi yang mulus dan gaya modern." },
  { name: "Dimas", role: "Style Expert", exp: "7+ tahun", bio: "Kreator gaya personal yang sesuai kepribadian setiap klien." },
  { name: "Farhan", role: "Junior Barber", exp: "3+ tahun", bio: "Talenta muda dengan energi segar dan skill yang terus berkembang." },
];

export default function BarberPage() {
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
            <Link href="/barber" className="text-[14px] text-white">Barber</Link>
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
            <Link href="/layanan" className="text-neutral-400">Layanan</Link>
            <Link href="/barber" className="text-white">Barber</Link>
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
            <p className="text-[#b8960c] text-[12px] tracking-[4px] mb-[12px]">TIM KAMI</p>
            <h1 className="text-[48px] font-bold mb-[16px]">Our Barbers</h1>
            <p className="text-neutral-400 text-[18px]">Para ahli yang berdedikasi untuk penampilan terbaik Anda.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-[32px]">
            {barbers.map((b) => (
              <div key={b.name} className="bg-neutral-900 border border-neutral-800 p-[32px] hover:border-[#b8960c] transition-colors">
                <div className="flex gap-[24px]">
                  <div className="w-[100px] h-[100px] bg-neutral-800 flex items-center justify-center flex-shrink-0">
                    <span className="text-[40px] font-bold text-neutral-700">{b.name[0]}</span>
                  </div>
                  <div>
                    <p className="text-[#b8960c] text-[12px] tracking-[2px] mb-[8px]">{b.exp}</p>
                    <h3 className="text-[24px] font-bold mb-[4px]">{b.name}</h3>
                    <p className="text-neutral-500 text-[14px] mb-[16px]">{b.role}</p>
                    <p className="text-neutral-400 text-[14px] leading-[1.7]">{b.bio}</p>
                  </div>
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
