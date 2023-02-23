import React, { useContext, useEffect } from 'react';
import './HomePage.scss';

//import { RootState } from '../../../stores/redux/ReduxStore';
//import { RootState } from '../../../stores/rtk/RtkStore';
import { useSelector, useStore } from 'react-redux'


function HomePage() {

  // Redux
    const storeCentre = useStore();
    console.log('Homepage::useStore()');
    console.log(storeCentre);
    console.log('Homepage::useStore()::getState()');
    console.log(storeCentre.getState());

  const centreName = useSelector((state: any) => state.centreNameReducer[0]);
  console.log('Homepage::useSelector(centreName)');
  console.log(centreName);
  const centreParams = useSelector((state: any) => state.centreParamsReducer);
  console.log('Homepage::useSelector(centreParams)');
  console.log(centreParams);

//   const {centreName, centreParams} = useSelector((state: any) => ({
//     ...state.centreNameReducer,
//     ...state.centreParamsReducer
//   }));
//   const {centreName, centreParams} = useSelector((state: any) => state);
//    console.log('Homepage::useSelector(centre)');
//    console.log(centreName);
//    console.log(centreParams);
  
  //const storeCentre = useSelector((state) => state.centre)
  ////  const storeCentreParams = useSelector((state: RootState) => state.centre.params)
  //   const rtkStoreCentreNameElement = (storeCentre.name === undefined)
  //         ? <h5 className='default'>RtkStore.name = "undefined"</h5>
  //         : <h5>State de RtkStore.name = "{storeCentre.name}"</h5>;
  //   const rtkStoreCentreParamsElement = (storeCentre.params === undefined)
  //         ? <h5 className='default'>RtkStore.params = "undefined"</h5>
  //         : <h5>State RtkStore.params = "chargés"</h5>;
  const reduxStoreCentreNameElement = <h5 className='default'>RtkStore.name = "{centreName.name}"</h5>;
  const reduxStoreCentreParamsElement = (centreParams[0].params.length <= 1)
      ? <h5 className='default'>RtkStore.params = "{centreParams[0].params[0]}"</h5>
      : <h5 className='default'>RtkStore.params = "chargé"</h5>;


//   // RTK
//   const storeCentre = useSelector((state: RootState) => state.centre)
// ///  const storeCentreParams = useSelector((state: RootState) => state.centre.params)
//   const rtkStoreCentreNameElement = (storeCentre.name === undefined)
//         ? <h5 className='default'>RtkStore.name = "undefined"</h5>
//         : <h5>State de RtkStore.name = "{storeCentre.name}"</h5>;
//   const rtkStoreCentreParamsElement = (storeCentre.params === undefined)
//         ? <h5 className='default'>RtkStore.params = "undefined"</h5>
//         : <h5>State RtkStore.params = "chargés"</h5>;

  return (
    <div className='homepage'>
    <p className="homepage-header">Pas de requêtes d'API depuis ce composant. Uniquement lecture depuis les context ; store ; cache.
          <br/>Valeur par défaut explicite si non-chargée. Valeur du state du context si chargée.
          <br/>
          <br/>Le but est de pouvoir revenir sur cette page pour voir la persistance des données chargé depuis les autres pages.</p>
    <div className="homepage-parts">
      <div>
      <h3>Redux Store</h3>
      {reduxStoreCentreNameElement}
      {reduxStoreCentreParamsElement}
      </div>
      {/* <div>
      <h3>RTK Store</h3>
      {rtkStoreCentreNameElement}
      {rtkStoreCentreParamsElement}
      </div> */}
    </div>
    </div>
  );
}

export default HomePage;
