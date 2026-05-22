'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';



export default function SingleContentSection() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <motion.div
            className="bg-white"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
        >
            {/* Header Section */}
            <motion.section variants={itemVariants} className="px-6 md:px-20 py-12">
                <div className="flex flex-col md:flex-row items-center gap-8">
                    <div className="flex-1 order-2 md:order-1">
                        <h1 className="text-xl md:text-3xl font-semibold text-black mb-4">
                            A Modern, Safe Hostel for Boys Near Christ University
                        </h1>
                        <p className="text-gray-600 leading-relaxed">
                            At HappiLiv Hostels, resident well-being is our priority. Cleanliness, safety, and comfort are maintained through carefully planned spaces and essential facilities, ensuring a secure and pleasant stay for everyone.
                        </p>
                    </div>
                    <motion.div
                        variants={itemVariants}
                        className="flex-1"
                    >
                        <div className="rounded-2xl overflow-hidden">
                            <Image
                                src="/boys/hostel.webp"
                                alt="Student"
                                width={400}
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