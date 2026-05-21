import BannerSection from "./Components/Banner";
import ContactFormSection from "./Components/ContactSection";
import WhyChoose from "./Components/Why";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title:
    "Girls Hostel in Kengeri Bangalore | Safe & Affordable Student Accommodation",
  description:
    "Looking for a girls hostel in Kengeri Bangalore? HappiLiv Hostels offers safe, affordable, and fully furnished accommodation with food, WiFi, and modern amenities for students.",
};

export default function GirlsHostelKengeri() {
  return (
    <>
      <BannerSection />

      {/* MAIN CONTENT */}
      <section className="px-6 md:px-16 py-12 space-y-12">

        {/* H1 */}
        <div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Girls Hostel in Kengeri Bangalore
          </h1>

          <p className="text-gray-600 leading-relaxed mb-4">
            Finding comfortable and secure accommodation is essential for
            students moving to Bangalore for education. If you are searching
            for a girls hostel in Kengeri Bangalore, HappiLiv Hostels offers a
            safe, affordable, and student-friendly living environment designed
            to meet the needs of modern students.
          </p>

          <p className="text-gray-600 leading-relaxed mb-4">
            Conveniently located near major educational institutions and public
            transport facilities, our hostel provides easy accessibility,
            comfortable rooms, hygienic food, and modern amenities for a
            stress-free student life.
          </p>

          <p className="text-gray-600 leading-relaxed">
            Whether you are looking for long-term accommodation or a reliable
            place to stay during your studies, we provide everything needed
            for a comfortable living experience.
          </p>
        </div>

        {/* IMAGE 1 */}
        <div className="relative w-full h-[300px] rounded-2xl overflow-hidden">
          <Image
            src="/boys/room1.webp"
            alt="Girls Hostel in Kengeri Bangalore"
            fill
            className="object-cover"
          />
        </div>

        {/* SECTION 1 */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">
            Safe & Secure Girls Hostel in Kengeri
          </h2>

          <p className="text-gray-600 mb-6">
            Safety is one of the most important factors when choosing student
            accommodation. At HappiLiv Hostels, we prioritize student safety
            by maintaining a secure and peaceful environment for all residents.
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
              <span>Dedicated wardens and support staff</span>
            </div>

            <div className="flex items-start justify-end gap-3 text-right">
              <span className="mt-1">•</span>
              <span>Student-friendly environment</span>
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
            Affordable Accommodation for Students
          </h2>

          <p className="text-gray-600 mb-6">
            Students often look for accommodation that is affordable without
            compromising on comfort and essential facilities. HappiLiv
            Hostels provides well-maintained rooms and modern amenities at
            budget-friendly pricing.
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
              <span>High-speed WiFi</span>
            </div>

            <div className="flex items-start justify-end gap-3 text-right">
              <span className="mt-1">•</span>
              <span>Daily housekeeping</span>
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
              <span>Power backup</span>
            </div>

          </div>
        </div>

        {/* IMAGE 2 */}
        <div className="relative w-full h-[300px] rounded-2xl overflow-hidden">
          <Image
            src="/boys/room2.webp"
            alt="Girls Hostel Facilities"
            fill
            className="object-cover"
          />
        </div>

        {/* SECTION 3 */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">
            Girls Hostel with Food in Kengeri Bangalore
          </h2>

          <p className="text-gray-600 mb-6">
            Healthy and hygienic food is an important part of student life.
            We provide fresh meals prepared in clean kitchen facilities to
            ensure residents enjoy nutritious and balanced food every day.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-20 text-gray-700 text-lg font-medium">

            <div className="flex items-start gap-3">
              <span className="mt-1">•</span>
              <span>Vegetarian and non-vegetarian meal options</span>
            </div>

            <div className="flex items-start justify-end gap-3 text-right">
              <span className="mt-1">•</span>
              <span>Hygienic kitchen environment</span>
            </div>

            <div className="flex items-start gap-3">
              <span className="mt-1">•</span>
              <span>Freshly prepared meals</span>
            </div>

            <div className="flex items-start justify-end gap-3 text-right">
              <span className="mt-1">•</span>
              <span>Clean dining spaces</span>
            </div>

            <div className="flex items-start gap-3">
              <span className="mt-1">•</span>
              <span>Quality-focused meal preparation</span>
            </div>

          </div>
        </div>

        {/* IMAGE 3 */}
        <div className="relative w-full h-[300px] rounded-2xl overflow-hidden">
          <Image
            src="/boys/room3.webp"
            alt="Girls Hostel Rooms"
            fill
            className="object-cover"
          />
        </div>

        {/* SECTION 4 */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">
            Convenient Location with Excellent Connectivity
          </h2>

          <p className="text-gray-600 mb-6">
            Our hostel is strategically located in Kengeri Bangalore,
            offering easy access to educational institutions,
            transportation facilities, supermarkets, restaurants,
            and healthcare services.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-20 text-gray-700 text-lg font-medium">

            <div className="flex items-start gap-3">
              <span className="mt-1">•</span>
              <span>Easy access to Christ University Kengeri Campus</span>
            </div>

            <div className="flex items-start justify-end gap-3 text-right">
              <span className="mt-1">•</span>
              <span>Nearby bus and transport facilities</span>
            </div>

            <div className="flex items-start gap-3">
              <span className="mt-1">•</span>
              <span>Close to supermarkets and stores</span>
            </div>

            <div className="flex items-start justify-end gap-3 text-right">
              <span className="mt-1">•</span>
              <span>Access to restaurants and cafes</span>
            </div>

            <div className="flex items-start gap-3">
              <span className="mt-1">•</span>
              <span>Student-friendly neighborhood</span>
            </div>

          </div>
        </div>

        {/* SECTION 5 */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">
            Why Students Choose HappiLiv Hostels
          </h2>

          <p className="text-gray-600 mb-6">
            At HappiLiv Hostels, we understand the needs of students living
            away from home. Our goal is to create a comfortable, secure,
            and supportive environment that helps students focus on academics
            and personal growth.
          </p>
        </div>

        <WhyChoose />

        {/* SECTION 6 */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">
            Comfortable Student Living Experience
          </h2>

          <p className="text-gray-600 leading-relaxed">
            Moving to a new city can be challenging for students. Our hostel
            is designed to provide a home-like environment where students can
            feel comfortable, safe, and supported throughout their educational
            journey.
          </p>

          <p className="text-gray-600 leading-relaxed mt-4">
            From spacious rooms to study-friendly surroundings, every facility
            is planned to improve the overall student living experience.
          </p>
        </div>

        {/* FAQ */}
        <div>
          <h2 className="text-2xl font-semibold mb-6">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">

            {[
              {
                q: "Which is the best girls hostel in Kengeri Bangalore?",
                a: "HappiLiv Hostels offers safe, affordable, and fully furnished accommodation for students in Kengeri Bangalore.",
              },
              {
                q: "Do you provide food facilities in the hostel?",
                a: "Yes, we provide hygienic vegetarian and non-vegetarian meals for students.",
              },
              {
                q: "Is the hostel safe for female students?",
                a: "Yes, our hostel includes CCTV surveillance, secure access systems, and dedicated support staff for student safety.",
              },
              {
                q: "Is WiFi available for students?",
                a: "Yes, high-speed WiFi is available for all residents.",
              },
              {
                q: "Is the hostel located near Christ University?",
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
          <div className="bg-[#EE1C4C] rounded-2xl p-8 text-white h-[450px] flex flex-col justify-center">

            <h3 className="text-2xl font-semibold mb-6">
              Contact HappiLiv Hostels
            </h3>

            <div className="space-y-5">

              <div className="bg-[#FFFFFF2A] p-4 rounded-xl">
                <p className="font-semibold mb-1">Phone</p>
                <p>+91 63630 98384</p>
                <p>+91 63661 24184</p>
              </div>

              <div className="bg-[#FFFFFF2A] p-4 rounded-xl">
                <p className="font-semibold mb-1">WhatsApp</p>
                <p>+91 78928 81368</p>
              </div>

              <div className="bg-[#FFFFFF2A] p-4 rounded-xl">
                <p className="font-semibold mb-1">Email</p>
                <p>happilivhostels@gmail.com</p>
              </div>

            </div>

          </div>

        </div>
      </section>

      <ContactFormSection />
    </>
  );
}