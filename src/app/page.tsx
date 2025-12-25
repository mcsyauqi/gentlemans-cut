"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Star, Clock, MapPin, Phone } from "lucide-react";

const services = [
  { name: "Classic Cut", price: "75K", image: "01" },
  { name: "Premium Cut", price: "120K", image: "02" },
  { name: "Hot Shave", price: "100K", image: "03" },
  { name: "Coloring", price: "150K", image: "04" },
  { name: "Beard Trim", price: "80K", image: "05" },
  { name: "Kids Cut", price: "50K", image: "06" },
];

const team = [
  { name: "Aldo", title: "Master Barber", years: 15 },
  { name: "Ricky", title: "Senior Barber", years: 10 },
  { name: "Dimas", title: "Style Expert", years: 7 },
  { name: "Farhan", title: "Junior Barber", years: 3 },
];

const reviews = [
  { text: "Best barbershop in town! The attention to detail is incredible.", author: "Andi P.", rating: 5 },
  { text: "Been coming here for 3 years. Consistent quality every time.", author: "Budi S.", rating: 5 },
  { text: "Great atmosphere, skilled barbers. Highly recommended!", author: "Reza M.", rating: 5 },
];

export default function Home() {
  return (
    <>
      {/* HERO - Split Layout */}
      <section className="min-h-screen flex items-center pt-20">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <p className="text-gold uppercase tracking-[0.3em] text-sm mb-4">Premium Barbershop</p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-tight mb-6">
                Where Style<br />
                <span className="text-gold">Meets</span><br />
                Precision
              </h1>
              <p className="text-white/60 text-lg mb-8 max-w-md">
                Experience the art of grooming at Jakarta's finest barbershop. Classic techniques, modern style.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/booking" className="bg-gold text-black px-8 py-4 font-semibold uppercase tracking-wider hover:bg-white transition-colors inline-flex items-center justify-center gap-2">
                  Book Appointment <ArrowRight size={18} />
                </Link>
                <Link href="/layanan" className="border border-white/30 text-white px-8 py-4 font-semibold uppercase tracking-wider hover:border-gold hover:text-gold transition-colors text-center">
                  Our Services
                </Link>
              </div>

              <div className="flex items-center gap-8 mt-12 pt-8 border-t border-white/10">
                <div>
                  <p className="text-3xl font-display font-bold text-gold">15+</p>
                  <p className="text-white/40 text-sm">Years Experience</p>
                </div>
                <div>
                  <p className="text-3xl font-display font-bold text-gold">10K+</p>
                  <p className="text-white/40 text-sm">Happy Clients</p>
                </div>
                <div>
                  <p className="text-3xl font-display font-bold text-gold">4.9</p>
                  <p className="text-white/40 text-sm">Rating</p>
                </div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="relative">
              <div className="aspect-[4/5] bg-gradient-to-br from-neutral-800 to-neutral-900 rounded-sm overflow-hidden relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-8xl font-display font-bold text-gold/20">GC</p>
                    <p className="text-white/20 text-sm tracking-widest uppercase mt-2">Est. 2010</p>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/80 to-transparent"></div>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-gold text-black p-6">
                <p className="text-sm uppercase tracking-wider font-semibold">Open Daily</p>
                <p className="text-2xl font-display font-bold">10 - 21</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SERVICES - Horizontal Scroll */}
      <section className="py-24 bg-neutral-900">
        <div className="max-w-7xl mx-auto px-6 mb-12">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <p className="text-gold uppercase tracking-[0.3em] text-sm mb-3">What We Offer</p>
              <h2 className="text-4xl md:text-5xl font-display font-bold">Our Services</h2>
            </div>
            <Link href="/layanan" className="text-gold hover:text-white transition-colors inline-flex items-center gap-2 text-sm uppercase tracking-wider">
              View All Services <ArrowRight size={16} />
            </Link>
          </div>
        </div>

        <div className="overflow-x-auto pb-6 scrollbar-thin">
          <div className="flex gap-6 px-6 min-w-max">
            {services.map((service, i) => (
              <motion.div key={service.name} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="w-72 group">
                <div className="aspect-[3/4] bg-neutral-800 mb-4 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-6xl font-display font-bold text-white/10">{service.image}</span>
                  </div>
                  <div className="absolute inset-0 bg-gold/0 group-hover:bg-gold/20 transition-colors"></div>
                </div>
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold">{service.name}</h3>
                  <p className="text-gold font-display text-xl">Rp {service.price}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT - Full Width Image */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-square bg-neutral-800 relative">
                  <div className="absolute inset-0 flex items-center justify-center text-4xl font-display font-bold text-white/10">01</div>
                </div>
                <div className="aspect-square bg-neutral-800 relative mt-12">
                  <div className="absolute inset-0 flex items-center justify-center text-4xl font-display font-bold text-white/10">02</div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <p className="text-gold uppercase tracking-[0.3em] text-sm mb-3">About Us</p>
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Crafting Confidence Since 2010</h2>
              <p className="text-white/60 mb-6 leading-relaxed">
                Gentleman's Cut berdiri dengan satu misi: memberikan pengalaman grooming terbaik untuk pria Indonesia. Kami menggabungkan teknik klasik dengan gaya modern.
              </p>
              <p className="text-white/60 mb-8 leading-relaxed">
                Setiap barber kami terlatih untuk memahami kebutuhan unik setiap pelanggan, memastikan Anda keluar dengan penampilan dan rasa percaya diri terbaik.
              </p>
              <Link href="/barber" className="inline-flex items-center gap-2 text-gold hover:text-white transition-colors uppercase tracking-wider text-sm">
                Meet Our Team <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* TEAM - Grid */}
      <section className="py-24 bg-neutral-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-gold uppercase tracking-[0.3em] text-sm mb-3">The Experts</p>
            <h2 className="text-4xl md:text-5xl font-display font-bold">Our Barbers</h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, i) => (
              <motion.div key={member.name} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="group">
                <div className="aspect-[3/4] bg-neutral-800 mb-4 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-5xl font-display font-bold text-white/10">{member.name[0]}</span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
                    <p className="text-gold text-sm">{member.years}+ Years</p>
                  </div>
                </div>
                <h3 className="text-lg font-semibold">{member.name}</h3>
                <p className="text-white/50 text-sm">{member.title}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-gold uppercase tracking-[0.3em] text-sm mb-3">Testimonials</p>
            <h2 className="text-4xl md:text-5xl font-display font-bold">What Clients Say</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((review, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-neutral-900 p-8 border-l-2 border-gold">
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, j) => (
                    <Star key={j} size={16} className="fill-gold text-gold" />
                  ))}
                </div>
                <p className="text-white/70 mb-6 italic">"{review.text}"</p>
                <p className="text-gold font-semibold">{review.author}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* MEMBERSHIP */}
      <section className="py-24 bg-gold">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-black/60 uppercase tracking-[0.3em] text-sm mb-3">Exclusive</p>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-black mb-6">Join Our Membership</h2>
              <p className="text-black/70 mb-8 max-w-md">
                Dapatkan akses prioritas, diskon eksklusif hingga 20%, dan benefit spesial lainnya sebagai member Gentleman's Cut.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/harga" className="bg-black text-white px-8 py-4 font-semibold uppercase tracking-wider hover:bg-neutral-800 transition-colors text-center">
                  View Plans
                </Link>
                <Link href="/booking" className="border-2 border-black text-black px-8 py-4 font-semibold uppercase tracking-wider hover:bg-black hover:text-white transition-colors text-center">
                  Join Now
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="bg-black/10 p-6">
                <p className="text-4xl font-display font-bold text-black">200K</p>
                <p className="text-black/60 text-sm">Silver/mo</p>
              </div>
              <div className="bg-black text-white p-6">
                <p className="text-4xl font-display font-bold">350K</p>
                <p className="text-white/60 text-sm">Gold/mo</p>
              </div>
              <div className="bg-black/10 p-6">
                <p className="text-4xl font-display font-bold text-black">500K</p>
                <p className="text-black/60 text-sm">Platinum/mo</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LOCATION */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <p className="text-gold uppercase tracking-[0.3em] text-sm mb-3">Find Us</p>
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-8">Visit Our Shop</h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="text-gold mt-1" size={20} />
                  <div>
                    <p className="font-semibold mb-1">Address</p>
                    <p className="text-white/60">Jl. Sudirman No. 123, Jakarta Pusat 10220</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Clock className="text-gold mt-1" size={20} />
                  <div>
                    <p className="font-semibold mb-1">Hours</p>
                    <p className="text-white/60">Monday - Sunday: 10:00 - 21:00</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="text-gold mt-1" size={20} />
                  <div>
                    <p className="font-semibold mb-1">Contact</p>
                    <p className="text-white/60">+62 21 1234 5678</p>
                  </div>
                </div>
              </div>

              <Link href="/booking" className="inline-flex items-center gap-2 bg-gold text-black px-8 py-4 font-semibold uppercase tracking-wider hover:bg-white transition-colors mt-8">
                Book Your Visit <ArrowRight size={18} />
              </Link>
            </div>
            <div className="aspect-video lg:aspect-auto bg-neutral-800 relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-white/20 uppercase tracking-widest text-sm">Map Location</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
