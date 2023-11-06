import Link from "next/link";
import React from "react";

export const WhychooseUs = () => {
  return (
    <>
      <div className="bg-[url('/whychooseus.jpg')] bg-fixed bg-center bg-cover w-full text-white flex justify-center items-center">
        <div className="py-10 xl:py-24 lg:py-24 space-y-8">
          <div className="xl:flex lg:flex gap-5 xl:p-0 lg:p-0 p-6 xl:space-y-0 lg:space-y-0 space-y-6">
            <div className="lg:w-1/3 xl:w-1/3 w-full bg-white xl:p-28 lg:p-28 p-4 space-y-2">
              <h2 className="text-lg font-medium text-gray-800">Our Needs</h2>
              <p className="xl:text-lg lg:text-lg text-base font-extralight text-gray-600 leading-6 text-justify">
                We currently handle specific project based financial requirements supported by financial
                instruments for our global clients. We are continually looking for investors and providers of
                financial instruments and financial partners to create a trustworthy platform to provide
                reliable solutions to our clients globally that are risk mitigated. We wish to engage with
                such reliable sources on a long term with mutual benefits.
              </p>
              <div className="">
                <a
                  href=""
                  className="bg-brand xl:text-sm lg:text-sm text-xs font-medium px-3 xl:px-6 lg:px-6 xl:py-3 lg:py-3 py-1.5 rounded-sm inline-flex"
                >
                  CONTACT US
                </a>
              </div>
            </div>
            <div className="lg:w-1/3 xl:w-1/3 w-full flex flex-col gap-5">
              <div className="bg-white xl:p-10 lg:p-10 p-4 space-y-2">
                <h2 className="text-lg font-medium text-black">Our Purpose</h2>
                <p className="xl:text-lg lg:text-lg text-base font-extralight text-gray-800 leading-6 text-justify">
                  At HyperCapital Inc., we strive to conduct our business with a simple and focused purpose as
                  a global business consulting firm to partner with our clients to bring in innovative and
                  functional and operative solutions that are aligned to today’s business and competitive
                  environment and execute it with responsibility and accountability in a sustainable manner.
                </p>
              </div>
              <div className="bg-white xl:p-10 lg:p-10 p-4 space-y-2">
                <h2 className="text-lg font-medium text-black">Our Objective</h2>
                <p className="xl:text-lg lg:text-lg text-base font-extralight text-gray-800 leading-6 text-justify">
                  We strive towards creating a reliable and one-stop platform to cater and facilitate the need
                  of our global clients in the areas of international trade, finance and project funding.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
