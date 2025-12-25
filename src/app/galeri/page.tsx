"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { X } from "lucide-react";

const categories = ["All", "Haircuts", "Shaves", "Styling", "Shop"];

const gallery = [
  { id: 1, category: "Haircuts", title: "Classic Taper" },
  { id: 2, category: "Shaves", title: "Hot Towel Shave" },
  { id: 3, category: "Shop", title: "Our Space" },
  { id: 4, category: "Haircuts", title: "Modern Fade" },
  { id: 5, category: "Styling", title: "Pomade Finish" },
  { id: 6, category: "Haircuts", title: "Textured Crop" },
  { id: 7, category: "Shop", title: "Waiting Area" },
  { id: 8, category: "Shaves", title: "Beard Trim" },
  { id: 9, category: "Styling", title: "Slick Back" },
  { id: 10, category: "Haircuts", title: "Skin Fade" },
  { id: 11, category: "Shop", title: "Barber Station" },
  { id: 12, category: "Styling", title: "Natural Look" },
];

export default function GaleriPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const filtered =
    activeCategory === "All"
      ? gallery
      : gallery.filter((item) => item.category === activeCategory);

  return (
    <>
      {/* Header */}
      <section className="pt-24 pb-12">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-xl"
          >
            <p className="text-gold text-sm tracking-widest mb-2">PORTFOLIO</p>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Our Gallery
            </h1>
            <p className="text-white/60">
              Showcase karya terbaik kami dan suasana barbershop.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery */}
      <section className="pb-16">
        <div className="max-w-6xl mx-auto px-4">
          {/* Filter */}
          <div className="flex flex-wrap gap-2 mb-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 text-sm transition-colors ${
                  activeCategory === cat
                    ? "bg-gold text-dark"
                    : "bg-dark-card text-white/60 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {filtered.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.05 }}
                onClick={() => setSelectedImage(item.id)}
                className="aspect-square bg-dark-lighter cursor-pointer group relative overflow-hidden"
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-4xl font-display font-bold text-white/5">
                    {item.id.toString().padStart(2, "0")}
                  </span>
                </div>
                <div className="absolute inset-0 bg-gold/0 group-hover:bg-gold/20 transition-colors" />
                <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-dark to-transparent translate-y-full group-hover:translate-y-0 transition-transform">
                  <p className="text-gold text-xs">{item.category}</p>
                  <p className="font-semibold text-sm">{item.title}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-dark/95 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white/60 hover:text-white"
            onClick={() => setSelectedImage(null)}
          >
            <X size={28} />
          </button>
          <div className="max-w-3xl w-full aspect-video bg-dark-lighter relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-8xl font-display font-bold text-white/10">
                {selectedImage.toString().padStart(2, "0")}
              </span>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-dark to-transparent">
              <p className="text-gold text-sm">
                {gallery.find((g) => g.id === selectedImage)?.category}
              </p>
              <p className="text-xl font-display font-bold">
                {gallery.find((g) => g.id === selectedImage)?.title}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
