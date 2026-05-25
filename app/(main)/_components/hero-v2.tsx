"use client";

import Image from "next/image";
import { useState } from "react";
import ExploreModal from "./explore-modal";

const HeroV2 = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="relative mt-20 w-full">
      <Image
        src="/images/way-wise-banner.png"
        alt="WayWise banner"
        width={1920}
        height={1080}
        className="h-full w-full shrink-0 object-cover"
        priority
      />
      <div className="absolute inset-0 flex items-center justify-center pb-8 sm:pb-14 md:pb-20 lg:pb-24">
        <button
          onClick={() => setIsModalOpen(true)}
          className="animate-pulse-scale cursor-pointer rounded-full bg-[#C1252D] px-5 py-2.5 text-sm font-bold text-white shadow-lg ring-2 ring-white/40 transition-all hover:scale-110 hover:bg-[#a01e25] hover:ring-white/60 focus-visible:ring-4 focus-visible:ring-white focus-visible:outline-none sm:px-7 sm:py-3 sm:text-base sm:ring-4 md:px-10 md:py-4 md:text-xl lg:px-12 lg:py-5 lg:text-2xl"
        >
          Click here to Explore
        </button>
      </div>

      {isModalOpen && <ExploreModal onClose={() => setIsModalOpen(false)} />}
    </section>
  );
};

export default HeroV2;
