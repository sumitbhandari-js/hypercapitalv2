"use client";
import React from "react";
import Marquee from "react-fast-marquee";

export const ServiceMarquee = () => {
  return (
    <div className="marquee w-full">
      <Marquee>
        <div className="flex flex-shrink-0 space-x-16">
          <div className="w-fit text-7xl uppercase font-semibold items-center">
            <span className="star">*</span>
            <span className="marqueeText">Oil & Gas Projects</span>
          </div>
          <div className="text-7xl uppercase font-semibold w-fit">
            <span className="star">*</span>
            <span className="marqueeText">Renewable Power Projects</span>
          </div>
          <div className="text-7xl uppercase font-semibold w-fit">
            <span className="star">*</span>
            <span className="marqueeText">Agriculture Projects</span>
          </div>
          <div className="text-7xl uppercase font-semibold w-fit">
            <span className="star">*</span>
            <span className="marqueeText">Healthcare</span>
          </div>
          <div className="text-7xl uppercase font-semibold w-fit">
            <span className="star">*</span>
            <span className="marqueeText">Trade and Finance</span>
          </div>
          <div className="text-7xl uppercase font-semibold w-fit">
            <span className="star">*</span>
            <span className="marqueeText">Commodities Trading</span>
          </div>
        </div>
      </Marquee>
    </div>
  );
};
