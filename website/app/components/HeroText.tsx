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
              To empower the next generation of changemakers by providing inclusive, <span className="text-yellow-400">intellectually</span> stimulating platforms for expression, <span className="text-yellow-400">collaboration</span>, and leadership.

            </p>
          }
          className="h-[30rem] w-full rounded-md  text-white dark:text-black p-6"
        >     

        Engaged thousands of students through offline and virtual conferences.
        Recognized for promoting{" "}
          <span className="text-blue-500">UN SDGs</span> with native CSS
          and enabling youth-led environmental, social, and governance{" "}
          <span className="text-blue-500">(ESG) initiatives</span>.
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
