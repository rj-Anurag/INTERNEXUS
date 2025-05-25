"use client";
import React from "react";
import { motion } from "framer-motion"; // Use 'framer-motion'
import { cn } from "@/app/lib/utils";

export function LampDemo() {
  return (
    <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
      >
        Build lamps <br /> the right way
      </motion.h1>
    </LampContainer>
  );
}

export const LampContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
    className={cn(
      "relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-black w-full rounded-md z-0 mt-20",
      className
    )}
  >
    <div className="relative flex w-full flex-1 scale-y-125 items-center justify-center isolate z-0 ">
      <motion.div
        // ...motion props
        style={{
          backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
        }}
        className="absolute inset-auto right-1/2 h-56 overflow-visible w-[30rem] bg-gradient-conic from-gray-400 via-transparent to-transparent text-white [--conic-position:from_70deg_at_center_top]"
      >
        {/* ... */}
      </motion.div>
      <motion.div
        // ...motion props
        style={{
          backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
        }}
        className="absolute inset-auto left-1/2 h-56 w-[30rem] bg-gradient-conic from-transparent via-transparent to-gray-400 text-white [--conic-position:from_290deg_at_center_top]"
      >
        {/* ... */}
      </motion.div>
      <div className="absolute top-1/2 h-48 w-full translate-y-12 scale-x-150 bg-black blur-2xl"></div>
      <div className="absolute top-1/2 z-50 h-48 w-full bg-transparent opacity-10 backdrop-blur-md"></div>
      <div className="absolute inset-auto z-50 h-36 w-[28rem] -translate-y-1/2 rounded-full bg-gray-500 opacity-50 blur-3xl"></div>
      <motion.div
        // ...motion props
        className="absolute inset-auto z-30 h-36 w-64 -translate-y-[6rem] rounded-full bg-gray-400 blur-2xl"
      ></motion.div>
      <motion.div
        // ...motion props
        className="absolute inset-auto z-50 h-0.5 w-[30rem] -translate-y-[7rem] bg-gray-400 "
      ></motion.div>
      <div className="absolute inset-auto z-40 h-44 w-full -translate-y-[12.5rem] bg-black "></div>
    </div>
    <div className="relative z-50 flex -translate-y-80 flex-col items-center px-5">
      {children}
    </div>
  </div>
  
  );
};
