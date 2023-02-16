import React, { useContext } from 'react';
import { CentreContextClass, CentreContextClassType } from '../../contextsClass/CentreContextClassProvider';
import './LoadingSpinnerClass.scss';

/**
 * Définition des props du composant LoadingSpinner
 */
export interface ILoadingSpinnerOwnProps
{
}

/**
 * Définition du state du composant LoadingSpinner
 */
export interface ILoadingSpinnerState
{
}

/**
 * Définition du composant LoadingSpinner avec state
 * x Component : rendu non identique si les props/states sont les mêmes ou si différence est plus profonde
 * x PureComponent : rendu identique si les props/states sont les mêmes (comparaison superficielle)
 */

class LoadingSpinner extends React.Component<ILoadingSpinnerOwnProps, ILoadingSpinnerState> {

    // To acces context here from this.context
    static contextType: React.Context<CentreContextClassType|null> = CentreContextClass;

    constructor(props: ILoadingSpinnerOwnProps)
    {
        super(props);

        /* Init du state
        this.state = {
            myState: 0
        }; */
    }

    componentDidMount() {
        console.log("Hello");
    }

    componentWillUnmount() {
        console.log("Bye");
    }

    render(): JSX.Element | null | false //JSXNElement
    {
        const centre = this.context as CentreContextClassType;
        return (
            <>
            {centre && centre.loading && (
                <div className="loading-spinner-overlay">
                    <div className="center">
                        <div className="wave"></div>
                        <div className="wave"></div>
                        <div className="wave"></div>
                        <div className="wave"></div>
                        <div className="wave"></div>
                        <div className="wave"></div>
                        <div className="wave"></div>
                        <div className="wave"></div>
                        <div className="wave"></div>
                        <div className="wave"></div>
                    </div>
                </div>
            )}
            </>
        )
    }
}

export default LoadingSpinner;
