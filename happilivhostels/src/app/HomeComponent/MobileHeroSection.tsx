"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import api from "../../../lib/axios";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import toast from "react-hot-toast";
import OfferPopupModal from "./OfferPopupModal";
import type { AxiosError, AxiosResponse } from "axios";
import { motion, type Variants } from 'framer-motion';

const featuresVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.06 } },
} as unknown as Variants;
const featureItemVariants = {
    hidden: { opacity: 0, y: 18, scale: 0.98 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.45, ease: [0.42, 0, 0.58, 1] } },
} as unknown as Variants;

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

export default function MobileHeroSection() {
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
        name: "",
        email: "",
        phone: "",
        roomtype: "",
        gender: "",
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.currentTarget;
        setForm((prev) => ({ ...prev, [name]: value }));
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
            toast.error("Name is required");
            return;
        }

        if (!/^\d{10}$/.test(form.phone)) {
            toast.error("Please enter a valid 10-digit mobile number");
            return;
        }

        if (!isValidEmail(form.email)) {
            toast.error("Please enter a valid email address");
            return;
        }

        if (!form.roomtype) {
            toast.error("Please select room type");
            return;
        }

        if (!form.gender) {
            toast.error("Please select gender");
            return;
        }

        if (!executeRecaptcha) {
            toast.error("reCAPTCHA not ready");
            return;
        }

        try {
            setLoading(true);
            const recaptchaToken = await executeRecaptcha("booking_form");

            const res: AxiosResponse<ApiResponse> = await api.post<ApiResponse>(
                "/booking/bookingmail",
                {
                    ...form,
                    recaptchaToken,
                }
            );

            toast.success(res.data.message || "Enquiry sent successfully");

            setForm({
                name: "",
                email: "",
                phone: "",
                roomtype: "",
                gender: "",
            });
        } catch (error: unknown) {
            const err = error as AxiosError<ApiError>;
            toast.error(err.response?.data?.message ?? "Something went wrong");
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="w-full lg:hidden">
            {/* TOP IMAGE + TEXT */}
            <div className="relative w-full h-[520px] overflow-hidden">
                {/* IMAGE */}
                <Image
                    src="/home/banner.jpg"
                    alt="HappiLiv Hostel"
                    fill
                    priority
                    className="object-cover object-center"
                    sizes="100vw"
                />

                {/* WHITE GRADIENT OVERLAY (BOTTOM) */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/40 to-white"></div>

                {/* CONTENT */}
                <div className="absolute bottom-6 left-0 right-0 px-5">
                    <h1 className="text-[28px] font-extrabold leading-[1.15] text-[#222]">
                        Bangalore&apos;s Safe,
                        <br />
                        Economical,And Cozy
                        <br />
                        <span className="text-[#ef1c4f]">Hostel For Students</span>
                    </h1>

                    <p className="mt-3 text-[13px] leading-relaxed text-gray-700 max-w-[320px]">
                        High-Speed Wi-Fi, Freshly Made Meals, Clean, Well-Furnished Rooms,
                        And Round-The-Clock Security.
                    </p>
                </div>
            </div>

            {/* BLACK AREA + FORM FLOATING */}
            <div className="relative pt-8 pb-8 bg-white">
                {/* FORM CARD */}
                <div className="relative px-5 ">
                    <div className="bg-white rounded-[18px] border border-gray-300 px-6 pt-6 pb-7">
                        <form className="space-y-4" onSubmit={handleSubmit}>
                            <input
                                type="text"
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                required
                                placeholder="Full Name *"
                                className="w-full border-b border-gray-300 focus:border-[#ef1c4f] outline-none py-3 text-[14px] text-gray-600 placeholder:text-gray-600"
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
                                    const value = e.target.value.replace(/\D/g, "");
                                    setForm((prev) => ({ ...prev, phone: value }));
                                }}
                                placeholder="Mobile Number *"
                                className="w-full border-b border-gray-300 focus:border-[#ef1c4f] outline-none py-3 text-[14px] text-gray-600 placeholder:text-gray-600"
                            />

                            <input
                                type="email"
                                name="email"
                                value={form.email}
                                required
                                onChange={handleChange}
                                placeholder="Email Address *"
                                className="w-full border-b border-gray-300 focus:border-[#ef1c4f] outline-none py-3 text-[14px] text-gray-600 placeholder:text-gray-600"
                            />

                            <select
                                name="roomtype"
                                value={form.roomtype}
                                onChange={handleChange}
                                required
                                className="w-full border-b border-gray-300 focus:border-[#ef1c4f] outline-none py-3 text-[14px] text-gray-600 cursor-pointer"
                            >
                                <option value="" className="text-gray-600">Room Type *</option>
                                <option value="single" className="text-gray-600">Single Sharing</option>
                                <option value="double" className="text-gray-600">Double Sharing</option>
                                <option value="triple" className="text-gray-600">Triple Sharing</option>
                            </select>

                            <select
                                name="gender"
                                value={form.gender}
                                onChange={handleChange}
                                required
                                className="w-full border-b border-gray-300 focus:border-[#ef1c4f] outline-none py-3 text-[14px] text-gray-600 cursor-pointer bg-transparent"
                            >
                                <option value="" className="text-gray-600">Gender *</option>
                                <option value="male" className="text-gray-600">Male</option>
                                <option value="female" className="text-gray-600">Female</option>
                            </select>

                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full mt-5 bg-[#ef1c4f] hover:bg-[#d91847] text-white font-semibold py-4 rounded-xl transition cursor-pointer text-[15px]"
                            >
                                {loading ? "Sending..." : "Enquiry"}
                            </button>
                        </form>
                    </div>
                </div>
                <div className="relative overflow-hidden">

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
                                            <Image src={item.img} alt={item.title} width={40} height={40}  />
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
            </div>
            <OfferPopupModal open={showModal} onClose={() => setShowModal(false)} />
        </section>
    );
}
