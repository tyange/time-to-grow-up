"use client";
import { useAtom, useAtomValue } from "jotai";
import { AnimatePresence, motion } from "motion/react";
import {
  currentFirstSectionTextIndexAtom,
  firstSectionDataAtom,
} from "../atoms/first-section";

export default function FirstSection() {
  const [currentIndex, setCurrentIndex] = useAtom(
    currentFirstSectionTextIndexAtom
  );
  const data = useAtomValue(firstSectionDataAtom);

  return (
    <div className="relative h-96 flex flex-col justify-center items-center text-center">
      {data?.content_data?.texts?.length > 0 && (
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
            animate={{
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
              transition: {
                duration: 0.8,
                ease: "easeOut",
              },
            }}
            exit={{
              opacity: 0,
              y: -20,
              filter: "blur(4px)",
              transition: {
                duration: 0.6,
                ease: "easeIn",
              },
            }}
            className="absolute inset-0 flex flex-col justify-center items-center space-y-6"
          >
            <motion.h1
              className="text-4xl md:text-5xl font-light text-slate-800 leading-relaxed"
              variants={{
                initial: { opacity: 0, y: 30 },
                animate: {
                  opacity: 1,
                  y: 0,
                  transition: { delay: 0.2, duration: 0.8 },
                },
              }}
            >
              {data}
            </motion.h1>
          </motion.div>
        </AnimatePresence>
      )}
    </div>
  );
}
