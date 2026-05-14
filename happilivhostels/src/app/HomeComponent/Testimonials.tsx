'use client';

import Image from 'next/image';
import { motion, type Variants } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { FaQuoteLeft } from "react-icons/fa";



const nearbyPlaces = [
  {
    title: 'Christ University Kengeri',
    desc: 'Christ University Kengeri campus is less than 100 metres',
    img: '/assets/college.jpg',
  },
  {
    title: 'Hospital Facility',
    desc: 'Less than 150 metres hospital facility',
    img: '/assets/hospitals.jpg',
  },
  {
    title: 'Bus Stop',
    desc: 'Bus stop is less than 100 metres',
    img: '/assets/bus.jpg',
  },
];

const testimonials = [
  {
    name: 'Sudiksha Bagaddeo',
    image: '/review/1review.png',
    rating: 5,
    content:
      'Best hostel ever with friendly wardens who truly care. Incredible food with many varieties for North and South Indians. Celebrations, movie nights, four meals daily—join here to find your second family forever.',
  },
  {
    name: 'Nischay Chhetri',
    image: '/review/3review.png',
    rating: 5,
    content:
      'My stay at Happy Liv Boys PG was comfortable with fresh, tasty food served four times daily. Walking distance to university, daily cleaning, safe and hygienic environment make it an ideal choice for students.',
  },
  {
    name: 'Gurmeet Singh',
    image: '/review/2review.png',
    rating: 5,
    content:
      'HappiLiv is an excellent girls hostel near Christ University with clean facilities, tasty North and South Indian food four times daily, modern amenities, cooperative staff, and a safe, well-maintained environment for students.',
  },
];


const testimonialVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.98 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: [0.42, 0, 0.58, 1] } },
} as unknown as Variants;

const nearbyItemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.42, 0, 0.58, 1] } },
} as unknown as Variants;

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(1);
  const [transition, setTransition] = useState(true);
  const sliderRef = useRef<HTMLDivElement>(null);

  // Determine how many items are visible based on screen width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setItemsPerView(3); // Desktop
      } else if (window.innerWidth >= 768) {
        setItemsPerView(2); // Tablet
      } else {
        setItemsPerView(1); // Mobile
      }
    };
    

    // Initial check
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Calculate max index allowed (stops at last full view)
  // E.g., if 3 items and showing 3, maxIndex is 0 (no scroll).
  // If 3 items and showing 1, maxIndex is 2 (scroll to 3rd item).
  const maxIndex = Math.max(0, nearbyPlaces.length - itemsPerView);
useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(interval);
  }, [maxIndex]);
  const next = () => {
    if (index < maxIndex) {
      setIndex((prev) => prev + 1);
      setTransition(true);
    }
  };

  const prev = () => {
    if (index > 0) {
      setIndex((prev) => prev - 1);
      setTransition(true);
    }
  };

  return (
    <section className="bg-white overflow-hidden">

      {/* ================= TESTIMONIALS (STATIC) ================= */}
      <div className="relative bg-gradient-to-t from-[#fde2e7] from-[85%] to-white to-[100%] pt-16 pb-32 px-4 md:px-20">
        <div className="relative max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold">
              What Our <span className="text-[#ef1c4f]">Happy</span> Residents Say
            </h2>
            {/* <a href="/testimonials" className="text-[#ef1c4f] text-sm font-medium hover:underline">View All</a> */}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((item, i) => (
              <motion.div
                key={`testimonial-${i}`}
                variants={testimonialVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                className="relative bg-white rounded-xl shadow-md p-6"
              >
                <div className="absolute -top-4 left-6 h-10 w-10 rounded-full bg-[#ef1c4f] text-white flex items-center justify-center">
                  <FaQuoteLeft size={14} />
                </div>

                {/* Rating */}
                <div className="text-[#f59e0b] pt-4 mb-3">
                  {'★'.repeat(item.rating)}
                </div>

                {/* Content */}
                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.content}
                </p>

                {/* User */}
                <div className="flex items-center gap-3 mt-6">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={32}
                    height={32}
                    className="rounded-full"
                  />
                  <span className="text-sm font-medium">
                    {item.name}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 100" className="w-full">
            <path
              d="M0,0 Q720,100 1440,0 L1440,100 L0,100 Z"
              fill="#fff"
            />
          </svg>
        </div>
      </div>

      {/* ================= NEARBY FACILITIES (PROPER SLIDER) ================= */}
      <div className="md:py-20 py-5 md:px-20">
        <div className="max-w-7xl mx-auto px-4">
          <h3 className="text-xl md:text-2xl font-bold text-center mb-12">
            Every facility is less than 200 mtrs from{' '}
            <span className="text-[#ef1c4f]">our place</span>
          </h3>

          <div className="relative flex items-center">

            {/* LEFT ARROW */}
        

            {/* SLIDER CONTAINER */}
            <div className="w-full overflow-hidden">
              <div
                ref={sliderRef}
                className={`flex ${transition ? 'transition-transform duration-500 ease-in-out' : ''}`}
                style={{
                  // Calculate movement: Index * (100% / ItemsVisible)
                  transform: `translateX(-${index * (100 / itemsPerView)}%)`,
                }}
              >
                {nearbyPlaces.map((item) => (
                  <motion.div
                    key={item.title}
                    variants={nearbyItemVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    className="
                      min-w-full           /* Mobile: 1 image (100%) */
                      md:min-w-[50%]       /* Tablet: 2 images (50%) */
                      lg:min-w-[33.333%]   /* Desktop: 3 images (33.33%) */
                      px-2 md:px-4
                    "
                  >
                    <div className="rounded-xl overflow-hidden shadow-sm">
                      <Image
                        src={item.img}
                        alt={item.title}
                        width={400}
                        height={260}
                        className="object-cover w-full h-48 md:h-56 hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <h4 className="mt-4 font-semibold text-[#ef1c4f]">
                      {item.title}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {item.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>      

          </div>
        </div>
      </div>
    </section >
  );
}