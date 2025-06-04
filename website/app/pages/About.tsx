"use client";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "@/app/components/ui/lamp";
import { ContainerScroll } from "../components/ui/container-scroll-animation"; // Import the component

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
        <div className="h-[40rem] w-[40rem]">
          <ContainerScroll
            titleComponent={<></>
            }
          >
            <img
              src="/Core/About.jpeg" // Replace with your image
              alt="About Us"
              height={600}
              width={1200}
              className="mx-auto rounded-2xl object-cover h-full w-full border border-gray-500 shadow-lg"
              draggable={false}
            />
          </ContainerScroll>
        </div>

        {/* Right Column - About Text */}
        <div className="mt-[10rem]">
        <h1 className="text-[80px] font-bold font-sans text-white text-left">About Us</h1>
            <p className="text-lg text-gray-300 leading-relaxed text-left">
            INTERNEXUS is a dynamic, student-driven platform created to cultivate public skills, global citizenship, and leadership among youth across India and beyond. Operating PAN	 India, INTERNEXUS serves as a hub for discourse, diplomacy, and development through academic simulations, training, and interdisciplinary engagement.

            </p>
            <div className="mt-6 text-left">
              <h3 className="text-2xl font-semibold text-white mb-2">Core Values</h3>
              <ul className="list-disc list-inside text-gray-300 text-lg space-y-1">
                <li>Inclusivity</li>
                <li>Innovation</li>
                <li>Empowerment</li>
                <li>Global Thinking with Local Action</li>
              </ul>
            </div>
        
        </div>
      </motion.div>
    </LampContainer>
  );
}
