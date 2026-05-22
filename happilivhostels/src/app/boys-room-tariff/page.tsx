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
     {/* 2x2 SEO LINK CARDS */}
<section className="px-6 md:px-16 py-12">

  <h2 className="text-3xl font-bold text-center mb-10">
    Explore More Boys Hostel Options
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

    {/* CARD 1 */}
    <Link
      href="/boys-hostel-near-christ-university"
      className="bg-pink-100 hover:bg-pink-200 transition rounded-2xl p-8 shadow-md min-h-[180px] flex flex-col justify-center"
    >
      <h3 className="text-2xl font-semibold text-gray-800 mb-3">
        Boys Hostel Near Christ University
      </h3>

      <p className="text-gray-600">
        Safe, affordable, and fully furnished hostel accommodation
        near Christ University with modern amenities and food.
      </p>
    </Link>

    {/* CARD 2 */}
    <Link
      href="/boys-hostel-in-kengeri"
      className="bg-gray-100 hover:bg-gray-200 transition rounded-2xl p-8 shadow-md min-h-[180px] flex flex-col justify-center"
    >
      <h3 className="text-2xl font-semibold text-gray-800 mb-3">
        Boys Hostel in Kengeri
      </h3>

      <p className="text-gray-600">
        Comfortable student accommodation in Kengeri Bangalore
        with WiFi, food, security, and modern facilities.
      </p>
    </Link>

    {/* CARD 3 */}
    <Link
      href="/pg-for-boys-near-christ-university"
      className="bg-gray-100 hover:bg-gray-200 transition rounded-2xl p-8 shadow-md min-h-[180px] flex flex-col justify-center"
    >
      <h3 className="text-2xl font-semibold text-gray-800 mb-3">
        PG for Boys Near Christ University
      </h3>

      <p className="text-gray-600">
        Affordable PG accommodation for boys near Christ University
        with furnished rooms and hygienic food.
      </p>
    </Link>

    {/* CARD 4 */}
    <Link
      href="/boys-hostel-near-kumbalagodu"
      className="bg-pink-100 hover:bg-pink-200 transition rounded-2xl p-8 shadow-md min-h-[180px] flex flex-col justify-center"
    >
      <h3 className="text-2xl font-semibold text-gray-800 mb-3">
        Boys Hostel Near Kumbalagodu
      </h3>

      <p className="text-gray-600">
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