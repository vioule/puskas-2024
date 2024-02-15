import { Dispatch, SetStateAction, createContext, useState } from "react";

export type DataType = {
  year: number;
  name: string;
  comp: string;
};

export type LightboxType = {
  preview: boolean;
  poster: boolean;
};

export type VideoPlayerType = {
  poster: boolean;
  play: boolean;
  pause: boolean;
  ended: boolean;
  loading: boolean;
};

interface IAppContext {
  data: DataType;
  setData: Dispatch<SetStateAction<DataType>>;
  lightbox: LightboxType;
  setLightbox: Dispatch<SetStateAction<LightboxType>>;
  videoplayer: VideoPlayerType;
  setVideoPlayer: Dispatch<SetStateAction<VideoPlayerType>>;
}

export const dataInitialState: DataType = {
  year: 2009,
  name: "cristiano ronaldo",
  comp: "UEFA champions league",
};

export const lightboxInitialState: LightboxType = {
  preview: false,
  poster: false,
};

export const videoplayerInitialState: VideoPlayerType = {
  poster: true,
  play: false,
  pause: false,
  ended: false,
  loading: false,
};

export const AppContext = createContext<IAppContext>({
  data: dataInitialState,
  setData: () => {},
  lightbox: lightboxInitialState,
  setLightbox: () => {},
  videoplayer: videoplayerInitialState,
  setVideoPlayer: () => {},
});

export default function AppProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [data, setData] = useState(dataInitialState);
  const [lightbox, setLightbox] = useState(lightboxInitialState);
  const [videoplayer, setVideoPlayer] = useState(videoplayerInitialState);
  return (
    <AppContext.Provider
      value={{
        data,
        setData,
        lightbox,
        setLightbox,
        videoplayer,
        setVideoPlayer,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
