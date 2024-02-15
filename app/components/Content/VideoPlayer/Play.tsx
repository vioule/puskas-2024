import { Dispatch, SetStateAction } from "react";
import { VideoPlayerType } from "../../DataProvider";
import { FaPlay } from "react-icons/fa";

interface PlayProps {
  setVideoPlayer: Dispatch<SetStateAction<VideoPlayerType>>;
  videoplayer: VideoPlayerType;
}

export default function Play({ setVideoPlayer, videoplayer }: PlayProps) {
  return (
    <FaPlay
      className="absolute bottom-2 left-2 text-white opacity-60 hover:cursor-pointer hover:opacity-100"
      size={"1.25rem"}
      onClick={() => {
        setVideoPlayer({
          ...videoplayer,
          play: true,
          pause: false,
        });
      }}
    />
  );
}
