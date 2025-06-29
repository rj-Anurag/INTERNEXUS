
import { BackgroundLines } from "./ui/background-lines";


export const NoEvents = () => {
  return (
   
      <BackgroundLines className="flex items-center justify-center w-full flex-col px-4">
      <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
      No Events Yet!
      </h2>
      <img
          src="/NoEvents.png"
          alt="No Openings"
          className="mt-8 w-full max-w-xl max-h-[40vh] object-contain"
        />
    </BackgroundLines>
 
  );
};
