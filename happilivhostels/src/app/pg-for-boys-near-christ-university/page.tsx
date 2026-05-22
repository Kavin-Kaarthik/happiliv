import Banner from "./component/Banner";
import Rooms from "./component/Rooms";
import ContactSection from "./component/ContactSection";
import Content from "./component/Content";
import SigleContent from "./component/SigleContent";
import Why from "./component/Why";

import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title:
    "PG for Boys Near Christ University | Safe & Affordable Boys PG Accommodation",
  description:
    "Looking for a PG for boys near Christ University? HappiLiv Hostels offers safe, affordable, and fully furnished PG accommodation with food, WiFi, and modern amenities for students.",
};

const BulletGrid = ({ items }: { items: string[] }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-4 mt-6">
    {items.map((item, index) => (
      <div key={index} className="flex items-start gap-3">
        <span className="text-[#EE1C4C] text-xl leading-6">•</span>
        <span className="text-gray-700 leading-relaxed">{item}</span>
      </div>
    ))}
  </div>
);

export default function PgForBoysChristUniversity() {
  return (
    <>
      <Banner />

      <section className="px-6 md:px-16 py-12 space-y-14">

        {/* HERO CONTENT */}
        <div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            PG for Boys Near Christ University
          </h1>

          <p className="text-gray-600 leading-relaxed mb-4">
            Finding the right PG accommodation is important for students
            relocating to Bangalore for higher education. If you are searching
            for a PG for boys near Christ University, HappiLiv Hostels offers a
            comfortable, affordable, and student-friendly living environment.
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
        <div className="relative w-full h-[320px] rounded-2xl overflow-hidden">
          <Image
            src="/boys/room1.webp"
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

          <p className="text-gray-600 leading-relaxed">
            Safety and comfort are essential when choosing student
            accommodation. HappiLiv Hostels maintains a secure and peaceful
            environment where students can stay confidently and focus on
            academics.
          </p>

          <BulletGrid
            items={[
              "24/7 CCTV surveillance",
              "Secure entry systems",
              "Dedicated hostel support staff",
              "Student-friendly environment",
              "Regular monitoring and maintenance",
            ]}
          />
        </div>

        {/* IMAGE 2 */}
        <div className="relative w-full h-[320px] rounded-2xl overflow-hidden">
          <Image
            src="/boys/room2.webp"
            alt="Affordable PG Accommodation"
            fill
            className="object-cover"
          />
        </div>

        {/* SECTION 2 */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">
            Affordable PG with Modern Amenities
          </h2>

          <p className="text-gray-600 leading-relaxed">
            Students often search for accommodation that combines affordability,
            comfort, and convenience. HappiLiv Hostels offers modern amenities
            and well-maintained rooms at student-friendly pricing.
          </p>

          <BulletGrid
            items={[
              "Fully furnished rooms",
              "Comfortable beds and storage spaces",
              "High-speed WiFi connectivity",
              "Daily housekeeping services",
              "Laundry facilities",
              "Hygienic washrooms",
              "Power backup facilities",
            ]}
          />
        </div>

        {/* IMAGE 3 */}
        <div className="relative w-full h-[320px] rounded-2xl overflow-hidden">
          <Image
            src="/boys/room3.webp"
            alt="Food Facilities"
            fill
            className="object-cover"
          />
        </div>

        {/* SECTION 3 */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">
            Boys PG with Food Near Christ University
          </h2>

          <p className="text-gray-600 leading-relaxed">
            Healthy and hygienic food is important for students staying away
            from home. We provide freshly prepared meals in a clean and
            hygienic environment.
          </p>

          <BulletGrid
            items={[
              "Fresh vegetarian and non-vegetarian meals",
              "Clean and hygienic kitchen",
              "Balanced and nutritious food",
              "Quality-focused meal preparation",
            ]}
          />
        </div>

        {/* SECTION 4 */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">
            Prime Location Near Christ University
          </h2>

          <p className="text-gray-600 leading-relaxed">
            Our hostel is strategically located near Christ University Kengeri
            campus, offering easy access to transportation facilities,
            supermarkets, restaurants, and healthcare services.
          </p>

          <BulletGrid
            items={[
              "Easy access to Christ University",
              "Nearby bus and transport facilities",
              "Close to supermarkets and stores",
              "Restaurants and cafes nearby",
              "Student-friendly surroundings",
            ]}
          />
        </div>

        {/* CUSTOM COMPONENTS */}
        <Rooms />
        <Why />
        <Content />
        <SigleContent />

        {/* SECTION 5 */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">
            Comfortable Student Living Experience
          </h2>

          <p className="text-gray-600 leading-relaxed mb-4">
            Moving to a new city can be challenging for students. Our hostel is
            designed to provide a home-like atmosphere where students can feel
            safe, comfortable, and supported.
          </p>

          <p className="text-gray-600 leading-relaxed">
            From spacious rooms to study-friendly surroundings, every facility
            is planned to improve convenience and student comfort.
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
                q: "Do you provide food facilities?",
                a: "Yes, we provide hygienic vegetarian and non-vegetarian meals for students.",
              },
              {
                q: "Is the PG safe for students?",
                a: "Yes, our PG includes CCTV surveillance, secure entry systems, and dedicated support staff.",
              },
              {
                q: "Is WiFi available?",
                a: "Yes, high-speed WiFi is available for all residents.",
              },
              {
                q: "Is the PG located near Christ University?",
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

      {/* MAP & CONTACT SECTION */}
      <section className="w-full bg-white pb-16 px-6 md:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-[60%_40%] gap-10 items-stretch">

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

      <ContactSection />
    </>
  );
}