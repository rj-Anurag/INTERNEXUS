"use client";

import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useOutsideClick } from "@/app/hooks/use-outside-click";

export function MainCards() {
  const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(
    null
  );
  const id = useId();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0  grid place-items-center z-[100]">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.05,
                },
              }}
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-[600px] max-h-[90vh] overflow-y-auto flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl"
            >
              <motion.div layoutId={`image-${active.title}-${id}`}>
                <img
                  width={200}
                  height={200}
                  src={active.src}
                  alt={active.title}
                  className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
                />
              </motion.div>

              <div>
                <div className="flex justify-between items-start p-4">
                  <div className="">
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="font-medium text-neutral-700 dark:text-neutral-200 text-base"
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.description}-${id}`}
                      className="text-neutral-600 dark:text-neutral-400 text-base"
                    >
                      {active.description}
                    </motion.p>
                  </div>

                  <motion.a
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    target="_blank"
                    className="px-4 py-3 text-sm rounded-full font-bold bg-blue-500 text-white"
                  >
                    {active.ctaText}
                  </motion.a>
                </div>
                <div className="pt-4 relative px-4">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-neutral-600 text-xs md:text-sm lg:text-base h-90 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 "
                  >
                    {typeof active.content === "function"
                      ? active.content()
                      : active.content}
                      
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <ul className="max-w-2xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 items-start gap-4">
        {cards.map((card, index) => (
          <motion.div
            layoutId={`card-${card.title}-${id}`}
            key={card.title}
            onClick={() => setActive(card)}
            className="p-4 flex flex-col  hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-xl cursor-pointer"
          >
            <div className="flex gap-4 flex-col  w-full">
              <motion.div layoutId={`image-${card.title}-${id}`}>
                <img
                  width={100}
                  height={100}
                  src={card.src}
                  alt={card.title}
                  className="h-60 w-full  rounded-lg object-cover object-top"
                />
              </motion.div>
              <div className="flex justify-center items-center flex-col">
                <motion.h3
                  layoutId={`title-${card.title}-${id}`}
                  className="font-medium text-neutral-800 dark:text-neutral-200 text-center md:text-left text-base"
                >
                  {card.title}
                </motion.h3>
                <motion.p
                  layoutId={`description-${card.description}-${id}`}
                  className="text-neutral-600 dark:text-neutral-400 text-center md:text-left text-base"
                >
                  {card.description}
                </motion.p>
              </div>
            </div>
          </motion.div>
        ))}
      </ul>
    </>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

const cards = [
  {
    description: "Animesh Kumar Singh",
    title: "Founder & President, INTERNEXUS",
    src: "/Core/Animesh Kumar Singh.jpg",
    ctaText: "animeshsingh0208@gmail.com",
    content: () => {
      return (
        <>
          <p>
            When I founded <strong>INTERNEXUS</strong>, my vision was simple:  
            To empower young minds with the confidence to express, the courage to lead, and the skills to shape the future.
          </p>
      
          <p>
            Having closely observed the challenges faced by today’s youth, I firmly believe that teaching communication, diplomacy, and public speaking is no longer optional—it’s essential. Too many talented individuals from previous generations have struggled in boardrooms and feared public speaking. That cycle must end with us.
          </p>
      
          <p>
            Through INTERNEXUS, our mission is not just to prepare students for debates or conferences, but for life itself.
          </p>
      
          <p>We aim to:</p>
          <ul className="list-disc list-inside ml-4">
            <li>Mentor students across India, regardless of background.</li>
            <li>Build a platform for developing communication and leadership skills.</li>
            <li>Foster expression in all fields—not just politics or public affairs.</li>
          </ul>
      
          <p>
            Because today, it’s not just what you know—it’s how well you can communicate it.
          </p>
      
          <p>At INTERNEXUS:</p>
          <ul className="list-disc list-inside ml-4">
            <li>We listen to young voices.</li>
            <li>We guide them with purpose.</li>
            <li>We advocate for a generation ready to lead—whether in boardrooms, classrooms, parliaments, or communities.</li>
          </ul>
        </>

      
      );
    },
  },
  {
    description: "Anshul Gupta",
    title: "Co-Founder of INTERNEXUS",
    src: "/Core/C0-Anshul.jpg",
    ctaText: "anshulgupta30062004@gmail.com",
    content: () => {
      return (
        <>
  <p>
    At <strong>INTERNEXUS</strong>, precision, intent, and execution define our operations.
  </p>

  <p>
    As we continue to grow as a leading platform for youth diplomacy and leadership, our backbone remains a solid operational framework—one that prioritizes efficiency, accountability, and consistent delivery.
  </p>

  <p>
    <strong>Our goal is simple:</strong> To ensure every INTERNEXUS experience—whether a Model UN conference or a leadership initiative—is flawlessly executed and leaves a lasting impact.
  </p>

  <p><strong>What powers our operations:</strong></p>
  <ul className="list-disc list-inside pl-4 space-y-1">
    <li><strong>Streamlined processes</strong> that minimize friction and maximize output</li>
    <li><strong>Data-driven decisions</strong> to guide strategic actions</li>
    <li><strong>Empowered teams</strong> committed to excellence</li>
  </ul>

  <p>
    We’re building more than events—we’re <strong>engineering experiences</strong> that:
  </p>
  <ul className="list-disc list-inside pl-4 space-y-1">
    <li>Inspire confidence</li>
    <li>Spark meaningful dialogue</li>
    <li>Cultivate a global perspective</li>
  </ul>

  <p>
    At INTERNEXUS, <strong>Operations isn't just a department</strong>—it's the foundation that transforms vision into reality.
  </p>

  <p>
    We move forward with <strong>clarity and commitment</strong>—and we’re just getting started.
  </p>
</>

      );
    },
  },

];
