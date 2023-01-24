import React, { useContext } from 'react';
import { CentreContext, CentreContextType } from '../../../contexts/CentreContextProvider';
import './HomePage.scss';


function HomePage() {
  const { centre } = useContext(CentreContext) as CentreContextType;
  const centreNameElement = (centre.Nom === undefined)
        ? <h3 className='default'>State CentreContext.Nom = "undefined"</h3>
        : <h3>State de CentreContext.Nom = "{centre.Nom}"</h3>;
  const centreParamsElement = (centre.Params === undefined)
        ? <h3 className='default'>State CentreContext.Params = "undefined"</h3>
        : <h3>State CentreContext.Params = "chargés"</h3>;

  return (
    <div className="homepage">
      <h1>CentreContext</h1>
      <p>Pas de requêtes d'API depuis ce composant. Uniquement lecture du context CentreContext.
        <br/>Valeur par défaut explicite si le context n'est pas chargé. Valeur du state du context si chargé.</p>
      {centreNameElement}
      {centreParamsElement}
    </div>
  );
}

export default HomePage;
