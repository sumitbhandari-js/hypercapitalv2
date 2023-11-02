import React from "react";

export const Expertise = () => {
  return (
    <>
      <div className="bg-[url('/expertise.png')] bg-fixed bg-center bg-cover w-full text-white flex justify-center items-center ">
        <div className="max-w-7xl mx-auto xl:py-24 lg:py-24 py-14 xl:space-y-8 lg:space-y-8 xl:px-6 lg:px-6 px-5">
          <div className="serviceHeading">
            <h1 className="lg:text-5xl xl:text-5xl text-2xl font-bold leading-tight relative pb-3 before:bg-white after:bg-white text-white">
              Our Expertise
            </h1>
          </div>
          <p className="lg:text-xl xl:text-xl text-base font-light text-justify xl:leading-8 lg:leading-8 leading-7">
            Our client driven demands have expanded our in-depth knowledge and direct expertise in several
            industries such as, oil and gas, renewable energy, agriculture, healthcare, trade and finance,
            commodities, corporate training and development, capital solicitation and finance. We attribute
            our success to a strong team of subject matter experts in each of our business interests and their
            ability to develop intelligent tactical strategies that are customized to each client and their
            individual business and socio-economic-political environment.
          </p>
        </div>
      </div>
    </>
  );
};
