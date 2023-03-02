import React, { useContext } from 'react';
import './LoadingSpinner.scss';

import { useAtom } from 'jotai';
import { newLoadingAtom } from '../../../../stores/jotai/jotaiStore';

function LoadingSpinner() {
    const [loading, setLoading] = useAtom(newLoadingAtom);

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
