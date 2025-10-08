import React from "react";

const StatesSection = () => {
    
  return (
    <>
      <section className="text-center bg-gradient-to-br from-[#632EE3] to-[rgb(159,98,242)] text-white p-20">
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-10">
          Trusted by Millions, Built for You
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-screen md:max-w-[calc(100vw-4rem)] lg:max-w-[calc(100vw-10rem)] mx-auto">
          <div className="p-6">
            <p className="font-light">Total Downloads</p>
            <p className="font-extrabold text-7xl">
              {}
              <span>M</span>
            </p>
            <p className="font-light">21% more than last month</p>
          </div>
          <div className="p-6">
            <p className="font-light">Total Reviews</p>
            <p className="font-extrabold text-7xl">
              {}
              <span>K</span>
            </p>
            <p className="font-light">46% more than last month</p>
          </div>
          <div className="p-6">
            <p className="font-light">Active Apps</p>
            <p className="font-extrabold text-7xl">
              {}
              <span>+</span>
            </p>
            <p className="font-light">31 more will Launch</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default StatesSection;
