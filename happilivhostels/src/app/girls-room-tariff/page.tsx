import BannerSection from "./Components/Banner";
import ContactFormSection from "./Components/ContactSection";
import ContentSection from "./Components/Content";
import BoysRoomSection from "./Components/Rooms";
import SingleContentSection from "./Components/SigleContent";
import WhyChoose from "./Components/Why";
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
            <WhyChoose />
            <SingleContentSection />
            <ContactFormSection />
        </>
    );
}