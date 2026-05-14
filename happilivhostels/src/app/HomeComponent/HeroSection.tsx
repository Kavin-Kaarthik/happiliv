'use client';
import { useState } from 'react';
import { useEffect } from 'react';
import api from '../../../lib/axios';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import toast from 'react-hot-toast';
import type { AxiosError, AxiosResponse } from 'axios';
import OfferPopupModal from "./OfferPopupModal";
import Image from "next/image";
import { motion, type Variants } from 'framer-motion';

export const backdropVariants: Variants = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition: {
            duration: 0.3,
            ease: 'easeOut',
        },
    },
};



interface BookingForm {
    name: string;
    email: string;
    phone: string;
    roomtype: string;
    gender: string;
}

interface ApiResponse {
    success: boolean;
    message: string;
}

interface ApiError {
    message?: string;
}


const heroContentVariants = {
    hiddenLeft: { opacity: 0, x: -40 },
    hiddenRight: { opacity: 0, x: 40 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.42, 0, 0.58, 1] } },
} as unknown as Variants;

const featuresVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.06 } },
} as unknown as Variants;

const featureItemVariants = {
    hidden: { opacity: 0, y: 18, scale: 0.98 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.45, ease: [0.42, 0, 0.58, 1] } },
} as unknown as Variants;

export default function HeroSection() {
    const { executeRecaptcha } = useGoogleReCaptcha();
    const [loading, setLoading] = useState(false);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowModal(true);
        }, 10000); // 10 seconds

        return () => clearTimeout(timer);
    }, []);

    const [form, setForm] = useState<BookingForm>({
        name: '',
        email: '',
        phone: '',
        roomtype: '',
        gender: '',
    });
    
    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.currentTarget;
        setForm(prev => ({ ...prev, [name]: value }));
    };
    
    const isValidEmail = (email: string) => {
        if (email.length > 320) return false;
        const at = email.indexOf("@");
        const dot = email.lastIndexOf(".");
        return at > 0 && dot > at + 1 && dot < email.length - 1;
    };


    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!form.name.trim()) {
            toast.error('Name is required');
            return;
        }

        if (!/^\d{10}$/.test(form.phone)) {
            toast.error('Please enter a valid 10-digit mobile number');
            return;
        }

        if (!isValidEmail(form.email)) {
            toast.error('Please enter a valid email address');
            return;
        }

        if (!form.roomtype) {
            toast.error('Please select room type');
            return;
        }

        if (!form.gender) {
            toast.error('Please select gender');
            return;
        }

        if (!executeRecaptcha) {
            toast.error('reCAPTCHA not ready');
            return;
        }
        try {
            setLoading(true);
            const recaptchaToken = await executeRecaptcha('booking_form');
            const res: AxiosResponse<ApiResponse> =
                await api.post<ApiResponse>('/booking/bookingmail', {
                    ...form,
                    recaptchaToken,
                });
            toast.success(res.data.message || 'Enquiry sent successfully');
            setForm({
                name: '',
                email: '',
                phone: '',
                roomtype: '',
                gender: '',
            });
        } catch (error: unknown) {
            const err = error as AxiosError<ApiError>;
            toast.error(err.response?.data?.message ?? 'Something went wrong');
        } finally {
            setLoading(false);
        }
    };



    return (
        <section className="w-full bg-white overflow-hidden">
            {/* TOP HERO */}
            <div className="relative mx-auto px-5 lg:px-24 pt-15 pb-24 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center bg-[url('/home/banner.jpg')] bg-no-repeat bg-cover bg-center">
                {/* WHITE LEFT-TO-RIGHT OVERLAY */}
                <div aria-hidden="true" className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-white/95 to-transparent pointer-events-none z-0"></div>

                {/* LEFT CONTENT */}
                <motion.div
                    variants={heroContentVariants}
                    initial="hiddenLeft"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    className="relative z-4"
                >
                    <h1 className="text-xl md:text-2xl font-bold text-gray-800 leading-tight">
                        Bangalore&apos;s Safe, Economical,
                        <br />
                        and Cozy{' '}
                        <span className="text-[#ef1c4f]">
                            Hostel for Students
                        </span>
                    </h1>

                    <p className="mt-2">
                        High-speed Wi-Fi, freshly made meals, clean, <br></br>
                        well-furnished rooms, and round-the-clock security.
                    </p>

                    {/* FORM CARD */}
                    <div className="mt-8 bg-white rounded-2xl shadow-lg p-6 max-w-xl">
                        <form className="grid grid-cols-1 md:grid-cols-2 gap-4" onSubmit={handleSubmit}>

                            <input
                                type="text"
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                required
                                placeholder="Full Name *"
                                className="border-b border-gray-300 focus:border-[#ef1c4f] outline-none py-2 placeholder:text-gray-600"
                            />

                            <input
                                type="tel"
                                name="phone"
                                value={form.phone}
                                required
                                inputMode="numeric"
                                pattern="[0-9]{10}"
                                maxLength={10}
                                onChange={(e) => {
                                    const value = e.target.value.replace(/\D/g, '');
                                    setForm(prev => ({ ...prev, phone: value }));
                                }}
                                placeholder="Mobile Number *"
                                className="border-b border-gray-300 focus:border-[#ef1c4f] outline-none py-2 placeholder:text-gray-600"
                            />

                            <input
                                type="email"
                                name="email"
                                value={form.email}
                                required
                                onChange={handleChange}
                                placeholder="Email Address *"
                                className="border-b border-gray-300 focus:border-[#ef1c4f] outline-none py-2 placeholder:text-gray-600"
                            />

                            <select
                                name="roomtype"
                                value={form.roomtype}
                                onChange={handleChange}
                                required
                                className="border-b border-gray-300 focus:border-[#ef1c4f] outline-none py-2 text-gray-500 cursor-pointer">
                                <option value="">Room Type *</option>
                                <option value="single">Single Sharing</option>
                                <option value="double">Double Sharing</option>
                                <option value="triple">Triple Sharing</option>
                            </select>

                            <select
                                name="gender"
                                value={form.gender}
                                onChange={handleChange}
                                required
                                className="border-b border-gray-300 focus:border-[#ef1c4f] outline-none py-2 text-gray-500 md:col-span-2 cursor-pointer"
                            >
                                <option value="">Gender *</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                            </select>

                            <button
                                type="submit"
                                disabled={loading}
                                className="md:col-span-2 mt-4 bg-[#ef1c4f] hover:bg-[#d91847] text-white font-semibold py-3 rounded-lg transition cursor-pointer"
                            >
                                {loading ? 'Sending...' : 'Enquiry'}
                            </button>
                        </form>
                    </div>
                </motion.div>
            </div>

            {/* CURVED PINK SECTION */}
            <div className="relative overflow-hidden -top-18">

                {/* SVG CURVE */}
                <svg
                    className="block w-full h-[120px] -mb-px pointer-events-none"
                    viewBox="0 0 1440 120"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="none"
                >
                    <path
                        d="M0,64 C360,20 1080,20 1440,64 L1440,120 L0,120 Z"
                        fill="#fde2e7"
                    />
                </svg>
                <div className="mx-auto px-4 lg:px-20 text-center bg-gradient-to-b from-[#fde2e7] from-[85%] to-white to-[90%] pt-10 md:pb-16 border-0">
                    <div className="relative -top-10">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                            Why Choose{' '}
                            <span className="text-[#ef1c4f]">HappiLiv</span>{' '}
                            Bangalore?
                        </h2>

                        <p className="mt-2 text-gray-600">
                            A friendly, safe hostel with all the necessities for a stress-free existence.
                        </p>

                        {/* FEATURES */}
                        <motion.div
                            variants={featuresVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.25 }}
                            className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6"
                        >

                            {[
                                { title: 'Safe & Secure', desc: '24×7 CCTV & support. Your safety is our top priority.', img: '/home/safe-secure.png' },
                                { title: 'Pocket-Friendly', desc: 'Affordable pricing. Modern amenities without heavy costs.', img: '/home/pocket-friendly.png' },
                                { title: 'Clean & Comfortable', desc: 'Daily housekeeping. Fresh rooms and hygienic spaces every day.', img: '/home/clean-comfortable.png' },
                                { title: 'Quality Food', desc: 'Every day, delicious dishes made using fresh ingredients. ', img: '/home/quality-food.png' },
                                { title: 'Prime Locations', desc: 'Ideal location for students and professionals', img: '/home/prime-locations.png' },
                            ].map((item) => (
                                <motion.div
                                    key={item.title}
                                    variants={featureItemVariants}
                                    className="bg-gradient-to-br from-[#FFFFFF4D] via-[#fde2e7]/80 to-[#FFFFFF4D] rounded-2xl p-6 shadow-sm shadow-white rounded-xl p-6 shadow-sm"
                                >
                                    <div className="mx-auto mb-4 h-12 w-12 rounded-full bg-white/60 flex items-center justify-center text-[#ef1c4f]">
                                        <Image src={item.img} alt={item.title} width={40} height={40} />
                                    </div>
                                    <h4 className="font-semibold text-gray-800 text-[14px]">
                                        {item.title}
                                    </h4>
                                    <p className="text-[12px] text-gray-600 mt-1 ">
                                        {item.desc}
                                    </p>
                                </motion.div>
                            ))}

                        </motion.div>
                    </div>
                </div>
            </div>
            <OfferPopupModal open={showModal} onClose={() => setShowModal(false)} />
        </section>
    );
}
