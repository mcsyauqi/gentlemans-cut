"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Star, Scissors, Clock, Award, Users, ChevronRight, Quote } from "lucide-react";

const services = [
  {
    name: "Haircut Classic",
    description: "Potong rambut klasik dengan finishing wax",
    price: "Rp 75.000",
    icon: "✂️",
  },
  {
    name: "Haircut Premium",
    description: "Include hair wash, massage, styling",
    price: "Rp 120.000",
    icon: "💈",
  },
  {
    name: "Shaving Classic",
    description: "Cukur kumis/jenggot dengan pisau cukur",
    price: "Rp 50.000",
    icon: "🪒",
  },
  {
    name: "Hot Towel Shave",
    description: "Shaving mewah dengan handuk panas",
    price: "Rp 100.000",
    icon: "🧖‍♂️",
  },
  {
    name: "Hair Coloring",
    description: "Pewarnaan rambut profesional",
    price: "Rp 150.000",
    icon: "🎨",
  },
  {
    name: "Kids Haircut",
    description: "Potong rambut anak (di bawah 12 tahun)",
    price: "Rp 50.000",
    icon: "👦",
  },
];

const barbers = [
  {
    name: "Master Aldo",
    role: "Head Barber",
    experience: "15 tahun pengalaman",
    specialty: "Spesialis: Classic Cut",
    image: "MA",
  },
  {
    name: "Bro Ricky",
    role: "Senior Barber",
    experience: "10 tahun pengalaman",
    specialty: "Spesialis: Fade & Undercut",
    image: "BR",
  },
  {
    name: "Bro Dimas",
    role: "Barber",
    experience: "7 tahun pengalaman",
    specialty: "Spesialis: Modern Style",
    image: "BD",
  },
  {
    name: "Bro Farhan",
    role: "Junior Barber",
    experience: "3 tahun pengalaman",
    specialty: "All-rounder",
    image: "BF",
  },
];

const memberships = [
  {
    name: "Silver Member",
    price: "Rp 200.000",
    period: "/bulan",
    features: ["2x Haircut Classic", "Diskon 10% semua layanan"],
    popular: false,
  },
  {
    name: "Gold Member",
    price: "Rp 350.000",
    period: "/bulan",
    features: [
      "2x Haircut Premium",
      "1x Hot Towel Shave",
      "Diskon 15% semua layanan",
      "Priority booking",
    ],
    popular: true,
  },
  {
    name: "Platinum Member",
    price: "Rp 500.000",
    period: "/bulan",
    features: [
      "Unlimited Haircut",
      "2x Hot Towel Shave",
      "Diskon 20% semua layanan",
      "VIP room access",
    ],
    popular: false,
  },
];

const testimonials = [
  {
    content: "Barbershop terbaik di Jakarta! Tempatnya nyaman, barbernya ramah dan skillful.",
    author: "Andi",
    role: "Member Gold",
  },
  {
    content: "Sudah langganan 3 tahun. Konsisten hasilnya selalu memuaskan.",
    author: "Budi",
    role: "Member Platinum",
  },
  {
    content: "Potong rambut di sini bikin nagih. Suasananya asik banget!",
    author: "Reza",
    role: "Regular Customer",
  },
];

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-[#1A1A2E] overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C9A962' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 border border-[#C9A962]/20 rounded-full" />
        <div className="absolute bottom-20 right-10 w-48 h-48 border border-[#C9A962]/20 rounded-full" />
        <div className="absolute top-1/3 right-20 w-24 h-24 border border-[#C9A962]/10 rotate-45" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-[#C9A962]/10 border border-[#C9A962]/30 rounded-full px-4 py-2 mb-8">
              <Star className="w-4 h-4 text-[#C9A962] fill-[#C9A962]" />
              <span className="text-[#C9A962] text-sm font-medium">4.9 Rating dari 2000+ Review</span>
            </div>

            <h1
              className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight"
              style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.05em" }}
            >
              Tampil Gagah,
              <br />
              <span className="gold-shimmer">Rapi, Percaya Diri</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10">
              Barbershop premium dengan barber berpengalaman dan suasana nyaman.
              Nikmati pengalaman grooming terbaik untuk pria sejati.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/booking"
                className="bg-[#C9A962] text-[#1A1A2E] px-8 py-4 rounded font-bold text-lg hover:bg-[#b8983e] transition-all duration-300 flex items-center gap-2 shadow-lg shadow-[#C9A962]/20"
              >
                <Scissors className="w-5 h-5" />
                Booking Sekarang
              </Link>
              <Link
                href="/harga"
                className="border-2 border-white text-white px-8 py-4 rounded font-bold text-lg hover:bg-white hover:text-[#1A1A2E] transition-all duration-300"
              >
                Lihat Harga
              </Link>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20"
          >
            <div className="text-center">
              <div className="text-4xl font-bold text-[#C9A962]" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>15+</div>
              <div className="text-gray-400 text-sm mt-1">Tahun Pengalaman</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#C9A962]" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>10K+</div>
              <div className="text-gray-400 text-sm mt-1">Pelanggan Puas</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#C9A962]" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>4</div>
              <div className="text-gray-400 text-sm mt-1">Barber Profesional</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#C9A962]" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>4.9</div>
              <div className="text-gray-400 text-sm mt-1">Rating Google</div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 border-2 border-[#C9A962] rounded-full flex items-start justify-center p-2"
          >
            <div className="w-1.5 h-3 bg-[#C9A962] rounded-full" />
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2
              className="text-4xl md:text-5xl font-bold text-[#1A1A2E] mb-4"
              style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.05em" }}
            >
              LAYANAN KAMI
            </h2>
            <div className="w-24 h-1 bg-[#C9A962] mx-auto mb-6" />
            <p className="text-gray-600 max-w-2xl mx-auto">
              Berbagai layanan grooming premium untuk memenuhi kebutuhan penampilan Anda
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 group"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-[#1A1A2E] mb-2" style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.05em" }}>
                  {service.name}
                </h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-[#C9A962]">{service.price}</span>
                  <Link href="/booking" className="text-[#1A1A2E] hover:text-[#C9A962] transition-colors duration-300 flex items-center gap-1 text-sm font-medium">
                    Booking <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/layanan"
              className="inline-flex items-center gap-2 bg-[#1A1A2E] text-white px-8 py-4 rounded font-bold hover:bg-[#2a2a4e] transition-colors duration-300"
            >
              Lihat Semua Layanan
              <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Barber Team Section */}
      <section className="py-24 bg-[#1A1A2E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2
              className="text-4xl md:text-5xl font-bold text-white mb-4"
              style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.05em" }}
            >
              TIM BARBER KAMI
            </h2>
            <div className="w-24 h-1 bg-[#C9A962] mx-auto mb-6" />
            <p className="text-gray-400 max-w-2xl mx-auto">
              Dipimpin oleh barber berpengalaman yang berdedikasi tinggi untuk memberikan hasil terbaik
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {barbers.map((barber, index) => (
              <motion.div
                key={barber.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="relative mb-6">
                  <div className="w-40 h-40 mx-auto rounded-full bg-gradient-to-br from-[#C9A962] to-[#8B6914] p-1">
                    <div className="w-full h-full rounded-full bg-[#1A1A2E] flex items-center justify-center text-4xl font-bold text-[#C9A962] group-hover:bg-[#C9A962] group-hover:text-[#1A1A2E] transition-all duration-300" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                      {barber.image}
                    </div>
                  </div>
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-[#C9A962] text-[#1A1A2E] px-4 py-1 rounded text-xs font-bold">
                    {barber.role}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-1" style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.05em" }}>
                  {barber.name}
                </h3>
                <p className="text-gray-400 text-sm mb-1">{barber.experience}</p>
                <p className="text-[#C9A962] text-sm">{barber.specialty}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/barber"
              className="inline-flex items-center gap-2 border-2 border-[#C9A962] text-[#C9A962] px-8 py-4 rounded font-bold hover:bg-[#C9A962] hover:text-[#1A1A2E] transition-all duration-300"
            >
              Lihat Profil Lengkap
              <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-24 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2
              className="text-4xl md:text-5xl font-bold text-[#1A1A2E] mb-4"
              style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.05em" }}
            >
              GALERI HASIL KERJA
            </h2>
            <div className="w-24 h-1 bg-[#C9A962] mx-auto mb-6" />
            <p className="text-gray-600 max-w-2xl mx-auto">
              Lihat hasil karya terbaik dari tim barber kami
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[...Array(12)].map((_, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className={`relative overflow-hidden rounded-lg group ${
                  index === 0 || index === 5 ? "md:row-span-2" : ""
                }`}
              >
                <div
                  className={`bg-gradient-to-br from-[#1A1A2E] to-[#2a2a4e] ${
                    index === 0 || index === 5 ? "aspect-[3/4]" : "aspect-square"
                  } flex items-center justify-center`}
                >
                  <Scissors className="w-12 h-12 text-[#C9A962]/30 group-hover:text-[#C9A962]/50 transition-colors duration-300" />
                </div>
                <div className="absolute inset-0 bg-[#C9A962]/0 group-hover:bg-[#C9A962]/20 transition-colors duration-300 flex items-center justify-center">
                  <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm font-medium">
                    Lihat Detail
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/galeri"
              className="inline-flex items-center gap-2 bg-[#1A1A2E] text-white px-8 py-4 rounded font-bold hover:bg-[#2a2a4e] transition-colors duration-300"
            >
              Lihat Galeri Lengkap
              <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Membership Section */}
      <section className="py-24 bg-[#1A1A2E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2
              className="text-4xl md:text-5xl font-bold text-white mb-4"
              style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.05em" }}
            >
              JADI MEMBER, HEMAT LEBIH BANYAK
            </h2>
            <div className="w-24 h-1 bg-[#C9A962] mx-auto mb-6" />
            <p className="text-gray-400 max-w-2xl mx-auto">
              Pilih paket membership yang sesuai dengan kebutuhan grooming Anda
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {memberships.map((membership, index) => (
              <motion.div
                key={membership.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative rounded-xl p-8 ${
                  membership.popular
                    ? "bg-gradient-to-b from-[#C9A962] to-[#8B6914] text-[#1A1A2E]"
                    : "bg-white/5 border border-white/10"
                }`}
              >
                {membership.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#8B0000] text-white px-4 py-1 rounded-full text-xs font-bold">
                    PALING POPULER
                  </div>
                )}
                <h3
                  className={`text-2xl font-bold mb-2 ${membership.popular ? "text-[#1A1A2E]" : "text-white"}`}
                  style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.05em" }}
                >
                  {membership.name}
                </h3>
                <div className="mb-6">
                  <span className={`text-4xl font-bold ${membership.popular ? "text-[#1A1A2E]" : "text-[#C9A962]"}`}>
                    {membership.price}
                  </span>
                  <span className={membership.popular ? "text-[#1A1A2E]/70" : "text-gray-400"}>
                    {membership.period}
                  </span>
                </div>
                <ul className="space-y-3 mb-8">
                  {membership.features.map((feature, i) => (
                    <li key={i} className={`flex items-center gap-2 ${membership.popular ? "text-[#1A1A2E]" : "text-gray-300"}`}>
                      <Award className={`w-5 h-5 ${membership.popular ? "text-[#1A1A2E]" : "text-[#C9A962]"}`} />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/booking"
                  className={`block w-full text-center py-3 rounded font-bold transition-all duration-300 ${
                    membership.popular
                      ? "bg-[#1A1A2E] text-white hover:bg-[#2a2a4e]"
                      : "bg-[#C9A962] text-[#1A1A2E] hover:bg-[#b8983e]"
                  }`}
                >
                  Daftar Sekarang
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2
              className="text-4xl md:text-5xl font-bold text-[#1A1A2E] mb-4"
              style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.05em" }}
            >
              APA KATA MEREKA
            </h2>
            <div className="w-24 h-1 bg-[#C9A962] mx-auto mb-6" />
            <p className="text-gray-600 max-w-2xl mx-auto">
              Testimoni dari pelanggan setia Gentleman&apos;s Cut
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-lg p-8 shadow-lg relative"
              >
                <Quote className="absolute top-4 right-4 w-10 h-10 text-[#C9A962]/20" />
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-[#C9A962] fill-[#C9A962]" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">&ldquo;{testimonial.content}&rdquo;</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#1A1A2E] flex items-center justify-center text-[#C9A962] font-bold">
                    {testimonial.author[0]}
                  </div>
                  <div>
                    <p className="font-bold text-[#1A1A2E]">{testimonial.author}</p>
                    <p className="text-sm text-[#C9A962]">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-[#1A1A2E] to-[#2a2a4e] relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-10 left-10 w-40 h-40 border border-[#C9A962]/20 rounded-full" />
        <div className="absolute bottom-10 right-10 w-60 h-60 border border-[#C9A962]/20 rounded-full" />
        <Scissors className="absolute top-20 right-20 w-20 h-20 text-[#C9A962]/10 rotate-45" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2
              className="text-4xl md:text-6xl font-bold text-white mb-6"
              style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.05em" }}
            >
              SIAP TAMPIL LEBIH KEREN?
            </h2>
            <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto">
              Booking sekarang dan rasakan pengalaman grooming premium bersama barber profesional kami
            </p>
            <Link
              href="/booking"
              className="inline-flex items-center gap-2 bg-[#C9A962] text-[#1A1A2E] px-10 py-5 rounded font-bold text-lg hover:bg-[#b8983e] transition-all duration-300 shadow-lg shadow-[#C9A962]/30"
            >
              <Clock className="w-6 h-6" />
              Booking Jadwal
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
