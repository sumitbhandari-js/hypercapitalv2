import React from "react";

export const Expertise = () => {
  return (
    <>
      <div className="bg-[url('/expertise.png')] bg-fixed bg-center bg-cover w-full text-white flex justify-center items-center">
        <div className="max-w-7xl mx-auto py-24 space-y-8">
          <div className="serviceHeading">
            <h1 className="text-5xl font-bold leading-tight relative pb-3 before:bg-white after:bg-white text-white">
              Our Expertise
            </h1>
          </div>
          <p className="text-xl font-light text-justify leading-8">
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
