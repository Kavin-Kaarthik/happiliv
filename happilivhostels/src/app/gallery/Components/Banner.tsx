'use client';
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import Image from "next/image";
import { FaRegCirclePlay } from "react-icons/fa6";
import { useEffect } from "react";
import { useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";

export default function Banner() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const items = [
    {
       img: "/gallery/video-11.jpg", 
       alt: "Hostel life" ,
      youtubeId: "7byaeNhQb9A",
      
    },
    {
      img: "/gallery/video-22.jpg",
      youtubeId: "X1Zd9ejlhhg",
      alt: "Common area"
    },
    {
      img: "/gallery/video-33.jpg",
      youtubeId: "0TjX3nrnZfM",
      alt: "HappiLiv hostel"
    },
  ];


  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    if (!isMobile) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % items.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [items.length]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % items.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? items.length - 1 : prev - 1
    );
  };

  const container: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
  };

  const cardAnim: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <>
      {/* Gallery Section */}
      <section className="max-w-6xl mx-auto px-6 lg:px-16 py-8 lg:py-16">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-[#EE1C4C] font-semibold text-[26px] mb-2">
            Gallery
          </h2>
          <p className="text-gray-600 text-sm max-w-xl mx-auto">
            A glimpse into everyday life at HappiLiv shared moments,
            vibrant spaces, and real connections.
          </p>
        </motion.div>

        {/* ===== MOBILE SLIDER ===== */}
        <div className="relative md:hidden overflow-hidden">
          <motion.div
            className="flex"
            animate={{ x: `-${currentIndex * 100}%` }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {items.map((item, index) => (
              <button
                key={index}
                onClick={() => setActiveVideo(item.youtubeId)}
                className="w-full shrink-0 px-2"
              >
                <div className="relative h-[220px] rounded-2xl overflow-hidden">
                  <Image
                    src={`https://img.youtube.com/vi/${item.youtubeId}/hqdefault.jpg`}
                    alt={item.alt}
                    fill
                    className="object-cover"
                  />


                  <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                    <FaRegCirclePlay size={52} className="text-white" />
                  </div>
                </div>
              </button>
            ))}
          </motion.div>

          {/* Mobile Controls */}
          <div className="flex justify-center gap-4 mt-6">
            <button
              onClick={prevSlide}
              className="px-4 py-2 rounded-full bg-[#EE1C4C] text-white hover:bg-[#d01a42] hover:textblack border text-sm"
            >
              <FaArrowLeft />

            </button>
            <button
              onClick={nextSlide}
              className="px-4 py-2 rounded-full bg-[#EE1C4C] text-white text-sm"
            >
              <FaArrowRight />

            </button>
          </div>
        </div>

        {/* ===== DESKTOP GRID (UNCHANGED) ===== */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="hidden md:grid md:grid-cols-4 md:gap-8 flex items-center"
        >
          {items.map((item, index) => (
            <motion.button
              key={index}
              variants={cardAnim}
              onClick={() => setActiveVideo(item.youtubeId)}
              className={`
                relative rounded-2xl overflow-hidden group
                ${index === 1
                  ? 'md:col-span-2 md:h-[280px]'
                  : 'md:h-[200px]'
                }
              `}
            >
              <Image
                src={item.img}
                alt={item.alt}
                fill
                className="object-cover transition duration-300 group-hover:scale-105"
              />

              <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                <FaRegCirclePlay
                  size={index === 1 ? 64 : 52}
                  className="text-white transition"
                />
              </div>
            </motion.button>
          ))}
        </motion.div>
      </section>

      {/* ===== VIDEO MODAL ===== */}
      <AnimatePresence>
        {activeVideo && (
          <motion.div
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveVideo(null)}
          >
            <motion.div
              className="relative w-[90%] max-w-4xl bg-black rounded-xl p-2"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute -top-10 right-0 text-white text-3xl"
                onClick={() => setActiveVideo(null)}
              >
                ✕
              </button>

              <iframe
                src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1&rel=0`}
                allow="autoplay; encrypted-media"
                allowFullScreen
                className="w-full aspect-video rounded-lg"
              />

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
