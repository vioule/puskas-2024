import { useContext, useEffect, useTransition } from "react";
import { AnimationSequence, motion, useAnimate } from "framer-motion";
import { AppContext } from "../DataProvider";
import ScrollProgress from "./ScrollProgress";
import { IoClose } from "react-icons/io5";
import Poster from "./Poster";
import Description from "./Description";
import Preview from "./Preview";

export default function Content() {
  const { data, lightbox, setLightbox } = useContext(AppContext);
  const [isPending, startTransition] = useTransition();
  const [scope, animate] = useAnimate();
  let isClickable = "hover:cursor-pointer hover:opacity-100 !important";
  if (isPending) {
    isClickable = "";
  }

  const onClose = () => {
    const reverseSequence: AnimationSequence = [
      ["#curtain-container", { x: "0%" }, { duration: 0.5 }],
      ["#close", { opacity: 0 }, { duration: 0.5, at: 0 }],
      ["#name", { top: "110%", opacity: 0 }, { duration: 0.5, at: 0 }],
      ["#year", { top: "-110%", opacity: 0 }, { duration: 0.5, at: 0 }],
      ["#comp", { top: "110%", opacity: 0 }, { duration: 0.5, at: 0.25 }],
    ];
    if (!isPending) {
      setLightbox({
        ...lightbox,
        poster: false,
      });
      startTransition(async () => {
        await animate(reverseSequence);
        await animate([
          ["#preview", { display: "block" }, { duration: 0 }],
          ["#poster, #description", { display: "none" }, { duration: 0 }],
          ["#watch", { opacity: 1 }, { duration: 0.5, at: 0 }],
          ["#curtain", { width: "0.8%" }, { duration: 0.5, at: 0 }],
          ["#curtain", { height: "0" }, { duration: 0.5 }],
        ]);
      });
    }
  };

  useEffect(() => {
    const playSequence: AnimationSequence = [
      ["#curtain", { height: "100%" }, { duration: 0.5 }],
      ["#curtain", { width: "100%" }, { duration: 0.5 }],
      ["#watch", { opacity: 0 }, { duration: 0.5, at: 0.5 }],
    ];
    if (lightbox.poster) {
      startTransition(async () => {
        await animate(playSequence);
        await animate([
          ["#preview", { display: "none" }, { duration: 0 }],
          ["#poster, #description", { display: "block" }, { duration: 0 }],
          ["#comp, #year", { top: "0", opacity: 1 }, { duration: 0.5, at: 0 }],
          ["#name", { top: "0", opacity: 1 }, { duration: 0.5, at: 0.25 }],
          ["#close", { opacity: 1 }, { duration: 0.5, at: 0 }],
          ["#curtain-container", { x: "110%" }, { duration: 0.5, at: 0 }],
        ]);
      });
    }
  }, [lightbox.poster, animate]);

  return (
    <div className="fixed flex items-center justify-center w-full h-full top-0 p-28">
      <div className="relative w-full max-w-[800px]" ref={scope}>
        <Description data={data} />
        <div className="relative w-full h-0 pb-[56.25%] overflow-hidden">
          <Poster year={data.year} />
          <Preview preview={lightbox.preview} year={data.year} />
          <div className="absolute w-full h-full" id="curtain-container">
            <ScrollProgress />
            <div
              id="curtain"
              className="w-[6px] bg-gold h-0 absolute bottom-0 origin-bottom-left"
            ></div>
          </div>
        </div>
        <motion.span
          className=" block absolute bottom-0 left-0 rotate-[-90deg] text-white w-[56.25%] origin-bottom-left text-center font-roboto font-thin tracking-[0.3rem] max-sm:text-[8px] text-[10px] pb-2"
          id="watch"
        >
          WATCH
        </motion.span>
        <IoClose
          className={`absolute top-[50%] translate-y-[-50%] rotate-[-90deg] left-0 origin-bottom-left text-white opacity-0 ${isClickable}`}
          id="close"
          size={"2.5rem"}
          onClick={onClose}
        />
      </div>
    </div>
  );
}
