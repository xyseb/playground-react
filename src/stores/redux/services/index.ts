export const getCentreName = () =>
  fetch("http://localhost:8080/centre")
    .then((response) => response.ok && response.json())
    .catch((err) => err);
export const getCentreParams = () =>
  fetch("http://localhost:8080/params")
    .then((response) => response.ok && response.json())
    .catch((err) => err);
