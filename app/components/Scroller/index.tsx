"use client";
import data from "@/app/data.json";
import Section from "./Section";
import { motion, MotionValue } from "framer-motion";

interface ScrollerProps {
  skewY: MotionValue<number>;
}

export default function Scroller({ skewY }: ScrollerProps) {
  return (
    <motion.div
      className="relative w-full mt-[100vh] border-t-8 border-white z-20"
      style={{ skewY }}
      data-testid="container"
    >
      {data.map((x) => {
        return <Section key={x.year} year={x.year} />;
      })}
    </motion.div>
  );
}
