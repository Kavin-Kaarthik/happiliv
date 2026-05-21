'use client';
import Image from "next/image";
import { motion } from "framer-motion";

export default function WhyChoose() {
    const features = [
        { icon: "/boys/icons/bed.png", title: "Separate Storage Cot" },
        { icon: "/boys/icons/groups.png", title: "Attached Bathroom" },
        { icon: "/boys/icons/stady.png", title: "Wall-Mounted Study Table" },
        { icon: "/boys/icons/door.png", title: "Personal Cupboard" },
        { icon: "/boys/icons/chare.png", title: "Individual Chair" },
        { icon: "/boys/icons/speed.png", title: "Unlimited High-Speed WiFi" },
        { icon: "/boys/icons/hot.png", title: "24/7 Hot Water Facility" },
        { icon: "/boys/icons/game.png", title: "Gaming Zones" },
        { icon: "/boys/icons/run.png", title: "Fully Equipped Gym" }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1, delayChildren: 0.2 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    };

    return (
        <div className="bg-[#FF5B80] py-12 md:py-16 lg:py-16 px-8">
            <div className="max-w-6xl mx-auto">
                {/* Title */}
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-2xl md:text-2xl lg:text-3xl font-semibold text-white mb-12 md:mb-10 px-1"
                >
                    <span className="block">Why Choose</span>
                    <span className="block">HappiLiv Hostels?</span>
                </motion.h2>

                {/* Features Grid */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="bg-[#FFFFFF14] border-1 border-white rounded-2xl p-6 md:p-8 lg:p-10"
                >
                    <motion.div
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {features.map((feature) => (
                            <motion.div
                                key={feature.title}
                                className="flex items-center gap-4"
                                variants={itemVariants}
                                whileHover={{ scale: 1.05 }}
                            >
                                <span className="text-3xl md:text-4xl flex-shrink-0">
                                    <Image
                                        src={feature.icon}
                                        alt={feature.title}
                                        width={40}
                                        height={40}
                                        className="w-full h-auto"
                                    />
                                </span>
                                <p className="text-white text-sm md:text-base font-medium">{feature.title}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
}