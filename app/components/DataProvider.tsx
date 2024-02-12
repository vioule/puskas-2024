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

interface IAppContext {
  data: DataType;
  setData: Dispatch<SetStateAction<DataType>>;
  lightbox: LightboxType;
  setLightbox: Dispatch<SetStateAction<LightboxType>>;
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

export const AppContext = createContext<IAppContext>({
  data: dataInitialState,
  setData: () => {},
  lightbox: lightboxInitialState,
  setLightbox: () => {},
});

export default function AppProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [data, setData] = useState<DataType>(dataInitialState);
  const [lightbox, setLightbox] = useState(lightboxInitialState);
  return (
    <AppContext.Provider value={{ data, setData, lightbox, setLightbox }}>
      {children}
    </AppContext.Provider>
  );
}
