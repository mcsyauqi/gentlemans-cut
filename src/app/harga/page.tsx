"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Check, Star, Award, Crown, Scissors } from "lucide-react";

const services = [
  { name: "Haircut Classic", price: "Rp 75.000", desc: "Potong rambut klasik dengan finishing wax" },
  { name: "Haircut Premium", price: "Rp 120.000", desc: "Include hair wash, massage, styling" },
  { name: "Shaving Classic", price: "Rp 50.000", desc: "Cukur kumis/jenggot dengan pisau cukur" },
  { name: "Hot Towel Shave", price: "Rp 100.000", desc: "Shaving mewah dengan handuk panas" },
  { name: "Hair Coloring", price: "Rp 150.000", desc: "Pewarnaan rambut profesional" },
  { name: "Kids Haircut", price: "Rp 50.000", desc: "Potong rambut anak (di bawah 12 tahun)" },
  { name: "Beard Grooming", price: "Rp 80.000", desc: "Trim, shape, dan conditioning jenggot" },
  { name: "Hair Treatment", price: "Rp 200.000", desc: "Perawatan rambut intensif" },
];

const addons = [
  { name: "Hair Wash", price: "Rp 20.000" },
  { name: "Scalp Massage", price: "Rp 30.000" },
  { name: "Hair Tonic", price: "Rp 25.000" },
  { name: "Beard Oil", price: "Rp 20.000" },
  { name: "Hair Wax", price: "Rp 15.000" },
  { name: "Face Mask", price: "Rp 35.000" },
];

const membership = [
  { name: "Silver", price: "Rp 200.000", icon: <Star className="w-6 h-6" />, features: ["2x Haircut Classic/bulan", "Diskon 10% semua layanan", "Booking priority", "Birthday discount"], popular: false },
  { name: "Gold", price: "Rp 350.000", icon: <Crown className="w-6 h-6" />, features: ["2x Haircut Premium/bulan", "1x Hot Towel Shave/bulan", "Diskon 15% semua layanan", "Priority booking", "Free product samples"], popular: true },
  { name: "Platinum", price: "Rp 500.000", icon: <Award className="w-6 h-6" />, features: ["Unlimited Haircut/bulan", "2x Hot Towel Shave/bulan", "Diskon 20% semua layanan", "VIP room access", "Personal barber"], popular: false },
];

export default function HargaPage() {
  return (
    <>
      <section className="bg-[#1A1A2E] pt-24 pb-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-4xl md:text-5xl font-bold text-white font-heading">DAFTAR HARGA</h1>
            <div className="w-16 h-1 bg-[#C9A962] mx-auto mt-3 mb-4"></div>
            <p className="text-gray-300">Harga transparan untuk semua layanan grooming premium</p>
          </motion.div>
        </div>
      </section>

      <section className="py-12 bg-[#F5F5F5]">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1A1A2E] font-heading text-center mb-2">LAYANAN</h2>
          <div className="w-16 h-1 bg-[#C9A962] mx-auto mb-6"></div>
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            {services.map((s, i) => (
              <div key={s.name} className={`flex items-center justify-between p-4 ${i < services.length - 1 ? "border-b border-gray-100" : ""}`}>
                <div className="flex items-center gap-3">
                  <Scissors className="w-4 h-4 text-[#C9A962]" />
                  <div>
                    <div className="font-bold text-[#1A1A2E] text-sm">{s.name}</div>
                    <div className="text-gray-500 text-xs">{s.desc}</div>
                  </div>
                </div>
                <span className="text-lg font-bold text-[#C9A962]">{s.price}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1A1A2E] font-heading text-center mb-2">ADD-ONS</h2>
          <div className="w-16 h-1 bg-[#C9A962] mx-auto mb-4"></div>
          <p className="text-gray-600 text-center text-sm mb-6">Tambahan layanan untuk pengalaman lebih lengkap</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {addons.map((a) => (
              <div key={a.name} className="bg-[#F5F5F5] rounded-lg p-3 text-center hover:bg-[#1A1A2E] hover:text-white group transition-colors">
                <div className="text-sm font-medium">{a.name}</div>
                <div className="text-[#C9A962] font-bold text-sm">{a.price}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-[#1A1A2E]">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-white font-heading text-center mb-2">PAKET MEMBERSHIP</h2>
          <div className="w-16 h-1 bg-[#C9A962] mx-auto mb-4"></div>
          <p className="text-gray-400 text-center text-sm mb-8">Hemat lebih banyak dengan menjadi member</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {membership.map((m) => (
              <div key={m.name} className={`rounded-lg overflow-hidden ${m.popular ? "ring-2 ring-[#C9A962]" : ""}`}>
                {m.popular && <div className="bg-[#8B0000] text-white text-xs font-bold text-center py-1">PALING POPULER</div>}
                <div className={`p-5 h-full flex flex-col ${m.popular ? "bg-gradient-to-b from-[#C9A962] to-[#8B6914]" : "bg-white/5"}`}>
                  <div className="text-center mb-4">
                    <div className={`inline-flex p-2 rounded-full mb-2 ${m.popular ? "bg-[#1A1A2E]/20 text-[#1A1A2E]" : "bg-[#C9A962]/20 text-[#C9A962]"}`}>{m.icon}</div>
                    <h3 className={`text-xl font-bold font-heading ${m.popular ? "text-[#1A1A2E]" : "text-white"}`}>{m.name} Member</h3>
                    <div className="mt-1">
                      <span className={`text-2xl font-bold ${m.popular ? "text-[#1A1A2E]" : "text-[#C9A962]"}`}>{m.price}</span>
                      <span className={m.popular ? "text-[#1A1A2E]/70" : "text-gray-400"}>/bulan</span>
                    </div>
                  </div>
                  <ul className="space-y-2 flex-1 mb-4">
                    {m.features.map((f) => (
                      <li key={f} className={`flex items-start gap-2 text-sm ${m.popular ? "text-[#1A1A2E]" : "text-gray-300"}`}>
                        <Check className={`w-4 h-4 mt-0.5 ${m.popular ? "text-[#1A1A2E]" : "text-[#C9A962]"}`} /> {f}
                      </li>
                    ))}
                  </ul>
                  <Link href="/booking" className={`block text-center py-2 rounded font-bold text-sm ${m.popular ? "bg-[#1A1A2E] text-white" : "border border-[#C9A962] text-[#C9A962] hover:bg-[#C9A962] hover:text-[#1A1A2E]"} transition-colors`}>
                    Daftar Sekarang
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-[#F5F5F5]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1A1A2E] font-heading mb-3">SIAP UNTUK TAMPIL MAKSIMAL?</h2>
          <p className="text-gray-600 mb-6">Booking sekarang dan nikmati layanan grooming premium</p>
          <Link href="/booking" className="inline-flex items-center gap-2 bg-[#C9A962] text-[#1A1A2E] px-6 py-3 rounded font-bold hover:bg-[#b8983e] transition-colors">
            <Scissors className="w-5 h-5" /> Booking Sekarang
          </Link>
        </div>
      </section>
    </>
  );
}
