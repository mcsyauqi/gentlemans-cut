"use client";

import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/95 border-b border-neutral-800">
        <div className="flex items-center justify-between h-[60px] px-[20px] max-w-[1200px] mx-auto">
          <Link href="/" className="text-[#b8960c] text-[18px] font-bold tracking-wider">
            GENTLEMAN'S CUT
          </Link>
          <div className="hidden md:flex items-center gap-[32px]">
            <Link href="/" className="text-[14px] text-neutral-400 hover:text-white">Home</Link>
            <Link href="/layanan" className="text-[14px] text-neutral-400 hover:text-white">Layanan</Link>
            <Link href="/barber" className="text-[14px] text-neutral-400 hover:text-white">Barber</Link>
            <Link href="/galeri" className="text-[14px] text-neutral-400 hover:text-white">Galeri</Link>
            <Link href="/harga" className="text-[14px] text-neutral-400 hover:text-white">Harga</Link>
            <Link href="/kontak" className="text-[14px] text-neutral-400 hover:text-white">Kontak</Link>
          </div>
          <Link href="/booking" className="hidden md:block bg-[#b8960c] text-black text-[13px] font-semibold px-[20px] py-[10px]">
            BOOKING
          </Link>
          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-[24px]">
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden bg-black border-t border-neutral-800 px-[20px] py-[20px] flex flex-col gap-[16px]">
            <Link href="/" className="text-neutral-400">Home</Link>
            <Link href="/layanan" className="text-neutral-400">Layanan</Link>
            <Link href="/barber" className="text-neutral-400">Barber</Link>
            <Link href="/galeri" className="text-neutral-400">Galeri</Link>
            <Link href="/harga" className="text-neutral-400">Harga</Link>
            <Link href="/kontak" className="text-neutral-400">Kontak</Link>
            <Link href="/booking" className="bg-[#b8960c] text-black text-center font-semibold py-[12px]">BOOKING</Link>
          </div>
        )}
      </nav>

      {/* Hero */}
      <section className="pt-[60px] min-h-screen flex items-center">
        <div className="w-full max-w-[1200px] mx-auto px-[20px] py-[80px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[60px] items-center">
            <div>
              <p className="text-[#b8960c] text-[12px] tracking-[4px] mb-[20px]">PREMIUM BARBERSHOP</p>
              <h1 className="text-[48px] lg:text-[64px] font-bold leading-[1.1] mb-[24px]">
                Gaya Pria<br /><span className="text-[#b8960c]">Sejati</span>
              </h1>
              <p className="text-neutral-400 text-[18px] leading-[1.7] mb-[40px] max-w-[400px]">
                Pengalaman grooming premium dengan teknik klasik dan sentuhan modern di Jakarta.
              </p>
              <div className="flex flex-wrap gap-[16px]">
                <Link href="/booking" className="bg-[#b8960c] text-black font-semibold px-[32px] py-[16px] text-[14px]">
                  BOOK NOW
                </Link>
                <Link href="/layanan" className="border border-neutral-700 text-white font-semibold px-[32px] py-[16px] text-[14px] hover:border-[#b8960c]">
                  LAYANAN
                </Link>
              </div>
            </div>
            <div className="hidden lg:flex items-center justify-center">
              <div className="w-[400px] h-[500px] bg-neutral-900 border border-neutral-800 flex items-center justify-center">
                <span className="text-[80px] font-bold text-neutral-800">GC</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-neutral-900 border-y border-neutral-800">
        <div className="max-w-[1200px] mx-auto px-[20px] py-[60px]">
          <div className="grid grid-cols-3 gap-[40px] text-center">
            <div>
              <p className="text-[40px] font-bold text-[#b8960c] mb-[8px]">15+</p>
              <p className="text-neutral-500 text-[14px]">Tahun</p>
            </div>
            <div>
              <p className="text-[40px] font-bold text-[#b8960c] mb-[8px]">10K+</p>
              <p className="text-neutral-500 text-[14px]">Pelanggan</p>
            </div>
            <div>
              <p className="text-[40px] font-bold text-[#b8960c] mb-[8px]">4.9</p>
              <p className="text-neutral-500 text-[14px]">Rating</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-black">
        <div className="max-w-[1200px] mx-auto px-[20px] py-[80px]">
          <div className="flex justify-between items-end mb-[48px]">
            <div>
              <p className="text-[#b8960c] text-[12px] tracking-[4px] mb-[12px]">LAYANAN</p>
              <h2 className="text-[36px] font-bold">Services</h2>
            </div>
            <Link href="/layanan" className="text-[#b8960c] text-[14px]">Lihat Semua →</Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px]">
            {[
              { name: "Classic Haircut", price: "75K" },
              { name: "Premium Haircut", price: "120K" },
              { name: "Hot Towel Shave", price: "100K" },
              { name: "Beard Grooming", price: "80K" },
              { name: "Hair Coloring", price: "150K" },
              { name: "Hair Treatment", price: "200K" },
            ].map((s) => (
              <div key={s.name} className="bg-neutral-900 border border-neutral-800 p-[32px] hover:border-[#b8960c] transition-colors">
                <div className="flex justify-between items-start mb-[12px]">
                  <h3 className="text-[18px] font-semibold">{s.name}</h3>
                  <span className="text-[#b8960c] font-bold">Rp {s.price}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-neutral-900">
        <div className="max-w-[1200px] mx-auto px-[20px] py-[80px]">
          <div className="text-center mb-[48px]">
            <p className="text-[#b8960c] text-[12px] tracking-[4px] mb-[12px]">TIM</p>
            <h2 className="text-[36px] font-bold">Our Barbers</h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-[24px]">
            {[
              { name: "Aldo", role: "Master Barber" },
              { name: "Ricky", role: "Senior Barber" },
              { name: "Dimas", role: "Style Expert" },
              { name: "Farhan", role: "Junior Barber" },
            ].map((b) => (
              <div key={b.name} className="text-center">
                <div className="aspect-[3/4] bg-neutral-800 border border-neutral-700 mb-[16px] flex items-center justify-center">
                  <span className="text-[48px] font-bold text-neutral-700">{b.name[0]}</span>
                </div>
                <p className="font-semibold mb-[4px]">{b.name}</p>
                <p className="text-neutral-500 text-[14px]">{b.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#b8960c]">
        <div className="max-w-[1200px] mx-auto px-[20px] py-[80px] text-center">
          <h2 className="text-[36px] font-bold text-black mb-[16px]">Ready for a Fresh Look?</h2>
          <p className="text-black/70 mb-[32px]">Book sekarang dan rasakan pengalaman grooming premium.</p>
          <Link href="/booking" className="inline-block bg-black text-white font-semibold px-[40px] py-[16px] text-[14px]">
            BOOK NOW
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-neutral-800">
        <div className="max-w-[1200px] mx-auto px-[20px] py-[60px]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[40px]">
            <div>
              <p className="text-[#b8960c] font-bold text-[18px] mb-[16px]">GENTLEMAN'S CUT</p>
              <p className="text-neutral-500 text-[14px] leading-[1.7]">Premium barbershop untuk pria modern.</p>
            </div>
            <div>
              <p className="font-semibold mb-[16px]">Links</p>
              <div className="flex flex-col gap-[12px] text-[14px] text-neutral-500">
                <Link href="/layanan" className="hover:text-[#b8960c]">Layanan</Link>
                <Link href="/barber" className="hover:text-[#b8960c]">Barber</Link>
                <Link href="/harga" className="hover:text-[#b8960c]">Harga</Link>
              </div>
            </div>
            <div>
              <p className="font-semibold mb-[16px]">Kontak</p>
              <div className="flex flex-col gap-[12px] text-[14px] text-neutral-500">
                <p>Jl. Sudirman No. 123, Jakarta</p>
                <p>+62 21 1234 5678</p>
                <p className="text-[#b8960c]">Buka 10:00 - 21:00</p>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-neutral-800">
          <div className="max-w-[1200px] mx-auto px-[20px] py-[20px] flex flex-col md:flex-row justify-between items-center gap-[12px] text-[12px] text-neutral-600">
            <p>© 2025 Gentleman's Cut</p>
            <p>Made with ❤️ by <a href="https://creativism.id" target="_blank" className="text-[#b8960c]">Creativism Digital Marketing Agency</a></p>
          </div>
        </div>
      </footer>
    </div>
  );
}
