import React, { useContext } from 'react';
import { CentreContext } from '../../contexts/CentreContextProvider';
import './LoadingSpinner.scss';


function LoadingSpinner(props: any) {
    const centre = useContext(CentreContext)

    return (
        <>
        {props.isReduxLoading || centre && centre.loading && (
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

export default LoadingSpinner;
