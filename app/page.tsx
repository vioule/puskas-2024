"use client";
import { use, useState } from "react";
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
import DataProvider from "./components/DataProvider";

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
    <main className="bg-black h-[1200vh]">
      <Header skewY={skewY} skewYNeg={skewYNeg} />
      <DataProvider>
        <Content />
        <Scroller skewY={skewY} />
      </DataProvider>
      <Signature />
    </main>
  );
}
