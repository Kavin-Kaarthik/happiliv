import Banner from './component/Banner';
import ContactFormSection from './component/ContactFormSection';
import { Metadata } from 'next';
import FindUsSection from './component/FindUsSection';

export const metadata: Metadata = {
  title: 'Contact HappiLiv - Get in Touch',
  description: 'Contact HappiLiv hostels for inquiries, bookings, or feedback. Reach out to our friendly team and get answers to all your questions.',
};

export default function ContactPage() {
  return (
    <>
      <Banner />
      <ContactFormSection />
      <FindUsSection />
    </>
  );
}