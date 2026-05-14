'use client';

import Image from 'next/image';
import { motion, type Variants } from 'framer-motion';
import Link from 'next/link';

const imageVariants = {
  hiddenLeft: { opacity: 0, x: -80 },
  hiddenRight: { opacity: 0, x: 80 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: [0.42, 0, 0.58, 1] },
  },
} as unknown as Variants;

const contentVariants = {
  hiddenLeft: { opacity: 0, x: -60 },
  hiddenRight: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: [0.42, 0, 0.58, 1], delay: 0.15 },
  },
} as unknown as Variants;

export default function HostelCards() {
  return (
    <section className="relative overflow-hidden  lg:py-20 bg-image lg:-top-10">
      <div className="relative max-w-7xl px-5 mx-auto lg:px-20 space-y-24 md:pb-0 pb-10">

        {/* ===== GIRLS HOSTEL ===== */}
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 md:justify-items-between lg:justify-items-end">

          {/* CONTENT */}
          <motion.p
            variants={contentVariants}
            initial="hiddenLeft"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="text-gray-700 max-w-xl leading-relaxed order-2 lg:order-1"
          >
            Designed for comfort and security, our girls hostel offers clean rooms, nutritious food, and round-the-clock surveillance. With excellent connectivity to workplaces and colleges, it’s the perfect space for women to live confidently and peacefully.
          </motion.p>

          {/* IMAGE */}


          <motion.div
            variants={imageVariants}
            initial="hiddenRight"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="relative rounded-2xl overflow-hidden shadow-lg max-w-[450px] group order-1 lg:order-2"
          >
            <div className="transition-transform duration-300 group-hover:scale-110">
              <Image
                src="/home/att-1.jpg"
                alt="Girls Hostel"
                width={600}
                height={380}
                className="object-cover"
              />
            </div>

            <div
              className="absolute inset-0 pointer-events-none
             bg-black/35
             group-hover:bg-gradient-to-b
             group-hover:from-[#EE1C4C]/70
             group-hover:via-[#EE1C4C]/35
             group-hover:to-[#EE1C4C]/15
             transition-all duration-300"
            />


            <div
              className="absolute top-5 left-5 right-5 text-white z-20
             opacity-100 group-hover:opacity-0
             transition-opacity duration-300"
            >
              <h3 className="text-[25px] font-semibold">
                Bangalore’s Best <br /> Girls Hostel
              </h3>
            </div>

            <div className="absolute bottom-5 right-5 translate-x-0 group-hover:-translate-x-50 md:group-hover:-translate-x-70 transition-transform duration-700 ease-out text-white z-30">
              <Link href="/girls-room-tariff">
                <button className="cursor-pointer bg-white text-[#EE1C4C] rounded-[20px] h-10 w-[120px] flex items-center justify-center transition hover:scale-105">
                  Explore
                </button>
              </Link>
            </div>

            <div
              className="absolute inset-0 -top-[75%] -left-[6%] z-10 flex items-center justify-center
             text-white px-6 text-center
             opacity-0 group-hover:opacity-100
             transition-opacity duration-300"
            >
              <p className="text-md">
                Designed for comfort, safety, and peaceful living.
              </p>
            </div>
          </motion.div>
        </div>

        {/* ===== BOYS HOSTEL ===== */}
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 md:justify-items-center lg:justify-items-start">

          {/* IMAGE */}
          <motion.div
            variants={imageVariants}
            initial="hiddenLeft"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="relative rounded-2xl overflow-hidden shadow-lg max-w-[450px] group"
          >
            {/* IMAGE */}
            <div className="transition-transform duration-300 group-hover:scale-110">
              <Image
                src="/home/boys2.png"
                alt="Boys Hostel"
                width={600}
                height={580}
                className="object-cover lg:h-70 h-55"
              />
            </div>

            {/* OVERLAY COLOR CHANGE */}
            <div
              className="absolute inset-0 pointer-events-none
             bg-black/35
             group-hover:bg-gradient-to-b
             group-hover:from-[#EE1C4C]/70
             group-hover:via-[#EE1C4C]/35
             group-hover:to-[#EE1C4C]/15
             transition-all duration-300"
            />

            {/* EXISTING CONTENT (UNCHANGED) */}
            <div
              className="absolute top-5 left-5 right-5 text-white z-20
             opacity-100 group-hover:opacity-0
             transition-opacity duration-300"
            >
              <h3 className="text-[25px] font-semibold">
                Bangalore’s Best <br /> Boys Hostel
              </h3>
            </div>
            <div className="absolute bottom-5 right-5 translate-x-0 md:group-hover:-translate-x-70 group-hover:-translate-x-50 transition-transform duration-700 ease-out text-white z-30">

              <Link href="/boys-room-tariff">
                <button className="cursor-pointer bg-white text-[#EE1C4C] rounded-[20px] h-10 w-30 flex items-center justify-center transition hover:scale-105">
                  Explore
                </button>
              </Link>
            </div>

            {/* NEW: HOVER CONTENT */}
            <div
              className="absolute inset-0 -top-[75%] -left-[6%] z-10 flex items-center justify-center
               text-white px-6 text-center
               opacity-0 group-hover:opacity-100
               transition-opacity duration-300"
            >
              <p className="text-md">
                Enjoy affordable living with Wi-Fi, security, laundry, and tasty meals.
              </p>
            </div>
          </motion.div>


          {/* CONTENT */}
          <motion.p
            variants={contentVariants}
            initial="hiddenRight"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="text-gray-700 max-w-xl leading-relaxed"
          >
            Enjoy affordable living with quality amenities like Wi-Fi, security, laundry, and tasty meals. Located in the heart of Bangalore, our boys’ hostel offers easy transport access, a friendly atmosphere, and reliable support for a safe and comfortable stay.
          </motion.p>
        </div>


      </div>
    </section>
  );
}
