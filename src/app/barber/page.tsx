"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Award, Calendar, Scissors, Instagram } from "lucide-react";

const barbers = [
  {
    name: "Master Aldo",
    role: "Head Barber",
    experience: "15 tahun pengalaman",
    specialty: "Classic Cut, Executive Style",
    bio: "Master Aldo adalah founder sekaligus head barber di Gentleman's Cut. Dengan pengalaman lebih dari 15 tahun, beliau telah melayani ribuan pelanggan dari berbagai kalangan.",
    achievements: ["Certified Master Barber", "International Barber Competition 2018", "Best Barbershop Jakarta 2023"],
    initials: "MA",
  },
  {
    name: "Bro Ricky",
    role: "Senior Barber",
    experience: "10 tahun pengalaman",
    specialty: "Fade, Undercut, Modern Style",
    bio: "Bro Ricky dikenal dengan kemampuannya menciptakan fade yang sempurna dan undercut yang presisi. Ia selalu update dengan tren terkini.",
    achievements: ["Fade Master Certificate", "Top Rated Barber 2022", "Style Innovator Award"],
    initials: "BR",
  },
  {
    name: "Bro Dimas",
    role: "Barber",
    experience: "7 tahun pengalaman",
    specialty: "Modern Style, Creative Design",
    bio: "Bro Dimas adalah barber yang kreatif dan inovatif. Ia senang menciptakan gaya-gaya unik yang sesuai dengan kepribadian setiap pelanggan.",
    achievements: ["Creative Design Specialist", "Youth Choice Award 2023", "Hair Art Competition Winner"],
    initials: "BD",
  },
  {
    name: "Bro Farhan",
    role: "Junior Barber",
    experience: "3 tahun pengalaman",
    specialty: "All-rounder, Quick Service",
    bio: "Bro Farhan adalah talenta muda yang penuh semangat. Ia menguasai berbagai teknik potong dan selalu memberikan layanan yang cepat tanpa mengorbankan kualitas.",
    achievements: ["Rising Star 2024", "Customer Favorite", "Quick Service Champion"],
    initials: "BF",
  },
];

export default function BarberPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-[#1A1A2E] pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
              TIM BARBER KAMI
            </h1>
            <div className="w-20 h-1 bg-[#C9A962] mx-auto mb-6" />
            <p className="text-gray-300 max-w-xl mx-auto">
              Kenali lebih dekat para barber profesional kami
            </p>
          </motion.div>
        </div>
      </section>

      {/* Barbers Section */}
      <section className="py-16 md:py-20 bg-[#F5F5F5]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {barbers.map((barber, index) => (
              <motion.div
                key={barber.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-8 items-center`}
              >
                <div className="w-full md:w-1/3 text-center">
                  <div className="relative inline-block">
                    <div className="w-48 h-48 md:w-56 md:h-56 rounded-full bg-gradient-to-br from-[#C9A962] to-[#8B6914] p-1.5">
                      <div className="w-full h-full rounded-full bg-[#1A1A2E] flex items-center justify-center">
                        <span className="text-5xl md:text-6xl font-bold text-[#C9A962]" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                          {barber.initials}
                        </span>
                      </div>
                    </div>
                    <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-[#C9A962] text-[#1A1A2E] px-4 py-1.5 rounded-full font-bold text-sm">
                      {barber.role}
                    </div>
                  </div>
                </div>

                <div className="w-full md:w-2/3">
                  <div className="bg-white rounded-xl p-6 md:p-8 shadow-md">
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <h2 className="text-2xl md:text-3xl font-bold text-[#1A1A2E]" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                        {barber.name}
                      </h2>
                      <div className="flex items-center gap-1.5 bg-[#C9A962]/10 px-3 py-1 rounded-full">
                        <Calendar className="w-4 h-4 text-[#C9A962]" />
                        <span className="text-sm text-[#C9A962] font-medium">{barber.experience}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 mb-4">
                      <Scissors className="w-4 h-4 text-[#C9A962]" />
                      <span className="text-[#1A1A2E] text-sm font-medium">{barber.specialty}</span>
                    </div>

                    <p className="text-gray-600 text-sm mb-5 leading-relaxed">{barber.bio}</p>

                    <div className="mb-6">
                      <h4 className="text-xs font-bold text-[#1A1A2E] mb-3 uppercase tracking-wider">Pencapaian</h4>
                      <div className="flex flex-wrap gap-2">
                        {barber.achievements.map((achievement, i) => (
                          <span key={i} className="inline-flex items-center gap-1.5 bg-[#1A1A2E] text-white px-3 py-1.5 rounded text-xs">
                            <Award className="w-3 h-3 text-[#C9A962]" />
                            {achievement}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <Link href="/booking" className="bg-[#C9A962] text-[#1A1A2E] px-5 py-2.5 rounded font-bold text-sm hover:bg-[#b8983e] transition-colors">
                        Booking
                      </Link>
                      <a href="#" className="w-10 h-10 bg-[#1A1A2E] rounded-full flex items-center justify-center hover:bg-[#2a2a4e] transition-colors">
                        <Instagram className="w-5 h-5 text-[#C9A962]" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Team Section */}
      <section className="py-16 md:py-20 bg-[#1A1A2E]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
            BERGABUNG DENGAN TIM KAMI
          </h2>
          <div className="w-20 h-1 bg-[#C9A962] mx-auto mb-6" />
          <p className="text-gray-300 mb-8 max-w-md mx-auto">
            Apakah Anda seorang barber berbakat? Kami selalu mencari talenta baru!
          </p>
          <Link href="/kontak" className="inline-flex items-center gap-2 border-2 border-[#C9A962] text-[#C9A962] px-8 py-4 rounded font-bold hover:bg-[#C9A962] hover:text-[#1A1A2E] transition-colors">
            Kirim Lamaran
          </Link>
        </div>
      </section>
    </>
  );
}
