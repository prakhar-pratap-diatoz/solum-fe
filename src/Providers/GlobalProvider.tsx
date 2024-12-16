import { ReactNode, createContext, useContext, useState } from "react";

export type ContextT = {
  viewType: string;
  setViewType: (value: string) => void;
};

const GlobalProviderConfigContext = createContext<ContextT | undefined>(
  undefined
);

const useGlobalProviderConfig = () => {
  const [viewType, setViewType] = useState<string>(() => {
    return localStorage.getItem("viewType") || "solum-view";
  });

  return {
    viewType,
    setViewType,
  };
};

export const GlobalProvider = ({ children }: { children: ReactNode }) => {
  return (
    <GlobalProviderConfigContext.Provider value={useGlobalProviderConfig()}>
      {children}
    </GlobalProviderConfigContext.Provider>
  );
};

export const useGlobal = () => {
  const context = useContext(GlobalProviderConfigContext);

  if (context === undefined) {
    throw new Error("useGlobal must be used with in app provider");
  }

  return context;
};
