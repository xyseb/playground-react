import React, { useContext } from 'react';
import './LoadingSpinner.scss';

import { useRecoilState } from 'recoil'


function LoadingSpinner() {
    const [loading] = useRecoilState(loadingState);

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
