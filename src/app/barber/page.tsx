import Link from "next/link";

const barbers = [
  {
    name: "Master Aldo",
    role: "Founder & Head Barber",
    years: 15,
    specialty: "Classic & Executive Cuts",
    bio: "Dengan pengalaman 15+ tahun, Aldo mendirikan Gentleman's Cut untuk menghadirkan barbering premium di Jakarta.",
  },
  {
    name: "Ricky",
    role: "Senior Barber",
    years: 10,
    specialty: "Fades & Modern Styles",
    bio: "Spesialis fade dengan transisi mulus. Selalu update dengan tren terbaru.",
  },
  {
    name: "Dimas",
    role: "Style Expert",
    years: 7,
    specialty: "Creative & Trendy Looks",
    bio: "Kekuatan kreatif tim. Unggul dalam gaya personal sesuai kepribadian klien.",
  },
  {
    name: "Farhan",
    role: "Junior Barber",
    years: 3,
    specialty: "All-Round Services",
    bio: "Talenta muda dengan energi segar. Terus berkembang di bawah bimbingan senior.",
  },
];

export default function BarberPage() {
  return (
    <div className="pt-14">
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-[#C9A962] text-sm tracking-widest mb-2">TIM KAMI</p>
            <h1 className="text-4xl font-bold mb-4">Meet Our Barbers</h1>
            <p className="text-white/60">Para ahli yang berdedikasi untuk penampilan terbaik Anda.</p>
          </div>

          <div className="space-y-6">
            {barbers.map((b) => (
              <div key={b.name} className="bg-white/5 p-6">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-white/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl font-bold text-white/20">{b.name[0]}</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-bold">{b.name}</h3>
                      <span className="text-[#C9A962] text-xs">{b.years}+ thn</span>
                    </div>
                    <p className="text-white/50 text-sm mb-2">{b.role}</p>
                    <p className="text-white/60 text-sm">{b.bio}</p>
                    <p className="text-[#C9A962] text-xs mt-2">Specialty: {b.specialty}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/booking" className="inline-block bg-[#C9A962] text-black px-8 py-3 font-medium">
              Book Appointment
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
