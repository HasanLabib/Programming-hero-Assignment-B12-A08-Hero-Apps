import React, { useEffect, useState } from "react";
import useAppHook from "../hooks/useAppHook/useAppHook";
import { Link } from "react-router";
import AppCard from "../Components/AppCard/AppCard";
import AppError from "../Error/AppErrorPage/AppError";
import AppErrTemplate from "../Error/AppErrorPage/AppErrTemplate";
import LoadingSpiner from "../Components/LoadingSpinner/LoadingSpiner";

const AllApps = () => {
  const { apps, loading } = useAppHook();

  const [search, setSearch] = useState("");
  const trimSearch = search.trim().toLowerCase();
  const [searchedApps, setSearchedApps] = useState(apps);
  const [isSearching,setIsSearching]=useState(false);


  useEffect(() => {
    const searchAppFunc = () => {
      try {
        if (!trimSearch) {
          setSearchedApps(apps);
          return;
        } else {
          setIsSearching(true)
          const filteredApps =  apps.filter((app) =>
            app.title.toLowerCase().includes(trimSearch)
          );
          setSearchedApps(filteredApps);
          setTimeout(() => {
            setIsSearching(false)
          }, 1000)
        }
      } catch (error) {
        console.log(error);
      }
     };
    searchAppFunc();
  }, [trimSearch, apps]);

  // const searchedAppsArr = trimSearch
  //   ? apps.filter((app) => app.title.toLowerCase().includes(trimSearch)) || []
  //   : apps;

  return (
    <div>
      <div className="text-center my-10">
        <h1 className="text-[#001931] text-4xl md:text-5xl font-bold">
          Our All Applications
        </h1>
        <p className="text-[#627382] mt-4">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>
      <div className="flex justify-between items-center max-w-11/12 mx-auto mb-10">
        <h2 className="text-xl md:text-2xl font-semibold text-[#001931] ml-5 md:ml-10">
          Total Apps Found : {searchedApps.length}
        </h2>
        <label className="input">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input
            type="search"
            defaultValue={search}
            onChange={(e) => setSearch(e.target.value)}
            required
            placeholder="Search"
          />
        </label>
      </div>
      <div className="w-11/12 flex flex-col items-center justify-center mx-auto mb-20">
        {loading || isSearching ? (
          <LoadingSpiner />
        ) : (
          <>
            {searchedApps.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 items-center justify-center w-full">
                {searchedApps.map((app) => (
                  <div key={app.id}>
                    <Link to={`/apps/${app.id}`}>
                      <AppCard app={app} />
                    </Link>
                  </div>
                ))}
              </div>
            ) : (
              <AppErrTemplate />
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default AllApps;
