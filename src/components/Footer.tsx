import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <span className="text-3xl font-display font-bold text-gold">GENTLEMAN'S</span>
              <span className="block text-xs tracking-[0.3em] text-white/60">CUT BARBERSHOP</span>
            </Link>
            <p className="text-white/50 text-sm leading-relaxed max-w-md mb-6">
              Premium barbershop experience untuk pria modern. Kami menghadirkan layanan grooming terbaik dengan sentuhan klasik dan keahlian profesional.
            </p>
            <p className="text-white/30 text-xs">Gaya Pria Sejati</p>
          </div>

          <div>
            <h4 className="text-gold font-semibold mb-6 uppercase tracking-wider text-sm">Quick Links</h4>
            <ul className="space-y-3">
              {["Services", "Our Team", "Gallery", "Pricing", "Book Now"].map((item) => (
                <li key={item}>
                  <Link href={`/${item.toLowerCase().replace(" ", "-")}`} className="text-white/50 hover:text-gold text-sm transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-gold font-semibold mb-6 uppercase tracking-wider text-sm">Visit Us</h4>
            <div className="space-y-4 text-sm text-white/50">
              <p>Jl. Sudirman No. 123<br />Jakarta Pusat 10220</p>
              <p>+62 21 1234 5678</p>
              <p>info@gentlemanscut.id</p>
              <p className="text-gold">Open Daily 10:00 - 21:00</p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs">&copy; 2025 Gentleman's Cut. All rights reserved.</p>
          <p className="text-white/30 text-xs">
            Made with ❤️ by <a href="https://creativism.id" target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">Creativism Digital Marketing Agency</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
