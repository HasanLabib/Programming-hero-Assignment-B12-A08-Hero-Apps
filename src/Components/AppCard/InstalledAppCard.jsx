import React, { useState } from "react";
import { FaStar } from "react-icons/fa6";
import { HiOutlineDownload } from "react-icons/hi";
import { Link } from "react-router";
import { removeInstalledApp } from "../../utility/addToLocalStorage";
import Swal from "sweetalert2";
import { ToastContainer } from "react-toastify";
const InstalledAppCard = ({ app, uninstalled, setUninstalled }) => {
  const { title, size, ratingAvg, downloads_millions, image } = app || {};

  const handleUninstall = (id) => {
    
      Swal.fire({
        title: "Uninstall App",
        text: "Do you want to uninstall this app?",
        icon: "question",
        showDenyButton: true,
        showCancelButton: false,
        confirmButtonText: "Yes",
        denyButtonText: "Not now",
      }).then((result) => {
        if (result.isConfirmed) {
          removeInstalledApp(id);
          setUninstalled(!uninstalled);
          Swal.fire(
            "Uninstalled!",
            `The app ${title} has been uninstalled.`,
            "success"
          );
        } else if (result.isDenied) {
          Swal.fire("The app's uninstallation was canceled.", "", "info");
        }
      });
    
  };
  return (
    <>
      <div className="w-11/12 mx-auto my-4">
        <div className="flex justify-between items-center bg-base-100 p-4 rounded-lg shadow-md mb-4">
          <Link to={`/apps/${app.id}`}>
            <div className="flex items-center gap-4">
              <img src={image} alt={title} className="w-16 h-16 rounded-md" />
              <div>
                <p>{title}</p>
                <div className="flex items-center gap-2 mt-1">
                  <p className="text-sm text-gray-500 flex items-center gap-1">
                    <HiOutlineDownload />
                    <span>{downloads_millions / 1000}B</span>
                  </p>
                  <p className="text-sm text-gray-500 flex items-center gap-1">
                    <FaStar /> <span>{ratingAvg}</span>
                  </p>
                  <p className="text-sm text-gray-500">{size} MB</p>
                </div>
              </div>
            </div>
          </Link>
          <button
            onClick={() => handleUninstall(app.id)}
            className="btn btn-success text-white border-none"
          >
            Uninstall
          </button>
        </div>
      </div>
    </>
  );
};

export default InstalledAppCard;
