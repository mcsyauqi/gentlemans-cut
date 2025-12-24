"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, User, Scissors, Check, Phone, ChevronRight } from "lucide-react";

const services = [
  { id: 1, name: "Haircut Classic", price: 75000, time: "30 menit" },
  { id: 2, name: "Haircut Premium", price: 120000, time: "45 menit" },
  { id: 3, name: "Shaving Classic", price: 50000, time: "20 menit" },
  { id: 4, name: "Hot Towel Shave", price: 100000, time: "40 menit" },
  { id: 5, name: "Hair Coloring", price: 150000, time: "60 menit" },
  { id: 6, name: "Kids Haircut", price: 50000, time: "25 menit" },
  { id: 7, name: "Beard Grooming", price: 80000, time: "30 menit" },
  { id: 8, name: "Hair Treatment", price: 200000, time: "60 menit" },
];

const barbers = [
  { id: 1, name: "Master Aldo", spec: "Classic Cut" },
  { id: 2, name: "Bro Ricky", spec: "Fade & Undercut" },
  { id: 3, name: "Bro Dimas", spec: "Modern Style" },
  { id: 4, name: "Bro Farhan", spec: "All-rounder" },
];

const times = ["10:00", "10:30", "11:00", "11:30", "12:00", "12:30", "13:00", "13:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00", "17:30", "18:00", "18:30", "19:00", "19:30", "20:00", "20:30"];

const fmt = (n: number) => new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", minimumFractionDigits: 0 }).format(n);

export default function BookingPage() {
  const [step, setStep] = useState(1);
  const [svc, setSvc] = useState<number[]>([]);
  const [barber, setBarber] = useState<number | null>(null);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [form, setForm] = useState({ name: "", phone: "", email: "", notes: "" });

  const toggle = (id: number) => setSvc((p) => (p.includes(id) ? p.filter((x) => x !== id) : [...p, id]));
  const total = svc.reduce((t, id) => t + (services.find((s) => s.id === id)?.price || 0), 0);
  const minDate = new Date().toISOString().split("T")[0];
  const canNext = () => {
    if (step === 1) return svc.length > 0;
    if (step === 2) return barber !== null;
    if (step === 3) return date && time;
    if (step === 4) return form.name && form.phone;
    return false;
  };

  const submit = () => {
    const svcNames = svc.map((id) => services.find((s) => s.id === id)?.name).join(", ");
    const barberName = barbers.find((b) => b.id === barber)?.name;
    const msg = `Halo Gentleman's Cut!\n\nLayanan: ${svcNames}\nBarber: ${barberName}\nTanggal: ${date}\nJam: ${time}\nTotal: ${fmt(total)}\n\nNama: ${form.name}\nHP: ${form.phone}\nEmail: ${form.email || "-"}\nCatatan: ${form.notes || "-"}`;
    window.open(`https://wa.me/6281234567890?text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <>
      <section className="bg-[#1A1A2E] pt-24 pb-10">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-4xl md:text-5xl font-bold text-white font-heading">BOOKING ONLINE</h1>
            <div className="w-16 h-1 bg-[#C9A962] mx-auto mt-3 mb-4"></div>
            <p className="text-gray-300">Pilih layanan, barber, dan jadwal yang Anda inginkan</p>
          </motion.div>
        </div>
      </section>

      <section className="py-10 bg-[#F5F5F5]">
        <div className="max-w-2xl mx-auto px-4">
          <div className="flex items-center justify-center gap-0 mb-8">
            {[1, 2, 3, 4].map((s, i) => (
              <div key={s} className="flex items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${step >= s ? "bg-[#C9A962] text-[#1A1A2E]" : "bg-gray-300 text-gray-500"}`}>
                  {step > s ? <Check className="w-4 h-4" /> : s}
                </div>
                {i < 3 && <div className={`w-10 md:w-16 h-0.5 ${step > s ? "bg-[#C9A962]" : "bg-gray-300"}`} />}
              </div>
            ))}
          </div>

          <motion.div key={step} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="bg-white rounded-lg p-5 shadow-sm">
            {step === 1 && (
              <>
                <div className="flex items-center gap-2 mb-4"><Scissors className="w-5 h-5 text-[#C9A962]" /><h2 className="text-lg font-bold text-[#1A1A2E] font-heading">PILIH LAYANAN</h2></div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {services.map((s) => (
                    <button key={s.id} onClick={() => toggle(s.id)} className={`p-3 rounded-lg border-2 text-left flex items-center justify-between ${svc.includes(s.id) ? "border-[#C9A962] bg-[#C9A962]/10" : "border-gray-200"}`}>
                      <div><div className="font-bold text-[#1A1A2E] text-sm">{s.name}</div><div className="text-gray-500 text-xs">{s.time}</div></div>
                      <div className="flex items-center gap-2">
                        <span className="text-[#C9A962] font-bold text-sm">{fmt(s.price)}</span>
                        <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${svc.includes(s.id) ? "border-[#C9A962] bg-[#C9A962]" : "border-gray-300"}`}>
                          {svc.includes(s.id) && <Check className="w-3 h-3 text-white" />}
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </>
            )}

            {step === 2 && (
              <>
                <div className="flex items-center gap-2 mb-4"><User className="w-5 h-5 text-[#C9A962]" /><h2 className="text-lg font-bold text-[#1A1A2E] font-heading">PILIH BARBER</h2></div>
                <div className="grid grid-cols-2 gap-3">
                  {barbers.map((b) => (
                    <button key={b.id} onClick={() => setBarber(b.id)} className={`p-4 rounded-lg border-2 text-center ${barber === b.id ? "border-[#C9A962] bg-[#C9A962]/10" : "border-gray-200"}`}>
                      <div className="w-12 h-12 mx-auto rounded-full bg-[#1A1A2E] flex items-center justify-center text-lg font-bold text-[#C9A962] font-heading mb-2">{b.name.split(" ").map((n) => n[0]).join("")}</div>
                      <div className="font-bold text-[#1A1A2E] text-sm">{b.name}</div>
                      <div className="text-gray-500 text-xs">{b.spec}</div>
                    </button>
                  ))}
                </div>
              </>
            )}

            {step === 3 && (
              <>
                <div className="flex items-center gap-2 mb-4"><Calendar className="w-5 h-5 text-[#C9A962]" /><h2 className="text-lg font-bold text-[#1A1A2E] font-heading">PILIH JADWAL</h2></div>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Tanggal</label>
                    <input type="date" min={minDate} value={date} onChange={(e) => setDate(e.target.value)} className="w-full p-2.5 border-2 border-gray-200 rounded-lg focus:border-[#C9A962] focus:outline-none" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Waktu</label>
                    <div className="grid grid-cols-4 sm:grid-cols-6 gap-2">
                      {times.map((t) => (
                        <button key={t} onClick={() => setTime(t)} className={`p-2 rounded-lg border-2 text-sm font-medium ${time === t ? "border-[#C9A962] bg-[#C9A962] text-[#1A1A2E]" : "border-gray-200"}`}>{t}</button>
                      ))}
                    </div>
                  </div>
                </div>
              </>
            )}

            {step === 4 && (
              <>
                <div className="flex items-center gap-2 mb-4"><Phone className="w-5 h-5 text-[#C9A962]" /><h2 className="text-lg font-bold text-[#1A1A2E] font-heading">DATA DIRI</h2></div>
                <div className="space-y-3">
                  <div><label className="block text-sm font-medium text-gray-700 mb-1">Nama *</label><input type="text" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full p-2.5 border-2 border-gray-200 rounded-lg focus:border-[#C9A962] focus:outline-none" placeholder="Nama lengkap" /></div>
                  <div><label className="block text-sm font-medium text-gray-700 mb-1">WhatsApp *</label><input type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="w-full p-2.5 border-2 border-gray-200 rounded-lg focus:border-[#C9A962] focus:outline-none" placeholder="08xx-xxxx-xxxx" /></div>
                  <div><label className="block text-sm font-medium text-gray-700 mb-1">Email</label><input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full p-2.5 border-2 border-gray-200 rounded-lg focus:border-[#C9A962] focus:outline-none" placeholder="email@contoh.com" /></div>
                  <div><label className="block text-sm font-medium text-gray-700 mb-1">Catatan</label><textarea value={form.notes} onChange={(e) => setForm({ ...form, notes: e.target.value })} className="w-full p-2.5 border-2 border-gray-200 rounded-lg focus:border-[#C9A962] focus:outline-none" rows={2} placeholder="Catatan tambahan..." /></div>
                </div>
                <div className="mt-4 p-4 bg-[#F5F5F5] rounded-lg text-sm">
                  <div className="font-bold text-[#1A1A2E] mb-2">Ringkasan</div>
                  <div className="space-y-1 text-gray-600">
                    <div className="flex justify-between"><span>Layanan:</span><span className="text-right">{svc.map((id) => services.find((s) => s.id === id)?.name).join(", ")}</span></div>
                    <div className="flex justify-between"><span>Barber:</span><span>{barbers.find((b) => b.id === barber)?.name}</span></div>
                    <div className="flex justify-between"><span>Tanggal:</span><span>{date}</span></div>
                    <div className="flex justify-between"><span>Waktu:</span><span>{time}</span></div>
                    <div className="flex justify-between font-bold text-[#1A1A2E] pt-2 border-t border-gray-300 mt-2"><span>Total:</span><span className="text-[#C9A962]">{fmt(total)}</span></div>
                  </div>
                </div>
              </>
            )}

            <div className="flex justify-between mt-6">
              {step > 1 && <button onClick={() => setStep(step - 1)} className="px-4 py-2 border-2 border-[#1A1A2E] text-[#1A1A2E] rounded font-bold text-sm">Kembali</button>}
              <div className="ml-auto">
                {step < 4 ? (
                  <button onClick={() => setStep(step + 1)} disabled={!canNext()} className={`px-4 py-2 rounded font-bold text-sm flex items-center gap-1 ${canNext() ? "bg-[#C9A962] text-[#1A1A2E]" : "bg-gray-300 text-gray-500 cursor-not-allowed"}`}>Lanjut <ChevronRight className="w-4 h-4" /></button>
                ) : (
                  <button onClick={submit} disabled={!canNext()} className={`px-5 py-2 rounded font-bold text-sm flex items-center gap-1 ${canNext() ? "bg-[#C9A962] text-[#1A1A2E]" : "bg-gray-300 text-gray-500 cursor-not-allowed"}`}><Phone className="w-4 h-4" /> Booking via WhatsApp</button>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
