"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const services = [
  { id: "classic", name: "Classic Haircut", price: "75.000" },
  { id: "premium", name: "Premium Haircut", price: "120.000" },
  { id: "shave", name: "Hot Towel Shave", price: "100.000" },
  { id: "beard", name: "Beard Grooming", price: "80.000" },
  { id: "color", name: "Hair Coloring", price: "150.000" },
];

const barbers = [
  { id: "aldo", name: "Master Aldo" },
  { id: "ricky", name: "Ricky" },
  { id: "dimas", name: "Dimas" },
  { id: "farhan", name: "Farhan" },
];

const times = ["10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00"];

export default function BookingPage() {
  const [step, setStep] = useState(1);
  const [service, setService] = useState("");
  const [barber, setBarber] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const dates = Array.from({ length: 7 }, (_, i) => {
    const d = new Date();
    d.setDate(d.getDate() + i);
    return {
      value: d.toISOString().split("T")[0],
      day: d.toLocaleDateString("id-ID", { weekday: "short" }),
      date: d.getDate(),
    };
  });

  const submit = () => {
    const s = services.find((x) => x.id === service);
    const b = barbers.find((x) => x.id === barber);
    const msg = `Halo, saya ingin booking:\n\nNama: ${name}\nHP: ${phone}\nLayanan: ${s?.name}\nBarber: ${b?.name}\nTanggal: ${date}\nWaktu: ${time}`;
    window.open(`https://wa.me/6221123456789?text=${encodeURIComponent(msg)}`, "_blank");
  };

  const canNext = () => {
    if (step === 1) return !!service;
    if (step === 2) return !!barber;
    if (step === 3) return !!date && !!time;
    if (step === 4) return !!name && !!phone;
    return false;
  };

  return (
    <>
      <Header />

      <section className="pt-16 bg-[#0a0a0a] min-h-screen">
        <div className="max-w-2xl mx-auto px-6 py-24">
          <div className="text-center mb-16">
            <p className="text-[#d4af37] text-sm tracking-[0.2em] mb-4">BOOKING</p>
            <h1 className="text-5xl font-bold mb-6">Book Appointment</h1>
            <p className="text-[#888]">Jadwalkan kunjungan Anda dalam beberapa langkah.</p>
          </div>

          {/* Steps */}
          <div className="flex justify-center gap-4 mb-12">
            {[1, 2, 3, 4].map((s) => (
              <div
                key={s}
                className={`w-10 h-10 flex items-center justify-center text-sm font-semibold ${
                  step >= s ? "bg-[#d4af37] text-black" : "bg-[#222] text-[#666]"
                }`}
              >
                {step > s ? "✓" : s}
              </div>
            ))}
          </div>

          {/* Form */}
          <div className="bg-[#111] border border-[#222] p-8">
            {step === 1 && (
              <>
                <h2 className="text-xl font-bold mb-6">Pilih Layanan</h2>
                <div className="space-y-3">
                  {services.map((s) => (
                    <button
                      key={s.id}
                      onClick={() => setService(s.id)}
                      className={`w-full p-5 text-left flex justify-between items-center transition-colors ${
                        service === s.id
                          ? "bg-[#d4af37]/10 border-2 border-[#d4af37]"
                          : "bg-[#0a0a0a] border border-[#222] hover:border-[#444]"
                      }`}
                    >
                      <span>{s.name}</span>
                      <span className="text-[#d4af37] font-bold">Rp {s.price}</span>
                    </button>
                  ))}
                </div>
              </>
            )}

            {step === 2 && (
              <>
                <h2 className="text-xl font-bold mb-6">Pilih Barber</h2>
                <div className="grid grid-cols-2 gap-4">
                  {barbers.map((b) => (
                    <button
                      key={b.id}
                      onClick={() => setBarber(b.id)}
                      className={`p-6 text-center transition-colors ${
                        barber === b.id
                          ? "bg-[#d4af37]/10 border-2 border-[#d4af37]"
                          : "bg-[#0a0a0a] border border-[#222] hover:border-[#444]"
                      }`}
                    >
                      <div className="w-16 h-16 bg-[#222] mx-auto mb-4 flex items-center justify-center">
                        <span className="text-2xl font-bold text-[#333]">{b.name[0]}</span>
                      </div>
                      <p className="font-semibold">{b.name}</p>
                    </button>
                  ))}
                </div>
              </>
            )}

            {step === 3 && (
              <>
                <h2 className="text-xl font-bold mb-6">Pilih Tanggal & Waktu</h2>
                <div className="mb-8">
                  <p className="text-[#888] text-sm mb-4">Tanggal</p>
                  <div className="grid grid-cols-7 gap-2">
                    {dates.map((d) => (
                      <button
                        key={d.value}
                        onClick={() => setDate(d.value)}
                        className={`p-3 text-center transition-colors ${
                          date === d.value
                            ? "bg-[#d4af37] text-black"
                            : "bg-[#0a0a0a] border border-[#222] hover:border-[#444]"
                        }`}
                      >
                        <p className="text-xs mb-1">{d.day}</p>
                        <p className="font-bold">{d.date}</p>
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-[#888] text-sm mb-4">Waktu</p>
                  <div className="flex flex-wrap gap-2">
                    {times.map((t) => (
                      <button
                        key={t}
                        onClick={() => setTime(t)}
                        className={`px-5 py-3 transition-colors ${
                          time === t
                            ? "bg-[#d4af37] text-black"
                            : "bg-[#0a0a0a] border border-[#222] hover:border-[#444]"
                        }`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>
              </>
            )}

            {step === 4 && (
              <>
                <h2 className="text-xl font-bold mb-6">Data Diri</h2>
                <div className="space-y-4 mb-8">
                  <div>
                    <label className="block text-[#888] text-sm mb-2">Nama Lengkap</label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-[#0a0a0a] border border-[#222] p-4 text-white focus:border-[#d4af37] focus:outline-none"
                      placeholder="Nama Anda"
                    />
                  </div>
                  <div>
                    <label className="block text-[#888] text-sm mb-2">Nomor HP</label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full bg-[#0a0a0a] border border-[#222] p-4 text-white focus:border-[#d4af37] focus:outline-none"
                      placeholder="08xxxxxxxxxx"
                    />
                  </div>
                </div>
                <div className="bg-[#0a0a0a] border border-[#222] p-6">
                  <p className="text-[#d4af37] text-sm tracking-[0.2em] mb-4">SUMMARY</p>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-[#888]">Layanan</span>
                      <span>{services.find((x) => x.id === service)?.name}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#888]">Barber</span>
                      <span>{barbers.find((x) => x.id === barber)?.name}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#888]">Tanggal</span>
                      <span>{date}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#888]">Waktu</span>
                      <span>{time}</span>
                    </div>
                    <div className="flex justify-between pt-4 border-t border-[#222] mt-4">
                      <span className="text-[#888]">Total</span>
                      <span className="text-[#d4af37] font-bold text-lg">
                        Rp {services.find((x) => x.id === service)?.price}
                      </span>
                    </div>
                  </div>
                </div>
              </>
            )}

            {/* Navigation */}
            <div className="flex justify-between mt-8 pt-8 border-t border-[#222]">
              {step > 1 ? (
                <button onClick={() => setStep(step - 1)} className="text-[#888] hover:text-white">
                  ← Kembali
                </button>
              ) : (
                <div />
              )}
              {step < 4 ? (
                <button
                  onClick={() => setStep(step + 1)}
                  disabled={!canNext()}
                  className="bg-[#d4af37] text-black font-semibold px-8 py-3 disabled:opacity-30 disabled:cursor-not-allowed"
                >
                  Lanjut →
                </button>
              ) : (
                <button
                  onClick={submit}
                  disabled={!canNext()}
                  className="bg-[#d4af37] text-black font-semibold px-8 py-3 disabled:opacity-30 disabled:cursor-not-allowed"
                >
                  Book via WhatsApp
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
