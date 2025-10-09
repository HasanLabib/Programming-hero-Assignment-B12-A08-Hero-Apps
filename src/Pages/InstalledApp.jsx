import React, { useEffect, useState } from "react";
import { getInstalledApps } from "../utility/addToLocalStorage";
import useAppHook from "../hooks/useAppHook/useAppHook";
import InstalledAppCard from "../Components/AppCard/InstalledAppCard";
import { Link } from "react-router";
import { ToastContainer } from "react-toastify";
import LoadingSpiner from "../Components/LoadingSpinner/LoadingSpiner";

const InstalledApp = () => {
  const installApp = getInstalledApps();
  const { apps: AllApps } = useAppHook();
  const [defaultApps, setDefaultApps] = useState(true);
  const [sortToHigh, setSortToHigh] = useState(false);
  const [sortedToHigh, setSortedToHigh] = useState([]);
  const [sortedToLow, setSortedToLow] = useState([]);
  const [uninstalled, setUninstalled] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [AllInstalledArr, setAllInstalledArr] = useState([]);
  const AllInstalled = installApp.map((app) =>
    AllApps.find((a) => parseInt(a.id) === parseInt(app.id))
  );
  useEffect(() => {
    const installAppFunc = () => {
      try {
        if (installApp) {
          setIsLoading(true);
          const AllInstalled2 = installApp.map((app) =>
            AllApps.find((a) => parseInt(a.id) === parseInt(app.id))
          );
          
            setTimeout(() => {setAllInstalledArr(AllInstalled2);
              
            setIsLoading(false);
          }, 1000);
        }
      } catch (error) {
        console.log(error);
      }
    };
    installAppFunc();
  }, []);

  // console.log("AllInstalled", AllInstalled);
  const sortedToHighArr = [...AllInstalled];
  const sortedToLowArr = [...AllInstalled];
  sortedToHighArr.sort((a, b) => a.downloads_millions - b.downloads_millions);
  sortedToLowArr.sort((a, b) => b.downloads_millions - a.downloads_millions);

  //console.log(sortedToHighArr, sortedToLowArr);

  const handleSort = (isHigh) => {
    if (isHigh) {
      setDefaultApps(false);
      setSortToHigh(true);
      setSortedToHigh([...sortedToHighArr]);
    } else {
      setDefaultApps(false);
      setSortToHigh(false);
      setSortedToLow([...sortedToLowArr]);
    }
  };

  //console.log(installApp);
  return (
    <div>
      <div className="w-11/12 flex flex-col mx-auto my-20 items-center">
        <div className="text-center my-10">
          <h1 className="text-[#001931] text-3xl md:text-5xl font-bold">
            Your Installed Apps
          </h1>
          <p className="text-[#627382] mt-4">
            Explore All Trending Apps on the Market developed by us
          </p>
        </div>
      </div>
      <div>
        <div className="flex justify-between items-center max-w-11/12 mx-auto mb-10">
          <h2 className="text-xl md:text-2xl font-semibold text-[#001931] ml-5 md:ml10">
            Total Installed Apps: {installApp.length}
          </h2>
          <div className="dropdown dropdown-bottom dropdown-end">
            <div tabIndex={0} role="button" className="btn m-1">
              Sort By Downloads
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
            >
              <li>
                <button onClick={() => handleSort(true)}>Low-to-High</button>
              </li>
              <li>
                <button onClick={() => handleSort(false)}>High-to-Low</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <ToastContainer />
      <ul>
        {isLoading ? (
          <LoadingSpiner />
        ) : defaultApps && !sortToHigh ? (
          installApp.map((app) => {
            const appFound = AllApps.find(
              (a) => parseInt(a.id) === parseInt(app.id)
            );
            if (!appFound) return null;

            return (
              <li key={app.id}>
                <InstalledAppCard
                  app={appFound}
                  uninstalled={uninstalled}
                  setUninstalled={setUninstalled}
                />
              </li>
            );
          })
        ) : sortToHigh ? (
          sortedToHigh.map((app) => (
            <li key={app.id}>
              <InstalledAppCard app={app} />
            </li>
          ))
        ) : (
          sortedToLow.map((app) => (
            <li key={app.id}>
              <InstalledAppCard app={app} />
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default InstalledApp;
