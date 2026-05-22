import Banner from "./component/Banner";
import ContactFormSection from "./component/ContactSection";

import BoysRoomSection from "./component/Rooms";

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
      

      {/* ROOMS */}
      <BoysRoomSection />

      {/* 2x2 SEO LINK CARDS */}
      <section className="px-4 md:px-10 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* CARD 1 */}
          <Link
            href="/boys-hostel-near-christ-university"
            className="rounded-2xl p-8 bg-pink-500 text-white shadow-lg hover:scale-[1.02] transition duration-300"
          >
            <h3 className="text-2xl font-bold mb-3">
              Boys Hostel Near Christ University
            </h3>

            <p className="text-white/90 leading-relaxed">
              Safe, affordable, and fully furnished hostel accommodation
              near Christ University with modern amenities and food.
            </p>
          </Link>

          {/* CARD 2 */}
          <Link
            href="/boys-hostel-in-kengeri"
            className="rounded-2xl p-8 bg-gray-800 text-white shadow-lg hover:scale-[1.02] transition duration-300"
          >
            <h3 className="text-2xl font-bold mb-3">
              Boys Hostel in Kengeri
            </h3>

            <p className="text-white/90 leading-relaxed">
              Comfortable student accommodation in Kengeri Bangalore
              with WiFi, food, security, and modern facilities.
            </p>
          </Link>

          {/* CARD 3 */}
          <Link
            href="/pg-for-boys-near-christ-university"
            className="rounded-2xl p-8 bg-gray-800 text-white shadow-lg hover:scale-[1.02] transition duration-300"
          >
            <h3 className="text-2xl font-bold mb-3">
              PG for Boys Near Christ University
            </h3>

            <p className="text-white/90 leading-relaxed">
              Affordable PG accommodation for boys near Christ University
              with furnished rooms and hygienic food.
            </p>
          </Link>

          {/* CARD 4 */}
          <Link
            href="/boys-hostel-near-kumbalagodu"
            className="rounded-2xl p-8 bg-pink-500 text-white shadow-lg hover:scale-[1.02] transition duration-300"
          >
            <h3 className="text-2xl font-bold mb-3">
              Boys Hostel Near Kumbalagodu
            </h3>

            <p className="text-white/90 leading-relaxed">
              Student-friendly boys hostel near Kumbalagodu with
              secure rooms, WiFi, food, and modern amenities.
            </p>
          </Link>

        </div>
      </section>
 
      <WhyChoose />
   
      <ContactFormSection />
    </>
  );
}