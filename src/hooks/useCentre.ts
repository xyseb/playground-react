import { useCallback, useState } from 'react'

export const useCentre = () => {
  const [hookCentreName, setHookCentreName] = useState(undefined);
  const [hookCentreParams, setHookCentreParams] = useState(undefined);

  const getName = useCallback(async () => {
    await fetch('http://localhost:8080/centre')
    .then(response => {
        if (!response.ok) {
            throw Error(response.statusText);
        }
        return response.json();
    })
    .then(data => setHookCentreName(data.name))
    .catch(error => console.log(error));
  }, []);

  const getParams = useCallback(async () => {
    await fetch('http://localhost:8080/params')
    .then(response => {
        if (!response.ok) {
            throw Error(response.statusText);
        }
        return response.json();
    })
    .then(data => setHookCentreParams(data.params))
    .catch(error => console.log(error));
  }, []);
  return { hookCentreName, setHookCentreName, hookCentreParams, setHookCentreParams, getName, getParams };
};