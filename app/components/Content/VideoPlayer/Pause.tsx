import { Dispatch, SetStateAction } from "react";
import { VideoPlayerType } from "../../DataProvider";
import { FaPause } from "react-icons/fa6";

interface PauseProps {
  setVideoPlayer: Dispatch<SetStateAction<VideoPlayerType>>;
  videoplayer: VideoPlayerType;
}

export default function Pause({ setVideoPlayer, videoplayer }: PauseProps) {
  return (
    <FaPause
      className="absolute bottom-[0.35rem] left-[0.4rem] text-white opacity-60 hover:cursor-pointer hover:opacity-100"
      size={"1.5rem"}
      onClick={() => {
        setVideoPlayer({
          ...videoplayer,
          play: false,
          pause: true,
        });
      }}
    />
  );
}
