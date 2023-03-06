import React, { useState, useEffect } from 'react';
import './Centre.scss';

import { RtkRootState } from '../../../../stores/rtk/RtkStore';
import { useSelector, useDispatch } from 'react-redux'
import { getNom, getParams } from './CentreSlice'
import { useApplicationState } from '../../../../stores/zustand/store';

function Centre() {
  const { name, params } = useApplicationState();

  const [loading, setLoading] = useState(false);

  const centreNameElement = (name === undefined)
        ? <h3 className='default'>State CentreContext.Nom = "undefined"</h3>
        : <h3>State CentreContext.Nom = "{name}"</h3>;

  let centreParamElement, centreNameElementChildren
  if (params === undefined) {
    centreParamElement = <h3 className='default'>Paramètres de centre non chargés. Click le bouton 😀</h3>;
  }
  else {
    centreNameElementChildren = Object.entries(params).map((d) => <li>{d[0]+": "+d[1]}</li>);
    centreParamElement = <ul>{centreNameElementChildren}</ul>;
  }

  useEffect(() => {
    console.log('in useEffect');
    if (name === undefined)
    {
      setLoading(true);
      //dispatch(getNom());
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
