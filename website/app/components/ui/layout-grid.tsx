"use client";
import React, { useState } from "react";
import { motion } from "motion/react";
import { cn } from "@/app/lib/utils";
import { Card } from "./container-scroll-animation";
import { CompanyCard } from "../Card";

// Card type definition
type Card = {
  id: number;
  content:  React.ReactNode | string;
  className: string;
  thumbnail: string;
  height: string;
};

// Main LayoutGrid component
export const LayoutGrid = ({ cards }: { cards: Card[] }) => {
  const [selected, setSelected] = useState<Card | null>(null);
  const [lastSelected, setLastSelected] = useState<Card | null>(null);

  const handleClick = (card: Card) => {
    setLastSelected(selected);
    setSelected(card);
  };

  const handleOutsideClick = () => {
    setLastSelected(selected);
    setSelected(null);
  };

  return (
    <div className="w-full h-full p-6 grid grid-cols-1 md:grid-cols-3 max-w-7xl mx-auto gap-4 relative">
      {cards.map((card, i) => (
        <div key={i} className={cn(card.className)} style={{ height: card.height }}>
          <motion.div
            onClick={() => handleClick(card)}
            className={cn(
              card.className,
              "relative overflow-hidden",
              selected?.id === card.id
                ? "rounded-lg cursor-pointer absolute inset-0 h-1/2 w-full md:w-1/2 m-auto z-50 flex justify-center items-center flex-wrap flex-col"
                : lastSelected?.id === card.id
                ? "z-40 bg-white rounded-xl h-full w-full"
                : "bg-white rounded-xl h-full w-full"
            )}
            layoutId={`card-${card.id}`}
          >
            {selected?.id === card.id && <SelectedCard selected={selected} />}
            <ImageComponent card={card} />
          </motion.div>
        </div>
      ))}
      <motion.div
        onClick={handleOutsideClick}
        className={cn(
          "absolute h-full w-full left-0 top-0 bg-black opacity-0 z-10",
          selected?.id ? "pointer-events-auto" : "pointer-events-none"
        )}
        animate={{ opacity: selected?.id ? 0.3 : 0 }}
      />
    </div>
  );
};

// Image component for each card
const ImageComponent = ({ card }: { card: Card }) => {
  return (
    <motion.img
      layoutId={`image-${card.id}-image`}
      src={card.thumbnail}
      height="400"
      width="400"
      className={cn(
        "object-cover object-center h-full w-full transition duration-200"
      )}
      alt="thumbnail"
    />
  );
};

// Selected card overlay
const SelectedCard = ({ selected }: { selected: Card | null }) => {
  return (
    <div className="bg-transparent h-full w-full flex flex-col justify-end rounded-lg shadow-2xl relative z-">
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 0.6,
        }}
        className="absolute inset-0 h-full w-full bg-black opacity-60 z-10"
      />
      <motion.div
        layoutId={`content-${selected?.id}`}
        initial={{
          opacity: 0,
          y: 100,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        exit={{
          opacity: 0,
          y: 100,
        }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
        }}
        className="relative px-8 pb-4 z-"
      >
        {selected?.content}
      </motion.div>
    </div>
  );
};

// Skeleton content for each card




const SkeletonOne = () => (
  <div>
    <p className="font-bold md:text-4xl text-xl text-white">Abhinav Bajpai</p>
    <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
      Head of Public Realtions & Outreach
    </p>
    <p className="font-bold text-base my-4 max-w-lg text-blue-500">
      abhinavbajpayee88@gmail.com
    </p>
  </div>
);
const SkeletonTwo = () => (
  <div>
    <p className="font-bold md:text-4xl text-xl text-white">Vertika Negi</p>
    <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
     Advisor
    </p>
    <p className="font-bold text-base my-4 max-w-lg text-blue-500">
     negivartika2007@gmail.com
    </p>  
  </div>
);
const SkeletonThree = () => (
  <div>
    <p className="font-bold md:text-4xl text-xl text-white">Yogita Tahilyani</p>
    <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
     Head of Marketing & Sales
    </p>
    <p className="font-bold text-base my-4 max-w-lg text-blue-500 ">
     tahilyaniyogita@gmail.com
    </p>  
  </div>
);
const SkeletonFour = () => (
  <div>
    <p className="font-bold md:text-4xl text-xl text-white">Hrisheeta Singh</p>
    <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
      Head of Finance & Logistics
    </p>
    <p className="font-bold text-base my-4 max-w-lg text-blue-500 ">
     hrisheetas@gmail.com
    </p>  
  </div>
);
const SkeletonFive = () => (
  <div>
    <p className="font-bold md:text-4xl text-xl text-white">Yashasvi Tripathi</p>
    <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
      Head of Management
    </p>
    <p className="font-bold text-base my-4 max-w-lg text-blue-500 ">
     yashasvi0328@gmail.com
    </p>  
  </div>
);
const SkeletonSix = () => (
  <div>
    <p className="font-bold md:text-4xl text-xl text-white">Aishi Majudar</p>
    <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
      Head of Social Media
    </p>
    <p className="font-bold text-base my-4 max-w-lg text-blue-500 ">
     majumderaishi066@gmail.com
    </p>  
  </div>
);



const bottomCards = [
  { id: 1, content: <SkeletonOne />, className: "md:col-span-1 hover:cursor-pointer ", height: "20rem", thumbnail: "/Core/Abhinav Bajpai.jpg" },
  { id: 2, content: <SkeletonTwo />,  className: "md:col-span-1 hover:cursor-pointer", height: "20rem", thumbnail: "/Core/VartikaNegi.jpg" },
  { id: 3, content: <SkeletonThree />,  className: "md:col-span-1 hover:cursor-pointer ", height: "20rem", thumbnail: "/Core/Yogita.jpeg" },
  { id: 4, content: <SkeletonFour />,   className: "md:col-span-1 hover:cursor-pointer ", height: "20rem", thumbnail: "/Core/Hrisheeta Singh_.jpg" },
  { id: 5, content: <SkeletonFive />,   className: "md:col-span-1 hover:cursor-pointer ", height: "20rem", thumbnail: "/Core/Yashasvi Tripathi.jpg" },
  { id: 6, content: <SkeletonSix />,   className: "md:col-span-1 hover:cursor-pointer ", height: "20rem", thumbnail: "/Core/Aishi.png" },
];
export function TeamLayout() {
  return (
    <div className="py-20 w-full space-y-12">
       <CompanyCard />

      {/* Rest of the team members */}
      <LayoutGrid cards={bottomCards} />
    </div>
  );
}