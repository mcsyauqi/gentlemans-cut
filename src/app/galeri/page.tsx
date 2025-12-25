"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { X } from "lucide-react";

const categories = ["All", "Haircuts", "Shaves", "Styling", "Shop"];

const gallery = [
  { id: 1, category: "Haircuts", title: "Classic Taper", aspect: "square" },
  { id: 2, category: "Shaves", title: "Hot Towel Shave", aspect: "portrait" },
  { id: 3, category: "Shop", title: "Our Space", aspect: "landscape" },
  { id: 4, category: "Haircuts", title: "Modern Fade", aspect: "square" },
  { id: 5, category: "Styling", title: "Pomade Finish", aspect: "portrait" },
  { id: 6, category: "Haircuts", title: "Textured Crop", aspect: "square" },
  { id: 7, category: "Shop", title: "Waiting Area", aspect: "landscape" },
  { id: 8, category: "Shaves", title: "Beard Trim", aspect: "square" },
  { id: 9, category: "Styling", title: "Slick Back", aspect: "portrait" },
  { id: 10, category: "Haircuts", title: "Skin Fade", aspect: "square" },
  { id: 11, category: "Shop", title: "Barber Station", aspect: "landscape" },
  { id: 12, category: "Styling", title: "Natural Look", aspect: "square" },
];

export default function GaleriPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const filtered = activeCategory === "All" ? gallery : gallery.filter((item) => item.category === activeCategory);

  return (
    <>
      <section className="pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-2xl">
            <p className="text-gold uppercase tracking-[0.3em] text-sm mb-3">Portfolio</p>
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">Our Gallery</h1>
            <p className="text-white/60 text-lg">A showcase of our finest work and the atmosphere of our shop.</p>
          </motion.div>
        </div>
      </section>

      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap gap-4 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-3 text-sm uppercase tracking-wider transition-colors ${
                  activeCategory === cat ? "bg-gold text-black" : "bg-neutral-900 text-white/60 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filtered.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.05 }}
                onClick={() => setSelectedImage(item.id)}
                className={`relative cursor-pointer group overflow-hidden bg-neutral-800 ${
                  item.aspect === "portrait" ? "row-span-2" : item.aspect === "landscape" ? "col-span-2" : ""
                }`}
              >
                <div className={`${item.aspect === "portrait" ? "aspect-[3/5]" : item.aspect === "landscape" ? "aspect-video" : "aspect-square"}`}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-4xl md:text-6xl font-display font-bold text-white/5">{item.id.toString().padStart(2, "0")}</span>
                  </div>
                  <div className="absolute inset-0 bg-gold/0 group-hover:bg-gold/30 transition-colors duration-300"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-sm text-gold uppercase tracking-wider">{item.category}</p>
                    <p className="font-display font-bold">{item.title}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {selectedImage && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-6" onClick={() => setSelectedImage(null)}>
          <button className="absolute top-6 right-6 text-white/60 hover:text-white" onClick={() => setSelectedImage(null)}>
            <X size={32} />
          </button>
          <div className="max-w-4xl w-full aspect-video bg-neutral-800 relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-9xl font-display font-bold text-white/10">{selectedImage.toString().padStart(2, "0")}</span>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black to-transparent">
              <p className="text-gold uppercase tracking-wider text-sm">{gallery.find((g) => g.id === selectedImage)?.category}</p>
              <p className="text-2xl font-display font-bold">{gallery.find((g) => g.id === selectedImage)?.title}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
