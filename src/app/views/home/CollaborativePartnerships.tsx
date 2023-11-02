import React from "react";

export const CollaborativePartnerships = () => {
  return (
    <section className="max-w-7xl mx-auto lg:pb-24 xl:pb-24 pb-14 space-y-10 xl:px-6 lg:px-6 px-5">
      <div className="xl:flex lg:flex flex-1 bg-gray-200">
        <div className="xl:w-1/2 lg:w-1/2 w-full">
          <div className="xl:p-16 lg:p-16 p-4">
            <p className="mt-2 xl:text-2xl lg:text-2xl text-lg font-bold tracking-tight text-gray-800 sm:text-4xl">
              Our Collaborative Partnerships
            </p>
            <div className="">
              <p className="xl:mt-6 lg:mt-6 mt-2 lg:text-base xl:text-base text-sm leading-7 text-gray-800 font-light text-justify">
                Our business model is built on fair, honest and transparent professional relationships where
                every partner/collaborator/team member is well respected and valued for their contribution and
                role in enabling and actively engaging in fulfilling a business transaction. We strongly
                believe and conduct our business in a manner where every resource needs to earn their fair
                share based on the level of active contributions being made for the success of any
                transaction. We invite and welcome business partners across the globe to join hand with in
                accomplishing a common goal and mutual growth.
              </p>
              <p className="xl:mt-6 lg:mt-6 mt-2 lg:text-base xl:text-base text-sm leading-7 text-gray-800 font-light text-justify">
                Finally, we as a team can make a difference to the need of our clients in global trade and
                finance and investments in the current emerging market.
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
