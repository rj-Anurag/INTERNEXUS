
import { BackgroundLines } from "./ui/background-lines";

export const NoHiring = () => {
  return (
    

      <BackgroundLines className="flex items-center justify-center w-full flex-col px-4">
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
    </BackgroundLines>
    
  );
};
