import Link from "next/link";
import { Scissors, MapPin, Phone, Mail, Clock, Instagram, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#1A1A2E] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <Link href="/" className="flex items-center gap-3 mb-6">
              <Scissors className="w-8 h-8 text-[#C9A962]" />
              <div>
                <span className="block text-xl font-bold tracking-wider" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                  GENTLEMAN&apos;S CUT
                </span>
                <span className="block text-xs text-[#C9A962] tracking-widest">Gaya Pria Sejati</span>
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Barbershop premium dengan barber berpengalaman dan suasana nyaman untuk pria sejati.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 bg-[#C9A962]/20 rounded-full flex items-center justify-center hover:bg-[#C9A962] transition-colors group">
                <Instagram className="w-5 h-5 text-[#C9A962] group-hover:text-[#1A1A2E]" />
              </a>
              <a href="#" className="w-10 h-10 bg-[#C9A962]/20 rounded-full flex items-center justify-center hover:bg-[#C9A962] transition-colors group">
                <Facebook className="w-5 h-5 text-[#C9A962] group-hover:text-[#1A1A2E]" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6 text-[#C9A962]" style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.1em" }}>
              LAYANAN
            </h3>
            <ul className="space-y-3">
              {["Haircut Classic", "Haircut Premium", "Hot Towel Shave", "Hair Coloring", "Kids Haircut"].map((item) => (
                <li key={item}>
                  <Link href="/layanan" className="text-gray-400 hover:text-[#C9A962] transition-colors text-sm">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6 text-[#C9A962]" style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.1em" }}>
              JAM OPERASIONAL
            </h3>
            <div className="flex items-start gap-3 text-gray-400 text-sm">
              <Clock className="w-5 h-5 text-[#C9A962] mt-0.5" />
              <div>
                <p className="font-medium text-white">Senin - Minggu</p>
                <p>10:00 - 21:00 WIB</p>
              </div>
            </div>
            <div className="mt-4 p-4 bg-[#C9A962]/10 rounded-lg border border-[#C9A962]/20">
              <p className="text-sm text-[#C9A962] font-medium">Buka Setiap Hari!</p>
              <p className="text-xs text-gray-400 mt-1">Termasuk hari libur nasional</p>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6 text-[#C9A962]" style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.1em" }}>
              KONTAK
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400 text-sm">
                <MapPin className="w-5 h-5 text-[#C9A962] mt-0.5 shrink-0" />
                <span>Jl. Sudirman No. 123, Jakarta Pusat 10220</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <Phone className="w-5 h-5 text-[#C9A962] shrink-0" />
                <span>+62 21 1234 5678</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <Mail className="w-5 h-5 text-[#C9A962] shrink-0" />
                <span>info@gentlemanscut.id</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400">
            <p>&copy; 2025 Gentleman&apos;s Cut Barbershop</p>
            <p>
              Website ini dibuat dengan ❤️ oleh{" "}
              <a
                href="https://creativism.id"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#C9A962] hover:underline"
              >
                Creativism Digital Marketing Agency
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
