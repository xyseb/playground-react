import React, { useEffect } from 'react';
import './Centre.scss';

import { useAtom } from 'jotai';
import { newCentreNameAtom, newCentreParamAtom, newLoadingAtom } from '../../../../stores/jotai/jotaiStore';

function Centre() {
  const [centreName, setCentreName] = useAtom(newCentreNameAtom);
  const [centreParams, setCentreParams] = useAtom(newCentreParamAtom);
  const [loading, setLoading] = useAtom(newLoadingAtom);

  const loadCentreName = async () => {
    await fetch('http://localhost:8080/centre')
    .then(async response => {
        if (!response.ok) {
            throw Error(response.statusText);
        }
        return await response.json();
    })
    .then(data => setCentreName(data.name))
    .catch(error => console.log(error));
  }
 
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
    if (centreName === undefined)
    {
      setLoading(true);
      loadCentreName()
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
