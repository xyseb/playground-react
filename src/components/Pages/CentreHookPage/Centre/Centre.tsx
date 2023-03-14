import React, { useContext, useEffect } from 'react';
import './Centre.scss';

import { useCentre } from '../../../../hooks/useCentre'

function Centre() {
  const { hookCentreName, hookCentreParams, getName } = useCentre();
  const centreNameElement = (hookCentreName === undefined)
        ? <h3 className='default'>State hookCentre.Name = "undefined"</h3>
        : <h3>State hookCentre.Name = "{hookCentreName}"</h3>;

  let centreParamElement, centreNameElementChildren
  if (hookCentreParams === undefined) {
    centreParamElement = <h3 className='default'>Paramètres de centre non chargés. Click le bouton 😀</h3>;
  }
  else {
    centreNameElementChildren = Object.entries(hookCentreParams).map((d) => <li>{d[0]+": "+d[1]}</li>);
    centreParamElement = <ul>{centreNameElementChildren}</ul>;
  }

  useEffect(() => {
      console.log('in useEffect');
      if (hookCentreName === undefined)
      {
        getName();
        // console.log('end useEffect');
      }
    }, []);

  return (
    <div className="centre">
      <h1>HookCentreName</h1>
      <p>Requêtes d'API /centre depuis ce composant au <i>componentDidMount()</i> (via hook useEffect).
        <br/>Valeur par défaut explicite si le hook state n'est pas chargé. Valeur du state du hook si chargé.</p>
      {centreNameElement}
      <h1>HookCentreParams</h1>
      <p>Pas de requêtes d'API depuis ce composant au <i>componentDidMount()</i> (via hook useEffect).
        <br />Requêtes d'API /params depuis le composant bouton.
        <br/>Valeur par défaut explicite si le hook state n'est pas chargé. Valeur du state du hook si chargé.</p>
      {centreParamElement}
    </div>
  );
}

export default Centre;
