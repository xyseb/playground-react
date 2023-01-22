// import React, { useState, useEffect, useCallback, useMemo } from 'react';
// import './AccordionPage.scss';

// import { ICentre, CentreContext } from '../../../contexts/CentreContext';
// import Accordion from './Accordion/Accordion';
// import ButtonGetCentre from './ButtonGetCentre/ButtonGetCentre';

// function AccordionPage() {
//     const [centre, setCentre] = useState<ICentre>();
//     const getCentreParams = useCallback(function (centreParams:{}) {
//         setCentre(c => c.Params === undefined ? c.Params = centreParams : c)
//     }, []);

//     const centreValue = useMemo(function () {
//         return {
//             centre: centre,
//             getCentreParams
//         }
//     }, [getCentreParams, centre])

//     useEffect(() =>
//     {
//         fetch('http://localhost:8080/centre')
//             .then(response => {
//                 if (!response.ok) {
//                     throw Error(response.statusText);
//                 }
//                 return response.json();
//             })
//             .then(data => setCentre({Nom: data.name, Params:undefined, getCentreParams}))
//             .catch(error => console.log(error));
//         // axios.get("/api/centres")
//         //     .then((response) =>
//         //     {
//         //         setCentre(response.data);
//         //     })
//         //     .catch((error) =>
//         //     {
//         //         // handle error
//         //         console.log(error);
//         //     });
//         console.log('AccordionPage::useEffect::centre:');
//         console.log(centre);
//     }, []);

//     return (
//         <div className="AccordionPage">
//             <CentreContext.Provider value={centreValue}>
//                 <Accordion />
//                 <ButtonGetCentre />
//             </CentreContext.Provider>
//         </div>
//     );
// }

// export default AccordionPage;
import React, { useState, useEffect, useCallback, useMemo } from 'react';
import './AccordionPage.scss';

import CentreContextProvider from '../../../contexts/CentreContextProvider';
import Accordion from './Accordion/Accordion';
import ButtonGetCentre from './ButtonGetCentre/ButtonGetCentre';
import LoadingSpinner from '../../LoadingSpinner/LoadingSpinner';

function AccordionPage() {
    // const [centre, setCentre] = useState<ICentre>();
    // const getCentreParams = useCallback(function (centreParams:{}) {
    //     setCentre(c => c.Params === undefined ? c.Params = centreParams : c)
    // }, []);

    // const centreValue = useMemo(function () {
    //     return {
    //         centre: centre,
    //         getCentreParams
    //     }
    // }, [getCentreParams, centre])

    // useEffect(() =>
    // {
    //     fetch('http://localhost:8080/centre')
    //         .then(response => {
    //             if (!response.ok) {
    //                 throw Error(response.statusText);
    //             }
    //             return response.json();
    //         })
    //         .then(data => setCentre({Nom: data.name, Params:undefined, getCentreParams}))
    //         .catch(error => console.log(error));
    //     // axios.get("/api/centres")
    //     //     .then((response) =>
    //     //     {
    //     //         setCentre(response.data);
    //     //     })
    //     //     .catch((error) =>
    //     //     {
    //     //         // handle error
    //     //         console.log(error);
    //     //     });
    //     console.log('AccordionPage::useEffect::centre:');
    //     console.log(centre);
    // }, []);

    return (
        <CentreContextProvider>
            <LoadingSpinner/>
            <div className="AccordionPage">
                <Accordion />
                <ButtonGetCentre />
            </div>
        </CentreContextProvider>
    );
}

export default AccordionPage;
