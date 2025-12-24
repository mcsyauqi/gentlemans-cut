"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Scissors } from "lucide-react";

const categories = ["Semua", "Haircut", "Fade", "Classic", "Modern", "Shaving"];

const galleryItems = [
  { id: 1, category: "Haircut", title: "Classic Pompadour", barber: "Master Aldo" },
  { id: 2, category: "Fade", title: "Low Fade", barber: "Bro Ricky" },
  { id: 3, category: "Modern", title: "Textured Crop", barber: "Bro Dimas" },
  { id: 4, category: "Classic", title: "Slick Back", barber: "Master Aldo" },
  { id: 5, category: "Fade", title: "High Fade", barber: "Bro Ricky" },
  { id: 6, category: "Shaving", title: "Clean Shave", barber: "Master Aldo" },
  { id: 7, category: "Modern", title: "Messy Quiff", barber: "Bro Dimas" },
  { id: 8, category: "Haircut", title: "Buzz Cut", barber: "Bro Farhan" },
  { id: 9, category: "Classic", title: "Side Part", barber: "Master Aldo" },
  { id: 10, category: "Fade", title: "Skin Fade", barber: "Bro Ricky" },
  { id: 11, category: "Modern", title: "French Crop", barber: "Bro Dimas" },
  { id: 12, category: "Shaving", title: "Beard Trim", barber: "Master Aldo" },
];

export default function GaleriPage() {
  const [activeCategory, setActiveCategory] = useState("Semua");
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const filteredItems = activeCategory === "Semua" ? galleryItems : galleryItems.filter((item) => item.category === activeCategory);

  const handlePrev = () => {
    if (selectedImage !== null) {
      const currentIndex = filteredItems.findIndex((item) => item.id === selectedImage);
      const prevIndex = currentIndex === 0 ? filteredItems.length - 1 : currentIndex - 1;
      setSelectedImage(filteredItems[prevIndex].id);
    }
  };

  const handleNext = () => {
    if (selectedImage !== null) {
      const currentIndex = filteredItems.findIndex((item) => item.id === selectedImage);
      const nextIndex = currentIndex === filteredItems.length - 1 ? 0 : currentIndex + 1;
      setSelectedImage(filteredItems[nextIndex].id);
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="bg-[#1A1A2E] pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
              GALERI HASIL KERJA
            </h1>
            <div className="w-20 h-1 bg-[#C9A962] mx-auto mb-6" />
            <p className="text-gray-300 max-w-xl mx-auto">
              Lihat koleksi hasil karya terbaik dari tim barber profesional kami
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 md:py-20 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2 rounded-full font-medium text-sm transition-colors ${
                  activeCategory === category
                    ? "bg-[#1A1A2E] text-white"
                    : "bg-white text-[#1A1A2E] hover:bg-[#1A1A2E] hover:text-white"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <motion.div layout className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
            <AnimatePresence>
              {filteredItems.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="relative overflow-hidden rounded-lg aspect-square bg-gradient-to-br from-[#1A1A2E] to-[#2a2a4e] cursor-pointer group"
                  onClick={() => setSelectedImage(item.id)}
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Scissors className="w-12 h-12 text-[#C9A962]/30 group-hover:text-[#C9A962]/50 transition-colors" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A2E] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <h3 className="text-white font-bold text-sm">{item.title}</h3>
                      <p className="text-[#C9A962] text-xs">by {item.barber}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button className="absolute top-4 right-4 text-white hover:text-[#C9A962]" onClick={() => setSelectedImage(null)}>
              <X className="w-8 h-8" />
            </button>

            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-[#C9A962]"
              onClick={(e) => { e.stopPropagation(); handlePrev(); }}
            >
              <ChevronLeft className="w-10 h-10" />
            </button>

            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-[#C9A962]"
              onClick={(e) => { e.stopPropagation(); handleNext(); }}
            >
              <ChevronRight className="w-10 h-10" />
            </button>

            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="max-w-3xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="bg-gradient-to-br from-[#1A1A2E] to-[#2a2a4e] aspect-video rounded-lg flex items-center justify-center">
                <Scissors className="w-24 h-24 text-[#C9A962]/50" />
              </div>
              {(() => {
                const item = galleryItems.find((i) => i.id === selectedImage);
                return item ? (
                  <div className="mt-4 text-center">
                    <h3 className="text-xl font-bold text-white mb-1" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                      {item.title}
                    </h3>
                    <p className="text-[#C9A962] text-sm">by {item.barber}</p>
                  </div>
                ) : null;
              })()}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
