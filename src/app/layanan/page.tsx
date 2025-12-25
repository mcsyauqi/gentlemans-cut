import Link from "next/link";

const services = [
  { name: "Classic Haircut", price: "75.000", time: "30 min", desc: "Potongan klasik dengan finishing premium." },
  { name: "Premium Haircut", price: "120.000", time: "45 min", desc: "Full service dengan cuci, pijat, dan styling." },
  { name: "Classic Shave", price: "50.000", time: "20 min", desc: "Cukur tradisional dengan pisau cukur." },
  { name: "Hot Towel Shave", price: "100.000", time: "40 min", desc: "Cukur mewah dengan hot towel treatment." },
  { name: "Hair Coloring", price: "150.000", time: "60 min", desc: "Pewarnaan profesional." },
  { name: "Kids Haircut", price: "50.000", time: "25 min", desc: "Untuk anak di bawah 12 tahun." },
  { name: "Beard Grooming", price: "80.000", time: "30 min", desc: "Trim dan kondisikan jenggot." },
  { name: "Hair Treatment", price: "200.000", time: "60 min", desc: "Deep conditioning treatment." },
];

export default function LayananPage() {
  return (
    <div className="pt-14">
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-[#C9A962] text-sm tracking-widest mb-2">LAYANAN</p>
            <h1 className="text-4xl font-bold mb-4">Our Services</h1>
            <p className="text-white/60">Layanan grooming premium untuk pria modern.</p>
          </div>

          <div className="space-y-3">
            {services.map((s) => (
              <div key={s.name} className="bg-white/5 p-5">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-medium">{s.name}</h3>
                    <p className="text-white/40 text-sm">{s.time}</p>
                  </div>
                  <span className="text-[#C9A962] font-bold text-lg">Rp {s.price}</span>
                </div>
                <p className="text-white/50 text-sm">{s.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/booking" className="inline-block bg-[#C9A962] text-black px-8 py-3 font-medium">
              Book Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
