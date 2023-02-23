import React, { useContext, useEffect } from 'react';
import { CentreContext, CentreContextType } from '../../../contexts/CentreContextProvider';
import './HomePage.scss';

//import { RootState } from '../../../stores/redux/ReduxStore';
import { RootState } from '../../../stores/rtk/RtkStore';
import { useSelector, useDispatch } from 'react-redux'

import { useSWRConfig } from 'swr';

function HomePage() {

  // Context
  const { centre } = useContext(CentreContext) as CentreContextType;

  const centreNameElement = (centre.name === undefined)
        ? <h5 className='default'>CentreContext.name = "undefined"</h5>
        : <h5>State de CentreContext.name = "{centre.name}"</h5>;
  const centreParamsElement = (centre.params === undefined)
        ? <h5 className='default'>CentreContext.params = "undefined"</h5>
        : <h5>State CentreContext.params = "chargés"</h5>;


  // SWR
  const { cache } = useSWRConfig();
  const swrName = cache.get('http://localhost:8080/centre')?.data.name;
  const swrParams = cache.get('http://localhost:8080/params')?.data.params;

  const swrCentreNameElement = (swrName === undefined)
        ? <h5 className='default'>SWC Cache de Centre.name = "undefined"</h5>
        : <h5>State de CentreContext.name = "{swrName}"</h5>;
  const swrCentreParamsElement = (swrParams === undefined)
        ? <h5 className='default'>SWC Cache de Centre.params = "undefined"</h5>
        : <h5>State CentreContext.params = "chargés"</h5>;


  // React-Query
  // Our state to store fetched cache data
  // const [cacheData, setCacheData] = React.useState();

  // // Function to get all cache data
  // const getAllCacheData = async () => {
  //   var url = 'http://localhost:8080'
  
  //   // List of all caches present in browser
  //   let names = await caches.keys()
  
  //   let cacheDataArray: any[] = []
  
  //   // Iterating over the list of caches
  //   names.forEach(async(name) => {
  
  //     // Opening that particular cache
  //     const cacheStorage = await caches.open(name);
  
  //     // Fetching that particular cache data
  //     const cachedResponse = await cacheStorage.match(url);
  //     console.log('rq:::');
  //     console.log(cachedResponse);
  //     var data = (cachedResponse) ? await cachedResponse.json() : null;
  
  //     // Pushing fetched data into our cacheDataArray
  //     cacheDataArray.push(data);
  //     setCacheData(data);
  //   })
  // };

  // getAllCacheData();
  // console.log('Homepage cache rq');
  // console.log(cacheData);

  // useEffect(() => {
  //   getAllCacheData();
  // console.log('Homepage cache rq');
  // console.log(cacheData);
  // }, []);

//   const rqstoreCentre = useSelector((state: RootState) => state.centre)
// ///  const storeCentreParams = useSelector((state: RootState) => state.centre.params)
//   const rqStoreCentreNameElement = (rqstoreCentre.name === undefined)
//         ? <h5 className='default'>RQ Cache de Centre.name = "undefined"</h5>
//         : <h5>State de RtkStore.name = "{rqstoreCentre.name}"</h5>;
//   const rqStoreCentreParamsElement = (rqstoreCentre.params === undefined)
//         ? <h5 className='default'>RQ Cache de Centre.params = "undefined"</h5>
//         : <h5>State RtkStore.params = "chargés"</h5>;


//   // RTK
//   const storeCentre = useSelector((state: RootState) => state.centre)
// ///  const storeCentreParams = useSelector((state: RootState) => state.centre.params)
//   const rtkStoreCentreNameElement = (storeCentre.name === undefined)
//         ? <h5 className='default'>RtkStore.name = "undefined"</h5>
//         : <h5>State de RtkStore.name = "{storeCentre.name}"</h5>;
//   const rtkStoreCentreParamsElement = (storeCentre.params === undefined)
//         ? <h5 className='default'>RtkStore.params = "undefined"</h5>
//         : <h5>State RtkStore.params = "chargés"</h5>;


//   // Recoil
//   const recoilstoreCentre = useSelector((state: RootState) => state.centre)
// ///  const storeCentreParams = useSelector((state: RootState) => state.centre.params)
//   const recoilStoreCentreNameElement = (recoilstoreCentre.name === undefined)
//         ? <h5 className='default'>RecoilStore.name = "undefined"</h5>
//         : <h5>State de RtkStore.name = "{recoilstoreCentre.name}"</h5>;
//   const recoilStoreCentreParamsElement = (recoilstoreCentre.params === undefined)
//         ? <h5 className='default'>RecoilStore.params = "undefined"</h5>
//         : <h5>State RtkStore.params = "chargés"</h5>;


//   // Jotai
//   const jstoreCentre = useSelector((state: RootState) => state.centre)
// ///  const storeCentreParams = useSelector((state: RootState) => state.centre.params)
//   const jStoreCentreNameElement = (jstoreCentre.name === undefined)
//         ? <h5 className='default'>JotaiStore.name = "undefined"</h5>
//         : <h5>State de RtkStore.name = "{jstoreCentre.name}"</h5>;
//   const jStoreCentreParamsElement = (jstoreCentre.params === undefined)
//         ? <h5 className='default'>JotaiStore.params = "undefined"</h5>
//         : <h5>State RtkStore.params = "chargés"</h5>;


//   // Zustand
//   const zstoreCentre = useSelector((state: RootState) => state.centre)
// ///  const storeCentreParams = useSelector((state: RootState) => state.centre.params)
//   const zStoreCentreNameElement = (zstoreCentre.name === undefined)
//         ? <h5 className='default'>ZustandStore.name = "undefined"</h5>
//         : <h5>State de RtkStore.name = "{zstoreCentre.name}"</h5>;
//   const zStoreCentreParamsElement = (zstoreCentre.params === undefined)
//         ? <h5 className='default'>ZustandStore.params = "undefined"</h5>
//         : <h5>State RtkStore.params = "chargés"</h5>;

  return (
    <div className='homepage'>
    <p className="homepage-header">Pas de requêtes d'API depuis ce composant. Uniquement lecture depuis les context ; store ; cache.
          <br/>Valeur par défaut explicite si non-chargée. Valeur du state du context si chargée.
          <br/>
          <br/>Le but est de pouvoir revenir sur cette page pour voir la persistance des données chargé depuis les autres pages.</p>
    <div className="homepage-parts">
      <div>
        <h3>CentreContext</h3>
        {centreNameElement}
        {centreParamsElement}
      </div>
      {/* <div>
        <h3>RQ Cache Store</h3>
        {rqStoreCentreNameElement}
        {rqStoreCentreParamsElement}
      </div> */}
      <div>
        <h3>SWR Cache Store</h3>
        {swrCentreNameElement}
        {swrCentreParamsElement}
      </div>
      {/* <div>
      <h3>RTK Store</h3>
      {rtkStoreCentreNameElement}
      {rtkStoreCentreParamsElement}
      </div>
      <div>
      <h3>Recoil Store</h3>
      {recoilStoreCentreNameElement}
      {recoilStoreCentreParamsElement}
      </div>
      <div>
      <h3>Jotai Store</h3>
      {jStoreCentreNameElement}
      {jStoreCentreParamsElement}
      </div>
      <div>
      <h3>Zustand Store</h3>
      {zStoreCentreNameElement}
      {zStoreCentreParamsElement}
      </div> */}
    </div>
    </div>
  );
}

export default HomePage;
