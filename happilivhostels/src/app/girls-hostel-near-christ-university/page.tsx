import BannerSection from "./Components/Banner";
import ContactFormSection from "./Components/ContactSection";
import WhyChoose from "./Components/Why";
import Link from "next/link";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title:
    "Girls Hostel Near Christ University | Safe & Affordable Student Accommodation",
  description:
    "Looking for a girls hostel near Christ University? Discover safe, affordable, and comfortable accommodation with food, WiFi, and modern facilities near Christ University, Bangalore.",
};

export default function GirlsBestHostels() {
  return (
    <>
      <BannerSection />

      {/* MAIN CONTENT */}
      <section className="px-6 md:px-16 py-12 space-y-12">

        {/* H1 */}
        <div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Girls Hostel Near Christ University
          </h1>

          <p className="text-gray-600 leading-relaxed">
            Finding the right accommodation plays an important role in every
            student’s academic journey. If you are searching for a safe,
            comfortable, and affordable girls hostel near Christ University,
            HappiLiv Hostels offers the perfect living space designed
            specifically for students.

            Conveniently located near Christ University and surrounding
            educational hubs, our hostel provides a peaceful and
            student-friendly environment with modern amenities, hygienic
            facilities, and secure accommodation.
          </p>
        </div>

        {/* IMAGE 1 */}
        <div className="relative w-full h-[300px] rounded-2xl overflow-hidden">
          <Image
            src="/boys/room2.webp"
            alt="Girls Hostel"
            fill
            className="object-cover"
          />
        </div>

        {/* SECTION 1 */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">
            Safe & Secure Girls Hostel Near Christ University
          </h2>

          <p className="text-gray-600 mb-4">
            Safety is one of the biggest priorities for students and parents
            when choosing accommodation.
          </p>

          <ul className="list-disc pl-6 text-gray-600 space-y-2">
            <li>24/7 security monitoring</li>
            <li>CCTV surveillance</li>
            <li>Secure entry access</li>
            <li>Dedicated wardens and support staff</li>
            <li>Safe and student-friendly atmosphere</li>
          </ul>
        </div>

        {/* IMAGE 2 */}
        <div className="relative w-full h-[300px] rounded-2xl overflow-hidden">
          <Image
            src="/boys/room1.webp"
            alt="Girls Hostel Room"
            fill
            className="object-cover"
          />
        </div>

        {/* SECTION 2 */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">
            Affordable Student Accommodation with Modern Amenities
          </h2>

          <p className="text-gray-600 leading-relaxed mb-4">
            Students often look for accommodation that balances affordability
            and comfort. Our hostel provides well-maintained rooms and
            essential amenities at competitive pricing.
          </p>

          <ul className="list-disc pl-6 text-gray-600 space-y-2">
            <li>Fully furnished rooms</li>
            <li>Comfortable beds and storage</li>
            <li>High-speed WiFi</li>
            <li>Daily housekeeping</li>
            <li>Laundry support</li>
            <li>Hygienic washrooms</li>
            <li>Power backup</li>
          </ul>
        </div>

        {/* SECTION 3 */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">
            Girls Hostel with Food Near Christ University
          </h2>

          <p className="text-gray-600 leading-relaxed mb-4">
            Food and hygiene are important parts of student life. We provide
            freshly prepared meals in a clean and hygienic environment.
          </p>

          <ul className="list-disc pl-6 text-gray-600 space-y-2">
            <li>Fresh veg & non-veg meals</li>
            <li>Hygienic kitchen</li>
            <li>Balanced diet options</li>
            <li>Regular quality checks</li>
          </ul>
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
            Convenient Location Near Christ University Kengeri
          </h2>

          <p className="text-gray-600 leading-relaxed mb-4">
            Our hostel is strategically located with easy access to Christ
            University Kengeri campus and nearby educational institutions.
          </p>

          <ul className="list-disc pl-6 text-gray-600 space-y-2">
            <li>Christ University Kengeri Campus</li>
            <li>Public transport</li>
            <li>Restaurants & supermarkets</li>
            <li>Medical facilities</li>
            <li>Student hangout spots</li>
          </ul>
        </div>

        {/* FAQ */}
        <div>
          <h2 className="text-2xl font-semibold mb-6">FAQs</h2>

          <div className="space-y-4">
            {[
              {
                q: "Which is the best girls hostel near Christ University?",
                a: "HappiLiv Hostels offers safe, affordable, and fully furnished accommodation.",
              },
              {
                q: "Do you provide food facilities?",
                a: "Yes, we provide hygienic and nutritious food.",
              },
              {
                q: "Is the hostel safe?",
                a: "Yes, we provide CCTV, secure access, and a safe environment.",
              },
              {
                q: "Is WiFi available?",
                a: "Yes, high-speed WiFi is available.",
              },
              {
                q: "How far is it from Christ University?",
                a: "Our hostel is located very close with easy access.",
              },
            ].map((faq, i) => (
              <div key={i} className="border p-4 rounded-xl">
                <h3 className="font-semibold">{faq.q}</h3>
                <p className="text-gray-600 mt-2">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MAP SECTION */}
      <section className="w-full bg-white pb-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-[60%_40%] gap-10">

            {/* GOOGLE MAP */}
            <div>
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
            <div className="bg-[#EE1C4C] rounded-2xl p-8 text-white">
              <h3 className="text-xl font-semibold mb-6">
                Contact HappiLiv Hostels
              </h3>

              <div className="space-y-5">
                <div className="bg-[#FFFFFF2A] p-4 rounded-xl">
                  <p className="font-semibold text-sm mb-1">Phone</p>
                  <p className="text-sm">+91 63630 98384</p>
                  <p className="text-sm">+91 63661 24184</p>
                </div>

                <div className="bg-[#FFFFFF2A] p-4 rounded-xl">
                  <p className="font-semibold text-sm mb-1">WhatsApp</p>
                  <p className="text-sm">+91 78928 81368</p>
                </div>

                <div className="bg-[#FFFFFF2A] p-4 rounded-xl">
                  <p className="font-semibold text-sm mb-1">Email</p>
                  <p className="text-sm">
                    happilivhostels@gmail.com
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <WhyChoose />
      <ContactFormSection />
    </>
  );
}