import React from 'react';
// Import de la feuille de style *si nécessaire*
import './CentreContextPageClass.scss';

import CentreClass from './CentreClass/CentreClass';
import ButtonGetCentreClass from './ButtonGetCentreClass/ButtonGetCentreClass';
import LoadingSpinner from '../../LoadingSpinner/LoadingSpinner';

/**
 * Définition des props du composant NotFoundPage
 */
export interface ICentreContextPageClassOwnProps
{
}

/**
 * Définition du composant NotFoundPage sans state
 * x Component : rendu non identique si les props sont les mêmes ou si différence est plus profonde
 * x PureComponent : rendu identique si les props sont les mêmes (comparaison superficielle)
 */
export default class CentreContextPageClass extends React.PureComponent<ICentreContextPageClassOwnProps>
{
    public render(): JSX.Element | null | false //JSXNElement
    {
        return (
            <div className="CentreContextPageClass">
                <LoadingSpinner/>
                <CentreClass />
                <ButtonGetCentreClass />
            </div>
        );
    }
}
