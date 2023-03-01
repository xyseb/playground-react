// import React, { useState, useEffect, useCallback, useMemo, useContext } from 'react';
// import './JotaiStorePage.scss';

// import Centre from './Centre/Centre';
// import ButtonGetCentre from './ButtonGetCentre/ButtonGetCentre';
// import LoadingSpinner from '../../LoadingSpinner/LoadingSpinner';

// function JotaiStorePage() {

//     useEffect(() => {
//         console.log('in useEffect');
//         if (state.Nom === undefined)
//         {
//           // console.log('end useEffect');
//           loadCentreName();
//         }
//       }, []);
    
//     return (
//         <div className="JotaiStorePage">
//             <LoadingSpinner/>
//             <Centre />
//             <ButtonGetCentre />
//         </div>
//     );
// }

// export default JotaiStorePage;
import React, { useState, useEffect, useCallback, useMemo, useContext } from 'react';
import './JotaiStorePage.scss';

import Centre from './Centre/Centre';
import ButtonGetCentre from './ButtonGetCentre/ButtonGetCentre';
import LoadingSpinner from '../../LoadingSpinner/LoadingSpinner';

function JotaiStorePage() {
    
    return (
        <div className="JotaiStorePage">
            <LoadingSpinner/>
            <Centre />
            <ButtonGetCentre />
        </div>
    );
}

export default JotaiStorePage;
