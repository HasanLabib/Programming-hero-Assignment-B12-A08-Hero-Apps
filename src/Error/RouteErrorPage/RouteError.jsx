import React from 'react';
import NavBar from '../../Components/NavBar/NavBar';
import Footer from '../../Components/Footer/Footer';
import { Link, Navigate, useNavigate } from 'react-router';

const RouteError = () => {
    let navigate = useNavigate();
    return (
      <div className="flex flex-col min-h-screen">
        <NavBar />
        <div className="flex-grow flex flex-col items-center justify-center">
          <img src="../error-404.png" alt="404 Error" />
          <h1 className="text-5xl font-bold mt-4 text-center">
            Oops, page not found!
          </h1>
          <p className="text-center mt-4">
            The page you are looking for is not available.
          </p>
          <button
            onClick={() => navigate(-1)}
            className="my-4 btn bg-gradient-to-br from-[#632EE3] to-[#9F62F2] text-white border-none w-fit"
          >
            Go back!
          </button>
        </div>
        <div className="bg-[#001931]">
          <Footer />
        </div>
      </div>
    );
};

export default RouteError;