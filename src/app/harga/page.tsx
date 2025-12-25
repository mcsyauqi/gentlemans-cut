import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const plans = [
  {
    name: "Silver",
    price: "200.000",
    features: ["2 Haircuts / bulan", "10% off semua layanan", "Priority booking"],
  },
  {
    name: "Gold",
    price: "350.000",
    popular: true,
    features: ["4 Haircuts / bulan", "1 Free shave / bulan", "15% off semua layanan", "Free styling products"],
  },
  {
    name: "Platinum",
    price: "500.000",
    features: ["Unlimited haircuts", "2 Free shaves / bulan", "20% off semua layanan", "VIP lounge access"],
  },
];

const services = [
  { name: "Classic Haircut", price: "75.000" },
  { name: "Premium Haircut", price: "120.000" },
  { name: "Classic Shave", price: "50.000" },
  { name: "Hot Towel Shave", price: "100.000" },
  { name: "Beard Grooming", price: "80.000" },
  { name: "Hair Coloring", price: "150.000" },
  { name: "Kids Haircut", price: "50.000" },
  { name: "Hair Treatment", price: "200.000" },
];

export default function HargaPage() {
  return (
    <>
      <Header />

      <section className="pt-16 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="max-w-2xl mb-16">
            <p className="text-[#d4af37] text-sm tracking-[0.2em] mb-4">HARGA</p>
            <h1 className="text-5xl font-bold mb-6">Pricing</h1>
            <p className="text-[#888] text-lg">Harga transparan tanpa biaya tersembunyi.</p>
          </div>

          {/* Membership */}
          <div className="mb-24">
            <h2 className="text-2xl font-bold mb-10">Membership Plans</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {plans.map((plan) => (
                <div
                  key={plan.name}
                  className={`p-8 ${
                    plan.popular
                      ? "bg-[#d4af37] text-black"
                      : "bg-[#111] border border-[#222]"
                  }`}
                >
                  {plan.popular && (
                    <p className="text-xs font-bold tracking-[0.2em] mb-4">MOST POPULAR</p>
                  )}
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="flex items-baseline gap-1 mb-8">
                    <span className="text-sm">Rp</span>
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className={plan.popular ? "text-black/60" : "text-[#666]"}>/bulan</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((f) => (
                      <li key={f} className={`flex items-center gap-3 ${plan.popular ? "text-black/80" : "text-[#888]"}`}>
                        <span className={plan.popular ? "text-black" : "text-[#d4af37]"}>✓</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/booking"
                    className={`block text-center font-semibold py-4 text-sm ${
                      plan.popular
                        ? "bg-black text-white"
                        : "bg-[#d4af37] text-black"
                    }`}
                  >
                    JOIN NOW
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Price List */}
          <div>
            <h2 className="text-2xl font-bold mb-10">Service Prices</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {services.map((s) => (
                <div key={s.name} className="bg-[#111] border border-[#222] p-6 flex justify-between items-center">
                  <span className="text-white">{s.name}</span>
                  <span className="text-[#d4af37] font-bold text-lg">Rp {s.price}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#d4af37]">
        <div className="max-w-7xl mx-auto px-6 py-16 text-center">
          <h2 className="text-2xl font-bold text-black mb-4">Ready to Book?</h2>
          <p className="text-black/70 mb-8">Jadwalkan appointment Anda sekarang.</p>
          <Link href="/booking" className="inline-block bg-black text-white font-semibold px-8 py-3 text-sm">
            BOOK APPOINTMENT
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
