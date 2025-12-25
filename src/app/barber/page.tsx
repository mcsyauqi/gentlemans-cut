import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const barbers = [
  {
    name: "Master Aldo",
    role: "Founder & Head Barber",
    exp: "15+ tahun",
    specialty: "Classic & Executive Cuts",
    bio: "Dengan pengalaman lebih dari 15 tahun, Aldo mendirikan Gentleman's Cut untuk menghadirkan barbering premium di Jakarta. Ketepatan dan perhatian detail adalah ciri khasnya.",
  },
  {
    name: "Ricky",
    role: "Senior Barber",
    exp: "10+ tahun",
    specialty: "Fades & Modern Styles",
    bio: "Spesialis fade dengan transisi yang mulus. Ricky selalu update dengan tren terbaru sambil menguasai teknik klasik.",
  },
  {
    name: "Dimas",
    role: "Style Expert",
    exp: "7+ tahun",
    specialty: "Creative & Trendy Looks",
    bio: "Kekuatan kreatif tim kami. Dimas unggul dalam menciptakan gaya personal yang sesuai kepribadian setiap klien.",
  },
  {
    name: "Farhan",
    role: "Junior Barber",
    exp: "3+ tahun",
    specialty: "All-Round Services",
    bio: "Talenta muda dengan energi segar. Farhan terus berkembang di bawah bimbingan senior barber kami.",
  },
];

export default function BarberPage() {
  return (
    <>
      <Header />

      <section className="pt-16 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="max-w-2xl mb-16">
            <p className="text-[#d4af37] text-sm tracking-[0.2em] mb-4">TIM KAMI</p>
            <h1 className="text-5xl font-bold mb-6">Meet Our Barbers</h1>
            <p className="text-[#888] text-lg">Para craftsman terampil yang berdedikasi untuk penampilan terbaik Anda.</p>
          </div>

          <div className="space-y-16">
            {barbers.map((b, i) => (
              <div key={b.name} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
                <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="aspect-[4/5] bg-[#111] border border-[#222] flex items-center justify-center">
                    <p className="text-8xl font-bold text-[#1a1a1a]">{b.name[0]}</p>
                  </div>
                </div>
                <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                  <p className="text-[#d4af37] text-sm tracking-[0.2em] mb-2">{b.exp}</p>
                  <h2 className="text-3xl font-bold mb-2">{b.name}</h2>
                  <p className="text-[#888] mb-6">{b.role}</p>
                  <p className="text-[#888] leading-relaxed mb-6">{b.bio}</p>
                  <div className="mb-8">
                    <p className="text-[#666] text-sm mb-2">SPECIALTY</p>
                    <p className="text-white">{b.specialty}</p>
                  </div>
                  <Link href="/booking" className="inline-block bg-[#d4af37] text-black font-semibold px-6 py-3 text-sm">
                    BOOK WITH {b.name.split(" ")[0].toUpperCase()}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#111] border-t border-[#222]">
        <div className="max-w-7xl mx-auto px-6 py-16 text-center">
          <h2 className="text-2xl font-bold mb-4">Ingin Bergabung?</h2>
          <p className="text-[#888] mb-8">Kami selalu mencari barber berbakat.</p>
          <Link href="/kontak" className="inline-block border border-[#d4af37] text-[#d4af37] font-semibold px-8 py-3 text-sm hover:bg-[#d4af37] hover:text-black transition-colors">
            APPLY NOW
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
