"use client";

import { useState } from "react";

const images = [
  { id: 1, cat: "Haircut", title: "Classic Taper" },
  { id: 2, cat: "Shave", title: "Hot Towel Shave" },
  { id: 3, cat: "Shop", title: "Our Space" },
  { id: 4, cat: "Haircut", title: "Modern Fade" },
  { id: 5, cat: "Style", title: "Pomade Finish" },
  { id: 6, cat: "Haircut", title: "Textured Crop" },
  { id: 7, cat: "Shop", title: "Waiting Area" },
  { id: 8, cat: "Shave", title: "Beard Trim" },
];

const cats = ["All", "Haircut", "Shave", "Style", "Shop"];

export default function GaleriPage() {
  const [filter, setFilter] = useState("All");
  const filtered = filter === "All" ? images : images.filter((i) => i.cat === filter);

  return (
    <div className="pt-14">
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-10">
            <p className="text-[#C9A962] text-sm tracking-widest mb-2">PORTFOLIO</p>
            <h1 className="text-4xl font-bold mb-4">Gallery</h1>
            <p className="text-white/60">Showcase karya terbaik kami.</p>
          </div>

          <div className="flex justify-center gap-2 mb-8 flex-wrap">
            {cats.map((c) => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={`px-4 py-2 text-sm ${
                  filter === c ? "bg-[#C9A962] text-black" : "bg-white/5 text-white/60"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {filtered.map((img) => (
              <div key={img.id} className="aspect-square bg-white/5 flex flex-col items-center justify-center p-4">
                <span className="text-3xl font-bold text-white/10 mb-2">{img.id.toString().padStart(2, "0")}</span>
                <p className="text-sm font-medium">{img.title}</p>
                <p className="text-[#C9A962] text-xs">{img.cat}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
