'use client';

import Image from "next/image";
import { motion, type Variants } from "framer-motion";

export default function Offers() {
    const container: Variants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.18,
            },
        },
    };

    const fadeUp: Variants = {
        hidden: { opacity: 0, y: 24 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.7,
                ease: "easeOut",
            },
        },
    };

    const imageAnim: Variants = {
        hidden: { opacity: 0, scale: 1.06 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 1,
                ease: "easeOut",
            },
        },
    };

    return (
        <section className="relative md:py-16 overflow-hidden bg-white">
            <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-16">
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center bg-white"
                    variants={container}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.4 }}
                >
                    {/* Image */}
                    <motion.div variants={imageAnim}>
                        <Image
                            src="/about/att-3.jpg"
                            alt="Our Story"
                            width={600}
                            height={400}
                            className="rounded-2xl object-cover w-full"
                        />
                    </motion.div>

                    {/* Text */}
                    <div>
                        <motion.h2
                            variants={fadeUp}
                            className="text-[26px] font-semibold mb-4"
                        >
                            What does HappiLiv{" "}
                            <span className="text-[#EE1C4C]">Hostel offer ?</span>
                        </motion.h2>

                        <motion.p
                            variants={fadeUp}
                            className="text-gray-700 leading-relaxed text-[15px]"
                        >
                            Girls enter the life of college with big dreams in their eyes. And
                            it important we do our best to support their dreams and stand
                            beside them. As part of this mission, we wanted to provide a
                            space which serves as a place for all their well-being.
                        </motion.p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
