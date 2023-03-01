const baseURL = 'http://localhost:8080';
//const baseURL = 'https://localhost:3001/api';

export const getCentreName = () =>
  fetch(baseURL + "/centre")
    .then((response) => response.ok && response.json())
    .catch((err) => err);
export const getCentreParams = () =>
  fetch("baseURL + http://localhost:8080/params")
    .then((response) => response.ok && response.json())
    .catch((err) => err);
