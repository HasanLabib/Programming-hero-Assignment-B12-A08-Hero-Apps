import React from 'react';
import { FourSquare } from 'react-loading-indicators';

const LoadingSpiner = () => {
    return (
        <div className="flex justify-center items-center h-screen">
            <FourSquare color="#5731cc" size="medium" text="" textColor="#9366d8" />
        </div>
    );
};

export default LoadingSpiner;