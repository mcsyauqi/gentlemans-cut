import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function KontakPage() {
  return (
    <>
      <Header />

      <section className="pt-16 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="max-w-2xl mb-16">
            <p className="text-[#d4af37] text-sm tracking-[0.2em] mb-4">KONTAK</p>
            <h1 className="text-5xl font-bold mb-6">Get in Touch</h1>
            <p className="text-[#888] text-lg">Ada pertanyaan? Hubungi kami kapan saja.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Form */}
            <div className="bg-[#111] border border-[#222] p-8">
              <h2 className="text-xl font-bold mb-8">Kirim Pesan</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[#888] text-sm mb-2">Nama</label>
                    <input
                      type="text"
                      className="w-full bg-[#0a0a0a] border border-[#222] p-4 text-white focus:border-[#d4af37] focus:outline-none"
                      placeholder="Nama Anda"
                    />
                  </div>
                  <div>
                    <label className="block text-[#888] text-sm mb-2">Telepon</label>
                    <input
                      type="tel"
                      className="w-full bg-[#0a0a0a] border border-[#222] p-4 text-white focus:border-[#d4af37] focus:outline-none"
                      placeholder="08xxxxxxxxxx"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-[#888] text-sm mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full bg-[#0a0a0a] border border-[#222] p-4 text-white focus:border-[#d4af37] focus:outline-none"
                    placeholder="email@contoh.com"
                  />
                </div>
                <div>
                  <label className="block text-[#888] text-sm mb-2">Subject</label>
                  <select className="w-full bg-[#0a0a0a] border border-[#222] p-4 text-white focus:border-[#d4af37] focus:outline-none">
                    <option value="">Pilih subject</option>
                    <option value="booking">Booking Inquiry</option>
                    <option value="membership">Membership</option>
                    <option value="career">Career</option>
                    <option value="other">Lainnya</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[#888] text-sm mb-2">Pesan</label>
                  <textarea
                    rows={5}
                    className="w-full bg-[#0a0a0a] border border-[#222] p-4 text-white focus:border-[#d4af37] focus:outline-none resize-none"
                    placeholder="Pesan Anda..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#d4af37] text-black font-semibold py-4 text-sm tracking-wide"
                >
                  KIRIM PESAN
                </button>
              </form>
            </div>

            {/* Info */}
            <div className="space-y-8">
              <div className="bg-[#111] border border-[#222] p-8">
                <h3 className="font-bold mb-4">Alamat</h3>
                <p className="text-[#888]">
                  Jl. Sudirman No. 123<br />
                  Jakarta Pusat 10220
                </p>
              </div>

              <div className="bg-[#111] border border-[#222] p-8">
                <h3 className="font-bold mb-4">Jam Operasional</h3>
                <p className="text-[#888]">
                  Senin - Minggu<br />
                  10:00 - 21:00
                </p>
              </div>

              <div className="bg-[#111] border border-[#222] p-8">
                <h3 className="font-bold mb-4">Kontak</h3>
                <div className="text-[#888] space-y-2">
                  <p>+62 21 1234 5678</p>
                  <p>info@gentlemanscut.id</p>
                </div>
              </div>

              <div className="bg-[#111] border border-[#222] p-8">
                <h3 className="font-bold mb-4">Social Media</h3>
                <div className="flex gap-4">
                  <a
                    href="https://instagram.com/gentlemanscut"
                    target="_blank"
                    className="text-[#888] hover:text-[#d4af37]"
                  >
                    Instagram
                  </a>
                  <a
                    href="https://wa.me/6221123456789"
                    target="_blank"
                    className="text-[#888] hover:text-[#d4af37]"
                  >
                    WhatsApp
                  </a>
                </div>
              </div>

              <div className="aspect-video bg-[#111] border border-[#222] flex items-center justify-center">
                <p className="text-[#333] text-sm tracking-[0.2em]">MAP</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#d4af37]">
        <div className="max-w-7xl mx-auto px-6 py-16 text-center">
          <h2 className="text-2xl font-bold text-black mb-4">Prefer to Book Directly?</h2>
          <p className="text-black/70 mb-8">Skip the form and book your appointment instantly.</p>
          <Link href="/booking" className="inline-block bg-black text-white font-semibold px-8 py-3 text-sm">
            BOOK APPOINTMENT
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
