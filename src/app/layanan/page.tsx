"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Scissors, Clock, ChevronRight, Check } from "lucide-react";

const services = [
  {
    name: "Haircut Classic",
    description: "Potong rambut klasik dengan sentuhan profesional. Termasuk konsultasi gaya, potong rapi, dan finishing dengan wax premium.",
    price: "Rp 75.000",
    duration: "30 menit",
    icon: "✂️",
    features: ["Konsultasi gaya", "Potong rapi", "Finishing wax", "Styling tips"],
  },
  {
    name: "Haircut Premium",
    description: "Pengalaman grooming lengkap. Hair wash dengan shampoo berkualitas, massage kepala, dan styling profesional.",
    price: "Rp 120.000",
    duration: "45 menit",
    icon: "💈",
    features: ["Hair wash", "Scalp massage", "Potong premium", "Styling profesional", "Hair tonic"],
  },
  {
    name: "Shaving Classic",
    description: "Cukur kumis dan jenggot dengan teknik tradisional menggunakan pisau cukur berkualitas tinggi.",
    price: "Rp 50.000",
    duration: "20 menit",
    icon: "🪒",
    features: ["Konsultasi bentuk", "Trim & shape", "Finishing oil"],
  },
  {
    name: "Hot Towel Shave",
    description: "Pengalaman shaving mewah dengan handuk panas, shaving cream premium, dan aftershave yang menyegarkan.",
    price: "Rp 100.000",
    duration: "40 menit",
    icon: "🧖‍♂️",
    features: ["Hot towel treatment", "Pre-shave oil", "Premium shaving cream", "Aftershave balm", "Face massage"],
  },
  {
    name: "Hair Coloring",
    description: "Pewarnaan rambut profesional dengan produk berkualitas. Tersedia berbagai pilihan warna.",
    price: "Rp 150.000",
    duration: "60 menit",
    icon: "🎨",
    features: ["Konsultasi warna", "Color protection", "Deep conditioning", "Styling"],
  },
  {
    name: "Kids Haircut",
    description: "Potong rambut khusus untuk anak di bawah 12 tahun dengan suasana yang menyenangkan.",
    price: "Rp 50.000",
    duration: "25 menit",
    icon: "👦",
    features: ["Suasana ramah anak", "Potong rapi", "Styling fun", "Reward sticker"],
  },
  {
    name: "Beard Grooming",
    description: "Perawatan lengkap untuk jenggot, mulai dari trimming, shaping, hingga conditioning.",
    price: "Rp 80.000",
    duration: "30 menit",
    icon: "🧔",
    features: ["Trim & shape", "Beard wash", "Beard oil", "Styling"],
  },
  {
    name: "Hair Treatment",
    description: "Perawatan rambut intensif untuk mengatasi masalah rambut seperti ketombe atau rambut rontok.",
    price: "Rp 200.000",
    duration: "60 menit",
    icon: "💆‍♂️",
    features: ["Hair analysis", "Deep cleansing", "Treatment mask", "Scalp massage", "Hair tonic"],
  },
];

export default function LayananPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-[#1A1A2E] pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
              LAYANAN KAMI
            </h1>
            <div className="w-20 h-1 bg-[#C9A962] mx-auto mb-6" />
            <p className="text-gray-300 max-w-xl mx-auto">
              Berbagai layanan grooming premium dengan standar internasional
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-20 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-md"
              >
                <div className="flex gap-5">
                  <div className="text-4xl shrink-0">{service.icon}</div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                      <div>
                        <h3 className="text-xl font-bold text-[#1A1A2E]" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                          {service.name}
                        </h3>
                        <div className="flex items-center gap-1 text-gray-500 text-sm mt-1">
                          <Clock className="w-4 h-4" />
                          {service.duration}
                        </div>
                      </div>
                      <span className="text-2xl font-bold text-[#C9A962]">{service.price}</span>
                    </div>
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">{service.description}</p>
                    <div className="grid grid-cols-2 gap-2 mb-5">
                      {service.features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm text-gray-600">
                          <Check className="w-4 h-4 text-[#C9A962] shrink-0" />
                          <span className="truncate">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <Link
                      href="/booking"
                      className="inline-flex items-center gap-2 bg-[#1A1A2E] text-white px-5 py-2.5 rounded font-bold text-sm hover:bg-[#2a2a4e] transition-colors"
                    >
                      Booking
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
      <section className="py-16 md:py-20 bg-[#1A1A2E]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Scissors className="w-12 h-12 text-[#C9A962] mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
            BUTUH LAYANAN KHUSUS?
          </h2>
          <p className="text-gray-300 mb-8 max-w-md mx-auto">
            Kami juga menyediakan layanan grooming untuk acara khusus seperti pernikahan atau pemotretan.
          </p>
          <Link href="/kontak" className="inline-flex items-center gap-2 bg-[#C9A962] text-[#1A1A2E] px-8 py-4 rounded font-bold hover:bg-[#b8983e] transition-colors">
            Hubungi Kami
            <ChevronRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  );
}
