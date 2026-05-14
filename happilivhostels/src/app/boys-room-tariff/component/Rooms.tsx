'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const rooms = [
    {
        id: 1,
        badge: 'Most Private',
        title: 'Single Occupancy',
        description:
            'Stay relaxed and enjoy your privacy in our spacious single occupancy rooms. Each room is chosen with every convenience of modern life.',
        price: '₹ 18,000',
        period: 'Per Month',
        image: '/boys/room1.webp',
        features: [
            { id: 'bed-1', title: 'Individual Bed', icon: '/boys/icons/card/bed.png' },
            { id: 'bath-1', title: 'Attached Bathroom', icon: '/boys/icons/card/wash.png' },
            { id: 'table-1', title: 'Individual Study Table', icon: '/boys/icons/card/stady.png' },
            { id: 'wifi-1', title: 'Unlimited Wi-Fi', icon: '/boys/icons/card/wifi.png' },
            { id: 'cup-1', title: 'Individual Cupboard', icon: '/boys/icons/card/door.png' }
        ]
    },
    {
        id: 2,
        badge: 'Most Popular',
        title: 'Two Sharing Room',
        description:
            'Learn how to accommodate a person from completely different backgrounds in our two sharing rooms.',
        price: '₹ 14,000',
        period: 'Per Month',
        image: '/boys/room2.webp',
        features: [
            { id: 'bed-1', title: 'Individual Bed', icon: '/boys/icons/card/bed.png' },
            { id: 'bath-1', title: 'Attached Bathroom', icon: '/boys/icons/card/wash.png' },
            { id: 'table-1', title: 'Individual Study Table', icon: '/boys/icons/card/stady.png' },
            { id: 'wifi-1', title: 'Unlimited Wi-Fi', icon: '/boys/icons/card/wifi.png' },
            { id: 'cup-1', title: 'Individual Cupboard', icon: '/boys/icons/card/door.png' }
        ]
    },
    {
        id: 3,
        badge: 'Budget Friendly',
        title: 'Three Sharing Rooms',
        description:
            'Threes never a crowd. In fact, the best of friends are always found in trios.',
        price: '₹ 12,000',
        period: 'Per Month',
        image: '/home/threesharing.jpg',
        features: [
            { id: 'bed-1', title: 'Individual Bed', icon: '/boys/icons/card/bed.png' },
            { id: 'bath-1', title: 'Attached Bathroom', icon: '/boys/icons/card/wash.png' },
            { id: 'table-1', title: 'Individual Study Table', icon: '/boys/icons/card/stady.png' },
            { id: 'wifi-1', title: 'Unlimited Wi-Fi', icon: '/boys/icons/card/wifi.png' },
            { id: 'cup-1', title: 'Individual Cupboard', icon: '/boys/icons/card/door.png' }
        ]
    }
];
const scrollToContactForm = () => {
  const section = document.getElementById('contact-form');
  if (section) {
    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
};


const FeatureIcon = ({ icon }: { icon: string }) => {
    return <Image src={icon} alt="feature" width={20} height={20} className="w-5 h-4" />;
};

export default function BoysRoomSection() {
    return (
        <section className="py-14 px-4">
            <div className="max-w-6xl mx-auto">

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {rooms.map((room) => (
                        <motion.div
                            key={room.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            whileHover={{ y: -6 }}
                            transition={{ duration: 0.5, ease: 'easeOut' }}
                            viewport={{ once: true }}
                            className="bg-white rounded-2xl shadow-lg overflow-hidden"
                        >


                            {/* IMAGE WITH CLIP-PATH */}
                            {/* SHADOW WRAPPER */}
                            <div className="relative h-56 w-full">

                                {/* SHADOW WITH SAME CLIP-PATH */}
                                <div
                                    className="absolute inset-0 bg-[#b62b49] blur-3xl opacity-20 translate-y-1"
                                    style={{
                                        clipPath:
                                            'polygon(41% 0, 100% 0, 100% 35%, 100% 96%, 80% 92%, 58% 91%, 22% 95%, 0 100%, 0% 35%, 0 0)'
                                    }}
                                ></div>

                                {/* IMAGE CLIP */}
                                <div
                                    className="relative h-56 w-full overflow-hidden"
                                    style={{
                                        clipPath:
                                            'polygon(41% 0, 100% 0, 100% 35%, 100% 96%, 80% 92%, 58% 91%, 22% 95%, 0 100%, 0% 35%, 0 0)'
                                    }}
                                >
                                    <Image
                                        src={room.image}
                                        alt="Single Occupancy"
                                        fill
                                        className="object-cover"
                                    />

                                    {/* Badge */}
                                    <div className="absolute top-4 left-4 z-10">
                                        <span className="bg-gray-700 text-white px-4 py-2 rounded-full text-xs font-semibold">
                                            {room.badge}
                                        </span>
                                    </div>
                                </div>

                            </div>



                            {/* CONTENT */}
                            <div className="p-6">
                                <h3 className="text-2xl font-semibold text-black mb-2">
                                    {room.title}
                                </h3>

                                {/* PRICE */}
                                <div className="mb-5">
                                    <span className="text-xl font-semibold text-[#002b5b]">
                                        {room.price}
                                    </span>
                                    <span className="text-gray-600 text-base ml-2">
                                        Per Month
                                    </span>
                                </div>

                                {/* FEATURES */}
                                <div className="space-y-3 mb-6">
                                    {room.features.map((feature) => (
                                        <div
                                            key={feature.id}
                                            className="flex items-center gap-3 text-gray-700 text-[13px]"
                                        >
                                            <FeatureIcon icon={feature.icon} />
                                            {feature.title}
                                        </div>
                                    ))}
                                </div>

                                {/* BUTTON */}
                                <button className="cursor-pointer w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 rounded-full transition flex items-center justify-center"
                                  onClick={scrollToContactForm}
                                  >
                                    <span> Book Now</span> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4">
                                        <path fillRule="evenodd" d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" clipRule="evenodd" />
                                    </svg>
                                </button>
                            </div>

                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
