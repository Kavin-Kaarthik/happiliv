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
          <span className="font-semibold">
            boys hostel near Christ University
          </span>{" "}
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

      {/* 🔥 INTERNAL LINK CARDS */}
      <section className="px-4 md:px-10 py-12">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-3">
            Explore More Boys Hostel Options
          </h2>

          <p className="text-gray-600 text-lg">
            Discover safe, affordable, and student-friendly hostel and PG
            accommodation near Christ University.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* CARD 1 */}
          <Link
            href="/boys-hostel-near-christ-university"
            className="bg-blue-600 hover:bg-blue-700 transition rounded-2xl p-8 text-white shadow-lg"
          >
            <h3 className="text-2xl font-semibold mb-3">
              Boys Hostel Near Christ University
            </h3>

            <p className="text-white/90">
              Fully furnished boys hostel with food, WiFi, security,
              housekeeping, and modern amenities near Christ University.
            </p>
          </Link>

          {/* CARD 2 */}
          <Link
            href="/boys-hostel-in-kengeri"
            className="bg-green-600 hover:bg-green-700 transition rounded-2xl p-8 text-white shadow-lg"
          >
            <h3 className="text-2xl font-semibold mb-3">
              Boys Hostel in Kengeri
            </h3>

            <p className="text-white/90">
              Comfortable and affordable boys hostel accommodation in Kengeri
              with excellent connectivity and student-friendly facilities.
            </p>
          </Link>

          {/* CARD 3 */}
          <Link
            href="/boys-hostel-near-kumbalagodu"
            className="bg-purple-600 hover:bg-purple-700 transition rounded-2xl p-8 text-white shadow-lg"
          >
            <h3 className="text-2xl font-semibold mb-3">
              Boys Hostel Near Kumbalagodu
            </h3>

            <p className="text-white/90">
              Safe and hygienic boys hostel near Kumbalagodu with modern rooms,
              food facilities, and secure accommodation.
            </p>
          </Link>

          {/* CARD 4 */}
          <Link
            href="/pg-for-boys-near-christ-university"
            className="bg-orange-500 hover:bg-orange-600 transition rounded-2xl p-8 text-white shadow-lg"
          >
            <h3 className="text-2xl font-semibold mb-3">
              PG for Boys Near Christ University
            </h3>

            <p className="text-white/90">
              Affordable PG accommodation for boys near Christ University with
              WiFi, food, housekeeping, and comfortable living spaces.
            </p>
          </Link>

        </div>
      </section>

      <ContentSection />
      <WhyChoose />
      <SingleContentSection />
      <ContactFormSection />
    </>
  );
}