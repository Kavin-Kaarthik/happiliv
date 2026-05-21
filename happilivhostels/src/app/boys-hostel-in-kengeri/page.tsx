import Banner from "./Components/Banner";
import Features from "./Components/Features";
import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title:
    "Boys Hostel in Kengeri | Safe & Affordable Student Accommodation",
  description:
    "Looking for a boys hostel in Kengeri? HappiLiv Hostels offers safe, affordable, and fully furnished accommodation with food, WiFi, and modern amenities for students.",
};

export default function BoysHostelKengeri() {
  return (
    <>
      <Banner />

      <section className="px-6 md:px-16 py-12 space-y-12">

        <div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Boys Hostel in Kengeri
          </h1>

          <p className="text-gray-600 leading-relaxed mb-4">
            Finding comfortable and affordable accommodation is important for
            students moving to Bangalore for higher education. If you are
            searching for a boys hostel in Kengeri, HappiLiv Hostels offers a
            safe, student-friendly, and well-maintained living environment.
          </p>

          <p className="text-gray-600 leading-relaxed">
            Conveniently located near Christ University Kengeri campus, our
            hostel provides easy access to colleges, transportation facilities,
            restaurants, supermarkets, and other essential services.
          </p>
        </div>

        <div className="relative w-full h-[300px] rounded-2xl overflow-hidden">
          <Image
            src="/boys/room1.webp"
            alt="Room Facilities"
            fill
            className="object-cover"
          />
        </div>

        <Features />

        {/* INTERNAL LINKS */}
        <div className="bg-blue-50 p-8 rounded-2xl">
          <h2 className="text-2xl font-semibold mb-6">
            Explore More Hostel Options
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

            <Link
              href="/boys-hostel-near-christ-university"
              className="bg-white border rounded-xl p-4 hover:shadow-md transition"
            >
              Boys Hostel Near Christ University
            </Link>

            <Link
              href="/boys-hostel-near-kumbalagodu"
              className="bg-white border rounded-xl p-4 hover:shadow-md transition"
            >
              Boys Hostel Near Kumbalagodu
            </Link>

            <Link
              href="/pg-for-boys-near-christ-university"
              className="bg-white border rounded-xl p-4 hover:shadow-md transition"
            >
              PG for Boys Near Christ University
            </Link>

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