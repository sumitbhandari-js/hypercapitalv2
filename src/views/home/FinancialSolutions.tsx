import React from "react";

export const FinancialSolutions = () => {
  return (
    <section className="max-w-7xl mx-auto lg:py-24 xl:py-24 py-14 space-y-10 xl:px-6 lg:px-6 px-5">
      <div className="xl:flex lg:flex flex-1 bg-gray-100">
        <div className="xl:w-1/2 lg:w-1/2 w-full">
          <img className="h-full w-full object-cover" src="/cards/ser1.png" alt="" />
        </div>
        <div className="xl:w-1/2 lg:w-1/2 w-full">
          <div className="xl:p-16 lg:p-16 p-4">
            <p className="mt-2 xl:text-2xl lg:text-2xl text-lg font-bold tracking-tight text-gray-800 sm:text-4xl">
              Our Financial Instruments Solutions
            </p>
            <div className="">
              <p className="xl:mt-6 lg:mt-6 mt-2 lg:text-base xl:text-base text-sm leading-7 text-gray-800 font-light text-justify">
                Stemmed from our own projects, we have been involved in financial transactions and securing
                financial instruments and bank guarantees. We work with our global clients to assist them in
                securing cash-backed financial instruments e.g. LC/SBLC/BG from reliable sources and reputed
                banks for trading, construction, infrastructure development and government projects across the
                globe. These financial instruments can be used for trading and project financing. We design
                and offer small cap trade programs to our investors and also help clients with block-fund
                trades with substantial returns. Based on the investment ability of our investors with small
                or large amount, we can design and offer creative solutions to multiply revenue to support
                high value projects.
              </p>
              <p className="xl:mt-6 lg:mt-6 mt-2 lg:text-base xl:text-base text-sm leading-7 text-gray-800 font-light text-justify">
                Commodity and financial instruments are closely related. We can secure reliable supply of
                commodities to our clients and at the same time we can also offer financial instruments
                required for these transactions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
