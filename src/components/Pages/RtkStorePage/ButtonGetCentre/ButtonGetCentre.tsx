import React, { useState, useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RtkRootState } from '../../../../stores/rtk/RtkStore';
import { setParams } from '../Centre/CentreSlice';
import './ButtonGetCentre.scss';


function ButtonGetCentre() {
//  const storeCentre = useSelector((state: RtkRootState) => state.centre);
  const storeCentre = useSelector((state: RtkRootState) => state.centre);
  const dispatch = useDispatch();

  function handleClick ():void { dispatch(setParams) }

  return (
    <button className="button-getcentre" onClick={handleClick}>Get Centre Params</button>
  );
}

export default ButtonGetCentre;
