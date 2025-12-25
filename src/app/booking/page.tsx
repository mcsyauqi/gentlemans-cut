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

const timeSlots = ["10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00"];

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
      <section className="pt-32 pb-8">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center">
            <p className="text-gold uppercase tracking-[0.3em] text-sm mb-3">Reservation</p>
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">Book Your Visit</h1>
            <p className="text-white/60 text-lg">Schedule your appointment in just a few steps.</p>
          </motion.div>
        </div>
      </section>

      <section className="pb-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex justify-center mb-12">
            <div className="flex items-center gap-4">
              {[1, 2, 3, 4].map((s) => (
                <div key={s} className="flex items-center gap-4">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-colors ${step >= s ? "bg-gold text-black" : "bg-neutral-800 text-white/40"}`}>
                    {step > s ? <Check size={18} /> : s}
                  </div>
                  {s < 4 && <div className={`w-12 h-0.5 ${step > s ? "bg-gold" : "bg-neutral-800"}`}></div>}
                </div>
              ))}
            </div>
          </div>

          <motion.div key={step} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="bg-neutral-900 p-8 md:p-12">
            {step === 1 && (
              <>
                <div className="flex items-center gap-3 mb-8">
                  <Scissors className="text-gold" size={24} />
                  <h2 className="text-2xl font-display font-bold">Choose Your Service</h2>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  {services.map((service) => (
                    <button
                      key={service.id}
                      onClick={() => setSelectedService(service.id)}
                      className={`p-6 text-left transition-colors border ${selectedService === service.id ? "border-gold bg-gold/10" : "border-white/10 hover:border-white/30"}`}
                    >
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-semibold">{service.name}</h3>
                        <span className="text-gold font-display">Rp {service.price}</span>
                      </div>
                      <p className="text-white/40 text-sm">{service.duration}</p>
                    </button>
                  ))}
                </div>
              </>
            )}

            {step === 2 && (
              <>
                <div className="flex items-center gap-3 mb-8">
                  <User className="text-gold" size={24} />
                  <h2 className="text-2xl font-display font-bold">Select Your Barber</h2>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  {barbers.map((barber) => (
                    <button
                      key={barber.id}
                      onClick={() => setSelectedBarber(barber.id)}
                      className={`p-6 text-left transition-colors border ${selectedBarber === barber.id ? "border-gold bg-gold/10" : "border-white/10 hover:border-white/30"}`}
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-16 h-16 bg-neutral-800 flex items-center justify-center">
                          <span className="text-2xl font-display font-bold text-white/20">{barber.name[0]}</span>
                        </div>
                        <div>
                          <h3 className="font-semibold">{barber.name}</h3>
                          <p className="text-white/40 text-sm">{barber.specialty}</p>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </>
            )}

            {step === 3 && (
              <>
                <div className="flex items-center gap-3 mb-8">
                  <Calendar className="text-gold" size={24} />
                  <h2 className="text-2xl font-display font-bold">Pick Date & Time</h2>
                </div>
                <div className="mb-8">
                  <p className="text-white/60 text-sm uppercase tracking-wider mb-4">Select Date</p>
                  <div className="grid grid-cols-7 gap-2">
                    {dates.map((d) => (
                      <button
                        key={d.value}
                        onClick={() => setSelectedDate(d.value)}
                        className={`p-3 text-center transition-colors border ${selectedDate === d.value ? "border-gold bg-gold/10" : "border-white/10 hover:border-white/30"}`}
                      >
                        <p className="text-xs text-white/40 mb-1">{d.day}</p>
                        <p className="font-semibold">{d.date}</p>
                        <p className="text-xs text-white/40">{d.month}</p>
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-white/60 text-sm uppercase tracking-wider mb-4">Select Time</p>
                  <div className="flex flex-wrap gap-2">
                    {timeSlots.map((time) => (
                      <button
                        key={time}
                        onClick={() => setSelectedTime(time)}
                        className={`px-5 py-3 transition-colors border ${selectedTime === time ? "border-gold bg-gold/10" : "border-white/10 hover:border-white/30"}`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>
              </>
            )}

            {step === 4 && (
              <>
                <div className="flex items-center gap-3 mb-8">
                  <Clock className="text-gold" size={24} />
                  <h2 className="text-2xl font-display font-bold">Your Details</h2>
                </div>
                <div className="space-y-6 mb-8">
                  <div>
                    <label className="block text-white/60 text-sm uppercase tracking-wider mb-2">Full Name</label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-neutral-800 border border-white/10 px-4 py-3 text-white focus:border-gold focus:outline-none"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div>
                    <label className="block text-white/60 text-sm uppercase tracking-wider mb-2">Phone Number</label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full bg-neutral-800 border border-white/10 px-4 py-3 text-white focus:border-gold focus:outline-none"
                      placeholder="08xxxxxxxxxx"
                    />
                  </div>
                </div>
                <div className="bg-neutral-800 p-6">
                  <h3 className="text-gold uppercase tracking-wider text-sm mb-4">Booking Summary</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between"><span className="text-white/60">Service:</span><span>{services.find((s) => s.id === selectedService)?.name}</span></div>
                    <div className="flex justify-between"><span className="text-white/60">Barber:</span><span>{barbers.find((b) => b.id === selectedBarber)?.name}</span></div>
                    <div className="flex justify-between"><span className="text-white/60">Date:</span><span>{selectedDate}</span></div>
                    <div className="flex justify-between"><span className="text-white/60">Time:</span><span>{selectedTime}</span></div>
                    <div className="flex justify-between pt-2 border-t border-white/10 mt-2"><span className="text-white/60">Price:</span><span className="text-gold font-display text-lg">Rp {services.find((s) => s.id === selectedService)?.price}</span></div>
                  </div>
                </div>
              </>
            )}

            <div className="flex justify-between mt-8 pt-8 border-t border-white/10">
              {step > 1 ? (
                <button onClick={prevStep} className="flex items-center gap-2 text-white/60 hover:text-white transition-colors">
                  <ArrowLeft size={18} /> Back
                </button>
              ) : (
                <div></div>
              )}
              {step < 4 ? (
                <button
                  onClick={nextStep}
                  disabled={!canProceed()}
                  className={`flex items-center gap-2 px-8 py-3 font-semibold uppercase tracking-wider text-sm transition-colors ${canProceed() ? "bg-gold text-black hover:bg-white" : "bg-neutral-800 text-white/30 cursor-not-allowed"}`}
                >
                  Continue <ArrowRight size={18} />
                </button>
              ) : (
                <button
                  onClick={handleSubmit}
                  disabled={!canProceed()}
                  className={`flex items-center gap-2 px-8 py-3 font-semibold uppercase tracking-wider text-sm transition-colors ${canProceed() ? "bg-gold text-black hover:bg-white" : "bg-neutral-800 text-white/30 cursor-not-allowed"}`}
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
