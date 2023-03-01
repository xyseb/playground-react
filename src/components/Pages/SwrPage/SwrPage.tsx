// import React, { useState, useEffect, useCallback, useMemo, useContext } from 'react';
// import './RtkStorePage.scss';

// import Centre from './Centre/Centre';
// import ButtonGetCentre from './ButtonGetCentre/ButtonGetCentre';
// import LoadingSpinner from '../../LoadingSpinner/LoadingSpinner';

// function RtkStorePage() {

//     useEffect(() => {
//         console.log('in useEffect');
//         if (state.Nom === undefined)
//         {
//           // console.log('end useEffect');
//           loadCentreName();
//         }
//       }, []);
    
//     return (
//         <div className="SwrPage">
//             <LoadingSpinner/>
//             <Centre />
//             <ButtonGetCentre />
//         </div>
//     );
// }

// export default RtkStorePage;
import React, { useState, useEffect, useCallback, useMemo, useContext } from 'react';
import './SwrPage.scss';

import Centre from './Centre/Centre';
import ButtonGetCentre from './ButtonGetCentre/ButtonGetCentre';
// import LoadingSpinner from '../../LoadingSpinner/LoadingSpinner';

function ReactQueryPage() {
    
    return (
        <div className="SwrPage">
            {/* <LoadingSpinner/> */}
            <Centre />
            <ButtonGetCentre />
        </div>
    );
}

export default ReactQueryPage;
