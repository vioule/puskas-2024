import { useContext, useState } from "react";
import { motion } from "framer-motion";
import { AppContext } from "../DataProvider";

type Animate = "visible" | "hidden";

export default function Content() {
  const { data, preview } = useContext(AppContext);
  let animate: Animate;
  preview ? (animate = "visible") : (animate = "hidden");

  const variants = {
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
    hidden: { opacity: 0 },
  };

  return (
    <motion.div
      className="fixed flex items-center justify-center top-0 w-full h-full p-28"
      animate={animate}
      initial="hidden"
      variants={variants}
    >
      <div className="w-full max-w-[800px]">
        <video
          autoPlay
          muted
          playsInline
          loop
          disableRemotePlayback
          preload="auto"
          src={`/preview/${data.year}-preview.mp4`}
        />
      </div>
    </motion.div>
  );
}
