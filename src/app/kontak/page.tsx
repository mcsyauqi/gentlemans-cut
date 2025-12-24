"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send, Instagram, Facebook, MessageCircle } from "lucide-react";

export default function KontakPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

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
              HUBUNGI KAMI
            </h1>
            <div className="w-24 h-1 bg-[#C9A962] mx-auto mb-6" />
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Punya pertanyaan atau ingin memberikan masukan? Kami siap membantu Anda
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2
                className="text-3xl font-bold text-[#1A1A2E] mb-8"
                style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.05em" }}
              >
                INFORMASI KONTAK
              </h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#C9A962] rounded-lg flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-[#1A1A2E]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#1A1A2E] mb-1">Alamat</h3>
                    <p className="text-gray-600">
                      Jl. Sudirman No. 123, Lantai 2<br />
                      Jakarta Pusat, DKI Jakarta 10220
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#C9A962] rounded-lg flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6 text-[#1A1A2E]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#1A1A2E] mb-1">Telepon</h3>
                    <p className="text-gray-600">+62 21 1234 5678</p>
                    <p className="text-gray-600">+62 812 3456 7890 (WhatsApp)</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#C9A962] rounded-lg flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6 text-[#1A1A2E]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#1A1A2E] mb-1">Email</h3>
                    <p className="text-gray-600">info@gentlemanscut.id</p>
                    <p className="text-gray-600">booking@gentlemanscut.id</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#C9A962] rounded-lg flex items-center justify-center shrink-0">
                    <Clock className="w-6 h-6 text-[#1A1A2E]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#1A1A2E] mb-1">Jam Operasional</h3>
                    <p className="text-gray-600">Senin - Minggu</p>
                    <p className="text-gray-600">10:00 - 21:00 WIB</p>
                    <p className="text-sm text-[#C9A962] mt-1">Buka setiap hari termasuk hari libur!</p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="mt-8">
                <h3 className="font-bold text-[#1A1A2E] mb-4">Ikuti Kami</h3>
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="w-12 h-12 bg-[#1A1A2E] rounded-lg flex items-center justify-center hover:bg-[#C9A962] transition-colors duration-300 group"
                  >
                    <Instagram className="w-6 h-6 text-[#C9A962] group-hover:text-[#1A1A2E]" />
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 bg-[#1A1A2E] rounded-lg flex items-center justify-center hover:bg-[#C9A962] transition-colors duration-300 group"
                  >
                    <Facebook className="w-6 h-6 text-[#C9A962] group-hover:text-[#1A1A2E]" />
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 bg-[#1A1A2E] rounded-lg flex items-center justify-center hover:bg-[#C9A962] transition-colors duration-300 group"
                  >
                    <MessageCircle className="w-6 h-6 text-[#C9A962] group-hover:text-[#1A1A2E]" />
                  </a>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="mt-8 bg-[#1A1A2E] rounded-xl aspect-video flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-16 h-16 text-[#C9A962]/50 mx-auto mb-4" />
                  <p className="text-gray-400">Google Maps</p>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2
                className="text-3xl font-bold text-[#1A1A2E] mb-8"
                style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.05em" }}
              >
                KIRIM PESAN
              </h2>

              <form onSubmit={handleSubmit} className="bg-white rounded-xl p-8 shadow-lg">
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Nama Lengkap *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-[#C9A962] focus:outline-none transition-colors duration-300"
                        placeholder="Masukkan nama Anda"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        No. Telepon *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-[#C9A962] focus:outline-none transition-colors duration-300"
                        placeholder="08xx-xxxx-xxxx"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-[#C9A962] focus:outline-none transition-colors duration-300"
                      placeholder="email@contoh.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Subjek *
                    </label>
                    <select
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-[#C9A962] focus:outline-none transition-colors duration-300"
                    >
                      <option value="">Pilih subjek</option>
                      <option value="booking">Pertanyaan Booking</option>
                      <option value="membership">Pertanyaan Membership</option>
                      <option value="complaint">Keluhan/Masukan</option>
                      <option value="partnership">Kerjasama/Partnership</option>
                      <option value="career">Karir/Lowongan</option>
                      <option value="other">Lainnya</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Pesan *
                    </label>
                    <textarea
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-[#C9A962] focus:outline-none transition-colors duration-300"
                      rows={5}
                      placeholder="Tulis pesan Anda di sini..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#C9A962] text-[#1A1A2E] py-4 rounded-lg font-bold flex items-center justify-center gap-2 hover:bg-[#b8983e] transition-colors duration-300"
                  >
                    <Send className="w-5 h-5" />
                    Kirim Pesan
                  </button>

                  {isSubmitted && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-4 bg-green-100 text-green-700 rounded-lg text-center"
                    >
                      Pesan Anda berhasil dikirim! Kami akan segera menghubungi Anda.
                    </motion.div>
                  )}
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-[#1A1A2E]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2
              className="text-4xl font-bold text-white mb-4"
              style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.05em" }}
            >
              PERTANYAAN UMUM
            </h2>
            <div className="w-24 h-1 bg-[#C9A962] mx-auto" />
          </motion.div>

          <div className="space-y-4">
            {[
              {
                q: "Apakah harus booking terlebih dahulu?",
                a: "Tidak wajib, tapi sangat disarankan untuk booking terlebih dahulu agar Anda tidak perlu menunggu lama. Booking bisa dilakukan via WhatsApp atau melalui website kami.",
              },
              {
                q: "Berapa lama waktu tunggu jika walk-in?",
                a: "Waktu tunggu bervariasi tergantung antrian. Di jam sibuk (weekend atau sore hari), waktu tunggu bisa mencapai 30-60 menit. Kami sarankan booking untuk menghindari antrian.",
              },
              {
                q: "Apakah ada layanan untuk anak-anak?",
                a: "Ya, kami menyediakan layanan Kids Haircut untuk anak di bawah 12 tahun dengan harga Rp 50.000. Tempat kami juga ramah anak dengan suasana yang menyenangkan.",
              },
              {
                q: "Metode pembayaran apa saja yang diterima?",
                a: "Kami menerima pembayaran tunai, kartu debit/kredit, QRIS, dan transfer bank (BCA, Mandiri, BNI, BRI).",
              },
              {
                q: "Bagaimana cara menjadi member?",
                a: "Anda bisa mendaftar membership langsung di tempat atau melalui halaman Booking di website kami. Pilih paket yang sesuai dan nikmati berbagai benefit menarik.",
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white/5 border border-white/10 rounded-lg p-6"
              >
                <h3 className="font-bold text-[#C9A962] mb-2">{faq.q}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
