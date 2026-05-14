'use client';

import { motion, type Variants } from 'framer-motion';
import Link from 'next/link';
import { FaAngleRight } from "react-icons/fa6";

export default function Banner() {
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2,
            },
        },
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 24 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.7,
                ease: 'easeOut',
            },
        },
    };

    return (
        <section className="relative overflow-hidden rounded-bl-4xl rounded-br-4xl">

            {/* 🔥 Animated Background Layer */}
            <motion.div
                className="absolute inset-0 bg-[url('/about/banner.png')] bg-cover bg-center"
                initial={{ scale: 1.1, y: 20 }}
                whileInView={{ scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: 'easeOut' }}
            />

            {/* Content */}
            <div className="relative mx-auto max-w-7xl px-6 lg:px-16 py-12 lg:py-20">
                <motion.div
                    className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.4 }}
                >
                    <div>
                        <motion.h2
                            variants={itemVariants}
                            className="text-[26px] lg:text-[38px] font-semibold leading-tight"
                        >
                            More Than A Stay.
                            <br />
                            It’s <span className="text-[#EE1C4C]">A Way Of Living.</span>
                        </motion.h2>

                        <motion.p
                            variants={itemVariants}
                            className="mt-4 max-w-lg text-gray-600 text-[15px] lg:text-[16px] leading-relaxed"
                        >
                            At HappiLiv Hostels, we don’t just offer beds — we create vibrant
                            spaces where students connect, explore, and feel at home
                            wherever they go.
                        </motion.p>

                        <motion.button
                            variants={itemVariants}
                            whileHover={{ scale: 1.04 }}
                            whileTap={{ scale: 0.96 }}
                            className="mt-6 inline-flex items-center rounded-full bg-[#EE1C4C] px-7 py-3 text-white text-sm font-medium hover:bg-[#d91843] transition"
                        >
                            <Link href="/contact" className="text-white">
                                Get More Details
                            </Link>
                            <motion.span
                                className="ml-2 text-lg"
                                whileHover={{ x: 4 }}
                                transition={{ type: 'spring', stiffness: 300 }}
                            >
                                <FaAngleRight />
                            </motion.span>
                        </motion.button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
