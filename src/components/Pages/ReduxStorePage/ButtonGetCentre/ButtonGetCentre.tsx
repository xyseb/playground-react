import React, { useState, useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FETCH_CENTRENAME_PENDING } from '../../../../stores/redux/constants/ActionTypes'

import './ButtonGetCentre.scss';

//import { ICentre, CentreContext, CentreContextType } from '../../../../contexts/CentreContextProvider';

function ButtonGetCentre() {
//  const {loadCentreParams} = useContext(CentreContext) as CentreContextType;

  // return (
  //   <button className="button-getcentre" onClick={loadCentreParams}>Get Centre Params</button>
  // );

  const centreParams = useSelector((state: any) => state.centreParams);
  const dispatch = useDispatch();
  console.log('ButtonGetCentre::useSelector()');
  console.log(centreParams);  


  const handleClick = () => {
    console.log('Centre::handleClick()::dispatch()');
    console.log(centreParams);
    dispatch({type: FETCH_CENTRENAME_PENDING})
  }

  
  return (
    <button className="button-getcentre" onClick={handleClick}>Get Centre Params</button>
  );
}

export default ButtonGetCentre;
