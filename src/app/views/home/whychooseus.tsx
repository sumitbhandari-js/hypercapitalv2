import React from "react";

export const WhychooseUs = () => {
  return (
    <>
      <div className="bg-[url('/whychooseus.jpg')] bg-fixed bg-center bg-cover w-full text-white flex justify-center items-center">
        <div className="py-24 space-y-8">
          <div className="flex gap-5">
            <div className="w-1/3 bg-white p-10 space-y-2">
              <h2 className="text-lg font-semibold text-black">Our Needs</h2>
              <p className="text-sm font-light text-black leading-6 text-justify">
                We currently handle specific project based financial requirements supported by financial
                instruments for our global clients. We are continually looking for investors and providers of
                financial instruments and financial partners to create a trustworthy platform to provide
                reliable solutions to our clients globally that are risk mitigated. We wish to engage with
                such reliable sources on a long term with mutual benefits.
              </p>
            </div>
            <div className="w-1/4 flex flex-col gap-5">
              <div className="bg-white p-10 space-y-2">
                <h2 className="text-lg font-semibold text-black">Our Purpose</h2>
                <p className="text-sm font-light text-black text-justify">
                  At HyperCapital Inc., we strive to conduct our business with a simple and focused purpose as
                  a global business consulting firm to partner with our clients to bring in innovative and
                  functional and operative solutions that are aligned to today’s business and competitive
                  environment and execute it with responsibility and accountability in a sustainable manner.
                </p>
              </div>
              <div className="bg-white p-10 space-y-2">
                <h2 className="text-lg font-semibold text-black">Our Objective</h2>
                <p className="text-sm font-light text-black text-justify">
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
