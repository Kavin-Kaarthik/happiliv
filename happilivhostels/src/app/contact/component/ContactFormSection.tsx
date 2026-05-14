'use client';
import { AxiosError, AxiosResponse } from 'axios';
import { Instagram } from 'lucide-react';
import { FaPhoneVolume, FaFacebookF, FaLinkedinIn } from "react-icons/fa6";
import { RiWhatsappFill } from "react-icons/ri";
import { IoMdMail } from "react-icons/io";
import { BsTwitterX } from "react-icons/bs";
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import { useState } from 'react';
import toast from 'react-hot-toast';
import api from '../../../../lib/axios';
import { motion } from 'framer-motion';

interface ContactForm {
    name: string;
    email: string;
    phone: string;
    message: string;
}

interface ApiResponse {
    success: boolean;
    message: string;
}

interface ApiError {
    message?: string;
}


export default function ContactFormSection() {
    const { executeRecaptcha } = useGoogleReCaptcha();

    const containerVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { staggerChildren: 0.12, when: 'beforeChildren' },
        },
    } as const;

    const itemVariants = {
        hidden: { opacity: 0, y: 12 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.48, ease: 'easeOut' } },
    } as const;

    const [form, setForm] = useState<ContactForm>({
        name: '',
        email: '',
        phone: '',
        message: '',
    });

    const [loading, setLoading] = useState(false);
    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target as HTMLInputElement | HTMLTextAreaElement;
        setForm({ ...form, [name]: value });
    };
    const isValidEmail = (email: string) => {
        if (email.length > 320) return false;
        const at = email.indexOf("@");
        const dot = email.lastIndexOf(".");
        return at > 0 && dot > at + 1 && dot < email.length - 1;
    };

    const handleSubmit = async (e: React.FormEvent) => {

        e.preventDefault();
        if (!form.name.trim()) {
            toast.error('Name is required');
            return;
        }

        if (!isValidEmail(form.email)) {
            toast.error('Please enter a valid email address');
            return;
        }

        if (!/^\d{10}$/.test(form.phone)) {
            toast.error('Please enter a valid 10-digit mobile number');
            return;
        }

        
        if (!executeRecaptcha) {
            toast.error('reCAPTCHA not ready');
            return;
        }
        try {
            setLoading(true);
            const recaptchaToken: string = await executeRecaptcha('contact_form');
            const res: AxiosResponse<ApiResponse> =
                await api.post<ApiResponse>('/contact/sendmail', {
                    ...form,
                    recaptchaToken,
                });
            toast.success(res.data.message);
            setForm({
                name: '',
                email: '',
                phone: '',
                message: '',
            });
        } catch (error: unknown) {
            const err = error as AxiosError<ApiError>;
            toast.error(
                err.response?.data?.message ?? 'Something went wrong'
            );
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <motion.section
                className="w-full bg-white "
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.18 }}
            >
                <div className="max-w-7xl mx-auto px-4 py-5 md:py-15">
                    <div className='  h-40 w-full bg-[#EE1C4C] absolute top-270 left-0 right-0'></div>
                    <motion.div
                        className=" relative bg-white rounded-4xl mt-10 md:mt-0  shadow-lg border border-gray-300 p-8 md:p-10 lg:mx-30 md:mx-15"
                        variants={itemVariants}
                    >
                        <motion.h2 className="text-2xl font-semibold text-black mb-1" variants={itemVariants}>
                            <span className='text-[#EE1C4C]'>Send</span> Us A Message
                        </motion.h2>

                        <motion.p className="text-sm text-black mb-6" variants={itemVariants}>
                            Reach out to us anytime our team is here to help make your <br />experience smooth and memorable.
                        </motion.p>

                        <motion.form onSubmit={handleSubmit} className="space-y-5" variants={itemVariants}>
                            {/* Inputs Row */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <div>
                                    <label className="text-sm font-medium text-black">
                                        Full Name *
                                    </label>
                                    <input
                                        name="name"
                                        value={form.name}
                                        onChange={handleChange}
                                        required
                                        type="text"
                                        placeholder="Enter Your Full Name"
                                        className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-pink-500"
                                    />
                                </div>

                                <div>
                                    <label className="text-sm font-medium text-black">
                                        Email *
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={form.email}
                                        onChange={handleChange}
                                        required
                                        placeholder="Enter Your Email"
                                        className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-pink-500"
                                    />
                                </div>

                                <div>
                                    <label className="text-sm font-medium text-black">
                                        Mobile Number *
                                    </label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={form.phone}
                                        required
                                        inputMode="numeric"
                                        maxLength={10}
                                        pattern="[0-9]{10}"
                                        onChange={(e) => {
                                            const value = e.target.value.replace(/\D/g, '');
                                            setForm(prev => ({ ...prev, phone: value }));
                                        }}
                                        placeholder="Enter Your Contact Number"
                                        className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-pink-500"
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col md:flex-row md:items-end md:gap-6 w-full">
                                {/* Message – 50% */}
                                <div className="w-full md:w-1/2">
                                    <label className="text-sm font-medium text-black">
                                        Message
                                    </label>
                                    <textarea
                                        name="message"
                                        value={form.message}
                                        onChange={handleChange}
                                        rows={4}
                                        placeholder="Enter Your Message"
                                        className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-pink-500"
                                    />
                                </div>

                                {/* Button – 50% */}
                                <div className="w-full md:w-1/2 flex md:items-center lg:justify-start md:justify-center mb-8">
                                    <button
                                        type="submit"
                                        disabled={loading}
                                        className="cursor-pointer bg-[#ee1c4c] hover:bg-black text-white text-sm font-medium px-6 py-2.5 rounded-full h-[42px]"
                                    >
                                        {loading ? 'Sending...' : 'Send A Message'}
                                    </button>
                                </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full items-end">
                                {/* Left text */}
                                <p className="text-xs text-black">
                                    For Booking-Related Queries, Group Stays, Or Collaborations,
                                    Please Mention The Details Clearly In Your Message So We Can
                                    Assist You Better.
                                </p>

                                {/* Right empty / future content */}
                                <div className="flex md:justify-end">
                                    {/* keep empty or add button later */}
                                </div>
                            </div>
                        </motion.form>
                    </motion.div>
                </div>
            </motion.section>

            <section
                className="w-full bg-white pb-16"
            >
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-[60%_40%] min-h-[420px] lg:min-h-[450px] gap-10 items-stretch md:mx-33 mx-auto relative">

                        {/* ===== LEFT CONTENT ===== */}
                        <motion.div variants={itemVariants}>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.709270117793!2d77.43257937358699!3d12.862045017273731!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae38c490000001%3A0xaebe47889363e5de!2sHappiLiv%20Hostel!5e0!3m2!1sen!2sin!4v1770802434571!5m2!1sen!2sin" width="600" height="450"  className="w-full rounded-xl h-full border-0"></iframe>
                        </motion.div>

                        {/* ===== CONTACT CARD ===== */}
                        <motion.div
                            className="bg-[#EE1C4C] rounded-2xl p-8 text-white"
                            variants={itemVariants}
                        >
                            <motion.h3 className="text-lg font-semibold mb-6" variants={itemVariants}>
                                Hi! We Are Always Here To Help You
                            </motion.h3>

                            <motion.div className="space-y-4" variants={itemVariants}>
                                {/* Phone */}
                                <motion.a
                                    href="tel:+916369089384"
                                    className="block"
                                    variants={itemVariants}
                                >
                                    <div className="flex items-center gap-3 bg-[#FFFFFF3D] p-3 rounded-lg hover:bg-[#FFFFFF4D] transition">
                                        <FaPhoneVolume size={18} />
                                        <div>
                                            <p className='font-semibold text-[12px]'>Phone:</p>
                                            <span className="text-sm">+91 63630 98384</span>< br/>
                                            <span className="text-sm">+91 63661 24184</span>
                                        </div>
                                    </div>
                                </motion.a>

                                {/* WhatsApp */}
                                <motion.a
                                    href="https://wa.me/917892861368"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block"
                                    variants={itemVariants}
                                >
                                    <div className="flex items-center gap-3 bg-[#FFFFFF3D] p-3 rounded-lg hover:bg-[#FFFFFF4D] transition">
                                        <RiWhatsappFill size={18} />
                                        <div>
                                            <p className='font-semibold text-[12px]'>Message / Whatsapp</p>
                                            <span className="text-sm">+91 78928 81368</span>
                                        </div>
                                    </div>
                                </motion.a>

                                {/* Email */}
                                <motion.a
                                    href="mailto:happilivhostels@gmail.com"
                                    className="block"
                                    variants={itemVariants}
                                >
                                    <div className="flex items-center gap-3 bg-[#FFFFFF3D] p-3 rounded-lg hover:bg-[#FFFFFF4D] transition">
                                        <IoMdMail size={18} />
                                        <div>
                                            <p className='font-semibold text-[12px]'>Email:</p>
                                            <span className="text-sm">happilivhostels@gmail.com</span>
                                        </div>
                                    </div>
                                </motion.a>
                            </motion.div>

                            <div className="w-full mt-6">
                                <div className="w-full h-px bg-white mb-4" />
                                <motion.p className="text-xs text-white" variants={itemVariants}>
                                    Connect with us
                                </motion.p>
                            </div>

                            {/* Social Icons */}
                            <motion.div
                                className="flex justify-between gap-4 mt-6"
                                variants={itemVariants}
                            >
                                <motion.a
                                    href="https://www.facebook.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Facebook"
                                    variants={itemVariants}
                                >
                                    <FaFacebookF size={18} />
                                </motion.a>

                                <motion.a
                                    href="https://www.instagram.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Instagram"
                                    variants={itemVariants}
                                >
                                    <Instagram size={18} />
                                </motion.a>

                                <motion.a
                                    href="https://twitter.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Twitter X"
                                    variants={itemVariants}
                                >
                                    <BsTwitterX size={18} />
                                </motion.a>

                                <motion.a
                                    href="https://wa.me/917892861368"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="WhatsApp"
                                    variants={itemVariants}
                                >
                                    <RiWhatsappFill size={18} />
                                </motion.a>

                                <motion.a
                                    href="https://www.linkedin.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="LinkedIn"
                                    variants={itemVariants}
                                >
                                    <FaLinkedinIn size={18} />
                                </motion.a>
                            </motion.div>

                        </motion.div>
                    </div>
                </div>
            </section>

        </>
    );
}
