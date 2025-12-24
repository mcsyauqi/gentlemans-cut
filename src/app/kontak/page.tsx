"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";

export default function KontakPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
    setForm({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  return (
    <>
      <section className="bg-[#1A1A2E] pt-24 pb-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-4xl md:text-5xl font-bold text-white font-heading">HUBUNGI KAMI</h1>
            <div className="w-16 h-1 bg-[#C9A962] mx-auto mt-3 mb-4"></div>
            <p className="text-gray-300">Punya pertanyaan atau masukan? Kami siap membantu</p>
          </motion.div>
        </div>
      </section>

      <section className="py-12 bg-[#F5F5F5]">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold text-[#1A1A2E] font-heading mb-6">INFORMASI KONTAK</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-[#C9A962] rounded-lg flex items-center justify-center shrink-0"><MapPin className="w-5 h-5 text-[#1A1A2E]" /></div>
                  <div><div className="font-bold text-[#1A1A2E] text-sm">Alamat</div><div className="text-gray-600 text-sm">Jl. Sudirman No. 123, Jakarta Pusat 10220</div></div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-[#C9A962] rounded-lg flex items-center justify-center shrink-0"><Phone className="w-5 h-5 text-[#1A1A2E]" /></div>
                  <div><div className="font-bold text-[#1A1A2E] text-sm">Telepon</div><div className="text-gray-600 text-sm">+62 21 1234 5678 / +62 812 3456 7890</div></div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-[#C9A962] rounded-lg flex items-center justify-center shrink-0"><Mail className="w-5 h-5 text-[#1A1A2E]" /></div>
                  <div><div className="font-bold text-[#1A1A2E] text-sm">Email</div><div className="text-gray-600 text-sm">info@gentlemanscut.id</div></div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-[#C9A962] rounded-lg flex items-center justify-center shrink-0"><Clock className="w-5 h-5 text-[#1A1A2E]" /></div>
                  <div><div className="font-bold text-[#1A1A2E] text-sm">Jam Operasional</div><div className="text-gray-600 text-sm">Senin - Minggu, 10:00 - 21:00 WIB</div></div>
                </div>
              </div>
              <div className="mt-6 bg-[#1A1A2E] rounded-lg aspect-video flex items-center justify-center">
                <div className="text-center"><MapPin className="w-10 h-10 text-[#C9A962]/50 mx-auto mb-2" /><div className="text-gray-400 text-sm">Google Maps</div></div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#1A1A2E] font-heading mb-6">KIRIM PESAN</h2>
              <form onSubmit={handleSubmit} className="bg-white rounded-lg p-5 shadow-sm space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div><label className="block text-sm font-medium text-gray-700 mb-1">Nama *</label><input type="text" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full p-2.5 border-2 border-gray-200 rounded-lg focus:border-[#C9A962] focus:outline-none text-sm" /></div>
                  <div><label className="block text-sm font-medium text-gray-700 mb-1">Telepon *</label><input type="tel" required value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="w-full p-2.5 border-2 border-gray-200 rounded-lg focus:border-[#C9A962] focus:outline-none text-sm" /></div>
                </div>
                <div><label className="block text-sm font-medium text-gray-700 mb-1">Email *</label><input type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full p-2.5 border-2 border-gray-200 rounded-lg focus:border-[#C9A962] focus:outline-none text-sm" /></div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Subjek *</label>
                  <select required value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} className="w-full p-2.5 border-2 border-gray-200 rounded-lg focus:border-[#C9A962] focus:outline-none text-sm">
                    <option value="">Pilih subjek</option>
                    <option value="booking">Pertanyaan Booking</option>
                    <option value="membership">Pertanyaan Membership</option>
                    <option value="feedback">Keluhan/Masukan</option>
                    <option value="partnership">Kerjasama</option>
                    <option value="career">Karir</option>
                    <option value="other">Lainnya</option>
                  </select>
                </div>
                <div><label className="block text-sm font-medium text-gray-700 mb-1">Pesan *</label><textarea required value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="w-full p-2.5 border-2 border-gray-200 rounded-lg focus:border-[#C9A962] focus:outline-none text-sm" rows={4} /></div>
                <button type="submit" className="w-full bg-[#C9A962] text-[#1A1A2E] py-2.5 rounded-lg font-bold flex items-center justify-center gap-2 hover:bg-[#b8983e] transition-colors">
                  <Send className="w-4 h-4" /> Kirim Pesan
                </button>
                {sent && <div className="p-3 bg-green-100 text-green-700 rounded-lg text-center text-sm">Pesan berhasil dikirim!</div>}
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-[#1A1A2E]">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-white font-heading text-center mb-2">PERTANYAAN UMUM</h2>
          <div className="w-16 h-1 bg-[#C9A962] mx-auto mb-6"></div>
          <div className="space-y-3">
            {[
              { q: "Apakah harus booking terlebih dahulu?", a: "Tidak wajib, tapi sangat disarankan untuk menghindari antrian panjang." },
              { q: "Berapa lama waktu tunggu jika walk-in?", a: "Di jam sibuk bisa mencapai 30-60 menit." },
              { q: "Apakah ada layanan untuk anak-anak?", a: "Ya, Kids Haircut untuk anak di bawah 12 tahun dengan harga Rp 50.000." },
              { q: "Metode pembayaran apa saja?", a: "Tunai, kartu debit/kredit, QRIS, dan transfer bank." },
              { q: "Bagaimana cara menjadi member?", a: "Daftar langsung di tempat atau melalui halaman Booking website." },
            ].map((faq) => (
              <div key={faq.q} className="bg-white/5 border border-white/10 rounded-lg p-4">
                <div className="font-bold text-[#C9A962] text-sm mb-1">{faq.q}</div>
                <div className="text-gray-300 text-sm">{faq.a}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
