import React, { useContext, useEffect } from 'react';
import './HomePage.scss';

// Context
import { CentreContext, CentreContextType } from '../../../contexts/CentreContextProvider';

// App context
import { AppStateContextContext, ICentre } from '../../../contexts/AppStateContextProvider';

// react-query
import { useQuery } from 'react-query';

//redux
import { useSelector, useStore } from 'react-redux'

// rtk
import { RtkRootState } from '../../../stores/rtk/RtkStore';
//import { useSelector, useDispatch } from 'react-redux'

// swr
import { useSWRConfig } from 'swr';
import { ReduxRootState } from '../../../stores/redux/ReduxStore';

// jotai
import { useAtom } from 'jotai';
import { newCentreNameAtom, newCentreParamAtom } from '../../../stores/jotai/jotaiStore';

// recoil
import { useRecoilValue } from 'recoil';
import { centreNameState, centreParamsState } from '../RecoilStorePage/Centre/Centre';


function HomePage() {

  // Context
  const { centre } = useContext(CentreContext) as CentreContextType;

  const centreNameElement = (centre.Nom === undefined)
        ? <h5 className='default'>CentreName = "undefined"</h5>
        : <h5>CentreName = "{centre.Nom}"</h5>;
  const centreParamsElement = (centre.Params === undefined)
        ? <h5 className='default'>CentreParams = "undefined"</h5>
        : <h5>CentreParams = "chargés"</h5>;


  // SWR
  const { cache } = useSWRConfig();
  const swrName = cache.get('http://localhost:8080/centre')?.data.name;
  const swrParams = cache.get('http://localhost:8080/params')?.data.params;

  const swrCentreNameElement = (swrName === undefined)
        ? <h5 className='default'>Cache de CentreName = "undefined"</h5>
        : <h5>Cache de CentreName = "{swrName}"</h5>;
  const swrCentreParamsElement = (swrParams === undefined)
        ? <h5 className='default'>Cache de CentreParams = "undefined"</h5>
        : <h5>Cache de CentreParams = "chargés"</h5>;




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
  const { isLoading: loadingCentre, error: errorCentre, data: rqstoreCentre } = useQuery(
    'centre',
    () => fetch('http://localhost:8080/centre').then(res => res.json()),
    { staleTime: 60000, }
  );

  const { isLoading: loadingParams, error: errorParams, data: rqstoreCentreParam, isFetching: isCentreFetching,  refetch } = useQuery('centreParams', () =>
  fetch('http://localhost:8080/params').then(res =>
    res.json()
  ), { enabled: false });
  //  const rqstoreCentre = useSelector((state: RtkRootState) => state.centre)
///  const storeCentreParams = useSelector((state: RtkRootState) => state.centre.Params)
  const rqStoreCentreNameElement = (rqstoreCentre === undefined || rqstoreCentre.name === undefined)
        ? <h5 className='default'>Cache de CentreName = "undefined"</h5>
        : <h5>Cache de CentreName = "{rqstoreCentre.name}"</h5>;


  const rqStoreCentreParamsElement = (rqstoreCentreParam === undefined || rqstoreCentreParam.Params === undefined)
        ? <h5 className='default'>Cache de CentreParams = "undefined"</h5>
        : <h5>Cache de CentreParams = "chargés"</h5>;



  // AppStateContext
  const { appStateContext, setAppStateContext, updateAppStateContext } = useContext(AppStateContextContext);
  let ctxCentre: ICentre = {
      name: 'undefined',
      params: undefined
  }
  let ctxCentreName: string = 'not loaded';
  let ctxCentreParams: string = 'not loaded';
  if ('name' in appStateContext) {
    ctxCentreName = (appStateContext.name) ? appStateContext.name : 'undefined';
  }
  if ('params' in appStateContext) {
    ctxCentreName = (appStateContext.params && Object.keys(appStateContext.params).length !== 0) ? 'loaded' : 'undefined';
  }

  const ctxCentreNameElement = <h5 className='default'>CentreName = "{ctxCentreName}"</h5>;
  const ctxCentreParamsElement = <h5 className='default'>CentreName = "{ctxCentreParams}"</h5>;


/*
  // Redux
  const reduxStoreCentre = useStore();
  console.log('Homepage::useStore()');
  console.log(reduxStoreCentre);
  console.log('Homepage::useStore()::getState()');
  console.log(reduxStoreCentre.getState());

const centreName = useSelector((state: ReduxRootState) => state.centreNameReducer[0]);
console.log('Homepage::useSelector(centreName)');
console.log(centreName);
const centreParams = useSelector((state: ReduxRootState) => state.centreParamsReducer);
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
//         ? <h5 className='default'>CentreName = "undefined"</h5>
//         : <h5>CentreName = "{storeCentre.name}"</h5>;
//   const rtkStoreCentreParamsElement = (storeCentre.params === undefined)
//         ? <h5 className='default'>CentreParams = "undefined"</h5>
//         : <h5>CentreParams = "chargés"</h5>;
const reduxStoreCentreNameElement = <h5 className='default'>ReduxStore.name = "{centreName.name}"</h5>;
// console.log('-------------------zzz');
// console.log(centreParams[0].params[0].param0);

const reduxStoreCentreParamsElement = (centreParams[0].params.length <= 1)
    ? <h5 className='default'>RtkStore.params = "{centreParams[0].params[0].param0}"</h5>
    : <h5 className='default'>RtkStore.params = "chargé"</h5>;
*/


  // RTK
  const storeCentre = useSelector((state: RtkRootState) => state.centre)
///  const storeCentreParams = useSelector((state: RtkRootState) => state.centre.Params)
  const rtkStoreCentreNameElement = (storeCentre.name === undefined)
        ? <h5 className='default'>CentreName = "undefined"</h5>
        : <h5>CentreName = "{storeCentre.name}"</h5>;
  const rtkStoreCentreParamsElement = (storeCentre.params === undefined)
        ? <h5 className='default'>CentreParams = "undefined"</h5>
        : <h5>CentreParams = "chargés"</h5>;



  // Recoil
  const recoilAtomCentreName = useRecoilValue(centreNameState);
  const recoilAtomCentreParams = useRecoilValue(centreParamsState);
  
  const recoilStoreCentreNameElement = (recoilAtomCentreName === undefined)
        ? <h5 className='default'>CentreName = "undefined"</h5>
        : <h5>CentreName = "{recoilAtomCentreName}"</h5>;
  const recoilStoreCentreParamsElement = (recoilAtomCentreParams === undefined)
        ? <h5 className='default'>CentreParams = "undefined"</h5>
        : <h5>CentreParams = "chargés"</h5>;



  // Jotai
  const [jotailCentreName] = useAtom(newCentreNameAtom);
  const [jotailCentreParams] = useAtom(newCentreParamAtom);

  const jStoreCentreNameElement = (jotailCentreName === undefined)
        ? <h5 className='default'>CentreName = "undefined"</h5>
        : <h5>CentreName = "{jotailCentreName}"</h5>;
  const jStoreCentreParamsElement = (jotailCentreParams === undefined)
        ? <h5 className='default'>CentreParams = "undefined"</h5>
        : <h5>CentreParams = "chargés"</h5>;



  // Zustand
  const zstoreCentre = {Nom: undefined, Params: undefined}
//  const zstoreCentre = useSelector((state: RtkRootState) => state.centre)
///  const storeCentreParams = useSelector((state: RtkRootState) => state.centre.Params)
  const zStoreCentreNameElement = (zstoreCentre.Nom === undefined)
        ? <h5 className='default'>CentreName = "undefined"</h5>
        : <h5>CentreName = "{zstoreCentre.Nom}"</h5>;
  const zStoreCentreParamsElement = (zstoreCentre.Params === undefined)
        ? <h5 className='default'>CentreParams = "undefined"</h5>
        : <h5>CentreParams = "chargés"</h5>;

  return (
    <div className='homepage'>
        <p className="homepage-header">Pas de requêtes d'API depuis ce composant. Uniquement lecture depuis les context ; store ; cache.
            <br/>Valeur par défaut explicite si non-chargée. Valeur du state du context si chargée.
            <br/>
            <br/>Le but est de pouvoir revenir sur cette page pour voir la persistance des données chargé depuis les autres pages.
        </p>
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
                <h3>App State Context</h3>
                {ctxCentreNameElement}
                {ctxCentreParamsElement}
            </div>
            <div>
                <h3>Redux Store</h3>
                {/* {reduxStoreCentreNameElement}
                {reduxStoreCentreParamsElement} */}
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
