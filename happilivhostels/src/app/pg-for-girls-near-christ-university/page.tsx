import BannerSection from "./Components/Banner";
import ContactFormSection from "./Components/ContactSection";
import WhyChoose from "./Components/Why";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title:
    "PG for Girls Near Christ University | Safe & Affordable Girls PG Accommodation",
  description:
    "Looking for a PG for girls near Christ University? HappiLiv Hostels offers safe, affordable, and fully furnished PG accommodation with food, WiFi, and modern amenities for students.",
};

const BulletGrid = ({ items }: { items: string[] }) => {
  const leftItems = items.filter((_, i) => i % 2 === 0);
  const rightItems = items.filter((_, i) => i % 2 !== 0);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20">
      {/* LEFT COLUMN */}
      <div className="space-y-4">
        {leftItems.map((item, i) => (
          <div key={i} className="flex items-start gap-3">
            <span className="mt-[2px] text-[#EE1C4C] text-xl leading-none">
              •
            </span>
            <span className="text-gray-700 text-lg font-medium leading-relaxed">
              {item}
            </span>
          </div>
        ))}
      </div>

      {/* RIGHT COLUMN */}
      <div className="space-y-4">
        {rightItems.map((item, i) => (
          <div key={i} className="flex items-start gap-3">
            <span className="mt-[2px] text-[#EE1C4C] text-xl leading-none">
              •
            </span>
            <span className="text-gray-700 text-lg font-medium leading-relaxed">
              {item}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default function PgForGirlsChristUniversity() {
  return (
    <>
      <BannerSection />

      <section className="px-6 md:px-16 py-12 space-y-12">

        <div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            PG for Girls Near Christ University
          </h1>

          <p className="text-gray-600 leading-relaxed mb-4">
            Finding the right PG accommodation is important for students moving
            to Bangalore for higher education. If you are searching for a PG
            for girls near Christ University, HappiLiv Hostels offers a safe,
            affordable, and comfortable living environment designed specifically
            for students.
          </p>

          <p className="text-gray-600 leading-relaxed mb-4">
            Located conveniently near Christ University Kengeri campus, our
            girls PG provides easy access to colleges, transportation
            facilities, restaurants, supermarkets, and other daily essentials.
          </p>

          <p className="text-gray-600 leading-relaxed">
            With modern amenities, hygienic food, and a secure atmosphere, we
            ensure students enjoy a comfortable and stress-free stay throughout
            their academic journey.
          </p>
        </div>

        <div className="relative w-full h-[300px] rounded-2xl overflow-hidden">
          <Image
            src="/boys/room3.webp"
            alt="PG for Girls Near Christ University"
            fill
            className="object-cover"
          />
        </div>

        {/* SECTION 1 */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">
            Safe & Secure PG Accommodation for Girls
          </h2>

          <p className="text-gray-600 mb-6">
            Safety is one of the biggest concerns for students and parents when
            choosing accommodation. At HappiLiv Hostels, we maintain a secure
            and student-friendly environment where residents can stay
            comfortably and confidently.
          </p>

          <BulletGrid
            items={[
              "24/7 CCTV surveillance",
              "Secure access systems",
              "Dedicated wardens and support staff",
              "Safe and peaceful surroundings",
              "Regular monitoring and maintenance",
            ]}
          />
        </div>

        {/* SECTION 2 */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">
            Affordable PG for Girls Near Christ University
          </h2>

          <p className="text-gray-600 mb-6">
            Students often search for PG accommodation that combines
            affordability with comfort and convenience. HappiLiv Hostels offers
            well-maintained rooms and modern facilities at student-friendly
            pricing.
          </p>

          <BulletGrid
            items={[
              "Fully furnished rooms",
              "Comfortable beds and storage spaces",
              "High-speed WiFi",
              "Daily housekeeping services",
              "Laundry support",
              "Hygienic washrooms",
              "Reliable power backup",
            ]}
          />
        </div>

        <div className="relative w-full h-[300px] rounded-2xl overflow-hidden">
          <Image
            src="/boys/room2.webp"
            alt="Girls PG Facilities"
            fill
            className="object-cover"
          />
        </div>

        {/* SECTION 3 */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">
            Girls PG with Food Near Christ University
          </h2>

          <p className="text-gray-600 mb-6">
            Healthy and hygienic food is an essential part of student life. We
            provide fresh meals prepared in a clean and hygienic environment to
            ensure students enjoy nutritious food every day.
          </p>

          <BulletGrid
            items={[
              "Vegetarian and non-vegetarian meal options",
              "Freshly prepared meals",
              "Hygienic kitchen and dining area",
              "Balanced and nutritious food",
            ]}
          />
        </div>

        <div className="relative w-full h-[300px] rounded-2xl overflow-hidden">
          <Image
            src="/boys/room1.webp"
            alt="Student Accommodation"
            fill
            className="object-cover"
          />
        </div>

        {/* SECTION 4 */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">
            Convenient Location Near Christ University Kengeri
          </h2>

          <p className="text-gray-600 mb-6">
            One of the biggest advantages of our PG accommodation is its
            strategic location near Christ University Kengeri campus and
            surrounding educational institutions.
          </p>

          <BulletGrid
            items={[
              "Christ University Kengeri Campus",
              "Public transportation facilities",
              "Restaurants and cafes",
              "Supermarkets and medical stores",
              "Student-friendly environment",
            ]}
          />
        </div>

        {/* SECTION 5 */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">
            Why Choose HappiLiv Hostels?
          </h2>

          <p className="text-gray-600 mb-6">
            At HappiLiv Hostels, we understand the daily needs of students
            living away from home. Our goal is to provide a welcoming and
            comfortable environment that supports both academics and personal
            well-being.
          </p>

          <BulletGrid
            items={[
              "Safe and secure accommodation",
              "Affordable pricing options",
              "Prime location near Christ University",
              "Student-friendly atmosphere",
              "Modern facilities and amenities",
              "Hygienic food and clean surroundings",
              "Reliable management support",
            ]}
          />
        </div>

        <WhyChoose />

        {/* SECTION 6 */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">
            Comfortable Student Living Experience
          </h2>

          <p className="text-gray-600 leading-relaxed">
            Moving to a new city can be overwhelming for students, especially
            when living away from home for the first time. Our PG accommodation
            is designed to provide a home-like environment where students can
            feel comfortable, safe, and supported throughout their educational
            journey.
          </p>

          <p className="text-gray-600 leading-relaxed mt-4">
            From study-friendly spaces to essential amenities, every aspect of
            our accommodation is planned to improve student comfort and
            convenience.
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
                q: "Which is the best PG for girls near Christ University?",
                a: "HappiLiv Hostels offers safe, affordable, and fully furnished PG accommodation for students near Christ University.",
              },
              {
                q: "Do you provide food facilities in the PG?",
                a: "Yes, we provide hygienic vegetarian and non-vegetarian meals for students.",
              },
              {
                q: "Is the PG safe for female students?",
                a: "Yes, our PG includes CCTV surveillance, secure access systems, and dedicated support staff.",
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

      <ContactFormSection />
    </>
  );
}