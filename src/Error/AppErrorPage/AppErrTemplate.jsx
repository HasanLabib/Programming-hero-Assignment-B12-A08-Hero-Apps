import React from 'react';

const AppErrTemplate = () => {
    return (
      <>
        <img src="../App-Error.png" alt="App Error" />
        <h1 className="text-5xl font-bold mt-4 text-center">
          OPPS!! APP NOT FOUND!
        </h1>
        <p className="text-center mt-4">
          The App you are requesting is not found on our system. please try
          another apps
        </p>
      </>
    );
};

export default AppErrTemplate;