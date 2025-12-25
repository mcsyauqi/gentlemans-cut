"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const barbers = [
  { name: "Master Aldo", role: "Founder & Head Barber", years: 15, specialty: "Classic & Executive Cuts", bio: "With over 15 years of experience, Aldo founded Gentleman's Cut with a vision to bring premium barbering to Jakarta. His precision cuts and attention to detail have earned him a loyal following.", skills: ["Classic Cuts", "Straight Razor", "Styling"] },
  { name: "Ricky", role: "Senior Barber", years: 10, specialty: "Fades & Modern Styles", bio: "Ricky is our fade specialist, known for creating seamless transitions and modern styles. He stays updated with the latest trends while mastering timeless techniques.", skills: ["Skin Fades", "Undercuts", "Beard Design"] },
  { name: "Dimas", role: "Style Expert", years: 7, specialty: "Creative & Trendy Looks", bio: "The creative force of our team, Dimas excels at personalized styles that match each client's personality. His artistic approach makes him popular among younger clients.", skills: ["Texture Work", "Hair Art", "Color"] },
  { name: "Farhan", role: "Junior Barber", years: 3, specialty: "All-Round Services", bio: "Our rising talent, Farhan brings fresh energy and quick learning. He's mastered the fundamentals and continues to grow under the mentorship of our senior barbers.", skills: ["Quick Cuts", "Basic Fades", "Grooming"] },
];

export default function BarberPage() {
  return (
    <>
      <section className="pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-2xl">
            <p className="text-gold uppercase tracking-[0.3em] text-sm mb-3">The Team</p>
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">Meet Our Expert Barbers</h1>
            <p className="text-white/60 text-lg">Skilled craftsmen dedicated to making you look and feel your best.</p>
          </motion.div>
        </div>
      </section>

      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="space-y-16">
            {barbers.map((barber, i) => (
              <motion.div key={barber.name} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className={`grid lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? "lg:grid-flow-dense" : ""}`}>
                <div className={i % 2 === 1 ? "lg:col-start-2" : ""}>
                  <div className="aspect-[4/5] bg-neutral-800 relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-9xl font-display font-bold text-white/5">{barber.name[0]}</span>
                    </div>
                    <div className="absolute bottom-0 left-0 bg-gold text-black p-4">
                      <p className="text-sm uppercase tracking-wider">{barber.years}+ Years</p>
                    </div>
                  </div>
                </div>
                <div>
                  <p className="text-gold uppercase tracking-wider text-sm mb-2">{barber.role}</p>
                  <h2 className="text-4xl font-display font-bold mb-4">{barber.name}</h2>
                  <p className="text-white/60 mb-6 leading-relaxed">{barber.bio}</p>
                  <div className="mb-6">
                    <p className="text-sm text-white/40 uppercase tracking-wider mb-3">Specialties</p>
                    <div className="flex flex-wrap gap-2">
                      {barber.skills.map((skill) => (
                        <span key={skill} className="bg-neutral-800 px-4 py-2 text-sm">{skill}</span>
                      ))}
                    </div>
                  </div>
                  <Link href="/booking" className="inline-flex items-center gap-2 bg-gold text-black px-6 py-3 font-semibold uppercase tracking-wider text-sm hover:bg-white transition-colors">
                    Book with {barber.name.split(" ")[0]} <ArrowRight size={16} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-neutral-900">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Want to Join Our Team?</h2>
          <p className="text-white/60 mb-8 max-w-md mx-auto">We're always looking for talented barbers who share our passion for excellence.</p>
          <Link href="/kontak" className="inline-flex items-center gap-2 border border-gold text-gold px-8 py-4 font-semibold uppercase tracking-wider hover:bg-gold hover:text-black transition-colors">
            Apply Now <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
