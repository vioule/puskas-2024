"use client";
import data from "@/app/data.json";
import Section from "./Section";
import { motion, MotionValue } from "framer-motion";
import { useContext, useEffect } from "react";
import { AppContext } from "../DataProvider";
import { Visibility } from "../Content/Preview";

interface ScrollerProps {
  skewY: MotionValue<number>;
}

export default function Scroller({ skewY }: ScrollerProps) {
  const { lightbox } = useContext(AppContext);

  useEffect(() => {
    if (lightbox.poster) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [lightbox.poster]);

  let showScroller: Visibility;
  if (lightbox.poster) {
    showScroller = "hidden";
  } else {
    showScroller = "visible";
  }

  const variants = {
    visible: {
      display: "flex",
      opacity: 1,
      transition: {
        delay: 0.5,
      },
    },
    hidden: {
      opacity: 0,
      transitionEnd: {
        display: "none",
      },
    },
  };

  return (
    <motion.div
      className="relative flex flex-col items-center w-full mt-[100vh] border-t-8 border-white"
      style={{ skewY }}
      data-testid="container"
      initial="visible"
      animate={showScroller}
      variants={variants}
      transition={{ duration: 0.5 }}
    >
      {data.map((x) => {
        return <Section key={x.year} data={x} />;
      })}
    </motion.div>
  );
}
