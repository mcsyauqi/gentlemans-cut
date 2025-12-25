import "./globals.css";

export const metadata = {
  title: "Gentleman's Cut | Premium Barbershop",
  description: "Premium barbershop untuk pria sejati",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
