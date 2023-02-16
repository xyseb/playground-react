import React, { useState, useContext } from 'react';
// Import de la feuille de style *si nécessaire*
import './ButtonGetCentreClass.scss';

import { CentreContextClassType } from '../../../../contextsClass/CentreContextClassProvider';

/**
 * Définition des props du composant ButtonGetCentreClass
 */
export interface IButtonGetCentreClassOwnProps
{
}

/**
 * Définition du composant ButtonGetCentreClass sans state
 * x Component : rendu non identique si les props sont les mêmes ou si différence est plus profonde
 * x PureComponent : rendu identique si les props sont les mêmes (comparaison superficielle)
 */
export default class ButtonGetCentreClass extends React.PureComponent<IButtonGetCentreClassOwnProps>
{
    public render(): JSX.Element | null | false //JSXNElement
    {
        const { loadCentreParams } = this.context as CentreContextClassType;

        return (
            <button className="button-getcentreclass" onClick={loadCentreParams}>Get Centre Params</button>
        );
    }
}
