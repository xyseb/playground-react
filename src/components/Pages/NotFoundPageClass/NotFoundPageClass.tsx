import React from 'react';

// Import de la feuille de style *si nécessaire*
import "./NotFoundPageClass.scss";

/**
 * Définition des props du composant NotFoundPage
 */
export interface INotFoundPageClassOwnProps
{
}

/**
 * Définition du composant NotFoundPage sans state
 * x Component : rendu non identique si les props sont les mêmes ou si différence est plus profonde
 * x PureComponent : rendu identique si les props sont les mêmes (comparaison superficielle)
 */
export default class NotFoundPageClass extends React.PureComponent<INotFoundPageClassOwnProps>
{
    public render(): JSX.Element | null | false //JSXNElement
    {
        return (
          <div className="notFoundPageClass">
            <h1>404: Page not found</h1>
          </div>
        );
    }
}
