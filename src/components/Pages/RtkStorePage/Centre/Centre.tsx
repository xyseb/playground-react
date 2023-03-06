import React, { useState, useEffect } from 'react';
import './Centre.scss';

import { RtkRootState, selectCentre, selectName, selectParams } from '../../../../stores/rtk/RtkStore';
import { useSelector, useDispatch } from 'react-redux'
import { setName, setParams } from './CentreSlice'

function Centre() {
//  const storeCentre = useSelector((state: RtkRootState) => state.centre);
  const storeCentre = useSelector(selectCentre);
  // const storeCentreName = useSelector(selectName);
  // const storeCentreParams = useSelector(selectParams);
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);

  const centreNameElement = (storeCentre.name === undefined)
        ? <h3 className='default'>State CentreContext.Nom = "undefined"</h3>
        : <h3>State CentreContext.Nom = "{storeCentre.name}"</h3>;

  let centreParamElement, centreNameElementChildren
  if (storeCentre.params === undefined) {
    centreParamElement = <h3 className='default'>Paramètres de centre non chargés. Click le bouton 😀</h3>;
  }
  else {
    centreNameElementChildren = Object.entries(storeCentre.params).map((p) => <li key={p[0]}>{p[0]+": "+p[1]}</li>);
    centreParamElement = <ul>{centreNameElementChildren}</ul>;
  }

  useEffect(() => {
    console.log('in rtk::centre::useEffect');
    if (storeCentre.name === undefined)
    {
      setLoading(true);
      dispatch(setName);
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
