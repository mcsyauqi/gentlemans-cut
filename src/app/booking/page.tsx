"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ArrowLeft, Check, Calendar, Clock, User, Scissors } from "lucide-react";

const services = [
  { id: "classic", name: "Classic Haircut", price: "75.000", duration: "30 min" },
  { id: "premium", name: "Premium Haircut", price: "120.000", duration: "45 min" },
  { id: "shave", name: "Hot Towel Shave", price: "100.000", duration: "40 min" },
  { id: "beard", name: "Beard Grooming", price: "80.000", duration: "30 min" },
  { id: "color", name: "Hair Coloring", price: "150.000", duration: "60 min" },
  { id: "treatment", name: "Hair Treatment", price: "200.000", duration: "60 min" },
];

const barbers = [
  { id: "aldo", name: "Master Aldo", specialty: "Classic & Executive" },
  { id: "ricky", name: "Ricky", specialty: "Fades & Modern" },
  { id: "dimas", name: "Dimas", specialty: "Creative & Trendy" },
  { id: "farhan", name: "Farhan", specialty: "All-Round" },
];

const timeSlots = [
  "10:00", "11:00", "12:00", "13:00", "14:00",
  "15:00", "16:00", "17:00", "18:00", "19:00", "20:00",
];

export default function BookingPage() {
  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState("");
  const [selectedBarber, setSelectedBarber] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const nextStep = () => setStep((s) => Math.min(s + 1, 4));
  const prevStep = () => setStep((s) => Math.max(s - 1, 1));

  const generateDates = () => {
    const dates = [];
    const today = new Date();
    for (let i = 0; i < 14; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      dates.push({
        value: date.toISOString().split("T")[0],
        day: date.toLocaleDateString("id-ID", { weekday: "short" }),
        date: date.getDate(),
        month: date.toLocaleDateString("id-ID", { month: "short" }),
      });
    }
    return dates;
  };

  const dates = generateDates();

  const handleSubmit = () => {
    const service = services.find((s) => s.id === selectedService);
    const barber = barbers.find((b) => b.id === selectedBarber);
    const message = `Halo, saya ingin booking:\n\nNama: ${name}\nNo. HP: ${phone}\nLayanan: ${service?.name}\nBarber: ${barber?.name}\nTanggal: ${selectedDate}\nWaktu: ${selectedTime}\n\nTerima kasih!`;
    const waUrl = `https://wa.me/6221123456789?text=${encodeURIComponent(message)}`;
    window.open(waUrl, "_blank");
  };

  const canProceed = () => {
    switch (step) {
      case 1: return selectedService !== "";
      case 2: return selectedBarber !== "";
      case 3: return selectedDate !== "" && selectedTime !== "";
      case 4: return name !== "" && phone !== "";
      default: return false;
    }
  };

  return (
    <>
      {/* Header */}
      <section className="pt-24 pb-8">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <p className="text-gold text-sm tracking-widest mb-2">RESERVASI</p>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Book Your Visit
            </h1>
            <p className="text-white/60">
              Jadwalkan appointment dalam beberapa langkah mudah.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="pb-16">
        <div className="max-w-3xl mx-auto px-4">
          {/* Progress Steps */}
          <div className="flex justify-center mb-8">
            <div className="flex items-center gap-3">
              {[1, 2, 3, 4].map((s) => (
                <div key={s} className="flex items-center gap-3">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold transition-colors ${
                      step >= s ? "bg-gold text-dark" : "bg-dark-lighter text-white/40"
                    }`}
                  >
                    {step > s ? <Check size={16} /> : s}
                  </div>
                  {s < 4 && (
                    <div
                      className={`w-8 h-0.5 ${
                        step > s ? "bg-gold" : "bg-dark-lighter"
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Form Content */}
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-dark-card p-6 md:p-8"
          >
            {/* Step 1: Service */}
            {step === 1 && (
              <>
                <div className="flex items-center gap-2 mb-6">
                  <Scissors className="text-gold" size={20} />
                  <h2 className="text-xl font-display font-bold">Pilih Layanan</h2>
                </div>
                <div className="grid md:grid-cols-2 gap-3">
                  {services.map((service) => (
                    <button
                      key={service.id}
                      onClick={() => setSelectedService(service.id)}
                      className={`p-4 text-left transition-colors border ${
                        selectedService === service.id
                          ? "border-gold bg-gold/10"
                          : "border-white/10 hover:border-white/30"
                      }`}
                    >
                      <div className="flex justify-between items-start mb-1">
                        <h3 className="font-semibold">{service.name}</h3>
                        <span className="text-gold font-display">Rp {service.price}</span>
                      </div>
                      <p className="text-white/40 text-sm">{service.duration}</p>
                    </button>
                  ))}
                </div>
              </>
            )}

            {/* Step 2: Barber */}
            {step === 2 && (
              <>
                <div className="flex items-center gap-2 mb-6">
                  <User className="text-gold" size={20} />
                  <h2 className="text-xl font-display font-bold">Pilih Barber</h2>
                </div>
                <div className="grid md:grid-cols-2 gap-3">
                  {barbers.map((barber) => (
                    <button
                      key={barber.id}
                      onClick={() => setSelectedBarber(barber.id)}
                      className={`p-4 text-left transition-colors border flex items-center gap-4 ${
                        selectedBarber === barber.id
                          ? "border-gold bg-gold/10"
                          : "border-white/10 hover:border-white/30"
                      }`}
                    >
                      <div className="w-12 h-12 bg-dark-lighter flex items-center justify-center flex-shrink-0">
                        <span className="text-xl font-display font-bold text-white/20">
                          {barber.name[0]}
                        </span>
                      </div>
                      <div>
                        <h3 className="font-semibold">{barber.name}</h3>
                        <p className="text-white/40 text-sm">{barber.specialty}</p>
                      </div>
                    </button>
                  ))}
                </div>
              </>
            )}

            {/* Step 3: Date & Time */}
            {step === 3 && (
              <>
                <div className="flex items-center gap-2 mb-6">
                  <Calendar className="text-gold" size={20} />
                  <h2 className="text-xl font-display font-bold">Pilih Tanggal & Waktu</h2>
                </div>

                <div className="mb-6">
                  <p className="text-white/60 text-sm mb-3">Tanggal</p>
                  <div className="grid grid-cols-7 gap-2">
                    {dates.map((d) => (
                      <button
                        key={d.value}
                        onClick={() => setSelectedDate(d.value)}
                        className={`p-2 text-center transition-colors border ${
                          selectedDate === d.value
                            ? "border-gold bg-gold/10"
                            : "border-white/10 hover:border-white/30"
                        }`}
                      >
                        <p className="text-xs text-white/40">{d.day}</p>
                        <p className="font-semibold">{d.date}</p>
                        <p className="text-xs text-white/40">{d.month}</p>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-white/60 text-sm mb-3">Waktu</p>
                  <div className="flex flex-wrap gap-2">
                    {timeSlots.map((time) => (
                      <button
                        key={time}
                        onClick={() => setSelectedTime(time)}
                        className={`px-4 py-2 transition-colors border ${
                          selectedTime === time
                            ? "border-gold bg-gold/10"
                            : "border-white/10 hover:border-white/30"
                        }`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>
              </>
            )}

            {/* Step 4: Details */}
            {step === 4 && (
              <>
                <div className="flex items-center gap-2 mb-6">
                  <Clock className="text-gold" size={20} />
                  <h2 className="text-xl font-display font-bold">Data Diri</h2>
                </div>

                <div className="space-y-4 mb-6">
                  <div>
                    <label className="block text-white/60 text-sm mb-2">Nama Lengkap</label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-dark-lighter border border-white/10 px-4 py-3 text-white focus:border-gold focus:outline-none"
                      placeholder="Masukkan nama Anda"
                    />
                  </div>
                  <div>
                    <label className="block text-white/60 text-sm mb-2">Nomor Telepon</label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full bg-dark-lighter border border-white/10 px-4 py-3 text-white focus:border-gold focus:outline-none"
                      placeholder="08xxxxxxxxxx"
                    />
                  </div>
                </div>

                <div className="bg-dark-lighter p-4">
                  <h3 className="text-gold text-sm tracking-widest mb-3">BOOKING SUMMARY</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-white/60">Layanan:</span>
                      <span>{services.find((s) => s.id === selectedService)?.name}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/60">Barber:</span>
                      <span>{barbers.find((b) => b.id === selectedBarber)?.name}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/60">Tanggal:</span>
                      <span>{selectedDate}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/60">Waktu:</span>
                      <span>{selectedTime}</span>
                    </div>
                    <div className="flex justify-between pt-2 border-t border-white/10 mt-2">
                      <span className="text-white/60">Harga:</span>
                      <span className="text-gold font-display text-lg">
                        Rp {services.find((s) => s.id === selectedService)?.price}
                      </span>
                    </div>
                  </div>
                </div>
              </>
            )}

            {/* Navigation */}
            <div className="flex justify-between mt-6 pt-6 border-t border-white/10">
              {step > 1 ? (
                <button
                  onClick={prevStep}
                  className="flex items-center gap-2 text-white/60 hover:text-white transition-colors"
                >
                  <ArrowLeft size={18} /> Back
                </button>
              ) : (
                <div />
              )}

              {step < 4 ? (
                <button
                  onClick={nextStep}
                  disabled={!canProceed()}
                  className={`flex items-center gap-2 px-6 py-2 font-semibold text-sm transition-colors ${
                    canProceed()
                      ? "bg-gold text-dark hover:bg-gold-light"
                      : "bg-dark-lighter text-white/30 cursor-not-allowed"
                  }`}
                >
                  Continue <ArrowRight size={18} />
                </button>
              ) : (
                <button
                  onClick={handleSubmit}
                  disabled={!canProceed()}
                  className={`flex items-center gap-2 px-6 py-2 font-semibold text-sm transition-colors ${
                    canProceed()
                      ? "bg-gold text-dark hover:bg-gold-light"
                      : "bg-dark-lighter text-white/30 cursor-not-allowed"
                  }`}
                >
                  Book via WhatsApp <ArrowRight size={18} />
                </button>
              )}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
