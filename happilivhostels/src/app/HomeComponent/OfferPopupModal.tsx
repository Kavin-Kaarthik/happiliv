"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence, type Variants } from "framer-motion";

export const backdropVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.3, ease: "easeOut" },
  },
};

export const modalVariants: Variants = {
  hidden: { opacity: 0, scale: 0.9, y: 40 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.42, 0, 0.58, 1] },
  },
  exit: {
    opacity: 0,
    scale: 0.9,
    y: 40,
    transition: { duration: 0.25, ease: "easeIn" },
  },
};

type OfferPopupModalProps = {
  open: boolean;
  onClose: () => void;
};

export default function OfferPopupModal({ open, onClose }: OfferPopupModalProps) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 px-4"
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          onClick={onClose}
        >
          <motion.div
            className="relative bg-white rounded-2xl shadow-2xl w-full max-w-3xl overflow-hidden"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={(e) => e.stopPropagation()}
          >
            {/* CLOSE BUTTON */}
            <button
              type="button"
              aria-label="Close modal"
              onClick={onClose}
              className="absolute top-3 right-3 z-50 bg-[#ef1c4f] text-white w-9 h-9 rounded-full flex items-center justify-center hover:bg-[#d91847] transition cursor-pointer"
            >
              ✕
            </button>

            {/* IMAGE */}
            <div className="relative w-full h-[200px] sm:h-[260px] md:h-[320px]">
              <Image
                src="/home/Offer-cards.png"
                alt="Pre Booking Offer"
                fill
                priority
                sizes="(max-width: 640px) 100vw, 768px"
                className="object-cover"
              />
            </div>

            {/* CONTENT */}
            <div className="grid grid-cols-12 gap-3 py-3 items-center px-3">
              <div className="col-span-12 md:col-span-10">
                <h3 className="text-md sm:text-xl font-bold text-gray-800">
                  Hurry! Referral Benefits Up To ₹2,000 On Booking Amount.
                </h3>
                <p className="text-sm text-gray-600 mt-1">
                  (Offer Available For Limited Period)
                </p>
              </div>

              {/* CTA */}
              <div className="col-span-12 md:col-span-2">
                <Link
                  href="/contact"
                  onClick={onClose}
                  className="w-full sm:w-auto inline-flex items-center justify-center bg-[#ef1c4f] hover:bg-[#d91847] text-white text-[12px] px-6 py-3 rounded-full font-semibold leading-none transition"
                >
                  Book Now
                </Link>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
