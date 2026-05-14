'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const images = [
    '/home/hostel-13.jpg',
    '/home/hostel-12.jpg',
    '/home/hostel-20.jpg',
];

export default function Celebrations() {
    return (
        <section className="relative bg-[#EE1C4C] py-20 overflow-hidden">

            {/* BACKGROUND */}
            <div
                className="absolute inset-0 bg-[url('/home/bg.jpg')] bg-cover bg-center"
                aria-hidden="true"
            />
            <div className="absolute inset-0 bg-[#EE1C4C] opacity-60 mix-blend-lighten" />
            <div className="absolute inset-0 opacity-40 bg-[radial-gradient(19.16%_19.16%_at_49.02%_45.24%,rgba(238,28,76,0)_0%,#EE1C4C_100%)]" />

            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-16">

                {/* ✅ MOBILE SLIDER */}
                <div className="block md:hidden mb-12">
                    <Swiper
                        modules={[Autoplay]}
                        spaceBetween={16}
                        slidesPerView={1}
                        loop={true}
                        autoplay={{
                            delay: 1000,
                            disableOnInteraction: false,
                        }}
                    >
                        {images.map((src, i) => (
                            <SwiperSlide key={i}>
                                <div className="relative w-full h-[220px] rounded-2xl overflow-hidden shadow-xl">
                                    <Image src={src} alt="Celebration" fill className="object-cover" />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                {/* ✅ DESKTOP ROW (same as your current design) */}
                <div className="hidden md:flex items-center justify-center gap-6 mb-12">

                    {/* LEFT */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="relative w-[260px] h-[180px] rounded-2xl overflow-hidden"
                    >
                        <Image src="/home/hostel-13.jpg" alt="Celebration" fill className="object-cover" />
                    </motion.div>

                    {/* CENTER */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        viewport={{ once: true }}
                        className="relative w-[360px] h-[240px] rounded-2xl overflow-hidden shadow-xl"
                    >
                        <Image src="/home/hostel-12.jpg" alt="Celebration" fill className="object-cover" />
                    </motion.div>

                    {/* RIGHT */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="relative w-[260px] h-[180px] rounded-2xl overflow-hidden"
                    >
                        <Image src="/home/hostel-22.jpg" alt="Celebration" fill className="object-cover" />
                    </motion.div>

                </div>

                {/* TEXT */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="text-center max-w-3xl mx-auto text-white"
                >
                    <h3 className="text-2xl font-semibold mb-3">
                        Celebrations at HappiLiv Hostels
                    </h3>
                    <p className="text-sm leading-relaxed opacity-90">
                        Residents enjoying a cheerful hostel celebration in a comfortable
                        and friendly environment, creating memorable moments and a strong
                        sense of community throughout their stay.
                    </p>
                </motion.div>

            </div>
        </section>
    );
}
