// import React, { useState, useEffect, useCallback, useMemo, useContext } from 'react';
// import './ZustandStorePage.scss';

// import Centre from './Centre/Centre';
// import ButtonGetCentre from './ButtonGetCentre/ButtonGetCentre';
// import LoadingSpinner from '../../LoadingSpinner/LoadingSpinner';

// function ZustandStorePage() {

//     useEffect(() => {
//         console.log('in useEffect');
//         if (state.Nom === undefined)
//         {
//           // console.log('end useEffect');
//           loadCentreName();
//         }
//       }, []);
    
//     return (
//         <div className="ZustandStorePage">
//             <LoadingSpinner/>
//             <Centre />
//             <ButtonGetCentre />
//         </div>
//     );
// }

// export default ZustandStorePage;
import React, { useState, useEffect, useCallback, useMemo, useContext } from 'react';
import './ZustandStorePage.scss';

import Centre from './Centre/Centre';
import ButtonGetCentre from './ButtonGetCentre/ButtonGetCentre';
import LoadingSpinner from '../../LoadingSpinner/LoadingSpinner';

function ZustandStorePage() {
    
    return (
        <div className="ZustandStorePage">
            <LoadingSpinner/>
            <Centre />
            <ButtonGetCentre />
        </div>
    );
}

export default ZustandStorePage;
