import React, { useState, useContext } from 'react';
import { QueryClient, QueryClientProvider, useQueryClient, useQuery } from 'react-query';

import './ButtonGetCentre.scss';

import { ICentre, CentreContext, CentreContextType } from '../../../../contexts/CentreContextProvider';
import useSWR from 'swr';

function ButtonGetCentre() {

  const [enabledQuery, setEnabledQuery] = useState(false);
  const toggleBoolean = (bool: boolean) => { return setEnabledQuery(!bool); };

  const fetcher = (url:string) => fetch(url).then(res => res.json());
  //const fetcher = (resource:string, init:{}) => fetch(resource, init).then(res => res.json());
  // const { data: centreData, error, isLoading, isValidating, mutate } = useSWR('centre', getCentreName(), { suspense: true});
  const { data: centreParams, error, isLoading, isValidating, mutate, } = useSWR('http://localhost:8080/params', fetcher, { });

console.log('SWR Button');
console.log(centreParams);
console.log(isLoading);
console.log(error);

  // const { isLoading, error, data, refetch } = useQuery('centreParams', () =>
  // fetch('http://localhost:8080/params').then(res =>
  //   res.json()
  // ), { enabled: enabledQuery });

  //const centre = data || { Name: undefined, Params: undefined };


  return (
    <button className="button-getcentre" onClick={ () => toggleBoolean(enabledQuery) }>Get Centre Params</button>
  );
}

export default ButtonGetCentre;
