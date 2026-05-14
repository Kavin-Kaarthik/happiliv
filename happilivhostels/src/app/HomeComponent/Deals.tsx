'use client';
import Image from 'next/image';
import { motion, type Variants } from 'framer-motion';

export default function Deals() {

    const dealsGridVariants = {
        hidden: {},
        visible: { transition: { staggerChildren: 0.08 } },
    } as unknown as Variants;

    const dealCardVariants = {
        hidden: { opacity: 0, y: 18, scale: 0.995 },
        visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.45, ease: [0.42, 0, 0.58, 1] } },
    } as unknown as Variants;


    return (
        <div className="relative lg:py-20 py-10  overflow-hidden">
            <div className="relative max-w-7xl mx-auto px-20 max-[1200px]:px-10 max-[991px]:px-4 text-center">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                    <span className="text-[#ef1c4f]">Deals</span> That Make You Smile
                </h2>
                <p className="mt-2 text-gray-600">
                    More stays. More memories. Less spending.
                </p>

                {/* Cards */}
                <motion.div
                    variants={dealsGridVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14"
                >

                    {/* CARD 1 */}
                    <motion.div variants={dealCardVariants} className="bg-white rounded-2xl p-8 shadow-md">
                        <div className="mx-auto mb-4  flex items-center justify-center">
                            <Image
                                src="/assets/1.png"
                                alt="Special Offer"
                                width={60}
                                height={60}
                                className="object-contain"
                            />
                        </div>

                        <span className="inline-block mb-4 text-xs bg-[#ef1c4f] text-white px-3 py-1 rounded-[7px]">
                            Our Special Offers
                        </span>

                        <h4 className="font-semibold">
                            Pay Only Rs.1000 And Secure A Bed Today!
                        </h4>

                        <p className="mt-3 text-sm text-gray-600">
                            Don’t Wait Till The End. Book A Bed In Advance And Secure Your Spot.
                        </p>

                        <p className="mt-3 text-xs text-[#4E4D4D]">
                            (*Terms & Conditions Apply)
                        </p>
                    </motion.div>

                    {/* CARD 2 */}
                    <motion.div variants={dealCardVariants} className="bg-white rounded-2xl p-8 shadow-md">
                        <div className="mx-auto mb-4 flex items-center justify-center">
                            <Image
                                src="/assets/2.png"
                                alt="Pre Booking"
                                width={60}
                                height={60}
                                className="object-contain"
                            />
                        </div>

                        <span className="inline-block mb-4 text-xs bg-[#ef1c4f] text-white px-3 py-1 rounded-[7px]">
                            Pre Booking Offer
                        </span>

                        <h4 className="font-semibold">
                            Upto 20% Discount On Prebooking
                        </h4>

                        <p className="mt-3 text-sm text-gray-600">
                            Hurry Up To Avail 20% Discount On Booking Amount.
                        </p>

                        <p className="mt-3 text-xs text-[#4E4D4D]">
                            (Offer Available For Limited Period)
                        </p>
                    </motion.div>

                    {/* CARD 3 */}
                    <motion.div variants={dealCardVariants} className="bg-white rounded-2xl p-8 shadow-md">
                        <div className="mx-auto mb-4 flex items-center justify-center">
                            <Image
                                src="/assets/3.png"
                                alt="Refer and Earn"
                                width={60}
                                height={60}
                                className="object-contain"
                            />
                        </div>

                        <span className="inline-block mb-4 text-xs bg-[#ef1c4f] text-white px-3 py-1 rounded-[7px]">
                            Refer And Earn
                        </span>

                        <h4 className="font-semibold">
                            Refer A Friend And Get 2000 Cash Back
                        </h4>

                        <p className="mt-3 text-sm text-gray-600">
                            For Every Referral, Get Rs.2000 Cash back On Your Bookings.
                        </p>

                        <p className="mt-3 text-xs text-[#4E4D4D]">
                            (Offer Available For Limited Period)
                        </p>
                    </motion.div>

                </motion.div>

            </div>
        </div>
    );
}