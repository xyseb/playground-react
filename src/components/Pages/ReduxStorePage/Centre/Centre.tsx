import React, { useState, useEffect } from 'react';
import './Centre.scss';

//import {  } from '../../../../stores/redux/ReduxStore';
import { useSelector, useDispatch, useStore } from 'react-redux'
import { FETCH_CENTRENAME_PENDING } from '../../../../stores/redux/constants/ActionTypes'

function Centre() {
  const store = useStore();
  const storeCentre = useStore();
  console.log('CentrePage::useStore()');
  console.log(storeCentre);
  console.log('CentrePage::useStore()::getState()');
  console.log(storeCentre.getState());

const centreName = useSelector((state: any) => state.centreNameReducer[0]);
console.log('CentrePage::useSelector(centreName)');
console.log(centreName);
const centreParams = useSelector((state: any) => state.centreParamsReducer);
console.log('CentrePage::useSelector(centreParams)');
console.log(centreParams);

console.log('----centreName----');
console.log(Array.isArray(centreName));
console.log('----centreParams----');
console.log(Array.isArray(centreParams));

  // const centreName = useSelector((state: any) => state.centreName);
  // const centreParams = useSelector((state: any) => state.centreParams);
  const dispatch = useDispatch();
  console.log('Centre::useSelector()');
  console.log(centreName);  

  const centreNameElement = (centreName.name === undefined)
        ? <h3 className='default'>State CentreContext.name = "undefined"</h3>
        : <h3>State CentreContext.name = "{centreName.name}"</h3>;

  let centreParamElement, centreNameElementChildren
  if (centreParams[0].params === undefined) {
    centreParamElement = <h3 className='default'>Paramètres de centre non chargés. Click le bouton 😀</h3>;
  }
  else {
    let key = -1
    centreNameElementChildren = Object.entries(centreParams[0].params).map((d) => <li key={key++}>{d[0]+": "+d[1]}</li>);
    centreParamElement = <ul>{centreNameElementChildren}</ul>;
  }

  useEffect(() => {
    console.log('-----in useEffect-----');
    if (centreName.name === undefined)
    {
      console.log('Centre::useEffect()::dispatch()');
      dispatch({type: FETCH_CENTRENAME_PENDING});
    }
    console.log('-----out useEffect-----');
  }, []);

  console.log("centreName2: +++++++++++");
  const centreName2 = useSelector((state: any) => state.centreNameReducer[0]);
  console.log(centreName2);
  
  


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
