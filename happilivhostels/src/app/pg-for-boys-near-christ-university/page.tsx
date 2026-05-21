import Banner from "./Components/Banner";
import Features from "./Components/Features";
import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title:
    "PG for Boys Near Christ University | Safe & Affordable Boys PG Accommodation",
  description:
    "Looking for a PG for boys near Christ University? HappiLiv Hostels offers safe, affordable, and fully furnished PG accommodation with food, WiFi, and modern amenities for students.",
};

export default function PgForBoysChristUniversity() {
  return (
    <>
      <Banner />

      {/* MAIN CONTENT */}
      <section className="px-6 md:px-16 py-12 space-y-12">

        {/* H1 */}
        <div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            PG for Boys Near Christ University
          </h1>

          <p className="text-gray-600 leading-relaxed mb-4">
            Finding the right PG accommodation is important for students
            relocating to Bangalore for higher education. If you are searching
            for a PG for boys near Christ University, HappiLiv Hostels offers a
            comfortable, affordable, and student-friendly living environment
            designed specifically for students.
          </p>

          <p className="text-gray-600 leading-relaxed mb-4">
            Conveniently located near Christ University Kengeri campus, our
            boys PG provides easy access to colleges, transportation facilities,
            restaurants, supermarkets, and essential services.
          </p>

          <p className="text-gray-600 leading-relaxed">
            With furnished rooms, hygienic food, modern amenities, and reliable
            facilities, we ensure students enjoy a convenient and stress-free
            stay throughout their academic journey.
          </p>
        </div>

        {/* IMAGE 1 */}
        <div className="relative w-full h-[300px] rounded-2xl overflow-hidden">
          <Image
            src="/boys/room3.webp"
            alt="PG for Boys Near Christ University"
            fill
            className="object-cover"
          />
        </div>

        {/* SECTION 1 */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">
            Safe & Secure PG Accommodation for Boys
          </h2>

          <p className="text-gray-600 mb-6">
            Safety and comfort are essential when choosing student
            accommodation. At HappiLiv Hostels, we maintain a secure and
            peaceful environment where students can stay confidently and focus
            on academics.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-20 text-gray-700 text-lg font-medium">

            <div className="flex items-start gap-3">
              <span className="mt-1">•</span>
              <span>24/7 CCTV surveillance</span>
            </div>

            <div className="flex items-start justify-end gap-3 text-right">
              <span className="mt-1">•</span>
              <span>Secure entry systems</span>
            </div>

            <div className="flex items-start gap-3">
              <span className="mt-1">•</span>
              <span>Dedicated hostel support staff</span>
            </div>

            <div className="flex items-start justify-end gap-3 text-right">
              <span className="mt-1">•</span>
              <span>Safe and student-friendly surroundings</span>
            </div>

            <div className="flex items-start gap-3">
              <span className="mt-1">•</span>
              <span>Regular monitoring and maintenance</span>
            </div>

          </div>
        </div>

        {/* SECTION 2 */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">
            Affordable PG for Boys Near Christ University
          </h2>

          <p className="text-gray-600 mb-6">
            Students often search for PG accommodation that combines
            affordability with comfort and essential facilities. HappiLiv
            Hostels offers well-maintained rooms and modern amenities at
            student-friendly pricing.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-20 text-gray-700 text-lg font-medium">

            <div className="flex items-start gap-3">
              <span className="mt-1">•</span>
              <span>Fully furnished rooms</span>
            </div>

            <div className="flex items-start justify-end gap-3 text-right">
              <span className="mt-1">•</span>
              <span>Comfortable beds and storage spaces</span>
            </div>

            <div className="flex items-start gap-3">
              <span className="mt-1">•</span>
              <span>High-speed WiFi connectivity</span>
            </div>

            <div className="flex items-start justify-end gap-3 text-right">
              <span className="mt-1">•</span>
              <span>Daily housekeeping services</span>
            </div>

            <div className="flex items-start gap-3">
              <span className="mt-1">•</span>
              <span>Laundry facilities</span>
            </div>

            <div className="flex items-start justify-end gap-3 text-right">
              <span className="mt-1">•</span>
              <span>Hygienic washrooms</span>
            </div>

            <div className="flex items-start gap-3">
              <span className="mt-1">•</span>
              <span>Reliable power backup</span>
            </div>

          </div>
        </div>

        {/* IMAGE 2 */}
        <div className="relative w-full h-[300px] rounded-2xl overflow-hidden">
          <Image
            src="/boys/room2.webp"
            alt="Affordable PG Accommodation"
            fill
            className="object-cover"
          />
        </div>

        {/* SECTION 3 */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">
            Boys PG with Food Near Christ University
          </h2>

          <p className="text-gray-600 mb-6">
            Good food and hygiene are important parts of student life. We
            provide freshly prepared meals in a clean and hygienic environment
            to ensure students enjoy healthy and nutritious food every day.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-20 text-gray-700 text-lg font-medium">

            <div className="flex items-start gap-3">
              <span className="mt-1">•</span>
              <span>Fresh vegetarian and non-vegetarian meals</span>
            </div>

            <div className="flex items-start justify-end gap-3 text-right">
              <span className="mt-1">•</span>
              <span>Hygienic kitchen and dining facilities</span>
            </div>

            <div className="flex items-start gap-3">
              <span className="mt-1">•</span>
              <span>Balanced meal options</span>
            </div>

            <div className="flex items-start justify-end gap-3 text-right">
              <span className="mt-1">•</span>
              <span>Quality-focused food preparation</span>
            </div>

          </div>
        </div>

        {/* IMAGE 3 */}
        <div className="relative w-full h-[300px] rounded-2xl overflow-hidden">
          <Image
            src="/boys/room1.webp"
            alt="Food Facilities"
            fill
            className="object-cover"
          />
        </div>

        {/* SECTION 4 */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">
            Prime Location Near Christ University Kengeri
          </h2>

          <p className="text-gray-600 mb-6">
            One of the biggest advantages of staying at HappiLiv Hostels is our
            convenient location near Christ University Kengeri campus and
            surrounding educational institutions.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-20 text-gray-700 text-lg font-medium">

            <div className="flex items-start gap-3">
              <span className="mt-1">•</span>
              <span>Christ University Kengeri Campus</span>
            </div>

            <div className="flex items-start justify-end gap-3 text-right">
              <span className="mt-1">•</span>
              <span>Public transportation facilities</span>
            </div>

            <div className="flex items-start gap-3">
              <span className="mt-1">•</span>
              <span>Restaurants and cafes</span>
            </div>

            <div className="flex items-start justify-end gap-3 text-right">
              <span className="mt-1">•</span>
              <span>Supermarkets and medical stores</span>
            </div>

            <div className="flex items-start gap-3">
              <span className="mt-1">•</span>
              <span>Student-friendly surroundings</span>
            </div>

          </div>
        </div>

        {/* SECTION 5 */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">
            Why Choose HappiLiv Hostels?
          </h2>

          <p className="text-gray-600 mb-6">
            At HappiLiv Hostels, we understand the daily needs of students
            living away from home. Our goal is to provide a comfortable,
            affordable, and supportive living environment that helps students
            focus on academics and personal growth.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-20 text-gray-700 text-lg font-medium">

            <div className="flex items-start gap-3">
              <span className="mt-1">•</span>
              <span>Safe and secure accommodation</span>
            </div>

            <div className="flex items-start justify-end gap-3 text-right">
              <span className="mt-1">•</span>
              <span>Affordable pricing options</span>
            </div>

            <div className="flex items-start gap-3">
              <span className="mt-1">•</span>
              <span>Prime location near Christ University</span>
            </div>

            <div className="flex items-start justify-end gap-3 text-right">
              <span className="mt-1">•</span>
              <span>Student-friendly atmosphere</span>
            </div>

            <div className="flex items-start gap-3">
              <span className="mt-1">•</span>
              <span>Modern amenities and facilities</span>
            </div>

            <div className="flex items-start justify-end gap-3 text-right">
              <span className="mt-1">•</span>
              <span>Hygienic food and clean surroundings</span>
            </div>

            <div className="flex items-start gap-3">
              <span className="mt-1">•</span>
              <span>Reliable hostel management support</span>
            </div>

          </div>
        </div>

        {/* FEATURES */}
        <Features />

        {/* SECTION 6 */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">
            Comfortable Student Living Experience
          </h2>

          <p className="text-gray-600 leading-relaxed">
            Moving to a new city can be challenging for students, especially
            for those living away from home for the first time. Our PG
            accommodation is designed to provide a welcoming and stress-free
            environment where students can feel comfortable and supported
            throughout their educational journey.
          </p>
        </div>

        {/* SECTION 7 */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">
            Book Your Stay at HappiLiv Hostels
          </h2>

          <p className="text-gray-600 leading-relaxed">
            If you are looking for a secure and affordable PG for boys near
            Christ University, HappiLiv Hostels offers the ideal accommodation
            solution for students seeking comfort, convenience, and safety.
          </p>

          <p className="text-gray-600 leading-relaxed mt-4">
            Contact us today to learn more about room availability, facilities,
            and PG admission details.
          </p>
        </div>

        {/* FAQ SECTION */}
        <div>
          <h2 className="text-2xl font-semibold mb-6">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">

            {[
              {
                q: "Which is the best PG for boys near Christ University?",
                a: "HappiLiv Hostels offers safe, affordable, and fully furnished PG accommodation for students near Christ University.",
              },
              {
                q: "Do you provide food facilities in the PG?",
                a: "Yes, we provide hygienic vegetarian and non-vegetarian meals for students.",
              },
              {
                q: "Is the PG safe for students?",
                a: "Yes, our PG includes CCTV surveillance, secure access systems, and dedicated hostel support staff.",
              },
              {
                q: "Is WiFi available for students?",
                a: "Yes, high-speed WiFi is available for all residents.",
              },
              {
                q: "Is the PG located near Christ University Kengeri?",
                a: "Yes, our PG accommodation is conveniently located near Christ University Kengeri campus.",
              },
            ].map((faq, i) => (
              <div
                key={i}
                className="border border-gray-200 rounded-2xl p-5"
              >
                <h3 className="font-semibold text-lg text-black">
                  {faq.q}
                </h3>

                <p className="text-gray-600 mt-2 leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}

          </div>
        </div>

      </section>

      {/* MAP SECTION */}
      <section className="w-full bg-white pb-16 px-6 md:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-[60%_40%] gap-10 items-stretch">

          {/* GOOGLE MAP */}
          <div className="h-[450px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.709270117793!2d77.43257937358699!3d12.862045017273731!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae38c490000001%3A0xaebe47889363e5de!2sHappiLiv%20Hostel!5e0!3m2!1sen!2sin!4v1770802434571!5m2!1sen!2sin"
              width="600"
              height="450"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full rounded-2xl border-0"
            ></iframe>
          </div>

          {/* CONTACT CARD */}
          <div className="bg-blue-600 rounded-2xl p-8 text-white h-[450px] flex flex-col justify-center">
            <h3 className="text-2xl font-semibold mb-6">
              Contact HappiLiv Hostels
            </h3>

            <div className="space-y-5">

              <div className="bg-white/20 p-4 rounded-xl">
                <p className="font-semibold mb-1">Phone</p>
                <p>+91 63630 98384</p>
                <p>+91 63661 24184</p>
              </div>

              <div className="bg-white/20 p-4 rounded-xl">
                <p className="font-semibold mb-1">WhatsApp</p>
                <p>+91 78928 81368</p>
              </div>

              <div className="bg-white/20 p-4 rounded-xl">
                <p className="font-semibold mb-1">Email</p>
                <p>happilivhostels@gmail.com</p>
              </div>

            </div>
          </div>

        </div>
      </section>
    </>
  );
}