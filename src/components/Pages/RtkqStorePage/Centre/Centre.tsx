import React, { useState, useEffect } from 'react';
import './Centre.scss';

import { useGetCentreQuery } from '../../../../redux/api/CentreNameApiSlice';
import { useGetCentreParamsQuery } from '../../../../redux/api/CentreParamsApiSlice';
//import { RootState } from '../../../../stores/store';
import { useSelector, useDispatch } from 'react-redux'
import { getNom, getParams } from './CentreSlice'

function Centre(props: any) {
  // const storeCentreNom: string|undefined = useSelector((state: RootState) => state.centre.Nom);
  // const storeCentreParams: {}|undefined = useSelector((state: RootState) => state.centre.Params);
//  const storeCentre = useSelector((state: RootState) => state.centre);
//  const dispatch = useDispatch();
  
  const centreName = props.centreName;

  const {
    data: centre = [],
  } = useGetCentreQuery(null);

  const {
    data: centreParams = [],
    isLoading,
    isFetching,
    isError,
    error,
  } = useGetCentreParamsQuery(null);

  const [loading, setLoading] = useState(false);

  const centreNameElement = (centreName.Nom === undefined)
        ? <h3 className='default'>State Centre.Nom = "undefined"</h3>
        : <h3>State CentreContext.Nom = "{centreName.Nom}"</h3>;

  let centreParamElement, centreNameElementChildren
  if (centreParams === undefined) {
    centreParamElement = <h3 className='default'>Paramètres de centre non chargés. Click le bouton 😀</h3>;
  }
  else {
    centreNameElementChildren = Object.entries(centreParams).map((d) => <li>{d[0]+": "+d[1]}</li>);
    centreParamElement = <ul>{centreNameElementChildren}</ul>;
  }

  useEffect(() => {
    // console.log('in useEffect');
    // if (storeCentre.Nom === undefined)
    // {
    //   setLoading(true);
    //   dispatch(getNom());
    //   setTimeout(() => setLoading(false), 3000);
    // }
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
