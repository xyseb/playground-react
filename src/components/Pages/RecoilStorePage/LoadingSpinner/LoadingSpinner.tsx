import React, { useContext } from 'react';
import './LoadingSpinner.scss';

import { useRecoilValue } from 'recoil'
import { loadingState } from '../Centre/Centre'


function LoadingSpinner() {
    const loading = useRecoilValue(loadingState);

    return (
        <>
        {loading && (
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
