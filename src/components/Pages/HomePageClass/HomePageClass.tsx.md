import React, { useContext } from 'react';
import { CentreContextClass, CentreContextClassType } from '../../../contextsClass/CentreContextClassProvider';
// Import de la feuille de style *si nécessaire*
import './HomePageClass.scss';

import { RootState } from '../../../stores/rtk/RtkStore';
import { useSelector, useDispatch } from 'react-redux'

/**
 * Définition des props du composant HomePageClass
 */
export interface IHomePageClassOwnProps
{
}

/**
 * Définition du composant HomePageClass sans state
 * x Component : rendu non identique si les props sont les mêmes ou si différence est plus profonde
 * x PureComponent : rendu identique si les props sont les mêmes (comparaison superficielle)
 */
export default class HomePageClass extends React.PureComponent<IHomePageClassOwnProps>
{
    // To acces context here from this.context
    static contextType: React.Context<CentreContextClassType|null> = CentreContextClass;

    public render(): JSX.Element | null | false //JSXNElement
    {
        const { centre, loadCentreName } = this.context as CentreContextClassType;

        const centreNameElement = (centre.name === undefined)
              ? <h3 className='default'>State CentreContext.name = "undefined"</h3>
              : <h3>State de CentreContext.name = "{centre.name}"</h3>;
        const centreParamsElement = (centre.params === undefined)
              ? <h3 className='default'>State CentreContext.params = "undefined"</h3>
              : <h3>State CentreContext.params = "chargés"</h3>;

        const storeCentre = useSelector((state: RootState) => state.centre)
        ///  const storeCentreParams = useSelector((state: RootState) => state.centre.params)
        const rtkStoreCentreNameElement = (storeCentre.name === undefined)
              ? <h3 className='default'>State RtkStore.name = "undefined"</h3>
              : <h3>State de RtkStore.name = "{storeCentre.name}"</h3>;
        const rtkStoreCentreParamsElement = (storeCentre.params === undefined)
              ? <h3 className='default'>State RtkStore.params = "undefined"</h3>
              : <h3>State RtkStore.params = "chargés"</h3>;

        return (
            <div className="homepageclass">
                <h1>CentreContext</h1>
                <p>Pas de requêtes d'API depuis ce composant. Uniquement lecture du context CentreContext.
                  <br/>Valeur par défaut explicite si le context n'est pas chargé. Valeur du state du context si chargé.</p>
                {centreNameElement}
                {centreParamsElement}
                <h1>RTK Store</h1>
                <p>Pas de requêtes d'API depuis ce composant. Uniquement lecture du store RTK.
                  <br/>Valeur par défaut explicite si le store n'est pas chargé. Valeur du state du store si chargé.</p>
                {rtkStoreCentreNameElement}
                {rtkStoreCentreParamsElement}
            </div>
        );
    }
}
