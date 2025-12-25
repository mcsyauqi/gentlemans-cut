import Link from "next/link";

const plans = [
  {
    name: "Silver",
    price: "200K",
    features: ["2 Haircuts/bulan", "10% off", "Priority booking"],
  },
  {
    name: "Gold",
    price: "350K",
    popular: true,
    features: ["4 Haircuts/bulan", "1 Free shave", "15% off", "Free products"],
  },
  {
    name: "Platinum",
    price: "500K",
    features: ["Unlimited cuts", "2 Free shaves", "20% off", "VIP access"],
  },
];

const prices = [
  { name: "Classic Haircut", price: "75.000" },
  { name: "Premium Haircut", price: "120.000" },
  { name: "Classic Shave", price: "50.000" },
  { name: "Hot Towel Shave", price: "100.000" },
  { name: "Hair Coloring", price: "150.000" },
  { name: "Kids Haircut", price: "50.000" },
  { name: "Beard Grooming", price: "80.000" },
  { name: "Hair Treatment", price: "200.000" },
];

export default function HargaPage() {
  return (
    <div className="pt-14">
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-[#C9A962] text-sm tracking-widest mb-2">HARGA</p>
            <h1 className="text-4xl font-bold mb-4">Pricing</h1>
            <p className="text-white/60">Harga transparan tanpa biaya tersembunyi.</p>
          </div>

          {/* Membership */}
          <div className="mb-16">
            <h2 className="text-xl font-bold mb-6 text-center">Membership Plans</h2>
            <div className="grid md:grid-cols-3 gap-4">
              {plans.map((p) => (
                <div
                  key={p.name}
                  className={`p-6 text-center ${p.popular ? "bg-[#C9A962] text-black" : "bg-white/5"}`}
                >
                  {p.popular && <p className="text-xs font-bold mb-2">POPULAR</p>}
                  <h3 className="text-lg font-bold">{p.name}</h3>
                  <p className="text-3xl font-bold my-3">
                    Rp {p.price}<span className="text-sm font-normal">/bln</span>
                  </p>
                  <ul className={`text-sm space-y-2 mb-4 ${p.popular ? "text-black/70" : "text-white/60"}`}>
                    {p.features.map((f) => (
                      <li key={f}>✓ {f}</li>
                    ))}
                  </ul>
                  <Link
                    href="/booking"
                    className={`block py-2 font-medium ${
                      p.popular ? "bg-black text-white" : "bg-[#C9A962] text-black"
                    }`}
                  >
                    Join
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Price List */}
          <div>
            <h2 className="text-xl font-bold mb-6 text-center">Service Prices</h2>
            <div className="grid md:grid-cols-2 gap-3">
              {prices.map((p) => (
                <div key={p.name} className="bg-white/5 p-4 flex justify-between">
                  <span>{p.name}</span>
                  <span className="text-[#C9A962] font-bold">Rp {p.price}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
