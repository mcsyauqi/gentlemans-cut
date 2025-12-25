"use client";

import { useState } from "react";

const services = [
  { id: "classic", name: "Classic Haircut", price: "75.000" },
  { id: "premium", name: "Premium Haircut", price: "120.000" },
  { id: "shave", name: "Hot Towel Shave", price: "100.000" },
  { id: "beard", name: "Beard Grooming", price: "80.000" },
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
    return d.toISOString().split("T")[0];
  });

  const submit = () => {
    const s = services.find((x) => x.id === service);
    const b = barbers.find((x) => x.id === barber);
    const msg = `Booking:\nNama: ${name}\nHP: ${phone}\nLayanan: ${s?.name}\nBarber: ${b?.name}\nTanggal: ${date}\nWaktu: ${time}`;
    window.open(`https://wa.me/6221123456789?text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <div className="pt-14">
      <section className="py-16">
        <div className="max-w-md mx-auto px-4">
          <div className="text-center mb-10">
            <p className="text-[#C9A962] text-sm tracking-widest mb-2">BOOKING</p>
            <h1 className="text-4xl font-bold mb-4">Book Appointment</h1>
          </div>

          {/* Progress */}
          <div className="flex justify-center gap-2 mb-8">
            {[1, 2, 3, 4].map((s) => (
              <div
                key={s}
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm ${
                  step >= s ? "bg-[#C9A962] text-black" : "bg-white/10 text-white/40"
                }`}
              >
                {s}
              </div>
            ))}
          </div>

          <div className="bg-white/5 p-6">
            {step === 1 && (
              <>
                <h2 className="font-bold mb-4">Pilih Layanan</h2>
                <div className="space-y-2">
                  {services.map((s) => (
                    <button
                      key={s.id}
                      onClick={() => setService(s.id)}
                      className={`w-full p-4 text-left flex justify-between ${
                        service === s.id ? "bg-[#C9A962]/20 border border-[#C9A962]" : "bg-white/5"
                      }`}
                    >
                      <span>{s.name}</span>
                      <span className="text-[#C9A962]">Rp {s.price}</span>
                    </button>
                  ))}
                </div>
              </>
            )}

            {step === 2 && (
              <>
                <h2 className="font-bold mb-4">Pilih Barber</h2>
                <div className="space-y-2">
                  {barbers.map((b) => (
                    <button
                      key={b.id}
                      onClick={() => setBarber(b.id)}
                      className={`w-full p-4 text-left ${
                        barber === b.id ? "bg-[#C9A962]/20 border border-[#C9A962]" : "bg-white/5"
                      }`}
                    >
                      {b.name}
                    </button>
                  ))}
                </div>
              </>
            )}

            {step === 3 && (
              <>
                <h2 className="font-bold mb-4">Pilih Tanggal & Waktu</h2>
                <p className="text-white/50 text-sm mb-2">Tanggal</p>
                <div className="grid grid-cols-7 gap-1 mb-4">
                  {dates.map((d) => (
                    <button
                      key={d}
                      onClick={() => setDate(d)}
                      className={`p-2 text-xs text-center ${
                        date === d ? "bg-[#C9A962] text-black" : "bg-white/5"
                      }`}
                    >
                      {new Date(d).getDate()}
                    </button>
                  ))}
                </div>
                <p className="text-white/50 text-sm mb-2">Waktu</p>
                <div className="flex flex-wrap gap-2">
                  {times.map((t) => (
                    <button
                      key={t}
                      onClick={() => setTime(t)}
                      className={`px-3 py-2 text-sm ${
                        time === t ? "bg-[#C9A962] text-black" : "bg-white/5"
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </>
            )}

            {step === 4 && (
              <>
                <h2 className="font-bold mb-4">Data Diri</h2>
                <div className="space-y-4">
                  <input
                    type="text"
                    placeholder="Nama"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 p-3 text-white"
                  />
                  <input
                    type="tel"
                    placeholder="No. HP"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 p-3 text-white"
                  />
                </div>
                <div className="mt-6 p-4 bg-white/5 text-sm">
                  <p className="text-[#C9A962] mb-2">Summary</p>
                  <p>Layanan: {services.find((x) => x.id === service)?.name}</p>
                  <p>Barber: {barbers.find((x) => x.id === barber)?.name}</p>
                  <p>Tanggal: {date}</p>
                  <p>Waktu: {time}</p>
                </div>
              </>
            )}

            <div className="flex justify-between mt-6">
              {step > 1 ? (
                <button onClick={() => setStep(step - 1)} className="text-white/50">
                  ← Back
                </button>
              ) : (
                <div />
              )}
              {step < 4 ? (
                <button
                  onClick={() => setStep(step + 1)}
                  disabled={
                    (step === 1 && !service) ||
                    (step === 2 && !barber) ||
                    (step === 3 && (!date || !time))
                  }
                  className="bg-[#C9A962] text-black px-6 py-2 disabled:opacity-50"
                >
                  Next →
                </button>
              ) : (
                <button
                  onClick={submit}
                  disabled={!name || !phone}
                  className="bg-[#C9A962] text-black px-6 py-2 disabled:opacity-50"
                >
                  Book via WA
                </button>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
