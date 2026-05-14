'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';


export default function ContactSection() {
  return (
    <section className="w-full bg-white">

      <div className="relative w-full h-[220px] sm:h-[300px] md:h-[420px]">
        <Image
          src="/contact/contact-3.png"
          alt="Hostel Cafe"
          fill
          priority
          className="object-cover"
        />
      </div>


      <div className="max-w-7xl lg:mx-30 md:mx-15 px-4 sm:px-6 lg:px-20 pt-12 md:pt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            <div>
              <h2 className="text-2xl sm:text-3xl font-semibold text-[#ee1c4c] mb-4">
                Contact Us
              </h2>

              <p className="text-black text-sm sm:text-base leading-relaxed max-w-md">
                We’d Love To Hear From You! Contact HappiLiv Hostel For
                Bookings, Inquiries, Or Any Assistance To Make Your Stay
                Comfortable And Memorable.
              </p>
            </div>
          </motion.div>

          <div className="relative w-full h-[220px] sm:h-[280px] md:h-[270px] rounded-2xl overflow-hidden ">
            <motion.div
              initial={{ opacity: 0, x: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
              viewport={{ once: true }}
              className="relative w-full h-[220px] sm:h-[280px] md:h-[270px] rounded-2xl overflow-hidden"
            >
              <Image
                src="/contact/contact-2.png"
                alt="Happy Hostel Group"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
