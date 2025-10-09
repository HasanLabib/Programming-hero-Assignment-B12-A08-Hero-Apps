import React, { useEffect } from "react";
import { useParams } from "react-router";
import useAppHook from "../hooks/useAppHook/useAppHook";
import AppStatisticChart from "../Components/AppStatisticChart/AppStatisticChart";
import AppError from "../Error/AppErrorPage/AppError";
import Swal from "sweetalert2";
import setInstalledApps, {
  removeInstalledApp,
} from "../utility/addToLocalStorage";
import { ToastContainer } from "react-toastify";

/*
{
    "id": 1,
    "title": "Facebook",
    "companyName": "Meta Platforms, Inc.",
    "description": "Connect with friends, family and communities. Share posts, stories, and join groups.",
    "size": 98,
    "reviews": 135000000,
    "ratingAvg": 4.5,
    "downloads_millions": 5000,
    "image": "https://play-lh.googleusercontent.com/KCMTYuiTrKom4Vyf0G4foetVOwhKWzNbHWumV73IXexAIy5TTgZipL52WTt8ICL-oIo=w240-h480",
    "verified": true,
    "ratings": [
        {
            "name": "1 star",
            "count": 6500000
        },
        {
            "name": "2 star",
            "count": 2500000
        },
        {
            "name": "3 star",
            "count": 4200000
        },
        {
            "name": "4 star",
            "count": 25000000
        },
        {
            "name": "5 star",
            "count": 125000000
        }
    ],
    "largeDescription": "Facebook is a social networking hub that helps people stay connected across friendships, families, and interest groups. The app blends a customizable news feed, Stories, Groups, and Events so users can follow personal updates, trending content, and community conversations in one place. Built-in posting tools let you share photos, videos, live broadcasts, and long-form posts, while privacy and audience controls let you tailor who sees what. Facebook also supports marketplace listings, fundraising, and local recommendations — making it a versatile app for socializing, discovering local happenings, and coordinating real-world meetups. With continuous updates to content discovery and moderation, the app aims to balance personal connection with safe, discoverable content."
}
*/
const AppDetails = () => {
  const { id } = useParams();
  const [installed, setInstalled] = React.useState(false);

  const { apps, error, loading } = useAppHook();
  const app = apps.find((app) => app.id === Number(id));
  const installedApps = JSON.parse(localStorage.getItem("installedApps")) || [];
  useEffect(() => {
    const isInstalled = installedApps.some(
      (installedApp) => parseInt(installedApp.id) === parseInt(id)
    );
    console.log(isInstalled);
    setInstalled(isInstalled);
  }, [installedApps, id]);

  if (loading) return <p>Loading.......</p>;
  if (error) return <p>Error loading app details.</p>;
  if (!app) return <AppError />;

  const {
    title,
    companyName,
    description,
    size,
    reviews,
    ratingAvg,
    downloads_millions,
    image,
    largeDescription,
  } = app || {};

  const handleInstall = () => {
    if (!installed) {
      Swal.fire({
        title: "Install App",
        text: "Do you want to install this app?",
        icon: "question",
        showDenyButton: true,
        showCancelButton: false,
        confirmButtonText: "Yes",
        denyButtonText: "Not now",
      }).then((result) => {
        if (result.isConfirmed) {
          setInstalledApps(id);
          setInstalled(true);
          Swal.fire(
            "Installed!",
            `The app ${title} has been installed.`,
            "success"
          );
        } else if (result.isDenied) {
          Swal.fire("The app's installation was canceled.", "", "info");
        }
      });
    }
  };
  return (
    <div className="w-11/12 mx-auto my-10">
      <ToastContainer />
      <div className="flex flex-col md:flex-row gap-8">
        <figure>
          <img src={image} alt={title} className="w-80 h-80 object-contain" />
        </figure>
        <div>
          <h1 className="text-4xl font-bold">{title}</h1>
          <p className="text-lg">{description}</p>
          <div className="mt-4 text-xl">
            <span className="font-semibold text-[#627382]">Developed by </span>{" "}
            <span className="bg-gradient-to-br from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent font-semibold">
              {companyName}
            </span>
          </div>
          <hr className="my-4 border-t border-gray-300" />
          <div className="flex flex-col md:flex-row items-start md:items-center mt-4">
            <div className="mt-2 flex-[2%]">
              <img src="../icon-downloads.png" alt="Downloads" />
              <p className="font-semibold text-[#001931]">Downloads</p>{" "}
              <p className="font-extrabold text-[2.5rem]">
                {downloads_millions / 1000} B
              </p>
            </div>
            <div className="mt-2 flex-[2%]">
              <img src="../icon-ratings.png" alt="Rating" />
              <p className="font-semibold text-[#001931]">Rating</p>{" "}
              <p className="font-extrabold text-[2.5rem]">{ratingAvg}</p>
            </div>
            <div className="mt-2 flex-1">
              <img src="../icon-review.png" alt="Reviews" />
              <p className="font-semibold text-[#001931]">Reviews</p>{" "}
              <p className="font-extrabold text-[2.5rem]">
                {reviews / 1000000} M
              </p>
            </div>
          </div>
          <button
            className={`mt-6 btn w-full md:w-1/2 btn-success text-white border-none`}
            onClick={handleInstall}
            disabled={installed}
          >
            {installed ? "Installed" : `Install Now ( ${size} MB )`}
          </button>
        </div>
      </div>
      <hr className="my-4 border-t border-gray-300" />
      <div>
        <p className="font-semibold text-[#001931] text-2xl mt-10">Ratings</p>
        <AppStatisticChart />
      </div>
      <hr className="my-4 border-t border-gray-300" />
      <div>
        <p className="font-semibold text-[#001931] text-2xl mt-10">
          Description
        </p>
        <p className="text-justify mt-4 text-[#627382]">{largeDescription}</p>
      </div>
    </div>
  );
};

export default AppDetails;
