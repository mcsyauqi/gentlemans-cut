import Link from "next/link";

const quickLinks = [
  { href: "/layanan", label: "Layanan" },
  { href: "/barber", label: "Barber" },
  { href: "/galeri", label: "Galeri" },
  { href: "/harga", label: "Harga" },
  { href: "/booking", label: "Booking" },
];

export default function Footer() {
  return (
    <footer className="bg-dark-light border-t border-white/10">
      {/* Main Footer */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-4">
              <span className="text-2xl font-display font-bold text-gold">
                GENTLEMAN'S
              </span>
              <span className="block text-[10px] tracking-[0.2em] text-white/50">
                CUT BARBERSHOP
              </span>
            </Link>
            <p className="text-white/50 text-sm leading-relaxed max-w-sm mb-4">
              Premium barbershop experience untuk pria modern. Kami menghadirkan
              layanan grooming terbaik dengan sentuhan klasik dan keahlian profesional.
            </p>
            <p className="text-white/30 text-xs">Gaya Pria Sejati</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-gold font-semibold mb-4 text-sm">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/50 hover:text-gold text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-gold font-semibold mb-4 text-sm">Kunjungi Kami</h4>
            <div className="space-y-3 text-sm text-white/50">
              <p>
                Jl. Sudirman No. 123
                <br />
                Jakarta Pusat 10220
              </p>
              <p>+62 21 1234 5678</p>
              <p>info@gentlemanscut.id</p>
              <p className="text-gold">Buka Setiap Hari 10:00 - 21:00</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between gap-2">
          <p className="text-white/30 text-xs">
            &copy; 2025 Gentleman's Cut. All rights reserved.
          </p>
          <p className="text-white/30 text-xs">
            Made with ❤️ by{" "}
            <a
              href="https://creativism.id"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold hover:underline"
            >
              Creativism Digital Marketing Agency
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
