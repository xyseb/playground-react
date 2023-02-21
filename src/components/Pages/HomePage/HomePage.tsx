import React, { useContext, useEffect } from 'react';
import { CentreContext, CentreContextType } from '../../../contexts/CentreContextProvider';
import './HomePage.scss';

import { RootState } from '../../../stores/rtk/RtkStore';
import { useSelector, useDispatch } from 'react-redux'

import { useSWRConfig } from 'swr';

function HomePage() {

  // Context
  const { centre } = useContext(CentreContext) as CentreContextType;

  const centreNameElement = (centre.Nom === undefined)
        ? <h5 className='default'>CentreContext.Nom = "undefined"</h5>
        : <h5>State de CentreContext.Nom = "{centre.Nom}"</h5>;
  const centreParamsElement = (centre.Params === undefined)
        ? <h5 className='default'>CentreContext.Params = "undefined"</h5>
        : <h5>State CentreContext.Params = "chargés"</h5>;


  // SWR
  const { cache } = useSWRConfig();
  const swrName = cache.get('http://localhost:8080/centre')?.data.name;
  const swrParams = cache.get('http://localhost:8080/params')?.data.params;

  const swrCentreNameElement = (swrName === undefined)
        ? <h5 className='default'>SWC Cache de Centre.Nom = "undefined"</h5>
        : <h5>State de CentreContext.Nom = "{swrName}"</h5>;
  const swrCentreParamsElement = (swrParams === undefined)
        ? <h5 className='default'>SWC Cache de Centre.Params = "undefined"</h5>
        : <h5>State CentreContext.Params = "chargés"</h5>;


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

  const rqstoreCentre = useSelector((state: RootState) => state.centre)
///  const storeCentreParams = useSelector((state: RootState) => state.centre.Params)
  const rqStoreCentreNameElement = (rqstoreCentre.Nom === undefined)
        ? <h5 className='default'>RQ Cache de Centre.Nom = "undefined"</h5>
        : <h5>State de RtkStore.Nom = "{rqstoreCentre.Nom}"</h5>;
  const rqStoreCentreParamsElement = (rqstoreCentre.Params === undefined)
        ? <h5 className='default'>RQ Cache de Centre.Params = "undefined"</h5>
        : <h5>State RtkStore.Params = "chargés"</h5>;


  // RTK
  const storeCentre = useSelector((state: RootState) => state.centre)
///  const storeCentreParams = useSelector((state: RootState) => state.centre.Params)
  const rtkStoreCentreNameElement = (storeCentre.Nom === undefined)
        ? <h5 className='default'>RtkStore.Nom = "undefined"</h5>
        : <h5>State de RtkStore.Nom = "{storeCentre.Nom}"</h5>;
  const rtkStoreCentreParamsElement = (storeCentre.Params === undefined)
        ? <h5 className='default'>RtkStore.Params = "undefined"</h5>
        : <h5>State RtkStore.Params = "chargés"</h5>;


  // Recoil
  const recoilstoreCentre = useSelector((state: RootState) => state.centre)
///  const storeCentreParams = useSelector((state: RootState) => state.centre.Params)
  const recoilStoreCentreNameElement = (recoilstoreCentre.Nom === undefined)
        ? <h5 className='default'>RecoilStore.Nom = "undefined"</h5>
        : <h5>State de RtkStore.Nom = "{recoilstoreCentre.Nom}"</h5>;
  const recoilStoreCentreParamsElement = (recoilstoreCentre.Params === undefined)
        ? <h5 className='default'>RecoilStore.Params = "undefined"</h5>
        : <h5>State RtkStore.Params = "chargés"</h5>;


  // Jotai
  const jstoreCentre = useSelector((state: RootState) => state.centre)
///  const storeCentreParams = useSelector((state: RootState) => state.centre.Params)
  const jStoreCentreNameElement = (jstoreCentre.Nom === undefined)
        ? <h5 className='default'>JotaiStore.Nom = "undefined"</h5>
        : <h5>State de RtkStore.Nom = "{jstoreCentre.Nom}"</h5>;
  const jStoreCentreParamsElement = (jstoreCentre.Params === undefined)
        ? <h5 className='default'>JotaiStore.Params = "undefined"</h5>
        : <h5>State RtkStore.Params = "chargés"</h5>;


  // Zustand
  const zstoreCentre = useSelector((state: RootState) => state.centre)
///  const storeCentreParams = useSelector((state: RootState) => state.centre.Params)
  const zStoreCentreNameElement = (zstoreCentre.Nom === undefined)
        ? <h5 className='default'>ZustandStore.Nom = "undefined"</h5>
        : <h5>State de RtkStore.Nom = "{zstoreCentre.Nom}"</h5>;
  const zStoreCentreParamsElement = (zstoreCentre.Params === undefined)
        ? <h5 className='default'>ZustandStore.Params = "undefined"</h5>
        : <h5>State RtkStore.Params = "chargés"</h5>;

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
      <div>
        <h3>RQ Cache Store</h3>
        {rqStoreCentreNameElement}
        {rqStoreCentreParamsElement}
      </div>
      <div>
        <h3>SWR Cache Store</h3>
        {swrCentreNameElement}
        {swrCentreParamsElement}
      </div>
      <div>
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
      </div>
    </div>
    </div>
  );
}

export default HomePage;
