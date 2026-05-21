'use client';

import { motion, type Variants } from 'framer-motion';
import Image from 'next/image';

export default function ContentSection() {
    const containerVariants: Variants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.18,
            },
        },
    };

    const textVariants: Variants = {
        hidden: { opacity: 0, y: 22 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: 'easeOut',
            },
        },
    };

    const imageVariants: Variants = {
        hidden: { opacity: 0, scale: 1.05 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.8,
                ease: 'easeOut',
            },
        },
    };

    return (
        <motion.div
            className="bg-white md:px-10 px-0"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.35 }}
        >
            {/* Header Section */}
            <motion.section
                className="px-6 md:px-12 md:py-12"
                variants={containerVariants}
            >
                <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-3 md:gap-8">
                    <motion.div
                        variants={imageVariants}
                        className="col-span-12 md:col-span-4"
                    >
                        <div className="rounded-2xl overflow-hidden">
                            <Image
                                src="/girls/att.jpg"
                                alt="Student"
                                width={300}
                                height={300}
                                className="w-full h-auto"
                            />
                        </div>
                    </motion.div>

                    <motion.div
                        variants={textVariants}
                        className="col-span-12 md:col-span-8"
                    >
                        <h1 className="text-xl md:text-3xl font-semibold mb-4">
                            Best Girls HOSTEL Near Christ University, Bangalore
                        </h1>
                        <p className="text-gray-600 text-[15px] leading-relaxed">
                            HappiLiv Hostels For Girls Near Christ University Offers An Ideal
                            Combination Of Safety, Comfort, And Convenience For Students. Designed To
                            Be A True Home Away From Home, Our HOSTEL Provides A Calm, Secure, And
                            Welcoming Environment Supported By Modern Amenities That Suit Todays
                            Lifestyle.
                        </p>
                    </motion.div>


                </div>
            </motion.section>

            {/* Accommodation Section */}
            <motion.section
                className="px-6 md:px-12 py-12"
                variants={containerVariants}
            >
                <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-3 md:gap-8">

                    <motion.div
                        variants={textVariants}
                        className="col-span-12 md:col-span-8 order-2 md:order-2"
                    >
                        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
                            Accommodation & Facilities
                        </h2>
                        <p className="text-gray-600 text-[15px] leading-relaxed">
                            Whether You Are A College Student, Our Accommodation Delivers The
                            Right Balance Of Comfort, Affordability, And Quality Living. With Clean
                            Interiors, Modern Infrastructure, And 24/7 Security, HappiLiv Hostels Creates A Supportive Living Space Where Residents Can Focus
                            Fully On Their Studies Or Professional Commitments.
                        </p>
                    </motion.div>

                    <motion.div
                        variants={imageVariants}
                        className="col-span-12 md:col-span-4 order-1 md:order-2"
                    >
                        <div className="rounded-2xl overflow-hidden">
                            <Image
                                src="/girls/att-1.jpg"
                                alt="Accommodation"
                                width={300}
                                height={300}
                                className="w-full h-auto"
                            />
                        </div>
                    </motion.div>
                </div>
            </motion.section>
        </motion.div>
    );
}