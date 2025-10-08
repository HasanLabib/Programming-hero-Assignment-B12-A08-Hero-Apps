import React from "react";
import { Link } from "react-router";
import { FaGithub } from "react-icons/fa";

const List = ["Home", "Apps", "Installation"];
const ListLink = ["/", "/apps", "/installed"];
const NavBar = () => {
  const ref = React.useRef();
  const ref1 = React.useRef();
  const ref2 = React.useRef();
  const refs = [ref, ref1, ref2];
  const handleToggle = (index) => {
    refs.forEach((ref) => {
      ref.current.classList.remove("bg-blue-500");
      ref.current.classList.remove("text-white");
    });
    refs[index].current.classList.add("bg-blue-500");
    console.log(refs[index].current);
    refs[index].current.classList.add("text-white");
  };
  const handleToggleHome = () => {
    refs.forEach((ref) => {
      ref.current.classList.remove("bg-blue-500");
      ref.current.classList.remove("text-white");
    });
      refs[0].current.classList.add("bg-blue-500");
      refs[0].current.classList.add("text-white");
  };

  return (
    <div>
      <div className="bg-base-100 shadow-sm">
        <div className=" navbar max-w-screen md:max-w-[calc(100vw-4rem)] lg:max-w-[calc(100vw-10rem)] mx-auto w-full">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                {List.map((item, index) => (
                  <li
                    key={index}
                    onClick={() => handleToggle(index)}
                    ref={refs[index]}
                    className={`${index}`}
                  >
                    <Link to={`${ListLink[index]}`}>{item}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex items-center gap-1">
              <figure>
                <img
                  src="../logo.png"
                  alt="logo"
                  className="w-10 h-10 object-cover"
                />
              </figure>
              <Link
                to={`/`}
                onClick={handleToggleHome}
                className="btn bg-gradient-to-br from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent border-none xl font-bold"
              >
                HERO.IO
              </Link>
            </div>
          </div>

          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              {List.map((item, index) => (
                <li
                  key={index}
                  onClick={() => handleToggle(index)}
                  ref={refs[index]}
                  className={`${index}`}
                >
                  <Link to={`${ListLink[index]}`}>{item}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="navbar-end">
            <Link
              to={`https://github.com/HasanLabib?tab=repositories`}
              className="btn bg-gradient-to-br from-[#632EE3] to-[#9F62F2] text-white border-none"
            >
              <FaGithub className="mr-2" /> Contribute
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
