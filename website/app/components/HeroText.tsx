import { PointerHighlight } from "@/app/components/ui/pointer-highlight";
import { MaskContainer } from "./ui/svg-mask-effect";
import { DirectionAwareHover } from "./ui/direction-aware-hover";

export function HeroText() {
  const imageUrl =
  "/Previous Glimpse/Previous glimpse.png";
  return (
    <div className="mx-auto max-w-7xl  px-4 flex flex-col md:flex-row items-center justify-between gap-10">
      
      {/* Left column - MaskContainer */}
      <div className="w-full md:w-1/2 flex items-center justify-center " >
        <MaskContainer
          revealText={
            <p className="text-center text-3xl md:text-4xl font-bold text-slate-800 dark:text-white max-w-xl">
              The first rule of MRR Club is you do not talk about MRR Club. The
              second rule of MRR Club is you DO NOT talk about MRR Club.
            </p>
          }
          className="h-[30rem] w-full rounded-md  text-white dark:text-black p-6"
        >
          Discover the power of{" "}
          <span className="text-blue-500">Tailwind CSS v4</span> with native CSS
          variables and container queries with{" "}
          <span className="text-blue-500">advanced animations</span>.
        </MaskContainer>
      </div>

      {/* Right column - Card or any component */}
      <div className="w-full md:w-1/2 flex items-center justify-center">
        <div className="rounded-xl shadow-lg p-6 w-full max-w-md  text-black dark:text-white">
        <DirectionAwareHover imageUrl={imageUrl}>
        <p className="font-bold text-xl">INTERNEXUS</p>

      </DirectionAwareHover>
        </div>
      </div>
    </div>
  );
}
