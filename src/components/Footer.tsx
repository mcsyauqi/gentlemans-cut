import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10">
      <div className="max-w-5xl mx-auto px-4 py-10">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-[#C9A962] font-bold text-lg mb-2">GENTLEMAN'S CUT</h3>
            <p className="text-white/50 text-sm">Premium barbershop untuk pria modern.</p>
            <p className="text-white/30 text-xs mt-2">Gaya Pria Sejati</p>
          </div>

          <div>
            <h4 className="text-white font-medium mb-3 text-sm">Links</h4>
            <div className="space-y-2 text-sm text-white/50">
              <Link href="/layanan" className="block hover:text-[#C9A962]">Layanan</Link>
              <Link href="/barber" className="block hover:text-[#C9A962]">Barber</Link>
              <Link href="/harga" className="block hover:text-[#C9A962]">Harga</Link>
              <Link href="/booking" className="block hover:text-[#C9A962]">Booking</Link>
            </div>
          </div>

          <div>
            <h4 className="text-white font-medium mb-3 text-sm">Kontak</h4>
            <div className="space-y-2 text-sm text-white/50">
              <p>Jl. Sudirman No. 123</p>
              <p>Jakarta Pusat 10220</p>
              <p>+62 21 1234 5678</p>
              <p className="text-[#C9A962]">Buka 10:00 - 21:00</p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-4">
        <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-2 text-xs text-white/30">
          <p>&copy; 2025 Gentleman's Cut</p>
          <p>
            Made with ❤️ by{" "}
            <a href="https://creativism.id" target="_blank" className="text-[#C9A962]">
              Creativism Digital Marketing Agency
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
