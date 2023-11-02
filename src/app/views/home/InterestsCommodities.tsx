import React from "react";

export const InterestsCommodities = () => {
  return (
    <section className="max-w-7xl mx-auto lg:pb-24 xl:pb-24 pb-14 space-y-10 xl:px-6 lg:px-6 px-5">
      <div className="xl:flex lg:flex flex-1 bg-gray-200">
        <div className="xl:w-1/2 lg:w-1/2 w-full">
          <img
            className="h-full w-full object-cover"
            src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=60&blend=6366F1&sat=-100&blend-mode=multiply"
            alt=""
          />
        </div>
        <div className="xl:w-1/2 lg:w-1/2 w-full">
          <div className="xl:p-16 lg:p-16 p-4">
            <p className="mt-2 xl:text-2xl lg:text-2xl text-lg font-bold tracking-tight text-gray-800 sm:text-4xl">
              Our Interests in Commodities, Petroleum Products and Precious Metals
            </p>
            <div className="">
              <p className="xl:mt-6 lg:mt-6 mt-2 lg:text-base xl:text-base text-sm leading-7 text-gray-800 font-light text-justify">
                We have direct relationships with manufacturers, refineries and suppliers worldwide for
                essential commodities to procure and supply to our global clients. Over the recent years we
                have been able to tap into resources with direct supply allocations for essential and high
                demand commodities such as sugar, rice, wheat, grains, food oils, petroleum products, precious
                metals etc. We have secured supply of petroleum products including EN590, Jet Fuel and Gas
                Oils from Russian and Non-Russian sources. In the area of precious metal, we have secured and
                reliable supply of Dore Gold and Copper from Africa. We collaborate with miners to secure
                goods and assist them with financial transactions.
              </p>
              <p className="xl:mt-6 lg:mt-6 mt-2 lg:text-base xl:text-base text-sm leading-7 text-gray-800 font-light text-justify">
                Our on ground local staffs ensure the safe and secure procurement and shipping of all
                commodities that we procure and supply to our global clients. We further extend support to our
                clients with legitimate and secure financial solutions to close an international business
                transaction. Our financial solutions help our clients fulfill supply commitments to customers
                with reliable processes and financial terms that are mutually protective for all parties
                involved.
              </p>
            </div>
          </div>
        </div>{" "}
      </div>
    </section>
  );
};
