import BannerSection from "./Components/Banner";
import ContactFormSection from "./Components/ContactSection";
import ContentSection from "./Components/Content";
import BoysRoomSection from "./Components/Rooms";
import SingleContentSection from "./Components/SigleContent";
import WhyChoose from "./Components/Why";
import Link from "next/link";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Girls Room Tariff - Safe & Comfortable Hostel Rooms',
  description: 'Browse our girls room tariffs with premium facilities. Safe, comfortable, and well-maintained hostel rooms designed for female guests.',
};

export default function Girls() {
    return (
        <>
            <BannerSection />
            <BoysRoomSection />
            <ContentSection />

            {/* INTERNAL LINK SECTION */}
            <section className="px-6 md:px-16 py-10 bg-gray-50">
                <h2 className="text-2xl font-semibold mb-4">
                    Looking for a Hostel Near Christ University?
                </h2>
                <p className="text-gray-600 mb-4">
                    Explore our dedicated page for students searching for safe and affordable
                    accommodation near Christ University, Bangalore.
                </p>
                <Link
                    href="/girls-hostel-near-christ-university"
                    className="text-[#FF5B80] font-semibold underline"
                >
                    Girls Hostel Near Christ University →
                </Link>
            </section>

            <WhyChoose />
            <SingleContentSection />
            <ContactFormSection />
        </>
    );
}
