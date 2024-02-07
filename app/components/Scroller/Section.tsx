import { useInView } from "framer-motion";
import { useRef, useEffect, useContext } from "react";
import { AppContext, DataType } from "../DataProvider";

interface SectionProps {
  data: DataType;
}

export default function Section({ data }: SectionProps) {
  const ref = useRef(null);
  const { setData, preview, setPreview } = useContext(AppContext);
  const timer = useRef<number | undefined>(undefined);
  const isInView = useInView(ref, { amount: 0.7, once: false });
  const color = isInView ? "text-white" : "text-gold";
  const cursor = preview ? "hover:cursor-pointer" : "";
  useEffect(() => {
    if (isInView) {
      timer.current = window.setTimeout(() => {
        setData(data);
        setPreview(true);
      }, 400);
    } else {
      window.clearTimeout(timer.current);
      setPreview(false);
    }
    return () => clearTimeout(timer.current);
  }, [isInView, setData, data, setPreview]);
  return (
    <div
      className={`flex justify-center items-center w-full h-screen font-rocksalt text-7xl tracking-[1.5rem] first:mt-[100vh] max-w-[800px] transition-[color] duration-1000 ease-linear ${color} ${cursor}`}
      ref={ref}
    >
      <span>{data.year}</span>
    </div>
  );
}
