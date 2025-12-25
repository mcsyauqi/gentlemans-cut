"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Instagram, MessageCircle } from "lucide-react";

export default function KontakPage() {
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
            <p className="text-gold text-sm tracking-widest mb-2">HUBUNGI KAMI</p>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Contact Us
            </h1>
            <p className="text-white/60">
              Ada pertanyaan? Kami siap membantu. Hubungi kami kapan saja.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="pb-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="bg-dark-card p-6 md:p-8">
                <h2 className="text-xl font-display font-bold mb-6">Kirim Pesan</h2>

                <form className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-white/60 text-sm mb-2">Nama</label>
                      <input
                        type="text"
                        className="w-full bg-dark-lighter border border-white/10 px-4 py-3 text-white focus:border-gold focus:outline-none"
                        placeholder="Nama Anda"
                      />
                    </div>
                    <div>
                      <label className="block text-white/60 text-sm mb-2">Telepon</label>
                      <input
                        type="tel"
                        className="w-full bg-dark-lighter border border-white/10 px-4 py-3 text-white focus:border-gold focus:outline-none"
                        placeholder="08xxxxxxxxxx"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-white/60 text-sm mb-2">Email</label>
                    <input
                      type="email"
                      className="w-full bg-dark-lighter border border-white/10 px-4 py-3 text-white focus:border-gold focus:outline-none"
                      placeholder="email@contoh.com"
                    />
                  </div>

                  <div>
                    <label className="block text-white/60 text-sm mb-2">Subject</label>
                    <select className="w-full bg-dark-lighter border border-white/10 px-4 py-3 text-white focus:border-gold focus:outline-none">
                      <option value="">Pilih subject</option>
                      <option value="booking">Booking Inquiry</option>
                      <option value="membership">Membership</option>
                      <option value="career">Career Opportunity</option>
                      <option value="feedback">Feedback</option>
                      <option value="other">Lainnya</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-white/60 text-sm mb-2">Pesan</label>
                    <textarea
                      rows={4}
                      className="w-full bg-dark-lighter border border-white/10 px-4 py-3 text-white focus:border-gold focus:outline-none resize-none"
                      placeholder="Pesan Anda..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gold text-dark py-3 font-semibold hover:bg-gold-light transition-colors"
                  >
                    Kirim Pesan
                  </button>
                </form>
              </div>
            </motion.div>

            {/* Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {/* Map */}
              <div className="aspect-video bg-dark-lighter flex items-center justify-center">
                <p className="text-white/20 text-sm tracking-widest">MAP LOCATION</p>
              </div>

              {/* Info Cards */}
              <div className="grid gap-3">
                <div className="flex items-start gap-4 bg-dark-card p-4">
                  <MapPin className="text-gold mt-1 flex-shrink-0" size={20} />
                  <div>
                    <p className="font-semibold mb-1">Alamat</p>
                    <p className="text-white/60 text-sm">
                      Jl. Sudirman No. 123
                      <br />
                      Jakarta Pusat 10220
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-dark-card p-4">
                  <Clock className="text-gold mt-1 flex-shrink-0" size={20} />
                  <div>
                    <p className="font-semibold mb-1">Jam Buka</p>
                    <p className="text-white/60 text-sm">
                      Senin - Minggu
                      <br />
                      10:00 - 21:00
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-dark-card p-4">
                  <Phone className="text-gold mt-1 flex-shrink-0" size={20} />
                  <div>
                    <p className="font-semibold mb-1">Telepon</p>
                    <p className="text-white/60 text-sm">+62 21 1234 5678</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-dark-card p-4">
                  <Mail className="text-gold mt-1 flex-shrink-0" size={20} />
                  <div>
                    <p className="font-semibold mb-1">Email</p>
                    <p className="text-white/60 text-sm">info@gentlemanscut.id</p>
                  </div>
                </div>
              </div>

              {/* Social */}
              <div>
                <p className="font-semibold mb-3">Follow Us</p>
                <div className="flex gap-3">
                  <a
                    href="https://instagram.com/gentlemanscut"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-dark-card flex items-center justify-center text-white/60 hover:text-gold hover:bg-dark-lighter transition-colors"
                  >
                    <Instagram size={18} />
                  </a>
                  <a
                    href="https://wa.me/6221123456789"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-dark-card flex items-center justify-center text-white/60 hover:text-gold hover:bg-dark-lighter transition-colors"
                  >
                    <MessageCircle size={18} />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-gold">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-dark mb-4">
            Prefer to Book Directly?
          </h2>
          <p className="text-dark/70 mb-6 max-w-md mx-auto">
            Skip the form and book your appointment instantly.
          </p>
          <Link
            href="/booking"
            className="bg-dark text-white px-6 py-3 font-semibold inline-block hover:bg-dark-light transition-colors"
          >
            Book Now
          </Link>
        </div>
      </section>
    </>
  );
}
