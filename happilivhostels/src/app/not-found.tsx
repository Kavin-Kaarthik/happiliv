'use client';

import Link from 'next/link';
import dynamic from 'next/dynamic';
const Lottie = dynamic(() => import('lottie-react'), { ssr: false });
import animationData from '../../public/404notfound/Lonely 404.json'; 

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white px-4 text-center">
      
      <div className="w-full max-w-[600px] -mb-10">
        <Lottie 
          animationData={animationData} 
          loop={true} 
          style={{ width: '100%', height: 'auto' }}
        />
      </div>

      {/* 2. The Text Content */}
      <div className="space-y-2">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
          Sorry! We Couldn’t Find That Page.
        </h1>
        <p className="text-sm md:text-base text-gray-500 font-medium">
          Reception Says It Was Never Checked In.
        </p>
      </div>

      {/* 3. The Custom Button */}
      <div className="mt-8">
        <Link
          href="/"
          className="inline-block bg-[#ef2351] hover:bg-[#d41d46] text-white font-semibold py-3 px-10 rounded-full transition-all duration-300 shadow-lg"
        >
          Back To Hostel
        </Link>
      </div>
    </div>
  );
}