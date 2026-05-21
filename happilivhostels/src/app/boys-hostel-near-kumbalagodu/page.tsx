import Banner from "./Components/Banner";
import Features from "./Components/Features";
import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title:
    "Boys Hostel Near Kumbalagodu | Safe & Affordable Student Accommodation",
  description:
    "Searching for a boys hostel near Kumbalagodu? HappiLiv Hostels offers safe, affordable, and fully furnished accommodation with food, WiFi, and modern amenities for students.",
};

export default function BoysHostelNearKumbalagodu() {
  return (
    <>
      <Banner />

      {/* MAIN CONTENT */}
      <section className="px-6 md:px-16 py-12 space-y-12">

        {/* H1 */}
        <div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Boys Hostel Near Kumbalagodu
          </h1>

          <p className="text-gray-600 leading-relaxed mb-4">
            Finding comfortable and affordable accommodation is important for
            students relocating to Bangalore for education. If you are searching
            for a boys hostel near Kumbalagodu, HappiLiv Hostels offers a safe,
            student-friendly, and well-maintained living environment designed
            specifically for students.
          </p>

          <p className="text-gray-600 leading-relaxed mb-4">
            Conveniently located near Kumbalagodu and close to Christ University
            Kengeri campus, our hostel provides easy access to colleges,
            transportation facilities, restaurants, supermarkets, and daily
            essentials.
          </p>

          <p className="text-gray-600 leading-relaxed">
            With furnished rooms, hygienic food, modern amenities, and reliable
            facilities, we ensure students enjoy a comfortable and stress-free
            stay throughout their academic journey.
          </p>
        </div>

        {/* IMAGE 1 */}
        <div className="relative w-full h-[300px] rounded-2xl overflow-hidden">
          <Image
            src="/boys/room1.webp"
            alt="Boys Hostel Near Kumbalagodu"
            fill
            className="object-cover"
          />
        </div>

        {/* SECTION 1 */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">
            Safe & Secure Boys Hostel Near Kumbalagodu
          </h2>

          <p className="text-gray-600 mb-6">
            Safety and comfort are essential when choosing student
            accommodation. At HappiLiv Hostels, we provide a secure and peaceful
            environment where students can stay comfortably and focus on
            academics.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-20 text-gray-700 text-lg font-medium">

            <div className="flex items-start gap-3">
              <span className="mt-1">•</span>
              <span>24/7 CCTV surveillance</span>
            </div>

            <div className="flex items-start justify-end gap-3 text-right">
              <span className="mt-1">•</span>
              <span>Secure entry access</span>
            </div>

            <div className="flex items-start gap-3">
              <span className="mt-1">•</span>
              <span>Dedicated hostel support staff</span>
            </div>

            <div className="flex items-start justify-end gap-3 text-right">
              <span className="mt-1">•</span>
              <span>Safe and student-friendly atmosphere</span>
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
            Affordable Student Accommodation with Modern Amenities
          </h2>

          <p className="text-gray-600 mb-6">
            Students often look for accommodation that combines affordability
            with comfort and convenience. HappiLiv Hostels provides
            well-maintained rooms and essential amenities at student-friendly
            pricing.
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
            alt="Affordable Boys Hostel"
            fill
            className="object-cover"
          />
        </div>

        {/* SECTION 3 */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">
            Boys Hostel with Food Near Kumbalagodu
          </h2>

          <p className="text-gray-600 mb-6">
            Healthy and hygienic food is an important part of student life. We
            provide freshly prepared meals in a clean and hygienic environment
            to ensure students enjoy nutritious food every day.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-20 text-gray-700 text-lg font-medium">

            <div className="flex items-start gap-3">
              <span className="mt-1">•</span>
              <span>Fresh vegetarian and non-vegetarian meals</span>
            </div>

            <div className="flex items-start justify-end gap-3 text-right">
              <span className="mt-1">•</span>
              <span>Hygienic kitchen and dining area</span>
            </div>

            <div className="flex items-start gap-3">
              <span className="mt-1">•</span>
              <span>Balanced meal options</span>
            </div>

            <div className="flex items-start justify-end gap-3 text-right">
              <span className="mt-1">•</span>
              <span>Quality-focused meal preparation</span>
            </div>

          </div>
        </div>

        {/* IMAGE 3 */}
        <div className="relative w-full h-[300px] rounded-2xl overflow-hidden">
          <Image
            src="/boys/room3.webp"
            alt="Hostel Facilities"
            fill
            className="object-cover"
          />
        </div>

        {/* SECTION 4 */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">
            Prime Location with Excellent Connectivity
          </h2>

          <p className="text-gray-600 mb-6">
            Our hostel is strategically located near Kumbalagodu with excellent
            connectivity to educational institutions and essential services.
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
            affordable, and supportive environment where students can focus on
            academics and personal growth.
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
              <span>Prime location near Kumbalagodu</span>
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

        <Features />

        {/* SECTION 6 */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">
            Comfortable Student Living Experience
          </h2>

          <p className="text-gray-600 leading-relaxed">
            Moving to a new city for education can be challenging, especially
            for students living away from home for the first time. Our hostel is
            designed to create a welcoming and stress-free environment where
            students can feel comfortable and supported throughout their
            educational journey.
          </p>
        </div>

        {/* CTA */}
        <div className="bg-blue-50 p-8 rounded-2xl">
          <h2 className="text-2xl font-semibold mb-4">
            Book Your Stay at HappiLiv Hostels
          </h2>

          <p className="text-gray-600 mb-6">
            If you are looking for a secure and affordable boys hostel near
            Kumbalagodu, HappiLiv Hostels offers the perfect accommodation
            solution for students seeking comfort, convenience, and safety.
          </p>

          <Link
            href="/contact"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition"
          >
            Contact Us
          </Link>
        </div>

        {/* FAQ SECTION */}
        <div>
          <h2 className="text-2xl font-semibold mb-6">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">

            {[
              {
                q: "Which is the best boys hostel near Kumbalagodu?",
                a: "HappiLiv Hostels offers safe, affordable, and fully furnished accommodation for students near Kumbalagodu.",
              },
              {
                q: "Do you provide food facilities for students?",
                a: "Yes, we provide hygienic vegetarian and non-vegetarian meals for students.",
              },
              {
                q: "Is the hostel safe for students?",
                a: "Yes, our hostel includes CCTV surveillance, secure access systems, and dedicated hostel support staff.",
              },
              {
                q: "Is WiFi available in the hostel?",
                a: "Yes, high-speed WiFi is available for all residents.",
              },
              {
                q: "Is the hostel near Christ University?",
                a: "Yes, our hostel is conveniently located near Christ University Kengeri campus.",
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