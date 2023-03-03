// import React, { useState, useEffect, useCallback, useMemo, useContext } from 'react';
// import './RecoilStorePage.scss';

// import Centre from './Centre/Centre';
// import ButtonGetCentre from './ButtonGetCentre/ButtonGetCentre';
// import LoadingSpinner from '../../LoadingSpinner/LoadingSpinner';

// function RecoilStorePage() {

//     useEffect(() => {
//         console.log('in useEffect');
//         if (state.Nom === undefined)
//         {
//           // console.log('end useEffect');
//           loadCentreName();
//         }
//       }, []);
    
//     return (
//         <div className="RecoilStorePage">
//             <LoadingSpinner/>
//             <Centre />
//             <ButtonGetCentre />
//         </div>
//     );
// }

// export default RecoilStorePage;
import React, { useState, useEffect, useCallback, useMemo, useContext } from 'react';
import './RecoilStorePage.scss';

import Centre from './Centre/Centre';
import ButtonGetCentre from './ButtonGetCentre/ButtonGetCentre';
import LoadingSpinner from './LoadingSpinner/LoadingSpinner';

function RecoilStorePage() {
    
    return (
        <div className="RecoilStorePage">
            <LoadingSpinner/>
            <Centre />
            <ButtonGetCentre />
        </div>
    );
}

export default RecoilStorePage;
