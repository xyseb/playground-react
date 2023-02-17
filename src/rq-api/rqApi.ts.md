export function getNomCentre() {
    () => fetch('http://localhost:8080/centre').then(res => res.json())
};