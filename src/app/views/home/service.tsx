import React from "react";

export const Service = () => {
  return (
    <>
      <section className="max-w-7xl mx-auto py-24 space-y-10">
        <div className="serviceHeading">
          <h1 className="text-5xl font-bold leading-tight relative pb-3 before:bg-brand after:bg-brand text-black">
            Our Services
          </h1>
        </div>

        <div className="grid xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-4 grid-cols-1">
          <div className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80">
            <img
              src="/services/service-01.jpg"
              className="absolute inset-0 -z-10 h-full w-full object-cover"
            />
            <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/30"></div>
            <h2 className="text-base text-white font-medium">Innovation Business Financing Solutions</h2>
          </div>
        </div>
      </section>
    </>
  );
};
