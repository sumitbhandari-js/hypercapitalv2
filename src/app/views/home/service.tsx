import React from "react";
const service = [
  {
    id: "1",
    title: "Innovation Business Financing Solutions",
    imageUrl: "/services/service-01.jpg",
  },
  {
    id: "1",
    title: "Financial instrument DLC/SBLC/BG and monetization",
    imageUrl: "/services/service-02.jpg",
  },
  {
    id: "1",
    title: "Investment in financial instep trade programs",
    imageUrl: "/services/service-03.jpg",
  },
  {
    id: "1",
    title: "Project investments in Green technologies and healthcare",
    imageUrl: "/services/service-04.jpg",
  },
  {
    id: "1",
    title: "Commodity trading, petroleum products and minerals and precious metals.",
    imageUrl: "/services/service-05.jpg",
  },
  {
    id: "1",
    title: "Forex and Cryto trading",
    imageUrl: "/services/service-06.jpg",
  },
  // More people...
];
export const Service = () => {
  return (
    <>
      <section className="max-w-7xl mx-auto lg:py-24 xl:py-24 py-14 space-y-10 xl:px-6 lg:px-6 px-5">
        <div className="serviceHeading">
          <h1 className="lg:text-5xl xl:text-5xl text-2xl font-bold leading-tight relative pb-3 before:bg-brand after:bg-brand text-black">
            Our Services
          </h1>
        </div>

        <div className="grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 grid-cols-1 gap-8">
          {service.map((services) => (
            <div
              key={services.id}
              className="overflow-hidden relative group isolate flex flex-col justify-end rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80 transition duration-300 ease-in-out cursor-pointer"
            >
              <div className="group-hover:opacity-100 transition duration-300 ease-in-out">
                <img
                  src={services.imageUrl}
                  className="absolute inset-0 -z-10 h-full w-full group-hover:scale-110 transition duration-300 ease-in-out"
                />
                <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/30"></div>
                <h2 className="text-base text-white font-medium justify-start"> {services.title}</h2>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};
