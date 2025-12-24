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
  { id: 13, category: "Haircut", title: "Undercut", barber: "Bro Ricky" },
  { id: 14, category: "Classic", title: "Taper Cut", barber: "Bro Farhan" },
  { id: 15, category: "Modern", title: "Faux Hawk", barber: "Bro Dimas" },
  { id: 16, category: "Fade", title: "Mid Fade", barber: "Bro Ricky" },
];

export default function GaleriPage() {
  const [activeCategory, setActiveCategory] = useState("Semua");
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const filteredItems =
    activeCategory === "Semua"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

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
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-[#1A1A2E] py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C9A962' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1
              className="text-5xl md:text-6xl font-bold text-white mb-4"
              style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.05em" }}
            >
              GALERI HASIL KERJA
            </h1>
            <div className="w-24 h-1 bg-[#C9A962] mx-auto mb-6" />
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Lihat koleksi hasil karya terbaik dari tim barber profesional kami
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
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
          <motion.div layout className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <AnimatePresence>
              {filteredItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className={`relative overflow-hidden rounded-lg group cursor-pointer ${
                    index === 0 || index === 5 ? "md:row-span-2" : ""
                  }`}
                  onClick={() => setSelectedImage(item.id)}
                >
                  <div
                    className={`bg-gradient-to-br from-[#1A1A2E] to-[#2a2a4e] ${
                      index === 0 || index === 5 ? "aspect-[3/4]" : "aspect-square"
                    } flex items-center justify-center`}
                  >
                    <Scissors className="w-16 h-16 text-[#C9A962]/30 group-hover:text-[#C9A962]/50 transition-colors duration-300" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A2E] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <h3 className="text-white font-bold">{item.title}</h3>
                      <p className="text-[#C9A962] text-sm">by {item.barber}</p>
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
            <button
              className="absolute top-4 right-4 text-white hover:text-[#C9A962] transition-colors duration-300"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-8 h-8" />
            </button>

            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-[#C9A962] transition-colors duration-300"
              onClick={(e) => {
                e.stopPropagation();
                handlePrev();
              }}
            >
              <ChevronLeft className="w-12 h-12" />
            </button>

            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-[#C9A962] transition-colors duration-300"
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
            >
              <ChevronRight className="w-12 h-12" />
            </button>

            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="bg-gradient-to-br from-[#1A1A2E] to-[#2a2a4e] aspect-video rounded-lg flex items-center justify-center">
                <Scissors className="w-32 h-32 text-[#C9A962]/50" />
              </div>
              {(() => {
                const item = galleryItems.find((i) => i.id === selectedImage);
                return item ? (
                  <div className="mt-4 text-center">
                    <h3
                      className="text-2xl font-bold text-white mb-1"
                      style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                    >
                      {item.title}
                    </h3>
                    <p className="text-[#C9A962]">by {item.barber}</p>
                  </div>
                ) : null;
              })()}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
