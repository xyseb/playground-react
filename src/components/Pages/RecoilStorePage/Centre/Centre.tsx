import React, { useState, useEffect } from 'react';
import './Centre.scss';

//import { atom, selector, useRecoilCallback, useRecoilState as useAtomValueAsSubscriberWillRerender, useRecoilValue as useAtomValue } from 'recoil';
import { atom, DefaultValue, selector, useRecoilCallback, useRecoilState, useRecoilValue } from 'recoil';

export const loadingState = atom<boolean>({
  key: 'loadingState', // unique ID (with respect to other atoms/selectors)
  default: false, // default value (aka initial value)
});
const centreNameState = atom<string | undefined>({
  key: 'CentreNameState', // unique ID (with respect to other atoms/selectors)
  default: undefined, // default value (aka initial value)
});
export const centreParamsState = atom<Array<Object> | undefined>({
  key: 'CentreParamsState', // unique ID (with respect to other atoms/selectors)
  default: undefined, // default value (aka initial value)
});
// const changeCentreName = useRecoilCallback(({snapshot, set}) => centreName => {
//   snapshot.getLoadable(currentCentreNameQuery()); // prélit les informations utilisateur
//   set(centreNameState, centreName); // change l'utilisateur courant pour commencer un nouveau rendu
// });

// const currentCentreNameQuery = selector({
//   key: 'CurrentCentreName',
//   get: async ({get,getCallback}) => {
//     const response = await fetch('http://localhost:8080/centre')
//     .then(async response => {
//         if (!response.ok) {
//             throw Error(response.statusText);
//         }
//         return await response.json();
//     })
//     .then(data => getCallback(currentCentreNameQuery => ({set}) => set(data.name)))
//     .catch(error => console.log(error));
//   },
//   set: ({set}, newValue) => set(centreNameState, newValue => { return newValue })
// });

// const currentCentreParamsQuery = selector({
//   key: 'CurrentCentreParams',
//   get: async ({get,getCallback}) => {
//     const response = await fetch('http://localhost:8080/params')
//     .then(async response => {
//         if (!response.ok) {
//             throw Error(response.statusText);
//         }
//         return await response.json();
//     })
//     .then(data => getCallback(currentCentreParamsQuery => ({set}) => set(data.params)))
//     .catch(error => console.log(error));
//   },
//   set: ({set}, newValue) => set(centreParamsState, newValue => { return newValue })
// });

export const currentCentreParamsQueryState = selector({
  key: 'CurrentCentreParams',
  get: ({get}) => get(centreParamsState),
  set: ({set}) =>  async () => {
    //const state = get(centreParamsState)
    const response = await fetch('http://localhost:8080/params')
    .then(async response => {
        if (!response.ok) {
            throw Error(response.statusText);
        }
        return await response.json();
    })
    .then(data => set(centreParamsState, data.params))
    .catch(error => console.log(error));
  }
});
// export const currentCentreParamsQueryState = selector({
//   key: 'CurrentCentreParams',
//   get: async ({get}) => {
//     if (get(centreParamsState) === undefined) {
//       return undefined
//     }
//     else {
//       const response = await fetch('http://localhost:8080/params')
//       .then(async response => {
//           if (!response.ok) {
//               throw Error(response.statusText);
//           }
//           return await response.json();
//       })
//       .then(data => {return data.params})
//       .catch(error => console.log(error));
//     }
//   }
// });

export const currentCentreNameQueryState = selector({
  key: 'CurrentCentreName',
  get: ({get}) => get(centreNameState),
  set: ({set}) => async () => {
    const response = await fetch('http://localhost:8080/centre')
    .then(async response => {
        if (!response.ok) {
            throw Error(response.statusText);
        }
        return await response.json();
    })
    .then(data => set(centreNameState, data.name))
    .catch(error => console.log(error));
  }
});


function Centre() {
  // const [centreName, setCentreName] = useRecoilState(
  //   centreNameState
  // );

  // soucription à l'atom (impliquera un render au changement)
  const [centreName, setCentreName] = useRecoilState(centreNameState);
  const [centreParams, setCentreParams] = useRecoilState(centreParamsState);
  //const centreParams = useRecoilValue(centreParamsState);
  const [loading, setLoading] = useRecoilState(loadingState);

console.log('centre::Recoil::centreNameState::centreName');
console.log(centreName);

console.log('centre::Recoil::centreParamsState::centreParams');
console.log(centreParams);


  const centreNameElement = (centreName === undefined)
        ? <h3 className='default'>State CentreName = "undefined"</h3>
        : <h3>State CentreName = "{centreName}"</h3>;

  let centreParamElement, centreNameElementChildren;
  if (centreParams === undefined) {
    centreParamElement = <h3 className='default'>Paramètres de centre non chargés. Click le bouton 😀</h3>;
  }
  else {
    centreNameElementChildren = Object.entries(centreParams).map((d) => <li key={d[0]}>{d[0]+": "+d[1]}</li>);
    centreParamElement = <ul>{centreNameElementChildren}</ul>;
  }

  useEffect(() => {
    console.log('in useEffect');
    if (centreName === undefined)
    {
      setLoading(true);
      const response = fetch('http://localhost:8080/centre')
        .then(async response => {
            if (!response.ok) {
                throw Error(response.statusText);
            }
            return await response.json();
        })
        .then(data => setCentreName(data.name))
        .catch(error => console.log(error));
      setTimeout(() => setLoading(false), 2000);
    }
  }, []);


  return (
    <div className="centre">
      <h1>Centre.State.Name</h1>
      <p>Requêtes d'API /centre depuis ce composant au <i>componentDidMount()</i> (via hook useEffect).
        <br/>Valeur par défaut explicite si le state du centre, synchonisé depuis le store, n'est pas chargé. Valeur du state du centre si chargé.</p>
      {centreNameElement}
      <h1>Centre.State.Params</h1>
      <p>Pas de requêtes d'API depuis ce composant au <i>componentDidMount()</i> (via hook useEffect).
        <br />Requêtes d'API /params depuis le composant bouton.
        <br/>Valeur par défaut explicite si le state du centre, synchonisé depuis le store, n'est pas chargé. Valeur du state du centre si chargé.</p>
      {centreParamElement}
    </div>
  );
}

export default Centre;
