import Link from "next/link";
import { Scissors, MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#1A1A2E] text-white">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Scissors className="w-6 h-6 text-[#C9A962]" />
              <div>
                <div className="font-bold text-lg font-heading">GENTLEMAN'S CUT</div>
                <div className="text-[#C9A962] text-[10px] tracking-widest -mt-1">Gaya Pria Sejati</div>
              </div>
            </Link>
            <p className="text-gray-400 text-sm">Barbershop premium dengan barber berpengalaman untuk pria sejati.</p>
          </div>

          <div>
            <h3 className="text-[#C9A962] font-bold mb-4 font-heading text-lg">LAYANAN</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/layanan" className="hover:text-[#C9A962]">Haircut Classic</Link></li>
              <li><Link href="/layanan" className="hover:text-[#C9A962]">Haircut Premium</Link></li>
              <li><Link href="/layanan" className="hover:text-[#C9A962]">Hot Towel Shave</Link></li>
              <li><Link href="/layanan" className="hover:text-[#C9A962]">Hair Coloring</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-[#C9A962] font-bold mb-4 font-heading text-lg">JAM OPERASIONAL</h3>
            <div className="flex items-start gap-2 text-sm text-gray-400">
              <Clock className="w-4 h-4 text-[#C9A962] mt-0.5" />
              <div>
                <p className="text-white">Senin - Minggu</p>
                <p>10:00 - 21:00 WIB</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-[#C9A962] font-bold mb-4 font-heading text-lg">KONTAK</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#C9A962] mt-0.5 shrink-0" />
                <span>Jl. Sudirman No. 123, Jakarta Pusat</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#C9A962]" />
                <span>+62 21 1234 5678</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#C9A962]" />
                <span>info@gentlemanscut.id</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-sm text-gray-400">
          <p>&copy; 2025 Gentleman's Cut Barbershop</p>
          <p>Website ini dibuat dengan ❤️ oleh <a href="https://creativism.id" target="_blank" rel="noopener noreferrer" className="text-[#C9A962] hover:underline">Creativism Digital Marketing Agency</a></p>
        </div>
      </div>
    </footer>
  );
}
