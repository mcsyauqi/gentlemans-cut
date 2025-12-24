"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Award, Star, Calendar, Scissors, Instagram } from "lucide-react";

const barbers = [
  {
    name: "Master Aldo",
    role: "Head Barber",
    experience: "15 tahun pengalaman",
    specialty: "Classic Cut, Executive Style",
    bio: "Master Aldo adalah founder sekaligus head barber di Gentleman's Cut. Dengan pengalaman lebih dari 15 tahun di industri barbershop, beliau telah melayani ribuan pelanggan dari berbagai kalangan. Spesialisasinya adalah potongan klasik yang timeless dan gaya eksekutif yang elegan.",
    achievements: ["Certified Master Barber", "International Barber Competition 2018", "Best Barbershop Jakarta 2023"],
    image: "MA",
  },
  {
    name: "Bro Ricky",
    role: "Senior Barber",
    experience: "10 tahun pengalaman",
    specialty: "Fade, Undercut, Modern Style",
    bio: "Bro Ricky dikenal dengan kemampuannya menciptakan fade yang sempurna dan undercut yang presisi. Ia selalu update dengan tren terkini dan gemar bereksperimen dengan style-style modern yang fresh.",
    achievements: ["Fade Master Certificate", "Top Rated Barber 2022", "Style Innovator Award"],
    image: "BR",
  },
  {
    name: "Bro Dimas",
    role: "Barber",
    experience: "7 tahun pengalaman",
    specialty: "Modern Style, Creative Design",
    bio: "Bro Dimas adalah barber yang kreatif dan inovatif. Ia senang menciptakan gaya-gaya unik yang sesuai dengan kepribadian setiap pelanggan. Keahliannya dalam hair design membuatnya menjadi favorit pelanggan muda.",
    achievements: ["Creative Design Specialist", "Youth Choice Award 2023", "Hair Art Competition Winner"],
    image: "BD",
  },
  {
    name: "Bro Farhan",
    role: "Junior Barber",
    experience: "3 tahun pengalaman",
    specialty: "All-rounder, Quick Service",
    bio: "Bro Farhan adalah talenta muda yang penuh semangat. Meskipun baru 3 tahun di industri ini, ia telah menunjukkan skill yang luar biasa dan kemampuan belajar yang cepat. Ia menguasai berbagai teknik potong dan selalu memberikan layanan yang cepat tanpa mengorbankan kualitas.",
    achievements: ["Rising Star 2024", "Customer Favorite", "Quick Service Champion"],
    image: "BF",
  },
];

export default function BarberPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-[#1A1A2E] py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C9A962' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1
              className="text-5xl md:text-6xl font-bold text-white mb-4"
              style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.05em" }}
            >
              TIM BARBER KAMI
            </h1>
            <div className="w-24 h-1 bg-[#C9A962] mx-auto mb-6" />
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Kenali lebih dekat para barber profesional kami yang berdedikasi untuk memberikan hasil terbaik
            </p>
          </motion.div>
        </div>
      </section>

      {/* Barbers Section */}
      <section className="py-20 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {barbers.map((barber, index) => (
              <motion.div
                key={barber.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`flex flex-col ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } gap-12 items-center`}
              >
                {/* Image */}
                <div className="w-full lg:w-1/3">
                  <div className="relative">
                    <div className="w-64 h-64 md:w-80 md:h-80 mx-auto rounded-full bg-gradient-to-br from-[#C9A962] to-[#8B6914] p-2">
                      <div className="w-full h-full rounded-full bg-[#1A1A2E] flex items-center justify-center">
                        <span
                          className="text-6xl md:text-8xl font-bold text-[#C9A962]"
                          style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                        >
                          {barber.image}
                        </span>
                      </div>
                    </div>
                    <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-[#C9A962] text-[#1A1A2E] px-6 py-2 rounded-full font-bold text-sm">
                      {barber.role}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="w-full lg:w-2/3">
                  <div className="bg-white rounded-xl p-8 shadow-lg">
                    <div className="flex flex-wrap items-center gap-4 mb-4">
                      <h2
                        className="text-3xl md:text-4xl font-bold text-[#1A1A2E]"
                        style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.05em" }}
                      >
                        {barber.name}
                      </h2>
                      <div className="flex items-center gap-1 bg-[#C9A962]/10 px-3 py-1 rounded-full">
                        <Calendar className="w-4 h-4 text-[#C9A962]" />
                        <span className="text-sm text-[#C9A962] font-medium">{barber.experience}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 mb-4">
                      <Scissors className="w-5 h-5 text-[#C9A962]" />
                      <span className="text-[#1A1A2E] font-medium">{barber.specialty}</span>
                    </div>

                    <p className="text-gray-600 mb-6 leading-relaxed">{barber.bio}</p>

                    <div className="mb-6">
                      <h4 className="text-sm font-bold text-[#1A1A2E] mb-3 uppercase tracking-wider">Pencapaian</h4>
                      <div className="flex flex-wrap gap-2">
                        {barber.achievements.map((achievement, i) => (
                          <span
                            key={i}
                            className="inline-flex items-center gap-1 bg-[#1A1A2E] text-white px-3 py-1 rounded text-sm"
                          >
                            <Award className="w-3 h-3 text-[#C9A962]" />
                            {achievement}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <Link
                        href="/booking"
                        className="bg-[#C9A962] text-[#1A1A2E] px-6 py-3 rounded font-bold hover:bg-[#b8983e] transition-colors duration-300"
                      >
                        Booking dengan {barber.name.split(" ")[1] || barber.name.split(" ")[0]}
                      </Link>
                      <a
                        href="#"
                        className="w-10 h-10 bg-[#1A1A2E] rounded-full flex items-center justify-center hover:bg-[#2a2a4e] transition-colors duration-300"
                      >
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
      <section className="py-20 bg-[#1A1A2E]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2
              className="text-4xl font-bold text-white mb-4"
              style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.05em" }}
            >
              BERGABUNG DENGAN TIM KAMI
            </h2>
            <div className="w-24 h-1 bg-[#C9A962] mx-auto mb-6" />
            <p className="text-gray-300 mb-8 max-w-xl mx-auto">
              Apakah Anda seorang barber berbakat yang ingin bergabung dengan tim profesional kami? Kami selalu mencari talenta baru!
            </p>
            <Link
              href="/kontak"
              className="inline-flex items-center gap-2 border-2 border-[#C9A962] text-[#C9A962] px-8 py-4 rounded font-bold hover:bg-[#C9A962] hover:text-[#1A1A2E] transition-all duration-300"
            >
              Kirim Lamaran
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
