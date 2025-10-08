import React from "react";
import useAppHook from "../hooks/useAppHook/useAppHook";
import { Link } from "react-router";
import AppCard from "../Components/AppCard/AppCard";

const AllApps = () => {
  const { apps, loading } = useAppHook();
  return (
    <div>
      <div className="text-center my-10">
        <h1 className="text-[#001931] text-5xl font-bold">
          Our All Applications
        </h1>
        <p className="text-[#627382] mt-4">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>
      <div className="w-11/12 mx-auto mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {apps.map((app) => (
            <div key={app.id}>
              <Link to={`/apps/${app.id}`}>
                <AppCard app={app} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllApps;
