import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />

      {/* Hero */}
      <section className="pt-16 min-h-screen flex items-center bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-[#d4af37] text-sm tracking-[0.2em] mb-6">PREMIUM BARBERSHOP JAKARTA</p>
            <h1 className="text-5xl lg:text-7xl font-bold leading-[1.1] mb-8">
              The Art of<br />
              <span className="text-[#d4af37]">Grooming</span>
            </h1>
            <p className="text-[#888] text-lg leading-relaxed mb-10 max-w-md">
              Pengalaman barbershop premium dengan teknik klasik dan sentuhan modern.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/booking" className="bg-[#d4af37] text-black font-semibold px-8 py-4 text-sm tracking-wide">
                BOOK APPOINTMENT
              </Link>
              <Link href="/layanan" className="border border-[#333] text-white font-semibold px-8 py-4 text-sm tracking-wide hover:border-[#d4af37]">
                OUR SERVICES
              </Link>
            </div>
          </div>
          <div className="hidden lg:block">
            <div className="aspect-[4/5] bg-[#111] border border-[#222] flex items-center justify-center">
              <div className="text-center">
                <p className="text-8xl font-bold text-[#1a1a1a]">GC</p>
                <p className="text-[#333] text-sm tracking-[0.3em] mt-4">EST. 2010</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-[#111] border-y border-[#222]">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-3 gap-8">
            <div className="text-center">
              <p className="text-4xl lg:text-5xl font-bold text-[#d4af37] mb-2">15+</p>
              <p className="text-[#666] text-sm">Tahun Pengalaman</p>
            </div>
            <div className="text-center">
              <p className="text-4xl lg:text-5xl font-bold text-[#d4af37] mb-2">10K+</p>
              <p className="text-[#666] text-sm">Pelanggan Puas</p>
            </div>
            <div className="text-center">
              <p className="text-4xl lg:text-5xl font-bold text-[#d4af37] mb-2">4.9</p>
              <p className="text-[#666] text-sm">Rating Google</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 mb-16">
            <div>
              <p className="text-[#d4af37] text-sm tracking-[0.2em] mb-4">LAYANAN KAMI</p>
              <h2 className="text-4xl font-bold">Premium Services</h2>
            </div>
            <Link href="/layanan" className="text-[#d4af37] text-sm hover:underline">
              Lihat Semua →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "Classic Haircut", price: "75K", desc: "Potongan klasik dengan finishing premium" },
              { name: "Premium Haircut", price: "120K", desc: "Full service dengan cuci dan styling" },
              { name: "Hot Towel Shave", price: "100K", desc: "Cukur mewah dengan hot towel" },
              { name: "Beard Grooming", price: "80K", desc: "Trim dan kondisikan jenggot" },
              { name: "Hair Coloring", price: "150K", desc: "Pewarnaan profesional" },
              { name: "Hair Treatment", price: "200K", desc: "Deep conditioning treatment" },
            ].map((s) => (
              <div key={s.name} className="bg-[#111] border border-[#222] p-8 hover:border-[#d4af37] transition-colors">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-lg font-semibold">{s.name}</h3>
                  <p className="text-[#d4af37] font-bold">Rp {s.price}</p>
                </div>
                <p className="text-[#666] text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section className="bg-[#111]">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <p className="text-[#d4af37] text-sm tracking-[0.2em] mb-4">TENTANG KAMI</p>
              <h2 className="text-4xl font-bold mb-8">Crafting Confidence Since 2010</h2>
              <p className="text-[#888] leading-relaxed mb-6">
                Gentleman's Cut berdiri dengan satu misi: memberikan pengalaman grooming terbaik untuk pria Indonesia.
              </p>
              <p className="text-[#888] leading-relaxed mb-8">
                Kami menggabungkan teknik klasik barbershop dengan gaya modern, memastikan setiap pelanggan keluar dengan penampilan terbaik.
              </p>
              <Link href="/barber" className="text-[#d4af37] text-sm hover:underline">
                Kenali Tim Kami →
              </Link>
            </div>
            <div className="order-1 lg:order-2">
              <div className="aspect-square bg-[#0a0a0a] border border-[#222] flex items-center justify-center">
                <p className="text-[#1a1a1a] text-6xl font-bold">ABOUT</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Preview */}
      <section className="bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="text-center mb-16">
            <p className="text-[#d4af37] text-sm tracking-[0.2em] mb-4">TIM KAMI</p>
            <h2 className="text-4xl font-bold">Master Barbers</h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Aldo", role: "Master Barber" },
              { name: "Ricky", role: "Senior Barber" },
              { name: "Dimas", role: "Style Expert" },
              { name: "Farhan", role: "Junior Barber" },
            ].map((b) => (
              <div key={b.name} className="text-center">
                <div className="aspect-[3/4] bg-[#111] border border-[#222] mb-6 flex items-center justify-center">
                  <p className="text-5xl font-bold text-[#1a1a1a]">{b.name[0]}</p>
                </div>
                <p className="font-semibold mb-1">{b.name}</p>
                <p className="text-[#666] text-sm">{b.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#d4af37]">
        <div className="max-w-7xl mx-auto px-6 py-24 text-center">
          <h2 className="text-4xl font-bold text-black mb-6">Ready for a Fresh Look?</h2>
          <p className="text-black/70 mb-10 max-w-md mx-auto">
            Book appointment sekarang dan rasakan pengalaman grooming premium.
          </p>
          <Link href="/booking" className="inline-block bg-black text-white font-semibold px-10 py-4 text-sm tracking-wide">
            BOOK NOW
          </Link>
        </div>
      </section>

      {/* Location */}
      <section className="bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <p className="text-[#d4af37] text-sm tracking-[0.2em] mb-4">LOKASI</p>
              <h2 className="text-4xl font-bold mb-10">Visit Our Shop</h2>
              <div className="space-y-6 text-[#888]">
                <div>
                  <p className="text-white font-semibold mb-2">Alamat</p>
                  <p>Jl. Sudirman No. 123, Jakarta Pusat 10220</p>
                </div>
                <div>
                  <p className="text-white font-semibold mb-2">Jam Operasional</p>
                  <p>Senin - Minggu: 10:00 - 21:00</p>
                </div>
                <div>
                  <p className="text-white font-semibold mb-2">Telepon</p>
                  <p>+62 21 1234 5678</p>
                </div>
              </div>
            </div>
            <div className="aspect-video lg:aspect-auto bg-[#111] border border-[#222] flex items-center justify-center">
              <p className="text-[#333] text-sm tracking-[0.2em]">MAP</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
