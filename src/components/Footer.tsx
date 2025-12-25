import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-[#222]">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <p className="text-[#d4af37] text-xl font-bold tracking-wide mb-4">GENTLEMAN'S CUT</p>
            <p className="text-[#666] text-sm leading-relaxed mb-2">
              Premium barbershop untuk pria modern. Kami menghadirkan layanan grooming terbaik dengan sentuhan klasik.
            </p>
            <p className="text-[#444] text-xs italic">Gaya Pria Sejati</p>
          </div>

          <div>
            <p className="text-white font-semibold mb-4">Menu</p>
            <div className="space-y-3">
              <Link href="/layanan" className="block text-[#666] text-sm hover:text-[#d4af37]">Layanan</Link>
              <Link href="/barber" className="block text-[#666] text-sm hover:text-[#d4af37]">Barber</Link>
              <Link href="/galeri" className="block text-[#666] text-sm hover:text-[#d4af37]">Galeri</Link>
              <Link href="/harga" className="block text-[#666] text-sm hover:text-[#d4af37]">Harga</Link>
            </div>
          </div>

          <div>
            <p className="text-white font-semibold mb-4">Kontak</p>
            <div className="space-y-3 text-[#666] text-sm">
              <p>Jl. Sudirman No. 123</p>
              <p>Jakarta Pusat 10220</p>
              <p>+62 21 1234 5678</p>
              <p className="text-[#d4af37]">Buka 10:00 - 21:00</p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-[#222]">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#444] text-xs">© 2025 Gentleman's Cut. All rights reserved.</p>
          <p className="text-[#444] text-xs">
            Made with ❤️ by <a href="https://creativism.id" target="_blank" className="text-[#d4af37] hover:underline">Creativism Digital Marketing Agency</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
