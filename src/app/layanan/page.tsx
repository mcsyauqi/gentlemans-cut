import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const services = [
  { name: "Classic Haircut", price: "75.000", time: "30 min", desc: "Potongan klasik dengan finishing premium dan styling wax." },
  { name: "Premium Haircut", price: "120.000", time: "45 min", desc: "Full service termasuk cuci, pijat kepala, potong, dan styling." },
  { name: "Classic Shave", price: "50.000", time: "20 min", desc: "Cukur tradisional dengan pisau cukur untuk hasil halus." },
  { name: "Hot Towel Shave", price: "100.000", time: "40 min", desc: "Pengalaman cukur mewah dengan hot towel dan aftercare." },
  { name: "Beard Grooming", price: "80.000", time: "30 min", desc: "Trim, bentuk, dan kondisikan dengan beard oil premium." },
  { name: "Hair Coloring", price: "150.000", time: "60 min", desc: "Pewarnaan profesional dengan produk berkualitas." },
  { name: "Kids Haircut", price: "50.000", time: "25 min", desc: "Potongan untuk anak di bawah 12 tahun." },
  { name: "Hair Treatment", price: "200.000", time: "60 min", desc: "Deep conditioning untuk rambut sehat." },
];

export default function LayananPage() {
  return (
    <>
      <Header />

      <section className="pt-16 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="max-w-2xl mb-16">
            <p className="text-[#d4af37] text-sm tracking-[0.2em] mb-4">LAYANAN</p>
            <h1 className="text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-[#888] text-lg">Layanan grooming premium dengan perhatian pada setiap detail.</p>
          </div>

          <div className="space-y-4">
            {services.map((s) => (
              <div key={s.name} className="bg-[#111] border border-[#222] p-8 flex flex-col lg:flex-row lg:items-center justify-between gap-6 hover:border-[#d4af37] transition-colors">
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-2">
                    <h3 className="text-xl font-semibold">{s.name}</h3>
                    <span className="text-[#666] text-sm">{s.time}</span>
                  </div>
                  <p className="text-[#888]">{s.desc}</p>
                </div>
                <div className="flex items-center gap-8">
                  <p className="text-[#d4af37] text-2xl font-bold">Rp {s.price}</p>
                  <Link href="/booking" className="bg-[#d4af37] text-black font-semibold px-6 py-3 text-sm">
                    BOOK
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#d4af37]">
        <div className="max-w-7xl mx-auto px-6 py-16 text-center">
          <h2 className="text-2xl font-bold text-black mb-4">Butuh Layanan Khusus?</h2>
          <p className="text-black/70 mb-8">Hubungi kami untuk paket grooming pernikahan atau corporate.</p>
          <Link href="/kontak" className="inline-block bg-black text-white font-semibold px-8 py-3 text-sm">
            CONTACT US
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
