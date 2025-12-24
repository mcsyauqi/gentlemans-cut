import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Gentleman's Cut | Barbershop Premium Jakarta | Booking Online",
  description: "Barbershop premium dengan barber berpengalaman. Haircut, shaving, grooming. Booking online, membership tersedia.",
  keywords: "barbershop jakarta, barbershop premium, potong rambut pria, haircut jakarta, grooming pria",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
