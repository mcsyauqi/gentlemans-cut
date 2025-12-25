"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const categories = ["All", "Haircuts", "Shaves", "Shop"];

const images = [
  { id: 1, cat: "Haircuts", title: "Classic Taper" },
  { id: 2, cat: "Haircuts", title: "Modern Fade" },
  { id: 3, cat: "Haircuts", title: "Textured Crop" },
  { id: 4, cat: "Haircuts", title: "Skin Fade" },
  { id: 5, cat: "Shaves", title: "Hot Towel Shave" },
  { id: 6, cat: "Shaves", title: "Beard Trim" },
  { id: 7, cat: "Shop", title: "Our Space" },
  { id: 8, cat: "Shop", title: "Barber Station" },
];

export default function GaleriPage() {
  const [filter, setFilter] = useState("All");

  const filtered = filter === "All" ? images : images.filter((img) => img.cat === filter);

  return (
    <>
      <Header />

      <section className="pt-16 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="max-w-2xl mb-12">
            <p className="text-[#d4af37] text-sm tracking-[0.2em] mb-4">PORTFOLIO</p>
            <h1 className="text-5xl font-bold mb-6">Our Gallery</h1>
            <p className="text-[#888] text-lg">Showcase karya terbaik kami.</p>
          </div>

          <div className="flex gap-4 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-3 text-sm font-semibold transition-colors ${
                  filter === cat
                    ? "bg-[#d4af37] text-black"
                    : "bg-[#111] border border-[#222] text-[#888] hover:border-[#d4af37]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {filtered.map((img) => (
              <div key={img.id} className="aspect-square bg-[#111] border border-[#222] flex flex-col items-center justify-center p-6 hover:border-[#d4af37] transition-colors cursor-pointer group">
                <p className="text-4xl font-bold text-[#1a1a1a] group-hover:text-[#222] mb-4">{String(img.id).padStart(2, "0")}</p>
                <p className="text-white font-semibold mb-1">{img.title}</p>
                <p className="text-[#d4af37] text-sm">{img.cat}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
