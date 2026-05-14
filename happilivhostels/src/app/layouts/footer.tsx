'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faInstagram,
  faXTwitter,
  faFacebookF,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import { usePathname } from 'next/navigation';
import FooterGallery from './FooterGallery';

export default function Footer() {
  const pathname = usePathname();
  return (
    <footer className="w-full">

      {/* ================= TOP FOOTER ================= */}
      <div className={`${pathname === '/boys-room-tariff'
        ? 'bg-[#d9e9fb]'
        : 'bg-[#fdecef]'
        } rounded-t-[56px] overflow-hidden`}>
        <div className="max-w-[1400px] mx-auto px-24 max-[1200px]:px-10 max-[991px]:px-6 pt-20 pb-2 grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-16">

          {/* LOGO + DESCRIPTION */}
          <div className='lg:col-span-3 col-span-12'>
            <Image
              src="/assets/logo.svg"
              alt="HappiLiv Hostel"
              width={170}
              height={50}

            />

            <p className="mt-6 text-sm text-gray-600 leading-relaxed max-w-sm">
              We’re a fully furnished Girls and Boys Hostel near Christ University
              Kengeri Campus, Bangalore with ample amenities to make your
              stay with us feel like a second home.
            </p>
          </div>

          {/* EXPLORE */}
          <div className='lg:col-span-2 col-span-12'>
            <h4 className="text-md font-semibold text-[#ef1c4f] mb-2">
              Explore
            </h4>

            <ul className="space-y-3 text-sm text-gray-800">
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/girls-room-tariff">Girls Hostel</Link></li>
              <li><Link href="/boys-room-tariff">Boys Hostel</Link></li>
              <li><Link href="/gallery">Gallery</Link></li>
              <li><Link href="/blogs">Blogs</Link></li>
              <li><Link href="/cancellation-policy">Cancellation Policy</Link></li>
              <li><Link href="/contact">Contact Us</Link></li>
            </ul>
          </div>

          {/* ADDRESS + CONTACT */}
          <div className='lg:col-span-4 col-span-12'>
            <h4 className="text-sm font-semibold text-[#ef1c4f] mb-2">
              Address:
            </h4>

            <p className="text-sm text-gray-800 leading-relaxed mb-3">
              No: 171, Kanimeenike Village,<br />
              Next To Christ University,<br />
              Kumbalagodu Post, Kengeri Hobli,<br />
              Bangalore – 560074
            </p>

            <h4 className="text-sm font-semibold text-[#ef1c4f] mb-2">
              Phone:
            </h4>

            <p className="text-sm text-gray-800 mb-3">
              +91 63630 98384 &nbsp;|&nbsp; +91 78928 81368 <br />  +91 63661 24184
            </p>

            <h4 className="text-sm font-semibold text-[#ef1c4f] mb-2">
              Email:
            </h4>

            <p className="text-sm text-gray-800">
              happilivhostels@gmail.com
            </p>
          </div>

          {/* Gallery */}

          {/* Gallery */}
          <div className="lg:col-span-3 col-span-10">
            <h4 className="text-sm font-semibold text-[#ef1c4f] mb-2">
              Gallery
            </h4>
            <p className="text-[14px]">
              Here’s a sneak peek into your future home away from home.
            </p>

            <FooterGallery />
          </div>


        </div>
      </div>

      {/* ================= BOTTOM BAR ================= */}
      <div className={`${pathname === '/boys-room-tariff'
        ? 'bg-[#002b5b]'
        : 'bg-[#ee1c4c]'
        }`}>
        <div className="max-w-[1400px] mx-auto px-24 max-[1200px]:px-10 max-[991px]:px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-4 text-white text-sm">

          <p className="text-center md:text-left">
            © {new Date().getFullYear()} HappiLiv Hostel. All rights reserved.
            <span className="mx-2">•</span>
            <Link href="/cancellation-policy">Cancellation Policy</Link>
            <span className="mx-2">•</span>
            <Link
              href="https://technox.in/"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              Designed By Technox
            </Link>
          </p>


          {/* SOCIAL ICONS */}
          <div className="flex items-center gap-5 text-lg">
            <Link href="https://www.instagram.com/HappiLivhostel/" aria-label="Instagram">
              <FontAwesomeIcon icon={faInstagram} className='hover:text-rose-800' />
            </Link>
            <Link href="https://x.com/HappiLivHostel" aria-label="Twitter">
              <FontAwesomeIcon icon={faXTwitter} className='hover:text-black' />
            </Link>
            <Link href="https://www.facebook.com/people/HappiLiv-Hostel/100090702910485/" aria-label="Facebook">
              <FontAwesomeIcon icon={faFacebookF} className='hover:text-blue-700' />
            </Link>
            <Link href="https://www.youtube.com/@HappiLivhostel" aria-label="YouTube">
              <FontAwesomeIcon icon={faYoutube} className='hover:text-red-800' />
            </Link>
          </div>

        </div>
      </div>

    </footer>
  );
}
