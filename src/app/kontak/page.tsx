"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Instagram, MessageCircle } from "lucide-react";
import Link from "next/link";

export default function KontakPage() {
  return (
    <>
      <section className="pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-2xl">
            <p className="text-gold uppercase tracking-[0.3em] text-sm mb-3">Get In Touch</p>
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">Contact Us</h1>
            <p className="text-white/60 text-lg">Have questions? We're here to help. Reach out to us anytime.</p>
          </motion.div>
        </div>
      </section>

      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="bg-neutral-900 p-8 md:p-12">
                <h2 className="text-2xl font-display font-bold mb-8">Send Us a Message</h2>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-white/60 text-sm uppercase tracking-wider mb-2">Name</label>
                      <input type="text" className="w-full bg-neutral-800 border border-white/10 px-4 py-3 text-white focus:border-gold focus:outline-none" placeholder="Your name" />
                    </div>
                    <div>
                      <label className="block text-white/60 text-sm uppercase tracking-wider mb-2">Phone</label>
                      <input type="tel" className="w-full bg-neutral-800 border border-white/10 px-4 py-3 text-white focus:border-gold focus:outline-none" placeholder="08xxxxxxxxxx" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-white/60 text-sm uppercase tracking-wider mb-2">Email</label>
                    <input type="email" className="w-full bg-neutral-800 border border-white/10 px-4 py-3 text-white focus:border-gold focus:outline-none" placeholder="your@email.com" />
                  </div>
                  <div>
                    <label className="block text-white/60 text-sm uppercase tracking-wider mb-2">Subject</label>
                    <select className="w-full bg-neutral-800 border border-white/10 px-4 py-3 text-white focus:border-gold focus:outline-none">
                      <option value="">Select a subject</option>
                      <option value="booking">Booking Inquiry</option>
                      <option value="membership">Membership</option>
                      <option value="career">Career Opportunity</option>
                      <option value="feedback">Feedback</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-white/60 text-sm uppercase tracking-wider mb-2">Message</label>
                    <textarea rows={5} className="w-full bg-neutral-800 border border-white/10 px-4 py-3 text-white focus:border-gold focus:outline-none resize-none" placeholder="Your message..."></textarea>
                  </div>
                  <button type="submit" className="w-full bg-gold text-black py-4 font-semibold uppercase tracking-wider hover:bg-white transition-colors">
                    Send Message
                  </button>
                </form>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-8">
              <div>
                <h2 className="text-2xl font-display font-bold mb-8">Visit Our Shop</h2>
                <div className="aspect-video bg-neutral-800 relative mb-8">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <p className="text-white/20 uppercase tracking-widest text-sm">Map Location</p>
                  </div>
                </div>
              </div>

              <div className="grid gap-6">
                <div className="flex items-start gap-4 p-6 bg-neutral-900">
                  <MapPin className="text-gold mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-semibold mb-1">Address</h3>
                    <p className="text-white/60">Jl. Sudirman No. 123<br />Jakarta Pusat 10220</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-neutral-900">
                  <Clock className="text-gold mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-semibold mb-1">Opening Hours</h3>
                    <p className="text-white/60">Monday - Sunday<br />10:00 - 21:00</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-neutral-900">
                  <Phone className="text-gold mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-semibold mb-1">Phone</h3>
                    <p className="text-white/60">+62 21 1234 5678</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-neutral-900">
                  <Mail className="text-gold mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <p className="text-white/60">info@gentlemanscut.id</p>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <h3 className="font-semibold mb-4">Follow Us</h3>
                <div className="flex gap-4">
                  <a href="https://instagram.com/gentlemanscut" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-neutral-900 flex items-center justify-center text-white/60 hover:text-gold hover:bg-neutral-800 transition-colors">
                    <Instagram size={20} />
                  </a>
                  <a href="https://wa.me/6221123456789" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-neutral-900 flex items-center justify-center text-white/60 hover:text-gold hover:bg-neutral-800 transition-colors">
                    <MessageCircle size={20} />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gold">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-black mb-4">Prefer to Book Directly?</h2>
          <p className="text-black/70 mb-8 max-w-md mx-auto">Skip the form and book your appointment instantly through our booking system.</p>
          <Link href="/booking" className="inline-flex items-center gap-2 bg-black text-white px-8 py-4 font-semibold uppercase tracking-wider hover:bg-neutral-800 transition-colors">
            Book Now
          </Link>
        </div>
      </section>
    </>
  );
}
