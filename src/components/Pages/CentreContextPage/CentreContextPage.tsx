import React from 'react';
import './CentreContextPage.scss';

import Centre from './Centre/Centre';
import ButtonGetCentre from './ButtonGetCentre/ButtonGetCentre';
import LoadingSpinner from '../../LoadingSpinner/LoadingSpinner';

function CentreContextPage() {
   
    return (
        <div className="CentreContextPage">
            <div className='container'>
                <LoadingSpinner/>
                <Centre />
                <ButtonGetCentre />
            </div>
        </div>
    );
}

export default CentreContextPage;
