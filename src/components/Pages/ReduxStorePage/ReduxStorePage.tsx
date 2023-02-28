// import React, { useState, useEffect, useCallback, useMemo, useContext } from 'react';
// import './ReduxStorePage.scss';

// import Centre from './Centre/Centre';
// import ButtonGetCentre from './ButtonGetCentre/ButtonGetCentre';
// import LoadingSpinner from '../../LoadingSpinner/LoadingSpinner';

// function ReduxStorePage() {

//     useEffect(() => {
//         console.log('in useEffect');
//         if (state.name === undefined)
//         {
//           // console.log('end useEffect');
//           loadCentreName();
//         }
//       }, []);
    
//     return (
//         <div className="CentreContextPage">
//             <LoadingSpinner/>
//             <Centre />
//             <ButtonGetCentre />
//         </div>
//     );
// }

// export default ReduxStorePage;
import React, { useState, useEffect, useCallback, useMemo, useContext } from 'react';
import './ReduxStorePage.scss';

import Centre from './Centre/Centre';
import ButtonGetCentre from './ButtonGetCentre/ButtonGetCentre';

function ReduxStorePage() {
    
    return (
        <div className="ReduxStorePage">
            <Centre />
            <ButtonGetCentre />
        </div>
    );
}

export default ReduxStorePage;
