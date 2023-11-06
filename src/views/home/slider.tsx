"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Initialization for ES Users

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Navigation, Pagination } from "swiper/modules";
import Link from "next/link";
export const Slider = () => {
  return (
    <div>
      {" "}
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className="">
          <img src="/carousel/Slider-01.png" alt="sda" />
          <div className="absolute h-full hidden py-5 text-left text-white md:block left-[17.5%] w-2/6 top-[18%] bottom-[unset] space-y-10">
            <div className="space-y-3 animate-fade-up">
              <h5 className="text-8xl uppercase font-bold">Building Your Vision</h5>
              <p className="text-2xl font-light">
                With us you don’t need to guess our work will be sure to impress We’re the construction kings.
              </p>
            </div>

            <div className="">
              <Link href="" className="bg-brand text-sm font-medium px-6 py-4 rounded-sm">
                CONTACT US
              </Link>
            </div>
          </div>
        </SwiperSlide>
        {/* <SwiperSlide>
          <img src="/carousel/Slider-02.png" alt="sda" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/carousel/Slider-03.png" alt="sda" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/carousel/Slider-04.png" alt="sda" />
        </SwiperSlide> */}
      </Swiper>
    </div>
  );
};
