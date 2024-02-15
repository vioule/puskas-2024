import { useContext, useEffect } from "react";
import { motion, useAnimate } from "framer-motion";
import { FaPlay } from "react-icons/fa";
import Image from "next/image";
import { AppContext } from "../DataProvider";

export default function Poster({ year }: { year: number }) {
  const { videoplayer, setVideoPlayer } = useContext(AppContext);
  const [scope, animate] = useAnimate();
  const handleOnClick = () => {
    if (videoplayer.poster) {
      setVideoPlayer({ ...videoplayer, play: true });
    }
  };

  useEffect(() => {
    const hidden = async () => {
      await animate([["#play", { opacity: 0 }, { duration: 0.5 }]]);
      await animate([["#image", { opacity: 0 }, { duration: 0.5 }]]);
      await animate([[scope.current, { display: "none" }, { duration: 0 }]]);
    };
    const appear = async () => {
      await animate([["#play", { opacity: 1 }, { duration: 0 }]]);
      await animate([["#image", { opacity: 1 }, { duration: 0 }]]);
      await animate([[scope.current, { display: "block" }, { duration: 0 }]]);
    };
    if (!videoplayer.poster) {
      hidden();
    } else {
      appear();
    }
  }, [videoplayer.poster, animate, scope]);
  return (
    <div ref={scope}>
      <motion.div
        className="absolute w-full h-full"
        id="poster"
        initial={{ display: "none" }}
      >
        <Image
          className="absolute top-0 left-0 w-full h-full object-cover object-center"
          src={`/images/${year}.jpg`}
          alt={`poster ${year}`}
          id="image"
          width={800}
          height={450}
        />
        <FaPlay
          className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white opacity-60 hover:cursor-pointer hover:opacity-100"
          size={"5rem"}
          id="play"
          onClick={handleOnClick}
        />
      </motion.div>
    </div>
  );
}
