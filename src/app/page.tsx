"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Star, Clock, MapPin, Phone } from "lucide-react";

const services = [
  { name: "Classic Cut", price: "75K", desc: "Potongan klasik dengan finishing premium" },
  { name: "Premium Cut", price: "120K", desc: "Full service dengan cuci & styling" },
  { name: "Hot Shave", price: "100K", desc: "Cukur dengan hot towel treatment" },
  { name: "Beard Trim", price: "80K", desc: "Trim & grooming jenggot" },
  { name: "Hair Color", price: "150K", desc: "Pewarnaan rambut profesional" },
  { name: "Kids Cut", price: "50K", desc: "Potongan untuk anak di bawah 12" },
];

const team = [
  { name: "Aldo", role: "Master Barber", years: 15 },
  { name: "Ricky", role: "Senior Barber", years: 10 },
  { name: "Dimas", role: "Style Expert", years: 7 },
  { name: "Farhan", role: "Junior Barber", years: 3 },
];

const reviews = [
  { text: "Best barbershop in town! The attention to detail is incredible.", author: "Andi P.", rating: 5 },
  { text: "Been coming here for 3 years. Consistent quality every time.", author: "Budi S.", rating: 5 },
  { text: "Great atmosphere, skilled barbers. Highly recommended!", author: "Reza M.", rating: 5 },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center pt-16">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-gold text-sm tracking-widest mb-4">
                PREMIUM BARBERSHOP
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 leading-tight">
                Where Style
                <br />
                <span className="text-gold">Meets</span>
                <br />
                Precision
              </h1>
              <p className="text-white/60 text-lg mb-8 max-w-md">
                Experience the art of grooming at Jakarta's finest barbershop.
                Classic techniques, modern style.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Link
                  href="/booking"
                  className="bg-gold text-dark px-6 py-3 font-semibold text-center hover:bg-gold-light transition-colors inline-flex items-center justify-center gap-2"
                >
                  Book Appointment <ArrowRight size={18} />
                </Link>
                <Link
                  href="/layanan"
                  className="border border-white/30 text-white px-6 py-3 font-semibold text-center hover:border-gold hover:text-gold transition-colors"
                >
                  Our Services
                </Link>
              </div>

              <div className="flex gap-8 pt-8 border-t border-white/10">
                <div>
                  <p className="text-3xl font-display font-bold text-gold">15+</p>
                  <p className="text-white/40 text-sm">Years</p>
                </div>
                <div>
                  <p className="text-3xl font-display font-bold text-gold">10K+</p>
                  <p className="text-white/40 text-sm">Clients</p>
                </div>
                <div>
                  <p className="text-3xl font-display font-bold text-gold">4.9</p>
                  <p className="text-white/40 text-sm">Rating</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-[4/5] bg-dark-lighter flex items-center justify-center">
                <div className="text-center">
                  <p className="text-7xl font-display font-bold text-gold/20">GC</p>
                  <p className="text-white/20 text-sm tracking-widest mt-2">EST. 2010</p>
                </div>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-gold text-dark p-4">
                <p className="text-xs font-semibold">OPEN DAILY</p>
                <p className="text-xl font-display font-bold">10 - 21</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-dark-light">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
            <div>
              <p className="text-gold text-sm tracking-widest mb-2">LAYANAN KAMI</p>
              <h2 className="text-3xl md:text-4xl font-display font-bold">Our Services</h2>
            </div>
            <Link
              href="/layanan"
              className="text-gold hover:text-white transition-colors inline-flex items-center gap-2 text-sm"
            >
              View All <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((service, i) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-dark-card p-6 hover:bg-dark-lighter transition-colors group"
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-semibold group-hover:text-gold transition-colors">
                    {service.name}
                  </h3>
                  <span className="text-gold font-display text-xl">Rp {service.price}</span>
                </div>
                <p className="text-white/50 text-sm">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-square bg-dark-lighter flex items-center justify-center">
                <span className="text-4xl font-display font-bold text-white/10">01</span>
              </div>
              <div className="aspect-square bg-dark-lighter flex items-center justify-center mt-8">
                <span className="text-4xl font-display font-bold text-white/10">02</span>
              </div>
            </div>

            <div>
              <p className="text-gold text-sm tracking-widest mb-2">TENTANG KAMI</p>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                Crafting Confidence Since 2010
              </h2>
              <p className="text-white/60 mb-4 leading-relaxed">
                Gentleman's Cut berdiri dengan satu misi: memberikan pengalaman grooming
                terbaik untuk pria Indonesia. Kami menggabungkan teknik klasik dengan
                gaya modern.
              </p>
              <p className="text-white/60 mb-6 leading-relaxed">
                Setiap barber kami terlatih untuk memahami kebutuhan unik setiap
                pelanggan, memastikan Anda keluar dengan penampilan dan rasa percaya
                diri terbaik.
              </p>
              <Link
                href="/barber"
                className="text-gold hover:text-white transition-colors inline-flex items-center gap-2 text-sm"
              >
                Meet Our Team <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-dark-light">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-10">
            <p className="text-gold text-sm tracking-widest mb-2">TIM KAMI</p>
            <h2 className="text-3xl md:text-4xl font-display font-bold">Our Barbers</h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group"
              >
                <div className="aspect-[3/4] bg-dark-card mb-4 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-5xl font-display font-bold text-white/10">
                      {member.name[0]}
                    </span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-dark to-transparent">
                    <p className="text-gold text-sm">{member.years}+ Years</p>
                  </div>
                </div>
                <h3 className="font-semibold">{member.name}</h3>
                <p className="text-white/50 text-sm">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-10">
            <p className="text-gold text-sm tracking-widest mb-2">TESTIMONI</p>
            <h2 className="text-3xl md:text-4xl font-display font-bold">What Clients Say</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((review, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-dark-card p-6 border-l-2 border-gold"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, j) => (
                    <Star key={j} size={14} className="fill-gold text-gold" />
                  ))}
                </div>
                <p className="text-white/70 mb-4 italic">"{review.text}"</p>
                <p className="text-gold font-semibold text-sm">{review.author}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Membership Section */}
      <section className="py-16 bg-gold">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-dark/60 text-sm tracking-widest mb-2">EXCLUSIVE</p>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-dark mb-4">
                Join Our Membership
              </h2>
              <p className="text-dark/70 mb-6 max-w-md">
                Dapatkan akses prioritas, diskon eksklusif hingga 20%, dan benefit
                spesial lainnya sebagai member Gentleman's Cut.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/harga"
                  className="bg-dark text-white px-6 py-3 font-semibold text-center hover:bg-dark-light transition-colors"
                >
                  View Plans
                </Link>
                <Link
                  href="/booking"
                  className="border-2 border-dark text-dark px-6 py-3 font-semibold text-center hover:bg-dark hover:text-white transition-colors"
                >
                  Join Now
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div className="bg-dark/10 p-4 text-center">
                <p className="text-3xl font-display font-bold text-dark">200K</p>
                <p className="text-dark/60 text-sm">Silver/mo</p>
              </div>
              <div className="bg-dark text-white p-4 text-center">
                <p className="text-3xl font-display font-bold">350K</p>
                <p className="text-white/60 text-sm">Gold/mo</p>
              </div>
              <div className="bg-dark/10 p-4 text-center">
                <p className="text-3xl font-display font-bold text-dark">500K</p>
                <p className="text-dark/60 text-sm">Platinum/mo</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <p className="text-gold text-sm tracking-widest mb-2">LOKASI</p>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-8">
                Visit Our Shop
              </h2>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <MapPin className="text-gold mt-1 flex-shrink-0" size={20} />
                  <div>
                    <p className="font-semibold mb-1">Address</p>
                    <p className="text-white/60">Jl. Sudirman No. 123, Jakarta Pusat 10220</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Clock className="text-gold mt-1 flex-shrink-0" size={20} />
                  <div>
                    <p className="font-semibold mb-1">Hours</p>
                    <p className="text-white/60">Senin - Minggu: 10:00 - 21:00</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="text-gold mt-1 flex-shrink-0" size={20} />
                  <div>
                    <p className="font-semibold mb-1">Contact</p>
                    <p className="text-white/60">+62 21 1234 5678</p>
                  </div>
                </div>
              </div>

              <Link
                href="/booking"
                className="bg-gold text-dark px-6 py-3 font-semibold inline-flex items-center gap-2 mt-8 hover:bg-gold-light transition-colors"
              >
                Book Your Visit <ArrowRight size={18} />
              </Link>
            </div>

            <div className="aspect-video lg:aspect-auto bg-dark-lighter flex items-center justify-center">
              <p className="text-white/20 text-sm tracking-widest">MAP LOCATION</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
