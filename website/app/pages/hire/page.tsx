import { HireLeft } from "@/app/components/HireFirst";

export default function HirePage() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      {/* Top Heading */}
      <h1 className="text-4xl font-bold mb-12">We Are Hiring</h1>

      {/* Wrapper with relative positioning */}
      <div className="relative flex">
        {/* Left Column */}
        <div className="w-1/2 pr-8 z-10">
           <HireLeft />
        </div>

        {/* Right Column */}
        <div className="w-1/2 pl-8 z-10">
          <h2 className="text-2xl font-semibold mb-2">Open Positions</h2>
          <p>
            Explore roles in engineering, marketing, and product management. Let’s build something amazing together.
          </p>
        </div>

        {/* Vertical Divider */}
        <div className="absolute top-0 bottom-0 left-1/2 w-1 bg-gradient-to-b from-transparent via-gray-600 to-transparent" />
      </div>
    </div>
  );
}
