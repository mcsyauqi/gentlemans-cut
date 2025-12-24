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
    icon: <Star className="w-10 h-10" />,
    features: [
      "2x Haircut Classic per bulan",
      "Diskon 10% semua layanan",
      "Booking priority via WhatsApp",
      "Birthday special discount",
    ],
    popular: false,
    color: "from-gray-400 to-gray-600",
  },
  {
    name: "Gold Member",
    price: "Rp 350.000",
    period: "/bulan",
    icon: <Crown className="w-10 h-10" />,
    features: [
      "2x Haircut Premium per bulan",
      "1x Hot Towel Shave per bulan",
      "Diskon 15% semua layanan",
      "Priority booking",
      "Free hair product samples",
      "Exclusive member events",
    ],
    popular: true,
    color: "from-[#C9A962] to-[#8B6914]",
  },
  {
    name: "Platinum Member",
    price: "Rp 500.000",
    period: "/bulan",
    icon: <Award className="w-10 h-10" />,
    features: [
      "Unlimited Haircut per bulan",
      "2x Hot Towel Shave per bulan",
      "Diskon 20% semua layanan",
      "VIP room access",
      "Personal barber",
      "Free premium hair products",
      "Complimentary drinks",
      "Priority booking 24/7",
    ],
    popular: false,
    color: "from-purple-500 to-purple-800",
  },
];

const addons = [
  { name: "Hair Wash", price: "Rp 20.000" },
  { name: "Scalp Massage", price: "Rp 30.000" },
  { name: "Hair Tonic", price: "Rp 25.000" },
  { name: "Beard Oil", price: "Rp 20.000" },
  { name: "Hair Wax/Pomade", price: "Rp 15.000" },
  { name: "Face Mask", price: "Rp 35.000" },
];

export default function HargaPage() {
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
              DAFTAR HARGA
            </h1>
            <div className="w-24 h-1 bg-[#C9A962] mx-auto mb-6" />
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Harga transparan untuk semua layanan grooming premium kami
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Price List */}
      <section className="py-20 bg-[#F5F5F5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2
              className="text-4xl font-bold text-[#1A1A2E] mb-4"
              style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.05em" }}
            >
              LAYANAN
            </h2>
            <div className="w-24 h-1 bg-[#C9A962] mx-auto" />
          </motion.div>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            {services.map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className={`flex items-center justify-between p-6 ${
                  index !== services.length - 1 ? "border-b border-gray-100" : ""
                } hover:bg-[#F5F5F5] transition-colors duration-300`}
              >
                <div className="flex items-center gap-4">
                  <Scissors className="w-5 h-5 text-[#C9A962]" />
                  <div>
                    <h3 className="font-bold text-[#1A1A2E]">{service.name}</h3>
                    <p className="text-sm text-gray-500">{service.description}</p>
                  </div>
                </div>
                <span className="text-xl font-bold text-[#C9A962]">{service.price}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2
              className="text-4xl font-bold text-[#1A1A2E] mb-4"
              style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.05em" }}
            >
              ADD-ONS
            </h2>
            <div className="w-24 h-1 bg-[#C9A962] mx-auto mb-4" />
            <p className="text-gray-600">Tambahan layanan untuk pengalaman grooming yang lebih lengkap</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {addons.map((addon, index) => (
              <motion.div
                key={addon.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-[#F5F5F5] rounded-lg p-4 text-center hover:bg-[#1A1A2E] hover:text-white group transition-all duration-300"
              >
                <h3 className="font-medium mb-1">{addon.name}</h3>
                <span className="text-[#C9A962] font-bold">{addon.price}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Membership Plans */}
      <section className="py-20 bg-[#1A1A2E]">
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
              PAKET MEMBERSHIP
            </h2>
            <div className="w-24 h-1 bg-[#C9A962] mx-auto mb-6" />
            <p className="text-gray-400 max-w-2xl mx-auto">
              Hemat lebih banyak dengan menjadi member Gentleman&apos;s Cut
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
                className={`relative rounded-2xl overflow-hidden ${
                  membership.popular ? "md:-mt-4 md:mb-4" : ""
                }`}
              >
                {membership.popular && (
                  <div className="absolute top-0 left-0 right-0 bg-[#8B0000] text-white text-center py-2 text-sm font-bold z-10">
                    PALING POPULER
                  </div>
                )}
                <div
                  className={`bg-gradient-to-b ${membership.color} p-1 h-full ${
                    membership.popular ? "pt-10" : ""
                  }`}
                >
                  <div className="bg-[#1A1A2E] rounded-xl p-8 h-full flex flex-col">
                    <div className="text-center mb-6">
                      <div className={`inline-flex p-4 rounded-full bg-gradient-to-br ${membership.color} text-white mb-4`}>
                        {membership.icon}
                      </div>
                      <h3
                        className="text-2xl font-bold text-white mb-2"
                        style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.05em" }}
                      >
                        {membership.name}
                      </h3>
                      <div>
                        <span className="text-4xl font-bold text-[#C9A962]">{membership.price}</span>
                        <span className="text-gray-400">{membership.period}</span>
                      </div>
                    </div>

                    <ul className="space-y-3 flex-1 mb-8">
                      {membership.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3 text-gray-300">
                          <Check className="w-5 h-5 text-[#C9A962] shrink-0 mt-0.5" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Link
                      href="/booking"
                      className={`block w-full text-center py-3 rounded-lg font-bold transition-all duration-300 ${
                        membership.popular
                          ? "bg-gradient-to-r from-[#C9A962] to-[#8B6914] text-[#1A1A2E] hover:opacity-90"
                          : "border-2 border-[#C9A962] text-[#C9A962] hover:bg-[#C9A962] hover:text-[#1A1A2E]"
                      }`}
                    >
                      Daftar Sekarang
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#F5F5F5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2
              className="text-4xl font-bold text-[#1A1A2E] mb-4"
              style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.05em" }}
            >
              SIAP UNTUK TAMPIL MAKSIMAL?
            </h2>
            <p className="text-gray-600 mb-8 max-w-xl mx-auto">
              Booking sekarang dan nikmati layanan grooming premium dari tim barber profesional kami
            </p>
            <Link
              href="/booking"
              className="inline-flex items-center gap-2 bg-[#C9A962] text-[#1A1A2E] px-8 py-4 rounded font-bold text-lg hover:bg-[#b8983e] transition-colors duration-300"
            >
              <Scissors className="w-5 h-5" />
              Booking Sekarang
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
