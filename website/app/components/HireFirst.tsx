"use client";
import { ThreeDMarquee } from "@/app/components/ui/3d-marquee";

export function HireLeft() {
  const images = [
  
  
  ];
  return (
    <div className="mx-auto my-10 max-w-7xl rounded-3xl bg-gray-950/5 p-2 ring-1 ring-neutral-700/10 dark:bg-black">
      <ThreeDMarquee images={images} />
    </div>
  );
}
