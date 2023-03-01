import { HTMLAttributes, FunctionComponent, ReactNode, createContext, useState, useEffect } from "react";

export interface ICentre
{
    name?: string;
    params?: {};
};

interface IAppStateContext {
  appStateContext: ICentre;
  setAppStateContext: (AppStateContext: ICentre) => void;
  updateAppStateContext: (updatedAppStateContext: ICentre) => void;
}

// create context
export const AppStateContextContext = createContext<IAppStateContext>({
  appStateContext: {},
  setAppStateContext: () => {},
  updateAppStateContext: () => {}
});

interface AppStateContextProviderProps extends HTMLAttributes<Element> {
  children: ReactNode
  // add any custom props, but don't have to specify `children`
}

const AppStateContextProvider: FunctionComponent<AppStateContextProviderProps> = ({ children, ...props }) => {

  // the value that will be given to the context
  const [appStateContext, setAppStateContext] = useState<ICentre>({});
  const [loading, setLoading] = useState(false)

  const updateAppStateContext = (updatedAppStateContext: ICentre) => {
    setLoading(true);
    setAppStateContext({...appStateContext, ...updatedAppStateContext });
    setTimeout(() => setLoading(false), 2000);
  }

  return (
    <AppStateContextContext.Provider value={{appStateContext, setAppStateContext, updateAppStateContext}}>
      {children}
    </AppStateContextContext.Provider>
  );
};

export default AppStateContextProvider;
