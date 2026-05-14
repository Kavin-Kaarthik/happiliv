'use client';

import { useEffect, useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { IoIosArrowUp } from 'react-icons/io';

export default function FloatingButtons() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setShowTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed right-4 bottom-25 z-50 flex flex-col gap-3">
      
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/+916363098384"
        target="_blank"
        rel="noopener noreferrer"
        className="h-12 w-12 rounded-full bg-green-500 text-white flex items-center justify-center shadow-lg hover:scale-110 transition"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp size={22} />
      </a>

      {/* Scroll To Top */}
      {showTop && (
        <button
          onClick={scrollToTop}
          className="cursor-pointer h-12 w-12 rounded-full bg-[#ef1c4f] text-white flex items-center justify-center shadow-lg hover:scale-110 transition"
          aria-label="Scroll to top"
        >
          <IoIosArrowUp size={22} />
        </button>
      )}
    </div>
  );
}
