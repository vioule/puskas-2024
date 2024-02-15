import { Dispatch, SetStateAction } from "react";
import { VideoPlayerType } from "../../DataProvider";
import { MdOutlineReplay } from "react-icons/md";

interface ReplayProps {
  setVideoPlayer: Dispatch<SetStateAction<VideoPlayerType>>;
  videoplayer: VideoPlayerType;
}

export default function Replay({ setVideoPlayer, videoplayer }: ReplayProps) {
  return (
    <MdOutlineReplay
      className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white opacity-60 hover:cursor-pointer hover:opacity-100"
      size={"3rem"}
      onClick={() => {
        setVideoPlayer({
          ...videoplayer,
          play: true,
          pause: false,
          ended: false,
        });
      }}
    />
  );
}
