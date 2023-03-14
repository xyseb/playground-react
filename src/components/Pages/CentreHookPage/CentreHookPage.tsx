import React from 'react';
import './CentreHookPage.scss';

import Centre from './Centre/Centre';
import ButtonGetCentre from './ButtonGetCentre/ButtonGetCentre';
import LoadingSpinner from '../../LoadingSpinner/LoadingSpinner';

function CentreHookPage() {
   
    return (
        <div className="CentreHookPage">
            <div className='container'>
                <LoadingSpinner/>
                <Centre />
                <ButtonGetCentre />
            </div>
        </div>
    );
}

export default CentreHookPage;
