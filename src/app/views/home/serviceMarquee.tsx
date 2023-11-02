"use client";
import React from "react";
import Marquee from "react-fast-marquee";

export const ServiceMarquee = () => {
  return (
    <div className="marquee w-full xl:space-y-3 lg:space-y-3 space-y-1 xl:py-20 lg:py-20 py-4">
      <Marquee className="overflow-hidden py-2">
        <div className="flex flex-shrink-0">
          <div className="w-fit xl:text-7xl lg:text-7xl text-2xl uppercase font-semibold items-center xl:px-10 lg:px-10 px-2">
            <span className="marqueeText">#Oil & Gas Projects</span>
          </div>
          <div className="w-fit xl:text-7xl lg:text-7xl text-2xl uppercase font-semibold items-center xl:px-10 lg:px-10 px-2">
            <span className="marqueeText">#Renewable Power Projects</span>
          </div>
          <div className="w-fit xl:text-7xl lg:text-7xl text-2xl uppercase font-semibold items-center xl:px-10 lg:px-10 px-2">
            <span className="marqueeText">#Agriculture Projects</span>
          </div>
          <div className="w-fit xl:text-7xl lg:text-7xl text-2xl uppercase font-semibold items-center xl:px-10 lg:px-10 px-2">
            <span className="marqueeText">#Healthcare</span>
          </div>
          <div className="w-fit xl:text-7xl lg:text-7xl text-2xl uppercase font-semibold items-center xl:px-10 lg:px-10 px-2">
            <span className="marqueeText">#Trade and Finance</span>
          </div>
          <div className="w-fit xl:text-7xl lg:text-7xl text-2xl uppercase font-semibold items-center xl:px-10 lg:px-10 px-2">
            <span className="marqueeText">#Commodities Trading</span>
          </div>
        </div>
      </Marquee>
      <Marquee direction="right" className="overflow-hidden py-2">
        <div className="flex flex-shrink-0">
          <div className="w-fit xl:text-7xl lg:text-7xl text-2xl uppercase font-semibold items-center xl:px-10 lg:px-10 px-2">
            <span className="marqueeText">#Oil & Gas Projects</span>
          </div>
          <div className="w-fit xl:text-7xl lg:text-7xl text-2xl uppercase font-semibold items-center xl:px-10 lg:px-10 px-2">
            <span className="marqueeText">#Renewable Power Projects</span>
          </div>
          <div className="w-fit xl:text-7xl lg:text-7xl text-2xl uppercase font-semibold items-center xl:px-10 lg:px-10 px-2">
            <span className="marqueeText">#Agriculture Projects</span>
          </div>
          <div className="w-fit xl:text-7xl lg:text-7xl text-2xl uppercase font-semibold items-center xl:px-10 lg:px-10 px-2">
            <span className="marqueeText">#Healthcare</span>
          </div>
          <div className="w-fit xl:text-7xl lg:text-7xl text-2xl uppercase font-semibold items-center xl:px-10 lg:px-10 px-2">
            <span className="marqueeText">#Trade and Finance</span>
          </div>
          <div className="w-fit xl:text-7xl lg:text-7xl text-2xl uppercase font-semibold items-center xl:px-10 lg:px-10 px-2">
            <span className="marqueeText">#Commodities Trading</span>
          </div>
        </div>
      </Marquee>
    </div>
  );
};
