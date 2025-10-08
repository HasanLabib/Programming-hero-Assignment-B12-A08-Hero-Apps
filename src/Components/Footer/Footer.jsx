import React from "react";
import { Link, NavLink } from "react-router";
import { FaSquareXTwitter, FaFacebookF, FaInstagram} from "react-icons/fa6";
const socialLinks = [
  {
    name: "Twitter",
    url: "https://twitter.com",
    icon: <FaSquareXTwitter />,
    },
    { name: "Facebook", url: "https://facebook.com", icon: <FaFacebookF /> },
    { name: "Instagram", url: "https://instagram.com", icon: <FaInstagram /> },
];
const Footer = () => {
  return (
    <>
      <div className="max-w-screen md:max-w-[calc(100vw-4rem)] lg:max-w-[calc(100vw-10rem)]  mx-auto w-full">
        <footer className="footer sm:footer-horizontal text-neutral-content p-10 flex justify-between items-center">
          <aside className="flex items-center gap-1">
            <figure>
              <img
                src="../logo.png"
                alt="logo"
                className="w-10 h-10 object-cover"
              />
            </figure>
            <Link
              to={`/`}
              className=" bg-gradient-to-br from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent border-none xl font-bold"
            >
              HERO.IO
            </Link>
          </aside>
          <nav>
            <h6 className="footer-title">Social Links</h6>
            <div className="grid grid-flow-col gap-4">
              {socialLinks.map((link, index) => (
                <Link
                  key={index}
                  to={link.url}
                  target="_blank"
                  className="text-2xl hover:text-[#632EE3]"
                >
                  {link.icon}
                </Link>
              ))}
            </div>
          </nav>
        </footer>
        <hr className="my-10 text-gray-100 opacity-20" />
        <p className="text-sm text-white text-center my-10">
          Copyright © 2025 HERO.IO. All rights reserved.
        </p>
      </div>
    </>
  );
};

export default Footer;
