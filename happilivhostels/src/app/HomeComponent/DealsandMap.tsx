'use client';
import Image from 'next/image';
import { motion, type Variants } from 'framer-motion';
import Link from 'next/link';

const mapVariants = {
  hidden: { opacity: 0, x: 30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.55, ease: [0.42, 0, 0.58, 1] } },
} as unknown as Variants;

const joinVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.42, 0, 0.58, 1] } },
} as unknown as Variants;

export default function DealsandMap() {
  return (
    <>
      <section className="bg-white text-[#4E4D4D]">

        {/* ================= DEALS SECTION ================= */}


        {/* ================= MAP SECTION ================= */}
        <div className="pt-10 md:pt-20 px-20 max-[1200px]:px-10 max-[991px]:px-4">
          <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* MAP */}
            <motion.div
              variants={mapVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="rounded-2xl overflow-hidden shadow-md"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.709270117793!2d77.43257937358699!3d12.862045017273731!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae38c490000001%3A0xaebe47889363e5de!2sHappiLiv%20Hostel!5e0!3m2!1sen!2sin!4v1770802434571!5m2!1sen!2sin"
                width="100%"
                height="350"
                loading="lazy"
                className="border-0"
              ></iframe>
            </motion.div>
        
            {/* CONTENT */}
            <motion.div
              variants={mapVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <h3 className="text-xl md:text-2xl font-bold text-gray-800">
                <span className="text-[#ef1c4f]">Find Us</span> on Google Maps
              </h3>
              <p className="mt-3 text-gray-600 max-w-md">
                Easily locate your HappiLiv hostel and get step-by-step directions
                right from your phone.
              </p>
              <p className="mt-4 text-sm text-gray-700">
                <strong>Address:</strong><br />
                No: 171, Kanimeenike Village, Next To Christ University,
                Kumbalagodu Post, Kengeri Hobli, Bangalore – 560074
              </p>
            </motion.div>

          </div>
        </div>

      </section>

      {/* ================= JOIN SECTION ================= */}
      <section className="md:py-20 py-10 px-20 max-[1200px]:px-10 max-[991px]:px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={joinVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="relative overflow-hidden rounded-2xl flex min-h-[260px]">

            {/* FULL BACKGROUND IMAGE */}
            <div className="absolute inset-0">
              <Image
                src="/assets/bookvisit.jpg"
                alt="HappiLiv Rooms"
                fill
                className="object-cover"
              />
            </div>

            {/* LEFT RED GRADIENT OVERLAY */}
            <div className="relative w-full md:w-[50%] flex items-center">
              <div className="absolute inset-0 bg-gradient-to-r from-[#ef1c4f]/90 to-transparent"></div>
              <div className="relative px-8 md:px-12 py-10 max-w-md text-white">
                <h3 className="text-2xl md:text-3xl font-bold leading-tight">
                  Ready to join<br />the HappiLiv family?
                </h3>
                <p className="mt-4 text-sm text-white/90">
                  Schedule a visit to experience our community first hand or get in
                  touch with our team for any queries. We’re excited to welcome you!
                </p>
                <button className="mt-6 bg-white text-[#ef1c4f] font-semibold px-14 py-3 rounded-full text-sm hover:bg-gray-100 transition">
                  <Link href="/contact">
                    Book Visit
                  </Link>
                </button>
              </div>
            </div>

            {/* Right side just empty, image shows through */}
            <div className="hidden md:block w-[45%]"></div>

          </motion.div>
        </div>
      </section>

    </>
  );
}
