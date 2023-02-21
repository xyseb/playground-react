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

        const centreNameElement = (centre.Nom === undefined)
              ? <h3 className='default'>State CentreContext.Nom = "undefined"</h3>
              : <h3>State de CentreContext.Nom = "{centre.Nom}"</h3>;
        const centreParamsElement = (centre.Params === undefined)
              ? <h3 className='default'>State CentreContext.Params = "undefined"</h3>
              : <h3>State CentreContext.Params = "chargés"</h3>;

        const storeCentre = useSelector((state: RootState) => state.centre)
        ///  const storeCentreParams = useSelector((state: RootState) => state.centre.Params)
        const rtkStoreCentreNameElement = (storeCentre.Nom === undefined)
              ? <h3 className='default'>State RtkStore.Nom = "undefined"</h3>
              : <h3>State de RtkStore.Nom = "{storeCentre.Nom}"</h3>;
        const rtkStoreCentreParamsElement = (storeCentre.Params === undefined)
              ? <h3 className='default'>State RtkStore.Params = "undefined"</h3>
              : <h3>State RtkStore.Params = "chargés"</h3>;

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
