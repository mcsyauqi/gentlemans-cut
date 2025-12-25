import Link from "next/link";

export default function KontakPage() {
  return (
    <div className="pt-14">
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-[#C9A962] text-sm tracking-widest mb-2">KONTAK</p>
            <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
            <p className="text-white/60">Ada pertanyaan? Hubungi kami.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Form */}
            <div className="bg-white/5 p-6">
              <h2 className="font-bold mb-4">Kirim Pesan</h2>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Nama"
                  className="w-full bg-white/5 border border-white/10 p-3 text-white"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full bg-white/5 border border-white/10 p-3 text-white"
                />
                <input
                  type="tel"
                  placeholder="No. HP"
                  className="w-full bg-white/5 border border-white/10 p-3 text-white"
                />
                <textarea
                  placeholder="Pesan"
                  rows={4}
                  className="w-full bg-white/5 border border-white/10 p-3 text-white resize-none"
                />
                <button type="submit" className="w-full bg-[#C9A962] text-black py-3 font-medium">
                  Kirim
                </button>
              </form>
            </div>

            {/* Info */}
            <div className="space-y-6">
              <div className="bg-white/5 p-6">
                <h3 className="font-bold mb-3">Alamat</h3>
                <p className="text-white/60">
                  Jl. Sudirman No. 123<br />
                  Jakarta Pusat 10220
                </p>
              </div>

              <div className="bg-white/5 p-6">
                <h3 className="font-bold mb-3">Jam Buka</h3>
                <p className="text-white/60">
                  Senin - Minggu<br />
                  10:00 - 21:00
                </p>
              </div>

              <div className="bg-white/5 p-6">
                <h3 className="font-bold mb-3">Kontak</h3>
                <p className="text-white/60">
                  +62 21 1234 5678<br />
                  info@gentlemanscut.id
                </p>
              </div>

              <div className="flex gap-3">
                <a
                  href="https://instagram.com/gentlemanscut"
                  target="_blank"
                  className="bg-white/5 px-4 py-2 text-sm text-white/60 hover:text-[#C9A962]"
                >
                  Instagram
                </a>
                <a
                  href="https://wa.me/6221123456789"
                  target="_blank"
                  className="bg-white/5 px-4 py-2 text-sm text-white/60 hover:text-[#C9A962]"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </div>

          <div className="mt-10 text-center">
            <Link href="/booking" className="inline-block bg-[#C9A962] text-black px-8 py-3 font-medium">
              Book Appointment
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
