import React from 'react';
// Error boundaries currently have to be classes.
/**
 * Définition des props du composant LoadingSpinner
 */
export interface IErrorBoundaryOwnProps
{
    fallback: JSX.Element;
    children: JSX.Element;
}

export default class ErrorBoundary extends React.Component<IErrorBoundaryOwnProps> {
    state = { hasError: false, error: null };
    static getDerivedStateFromError(error:any) {
        return {
        hasError: true,
        error
        };
    }
    render() {
        if (this.state.hasError) {
        return this.props.fallback;
        }
        return this.props.children;
    }
}