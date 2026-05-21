'use client';

import Image from "next/image";
import { motion, type Variants } from "framer-motion";

export default function VisionMission() {
    const container: Variants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const fadeUp: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut",
            },
        },
    };

    const iconAnim: Variants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.5,
                ease: "easeOut",
            },
        },
    };

    const imageAnimLeft: Variants = {
        hidden: { opacity: 0, x: 30, scale: 1.05 },
        visible: {
            opacity: 1,
            x: 0,
            scale: 1,
            transition: {
                duration: 0.8,
                ease: "easeOut",
            },
        },
    };

    const imageAnimRight: Variants = {
        hidden: { opacity: 0, y: 40, scale: 1.08 },
        visible: {
            opacity: 1,
            x: 0,
            y: 0,
            scale: 1,
            transition: {
                duration: 1,
                ease: "easeOut",
            },
        },
    };

    return (
        <section className="max-w-6xl mx-auto px-6 lg:px-16 py-6">
            <motion.div
                className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
                variants={container}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.4 }}
            >
                {/* LEFT CONTENT */}
                <div className="space-y-8">
                    {/* Mission */}
                    <motion.div variants={fadeUp} className="flex gap-4 items-start">
                        <motion.div variants={iconAnim}>
                            <Image
                                src="/about/mission.png"
                                alt="mission"
                                width={48}
                                height={48}
                                className="mt-1"
                            />
                        </motion.div>
                        <div>
                            <h3 className="text-lg font-semibold mb-1">
                                Our Mission
                            </h3>
                            <p className="text-gray-600 text-sm leading-relaxed max-w-md">
                                To create affordable, safe, and social living spaces that
                                bring travelers together from around the world.
                            </p>
                        </div>
                    </motion.div>

                    {/* Vision */}
                    <motion.div variants={fadeUp} className="flex gap-4 items-start">
                        <motion.div variants={iconAnim}>
                            <Image
                                src="/about/vission.png"
                                alt="vision"
                                width={48}
                                height={48}
                                className="mt-1"
                            />
                        </motion.div>
                        <div>
                            <h3 className="text-lg font-semibold mb-1">
                                Our Vision
                            </h3>
                            <p className="text-gray-600 text-sm leading-relaxed max-w-md">
                                To become India’s most loved hostel community where every
                                guest feels they truly belong.
                            </p>
                        </div>
                    </motion.div>
                </div>

                {/* RIGHT IMAGES */}
                <div className="flex gap-6 justify-end">
                    <motion.div
                        variants={imageAnimLeft}
                        className="w-[220px] h-[320px] relative"
                    >
                        <Image
                            src="/about/att-1.png"
                            alt="Hostel life"
                            fill
                            className="object-cover rounded-2xl"
                        />
                    </motion.div>

                    <motion.div
                        variants={imageAnimRight}
                        className="w-[220px] h-[320px] relative"
                    >
                        <Image
                            src="/about/att-2.jpg"
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
