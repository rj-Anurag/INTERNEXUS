"use client";

import React from "react";
import { WobbleCard } from "../components/ui/wobble-card";
import { useRouter } from "next/navigation";

export function EventAndHire() {
  const router = useRouter();

  const handleEventClick = () => {
    router.push('/pages/events');
  };

  const handleHomeClick = () => {
    router.push('/');
  };

  const handleHireClick = () => {
    router.push('/pages/hire');
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full m-10 mt-[15rem]">
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-2 h-full bg-pink-800 min-h-[500px] lg:min-h-[300px] hover:cursor-pointer"
        className=""
        onClick={handleEventClick}
      >
        <div className="max-w-xs">
          <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Gippity AI powers the entire universe
          </h2>
          <p className="mt-4 text-left  text-base/6 text-neutral-200">
            With over 100,000 mothly active bot users, Gippity AI is the most
            popular AI platform for developers.
          </p>
        </div>
        <img
          src="/Event.png"
          width={500}
          height={500}
          alt="linear demo image"
          className="absolute -right-4 lg:-right-[40%] grayscale filter -bottom-10 object-contain rounded-2xl"
        />
      </WobbleCard>
      <div 
  onClick={handleHomeClick}
  className="col-span-1 min-h-[300px] rounded-2xl relative hover:cursor-pointer flex items-center justify-center overflow-hidden"
>
  <img
    src="/LOGO.png"
    width={500}
    height={500}
    alt="Company Logo"
    className="object-contain max-h-full"
  />
</div>
      <WobbleCard 
        containerClassName="col-span-1 lg:col-span-3 bg-blue-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px] hover:cursor-pointer"
        onClick={handleHireClick}
      >
        <div className="max-w-sm">
          <h2 className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Signup for blazing-fast cutting-edge state of the art Gippity AI
            wrapper today!
          </h2>
          <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
            With over 100,000 mothly active bot users, Gippity AI is the most
            popular AI platform for developers.
          </p>
        </div>
        <img
          src="/Hire.webp"
          width={500}
          height={500}
          alt="linear demo image"
          className="absolute -right-10 md:-right-[40%] lg:-right-[20%] -bottom-10 object-contain rounded-2xl"
        />
      </WobbleCard>
    </div>
  );
}
