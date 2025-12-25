"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Clock } from "lucide-react";

const services = [
  { name: "Classic Haircut", price: "75.000", time: "30 min", desc: "Traditional cut with precision finishing and premium wax styling." },
  { name: "Premium Haircut", price: "120.000", time: "45 min", desc: "Full service including wash, scalp massage, cut, and professional styling." },
  { name: "Classic Shave", price: "50.000", time: "20 min", desc: "Traditional straight razor shave for a clean, smooth finish." },
  { name: "Hot Towel Shave", price: "100.000", time: "40 min", desc: "Luxury shave experience with hot towels and premium aftercare." },
  { name: "Hair Coloring", price: "150.000", time: "60 min", desc: "Professional coloring service with quality products." },
  { name: "Kids Haircut", price: "50.000", time: "25 min", desc: "Gentle cuts for children under 12 in a fun environment." },
  { name: "Beard Grooming", price: "80.000", time: "30 min", desc: "Trim, shape, and condition with premium beard oils." },
  { name: "Hair Treatment", price: "200.000", time: "60 min", desc: "Deep conditioning treatment for healthy, revitalized hair." },
];

export default function LayananPage() {
  return (
    <>
      <section className="pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-2xl">
            <p className="text-gold uppercase tracking-[0.3em] text-sm mb-3">Our Services</p>
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">Premium Grooming Services</h1>
            <p className="text-white/60 text-lg">Every service delivered with precision, care, and attention to detail.</p>
          </motion.div>
        </div>
      </section>

      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid gap-4">
            {services.map((service, i) => (
              <motion.div key={service.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="group">
                <div className="bg-neutral-900 p-6 md:p-8 flex flex-col md:flex-row md:items-center gap-6 hover:bg-neutral-800 transition-colors">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl md:text-2xl font-display font-bold">{service.name}</h3>
                      <span className="flex items-center gap-1 text-white/40 text-sm">
                        <Clock size={14} /> {service.time}
                      </span>
                    </div>
                    <p className="text-white/50">{service.desc}</p>
                  </div>
                  <div className="flex items-center gap-6">
                    <p className="text-3xl font-display font-bold text-gold">Rp {service.price}</p>
                    <Link href="/booking" className="bg-gold text-black px-6 py-3 font-semibold uppercase tracking-wider text-sm hover:bg-white transition-colors whitespace-nowrap">
                      Book
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gold">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-black mb-4">Need Something Special?</h2>
          <p className="text-black/70 mb-8 max-w-md mx-auto">We offer custom grooming packages for weddings, photoshoots, and corporate events.</p>
          <Link href="/kontak" className="inline-flex items-center gap-2 bg-black text-white px-8 py-4 font-semibold uppercase tracking-wider hover:bg-neutral-800 transition-colors">
            Contact Us <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
