"use client";

import Link from "next/link";
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
  const [menuOpen, setMenuOpen] = useState(false);
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
    return { value: d.toISOString().split("T")[0], day: d.toLocaleDateString("id-ID", { weekday: "short" }), date: d.getDate() };
  });

  const submit = () => {
    const s = services.find((x) => x.id === service);
    const b = barbers.find((x) => x.id === barber);
    const msg = `Booking:\nNama: ${name}\nHP: ${phone}\nLayanan: ${s?.name}\nBarber: ${b?.name}\nTanggal: ${date}\nWaktu: ${time}`;
    window.open(`https://wa.me/6221123456789?text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/95 border-b border-neutral-800">
        <div className="flex items-center justify-between h-[60px] px-[20px] max-w-[1200px] mx-auto">
          <Link href="/" className="text-[#b8960c] text-[18px] font-bold tracking-wider">GENTLEMAN'S CUT</Link>
          <div className="hidden md:flex items-center gap-[32px]">
            <Link href="/" className="text-[14px] text-neutral-400 hover:text-white">Home</Link>
            <Link href="/layanan" className="text-[14px] text-neutral-400 hover:text-white">Layanan</Link>
            <Link href="/barber" className="text-[14px] text-neutral-400 hover:text-white">Barber</Link>
            <Link href="/galeri" className="text-[14px] text-neutral-400 hover:text-white">Galeri</Link>
            <Link href="/harga" className="text-[14px] text-neutral-400 hover:text-white">Harga</Link>
            <Link href="/kontak" className="text-[14px] text-neutral-400 hover:text-white">Kontak</Link>
          </div>
          <span className="hidden md:block bg-[#b8960c] text-black text-[13px] font-semibold px-[20px] py-[10px]">BOOKING</span>
          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-[24px]">{menuOpen ? "✕" : "☰"}</button>
        </div>
      </nav>

      {/* Content */}
      <section className="pt-[60px] min-h-screen">
        <div className="max-w-[600px] mx-auto px-[20px] py-[80px]">
          <div className="text-center mb-[48px]">
            <p className="text-[#b8960c] text-[12px] tracking-[4px] mb-[12px]">BOOKING</p>
            <h1 className="text-[48px] font-bold mb-[16px]">Book Appointment</h1>
          </div>

          {/* Steps */}
          <div className="flex justify-center gap-[16px] mb-[48px]">
            {[1, 2, 3, 4].map((s) => (
              <div key={s} className={`w-[40px] h-[40px] flex items-center justify-center text-[14px] font-semibold ${step >= s ? "bg-[#b8960c] text-black" : "bg-neutral-800 text-neutral-500"}`}>
                {step > s ? "✓" : s}
              </div>
            ))}
          </div>

          {/* Form */}
          <div className="bg-neutral-900 border border-neutral-800 p-[32px]">
            {step === 1 && (
              <>
                <h2 className="text-[20px] font-bold mb-[24px]">Pilih Layanan</h2>
                <div className="space-y-[12px]">
                  {services.map((s) => (
                    <button key={s.id} onClick={() => setService(s.id)} className={`w-full p-[20px] text-left flex justify-between ${service === s.id ? "bg-[#b8960c]/20 border-2 border-[#b8960c]" : "bg-neutral-800 border border-neutral-700"}`}>
                      <span>{s.name}</span>
                      <span className="text-[#b8960c] font-bold">Rp {s.price}</span>
                    </button>
                  ))}
                </div>
              </>
            )}

            {step === 2 && (
              <>
                <h2 className="text-[20px] font-bold mb-[24px]">Pilih Barber</h2>
                <div className="grid grid-cols-2 gap-[12px]">
                  {barbers.map((b) => (
                    <button key={b.id} onClick={() => setBarber(b.id)} className={`p-[20px] text-center ${barber === b.id ? "bg-[#b8960c]/20 border-2 border-[#b8960c]" : "bg-neutral-800 border border-neutral-700"}`}>
                      <div className="w-[50px] h-[50px] bg-neutral-700 mx-auto mb-[12px] flex items-center justify-center text-[20px] font-bold text-neutral-500">{b.name[0]}</div>
                      <p className="font-semibold">{b.name}</p>
                    </button>
                  ))}
                </div>
              </>
            )}

            {step === 3 && (
              <>
                <h2 className="text-[20px] font-bold mb-[24px]">Pilih Tanggal & Waktu</h2>
                <p className="text-neutral-500 text-[14px] mb-[12px]">Tanggal</p>
                <div className="grid grid-cols-7 gap-[8px] mb-[24px]">
                  {dates.map((d) => (
                    <button key={d.value} onClick={() => setDate(d.value)} className={`p-[12px] text-center ${date === d.value ? "bg-[#b8960c] text-black" : "bg-neutral-800"}`}>
                      <p className="text-[11px]">{d.day}</p>
                      <p className="font-bold">{d.date}</p>
                    </button>
                  ))}
                </div>
                <p className="text-neutral-500 text-[14px] mb-[12px]">Waktu</p>
                <div className="flex flex-wrap gap-[8px]">
                  {times.map((t) => (
                    <button key={t} onClick={() => setTime(t)} className={`px-[16px] py-[12px] ${time === t ? "bg-[#b8960c] text-black" : "bg-neutral-800"}`}>
                      {t}
                    </button>
                  ))}
                </div>
              </>
            )}

            {step === 4 && (
              <>
                <h2 className="text-[20px] font-bold mb-[24px]">Data Diri</h2>
                <div className="space-y-[16px] mb-[24px]">
                  <input type="text" placeholder="Nama" value={name} onChange={(e) => setName(e.target.value)} className="w-full bg-neutral-800 border border-neutral-700 p-[16px] text-white" />
                  <input type="tel" placeholder="No. HP" value={phone} onChange={(e) => setPhone(e.target.value)} className="w-full bg-neutral-800 border border-neutral-700 p-[16px] text-white" />
                </div>
                <div className="bg-neutral-800 p-[20px]">
                  <p className="text-[#b8960c] text-[12px] tracking-[2px] mb-[16px]">SUMMARY</p>
                  <div className="space-y-[8px] text-[14px]">
                    <div className="flex justify-between"><span className="text-neutral-500">Layanan</span><span>{services.find((x) => x.id === service)?.name}</span></div>
                    <div className="flex justify-between"><span className="text-neutral-500">Barber</span><span>{barbers.find((x) => x.id === barber)?.name}</span></div>
                    <div className="flex justify-between"><span className="text-neutral-500">Tanggal</span><span>{date}</span></div>
                    <div className="flex justify-between"><span className="text-neutral-500">Waktu</span><span>{time}</span></div>
                    <div className="flex justify-between pt-[12px] border-t border-neutral-700"><span className="text-neutral-500">Total</span><span className="text-[#b8960c] font-bold">Rp {services.find((x) => x.id === service)?.price}</span></div>
                  </div>
                </div>
              </>
            )}

            {/* Nav */}
            <div className="flex justify-between mt-[32px] pt-[24px] border-t border-neutral-800">
              {step > 1 ? <button onClick={() => setStep(step - 1)} className="text-neutral-500">← Back</button> : <div />}
              {step < 4 ? (
                <button onClick={() => setStep(step + 1)} disabled={(step === 1 && !service) || (step === 2 && !barber) || (step === 3 && (!date || !time))} className="bg-[#b8960c] text-black font-semibold px-[32px] py-[14px] disabled:opacity-30">
                  Next →
                </button>
              ) : (
                <button onClick={submit} disabled={!name || !phone} className="bg-[#b8960c] text-black font-semibold px-[32px] py-[14px] disabled:opacity-30">
                  Book via WA
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-neutral-800">
        <div className="max-w-[1200px] mx-auto px-[20px] py-[40px]">
          <div className="flex flex-col md:flex-row justify-between items-center gap-[16px] text-[12px] text-neutral-600">
            <p>© 2025 Gentleman's Cut</p>
            <p>Made with ❤️ by <a href="https://creativism.id" target="_blank" className="text-[#b8960c]">Creativism Digital Marketing Agency</a></p>
          </div>
        </div>
      </footer>
    </div>
  );
}
