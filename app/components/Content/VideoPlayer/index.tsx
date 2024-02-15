import { useContext, useRef, useEffect } from "react";
import { AppContext } from "../../DataProvider";
import Play from "./Play";
import Pause from "./Pause";
import Loading from "./Loading";
import Replay from "./Replay";

export default function VideoPlayer({ year }: { year: number }) {
  const { videoplayer, setVideoPlayer } = useContext(AppContext);
  const ref = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    if (ref.current) {
      if (videoplayer.play) {
        ref.current.play();
      } else if (videoplayer.pause) {
        ref.current.pause();
      }
    }
  }, [videoplayer.pause, videoplayer.play]);
  return (
    <div className="absolute w-full h-full hidden" id="video">
      <video
        ref={ref}
        data-testid="video"
        className="absolute top-0 left-0 w-full h-full"
        playsInline
        disableRemotePlayback
        preload="none"
        src={`/video/${year}.mp4`}
        poster={`/images/${year}.jpg`}
        onWaiting={() =>
          setVideoPlayer({
            ...videoplayer,
            loading: true,
            play: false,
            pause: false,
          })
        }
        onCanPlay={() =>
          setVideoPlayer({
            ...videoplayer,
            loading: false,
            play: true,
            pause: false,
            poster: false,
          })
        }
        onPlay={() =>
          setVideoPlayer({
            ...videoplayer,
            loading: false,
            play: true,
            pause: false,
            poster: false,
          })
        }
        onEnded={() =>
          setVideoPlayer({
            ended: true,
            loading: false,
            play: false,
            pause: false,
            poster: false,
          })
        }
      />
      {videoplayer.pause && (
        <Play setVideoPlayer={setVideoPlayer} videoplayer={videoplayer} />
      )}
      {videoplayer.play && (
        <Pause setVideoPlayer={setVideoPlayer} videoplayer={videoplayer} />
      )}
      {videoplayer.loading && <Loading />}
      {videoplayer.ended && (
        <Replay setVideoPlayer={setVideoPlayer} videoplayer={videoplayer} />
      )}
    </div>
  );
}
