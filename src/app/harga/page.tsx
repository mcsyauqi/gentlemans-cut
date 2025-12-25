"use client";

import Link from "next/link";
import { useState } from "react";

const plans = [
  { name: "Silver", price: "200K", features: ["2 Haircuts/bulan", "10% off", "Priority booking"] },
  { name: "Gold", price: "350K", popular: true, features: ["4 Haircuts/bulan", "1 Free shave", "15% off", "Free products"] },
  { name: "Platinum", price: "500K", features: ["Unlimited cuts", "2 Free shaves", "20% off", "VIP access"] },
];

const prices = [
  { name: "Classic Haircut", price: "75.000" },
  { name: "Premium Haircut", price: "120.000" },
  { name: "Classic Shave", price: "50.000" },
  { name: "Hot Towel Shave", price: "100.000" },
  { name: "Beard Grooming", price: "80.000" },
  { name: "Hair Coloring", price: "150.000" },
  { name: "Kids Haircut", price: "50.000" },
  { name: "Hair Treatment", price: "200.000" },
];

export default function HargaPage() {
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
            <Link href="/harga" className="text-[14px] text-white">Harga</Link>
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
            <Link href="/galeri" className="text-neutral-400">Galeri</Link>
            <Link href="/harga" className="text-white">Harga</Link>
            <Link href="/kontak" className="text-neutral-400">Kontak</Link>
            <Link href="/booking" className="bg-[#b8960c] text-black text-center font-semibold py-[12px]">BOOKING</Link>
          </div>
        )}
      </nav>

      {/* Content */}
      <section className="pt-[60px]">
        <div className="max-w-[1200px] mx-auto px-[20px] py-[80px]">
          <div className="mb-[48px]">
            <p className="text-[#b8960c] text-[12px] tracking-[4px] mb-[12px]">HARGA</p>
            <h1 className="text-[48px] font-bold mb-[16px]">Pricing</h1>
            <p className="text-neutral-400 text-[18px]">Harga transparan tanpa biaya tersembunyi.</p>
          </div>

          {/* Plans */}
          <div className="mb-[64px]">
            <h2 className="text-[24px] font-bold mb-[32px]">Membership</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-[24px]">
              {plans.map((p) => (
                <div key={p.name} className={`p-[32px] ${p.popular ? "bg-[#b8960c] text-black" : "bg-neutral-900 border border-neutral-800"}`}>
                  {p.popular && <p className="text-[11px] font-bold tracking-[2px] mb-[16px]">POPULAR</p>}
                  <h3 className="text-[24px] font-bold mb-[8px]">{p.name}</h3>
                  <p className="text-[36px] font-bold mb-[24px]">Rp {p.price}<span className="text-[14px] font-normal opacity-70">/bln</span></p>
                  <ul className="space-y-[12px] mb-[32px]">
                    {p.features.map((f) => (
                      <li key={f} className={`text-[14px] ${p.popular ? "text-black/80" : "text-neutral-400"}`}>✓ {f}</li>
                    ))}
                  </ul>
                  <Link href="/booking" className={`block text-center font-semibold py-[14px] text-[14px] ${p.popular ? "bg-black text-white" : "bg-[#b8960c] text-black"}`}>
                    JOIN
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Price List */}
          <div>
            <h2 className="text-[24px] font-bold mb-[32px]">Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[16px]">
              {prices.map((p) => (
                <div key={p.name} className="bg-neutral-900 border border-neutral-800 p-[24px] flex justify-between items-center">
                  <span>{p.name}</span>
                  <span className="text-[#b8960c] font-bold">Rp {p.price}</span>
                </div>
              ))}
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
