import React, { useState, useEffect, Suspense } from 'react';
import { useQuery } from 'react-query';
import './Centre.scss';

import useSWR, { useSWRConfig } from 'swr';
import LoadingSpinner from '../../../LoadingSpinner/LoadingSpinner';
import ErrorBoundary from '../../../ErrorBoundary/ErrorBoundary.js';
import { ICentre } from '../../../../contexts/CentreContextProvider';



// function getCentreName () {
//   const resource:string = 'http://localhost:8080/centre';

//   const init:{} = {
//     method: 'GET',
//     headers: new Headers([
//       ['Content-Type', 'application/json'],
//       ['Accept', 'application/json']
//     ]),
//     mode: 'cors',
//     cache: 'default'
//   };
//   return (resource:string, init:{}) => fetch(resource, init).then(res => res.json());
// }

// function CentreName {
//   return (
//   );
// }
// type CentreName =
// {
//     Name: string;
// };

function Centre() {

  const { cache } = useSWRConfig();
  //const fetcher = (url:string) => fetch(url).then(res => res.json());
  //const fetcher = (resource:string, init:{}) => fetch(resource, init).then(res => res.json());
  // const { data: centreData, error, isLoading, isValidating, mutate } = useSWR('centre', getCentreName(), { suspense: true});
  const { data: centreData, error, isLoading, isValidating, mutate } = useSWR('http://localhost:8080/centre', { });
  
  const { data: paramsData, error: errorParams, isLoading: isLoadingParams, isValidating: isValidatingParams, mutate: mutateParams } = useSWR('http://localhost:8080/params', { });


// console.log(paramsData);
// console.log(isLoadingParams);
// console.log(errorParams);


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

    //   setTimeout(() => setLoading(false), 3000);
    // }
  }, []);

  if (isLoading) return <>React Query Loading...</>;

  if (error) return <>An error has occurred: + error.message</>;

  if (isLoadingParams) return <>React Query Loading...</>;

  if (errorParams) return <>An error has occurred: + error.message</>;


  return (
    <>
      <div className="centre">
        <h1>Centre.State.Nom</h1>
        <p>Requêtes d'API /centre depuis ce composant au <i>componentDidMount()</i> (via hook useEffect).
          <br/>Valeur par défaut explicite si le state du centre, synchonisé depuis le store, n'est pas chargé. Valeur du state du centre si chargé.</p>
        {/* <ErrorBoundary fallback={<h2>Could not fetch posts.</h2>}>
          <Suspense fallback={<LoadingSpinner/>}> */}
            {/* <CentreName /> */}
            {centreNameElement}
          {/* </Suspense>
        </ErrorBoundary> */}
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
