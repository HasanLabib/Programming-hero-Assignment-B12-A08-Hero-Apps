import React from 'react';
import { Link } from 'react-router';

const Banner = () => {
    return (
      <>
        <section className="max-w-screen md:max-w-[calc(100vw-4rem)] lg:max-w-[calc(100vw-10rem)]">
          <div className="hero">
            <div className="hero-content text-center">
              <div className="">
                <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold max-w-[90%] md:max-w-[60%] lg:max-w-[50%] mx-auto">
                  We Build{" "}
                  <span className="bg-gradient-to-br from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
                    Productive
                  </span>{" "}
                  Apps
                </h1>
                <p className="py-2 text-justify md:text-center ">
                  At HERO.IO, we craft innovative apps designed to make everyday
                  life simpler, smarter, and more exciting. Our goal is to turn
                  your ideas into digital experiences that truly make an impact.
                </p>
                <div>
                  <div className="flex flex-row gap-4 justify-center mt-6 mx-auto">
                    <Link
                      to={`https://play.google.com/store/apps`}
                      target="_blank"
                      className="btn border-gray-200 hover:bg-gradient-to-br from-[#632EE3] to-[#9F62F2]  hover:text-white border-2 h-fit py-3 px-8"
                    >
                      <div className="flex items-center gap-2">
                        <figure>
                          <img
                            src="../PlayStore.png"
                            alt="Google Play Badge"
                            className="w-10 h-10"
                          />
                        </figure>
                        <span>
                          {` `}Google Play {` `}
                        </span>
                      </div>
                    </Link>

                    <Link
                      to={`https://apps.apple.com/`}
                      target="_blank"
                      className="btn h-fit py-3 px-8 border-gray-200 hover:bg-gradient-to-br from-[#632EE3] to-[#9F62F2] hover:text-white border-2"
                    >
                      <div className="flex items-center gap-2">
                        <figure>
                          <img
                            src="https://www.apple.com/v/app-store/c/images/overview/icon_appstore__ev0z770zyxoy_large.png"
                            alt="App Store Badge"
                            className="w-10 h-10"
                        />
                      </figure>
                      <span>
                        {` `}App Store {` `}
                                            </span>
                        </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <figure>
            <img
              src="../hero.png"
              alt="hero"
              className="w-1/2 h-fit mx-auto mt-5"
            />
          </figure>
        </section>
      </>
    );
};

export default Banner;