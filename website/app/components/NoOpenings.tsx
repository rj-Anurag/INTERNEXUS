import { cn } from "../lib/utils";
import { Spotlight } from "./ui/spotlight-new";

export const NoHiring = () => {
  return (
    <div className="relative flex h-[40rem] w-full overflow-hidden rounded-md bg-black/[0.96] antialiased items-center justify-center">
      {/* Background Grid */}
      <div
        className={cn(
          "pointer-events-none absolute inset-0 select-none [background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,#171717_1px,transparent_1px),linear-gradient(to_bottom,#171717_1px,transparent_1px)]"
        )}
      />

      {/* Spotlight Effect */}
      <Spotlight className="-top-40 left-0 md:-top-20 md:left-60" fill="white" />

      {/* No Hiring Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-3xl md:text-6xl font-bold font-sans bg-gradient-to-b from-neutral-200 to-neutral-600 bg-clip-text text-transparent">
          We are not hiring at the moment
        </h1>
        <p className="mt-4 text-base md:text-lg text-neutral-400">
          Thank you for your interest — please check back later!
        </p>
        <img
          src="/NoOpening.png"
          alt="No Openings"
          className="mt-8 w-full max-w-xl max-h-[40vh] object-contain"
        />
      </div>
    </div>
  );
};
