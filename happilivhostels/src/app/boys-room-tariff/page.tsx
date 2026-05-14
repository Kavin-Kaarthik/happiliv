
import Banner from "./component/Banner";
import ContactFormSection from "./component/ContactSection";
import ContentSection from "./component/Content";
import BoysRoomSection from "./component/Rooms";
import SingleContentSection from "./component/SigleContent";
import WhyChoose from "./component/Why";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Boys Room Tariff - Affordable Hostel Rooms',
  description: 'Explore our boys room options with competitive tariffs. Find affordable, well-equipped hostel rooms with excellent amenities and facilities.',
};

export default function BoysRoomTariff() {
  return (
    <>
      <Banner />
      <BoysRoomSection />
      <ContentSection />
      <WhyChoose />
      <SingleContentSection />
      <ContactFormSection />
    </>
  );
}