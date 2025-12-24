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
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    notes: "",
  });

  const toggleService = (id: number) => {
    setSelectedServices((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]
    );
  };

  const getTotalPrice = () => {
    return selectedServices.reduce((total, id) => {
      const service = services.find((s) => s.id === id);
      return total + (service?.price || 0);
    }, 0);
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(price);
  };

  const getMinDate = () => {
    const today = new Date();
    return today.toISOString().split("T")[0];
  };

  const canProceed = () => {
    switch (step) {
      case 1:
        return selectedServices.length > 0;
      case 2:
        return selectedBarber !== null;
      case 3:
        return selectedDate !== "" && selectedTime !== "";
      case 4:
        return formData.name !== "" && formData.phone !== "";
      default:
        return false;
    }
  };

  const handleSubmit = () => {
    const selectedServiceNames = selectedServices
      .map((id) => services.find((s) => s.id === id)?.name)
      .join(", ");
    const barberName = barbers.find((b) => b.id === selectedBarber)?.name;

    const message = `Halo Gentleman's Cut! Saya ingin booking:

Layanan: ${selectedServiceNames}
Barber: ${barberName}
Tanggal: ${selectedDate}
Jam: ${selectedTime}
Total: ${formatPrice(getTotalPrice())}

Nama: ${formData.name}
No. HP: ${formData.phone}
Email: ${formData.email || "-"}
Catatan: ${formData.notes || "-"}

Mohon konfirmasi ketersediaan. Terima kasih!`;

    const whatsappUrl = `https://wa.me/6281234567890?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-[#1A1A2E] py-16 relative overflow-hidden">
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
              BOOKING ONLINE
            </h1>
            <div className="w-24 h-1 bg-[#C9A962] mx-auto mb-6" />
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Pilih layanan, barber, dan jadwal yang Anda inginkan
            </p>
          </motion.div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-16 bg-[#F5F5F5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Progress Steps */}
          <div className="flex items-center justify-center mb-12">
            {[1, 2, 3, 4].map((s, index) => (
              <div key={s} className="flex items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all duration-300 ${
                    step >= s
                      ? "bg-[#C9A962] text-[#1A1A2E]"
                      : "bg-gray-300 text-gray-500"
                  }`}
                >
                  {step > s ? <Check className="w-5 h-5" /> : s}
                </div>
                {index < 3 && (
                  <div
                    className={`w-16 md:w-24 h-1 transition-all duration-300 ${
                      step > s ? "bg-[#C9A962]" : "bg-gray-300"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>

          {/* Step Content */}
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-xl p-8 shadow-lg"
          >
            {/* Step 1: Select Services */}
            {step === 1 && (
              <>
                <div className="flex items-center gap-3 mb-6">
                  <Scissors className="w-6 h-6 text-[#C9A962]" />
                  <h2
                    className="text-2xl font-bold text-[#1A1A2E]"
                    style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.05em" }}
                  >
                    PILIH LAYANAN
                  </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {services.map((service) => (
                    <button
                      key={service.id}
                      onClick={() => toggleService(service.id)}
                      className={`p-4 rounded-lg border-2 text-left transition-all duration-300 ${
                        selectedServices.includes(service.id)
                          ? "border-[#C9A962] bg-[#C9A962]/10"
                          : "border-gray-200 hover:border-[#C9A962]/50"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-bold text-[#1A1A2E]">{service.name}</h3>
                          <p className="text-sm text-gray-500">{service.duration}</p>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="font-bold text-[#C9A962]">
                            {formatPrice(service.price)}
                          </span>
                          <div
                            className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                              selectedServices.includes(service.id)
                                ? "border-[#C9A962] bg-[#C9A962]"
                                : "border-gray-300"
                            }`}
                          >
                            {selectedServices.includes(service.id) && (
                              <Check className="w-4 h-4 text-white" />
                            )}
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
                  <h2
                    className="text-2xl font-bold text-[#1A1A2E]"
                    style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.05em" }}
                  >
                    PILIH BARBER
                  </h2>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {barbers.map((barber) => (
                    <button
                      key={barber.id}
                      onClick={() => setSelectedBarber(barber.id)}
                      className={`p-6 rounded-lg border-2 text-center transition-all duration-300 ${
                        selectedBarber === barber.id
                          ? "border-[#C9A962] bg-[#C9A962]/10"
                          : "border-gray-200 hover:border-[#C9A962]/50"
                      }`}
                    >
                      <div className="w-16 h-16 mx-auto rounded-full bg-[#1A1A2E] flex items-center justify-center text-2xl font-bold text-[#C9A962] mb-3" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                        {barber.name.split(" ").map((n) => n[0]).join("")}
                      </div>
                      <h3 className="font-bold text-[#1A1A2E]">{barber.name}</h3>
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
                  <h2
                    className="text-2xl font-bold text-[#1A1A2E]"
                    style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.05em" }}
                  >
                    PILIH JADWAL
                  </h2>
                </div>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Tanggal
                    </label>
                    <input
                      type="date"
                      min={getMinDate()}
                      value={selectedDate}
                      onChange={(e) => setSelectedDate(e.target.value)}
                      className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-[#C9A962] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Waktu
                    </label>
                    <div className="grid grid-cols-4 md:grid-cols-6 gap-2">
                      {timeSlots.map((time) => (
                        <button
                          key={time}
                          onClick={() => setSelectedTime(time)}
                          className={`p-2 rounded-lg border-2 text-sm font-medium transition-all duration-300 ${
                            selectedTime === time
                              ? "border-[#C9A962] bg-[#C9A962] text-[#1A1A2E]"
                              : "border-gray-200 hover:border-[#C9A962]/50"
                          }`}
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
                  <h2
                    className="text-2xl font-bold text-[#1A1A2E]"
                    style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.05em" }}
                  >
                    DATA DIRI
                  </h2>
                </div>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nama Lengkap *
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-[#C9A962] focus:outline-none"
                      placeholder="Masukkan nama Anda"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      No. WhatsApp *
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-[#C9A962] focus:outline-none"
                      placeholder="08xx-xxxx-xxxx"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email (opsional)
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-[#C9A962] focus:outline-none"
                      placeholder="email@contoh.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Catatan (opsional)
                    </label>
                    <textarea
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-[#C9A962] focus:outline-none"
                      rows={3}
                      placeholder="Misalnya: minta potong model tertentu"
                    />
                  </div>
                </div>

                {/* Summary */}
                <div className="mt-8 p-6 bg-[#F5F5F5] rounded-lg">
                  <h3 className="font-bold text-[#1A1A2E] mb-4">Ringkasan Booking</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Layanan:</span>
                      <span className="font-medium">
                        {selectedServices
                          .map((id) => services.find((s) => s.id === id)?.name)
                          .join(", ")}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Barber:</span>
                      <span className="font-medium">
                        {barbers.find((b) => b.id === selectedBarber)?.name}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Tanggal:</span>
                      <span className="font-medium">{selectedDate}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Waktu:</span>
                      <span className="font-medium">{selectedTime}</span>
                    </div>
                    <div className="border-t border-gray-300 pt-2 mt-2">
                      <div className="flex justify-between text-lg font-bold">
                        <span>Total:</span>
                        <span className="text-[#C9A962]">{formatPrice(getTotalPrice())}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8">
              {step > 1 && (
                <button
                  onClick={() => setStep(step - 1)}
                  className="px-6 py-3 border-2 border-[#1A1A2E] text-[#1A1A2E] rounded-lg font-bold hover:bg-[#1A1A2E] hover:text-white transition-colors duration-300"
                >
                  Kembali
                </button>
              )}
              <div className="ml-auto">
                {step < 4 ? (
                  <button
                    onClick={() => setStep(step + 1)}
                    disabled={!canProceed()}
                    className={`px-6 py-3 rounded-lg font-bold flex items-center gap-2 transition-all duration-300 ${
                      canProceed()
                        ? "bg-[#C9A962] text-[#1A1A2E] hover:bg-[#b8983e]"
                        : "bg-gray-300 text-gray-500 cursor-not-allowed"
                    }`}
                  >
                    Lanjut
                    <ChevronRight className="w-5 h-5" />
                  </button>
                ) : (
                  <button
                    onClick={handleSubmit}
                    disabled={!canProceed()}
                    className={`px-8 py-3 rounded-lg font-bold flex items-center gap-2 transition-all duration-300 ${
                      canProceed()
                        ? "bg-[#C9A962] text-[#1A1A2E] hover:bg-[#b8983e]"
                        : "bg-gray-300 text-gray-500 cursor-not-allowed"
                    }`}
                  >
                    <Phone className="w-5 h-5" />
                    Booking via WhatsApp
                  </button>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
