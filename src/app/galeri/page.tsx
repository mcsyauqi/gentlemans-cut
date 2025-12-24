"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Scissors } from "lucide-react";

const categories = ["Semua", "Haircut", "Fade", "Classic", "Modern", "Shaving"];
const items = [
  { id: 1, cat: "Haircut", title: "Classic Pompadour", barber: "Master Aldo" },
  { id: 2, cat: "Fade", title: "Low Fade", barber: "Bro Ricky" },
  { id: 3, cat: "Modern", title: "Textured Crop", barber: "Bro Dimas" },
  { id: 4, cat: "Classic", title: "Slick Back", barber: "Master Aldo" },
  { id: 5, cat: "Fade", title: "High Fade", barber: "Bro Ricky" },
  { id: 6, cat: "Shaving", title: "Clean Shave", barber: "Master Aldo" },
  { id: 7, cat: "Modern", title: "Messy Quiff", barber: "Bro Dimas" },
  { id: 8, cat: "Haircut", title: "Buzz Cut", barber: "Bro Farhan" },
  { id: 9, cat: "Classic", title: "Side Part", barber: "Master Aldo" },
  { id: 10, cat: "Fade", title: "Skin Fade", barber: "Bro Ricky" },
  { id: 11, cat: "Modern", title: "French Crop", barber: "Bro Dimas" },
  { id: 12, cat: "Shaving", title: "Beard Trim", barber: "Master Aldo" },
];

export default function GaleriPage() {
  const [cat, setCat] = useState("Semua");
  const [selected, setSelected] = useState<number | null>(null);
  const filtered = cat === "Semua" ? items : items.filter((i) => i.cat === cat);

  const nav = (dir: number) => {
    if (selected === null) return;
    const idx = filtered.findIndex((i) => i.id === selected);
    const next = (idx + dir + filtered.length) % filtered.length;
    setSelected(filtered[next].id);
  };

  return (
    <>
      <section className="bg-[#1A1A2E] pt-24 pb-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-4xl md:text-5xl font-bold text-white font-heading">GALERI HASIL KERJA</h1>
            <div className="w-16 h-1 bg-[#C9A962] mx-auto mt-3 mb-4"></div>
            <p className="text-gray-300">Koleksi hasil karya terbaik dari tim barber kami</p>
          </motion.div>
        </div>
      </section>

      <section className="py-12 bg-[#F5F5F5]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((c) => (
              <button key={c} onClick={() => setCat(c)} className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${cat === c ? "bg-[#1A1A2E] text-white" : "bg-white text-[#1A1A2E] hover:bg-[#1A1A2E] hover:text-white"}`}>
                {c}
              </button>
            ))}
          </div>

          <motion.div layout className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            <AnimatePresence>
              {filtered.map((item) => (
                <motion.div key={item.id} layout initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelected(item.id)} className="aspect-square bg-gradient-to-br from-[#1A1A2E] to-[#2a2a4e] rounded-lg cursor-pointer group relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Scissors className="w-10 h-10 text-[#C9A962]/30 group-hover:text-[#C9A962]/50 transition-colors" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3">
                    <div>
                      <div className="text-white text-sm font-bold">{item.title}</div>
                      <div className="text-[#C9A962] text-xs">by {item.barber}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      <AnimatePresence>
        {selected !== null && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4" onClick={() => setSelected(null)}>
            <button className="absolute top-4 right-4 text-white hover:text-[#C9A962]" onClick={() => setSelected(null)}><X className="w-8 h-8" /></button>
            <button className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-[#C9A962]" onClick={(e) => { e.stopPropagation(); nav(-1); }}><ChevronLeft className="w-10 h-10" /></button>
            <button className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-[#C9A962]" onClick={(e) => { e.stopPropagation(); nav(1); }}><ChevronRight className="w-10 h-10" /></button>
            <div className="max-w-3xl w-full" onClick={(e) => e.stopPropagation()}>
              <div className="bg-gradient-to-br from-[#1A1A2E] to-[#2a2a4e] aspect-video rounded-lg flex items-center justify-center">
                <Scissors className="w-20 h-20 text-[#C9A962]/50" />
              </div>
              {(() => { const i = items.find((x) => x.id === selected); return i ? <div className="text-center mt-4"><div className="text-white text-xl font-bold font-heading">{i.title}</div><div className="text-[#C9A962] text-sm">by {i.barber}</div></div> : null; })()}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
