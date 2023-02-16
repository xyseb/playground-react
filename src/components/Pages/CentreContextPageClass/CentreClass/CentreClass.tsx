import React, { useContext, useEffect } from 'react';
// Import de la feuille de style *si nécessaire*
import './CentreClass.scss';

import { CentreContextClass, CentreContextClassType } from '../../../../contextsClass/CentreContextClassProvider';

/**
 * Définition des props du composant CentreClass
 */
export interface ICentreClassOwnProps
{
}

/**
 * Définition du composant CentreClass sans state
 * x Component : rendu non identique si les props sont les mêmes ou si différence est plus profonde
 * x PureComponent : rendu identique si les props sont les mêmes (comparaison superficielle)
 */
export default class CentreClass extends React.PureComponent<ICentreClassOwnProps>
{
    // To acces context here from this.context
    static contextType: React.Context<CentreContextClassType|null> = CentreContextClass;

    componentDidMount(): void {
      console.log('in useEffect');
      const { centre, loadCentreName } = this.context as CentreContextClassType;
      if (centre.Nom === undefined)
      {
        loadCentreName();
        // console.log('end useEffect');
      }      
    }

    public render(): JSX.Element | null | false //JSXNElement
    {
        const { centre, loadCentreName } = this.context as CentreContextClassType;
        const centreNameElement = (centre.Nom === undefined)
              ? <h3 className='default'>State CentreContext.Nom = "undefined"</h3>
              : <h3>State CentreContext.Nom = "{centre.Nom}"</h3>;
      
        let centreParamElement, centreNameElementChildren
        if (centre.Params === undefined) {
            centreParamElement = <h3 className='default'>Paramètres de centre non chargés. Click le bouton 😀</h3>;
        }
        else {
            centreNameElementChildren = Object.entries(centre.Params).map((d) => <li>{d[0]+": "+d[1]}</li>);
            centreParamElement = <ul>{centreNameElementChildren}</ul>;
        }
    
        return (
          <div className="centreClass">
              <h1>CentreContext.Nom</h1>
              <p>Requêtes d'API /centre depuis ce composant au <i>componentDidMount()</i> (via hook useEffect).
                <br/>Valeur par défaut explicite si le context n'est pas chargé. Valeur du state du context si chargé.</p>
              {centreNameElement}
              <h1>CentreContext.Params</h1>
              <p>Pas de requêtes d'API depuis ce composant au <i>componentDidMount()</i> (via hook useEffect).
                <br />Requêtes d'API /params depuis le composant bouton.
                <br/>Valeur par défaut explicite si le context n'est pas chargé. Valeur du state du context si chargé.</p>
              {centreParamElement}
          </div>
        );
    }
}
