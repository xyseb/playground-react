import { HTMLAttributes, FunctionComponent, ReactNode, createContext, useState, useEffect } from "react";

export interface ICentre
{
    name?: string;
    params?: {};
};

export type CentreContextType = {
  centre: ICentre
  loading: boolean
  loadCentreName: () => void
  loadCentreParams: (params: {}) => void
};

// create context
export const CentreContext = createContext<CentreContextType|null>(null);

interface CentreContextProviderProps extends HTMLAttributes<Element> {
  children: ReactNode
  // add any custom props, but don't have to specify `children`
}

const CentreContextProvider: FunctionComponent<CentreContextProviderProps> = ({ children, ...props }) => {

  const centreStateDefault: ICentre = {
    name: undefined,
    params: undefined
  };

  // the value that will be given to the context
  const [centre, setCentre] = useState<ICentre>(centreStateDefault);
  const [loading, setLoading] = useState(false)

  const loadCentreName = async () => {
    setLoading(true);

    await fetch('http://localhost:8080/centre')
    .then(response => {
        if (!response.ok) {
            throw Error(response.statusText);
        }
        return response.json();
    })
    .then(data => setCentre({name: data.name, params: (centre.params !== undefined) ? centre.params : undefined}))
    .catch(error => console.log(error));
    // console.log('centre from loadCentreName');
    // console.log(centre);

    setTimeout(() => setLoading(false), 3000);
  }

  const loadCentreParams = async () => {
    setLoading(true);
    await fetch('http://localhost:8080/params')
    .then(response => {
        if (!response.ok) {
            throw Error(response.statusText);
        }
        return response.json();
    })
    .then(data => setCentre({name: centre.name, params: data.params}))
    .catch(error => console.log(error));
    // console.log('centre from loadCentreParams');
    // console.log(centre);

    setTimeout(() => setLoading(false), 3000);
  }

  // useEffect(() => {
  //   console.log('in useEffect');
  //   if (centre.name === undefined)
  //   {
  //     loadCentreName();
  //     // console.log('end useEffect');
  //   }
  // }, []);

  return (
    <CentreContext.Provider value={{centre, loading, loadCentreName, loadCentreParams}}>
      {children}
    </CentreContext.Provider>
  );
};

export default CentreContextProvider;
