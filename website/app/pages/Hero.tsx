import { HeroText } from "../components/HeroText";
import { cn } from "@/app/lib/utils";
import { TextHoverEffect } from "../components/ui/text-hover-effect";
import { Spotlight } from "../components/ui/spotlight-new";

export const Hero = () => {
  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center bg-white dark:bg-black overflow-hidden">
      {/* Subtle dotted grid background */}
      <div
        className={cn(
          "absolute inset-0 z-0",
          "[background-size:10px_10px]",
          "[background-image:radial-gradient(rgba(0,0,0,0.05)_1px,transparent_1px)]",
          "dark:[background-image:radial-gradient(rgba(255,255,255,0.10)_1px,transparent_1px)]"
        )}
      />

      {/* Radial mask effect */}
      <div className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center bg-gray-800 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black" />

      {/* Hero text */}
      <Spotlight     />
      <div className="z-10">
        <HeroText />
      </div>

      {/* Text hover effect with logo on top */}
      <div className="relative z-10 w-full px-4">
        <TextHoverEffect text="INTERNEXUS" />
        <img
          src="/LOGO.png"
          alt="Company Logo"
          className="absolute top-1/2 left-1/2 w-[20rem] h-[20rem] -translate-x-1/2 -translate-y-1/2 z-20"
        />
      </div>
    </div>
  );
};
