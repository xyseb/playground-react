import React, { useState, useEffect } from 'react';
import { useQuery } from 'react-query';
import './Centre.scss';

function Centre() {

  const [loading, setLoading] = useState(false);
  //const [enabledQuery, setEnabledQuery] = useState(false);
//  const [centre, setCentre] = useState({Name: undefined})
//  const [params, setParams] = useState({Params: undefined})


  //const queryClient = useQueryClient();
  const { isLoading: loadingCentre, error: errorCentre, data: centreData } = useQuery(
    'centre',
    () => fetch('http://localhost:8080/centre').then(res => res.json()),
    { staleTime: 60000, }
  );

  //const centre = centreData || { Name: undefined };

console.log(centreData);
console.log(loadingCentre);
console.log(errorCentre);

  //const toggleBoolean = (bool: boolean) => { return setEnabledQuery(!bool); };

  const { isLoading: loadingParams, error: errorParams, data: paramsData, isFetching: isCentreFetching,  refetch } = useQuery('centreParams', () =>
  fetch('http://localhost:8080/params').then(res =>
    res.json()
  ), { enabled: false });

  //const params = paramsData || { Params: undefined };

  // Rerender si requete retourner
  

  const centreNameElement = (centreData === undefined || centreData.name === undefined)
        ? <h3 className='default'>State CentreContext.Nom = "undefined"</h3>
        : <h3>State CentreContext.Nom = "{centreData.name}"</h3>;

  let centreParamElement, centreNameElementChildren
  if (paramsData === undefined || paramsData.params === undefined) {
    centreParamElement = <h3 className='default'>Paramètres de centre non chargés. Click le bouton 😀</h3>;
  }
  else {
    let countKey: number = 0;
    centreNameElementChildren = Object.entries(paramsData.params).map((d) => <li key={countKey++}>{d[0]+": "+d[1]}</li>);
    centreParamElement = <ul>{centreNameElementChildren}</ul>;
  }

  useEffect(() => {
    console.log('in useEffect');
    // if (centre.Name === undefined)
    // {
    //   setLoading(true);

    //   const { isLoading, error, data } = useQuery('repoData', () =>
    //     fetch('https://localhost:8080/centre').then(res =>
    //       res.json()
    //   ))

    //   setTimeout(() => setLoading(false), 2000);
    // }
  }, []);

  if (loadingCentre) return <>React Query Loading...</>;

  if (errorCentre) return <>An error has occurred: + error.message</>;

  if (loadingParams) return <>React Query Loading...</>;

  if (errorParams) return <>An error has occurred: + error.message</>;


  return (
    <>
      <div className="centre">
        <h1>Centre.State.Nom</h1>
        <p>Requêtes d'API /centre depuis ce composant au <i>componentDidMount()</i> (via hook useEffect).
          <br/>Valeur par défaut explicite si le state du centre, synchonisé depuis le store, n'est pas chargé. Valeur du state du centre si chargé.</p>
        {isCentreFetching && <div className="loader">Loading...</div>}
        {centreNameElement}
        <h1>CentreContext.Params</h1>
        <p>Pas de requêtes d'API depuis ce composant au <i>componentDidMount()</i> (via hook useEffect).
          <br />Requêtes d'API /params depuis le composant bouton.
          <br/>Valeur par défaut explicite si le state du centre, synchonisé depuis le store, n'est pas chargé. Valeur du state du centre si chargé.</p>
        {centreParamElement}
      </div>
      {/* <button className="button-getcentre" onClick={ () => toggleBoolean(enabledQuery) }>Get Centre Params</button> */}
    </>
  );
}

export default Centre;
