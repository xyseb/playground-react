import { HTMLAttributes, FunctionComponent, ReactNode, createContext, useState, useEffect } from "react";

export interface IAppStateContextState
{
  appName: string;
  updateFromChildState : (stateChildKeyName: string, childState:object) => void
};

// export interface IChildrenState
// {
//     namespace: Map<string, object>;
// };
export interface ICentreState
{
    centreName: string;
    centreParams: Map<string, any>;
};

export type ChildState = ICentreState | undefined

export interface IAppStateContext
{
    contextState: IAppStateContextState
    childrenStates?: Map<string, Map<string, ChildState>>;
};

export type AppStateContextType = {
  contextState: IAppStateContextState
  childrenStates?: Map<string, object>;
};

// create context
export const AppStateContext = createContext<AppStateContextType|null>(null);

interface AppStateContextProviderProps extends HTMLAttributes<Element> {
  children: ReactNode
  // add any custom props, but don't have to specify `children`
}

//type AppState = Record<string, any>[];
// class AppState<T extends Record<string, any>>{
//   public attr:T;

// }

const AppStateContextProvider: FunctionComponent<AppStateContextProviderProps> = ({ children, ...props }) => {

  const updateFromChildState = (stateChildKeyName: string, childState:object) => {
    setLoading(true);
    let stateRecord = {
      childName: stateChildKeyName,
      childState: childState
    }
    setAppStateContext(prevState => ({
      ...prevState,
      stateRecord
    }));
    setTimeout(() => setLoading(false), 3000);
  }

  const appStateDefault: IAppStateContext = {
    contextState: {appName: "myapp", updateFromChildState},
    childrenStates: undefined
  };

  // the value that will be given to the context
  const [appStateContext, setAppStateContext] = useState<IAppStateContext>(appStateDefault);
  const [loading, setLoading] = useState(false)

  // useEffect(() => {
  //   console.log('in useEffect');
  //   if (centre.Nom === undefined)
  //   {
  //     loadCentreName();
  //     // console.log('end useEffect');
  //   }
  // }, []);

  return (
    <AppStateContext.Provider value={appStateContext}>
      {children}
    </AppStateContext.Provider>
  );
};

export default AppStateContextProvider;
