"use client";
import data from "@/app/data.json";
import Section from "./Section";
import {
  motion,
  useScroll,
  useVelocity,
  useTransform,
  useSpring,
} from "framer-motion";

export default function Scroller() {
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 60,
    stiffness: 1000,
  });
  const skewY = useTransform(smoothVelocity, [-7000, 7000], [-30, 30]);

  return (
    <motion.div
      className="relative w-full mt-[100vh] bg-black border-t-8 border-white"
      style={{ skewY }}
      data-testid="container"
    >
      {data.map((x) => {
        return <Section key={x.year} year={x.year} />;
      })}
    </motion.div>
  );
}
