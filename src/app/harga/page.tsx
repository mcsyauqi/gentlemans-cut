"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Check, Star, Award, Crown, Scissors } from "lucide-react";

const services = [
  { name: "Haircut Classic", price: "Rp 75.000", description: "Potong rambut klasik dengan finishing wax" },
  { name: "Haircut Premium", price: "Rp 120.000", description: "Include hair wash, massage, styling" },
  { name: "Shaving Classic", price: "Rp 50.000", description: "Cukur kumis/jenggot dengan pisau cukur" },
  { name: "Hot Towel Shave", price: "Rp 100.000", description: "Shaving mewah dengan handuk panas" },
  { name: "Hair Coloring", price: "Rp 150.000", description: "Pewarnaan rambut profesional" },
  { name: "Kids Haircut", price: "Rp 50.000", description: "Potong rambut anak (di bawah 12 tahun)" },
  { name: "Beard Grooming", price: "Rp 80.000", description: "Trim, shape, dan conditioning jenggot" },
  { name: "Hair Treatment", price: "Rp 200.000", description: "Perawatan rambut intensif" },
];

const memberships = [
  {
    name: "Silver Member",
    price: "Rp 200.000",
    period: "/bulan",
    icon: <Star className="w-8 h-8" />,
    features: ["2x Haircut Classic per bulan", "Diskon 10% semua layanan", "Booking priority via WhatsApp", "Birthday discount"],
    popular: false,
  },
  {
    name: "Gold Member",
    price: "Rp 350.000",
    period: "/bulan",
    icon: <Crown className="w-8 h-8" />,
    features: ["2x Haircut Premium per bulan", "1x Hot Towel Shave per bulan", "Diskon 15% semua layanan", "Priority booking", "Free hair product samples"],
    popular: true,
  },
  {
    name: "Platinum Member",
    price: "Rp 500.000",
    period: "/bulan",
    icon: <Award className="w-8 h-8" />,
    features: ["Unlimited Haircut per bulan", "2x Hot Towel Shave per bulan", "Diskon 20% semua layanan", "VIP room access", "Personal barber"],
    popular: false,
  },
];

const addons = [
  { name: "Hair Wash", price: "Rp 20.000" },
  { name: "Scalp Massage", price: "Rp 30.000" },
  { name: "Hair Tonic", price: "Rp 25.000" },
  { name: "Beard Oil", price: "Rp 20.000" },
  { name: "Hair Wax", price: "Rp 15.000" },
  { name: "Face Mask", price: "Rp 35.000" },
];

export default function HargaPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-[#1A1A2E] pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
              DAFTAR HARGA
            </h1>
            <div className="w-20 h-1 bg-[#C9A962] mx-auto mb-6" />
            <p className="text-gray-300 max-w-xl mx-auto">
              Harga transparan untuk semua layanan grooming premium kami
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Price List */}
      <section className="py-16 md:py-20 bg-[#F5F5F5]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A2E] mb-4" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
              LAYANAN
            </h2>
            <div className="w-20 h-1 bg-[#C9A962] mx-auto" />
          </div>

          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            {services.map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className={`flex items-center justify-between p-5 ${index !== services.length - 1 ? "border-b border-gray-100" : ""}`}
              >
                <div className="flex items-center gap-3">
                  <Scissors className="w-5 h-5 text-[#C9A962] shrink-0" />
                  <div>
                    <h3 className="font-bold text-[#1A1A2E]">{service.name}</h3>
                    <p className="text-sm text-gray-500">{service.description}</p>
                  </div>
                </div>
                <span className="text-xl font-bold text-[#C9A962] shrink-0 ml-4">{service.price}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A2E] mb-4" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
              ADD-ONS
            </h2>
            <div className="w-20 h-1 bg-[#C9A962] mx-auto mb-4" />
            <p className="text-gray-600">Tambahan layanan untuk pengalaman yang lebih lengkap</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {addons.map((addon, index) => (
              <motion.div
                key={addon.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-[#F5F5F5] rounded-lg p-4 text-center hover:bg-[#1A1A2E] hover:text-white group transition-colors"
              >
                <h3 className="font-medium text-sm mb-1">{addon.name}</h3>
                <span className="text-[#C9A962] font-bold">{addon.price}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Membership Plans */}
      <section className="py-16 md:py-20 bg-[#1A1A2E]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
              PAKET MEMBERSHIP
            </h2>
            <div className="w-20 h-1 bg-[#C9A962] mx-auto mb-6" />
            <p className="text-gray-400 max-w-xl mx-auto">
              Hemat lebih banyak dengan menjadi member
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {memberships.map((membership, index) => (
              <motion.div
                key={membership.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative rounded-xl overflow-hidden ${membership.popular ? "md:-mt-4 md:mb-4" : ""}`}
              >
                {membership.popular && (
                  <div className="bg-[#8B0000] text-white text-center py-2 text-xs font-bold">
                    PALING POPULER
                  </div>
                )}
                <div className={`p-6 h-full flex flex-col ${membership.popular ? "bg-gradient-to-b from-[#C9A962] to-[#8B6914]" : "bg-white/5 border border-white/10"}`}>
                  <div className="text-center mb-5">
                    <div className={`inline-flex p-3 rounded-full mb-3 ${membership.popular ? "bg-[#1A1A2E]/20" : "bg-[#C9A962]/20"}`}>
                      <div className={membership.popular ? "text-[#1A1A2E]" : "text-[#C9A962]"}>{membership.icon}</div>
                    </div>
                    <h3 className={`text-xl font-bold mb-2 ${membership.popular ? "text-[#1A1A2E]" : "text-white"}`} style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                      {membership.name}
                    </h3>
                    <div>
                      <span className={`text-3xl font-bold ${membership.popular ? "text-[#1A1A2E]" : "text-[#C9A962]"}`}>{membership.price}</span>
                      <span className={membership.popular ? "text-[#1A1A2E]/70" : "text-gray-400"}>{membership.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-3 flex-1 mb-6">
                    {membership.features.map((feature, i) => (
                      <li key={i} className={`flex items-start gap-2 text-sm ${membership.popular ? "text-[#1A1A2E]" : "text-gray-300"}`}>
                        <Check className={`w-4 h-4 shrink-0 mt-0.5 ${membership.popular ? "text-[#1A1A2E]" : "text-[#C9A962]"}`} />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/booking"
                    className={`block w-full text-center py-3 rounded font-bold text-sm transition-colors ${
                      membership.popular
                        ? "bg-[#1A1A2E] text-white hover:bg-[#2a2a4e]"
                        : "border-2 border-[#C9A962] text-[#C9A962] hover:bg-[#C9A962] hover:text-[#1A1A2E]"
                    }`}
                  >
                    Daftar Sekarang
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-[#F5F5F5]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A2E] mb-4" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
            SIAP UNTUK TAMPIL MAKSIMAL?
          </h2>
          <p className="text-gray-600 mb-8 max-w-md mx-auto">
            Booking sekarang dan nikmati layanan grooming premium
          </p>
          <Link href="/booking" className="inline-flex items-center gap-2 bg-[#C9A962] text-[#1A1A2E] px-8 py-4 rounded font-bold hover:bg-[#b8983e] transition-colors">
            <Scissors className="w-5 h-5" />
            Booking Sekarang
          </Link>
        </div>
      </section>
    </>
  );
}
