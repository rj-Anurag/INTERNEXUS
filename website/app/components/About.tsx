import { ContainerScroll } from "../components/ui/container-scroll-animation";
import { PointerHighlight } from "../components/ui/pointer-highlight";

export const AboutComponent = () => {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center px-4 ">
        <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

        <ContainerScroll
        titleComponent={
          <>
          </>
        }
      >
        <img
          src={`/linear.webp`}
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        />
      </ContainerScroll>

          {/* Right Column - Text */}
          <div className="mb-[18rem]">
          <PointerHighlight>
        <span className="text-[80px] font-bold font-sans text-white">About Us</span>
      </PointerHighlight>
            <p className="text-lg text-gray-300 leading-relaxed">
              We are passionate about building meaningful digital experiences. Our team
              collaborates closely to deliver high-quality products that solve real-world
              problems and bring value to our users.
            </p>
          </div>
        </div>
      </div>
    );
  };
  