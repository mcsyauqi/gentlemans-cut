"use client";

import Link from "next/link";
import { useState } from "react";

export default function KontakPage() {
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
            <Link href="/galeri" className="text-[14px] text-neutral-400 hover:text-white">Galeri</Link>
            <Link href="/harga" className="text-[14px] text-neutral-400 hover:text-white">Harga</Link>
            <Link href="/kontak" className="text-[14px] text-white">Kontak</Link>
          </div>
          <Link href="/booking" className="hidden md:block bg-[#b8960c] text-black text-[13px] font-semibold px-[20px] py-[10px]">BOOKING</Link>
          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-[24px]">{menuOpen ? "✕" : "☰"}</button>
        </div>
        {menuOpen && (
          <div className="md:hidden bg-black border-t border-neutral-800 px-[20px] py-[20px] flex flex-col gap-[16px]">
            <Link href="/" className="text-neutral-400">Home</Link>
            <Link href="/layanan" className="text-neutral-400">Layanan</Link>
            <Link href="/barber" className="text-neutral-400">Barber</Link>
            <Link href="/galeri" className="text-neutral-400">Galeri</Link>
            <Link href="/harga" className="text-neutral-400">Harga</Link>
            <Link href="/kontak" className="text-white">Kontak</Link>
            <Link href="/booking" className="bg-[#b8960c] text-black text-center font-semibold py-[12px]">BOOKING</Link>
          </div>
        )}
      </nav>

      {/* Content */}
      <section className="pt-[60px]">
        <div className="max-w-[1200px] mx-auto px-[20px] py-[80px]">
          <div className="mb-[48px]">
            <p className="text-[#b8960c] text-[12px] tracking-[4px] mb-[12px]">KONTAK</p>
            <h1 className="text-[48px] font-bold mb-[16px]">Get in Touch</h1>
            <p className="text-neutral-400 text-[18px]">Ada pertanyaan? Hubungi kami.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[48px]">
            {/* Form */}
            <div className="bg-neutral-900 border border-neutral-800 p-[32px]">
              <h2 className="text-[20px] font-bold mb-[24px]">Kirim Pesan</h2>
              <form className="space-y-[16px]">
                <div className="grid grid-cols-2 gap-[16px]">
                  <input type="text" placeholder="Nama" className="w-full bg-neutral-800 border border-neutral-700 p-[16px] text-white" />
                  <input type="tel" placeholder="No. HP" className="w-full bg-neutral-800 border border-neutral-700 p-[16px] text-white" />
                </div>
                <input type="email" placeholder="Email" className="w-full bg-neutral-800 border border-neutral-700 p-[16px] text-white" />
                <select className="w-full bg-neutral-800 border border-neutral-700 p-[16px] text-white">
                  <option value="">Pilih Subject</option>
                  <option value="booking">Booking</option>
                  <option value="membership">Membership</option>
                  <option value="career">Career</option>
                  <option value="other">Lainnya</option>
                </select>
                <textarea placeholder="Pesan" rows={4} className="w-full bg-neutral-800 border border-neutral-700 p-[16px] text-white resize-none" />
                <button type="submit" className="w-full bg-[#b8960c] text-black font-semibold py-[16px]">KIRIM</button>
              </form>
            </div>

            {/* Info */}
            <div className="space-y-[24px]">
              <div className="bg-neutral-900 border border-neutral-800 p-[32px]">
                <h3 className="font-bold mb-[12px]">Alamat</h3>
                <p className="text-neutral-400">Jl. Sudirman No. 123<br />Jakarta Pusat 10220</p>
              </div>
              <div className="bg-neutral-900 border border-neutral-800 p-[32px]">
                <h3 className="font-bold mb-[12px]">Jam Buka</h3>
                <p className="text-neutral-400">Senin - Minggu<br />10:00 - 21:00</p>
              </div>
              <div className="bg-neutral-900 border border-neutral-800 p-[32px]">
                <h3 className="font-bold mb-[12px]">Kontak</h3>
                <p className="text-neutral-400">+62 21 1234 5678<br />info@gentlemanscut.id</p>
              </div>
              <div className="aspect-video bg-neutral-900 border border-neutral-800 flex items-center justify-center">
                <span className="text-neutral-700">MAP</span>
              </div>
            </div>
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
