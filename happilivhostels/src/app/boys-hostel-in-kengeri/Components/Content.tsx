'use client';

import Image from "next/image";
import { motion, type Variants } from "framer-motion";

export default function Content() {
    const container: Variants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.15,
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
        <section className="relative py-10 lg:py-16 overflow-hidden bg-white">
            {/* Left bar */}
            <motion.div
                className="absolute left-0 top-1/2 -translate-y-1/2 h-[120px] w-[60px] bg-[#EE1C4C]"
                initial={{ x: -40, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut" }}
            />

            {/* Right bar */}
            <motion.div
                className="absolute right-0 top-1/2 -translate-y-1/2 h-[120px] w-[60px] bg-[#EE1C4C]"
                initial={{ x: 40, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut" }}
            />

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
                            src="/about/att.jpg"
                            alt="Our Story"
                            width={600}
                            height={400}
                            className="rounded-2xl object-cover w-full"
                        />
                    </motion.div>

                    {/* Text */}
                    <div className="px-3">
                        <motion.h2
                            variants={fadeUp}
                            className="text-[26px] font-semibold mb-4"
                        >
                            Our <span className="text-[#EE1C4C]">Story</span>
                        </motion.h2>

                        <motion.p
                            variants={fadeUp}
                            className="text-gray-700 leading-relaxed text-[15px]"
                        >
                            HappiLiv Hostels, built not just for a stay but for meeting eyes,
                            sharing stories. Because belonging matters more, spaces open wide
                            for chance talks, laughter spilling past midnight. Comfort wraps
                            around you while ideas flow freely. Creativity hums through walls
                            painted with local voices, hands shaping each stay differently.
                            Connections form slowly here, sometimes loud, often quiet – over
                            tea, a walk, a song offered. Though nights pass fast, what sticks
                            are faces remembered.
                        </motion.p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
