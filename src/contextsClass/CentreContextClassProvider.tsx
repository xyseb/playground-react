import React, { HTMLAttributes, ReactNode, createContext } from "react";

export interface ICentreClass
{
    Nom?: string;
    Params?: {};
};

export type CentreContextClassType = {
  centre: ICentreClass
  loading: boolean
  loadCentreName: () => void
  loadCentreParams: (params: {}) => void
};

// create context
export const CentreContextClass = createContext<CentreContextClassType|null>(null);


/**
 * Définition des props du composant CentreContextProvider
 */
export interface ICentreContextClassProviderOwnProps extends HTMLAttributes<Element> {
  children: ReactNode
}

/**
 * Définition du state du composant CentreContextProvider
 */
export interface ICentreContextClassProviderState
{
  Centre: ICentreClass;
  loading: boolean;
}

/**
 * Définition du composant CentreContextClassProvider avec state
 * x Component : rendu non identique si les props/states sont les mêmes ou si différence est plus profonde
 * x PureComponent : rendu identique si les props/states sont les mêmes (comparaison superficielle)
 */
export class CentreContextClassProvider extends React.PureComponent<ICentreContextClassProviderOwnProps, ICentreContextClassProviderState>
{
    constructor(props: ICentreContextClassProviderOwnProps)
    {
        super(props);

        /* Init du state */
        this.state = {
          Centre: {
            Nom: undefined,
            Params: undefined  
          },
          loading: false
        };
    }

    componentDidMount() {
    //   console.log('in useEffect');
    //   if (centre.Nom === undefined)
    //   {
    //     loadCentreName();
    //     // console.log('end useEffect');
    //   }
    }

    public async loadCentreName() {
      this.setState((prevState) => ({ loading: true }))
  
      await fetch('http://localhost:8080/centre')
      .then(response => {
          if (!response.ok) {
              throw Error(response.statusText);
          }
          return response.json();
      })
      .then(data => this.setState((prevState) => ({ Centre: { Nom:data.name, Params: prevState.Centre.Params } })))
      .catch(error => console.log(error));
      // console.log('centre from loadCentreName');
      // console.log(centre);
  
      setTimeout(() => this.setState((prevState) => ({ loading: true })), 2000);
    }
  
    public async loadCentreParams() {
      this.setState((prevState) => ({ loading: true }))
      await fetch('http://localhost:8080/params')
      .then(response => {
          if (!response.ok) {
              throw Error(response.statusText);
          }
          return response.json();
      })
      .then(data => this.setState((prevState) => ({ Centre: { Nom: prevState.Centre.Nom, Params: data.params } })))
      .catch(error => console.log(error));
      // console.log('centre from loadCentreParams');
      // console.log(centre);
  
      setTimeout(() => this.setState((prevState) => ({ loading: true })), 2000);
    }

    public render(): JSX.Element | null | false //JSXNElement
    {
      const centre = this.state.Centre;
      const loading = this.state.loading;
      const loadCentreName = this.loadCentreName;
      const loadCentreParams = this.loadCentreParams;
       
        return (
          <CentreContextClass.Provider value={{centre, loading, loadCentreName, loadCentreParams}}>
            {this.props.children}
          </CentreContextClass.Provider>
        );
    }
}

export default CentreContextClassProvider;
