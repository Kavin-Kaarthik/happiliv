import Banner from "./Components/Banner";
import Features from "./Components/Features";
import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title:
    "Boys Hostel Near Christ University | Safe & Affordable Student Accommodation",
  description:
    "Looking for a boys hostel near Christ University? HappiLiv Hostels offers safe, affordable, and fully furnished accommodation with food, WiFi, and modern amenities for students.",
};

export default function BoysHostelChristUniversity() {
  return (
    <>
      <Banner />

      {/* MAIN CONTENT */}
      <section className="px-6 md:px-16 py-12 space-y-12">

        {/* H1 */}
        <div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Boys Hostel Near Christ University
          </h1>

          <p className="text-gray-600 leading-relaxed mb-4">
            Finding comfortable and affordable accommodation is important for
            students moving to Bangalore for higher education. If you are
            searching for a boys hostel near Christ University, HappiLiv
            Hostels offers a safe, student-friendly, and well-maintained living
            environment designed specifically for students.
          </p>

          <p className="text-gray-600 leading-relaxed">
            Conveniently located near Christ University Kengeri campus, our
            hostel provides easy access to colleges, transportation facilities,
            restaurants, supermarkets, and other essential services.
          </p>
        </div>

        {/* IMAGE 1 */}
        <div className="relative w-full h-[300px] rounded-2xl overflow-hidden">
          <Image
            src="/boys/room1.webp"
            alt="Room Facilities"
            fill
            className="object-cover"
          />
        </div>

        {/* SECTION 1 */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">
            Safe & Secure Boys Hostel Near Christ University
          </h2>

          <p className="text-gray-600 mb-6">
            Safety and comfort are important factors when choosing student
            accommodation. At HappiLiv Hostels, we provide a secure and peaceful
            environment where students can stay comfortably and focus on
            academics.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-16 text-gray-700 text-lg font-medium">

            <div className="flex items-start gap-3">
              <span className="mt-1">•</span>
              <span>24/7 CCTV surveillance</span>
            </div>

            <div className="flex justify-end">
              <div className="flex items-start gap-3 text-right">
                <span className="mt-1">•</span>
                <span>Secure entry access</span>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className="mt-1">•</span>
              <span>Dedicated hostel support staff</span>
            </div>

            <div className="flex justify-end">
              <div className="flex items-start gap-3 text-right">
                <span className="mt-1">•</span>
                <span>Safe and student-friendly atmosphere</span>
              </div>
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
            HappiLiv Hostels provides well-maintained rooms and modern amenities
            at student-friendly pricing.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-16 text-gray-700 text-lg font-medium">

            <div className="flex items-start gap-3">
              <span className="mt-1">•</span>
              <span>Fully furnished rooms</span>
            </div>

            <div className="flex justify-end">
              <div className="flex items-start gap-3 text-right">
                <span className="mt-1">•</span>
                <span>Comfortable beds and storage spaces</span>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className="mt-1">•</span>
              <span>High-speed WiFi connectivity</span>
            </div>

            <div className="flex justify-end">
              <div className="flex items-start gap-3 text-right">
                <span className="mt-1">•</span>
                <span>Daily housekeeping services</span>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className="mt-1">•</span>
              <span>Laundry facilities</span>
            </div>

            <div className="flex justify-end">
              <div className="flex items-start gap-3 text-right">
                <span className="mt-1">•</span>
                <span>Hygienic washrooms</span>
              </div>
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
            alt="Boys Hostel"
            fill
            className="object-cover"
          />
        </div>

        {/* SECTION 3 */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">
            Boys Hostel with Food Near Christ University
          </h2>

          <p className="text-gray-600 mb-6">
            Good food and hygiene play an important role in maintaining a
            healthy student lifestyle. We provide fresh and nutritious meals
            prepared in a clean and hygienic environment to ensure students
            enjoy quality food every day.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-16 text-gray-700 text-lg font-medium">

            <div className="flex items-start gap-3">
              <span className="mt-1">•</span>
              <span>Fresh vegetarian and non-vegetarian meals</span>
            </div>

            <div className="flex justify-end">
              <div className="flex items-start gap-3 text-right">
                <span className="mt-1">•</span>
                <span>Hygienic kitchen and dining facilities</span>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className="mt-1">•</span>
              <span>Balanced meal options</span>
            </div>

            <div className="flex justify-end">
              <div className="flex items-start gap-3 text-right">
                <span className="mt-1">•</span>
                <span>Quality-focused meal preparation</span>
              </div>
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
            Prime Location Near Christ University Kengeri
          </h2>

          <p className="text-gray-600 mb-6">
            One of the biggest advantages of staying at HappiLiv Hostels is our
            convenient location near Christ University Kengeri campus.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-16 text-gray-700 text-lg font-medium">

            <div className="flex items-start gap-3">
              <span className="mt-1">•</span>
              <span>Christ University Kengeri Campus</span>
            </div>

            <div className="flex justify-end">
              <div className="flex items-start gap-3 text-right">
                <span className="mt-1">•</span>
                <span>Public transportation facilities</span>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className="mt-1">•</span>
              <span>Restaurants and cafes</span>
            </div>

            <div className="flex justify-end">
              <div className="flex items-start gap-3 text-right">
                <span className="mt-1">•</span>
                <span>Supermarkets and medical stores</span>
              </div>
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
            living away from home.
          </p>

          
        </div>

        <Features />

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