"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Star, Scissors, ChevronRight, Award, Quote, Clock } from "lucide-react";

const services = [
  { name: "Haircut Classic", desc: "Potong rambut klasik dengan finishing wax", price: "Rp 75.000", icon: "✂️" },
  { name: "Haircut Premium", desc: "Include hair wash, massage, styling", price: "Rp 120.000", icon: "💈" },
  { name: "Shaving Classic", desc: "Cukur kumis/jenggot dengan pisau cukur", price: "Rp 50.000", icon: "🪒" },
  { name: "Hot Towel Shave", desc: "Shaving mewah dengan handuk panas", price: "Rp 100.000", icon: "🧖‍♂️" },
  { name: "Hair Coloring", desc: "Pewarnaan rambut profesional", price: "Rp 150.000", icon: "🎨" },
  { name: "Kids Haircut", desc: "Potong rambut anak (di bawah 12 tahun)", price: "Rp 50.000", icon: "👦" },
];

const barbers = [
  { name: "Master Aldo", role: "Head Barber", exp: "15 tahun", spec: "Classic Cut", init: "MA" },
  { name: "Bro Ricky", role: "Senior Barber", exp: "10 tahun", spec: "Fade & Undercut", init: "BR" },
  { name: "Bro Dimas", role: "Barber", exp: "7 tahun", spec: "Modern Style", init: "BD" },
  { name: "Bro Farhan", role: "Junior Barber", exp: "3 tahun", spec: "All-rounder", init: "BF" },
];

const membership = [
  { name: "Silver", price: "Rp 200.000", features: ["2x Haircut Classic", "Diskon 10%"], popular: false },
  { name: "Gold", price: "Rp 350.000", features: ["2x Haircut Premium", "1x Hot Towel Shave", "Diskon 15%", "Priority booking"], popular: true },
  { name: "Platinum", price: "Rp 500.000", features: ["Unlimited Haircut", "2x Hot Towel Shave", "Diskon 20%", "VIP room"], popular: false },
];

const testimonials = [
  { text: "Barbershop terbaik di Jakarta! Tempatnya nyaman, barbernya ramah dan skillful.", name: "Andi", type: "Member Gold" },
  { text: "Sudah langganan 3 tahun. Konsisten hasilnya selalu memuaskan.", name: "Budi", type: "Member Platinum" },
  { text: "Potong rambut di sini bikin nagih. Suasananya asik banget!", name: "Reza", type: "Regular Customer" },
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="bg-[#1A1A2E] pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center">
            <div className="inline-flex items-center gap-2 bg-[#C9A962]/10 border border-[#C9A962]/30 rounded-full px-4 py-1.5 mb-6">
              <Star className="w-4 h-4 text-[#C9A962] fill-[#C9A962]" />
              <span className="text-[#C9A962] text-sm">4.9 Rating dari 2000+ Review</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 font-heading">
              Tampil Gagah,<br /><span className="gold-text">Rapi, Percaya Diri</span>
            </h1>

            <p className="text-gray-300 max-w-lg mx-auto mb-8">
              Barbershop premium dengan barber berpengalaman dan suasana nyaman. Nikmati pengalaman grooming terbaik untuk pria sejati.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link href="/booking" className="w-full sm:w-auto bg-[#C9A962] text-[#1A1A2E] px-6 py-3 rounded font-bold hover:bg-[#b8983e] transition-colors flex items-center justify-center gap-2">
                <Scissors className="w-5 h-5" /> Booking Sekarang
              </Link>
              <Link href="/harga" className="w-full sm:w-auto border-2 border-white text-white px-6 py-3 rounded font-bold hover:bg-white hover:text-[#1A1A2E] transition-colors text-center">
                Lihat Harga
              </Link>
            </div>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
            {[{ v: "15+", l: "Tahun Pengalaman" }, { v: "10K+", l: "Pelanggan Puas" }, { v: "4", l: "Barber Profesional" }, { v: "4.9", l: "Rating Google" }].map((s) => (
              <div key={s.l} className="text-center">
                <div className="text-3xl font-bold text-[#C9A962] font-heading">{s.v}</div>
                <div className="text-gray-400 text-sm">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LAYANAN */}
      <section className="py-16 bg-[#F5F5F5]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A2E] font-heading">LAYANAN KAMI</h2>
            <div className="w-16 h-1 bg-[#C9A962] mx-auto mt-3 mb-4"></div>
            <p className="text-gray-600">Berbagai layanan grooming premium untuk kebutuhan Anda</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((s) => (
              <div key={s.name} className="bg-white rounded-lg p-5 shadow-sm hover:shadow-md transition-shadow">
                <div className="text-3xl mb-3">{s.icon}</div>
                <h3 className="text-lg font-bold text-[#1A1A2E] font-heading">{s.name}</h3>
                <p className="text-gray-600 text-sm mt-1 mb-3">{s.desc}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-[#C9A962]">{s.price}</span>
                  <Link href="/booking" className="text-[#1A1A2E] text-sm font-medium hover:text-[#C9A962] flex items-center gap-1">
                    Booking <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link href="/layanan" className="inline-flex items-center gap-2 bg-[#1A1A2E] text-white px-6 py-3 rounded font-bold hover:bg-[#2a2a4e] transition-colors">
              Lihat Semua Layanan <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* BARBER */}
      <section className="py-16 bg-[#1A1A2E]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white font-heading">TIM BARBER KAMI</h2>
            <div className="w-16 h-1 bg-[#C9A962] mx-auto mt-3 mb-4"></div>
            <p className="text-gray-400">Barber berpengalaman yang berdedikasi tinggi</p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {barbers.map((b) => (
              <div key={b.name} className="text-center">
                <div className="w-24 h-24 md:w-28 md:h-28 mx-auto rounded-full bg-gradient-to-br from-[#C9A962] to-[#8B6914] p-0.5 mb-3">
                  <div className="w-full h-full rounded-full bg-[#1A1A2E] flex items-center justify-center text-2xl md:text-3xl font-bold text-[#C9A962] font-heading">
                    {b.init}
                  </div>
                </div>
                <div className="bg-[#C9A962] text-[#1A1A2E] text-xs font-bold px-2 py-0.5 rounded inline-block mb-2">{b.role}</div>
                <h3 className="text-white font-bold font-heading">{b.name}</h3>
                <p className="text-gray-400 text-xs">{b.exp}</p>
                <p className="text-[#C9A962] text-xs">{b.spec}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link href="/barber" className="inline-flex items-center gap-2 border-2 border-[#C9A962] text-[#C9A962] px-6 py-3 rounded font-bold hover:bg-[#C9A962] hover:text-[#1A1A2E] transition-colors">
              Lihat Profil Lengkap <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* GALERI */}
      <section className="py-16 bg-[#F5F5F5]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A2E] font-heading">GALERI HASIL KERJA</h2>
            <div className="w-16 h-1 bg-[#C9A962] mx-auto mt-3 mb-4"></div>
            <p className="text-gray-600">Lihat hasil karya terbaik dari tim barber kami</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="aspect-square bg-gradient-to-br from-[#1A1A2E] to-[#2a2a4e] rounded-lg flex items-center justify-center group cursor-pointer hover:opacity-90 transition-opacity">
                <Scissors className="w-8 h-8 text-[#C9A962]/30 group-hover:text-[#C9A962]/50 transition-colors" />
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link href="/galeri" className="inline-flex items-center gap-2 bg-[#1A1A2E] text-white px-6 py-3 rounded font-bold hover:bg-[#2a2a4e] transition-colors">
              Lihat Galeri Lengkap <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* MEMBERSHIP */}
      <section className="py-16 bg-[#1A1A2E]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white font-heading">JADI MEMBER, HEMAT LEBIH BANYAK</h2>
            <div className="w-16 h-1 bg-[#C9A962] mx-auto mt-3 mb-4"></div>
            <p className="text-gray-400">Pilih paket membership sesuai kebutuhan Anda</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {membership.map((m) => (
              <div key={m.name} className={`rounded-lg p-5 ${m.popular ? "bg-gradient-to-b from-[#C9A962] to-[#8B6914]" : "bg-white/5 border border-white/10"}`}>
                {m.popular && <div className="bg-[#8B0000] text-white text-xs font-bold text-center py-1 rounded mb-3 -mt-2 -mx-2">PALING POPULER</div>}
                <h3 className={`text-xl font-bold font-heading ${m.popular ? "text-[#1A1A2E]" : "text-white"}`}>{m.name} Member</h3>
                <div className="mt-2 mb-4">
                  <span className={`text-2xl font-bold ${m.popular ? "text-[#1A1A2E]" : "text-[#C9A962]"}`}>{m.price}</span>
                  <span className={m.popular ? "text-[#1A1A2E]/70" : "text-gray-400"}>/bulan</span>
                </div>
                <ul className="space-y-2 mb-5">
                  {m.features.map((f) => (
                    <li key={f} className={`flex items-center gap-2 text-sm ${m.popular ? "text-[#1A1A2E]" : "text-gray-300"}`}>
                      <Award className={`w-4 h-4 ${m.popular ? "text-[#1A1A2E]" : "text-[#C9A962]"}`} /> {f}
                    </li>
                  ))}
                </ul>
                <Link href="/booking" className={`block text-center py-2 rounded font-bold text-sm ${m.popular ? "bg-[#1A1A2E] text-white" : "bg-[#C9A962] text-[#1A1A2E]"}`}>
                  Daftar Sekarang
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="py-16 bg-[#F5F5F5]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A2E] font-heading">APA KATA MEREKA</h2>
            <div className="w-16 h-1 bg-[#C9A962] mx-auto mt-3 mb-4"></div>
            <p className="text-gray-600">Testimoni dari pelanggan setia Gentleman's Cut</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-white rounded-lg p-5 shadow-sm relative">
                <Quote className="absolute top-4 right-4 w-6 h-6 text-[#C9A962]/20" />
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 text-[#C9A962] fill-[#C9A962]" />)}
                </div>
                <p className="text-gray-600 text-sm mb-4 italic">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#1A1A2E] flex items-center justify-center text-[#C9A962] font-bold">{t.name[0]}</div>
                  <div>
                    <div className="font-bold text-[#1A1A2E] text-sm">{t.name}</div>
                    <div className="text-[#C9A962] text-xs">{t.type}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#1A1A2E]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white font-heading mb-4">SIAP TAMPIL LEBIH KEREN?</h2>
          <p className="text-gray-300 mb-8">Booking sekarang dan rasakan pengalaman grooming premium bersama barber profesional kami</p>
          <Link href="/booking" className="inline-flex items-center gap-2 bg-[#C9A962] text-[#1A1A2E] px-8 py-4 rounded font-bold hover:bg-[#b8983e] transition-colors">
            <Clock className="w-5 h-5" /> Booking Jadwal
          </Link>
        </div>
      </section>
    </>
  );
}
