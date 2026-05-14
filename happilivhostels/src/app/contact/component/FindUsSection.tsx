import { MapPin, Phone } from "lucide-react";
import Image from "next/image";
const locations = [
  {
    title: "Ilens House (Boys Hostel)",
    address: `No.57 Kanimenike Mysore road, Next to christ college, Kengeri, Kumbalgodu, Karnataka - 560074`,
    phone: "+91 63630 98384",
  },
  {
    title: "Kala's House (Girls Hostel)",
    address: `54/1 Kanimenike kengeri, Bangalore, Karnataka - 560059`,
    phone: "+91 78928 81368",
  },
  {
    title: "Sriram's House (Girls Hostel)",
    address: `54/3, Kanimenike village, Kengeri hobli, Bangalore south talk, Bangalore, Karnataka - 560074`,
    phone: "+91 63661 24184",
  },
];

export default function FindUsSection() {
  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 text-center">
        {/* Heading */}
        <h2 className="text-2xl font-semibold">
          <span className="text-[#EE1C4C]">Find Us</span> on Google Maps
        </h2>
        <p className="text-sm text-gray-600 mt-2">
          Easily locate your HappiLiv hostel and get step-by-step directions
          right from your phone.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-8 mt-12 lg:mx-30">
          {locations.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl inset-shadow-sm px-6 py-8 flex flex-col items-center text-center"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-full flex items-center justify-center mb-4">
                <Image src="/assets/location.png" alt="Map Pin" width={50} height={50} />
              </div>

              {/* Title */}
              <h3 className="font-semibold text-black mb-3">
                {item.title}
              </h3>

              {/* Address */}
              <p className="text-sm text-gray-600 leading-relaxed mb-6 whitespace-pre-line">
                {item.address}
              </p>

              {/* Call Button */}
              <a
                href={`tel:${item.phone.replace(/\s+/g, "")}`}
                className="mt-auto inline-flex items-center gap-2 bg-[#EE1C4C] hover:bg-black text-white text-sm font-medium px-5 py-2.5 rounded-full transition"
              >
                <Phone size={16} />
                {item.phone}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
