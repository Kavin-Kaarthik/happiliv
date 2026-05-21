import Banner from "./component/Banner";
import ContactFormSection from "./component/ContactSection";
import ContentSection from "./component/Content";
import BoysRoomSection from "./component/Rooms";
import SingleContentSection from "./component/SigleContent";
import WhyChoose from "./component/Why";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Boys Room Tariff - Affordable Hostel Rooms",
  description:
    "Explore our boys room options with competitive tariffs. Find affordable, well-equipped hostel rooms with excellent amenities and facilities.",
};

export default function BoysRoomTariff() {
  return (
    <>
      <Banner />

      {/* 🔗 SEO Internal Link Section */}
      <div className="text-center px-4 mt-6">
        <p className="text-gray-700 text-lg">
          Looking for a complete stay option? Check out our{" "}
       
       
            boys hostel near Christ University
          
          
          offering safe, affordable, and fully furnished accommodation.
        </p>

        <Link
          href="/boys-hostel-near-christ-university"
          className="inline-block mt-4 bg-blue-600 text-white px-6 py-3 rounded-xl shadow hover:bg-blue-700 transition"
        >
          Explore Boys Hostel Near Christ University
        </Link>
      </div>

      <BoysRoomSection />
      <ContentSection />
      <WhyChoose />
      <SingleContentSection />
      <ContactFormSection />
    </>
  );
}