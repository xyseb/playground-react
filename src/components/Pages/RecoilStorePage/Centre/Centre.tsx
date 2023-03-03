import React, { useState, useEffect } from 'react';
import './Centre.scss';

import { atom, selector, useRecoilCallback, useRecoilState, useRecoilValue } from 'recoil';

const loadingState = atom<boolean>({
  key: 'CentreNameState', // unique ID (with respect to other atoms/selectors)
  default: false, // default value (aka initial value)
});
const centreNameState = atom<string>({
  key: 'CentreNameState', // unique ID (with respect to other atoms/selectors)
  default: undefined, // default value (aka initial value)
});
const centreParamsState = atom<Array<Object>>({
  key: 'CentreParamsState', // unique ID (with respect to other atoms/selectors)
  default: undefined, // default value (aka initial value)
});
// const changeCentreName = useRecoilCallback(({snapshot, set}) => centreName => {
//   snapshot.getLoadable(currentCentreNameQuery()); // prélit les informations utilisateur
//   set(centreNameState, centreName); // change l'utilisateur courant pour commancer un nouveau rendu
// });
const currentCentreNameQuery = selector({
  key: 'CurrentCentreName',
  get: async ({get,getCallback}) => {
    const response = await fetch('http://localhost:8080/centre')
    .then(async response => {
        if (!response.ok) {
            throw Error(response.statusText);
        }
        return await response.json();
    })
    .then(data => getCallback(currentCentreNameQuery => ({set}) => set(data.name)))
    .catch(error => console.log(error));
  },
  set: ({set}, newValue) => set(centreNameState, newValue => { return newValue })
});

const currentCentreParamsQuery = selector({
  key: 'CurrentCentreParams',
  get: async ({get,getCallback}) => {
    const response = await fetch('http://localhost:8080/params')
    .then(async response => {
        if (!response.ok) {
            throw Error(response.statusText);
        }
        return await response.json();
    })
    .then(data => getCallback(currentCentreParamsQuery => ({set}) => set(data.params)))
    .catch(error => console.log(error));
  },
  set: ({set}, newValue) => set(centreParamsState, newValue => { return newValue })
});

function Centre() {
  // const [centreName, setCentreName] = useRecoilState(
  //   centreNameState
  // );

  
  const centreName = useRecoilValue(currentCentreNameQuery);
  const [centreParams, setCentreParams] = useRecoilState(centreParamsState);
  const [loading, setLoading] = useRecoilState(loadingState);

  const centreNameElement = (centreName === undefined)
        ? <h3 className='default'>State CentreContext.Nom = "undefined"</h3>
        : <h3>State CentreContext.Nom = "{centreName}"</h3>;

  let centreParamElement, centreNameElementChildren
  if (centreParams === undefined) {
    centreParamElement = <h3 className='default'>Paramètres de centre non chargés. Click le bouton 😀</h3>;
  }
  else {
    centreNameElementChildren = Object.entries(centreParams).map((d) => <li key={d[0]}>{d[0]+": "+d[1]}</li>);
    centreParamElement = <ul>{centreNameElementChildren}</ul>;
  }

  useEffect(() => {
    console.log('in useEffect');
    if (storeCentre.Nom === undefined)
    {
      setLoading(true);
      dispatch(getNom());
      setTimeout(() => setLoading(false), 2000);
    }
  }, []);


  return (
    <div className="centre">
      <h1>Centre.State.Nom</h1>
      <p>Requêtes d'API /centre depuis ce composant au <i>componentDidMount()</i> (via hook useEffect).
        <br/>Valeur par défaut explicite si le state du centre, synchonisé depuis le store, n'est pas chargé. Valeur du state du centre si chargé.</p>
      {centreNameElement}
      <h1>CentreContext.Params</h1>
      <p>Pas de requêtes d'API depuis ce composant au <i>componentDidMount()</i> (via hook useEffect).
        <br />Requêtes d'API /params depuis le composant bouton.
        <br/>Valeur par défaut explicite si le state du centre, synchonisé depuis le store, n'est pas chargé. Valeur du state du centre si chargé.</p>
      {centreParamElement}
    </div>
  );
}

export default Centre;
