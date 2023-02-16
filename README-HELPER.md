# Modèle pour composant React

## Modèle pour composant **non** connecté **sans** state

```ts
import * as React from "react";
/* ... Autres imports ici */

// Import de la feuille de style *si nécessaire*
import "./NewComp.scss";

/**
 * Définition des props du composant NewComp
 */
export interface INewCompOwnProps
{
    myProp: string;
    /* ... */
}

/**
 * Définition du composant NewComp sans state
 * x Component : rendu non identique si les props sont les mêmes ou si différence est plus profonde
 * x PureComponent : rendu identique si les props sont les mêmes (comparaison superficielle)
 */
export class NewComp extends React.PureComponent<INewCompOwnProps>
{
    public render(): JSXNElement
    {
        const { myProp } = this.props;

        return <div>Hello {myProp}</div>;
    }
}
```

## Modèle pour composant **non** connecté **avec** state

```ts
import * as React from "react";
/* ... Autres imports ici */

// Import de la feuille de style *si nécessaire*
import "./NewComp.scss";

/**
 * Définition des props du composant NewComp
 */
export interface INewCompOwnProps
{
    myProp: string;
    /* ... */
}

/**
 * Définition du state du composant NewComp
 */
export interface INewCompState
{
    myState: number;
    /* ... */
}

/**
 * Définition du composant NewComp avec state
 * x Component : rendu non identique si les props/states sont les mêmes ou si différence est plus profonde
 * x PureComponent : rendu identique si les props/states sont les mêmes (comparaison superficielle)
 */
export class NewComp extends React.PureComponent<INewCompOwnProps, INewCompState>
{
    constructor(props: INewCompOwnProps)
    {
        super(props);

        /* Init du state */
        this.state = {
            myState: 0
        };
    }

    private onClick(): void
    {
        /* Modif du state */
        this.setState((prevState) => ({
            myState: prevState.myState + 1
        }));
    }

    public render(): JSXNElement
    {
        const { myProp } = this.props;

        return (
            <div onClick={() => this.onClick()}>
                Hello {myProp}, you have {this.state.myState} value(s).
            </div>
        );
    }
}
```

## Modèle pour composant **connecté** avec state

```ts
import * as React from "react";
import { Action, Dispatch } from "redux";
import { MapDispatchToPropsFunction, MapStateToProps } from "react-redux";

// Imports des éléments de l'application
import * as BaseComponents from "@/Components/_Common/BaseComponents";
import { IRootState } from "@/Store/RootReducers";
import { SelectorLogin } from "@/Store/Login/Selectors";

// Import de la feuille de style *si nécessaire*
import "./NewComp.scss";

/**
 * Définition des *props provenant du store* du composant NewComp
 */
interface INewCompStateProps
{
}

/**
 * Définition des props du composant NewComp
 */
interface INewCompOwnProps
{
}

/**
 * Définition des *props provenant des dispatch du store* du composant NewComp
 */
interface INewCompDispatchProps
{
}

/**
 * Définition du state du composant NewComp
 */
interface INewCompState
{
}

/**
 * Type comprenant toutes les props de ce composant
 */
type NewCompProps =
    INewCompStateProps &
    INewCompOwnProps &
    INewCompDispatchProps &
    BaseComponents.ICommonConnectedProps;

/**
 * Définition du composant NewComp connecté avec state
 * x Component : rendu non identique si les props/states sont les mêmes ou si différence est plus profonde
 * x PureComponent : rendu identique si les props/states sont les mêmes (comparaison superficielle)
 *
 * Note : pour un composant connecté, on ne peut souvent pas en faire un PureComponent
 */
class NewCompComponent extends React.Component<NewCompProps, INewCompState>
{
    constructor(props: NewCompProps)
    {
        super(props);

        this.state = {
            /* Init du state */
        };
    }

    public render(): JSXNElement
    {
        return (
            <div></div>
        );
    }
}

/**
 * mapStateToProps permet de lier le store redux aux props du composant
 */
const mapStateToProps: MapStateToProps<INewCompStateProps, INewCompOwnProps, IRootState> =
    (state: IRootState, ownProps: INewCompOwnProps) => ({
        ...SelectorLogin(state),
        /* ... Autres sélecteurs */
    });

/**
 * mapDispatchToProps permet de lier des dispatch pour le store redux aux props du composant
 */
const mapDispatchToProps: MapDispatchToPropsFunction<INewCompDispatchProps, INewCompOwnProps> =
    (dispatch: Dispatch<Action>, ownProps: INewCompOwnProps) => ({
        DoSomething: (): void =>
        {
            dispatch(/* une action */);
        },
    });

/**
 *  Export du composant connecté
 */
export const NewComp: React.ExoticComponent<INewCompOwnProps> =
    BaseComponents.ConnectWithCommonProps(mapStateToProps, mapDispatchToProps)(NewCompComponent);
```