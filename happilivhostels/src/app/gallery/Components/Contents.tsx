'use client';

import Image from "next/image";
import { motion, type Variants } from "framer-motion";

export default function Contents() {
    const container: Variants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.18,
            },
        },
    };

    const fadeUp: Variants = {
        hidden: { opacity: 0, y: 22 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut",
            },
        },
    };

    const imageLeft: Variants = {
        hidden: { opacity: 0, y: 30, scale: 1.05 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.8,
                ease: "easeOut",
            },
        },
    };

    const imageRight: Variants = {
        hidden: { opacity: 0, y: 50, scale: 1.08 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 1,
                ease: "easeIn",
            },
        },
    };

    return (
        <section className="max-w-7xl mx-auto px-6 lg:px-16 py-8">
            <motion.div
                className="grid grid-cols-1 md:grid-cols-2 gap-3 items-center"
                variants={container}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.4 }}
            >
                {/* TEXT */}
                <motion.div variants={fadeUp} className="pb-4">
                    <h2 className="text-[25px] font-semibold">
                        More than a place to stay
                    </h2>
                    <p>
                        It’s about people, conversations, and experiences that
                        stay with you long after the journey ends.
                    </p>
                </motion.div>

                {/* IMAGES */}
                <div className="flex gap-6 justify-end">
                    <motion.div
                        variants={imageLeft}
                        className="w-[220px] h-[320px] relative"
                    >
                        <Image
                            src="/gallery/att-3.jpg"
                            alt="Hostel life"
                            fill
                            className="object-cover rounded-2xl"
                        />
                    </motion.div>

                    <motion.div
                        variants={imageRight}
                        className="w-[220px] h-[320px] relative"
                    >
                        <Image
                            src="/gallery/att-4.jpg"
                            alt="Study space"
                            fill
                            className="object-cover rounded-2xl"
                        />
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
}
