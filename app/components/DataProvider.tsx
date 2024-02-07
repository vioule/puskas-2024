import { Dispatch, SetStateAction, createContext, useState } from "react";

export type DataType = {
  year: number;
  name: string;
  comp: string;
};

interface IAppContext {
  data: DataType;
  setData: Dispatch<SetStateAction<DataType>>;
  preview: boolean;
  setPreview: Dispatch<SetStateAction<boolean>>;
}

export const dataInitialState = {
  year: 2009,
  name: "cristiano ronaldo",
  comp: "UEFA champions league",
};

export const AppContext = createContext<IAppContext>({
  data: dataInitialState,
  setData: () => {},
  preview: false,
  setPreview: () => {},
});

export default function AppProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [data, setData] = useState<DataType>(dataInitialState);
  const [preview, setPreview] = useState(false);
  return (
    <AppContext.Provider value={{ data, setData, preview, setPreview }}>
      {children}
    </AppContext.Provider>
  );
}
