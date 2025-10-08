import React, { useState } from "react";
import useAppHook from "../../hooks/useAppHook/useAppHook";
import AppCard from "../AppCard/AppCard";
import { Link } from "react-router";

const TopAppsSection = () => {
  const { topApps, loading } = useAppHook();
  console.log(topApps);

  return (
    <>
      {loading ? (
        <p className="text-center">Loading...</p>
      ) : (
        <div className="w-11/12 flex flex-col mx-auto my-20 items-center">
          <div className="text-center my-10">
            <h1 className="text-[#001931] text-5xl font-bold">Trending Apps</h1>
            <p className="text-[#627382] mt-4">
              Explore All Trending Apps on the Market developed by us
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
            {topApps.map((app) => (
              <div key={app.id}>
                <Link to={`/apps/${app.id}`}>
                  <AppCard app={app} />
                </Link>
              </div>
            ))}
          </div>
          <Link
            to={`/apps`}
            className="btn bg-gradient-to-br from-[#632EE3] to-[#9F62F2] text-white border-none w-fit mt-10"
          >
            View All
          </Link>
        </div>
      )}
    </>
  );
};

export default TopAppsSection;
