// import React, { useState, useEffect, useCallback, useMemo, useContext } from 'react';
// import './RtkqStorePage.scss';

// import Centre from './Centre/Centre';
// import ButtonGetCentre from './ButtonGetCentre/ButtonGetCentre';
// import LoadingSpinner from '../../LoadingSpinner/LoadingSpinner';

// function RtkqStorePage() {

//     useEffect(() => {
//         console.log('in useEffect');
//         if (state.Nom === undefined)
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

// export default RtkqStorePage;
import React, { useState, useEffect, useCallback, useMemo, useContext } from 'react';
import './RtkqStorePage.scss';

// import { useGetCentreNameQuery, useGetCentreParamsQuery } from '../../../redux/api/jsonServerApi';

import Centre from './Centre/Centre';
import ButtonGetCentre from './ButtonGetCentre/ButtonGetCentre';
import LoadingSpinner from '../../LoadingSpinner/LoadingSpinner';

function RtkqStorePage() {
    // const {
    //     data: centre = [],
    //     isLoading,
    //     isFetching,
    //     isError,
    //     error,
    //   } = useGetCentreNameQuery(1);

    // const loading = centre.isLoading || centre.isFetching ? true : false;

    // if (centre.isError && error !== undefined) {
    //     console.log({ error });
    //     return <div>{error.status}</div>;
    //     return <div>error</div>;
    // }

    return (
        <div className="CentreContextPage">
            {/* <LoadingSpinner isReduxLoading={loading}/>
            <Centre centreName={centre.Nom} /> */}
            <LoadingSpinner />
            <Centre />
            <ButtonGetCentre />
        </div>
    );
}

export default RtkqStorePage;
