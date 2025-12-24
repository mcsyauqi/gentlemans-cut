"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, User, Scissors, Check, Phone, ChevronRight } from "lucide-react";

const services = [
  { id: 1, name: "Haircut Classic", price: 75000, duration: "30 menit" },
  { id: 2, name: "Haircut Premium", price: 120000, duration: "45 menit" },
  { id: 3, name: "Shaving Classic", price: 50000, duration: "20 menit" },
  { id: 4, name: "Hot Towel Shave", price: 100000, duration: "40 menit" },
  { id: 5, name: "Hair Coloring", price: 150000, duration: "60 menit" },
  { id: 6, name: "Kids Haircut", price: 50000, duration: "25 menit" },
  { id: 7, name: "Beard Grooming", price: 80000, duration: "30 menit" },
  { id: 8, name: "Hair Treatment", price: 200000, duration: "60 menit" },
];

const barbers = [
  { id: 1, name: "Master Aldo", specialty: "Classic Cut" },
  { id: 2, name: "Bro Ricky", specialty: "Fade & Undercut" },
  { id: 3, name: "Bro Dimas", specialty: "Modern Style" },
  { id: 4, name: "Bro Farhan", specialty: "All-rounder" },
];

const timeSlots = [
  "10:00", "10:30", "11:00", "11:30", "12:00", "12:30",
  "13:00", "13:30", "14:00", "14:30", "15:00", "15:30",
  "16:00", "16:30", "17:00", "17:30", "18:00", "18:30",
  "19:00", "19:30", "20:00", "20:30",
];

export default function BookingPage() {
  const [step, setStep] = useState(1);
  const [selectedServices, setSelectedServices] = useState<number[]>([]);
  const [selectedBarber, setSelectedBarber] = useState<number | null>(null);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [formData, setFormData] = useState({ name: "", phone: "", email: "", notes: "" });

  const toggleService = (id: number) => {
    setSelectedServices((prev) => prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]);
  };

  const getTotalPrice = () => selectedServices.reduce((total, id) => total + (services.find((s) => s.id === id)?.price || 0), 0);

  const formatPrice = (price: number) => new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", minimumFractionDigits: 0 }).format(price);

  const getMinDate = () => new Date().toISOString().split("T")[0];

  const canProceed = () => {
    switch (step) {
      case 1: return selectedServices.length > 0;
      case 2: return selectedBarber !== null;
      case 3: return selectedDate !== "" && selectedTime !== "";
      case 4: return formData.name !== "" && formData.phone !== "";
      default: return false;
    }
  };

  const handleSubmit = () => {
    const selectedServiceNames = selectedServices.map((id) => services.find((s) => s.id === id)?.name).join(", ");
    const barberName = barbers.find((b) => b.id === selectedBarber)?.name;
    const message = `Halo Gentleman's Cut! Saya ingin booking:\n\nLayanan: ${selectedServiceNames}\nBarber: ${barberName}\nTanggal: ${selectedDate}\nJam: ${selectedTime}\nTotal: ${formatPrice(getTotalPrice())}\n\nNama: ${formData.name}\nNo. HP: ${formData.phone}\nEmail: ${formData.email || "-"}\nCatatan: ${formData.notes || "-"}\n\nMohon konfirmasi ketersediaan. Terima kasih!`;
    window.open(`https://wa.me/6281234567890?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <>
      {/* Hero Section */}
      <section className="bg-[#1A1A2E] pt-32 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
              BOOKING ONLINE
            </h1>
            <div className="w-20 h-1 bg-[#C9A962] mx-auto mb-6" />
            <p className="text-gray-300 max-w-xl mx-auto">
              Pilih layanan, barber, dan jadwal yang Anda inginkan
            </p>
          </motion.div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-12 md:py-16 bg-[#F5F5F5]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Progress Steps */}
          <div className="flex items-center justify-center mb-10">
            {[1, 2, 3, 4].map((s, index) => (
              <div key={s} className="flex items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-colors ${step >= s ? "bg-[#C9A962] text-[#1A1A2E]" : "bg-gray-300 text-gray-500"}`}>
                  {step > s ? <Check className="w-5 h-5" /> : s}
                </div>
                {index < 3 && <div className={`w-12 md:w-20 h-1 ${step > s ? "bg-[#C9A962]" : "bg-gray-300"}`} />}
              </div>
            ))}
          </div>

          {/* Step Content */}
          <motion.div key={step} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="bg-white rounded-xl p-6 md:p-8 shadow-md">
            {/* Step 1: Select Services */}
            {step === 1 && (
              <>
                <div className="flex items-center gap-3 mb-6">
                  <Scissors className="w-6 h-6 text-[#C9A962]" />
                  <h2 className="text-xl font-bold text-[#1A1A2E]" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>PILIH LAYANAN</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {services.map((service) => (
                    <button
                      key={service.id}
                      onClick={() => toggleService(service.id)}
                      className={`p-4 rounded-lg border-2 text-left transition-colors ${selectedServices.includes(service.id) ? "border-[#C9A962] bg-[#C9A962]/10" : "border-gray-200 hover:border-[#C9A962]/50"}`}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-bold text-[#1A1A2E] text-sm">{service.name}</h3>
                          <p className="text-xs text-gray-500">{service.duration}</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-[#C9A962] text-sm">{formatPrice(service.price)}</span>
                          <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${selectedServices.includes(service.id) ? "border-[#C9A962] bg-[#C9A962]" : "border-gray-300"}`}>
                            {selectedServices.includes(service.id) && <Check className="w-3 h-3 text-white" />}
                          </div>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </>
            )}

            {/* Step 2: Select Barber */}
            {step === 2 && (
              <>
                <div className="flex items-center gap-3 mb-6">
                  <User className="w-6 h-6 text-[#C9A962]" />
                  <h2 className="text-xl font-bold text-[#1A1A2E]" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>PILIH BARBER</h2>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {barbers.map((barber) => (
                    <button
                      key={barber.id}
                      onClick={() => setSelectedBarber(barber.id)}
                      className={`p-5 rounded-lg border-2 text-center transition-colors ${selectedBarber === barber.id ? "border-[#C9A962] bg-[#C9A962]/10" : "border-gray-200 hover:border-[#C9A962]/50"}`}
                    >
                      <div className="w-14 h-14 mx-auto rounded-full bg-[#1A1A2E] flex items-center justify-center text-xl font-bold text-[#C9A962] mb-3" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                        {barber.name.split(" ").map((n) => n[0]).join("")}
                      </div>
                      <h3 className="font-bold text-[#1A1A2E] text-sm">{barber.name}</h3>
                      <p className="text-xs text-gray-500">{barber.specialty}</p>
                    </button>
                  ))}
                </div>
              </>
            )}

            {/* Step 3: Select Date & Time */}
            {step === 3 && (
              <>
                <div className="flex items-center gap-3 mb-6">
                  <Calendar className="w-6 h-6 text-[#C9A962]" />
                  <h2 className="text-xl font-bold text-[#1A1A2E]" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>PILIH JADWAL</h2>
                </div>
                <div className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Tanggal</label>
                    <input
                      type="date"
                      min={getMinDate()}
                      value={selectedDate}
                      onChange={(e) => setSelectedDate(e.target.value)}
                      className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-[#C9A962] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Waktu</label>
                    <div className="grid grid-cols-4 sm:grid-cols-6 gap-2">
                      {timeSlots.map((time) => (
                        <button
                          key={time}
                          onClick={() => setSelectedTime(time)}
                          className={`p-2 rounded-lg border-2 text-sm font-medium transition-colors ${selectedTime === time ? "border-[#C9A962] bg-[#C9A962] text-[#1A1A2E]" : "border-gray-200 hover:border-[#C9A962]/50"}`}
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </>
            )}

            {/* Step 4: Customer Info */}
            {step === 4 && (
              <>
                <div className="flex items-center gap-3 mb-6">
                  <Phone className="w-6 h-6 text-[#C9A962]" />
                  <h2 className="text-xl font-bold text-[#1A1A2E]" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>DATA DIRI</h2>
                </div>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Nama Lengkap *</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-[#C9A962] focus:outline-none"
                      placeholder="Masukkan nama Anda"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">No. WhatsApp *</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-[#C9A962] focus:outline-none"
                      placeholder="08xx-xxxx-xxxx"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email (opsional)</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-[#C9A962] focus:outline-none"
                      placeholder="email@contoh.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Catatan (opsional)</label>
                    <textarea
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-[#C9A962] focus:outline-none"
                      rows={3}
                      placeholder="Catatan tambahan..."
                    />
                  </div>
                </div>

                {/* Summary */}
                <div className="mt-6 p-5 bg-[#F5F5F5] rounded-lg">
                  <h3 className="font-bold text-[#1A1A2E] mb-4 text-sm">Ringkasan Booking</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between"><span className="text-gray-600">Layanan:</span><span className="font-medium text-right">{selectedServices.map((id) => services.find((s) => s.id === id)?.name).join(", ")}</span></div>
                    <div className="flex justify-between"><span className="text-gray-600">Barber:</span><span className="font-medium">{barbers.find((b) => b.id === selectedBarber)?.name}</span></div>
                    <div className="flex justify-between"><span className="text-gray-600">Tanggal:</span><span className="font-medium">{selectedDate}</span></div>
                    <div className="flex justify-between"><span className="text-gray-600">Waktu:</span><span className="font-medium">{selectedTime}</span></div>
                    <div className="border-t border-gray-300 pt-2 mt-2">
                      <div className="flex justify-between font-bold text-base"><span>Total:</span><span className="text-[#C9A962]">{formatPrice(getTotalPrice())}</span></div>
                    </div>
                  </div>
                </div>
              </>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8">
              {step > 1 && (
                <button onClick={() => setStep(step - 1)} className="px-5 py-2.5 border-2 border-[#1A1A2E] text-[#1A1A2E] rounded-lg font-bold text-sm hover:bg-[#1A1A2E] hover:text-white transition-colors">
                  Kembali
                </button>
              )}
              <div className="ml-auto">
                {step < 4 ? (
                  <button
                    onClick={() => setStep(step + 1)}
                    disabled={!canProceed()}
                    className={`px-5 py-2.5 rounded-lg font-bold text-sm flex items-center gap-2 transition-colors ${canProceed() ? "bg-[#C9A962] text-[#1A1A2E] hover:bg-[#b8983e]" : "bg-gray-300 text-gray-500 cursor-not-allowed"}`}
                  >
                    Lanjut <ChevronRight className="w-4 h-4" />
                  </button>
                ) : (
                  <button
                    onClick={handleSubmit}
                    disabled={!canProceed()}
                    className={`px-6 py-2.5 rounded-lg font-bold text-sm flex items-center gap-2 transition-colors ${canProceed() ? "bg-[#C9A962] text-[#1A1A2E] hover:bg-[#b8983e]" : "bg-gray-300 text-gray-500 cursor-not-allowed"}`}
                  >
                    <Phone className="w-4 h-4" /> Booking via WhatsApp
                  </button>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
