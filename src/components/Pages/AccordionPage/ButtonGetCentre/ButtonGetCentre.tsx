import React, { useState, useContext } from 'react';
import './ButtonGetCentre.scss';

import { ICentre, CentreContext, CentreContextType } from '../../../../contexts/CentreContextProvider';

function ButtonGetCentre() {
  const {loadCentreParams} = useContext(CentreContext) as CentreContextType;
//  const [centre, setCentre] = useState<ICentre>({});

  // function fetchParams (e:any) {
  //   fetch('http://localhost:8080/params')
  //   .then(response => {
  //       if (!response.ok) {
  //           throw Error(response.statusText);
  //       }
  //       return response.json();
  //   })
  //   .then(data => dataCentre.Params = data[0])
  //   .catch(error => console.log(error));

  //   console.log('ButtonGetCentre::dataCentre:');
  //   console.log(dataCentre);
  // }

  return (
    <button className="button-getcentre" onClick={loadCentreParams}>Get Centre Params</button>
  );
}

export default ButtonGetCentre;
