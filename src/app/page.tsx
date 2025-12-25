import Link from "next/link";

const services = [
  { name: "Classic Cut", price: "75K" },
  { name: "Premium Cut", price: "120K" },
  { name: "Hot Shave", price: "100K" },
  { name: "Beard Trim", price: "80K" },
];

const barbers = [
  { name: "Aldo", role: "Master Barber" },
  { name: "Ricky", role: "Senior Barber" },
  { name: "Dimas", role: "Style Expert" },
  { name: "Farhan", role: "Junior Barber" },
];

export default function Home() {
  return (
    <div className="pt-14">
      {/* Hero */}
      <section className="min-h-[80vh] flex items-center justify-center text-center px-4">
        <div className="max-w-2xl">
          <p className="text-[#C9A962] text-sm tracking-widest mb-4">PREMIUM BARBERSHOP</p>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Where Style Meets <span className="text-[#C9A962]">Precision</span>
          </h1>
          <p className="text-white/60 text-lg mb-8">
            Experience the art of grooming at Jakarta's finest barbershop.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/booking"
              className="bg-[#C9A962] text-black px-8 py-3 font-medium"
            >
              Book Appointment
            </Link>
            <Link
              href="/layanan"
              className="border border-white/30 px-8 py-3"
            >
              View Services
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-white/10 py-12">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-3xl md:text-4xl font-bold text-[#C9A962]">15+</p>
              <p className="text-white/50 text-sm mt-1">Years</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-[#C9A962]">10K+</p>
              <p className="text-white/50 text-sm mt-1">Clients</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-[#C9A962]">4.9</p>
              <p className="text-white/50 text-sm mt-1">Rating</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-10">
            <p className="text-[#C9A962] text-sm tracking-widest mb-2">LAYANAN</p>
            <h2 className="text-3xl font-bold">Our Services</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {services.map((s) => (
              <div key={s.name} className="bg-white/5 p-6 flex justify-between items-center">
                <span className="font-medium">{s.name}</span>
                <span className="text-[#C9A962] font-bold">Rp {s.price}</span>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/layanan" className="text-[#C9A962] text-sm">
              View All Services →
            </Link>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-16 bg-white/5">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <p className="text-[#C9A962] text-sm tracking-widest mb-2">TENTANG KAMI</p>
          <h2 className="text-3xl font-bold mb-6">Crafting Confidence Since 2010</h2>
          <p className="text-white/60 leading-relaxed mb-4">
            Gentleman's Cut berdiri dengan satu misi: memberikan pengalaman grooming
            terbaik untuk pria Indonesia. Kami menggabungkan teknik klasik dengan gaya modern.
          </p>
          <Link href="/barber" className="text-[#C9A962] text-sm">
            Meet Our Team →
          </Link>
        </div>
      </section>

      {/* Team */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-10">
            <p className="text-[#C9A962] text-sm tracking-widest mb-2">TIM</p>
            <h2 className="text-3xl font-bold">Our Barbers</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {barbers.map((b) => (
              <div key={b.name} className="text-center">
                <div className="aspect-square bg-white/5 mb-3 flex items-center justify-center">
                  <span className="text-4xl font-bold text-white/10">{b.name[0]}</span>
                </div>
                <p className="font-medium">{b.name}</p>
                <p className="text-white/50 text-sm">{b.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#C9A962]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-black mb-4">Join Our Membership</h2>
          <p className="text-black/70 mb-6">
            Dapatkan diskon hingga 20% dan benefit spesial lainnya.
          </p>
          <Link
            href="/harga"
            className="inline-block bg-black text-white px-8 py-3 font-medium"
          >
            View Plans
          </Link>
        </div>
      </section>

      {/* Location */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-[#C9A962] text-sm tracking-widest mb-2">LOKASI</p>
              <h2 className="text-3xl font-bold mb-6">Visit Us</h2>
              <div className="space-y-3 text-white/60">
                <p>📍 Jl. Sudirman No. 123, Jakarta Pusat</p>
                <p>🕐 Senin - Minggu: 10:00 - 21:00</p>
                <p>📞 +62 21 1234 5678</p>
              </div>
              <Link
                href="/booking"
                className="inline-block bg-[#C9A962] text-black px-6 py-3 font-medium mt-6"
              >
                Book Your Visit
              </Link>
            </div>
            <div className="aspect-video bg-white/5 flex items-center justify-center">
              <span className="text-white/20 text-sm">MAP</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
