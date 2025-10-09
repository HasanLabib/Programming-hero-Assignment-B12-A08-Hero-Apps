import { toast } from "react-toastify";

export const getInstalledApps = () => {
    const installedApps = localStorage.getItem("installedApps");
    console.log(installedApps);
  return installedApps ? JSON.parse(installedApps) : [];
};

const setInstalledApps = (id) => {
  const previousInstalledApps = getInstalledApps();
    
  console.log(previousInstalledApps);
    !previousInstalledApps.find((previousApp) => previousApp.id === id) &&
      (previousInstalledApps.push({ id, install: true }),
      console.log(previousInstalledApps),
      localStorage.setItem(
        "installedApps",
        JSON.stringify(previousInstalledApps)
      ),
      toast.success("App added to installed list"));
};

export const removeInstalledApp = (id) => {
    const previousInstalledApps = getInstalledApps();
    const remainingApps = previousInstalledApps.filter(
      (previousAppId) => previousAppId !== id
    );
    localStorage.setItem("installedApps", JSON.stringify(remainingApps));
    toast.success("App removed from installed list");
}

export default setInstalledApps;
