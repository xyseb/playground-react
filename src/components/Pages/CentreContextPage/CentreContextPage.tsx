import React, { useState, useEffect, useCallback, useMemo, useContext } from 'react';
import './CentreContextPage.scss';

import CentreContextProvider, { CentreContext, CentreContextType } from '../../../contexts/CentreContextProvider';
import Centre from './Centre/Centre';
import ButtonGetCentre from './ButtonGetCentre/ButtonGetCentre';
import LoadingSpinner from '../../LoadingSpinner/LoadingSpinner';

function CentreContextPage() {
    const { centre, loadCentreName } = useContext(CentreContext) as CentreContextType;

    useEffect(() => {
        console.log('in useEffect');
        if (centre.Nom === undefined)
        {
          loadCentreName();
          // console.log('end useEffect');
        }
      }, []);
    
    return (
        <div className="CentreContextPage">
            <LoadingSpinner/>
            <Centre />
            <ButtonGetCentre />
        </div>
    );
}

export default CentreContextPage;
