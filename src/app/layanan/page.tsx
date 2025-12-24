"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Clock, Check, ChevronRight, Scissors } from "lucide-react";

const services = [
  { name: "Haircut Classic", desc: "Potong rambut klasik dengan sentuhan profesional dan finishing wax premium.", price: "Rp 75.000", time: "30 menit", icon: "✂️", features: ["Konsultasi gaya", "Potong rapi", "Finishing wax", "Styling tips"] },
  { name: "Haircut Premium", desc: "Pengalaman grooming lengkap dengan hair wash, massage kepala, dan styling.", price: "Rp 120.000", time: "45 menit", icon: "💈", features: ["Hair wash", "Scalp massage", "Potong premium", "Styling profesional"] },
  { name: "Shaving Classic", desc: "Cukur kumis dan jenggot dengan teknik tradisional pisau cukur.", price: "Rp 50.000", time: "20 menit", icon: "🪒", features: ["Konsultasi bentuk", "Trim & shape", "Finishing oil"] },
  { name: "Hot Towel Shave", desc: "Shaving mewah dengan handuk panas dan aftershave premium.", price: "Rp 100.000", time: "40 menit", icon: "🧖‍♂️", features: ["Hot towel", "Pre-shave oil", "Premium cream", "Face massage"] },
  { name: "Hair Coloring", desc: "Pewarnaan rambut profesional dengan produk berkualitas tinggi.", price: "Rp 150.000", time: "60 menit", icon: "🎨", features: ["Konsultasi warna", "Color protection", "Deep conditioning"] },
  { name: "Kids Haircut", desc: "Potong rambut khusus anak di bawah 12 tahun dengan suasana menyenangkan.", price: "Rp 50.000", time: "25 menit", icon: "👦", features: ["Suasana ramah anak", "Potong rapi", "Reward sticker"] },
  { name: "Beard Grooming", desc: "Perawatan lengkap jenggot dari trimming hingga conditioning.", price: "Rp 80.000", time: "30 menit", icon: "🧔", features: ["Trim & shape", "Beard wash", "Beard oil"] },
  { name: "Hair Treatment", desc: "Perawatan intensif untuk mengatasi masalah rambut.", price: "Rp 200.000", time: "60 menit", icon: "💆‍♂️", features: ["Hair analysis", "Deep cleansing", "Treatment mask", "Scalp massage"] },
];

export default function LayananPage() {
  return (
    <>
      <section className="bg-[#1A1A2E] pt-24 pb-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-4xl md:text-5xl font-bold text-white font-heading">LAYANAN KAMI</h1>
            <div className="w-16 h-1 bg-[#C9A962] mx-auto mt-3 mb-4"></div>
            <p className="text-gray-300">Berbagai layanan grooming premium dengan standar internasional</p>
          </motion.div>
        </div>
      </section>

      <section className="py-12 bg-[#F5F5F5]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {services.map((s) => (
              <div key={s.name} className="bg-white rounded-lg p-5 shadow-sm">
                <div className="flex gap-4">
                  <div className="text-4xl shrink-0">{s.icon}</div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                      <div>
                        <h3 className="text-lg font-bold text-[#1A1A2E] font-heading">{s.name}</h3>
                        <div className="flex items-center gap-1 text-gray-500 text-xs mt-0.5">
                          <Clock className="w-3 h-3" /> {s.time}
                        </div>
                      </div>
                      <span className="text-xl font-bold text-[#C9A962]">{s.price}</span>
                    </div>
                    <p className="text-gray-600 text-sm mb-3">{s.desc}</p>
                    <div className="grid grid-cols-2 gap-1 mb-4">
                      {s.features.map((f) => (
                        <div key={f} className="flex items-center gap-1 text-xs text-gray-600">
                          <Check className="w-3 h-3 text-[#C9A962]" /> {f}
                        </div>
                      ))}
                    </div>
                    <Link href="/booking" className="inline-flex items-center gap-1 bg-[#1A1A2E] text-white px-4 py-2 rounded text-sm font-bold hover:bg-[#2a2a4e] transition-colors">
                      Booking <ChevronRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-[#1A1A2E]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <Scissors className="w-10 h-10 text-[#C9A962] mx-auto mb-4" />
          <h2 className="text-2xl md:text-3xl font-bold text-white font-heading mb-3">BUTUH LAYANAN KHUSUS?</h2>
          <p className="text-gray-300 mb-6">Kami juga menyediakan layanan grooming untuk acara khusus seperti pernikahan atau pemotretan.</p>
          <Link href="/kontak" className="inline-flex items-center gap-2 bg-[#C9A962] text-[#1A1A2E] px-6 py-3 rounded font-bold hover:bg-[#b8983e] transition-colors">
            Hubungi Kami <ChevronRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  );
}
