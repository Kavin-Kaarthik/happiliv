'use client';

import Image from 'next/image';
import { motion, type Variants } from 'framer-motion';
import { useState } from 'react';
import { IoIosArrowForward } from "react-icons/io";
import Link from 'next/link';

const headerVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.42, 0, 0.58, 1] } },
} as unknown as Variants;

const cardsVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
} as unknown as Variants;

const cardItemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.995 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: [0.42, 0, 0.58, 1] } },
} as unknown as Variants;
const HOSTEL_DATA = [
  // ===== GIRLS HOSTELS =====
  {
    type: 'girls',
    badge: 'Most Private',
    title: 'Single Occupancy',
    desc: 'Stay relaxed and enjoy your privacy in our spacious single occupancy rooms. Each room is chosen with every convenience of modern life',
    price: '₹ 20,000',
    img: '/home/hostel-3.png',
  },
  {
    type: 'girls',
    badge: 'Most Popular',
    title: 'Two Sharing Room',
    desc: 'Learn how to accommodate a person from completely different background in our two sharing rooms.',
    price: '₹ 14,000',
    img: '/home/hostel-4.png',
  },
  {
    type: 'girls',
    badge: 'Budget Friendly',
    title: 'Three Sharing Room',
    desc: 'Three’s never a crowd. Infact, the best of friends are always found in trios. Find your trio here in our fantastic 3-sharing rooms.',
    price: '₹ 12,000',
    img: '/home/threesharing.jpg',
  },
  // ===== BOYS HOSTELS =====
  {
    type: 'boys',
    badge: 'Most Private',
    title: 'Single Occupancy',
    desc: 'Stay relaxed and enjoy your privacy in our spacious single occupancy rooms. Each room is chosen with every convenience of modern life',
    price: '₹ 18,000',
    img: '/home/hostel-3.png',
  },
  {
    type: 'boys',
    badge: 'Most Popular',
    title: 'Two Sharing Room',
    desc: 'Learn how to accommodate a person from completely different background in our two sharing rooms.',
    price: '₹ 14,000',
    img: '/home/hostel-4.png',
  },
  {
    type: 'boys',
    badge: 'Budget Friendly',
    title: 'Three Sharing Room',
    desc: 'Three’s never a crowd. Infact, the best of friends are always found in trios. Find your trio here in our fantastic 3-sharing rooms.',
    price: '₹ 12,000',
    img: '/home/threesharing.jpg',
  },

];

export default function HostelPricing() {
  const [active, setActive] = useState<'girls' | 'boys'>('girls');
  const [visibleCount, setVisibleCount] = useState(3);

const filteredData = HOSTEL_DATA
  .filter(item => item.type === active)
  .slice(0, visibleCount);
  return (
    <section className="px-7 lg:px-20 pb-5">
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div         
          className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
            Our <span className="text-[#ef1c4f]">Top Notch Hostel</span> Find Your Pick
          </h2>

          {/* TOGGLE */}
          <div className="flex rounded-full p-1 w-fit gap-2">
            <button
              onClick={() => setActive('girls')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition cursor-pointer
                ${active === 'girls'
                  ? 'bg-[#ef1c4f] text-white'
                  : 'text-gray-700 bg-gray-100'
                }`}
            >
              Girls Hostels
            </button>
            <button
              onClick={() => setActive('boys')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition cursor-pointer
                ${active === 'boys'
                  ? 'bg-[#ef1c4f] text-white'
                  : 'text-gray-700 bg-gray-100'
                }`}
            >
              Boys Hostels
            </button>
          </div>
        </div>

        {/* CARDS */}
        <div
          
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >

          {/* CARD */}
          {filteredData.map((item) => (
            <motion.div

              key={item.title}
              variants={cardItemVariants}
              className="bg-white rounded-2xl shadow-md overflow-hidden border border-[#FFDEE5]"
            >
              {/* IMAGE */}
              <div className="relative h-48 rounded-2xl overflow-hidden bg-white"
                style={{
                  clipPath:
                    'polygon(41% 0, 100% 0, 100% 35%, 100% 96%, 80% 92%, 58% 91%, 22% 95%, 0 100%, 0% 35%, 0 0)'
                }}
              >
                {/* Image */}
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  priority
                  className="object-cover"
                />
                {/* Badge */}
                <span className="absolute top-4 left-4 z-10 bg-gray-600 text-white text-sm font-medium px-5 py-2 rounded-full shadow-md">
                  {item.badge}
                </span>
              </div>
              {/* CONTENT */}
              <div className="p-6">
                <h3 className="text-2xl font-semibold">
                  {item.title}
                </h3>

                <p className="mt-2 text-[14px] h-22">
                  {item.desc}
                </p>

                <p className="text-[#ef1c4f] font-semibold mt-2">
                  {item.price}{' '}
                  <span className="text-sm text-gray-600 font-normal">
                    Per Month
                  </span>
                </p>

                {/* FEATURES */}
                <ul className="mt-4 space-y-2 text-sm text-gray-600">
                  <li className='flex items-center gap-2'>
                    <span>
                      <Image src="/home/icon/individual-bed.png" alt="Bed Icon" width={16} height={16} />
                    </span>
                    <span>
                      Individual Bed
                    </span>
                  </li>
                  <li className='flex items-center gap-2'>
                    <span>
                      <Image src="/home/icon/attached-bathroom.png" alt="Bathroom Icon" width={16} height={16} />
                    </span>
                    <span>
                      Attached Bathroom
                    </span>
                  </li>
                  <li className='flex items-center gap-2'>
                    <span>
                      <Image src="/home/icon/individual-study.png" alt="Study Table Icon" width={16} height={16} />
                    </span>
                    <span>
                      Individual Study Table
                    </span>
                  </li>
                  <li className='flex items-center gap-2'>
                    <span>
                      <Image src="/home/icon/unlimited-wi-fi.png" alt="Wi-Fi Icon" width={16} height={16} />
                    </span>
                    <span>
                      Unlimited Wi-Fi
                    </span>
                  </li>
                  <li className='flex items-center gap-2'>
                    <span>
                      <Image src="/home/icon/individual-cupboard.png" alt="Cupboard Icon" width={16} height={16} />
                    </span>
                    <span>
                      Individual Cupboard
                    </span>
                  </li>
                </ul>

                {/* CTA */}
                <Link href="/contact"><button className="mt-6 w-full bg-[#ef1c4f] hover:bg-[#d91847] text-white py-3 rounded-full text-sm font-medium transition flex items-center justify-center gap-2 cursor-pointer">
                  <span>Check Availability</span>
                  <span><IoIosArrowForward /></span>
                </button></Link>
              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section >
  );
}
