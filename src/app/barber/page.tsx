"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const barbers = [
  {
    name: "Master Aldo",
    role: "Founder & Head Barber",
    years: 15,
    specialty: "Classic & Executive Cuts",
    bio: "Dengan pengalaman lebih dari 15 tahun, Aldo mendirikan Gentleman's Cut dengan visi menghadirkan barbering premium di Jakarta. Ketepatan potongan dan perhatian terhadap detail membuatnya memiliki pelanggan setia.",
    skills: ["Classic Cuts", "Straight Razor", "Styling"],
  },
  {
    name: "Ricky",
    role: "Senior Barber",
    years: 10,
    specialty: "Fades & Modern Styles",
    bio: "Ricky adalah spesialis fade kami, terkenal dengan transisi yang mulus dan gaya modern. Ia selalu update dengan tren terbaru sambil menguasai teknik klasik.",
    skills: ["Skin Fades", "Undercuts", "Beard Design"],
  },
  {
    name: "Dimas",
    role: "Style Expert",
    years: 7,
    specialty: "Creative & Trendy Looks",
    bio: "Kekuatan kreatif tim kami, Dimas unggul dalam gaya personal yang sesuai kepribadian setiap klien. Pendekatan artistiknya membuatnya populer di kalangan klien muda.",
    skills: ["Texture Work", "Hair Art", "Color"],
  },
  {
    name: "Farhan",
    role: "Junior Barber",
    years: 3,
    specialty: "All-Round Services",
    bio: "Talenta muda kami, Farhan membawa energi segar dan pembelajaran cepat. Ia telah menguasai dasar-dasar dan terus berkembang di bawah bimbingan senior barber kami.",
    skills: ["Quick Cuts", "Basic Fades", "Grooming"],
  },
];

export default function BarberPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-24 pb-12">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-xl"
          >
            <p className="text-gold text-sm tracking-widest mb-2">TIM KAMI</p>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Meet Our Expert Barbers
            </h1>
            <p className="text-white/60">
              Para craftsman terampil yang berdedikasi untuk membuat Anda tampil dan merasa terbaik.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Barbers List */}
      <section className="pb-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="space-y-12">
            {barbers.map((barber, i) => (
              <motion.div
                key={barber.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`grid lg:grid-cols-2 gap-8 items-center ${
                  i % 2 === 1 ? "lg:grid-flow-dense" : ""
                }`}
              >
                <div className={i % 2 === 1 ? "lg:col-start-2" : ""}>
                  <div className="aspect-[4/5] bg-dark-lighter relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-8xl font-display font-bold text-white/5">
                        {barber.name[0]}
                      </span>
                    </div>
                    <div className="absolute bottom-0 left-0 bg-gold text-dark p-4">
                      <p className="text-sm font-semibold">{barber.years}+ YEARS</p>
                    </div>
                  </div>
                </div>

                <div>
                  <p className="text-gold text-sm tracking-widest mb-2">{barber.role}</p>
                  <h2 className="text-3xl font-display font-bold mb-4">{barber.name}</h2>
                  <p className="text-white/60 mb-6 leading-relaxed">{barber.bio}</p>

                  <div className="mb-6">
                    <p className="text-white/40 text-sm mb-3">SPECIALTIES</p>
                    <div className="flex flex-wrap gap-2">
                      {barber.skills.map((skill) => (
                        <span
                          key={skill}
                          className="bg-dark-lighter px-4 py-2 text-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Link
                    href="/booking"
                    className="bg-gold text-dark px-6 py-3 font-semibold inline-flex items-center gap-2 hover:bg-gold-light transition-colors"
                  >
                    Book with {barber.name.split(" ")[0]} <ArrowRight size={16} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Team CTA */}
      <section className="py-12 bg-dark-light">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-display font-bold mb-4">
            Want to Join Our Team?
          </h2>
          <p className="text-white/60 mb-6 max-w-md mx-auto">
            Kami selalu mencari barber berbakat yang berbagi passion untuk keunggulan.
          </p>
          <Link
            href="/kontak"
            className="border border-gold text-gold px-6 py-3 font-semibold inline-flex items-center gap-2 hover:bg-gold hover:text-dark transition-colors"
          >
            Apply Now <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
