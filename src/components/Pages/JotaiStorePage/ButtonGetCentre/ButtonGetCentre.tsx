import React, { useState, useContext } from 'react';
import './ButtonGetCentre.scss';

import { ICentre, CentreContext, CentreContextType } from '../../../../contexts/CentreContextProvider';
import { useAtom } from 'jotai';
import { newCentreParamAtom, newLoadingAtom } from '../../../../stores/jotai/jotaiStore';

function ButtonGetCentre() {
  const [centreParams, setCentreParams] = useAtom(newCentreParamAtom);
  const [loading, setLoading] = useAtom(newLoadingAtom);

  const loadCentreParams = async () => {
    setLoading(true);
    await fetch('http://localhost:8080/params')
    .then(response => {
        if (!response.ok) {
            throw Error(response.statusText);
        }
        return response.json();
    })
    .then(data => setCentreParams(data.params))
    .catch(error => console.log(error));
    // console.log('centre from loadCentreParams');
    // console.log(centre);

    setTimeout(() => setLoading(false), 2000);
  }

  return (
    <button className="button-getcentre" onClick={loadCentreParams}>Get Centre Params</button>
  );
}

export default ButtonGetCentre;
