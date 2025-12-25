"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";

const memberships = [
  {
    name: "Silver",
    price: "200.000",
    period: "/bulan",
    desc: "Cocok untuk kebutuhan grooming rutin",
    features: [
      "2 Haircuts per bulan",
      "10% off semua layanan",
      "Priority booking",
      "Free sample styling products",
    ],
    popular: false,
  },
  {
    name: "Gold",
    price: "350.000",
    period: "/bulan",
    desc: "Pilihan paling populer",
    features: [
      "4 Haircuts per bulan",
      "1 Free shave per bulan",
      "15% off semua layanan",
      "Priority booking",
      "Free styling products",
      "Exclusive member events",
    ],
    popular: true,
  },
  {
    name: "Platinum",
    price: "500.000",
    period: "/bulan",
    desc: "Pengalaman grooming ultimate",
    features: [
      "Unlimited haircuts",
      "2 Free shaves per bulan",
      "20% off semua layanan",
      "VIP priority booking",
      "Premium product kit bulanan",
      "Private lounge access",
      "Complimentary beverages",
    ],
    popular: false,
  },
];

const services = [
  {
    category: "Haircuts",
    items: [
      { name: "Classic Haircut", price: "75.000" },
      { name: "Premium Haircut", price: "120.000" },
      { name: "Kids Haircut", price: "50.000" },
      { name: "Senior Haircut", price: "60.000" },
    ],
  },
  {
    category: "Shaves",
    items: [
      { name: "Classic Shave", price: "50.000" },
      { name: "Hot Towel Shave", price: "100.000" },
      { name: "Beard Trim", price: "40.000" },
      { name: "Beard Grooming", price: "80.000" },
    ],
  },
  {
    category: "Treatments",
    items: [
      { name: "Hair Coloring", price: "150.000" },
      { name: "Hair Treatment", price: "200.000" },
      { name: "Scalp Treatment", price: "120.000" },
      { name: "Hair & Beard Combo", price: "180.000" },
    ],
  },
];

export default function HargaPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-24 pb-12">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-xl"
          >
            <p className="text-gold text-sm tracking-widest mb-2">HARGA</p>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Transparent Pricing
            </h1>
            <p className="text-white/60">
              Grooming berkualitas dengan harga yang fair. Tanpa biaya tersembunyi.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Membership Plans */}
      <section className="pb-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-display font-bold mb-8">Membership Plans</h2>

          <div className="grid md:grid-cols-3 gap-4">
            {memberships.map((plan, i) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`relative p-6 ${
                  plan.popular ? "bg-gold text-dark" : "bg-dark-card"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-6 bg-dark text-gold px-3 py-1 text-xs font-semibold">
                    POPULAR
                  </div>
                )}

                <h3 className="text-xl font-display font-bold mb-1">{plan.name}</h3>
                <p
                  className={`text-sm mb-4 ${
                    plan.popular ? "text-dark/70" : "text-white/50"
                  }`}
                >
                  {plan.desc}
                </p>

                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-sm">Rp</span>
                  <span className="text-4xl font-display font-bold">{plan.price}</span>
                  <span
                    className={`text-sm ${
                      plan.popular ? "text-dark/60" : "text-white/40"
                    }`}
                  >
                    {plan.period}
                  </span>
                </div>

                <ul className="space-y-2 mb-6">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <Check
                        size={14}
                        className={plan.popular ? "text-dark" : "text-gold"}
                      />
                      <span
                        className={`text-sm ${
                          plan.popular ? "text-dark/80" : "text-white/70"
                        }`}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/booking"
                  className={`block text-center py-3 font-semibold text-sm transition-colors ${
                    plan.popular
                      ? "bg-dark text-white hover:bg-dark-light"
                      : "bg-gold text-dark hover:bg-gold-light"
                  }`}
                >
                  Join Now
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Prices */}
      <section className="pb-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-display font-bold mb-8">Service Prices</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((category, i) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <h3 className="text-gold text-sm tracking-widest mb-4">
                  {category.category.toUpperCase()}
                </h3>
                <div className="space-y-3">
                  {category.items.map((item) => (
                    <div
                      key={item.name}
                      className="flex items-center justify-between pb-3 border-b border-white/10"
                    >
                      <span className="text-white/80">{item.name}</span>
                      <span className="font-display">Rp {item.price}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-dark-light">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-display font-bold mb-4">
            Ready to Look Your Best?
          </h2>
          <p className="text-white/60 mb-6 max-w-md mx-auto">
            Book appointment sekarang dan rasakan grooming premium.
          </p>
          <Link
            href="/booking"
            className="bg-gold text-dark px-6 py-3 font-semibold inline-flex items-center gap-2 hover:bg-gold-light transition-colors"
          >
            Book Appointment <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
