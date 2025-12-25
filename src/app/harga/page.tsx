"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";

const memberships = [
  {
    name: "Silver",
    price: "200.000",
    period: "/bulan",
    desc: "Perfect for regular grooming needs",
    features: ["2 Haircuts per month", "10% off all services", "Priority booking", "Free styling products sample"],
    popular: false,
  },
  {
    name: "Gold",
    price: "350.000",
    period: "/bulan",
    desc: "Our most popular choice",
    features: ["4 Haircuts per month", "1 Free shave per month", "15% off all services", "Priority booking", "Free styling products", "Exclusive member events"],
    popular: true,
  },
  {
    name: "Platinum",
    price: "500.000",
    period: "/bulan",
    desc: "The ultimate grooming experience",
    features: ["Unlimited haircuts", "2 Free shaves per month", "20% off all services", "VIP priority booking", "Premium product kit monthly", "Private lounge access", "Complimentary beverages"],
    popular: false,
  },
];

const services = [
  { category: "Haircuts", items: [{ name: "Classic Haircut", price: "75.000" }, { name: "Premium Haircut", price: "120.000" }, { name: "Kids Haircut", price: "50.000" }, { name: "Senior Haircut", price: "60.000" }] },
  { category: "Shaves", items: [{ name: "Classic Shave", price: "50.000" }, { name: "Hot Towel Shave", price: "100.000" }, { name: "Beard Trim", price: "40.000" }, { name: "Beard Grooming", price: "80.000" }] },
  { category: "Treatments", items: [{ name: "Hair Coloring", price: "150.000" }, { name: "Hair Treatment", price: "200.000" }, { name: "Scalp Treatment", price: "120.000" }, { name: "Hair & Beard Combo", price: "180.000" }] },
];

export default function HargaPage() {
  return (
    <>
      <section className="pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-2xl">
            <p className="text-gold uppercase tracking-[0.3em] text-sm mb-3">Pricing</p>
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">Transparent Pricing</h1>
            <p className="text-white/60 text-lg">Quality grooming at fair prices. No hidden fees, just premium service.</p>
          </motion.div>
        </div>
      </section>

      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <h2 className="text-3xl font-display font-bold mb-8">Membership Plans</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {memberships.map((plan, i) => (
                <motion.div
                  key={plan.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`relative p-8 ${plan.popular ? "bg-gold text-black" : "bg-neutral-900"}`}
                >
                  {plan.popular && (
                    <div className="absolute -top-3 left-8 bg-black text-gold px-4 py-1 text-xs uppercase tracking-wider font-semibold">
                      Most Popular
                    </div>
                  )}
                  <h3 className="text-2xl font-display font-bold mb-2">{plan.name}</h3>
                  <p className={`text-sm mb-6 ${plan.popular ? "text-black/70" : "text-white/50"}`}>{plan.desc}</p>
                  <div className="flex items-baseline gap-1 mb-8">
                    <span className="text-sm">Rp</span>
                    <span className="text-5xl font-display font-bold">{plan.price}</span>
                    <span className={`text-sm ${plan.popular ? "text-black/60" : "text-white/40"}`}>{plan.period}</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3">
                        <Check size={16} className={plan.popular ? "text-black" : "text-gold"} />
                        <span className={`text-sm ${plan.popular ? "text-black/80" : "text-white/70"}`}>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/booking"
                    className={`block text-center py-4 font-semibold uppercase tracking-wider text-sm transition-colors ${
                      plan.popular ? "bg-black text-white hover:bg-neutral-800" : "bg-gold text-black hover:bg-white"
                    }`}
                  >
                    Join Now
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-display font-bold mb-8">Service Prices</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {services.map((category, i) => (
                <motion.div key={category.category} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                  <h3 className="text-gold uppercase tracking-wider text-sm font-semibold mb-6">{category.category}</h3>
                  <div className="space-y-4">
                    {category.items.map((item) => (
                      <div key={item.name} className="flex items-center justify-between pb-4 border-b border-white/10">
                        <span className="text-white/80">{item.name}</span>
                        <span className="font-display text-lg">Rp {item.price}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-neutral-900">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Ready to Look Your Best?</h2>
          <p className="text-white/60 mb-8 max-w-md mx-auto">Book your appointment now and experience premium grooming.</p>
          <Link href="/booking" className="inline-flex items-center gap-2 bg-gold text-black px-8 py-4 font-semibold uppercase tracking-wider hover:bg-white transition-colors">
            Book Appointment <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
