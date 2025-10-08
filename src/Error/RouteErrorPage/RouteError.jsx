import React from 'react';
import NavBar from '../../Components/NavBar/NavBar';
import Footer from '../../Components/Footer/Footer';

const RouteError = () => {
    return (
      <div className="flex flex-col min-h-screen">
        <NavBar />
        <div className="flex-grow flex flex-col items-center justify-center">
          <h1>404 - Not Found</h1>
          <p>The page you are looking for does not exist.</p>
        </div>
        <Footer />
      </div>
    );
};

export default RouteError;