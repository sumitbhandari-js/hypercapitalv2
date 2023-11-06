import React from "react";

export const About = () => {
  return (
    <>
      <section className="max-w-7xl mx-auto lg:py-24 xl:py-24 py-14 xl:px-6 lg:px-6 px-5">
        <div className="grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 grid-cols-1 lg:gap-14 xl:gap-14 gap-8">
          <div className="">
            <img src="/about-01.jpg" className="rounded-lg" />
          </div>
          <div className="xl:space-y-5 lg:space-y-5 space-y-3 py-2">
            <div className="serviceHeading">
              <h1
                className="lg:text-5xl xl:text-5xl text-2xl font-bold leading-tight relative pb-3 before:bg-brand after:bg-brand text-black wobble"
                data-animation="fade"
              >
                About us
              </h1>
            </div>

            <div className="space-y-3">
              <p className="text-base font-light text-justify">
                HyperCapital Inc. is a global trade, finance and investment consulting firm that collaborates
                and partners with private and public sector companies to help and manage their business
                finances, commodity procurement challenges and design tactical strategies to leverage and
                capture their greatest opportunities to meet their financial and invest goals.
              </p>
              <p className="text-base font-light text-justify">
                Based in Canada, we are a team of business consultants with extensive experience across
                several industries globally. Our expertise comes from in-depth direct trade and business
                transactional experience that have delivered consistent and sustainable success for many of
                our clients across several countries.
              </p>
              <p className="text-base font-light text-justify">
                Our team consists of highly qualified and experienced professionals and entrepreneurs who
                themselves own and operate various businesses and engage in direct financial trading and
                financing deals. Thus, we are able to extend our wealth of knowledge and proven process and
                methodologies to the benefit of our clients.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
