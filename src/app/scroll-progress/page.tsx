"use client";
import { LoremIpsum } from "@/components/LoremIpsum";
import { motion, useScroll } from "motion/react";
const Scroll_Progress = () => {
  const { scrollYProgress } = useScroll();
  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 origin-left bg-red-500 rounded-full"
        style={{ scaleX: scrollYProgress }}
      />
      <h1 className="my-20 text-2xl font-bold text-center">
        <code>useScroll</code> demo
      </h1>
      <LoremIpsum />
    </>
  );
};

export default Scroll_Progress;
