'use client';

import Image from "next/image";
import { FaAngleRight } from "react-icons/fa6";
import { motion, type Variants } from "framer-motion";

import Link from "next/link";

export default function Features() {
    const features = [
        {
            img: "/about/icon-1.png",
            title: "Safe & Secure",
            desc: "24×7 CCTV & support. Your safety is our top priority."
        },
        {
            img: "/about/icon-2.png",
            title: "Pocket-Friendly",
            desc: "Affordable pricing. Modern amenities without heavy costs."
        },
        {
            img: "/about/icon-3.png",
            title: "Clean & Comfortable",
            desc: "Daily housekeeping. Fresh rooms and hygienic spaces every day."
        },
        {
            img: "/about/icon-4.png",
            title: "Quality Food",
            desc: "Every day, delicious dishes made using fresh ingredients."
        },
        {
            img: "/about/icon-5.png",
            title: "Prime Locations",
            desc: "Ideal location for students and professionals."
        },
    ];

    const container: Variants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.15,
            },
        },
    };

    const cardAnim: Variants = {
        hidden: { opacity: 0, y: 20, scale: 0.95 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut",
            },
        },
    };

    const iconAnim: Variants = {
        hidden: { opacity: 0, scale: 0.7 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.4,
                ease: "easeOut",
            },
        },
    };

    return (
        <section className="max-w-7xl mx-auto px-6 lg:px-16 py-16 bg-white">
            {/* FEATURES */}
            <motion.div
                className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12 items-center"
                variants={container}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.4 }}
            >
                {features.map((feature, index) => (
                    <motion.div
                        key={index}
                        variants={cardAnim}
                        className="text-center px-3"
                    >
                        <motion.div
                            variants={iconAnim}
                            className="flex justify-center mb-4"
                        >
                            <Image
                                src={feature.img}
                                alt={feature.title}
                                width={42}
                                height={42}
                            />
                        </motion.div>

                        <h3 className="text-sm font-semibold mb-2">
                            {feature.title}
                        </h3>

                        <p className="text-xs text-gray-500 leading-relaxed">
                            {feature.desc}
                        </p>
                    </motion.div>
                ))}
            </motion.div>

            {/* CTA BUTTON */}
            <motion.div
                className="flex justify-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            >
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-[#EE1C4C] text-white px-8 py-3 rounded-full text-sm font-medium hover:bg-[#d91944] transition flex gap-2 items-center"
                >
                    <Link href="/contact" className="text-white">
                        Contact Us
                    </Link>
                    <motion.span
                        whileHover={{ x: 4 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        <FaAngleRight />
                    </motion.span>
                </motion.button>
            </motion.div>
        </section>
    );
}
