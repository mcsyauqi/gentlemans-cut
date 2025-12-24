"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Scissors, Clock, Star, ChevronRight, Check } from "lucide-react";

const services = [
  {
    name: "Haircut Classic",
    description: "Potong rambut klasik dengan sentuhan profesional. Termasuk konsultasi gaya, potong rapi, dan finishing dengan wax premium untuk hasil yang maksimal.",
    price: "Rp 75.000",
    duration: "30 menit",
    icon: "✂️",
    features: ["Konsultasi gaya", "Potong rapi", "Finishing wax", "Styling tips"],
  },
  {
    name: "Haircut Premium",
    description: "Pengalaman grooming lengkap dengan layanan premium. Hair wash dengan shampoo berkualitas, massage kepala yang menenangkan, dan styling profesional.",
    price: "Rp 120.000",
    duration: "45 menit",
    icon: "💈",
    features: ["Hair wash", "Scalp massage", "Potong premium", "Styling profesional", "Hair tonic"],
  },
  {
    name: "Shaving Classic",
    description: "Cukur kumis dan jenggot dengan teknik tradisional menggunakan pisau cukur berkualitas tinggi untuk hasil yang bersih dan rapi.",
    price: "Rp 50.000",
    duration: "20 menit",
    icon: "🪒",
    features: ["Konsultasi bentuk", "Trim & shape", "Finishing oil"],
  },
  {
    name: "Hot Towel Shave",
    description: "Pengalaman shaving mewah dengan handuk panas untuk membuka pori-pori, shaving cream premium, dan aftershave yang menyegarkan.",
    price: "Rp 100.000",
    duration: "40 menit",
    icon: "🧖‍♂️",
    features: ["Hot towel treatment", "Pre-shave oil", "Premium shaving cream", "Aftershave balm", "Face massage"],
  },
  {
    name: "Hair Coloring",
    description: "Pewarnaan rambut profesional dengan produk berkualitas tinggi. Tersedia berbagai pilihan warna dari natural hingga bold.",
    price: "Rp 150.000",
    duration: "60 menit",
    icon: "🎨",
    features: ["Konsultasi warna", "Color protection", "Deep conditioning", "Styling"],
  },
  {
    name: "Kids Haircut",
    description: "Potong rambut khusus untuk anak di bawah 12 tahun dengan suasana yang menyenangkan dan ramah anak.",
    price: "Rp 50.000",
    duration: "25 menit",
    icon: "👦",
    features: ["Suasana ramah anak", "Potong rapi", "Styling fun", "Reward sticker"],
  },
  {
    name: "Beard Grooming",
    description: "Perawatan lengkap untuk jenggot, mulai dari trimming, shaping, hingga conditioning dengan beard oil premium.",
    price: "Rp 80.000",
    duration: "30 menit",
    icon: "🧔",
    features: ["Trim & shape", "Beard wash", "Beard oil", "Styling"],
  },
  {
    name: "Hair Treatment",
    description: "Perawatan rambut intensif untuk mengatasi masalah rambut seperti ketombe, rambut rontok, atau rambut rusak.",
    price: "Rp 200.000",
    duration: "60 menit",
    icon: "💆‍♂️",
    features: ["Hair analysis", "Deep cleansing", "Treatment mask", "Scalp massage", "Hair tonic"],
  },
];

export default function LayananPage() {
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
              LAYANAN KAMI
            </h1>
            <div className="w-24 h-1 bg-[#C9A962] mx-auto mb-6" />
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Berbagai layanan grooming premium dengan standar internasional untuk memenuhi kebutuhan penampilan Anda
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start gap-6">
                  <div className="text-5xl">{service.icon}</div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3
                          className="text-2xl font-bold text-[#1A1A2E] mb-1"
                          style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.05em" }}
                        >
                          {service.name}
                        </h3>
                        <div className="flex items-center gap-4 text-sm text-gray-500">
                          <span className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {service.duration}
                          </span>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="text-3xl font-bold text-[#C9A962]">{service.price}</span>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <div className="grid grid-cols-2 gap-2 mb-6">
                      {service.features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm text-gray-600">
                          <Check className="w-4 h-4 text-[#C9A962]" />
                          {feature}
                        </div>
                      ))}
                    </div>
                    <Link
                      href="/booking"
                      className="inline-flex items-center gap-2 bg-[#1A1A2E] text-white px-6 py-3 rounded font-bold text-sm hover:bg-[#2a2a4e] transition-colors duration-300"
                    >
                      Booking Sekarang
                      <ChevronRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#1A1A2E]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Scissors className="w-16 h-16 text-[#C9A962] mx-auto mb-6" />
            <h2
              className="text-4xl font-bold text-white mb-4"
              style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.05em" }}
            >
              BUTUH LAYANAN KHUSUS?
            </h2>
            <p className="text-gray-300 mb-8 max-w-xl mx-auto">
              Kami juga menyediakan layanan grooming untuk acara khusus seperti pernikahan, pemotretan, atau event korporat.
            </p>
            <Link
              href="/kontak"
              className="inline-flex items-center gap-2 bg-[#C9A962] text-[#1A1A2E] px-8 py-4 rounded font-bold hover:bg-[#b8983e] transition-colors duration-300"
            >
              Hubungi Kami
              <ChevronRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
