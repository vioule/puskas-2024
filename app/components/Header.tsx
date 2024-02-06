"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Header() {
  const variants = {
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25,
        delayChildren: 1,
        duration: 1,
      },
    },
    hidden: { opacity: 0 },
  };
  return (
    <header className="fixed top-0 w-full flex min-h-screen flex-col items-center justify-center p-24 bg-black">
      <motion.div
        className="flex flex-col max-w-[22.5rem]"
        data-testid="container"
        animate="visible"
        initial="hidden"
        variants={variants}
      >
        <motion.div className="relative h-20" variants={variants}>
          <Image src="/FIFA.svg" alt="FIFA logo" fill />
        </motion.div>
        <motion.span
          className="text-6xl text-gold tracking-[1.5rem] font-black font-roboto mt-4"
          variants={variants}
        >
          PUSKÀS
        </motion.span>
        <motion.span
          className="text-white text-2xl tracking-[0.5rem] text-right"
          variants={variants}
        >
          AWARD
        </motion.span>
        <motion.div
          className="flex justify-center items-center gap-1 mt-10"
          variants={variants}
        >
          <div className="w-[1px] h-4 bg-white animate-scroll origin-top"></div>
        </motion.div>
      </motion.div>
    </header>
  );
}
