import React, { useState, useContext } from 'react';
import { QueryClient, QueryClientProvider, useQueryClient, useQuery } from 'react-query';

import './ButtonGetCentre.scss';

import { ICentre, CentreContext, CentreContextType } from '../../../../contexts/CentreContextProvider';

function ButtonGetCentre() {

  const [enabledQuery, setEnabledQuery] = useState(false);
  const toggleBoolean = (bool: boolean) => { return setEnabledQuery(!bool); };

  const { isLoading, error, data, refetch } = useQuery('centreParams', () =>
  fetch('http://localhost:8080/params').then(res =>
    res.json()
  ), { enabled: enabledQuery });

  const centre = data || { Name: undefined, Params: undefined };


  return (
    <button className="button-getcentre" onClick={ () => toggleBoolean(enabledQuery) }>Get Centre Params</button>
  );
}

export default ButtonGetCentre;
