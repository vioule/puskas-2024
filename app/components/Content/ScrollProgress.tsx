import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const smoothVelocity = useSpring(scrollYProgress, {
    damping: 10,
    stiffness: 300,
  });
  return (
    <motion.div
      id="scroll-progress"
      className="w-[0.8%] bg-gold h-full absolute bottom-0 origin-bottom-left"
      style={{ scaleY: smoothVelocity }}
    ></motion.div>
  );
}
