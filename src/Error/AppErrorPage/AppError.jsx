import React from 'react';
import NavBar from '../../Components/NavBar/NavBar';
import Footer from '../../Components/Footer/Footer';
import { Link, Navigate, useNavigate } from 'react-router';

const AppError = () => {
    let navigate = useNavigate();
    return (

        <div className="flex-grow flex flex-col items-center justify-center">
          <img src="../App-Error.png" alt="App Error" />
          <h1 className="text-5xl font-bold mt-4 text-center">
            OPPS!! APP NOT FOUND!
          </h1>
          <p className="text-center mt-4">
            The App you are requesting is not found on our system. please try
            another apps
          </p>
          <button
            onClick={() => navigate(-1)}
            className="mt-4 btn bg-gradient-to-br from-[#632EE3] to-[#9F62F2] text-white border-none w-fit"
          >
            Go back!
          </button>
        </div>

    );
};

export default AppError;