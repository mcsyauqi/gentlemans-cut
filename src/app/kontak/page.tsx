"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send, Instagram, Facebook, MessageCircle } from "lucide-react";

export default function KontakPage() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  return (
    <>
      {/* Hero Section */}
      <section className="bg-[#1A1A2E] pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
              HUBUNGI KAMI
            </h1>
            <div className="w-20 h-1 bg-[#C9A962] mx-auto mb-6" />
            <p className="text-gray-300 max-w-xl mx-auto">
              Punya pertanyaan atau ingin memberikan masukan? Kami siap membantu
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-20 bg-[#F5F5F5]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Contact Info */}
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="text-2xl md:text-3xl font-bold text-[#1A1A2E] mb-8" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                INFORMASI KONTAK
              </h2>

              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 bg-[#C9A962] rounded-lg flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-[#1A1A2E]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#1A1A2E] text-sm mb-1">Alamat</h3>
                    <p className="text-gray-600 text-sm">Jl. Sudirman No. 123, Lantai 2<br />Jakarta Pusat 10220</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 bg-[#C9A962] rounded-lg flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-[#1A1A2E]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#1A1A2E] text-sm mb-1">Telepon</h3>
                    <p className="text-gray-600 text-sm">+62 21 1234 5678<br />+62 812 3456 7890 (WhatsApp)</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 bg-[#C9A962] rounded-lg flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-[#1A1A2E]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#1A1A2E] text-sm mb-1">Email</h3>
                    <p className="text-gray-600 text-sm">info@gentlemanscut.id<br />booking@gentlemanscut.id</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 bg-[#C9A962] rounded-lg flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-[#1A1A2E]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#1A1A2E] text-sm mb-1">Jam Operasional</h3>
                    <p className="text-gray-600 text-sm">Senin - Minggu<br />10:00 - 21:00 WIB</p>
                    <p className="text-[#C9A962] text-xs mt-1 font-medium">Buka setiap hari termasuk hari libur!</p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="mt-8">
                <h3 className="font-bold text-[#1A1A2E] text-sm mb-4">Ikuti Kami</h3>
                <div className="flex gap-3">
                  {[Instagram, Facebook, MessageCircle].map((Icon, i) => (
                    <a key={i} href="#" className="w-11 h-11 bg-[#1A1A2E] rounded-lg flex items-center justify-center hover:bg-[#C9A962] transition-colors group">
                      <Icon className="w-5 h-5 text-[#C9A962] group-hover:text-[#1A1A2E]" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="mt-8 bg-[#1A1A2E] rounded-xl aspect-video flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-[#C9A962]/50 mx-auto mb-2" />
                  <p className="text-gray-400 text-sm">Google Maps</p>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="text-2xl md:text-3xl font-bold text-[#1A1A2E] mb-8" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                KIRIM PESAN
              </h2>

              <form onSubmit={handleSubmit} className="bg-white rounded-xl p-6 shadow-md">
                <div className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Nama *</label>
                      <input type="text" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-[#C9A962] focus:outline-none text-sm" placeholder="Nama Anda" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">No. Telepon *</label>
                      <input type="tel" required value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-[#C9A962] focus:outline-none text-sm" placeholder="08xx-xxxx-xxxx" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                    <input type="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-[#C9A962] focus:outline-none text-sm" placeholder="email@contoh.com" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Subjek *</label>
                    <select required value={formData.subject} onChange={(e) => setFormData({ ...formData, subject: e.target.value })} className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-[#C9A962] focus:outline-none text-sm">
                      <option value="">Pilih subjek</option>
                      <option value="booking">Pertanyaan Booking</option>
                      <option value="membership">Pertanyaan Membership</option>
                      <option value="complaint">Keluhan/Masukan</option>
                      <option value="partnership">Kerjasama</option>
                      <option value="career">Karir</option>
                      <option value="other">Lainnya</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Pesan *</label>
                    <textarea required value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-[#C9A962] focus:outline-none text-sm" rows={4} placeholder="Tulis pesan Anda..." />
                  </div>

                  <button type="submit" className="w-full bg-[#C9A962] text-[#1A1A2E] py-3 rounded-lg font-bold flex items-center justify-center gap-2 hover:bg-[#b8983e] transition-colors">
                    <Send className="w-5 h-5" />
                    Kirim Pesan
                  </button>

                  {isSubmitted && (
                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="p-4 bg-green-100 text-green-700 rounded-lg text-center text-sm">
                      Pesan Anda berhasil dikirim!
                    </motion.div>
                  )}
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-20 bg-[#1A1A2E]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
              PERTANYAAN UMUM
            </h2>
            <div className="w-20 h-1 bg-[#C9A962] mx-auto" />
          </div>

          <div className="space-y-4">
            {[
              { q: "Apakah harus booking terlebih dahulu?", a: "Tidak wajib, tapi sangat disarankan untuk booking terlebih dahulu agar tidak perlu menunggu lama." },
              { q: "Berapa lama waktu tunggu jika walk-in?", a: "Di jam sibuk (weekend atau sore hari), waktu tunggu bisa mencapai 30-60 menit." },
              { q: "Apakah ada layanan untuk anak-anak?", a: "Ya, kami menyediakan Kids Haircut untuk anak di bawah 12 tahun dengan harga Rp 50.000." },
              { q: "Metode pembayaran apa saja yang diterima?", a: "Kami menerima tunai, kartu debit/kredit, QRIS, dan transfer bank." },
              { q: "Bagaimana cara menjadi member?", a: "Anda bisa mendaftar membership langsung di tempat atau melalui halaman Booking di website kami." },
            ].map((faq, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="bg-white/5 border border-white/10 rounded-lg p-5">
                <h3 className="font-bold text-[#C9A962] text-sm mb-2">{faq.q}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
