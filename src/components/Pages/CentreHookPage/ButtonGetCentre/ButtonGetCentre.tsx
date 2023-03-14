import React, { useState, useContext } from 'react';
import './ButtonGetCentre.scss';

import { useCentre } from '../../../../hooks/useCentre'

function ButtonGetCentre() {
  const { getParams } = useCentre();

  function handleClick () { 
    console.log('CLICCCCCC');
    
    getParams() }

  return (
    <button className="button-getcentre" onClick={handleClick}>Get Centre Params</button>
  );
}

export default ButtonGetCentre;
