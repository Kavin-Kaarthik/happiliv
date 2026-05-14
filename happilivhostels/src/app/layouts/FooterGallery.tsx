'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import api from '../../../lib/axios';

interface GalleryImage {
  id: number;
  image: string;
  name: string;
}

export default function FooterGallery() {
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const res = await api.get('/gallery/image/showallimage?page=1');
        setImages(res.data.data.images || []);
      } catch (error) {
        console.error('Failed to fetch images:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchImages();
  }, []);

  const handleNext = () => {
    if (currentIndex === null) return;
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const handlePrev = () => {
    if (currentIndex === null) return;
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  // 🔁 Auto slide
  useEffect(() => {
    if (currentIndex === null) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === null ? prev : (prev + 1) % images.length
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex, images.length]);

  return (
    <>
      {/* ===== GALLERY GRID ===== */}
      <div className="grid grid-cols-3 md:grid-cols-4 gap-2 mt-3">
        {isLoading &&
          [...Array(8)].map((_, i) => (
            <div
              key={i}
              className="w-full aspect-square bg-gray-200 animate-pulse rounded"
            />
          ))}

        {!isLoading &&
          images.slice(0, 8).map((img, index) => (
            <button
              key={img.id}
              onClick={() => setCurrentIndex(index)}
              className=""
            >
              <Image
                src={img.image}
                alt={img.name}
                width={80}
                height={80}
                className="
                  w-[60px] h-[60px]
                  md:w-[100px] md:h-[50px]
                  rounded object-cover
                "
              />
            </button>
          ))}
      </div>

      {/* ===== FULLSCREEN SLIDER ===== */}
      {currentIndex !== null && (
        <div
          className="fixed  inset-0 z-[9999] bg-black/90 flex items-center justify-center lg:w-full overflow-hidden"
          onClick={() => setCurrentIndex(null)}
        >
          <div
            className="
              relative w-full h-full
              flex items-center justify-center
              px-3 sm:px-6
            "
            onClick={(e) => e.stopPropagation()}
          >
            {/* PREV */}
            <button
              onClick={handlePrev}
              className="
                absolute left-2 sm:left-6
                text-white text-5xl
                touch-manipulation
                hover:scale-110 transition
              "
            >
              ‹
            </button>

            {/* IMAGE */}
            <div className="md:w-full max-w-4xl flex items-center justify-center">
              <Image
                src={images[currentIndex].image}
                alt="Preview"
                width={1600}
                height={900}
                className="
                  w-full h-auto
                  max-h-[85vh]
                  object-contain
                  rounded-lg
                "
              />
            </div>

            {/* NEXT */}
            <button
              onClick={handleNext}
              className="
                absolute right-2 sm:right-6
                text-white text-5xl
                touch-manipulation
                hover:scale-110 transition
              "
            >
              ›
            </button>

            {/* CLOSE */}
            <button
              onClick={() => setCurrentIndex(null)}
              className="
                absolute top-4 right-4
                text-white text-3xl
                hover:scale-110 transition
              "
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </>
  );
}
