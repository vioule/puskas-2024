import { motion } from "framer-motion";

export type Visibility = "visible" | "hidden";

interface PreviewProps {
  preview: boolean;
  year: number;
}

export default function Preview({ preview, year }: PreviewProps) {
  let showPreview: Visibility;
  preview ? (showPreview = "visible") : (showPreview = "hidden");

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
      animate={showPreview}
      initial="hidden"
      variants={variants}
      data-testid="container"
    >
      <video
        id="preview"
        data-testid="video"
        className="absolute top-0 left-0"
        autoPlay
        muted
        playsInline
        loop
        disableRemotePlayback
        preload="auto"
        src={`/preview/${year}-preview.mp4`}
      />
    </motion.div>
  );
}
