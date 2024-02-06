import { useInView } from "framer-motion";
import { useRef } from "react";

interface SectionProps {
  year: number;
}

export default function Section({ year }: SectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.7, once: false });
  const color = isInView ? "text-white" : "text-gold";
  return (
    <div
      className={`flex justify-center items-center h-screen font-rocksalt text-7xl tracking-[1.5rem] first:mt-[100vh] transition-[color] duration-1000 ease-linear ${color}`}
      ref={ref}
    >
      <span>{year}</span>
    </div>
  );
}
