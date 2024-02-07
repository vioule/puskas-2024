"use client";
import Content from "./components/Content";
import Header from "./components/Header";
import Scroller from "./components/Scroller";
import Signature from "./components/Signature";
import {
  motion,
  useScroll,
  useVelocity,
  useTransform,
  useSpring,
} from "framer-motion";

export default function Home() {
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 60,
    stiffness: 1000,
  });
  const skewY = useTransform(smoothVelocity, [-7000, 7000], [-30, 30]);
  const skewYNeg = useTransform(smoothVelocity, [-7000, 7000], [30, -30]);
  return (
    <main className="bg-black">
      <Header skewY={skewY} skewYNeg={skewYNeg} />
      <Content />
      <Scroller skewY={skewY} />
      <Signature />
    </main>
  );
}
