import React from "react";

export const MicroInvestment = () => {
  return (
    <section className="max-w-7xl mx-auto lg:pb-24 xl:pb-24 pb-14 space-y-10 xl:px-6 lg:px-6 px-5">
      <div className="xl:flex lg:flex flex-1 bg-gray-200">
        <div className="xl:w-1/2 lg:w-1/2 w-full">
          <div className="xl:p-16 lg:p-16 p-4">
            <p className="mt-2 xl:text-2xl lg:text-2xl text-lg font-bold tracking-tight text-gray-800 sm:text-4xl">
              Our Micro-Investment Program
            </p>
            <div className="">
              <p className="xl:mt-6 lg:mt-6 mt-2 lg:text-base xl:text-base text-sm leading-7 text-gray-800 font-light text-justify">
                We offer a popular customized micro-investment program to individuals and small to medium size
                businesses to meet their financial needs on monthly basis. With this investment program, we
                offer a risk-free and high-yield investment returns for our clients. We take the burden of
                market risk and our clients enjoy high yield guaranteed returns. This program offers maximum
                returns and flexibility to our clients. Clients can start with a small investment amount that
                can grow big within a short period of time. In the event of immediate need and unforeseen
                situations, clients can withdraw funds without any penalty or extra charges.
              </p>
            </div>
          </div>
        </div>{" "}
        <div className="xl:w-1/2 lg:w-1/2 w-full">
          <img
            className="h-full w-full object-cover"
            src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=60&blend=6366F1&sat=-100&blend-mode=multiply"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};
