import { motion } from "framer-motion";
import { FaPlay } from "react-icons/fa";
import Image from "next/image";

export default function Poster({ year }: { year: number }) {
  return (
    <motion.div
      className="absolute w-full h-full"
      id="poster"
      initial={{ display: "none" }}
    >
      <Image
        className="absolute top-0 left-0 w-full h-full object-cover object-center"
        src={`/images/${year}.jpg`}
        alt={`poster ${year}`}
        width={800}
        height={450}
      />
      <FaPlay
        className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white opacity-60 hover:cursor-pointer hover:opacity-100"
        size={"5rem"}
      />
    </motion.div>
  );
}
