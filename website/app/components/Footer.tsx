"use client";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
import { useRouter } from "next/navigation";

export const Footer = () => {
  const words = [
    { text: "From" },
    { text: "hesitation" },
    { text: "to" },
    {
      text: "articulation.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];

   const router = useRouter();
  
      const handleEventClick = () => {
        router.push('/pages/events');
      };
  
      const handleHireClick = () => {
        router.push('/pages/hire');
      };

  return (
    <footer className="bg-black border-t border-gray-500 text-white py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        
        {/* Left Column */}
        <div className="w-full md:w-1/2 flex flex-col items-start md:items-start text-center md:text-left">
          <p className="text-neutral-400 text-sm mb-2">
          <span className="text-blue-500 font-extrabold"> INTERNEXUS </span> is where every student’s voice begins to lead.
          </p>
          <TypewriterEffectSmooth words={words} />
          <div className="flex flex-col sm:flex-row mt-4 gap-4">
            <button className="w-40 h-10 rounded-xl bg-black border dark:border-white text-white text-sm hover:cursor-pointer hover:animate-bounce" onClick={handleEventClick}>
              Join Events Now
            </button>
            <button className="w-40 h-10 rounded-xl bg-white text-black border border-black text-sm hover:cursor-pointer hover:animate-bounce" onClick={handleHireClick}>
              Join Our Team
            </button>
          </div>
        </div>

        {/* Right Column - Socials */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end gap-6 text-2xl">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition"
          >
            <FaTwitter />
          </a>
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
};
