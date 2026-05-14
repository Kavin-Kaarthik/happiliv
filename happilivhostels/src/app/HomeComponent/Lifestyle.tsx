'use client';

import Image from 'next/image';
import { motion, type Variants } from 'framer-motion';

const imageVariants = {
  hiddenLeft: { opacity: 0, x: -60 },
  hiddenRight: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.42, 0, 0.58, 1] } },
} as unknown as Variants;

const contentVariants = {
  hiddenLeft: { opacity: 0, x: -40 },
  hiddenRight: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.42, 0, 0.58, 1], delay: 0.08 } },
} as unknown as Variants;

export default function Lifestyle() {
  return (
    // <section className="relative lg:px-15 md:py-24 py-10 overflow-hidden bg-image-r">
      <section className="relative lg:px-15 md:py-24 py-10 overflow-hidden">

      <div className="relative max-w-7xl mx-auto px-4 space-y-28">

        {/* ===== ROW 1 ===== */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center mb-10">
          {/* Images */}
          <div className="flex gap-4">
            <motion.div
              variants={imageVariants}
              initial="hiddenLeft"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="rounded-2xl overflow-hidden w-1/2 h-72"
            >
              <Image
                src="/home/hostel-6.png"
                alt="Meals"
                width={300}
                height={400}
                className="object-cover h-full w-full"
              />
            </motion.div>

            <div className="flex flex-col gap-8 w-1/2">
              <motion.div
                variants={imageVariants}
                initial="hiddenRight"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                className="rounded-2xl overflow-hidden h-32"
              >
                <Image
                  src="/home/hostel-7.png"
                  alt="Food"
                  width={300}
                  height={200}
                  className="object-cover h-full w-full"
                />
              </motion.div>
              <motion.div
                variants={imageVariants}
                initial="hiddenRight"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                className="rounded-2xl overflow-hidden h-32"
              >
                <Image
                  src="/home/hostel-8.png"
                  alt="Dining"
                  width={300}
                  height={200}
                  className="object-cover h-full w-full"
                />
              </motion.div>
            </div>
          </div>

          {/* Text */}
          <motion.div
            variants={contentVariants}
            initial="hiddenRight"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className='bg-[#EE1C4C40] px-8 py-5 rounded-xl'
          >

            <div className='flex gap-7 mb-4'>
              <div className=''>
                <h3 className="text-2xl">
                  Our
                </h3>
                <h4 className='uppercase bold-4xl text-2xl text-[#EE1C4C]'>dining experience</h4>
                <hr className="border-y-2 border-[#EE1C4C] px-4" />
              </div>
              <div className="flex justify-center items-center">
                <Image src="/assets/dinning-logo.png" alt="Dining Logo" height={64} width={64} />
              </div>
            </div>
            <ul className='list-disc pl-6'>
              <li>4 nutritious meals daily (Breakfast, Lunch, Snacks, Dinner)</li>
              <li>North & South Indian & Chinese cuisine options</li>
              <li>Veg & Non-Veg buffet options</li>
              <li>Tea, Coffee, Milk & Juices included</li>
              <li>Professionally trained chefs & customizable menu</li>

            </ul>
          </motion.div>
        </div>

        {/* ===== ROW 2 ===== */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

          {/* Text */}
          <motion.div
            variants={contentVariants}
            initial="hiddenLeft"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="order-2 lg:order-1"
          >
            <h3 className="text-xl font-semibold">
              <span className='text-black'>Hostel Living with</span> <span className="text-[#ef1c4f]">Premium Amenities</span>
            </h3>
            <p className="mt-3 text-gray-700 leading-relaxed max-w-xl">
              Experience a lifestyle enriched with top-class facilities. Relax in thoughtfully designed common areas with smart TV entertainment, enjoy friendly competition in vibrant gaming zones, or stay fit in a fully equipped gym—everything crafted for your comfort, recreation, and everyday well-being.
            </p>

          </motion.div>

          {/* Images */}
          <div className="order-1 lg:order-2 flex flex-col lg:flex-row gap-4">
            <motion.div
              variants={imageVariants}
              initial="hiddenRight"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="rounded-2xl overflow-hidden lg:w-1/2 h-72"
            >
              <Image
                src="/home/hostel-20.jpeg"
                alt="Amenities"
                width={400}
                height={400}
                className="object-fill h-full w-full"
              />
            </motion.div>

            <div className="flex flex-col gap-4">
              <motion.div
                variants={imageVariants}
                initial="hiddenRight"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                className="rounded-2xl overflow-hidden h-72"
              >
                <Image
                  src="/home/hostel-11.jpg"
                  alt="Amenities"
                  width={400}
                  height={400}
                  className="object-cover h-full w-full"
                />
              </motion.div>
            </div>
          </div>
        </div>

        {/* ===== ROW 3 ===== */}

      </div>
    </section>
  );
}
