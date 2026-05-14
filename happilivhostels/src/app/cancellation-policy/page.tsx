'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';

// Note: Metadata cannot be used in client components. Use layout.tsx if needed.
// export const metadata = {
//   title: 'Cancellation Policy - HappiLiv Hostels',
//   description: 'Review HappiLiv\'s cancellation policy to understand our flexible booking terms and refund conditions.',
// };

export default function CancellationPolicy() {
  return (
    <section className="relative bg-[#FFF5F7] overflow-hidden">

      {/* WAVE BACKGROUND */}
      <div className="absolute inset-0 -z-10">
        <svg
          viewBox="0 0 1440 320"
          className="w-full h-full"
          preserveAspectRatio="none"
        >
          <path
            fill="#FFE3EA"
            d="M0,192L60,170.7C120,149,240,107,360,96C480,85,600,107,720,128C840,149,960,171,1080,160C1200,149,1320,107,1380,85.3L1440,64L1440,0L0,0Z"
          />
        </svg>
      </div>

      {/* HEADER */}
      <div className="text-center pt-20 pb-12">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-gray-800"
        >
          Cancellation Policy
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="inline-block mt-4 px-6 py-2 rounded-full bg-[#ef1c4f] text-white text-sm"
        >
          <Link href="/">
          Home / Cancellation Policy
          </Link>
        </motion.div>
      </div>

      {/* CONTENT */}
      <div className="max-w-4xl mx-auto px-6 pb-20">
          {/* TEXT */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Cancellation Policy
            </h2>

            <p className="text-gray-600 leading-relaxed mb-4">
              The caution deposit of <strong>INR 3,000</strong> will be returned
              if the cancellation is made before the deadline. However,
              <strong> INR 5,000</strong> is not refundable. After the deadline,
              there will be no refunds.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              Nevertheless, no cancellations are permitted after
              <strong> July 1, 2026</strong>, and there is no money back for
              cancelled reservations.
            </p>

            <p className="text-gray-600 leading-relaxed mb-6">
              Please contact the undersigned for more information if you have
              any questions.
            </p>

            <div className="flex justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 rounded-full bg-[#ef1c4f] text-white font-medium shadow-md hover:cusor-pointer hover:bg-black transition"
              >
                <Link href='/contact'>
                Contact Us
                </Link>
              </motion.button>
            </div>
          </motion.div>
      </div>
    </section>
  );
}
