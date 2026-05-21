'use client';

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import toast from 'react-hot-toast';
import api from '../../../../lib/axios';

export default function ContactFormSection() {

  const { executeRecaptcha } = useGoogleReCaptcha();

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const isValidPhone = (phone: string) => /^\d{10}$/.test(phone);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim()) {
      toast.error('Name is required');
      return;
    }

    if (!isValidPhone(formData.phone)) {
      toast.error('Please enter a valid 10-digit mobile number');
      return;
    }

    

    if (!executeRecaptcha) {
      toast.error('reCAPTCHA not ready');
      return;
    }

    setLoading(true);

    try {
      // Get reCAPTCHA token
      const recaptchaToken = await executeRecaptcha('contact_form');

      const res = await api.post(
        '/booking/roombookinggmail',
        {
          name: formData.name,
          phone: formData.phone,
          message: formData.message,
          gender: 'Girls',
          recaptchaToken: recaptchaToken, // 👈 send token
        }
      );

      toast.success('Message sent successfully!');
      setFormData({ name: '', phone: '', message: '' });

    } catch (error) {
      toast.error('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden mb-10"
      id="contact-form"
    >

      {/* BACKGROUND */}
      <Image
        src="/boys/group2.jpg"
        alt="HappiLiv Hostel"
        fill
        priority
        className="object-cover grayscale"
      />
      <div className="absolute inset-0 bg-black/70"></div>

      <div className="relative z-10 max-w-7xl w-full px-6 md:px-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* LOGO */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Image
            src="/room-logo.png"
            alt="HappiLiv Logo"
            width={280}
            height={120}
            className="w-64"
          />
        </motion.div>

        {/* FORM */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white/10 backdrop-blur-[2px] border border-white/20 rounded-3xl p-6 shadow-2xl ml-auto lg:w-[65%] my-14 lg:mr-20 mr-0"
        >

          <h2 className="text-3xl font-semibold text-white mb-2">
            <span className="text-[#FF5B80]">Send</span> Us A Message
          </h2>

          <p className="text-sm text-gray-300 mb-6">
            Reach Out To Us Anytime Our Team Is Here To Help Make Your Experience Smooth And Memorable.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter Your Full Name *"
              required
              className="w-full bg-transparent border border-white/30 rounded-full px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-[#FF5B80]"
            />

            <input
              type="tel"
              name="phone"
              value={formData.phone}
              required
              inputMode="numeric"
              maxLength={10}
              pattern="[0-9]{10}"
              onChange={(e) => {
                const value = e.target.value.replace(/\D/g, '');
                setFormData(prev => ({ ...prev, phone: value }));
              }}
              placeholder="Enter Your Contact Number *"
              className="w-full bg-transparent border border-white/30 rounded-full px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-[#FF5B80]"
            />

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={3}
              placeholder="Enter Your Message"
              className="w-full bg-transparent border border-white/30 rounded-2xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-[#FF5B80] resize-none"
            />

            <button

              type="submit"
              disabled={loading}
              className="cursor-pointer w-full bg-[#FF5B80] hover:bg-[#FF5B80] transition text-white font-semibold py-3 rounded-full disabled:opacity-50"
            >
              {loading ? 'Sending...' : 'Enquire Now'}
            </button>

          </form>
        </motion.div>
      </div>
    </section>
  );
}
