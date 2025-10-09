import { Link, Navigate, useNavigate } from "react-router";
import AllApps from "../../Pages/AllApps";
import AppErrTemplate from "./AppErrTemplate";

const AppError = () => {
  let navigate = useNavigate();
  return (
    <div className="flex-grow flex flex-col items-center justify-center">
      <AppErrTemplate />
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
