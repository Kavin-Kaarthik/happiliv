'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function BannerSection() {
  return (
    <section className="relative w-full">

      {/* Image Wrapper */}
      <div className="relative h-[220px] sm:h-[300px] md:h-[420px] 
                      rounded-b-[60px] overflow-hidden">

        <Image
          src="/girls/banner.png"
          alt="Hostel for Boys"
          fill
          priority
          className="object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/10" />

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="absolute inset-0 flex flex-col justify-center px-5 sm:px-10 lg:px-24"
        >
          <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-[56px] 
                         text-[#EE1C4C] font-semibold">
            HOSTEL for Girls
          </h1>
          <p className="mt-2 text-md sm:text-2xl font-semibold">
            Near Christ University
          </p>
        </motion.div>

      </div>
    </section>
  );
}
