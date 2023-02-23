import React, { useState, useEffect } from 'react';
import './Centre.scss';

import { RootState } from '../../../../stores/rtk/RtkStore';
import { useSelector, useDispatch } from 'react-redux'
import { getNom, getParams } from './CentreSlice'

function Centre() {
  // const storeCentreNom: string|undefined = useSelector((state: RootState) => state.centre.name);
  // const storeCentreParams: {}|undefined = useSelector((state: RootState) => state.centre.params);
  const storeCentre = useSelector((state: RootState) => state.centre);
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);

  const centreNameElement = (storeCentre.name === undefined)
        ? <h3 className='default'>State CentreContext.name = "undefined"</h3>
        : <h3>State CentreContext.name = "{storeCentre.name}"</h3>;

  let centreParamElement, centreNameElementChildren
  if (storeCentre.params === undefined) {
    centreParamElement = <h3 className='default'>Paramètres de centre non chargés. Click le bouton 😀</h3>;
  }
  else {
    centreNameElementChildren = Object.entries(storeCentre.params).map((d) => <li>{d[0]+": "+d[1]}</li>);
    centreParamElement = <ul>{centreNameElementChildren}</ul>;
  }

  useEffect(() => {
    console.log('in useEffect');
    if (storeCentre.name === undefined)
    {
      setLoading(true);
      dispatch(getNom());
      setTimeout(() => setLoading(false), 3000);
    }
  }, []);


  return (
    <div className="centre">
      <h1>Centre.State.name</h1>
      <p>Requêtes d'API /centre depuis ce composant au <i>componentDidMount()</i> (via hook useEffect).
        <br/>Valeur par défaut explicite si le state du centre, synchonisé depuis le store, n'est pas chargé. Valeur du state du centre si chargé.</p>
      {centreNameElement}
      <h1>CentreContext.params</h1>
      <p>Pas de requêtes d'API depuis ce composant au <i>componentDidMount()</i> (via hook useEffect).
        <br />Requêtes d'API /params depuis le composant bouton.
        <br/>Valeur par défaut explicite si le state du centre, synchonisé depuis le store, n'est pas chargé. Valeur du state du centre si chargé.</p>
      {centreParamElement}
    </div>
  );
}

export default Centre;
