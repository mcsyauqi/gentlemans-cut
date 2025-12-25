"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Clock } from "lucide-react";

const services = [
  { name: "Classic Haircut", price: "75.000", time: "30 min", desc: "Potongan klasik dengan finishing premium dan styling wax." },
  { name: "Premium Haircut", price: "120.000", time: "45 min", desc: "Full service termasuk cuci, pijat kepala, potong, dan styling profesional." },
  { name: "Classic Shave", price: "50.000", time: "20 min", desc: "Cukur tradisional dengan pisau cukur untuk hasil bersih dan halus." },
  { name: "Hot Towel Shave", price: "100.000", time: "40 min", desc: "Pengalaman cukur mewah dengan hot towel dan aftercare premium." },
  { name: "Hair Coloring", price: "150.000", time: "60 min", desc: "Layanan pewarnaan profesional dengan produk berkualitas." },
  { name: "Kids Haircut", price: "50.000", time: "25 min", desc: "Potongan lembut untuk anak di bawah 12 tahun." },
  { name: "Beard Grooming", price: "80.000", time: "30 min", desc: "Trim, bentuk, dan kondisikan dengan beard oil premium." },
  { name: "Hair Treatment", price: "200.000", time: "60 min", desc: "Deep conditioning treatment untuk rambut sehat dan terhidrasi." },
];

export default function LayananPage() {
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
            <p className="text-gold text-sm tracking-widest mb-2">LAYANAN KAMI</p>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Premium Grooming Services
            </h1>
            <p className="text-white/60">
              Setiap layanan diberikan dengan presisi, perhatian, dan detail terbaik.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services List */}
      <section className="pb-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="space-y-3">
            {services.map((service, i) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <div className="bg-dark-card p-6 flex flex-col md:flex-row md:items-center gap-4 hover:bg-dark-lighter transition-colors group">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-lg font-semibold group-hover:text-gold transition-colors">
                        {service.name}
                      </h3>
                      <span className="flex items-center gap-1 text-white/40 text-sm">
                        <Clock size={14} /> {service.time}
                      </span>
                    </div>
                    <p className="text-white/50 text-sm">{service.desc}</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <p className="text-2xl font-display font-bold text-gold">
                      Rp {service.price}
                    </p>
                    <Link
                      href="/booking"
                      className="bg-gold text-dark px-5 py-2 font-semibold text-sm hover:bg-gold-light transition-colors whitespace-nowrap"
                    >
                      Book
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-gold">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-dark mb-4">
            Need Something Special?
          </h2>
          <p className="text-dark/70 mb-6 max-w-md mx-auto">
            Kami menyediakan paket grooming khusus untuk pernikahan, photoshoot, dan acara korporat.
          </p>
          <Link
            href="/kontak"
            className="bg-dark text-white px-6 py-3 font-semibold inline-flex items-center gap-2 hover:bg-dark-light transition-colors"
          >
            Contact Us <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
