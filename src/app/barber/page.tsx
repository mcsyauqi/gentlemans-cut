"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Award, Calendar, Scissors } from "lucide-react";

const barbers = [
  { name: "Master Aldo", role: "Head Barber", exp: "15 tahun", spec: "Classic Cut, Executive Style", bio: "Founder sekaligus head barber dengan pengalaman lebih dari 15 tahun melayani ribuan pelanggan.", achievements: ["Certified Master Barber", "Best Barbershop Jakarta 2023"], init: "MA" },
  { name: "Bro Ricky", role: "Senior Barber", exp: "10 tahun", spec: "Fade, Undercut, Modern Style", bio: "Dikenal dengan kemampuan menciptakan fade sempurna dan undercut presisi. Selalu update tren terkini.", achievements: ["Fade Master Certificate", "Top Rated Barber 2022"], init: "BR" },
  { name: "Bro Dimas", role: "Barber", exp: "7 tahun", spec: "Modern Style, Creative Design", bio: "Barber kreatif dan inovatif yang senang menciptakan gaya unik sesuai kepribadian pelanggan.", achievements: ["Creative Design Specialist", "Youth Choice Award 2023"], init: "BD" },
  { name: "Bro Farhan", role: "Junior Barber", exp: "3 tahun", spec: "All-rounder, Quick Service", bio: "Talenta muda penuh semangat yang menguasai berbagai teknik potong dengan layanan cepat berkualitas.", achievements: ["Rising Star 2024", "Customer Favorite"], init: "BF" },
];

export default function BarberPage() {
  return (
    <>
      <section className="bg-[#1A1A2E] pt-24 pb-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-4xl md:text-5xl font-bold text-white font-heading">TIM BARBER KAMI</h1>
            <div className="w-16 h-1 bg-[#C9A962] mx-auto mt-3 mb-4"></div>
            <p className="text-gray-300">Kenali lebih dekat para barber profesional kami</p>
          </motion.div>
        </div>
      </section>

      <section className="py-12 bg-[#F5F5F5]">
        <div className="max-w-5xl mx-auto px-4 space-y-8">
          {barbers.map((b, i) => (
            <div key={b.name} className={`flex flex-col ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-6 items-center`}>
              <div className="shrink-0 text-center">
                <div className="w-36 h-36 md:w-44 md:h-44 rounded-full bg-gradient-to-br from-[#C9A962] to-[#8B6914] p-1 mx-auto">
                  <div className="w-full h-full rounded-full bg-[#1A1A2E] flex items-center justify-center text-4xl md:text-5xl font-bold text-[#C9A962] font-heading">{b.init}</div>
                </div>
                <div className="bg-[#C9A962] text-[#1A1A2E] text-xs font-bold px-3 py-1 rounded inline-block mt-3">{b.role}</div>
              </div>
              <div className="flex-1 bg-white rounded-lg p-5 shadow-sm">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <h2 className="text-2xl font-bold text-[#1A1A2E] font-heading">{b.name}</h2>
                  <span className="flex items-center gap-1 text-xs bg-[#C9A962]/10 text-[#C9A962] px-2 py-0.5 rounded-full">
                    <Calendar className="w-3 h-3" /> {b.exp}
                  </span>
                </div>
                <div className="flex items-center gap-1 text-sm text-[#1A1A2E] mb-2">
                  <Scissors className="w-4 h-4 text-[#C9A962]" /> {b.spec}
                </div>
                <p className="text-gray-600 text-sm mb-4">{b.bio}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {b.achievements.map((a) => (
                    <span key={a} className="flex items-center gap-1 bg-[#1A1A2E] text-white text-xs px-2 py-1 rounded">
                      <Award className="w-3 h-3 text-[#C9A962]" /> {a}
                    </span>
                  ))}
                </div>
                <Link href="/booking" className="inline-block bg-[#C9A962] text-[#1A1A2E] px-4 py-2 rounded text-sm font-bold hover:bg-[#b8983e] transition-colors">
                  Booking
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-12 bg-[#1A1A2E]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white font-heading mb-3">BERGABUNG DENGAN TIM KAMI</h2>
          <div className="w-16 h-1 bg-[#C9A962] mx-auto mb-4"></div>
          <p className="text-gray-300 mb-6">Apakah Anda seorang barber berbakat? Kami selalu mencari talenta baru!</p>
          <Link href="/kontak" className="inline-block border-2 border-[#C9A962] text-[#C9A962] px-6 py-3 rounded font-bold hover:bg-[#C9A962] hover:text-[#1A1A2E] transition-colors">
            Kirim Lamaran
          </Link>
        </div>
      </section>
    </>
  );
}
