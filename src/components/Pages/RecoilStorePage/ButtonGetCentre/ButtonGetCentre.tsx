import React, { useState, useContext } from 'react';
import './ButtonGetCentre.scss';

import { useRecoilValue, useSetRecoilState } from 'recoil';
import { centreParamsState, currentCentreParamsQueryState, loadingState } from '../Centre/Centre';

function ButtonGetCentre() {
  const setCentreParams = useSetRecoilState(centreParamsState);
//  const query = useSetRecoilState(currentCentreParamsQueryState)
  console.log('Centre::Button::setCentreParams');
  console.log(setCentreParams);
  
  const setLoading = useSetRecoilState(loadingState)

  function handleClick () {
    console.log('clicked');
    setLoading(true)
    const response = fetch('http://localhost:8080/params')
    .then(async response => {
        if (!response.ok) {
            throw Error(response.statusText);
        }
        return await response.json();
    })
    .then(data => setCentreParams(data.params))
    .catch(error => console.log(error));
//    setCentreParams(s => ({...s, query}))    
//    query(undefined)    
    setTimeout(() => setLoading(false), 2000);
  }

  return (
    <button className="button-getcentre" onClick={handleClick}>Get Centre Params</button>
  );
}

export default ButtonGetCentre;
