"use client";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "@/app/components/ui/lamp";
import { ContainerScroll } from "../components/ui/container-scroll-animation"; // Import the component
import { PointerHighlight } from "../components/ui/pointer-highlight";

export function About() {
  return (
    <LampContainer className="mt-[10rem]">
      <motion.div
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-8 text-center text-white max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        {/* Left Column - Scroll Animation */}
        <div className="h-[40rem]">
          <ContainerScroll
            titleComponent={<></>
            }
          >
            <img
              src="/your-image-path.jpg" // Replace with your image
              alt="About Us"
              height={600}
              width={1200}
              className="mx-auto rounded-2xl object-cover h-full"
              draggable={false}
            />
          </ContainerScroll>
        </div>

        {/* Right Column - About Text */}
        <div className="mt-[10rem]">
           <PointerHighlight>
                  <span className="text-[80px] font-bold font-sans text-white">About Us</span>
            </PointerHighlight>
            <p className="text-lg text-gray-300 leading-relaxed">
            We are passionate about building meaningful digital experiences. Our team
            collaborates closely to deliver high-quality products that solve real-world
            problems and bring value to our users.
            </p>
        
        </div>
      </motion.div>
    </LampContainer>
  );
}
