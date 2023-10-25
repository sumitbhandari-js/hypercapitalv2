"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Navigation, Pagination } from "swiper/modules";
import Image from "next/image";
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
        <SwiperSlide>
          <img src="/carousel/Slider-01.png" alt="sda" />
          <div className="absolute inset-x-[15%] bottom-20 hidden py-5 text-center text-white md:block">
            <h5 className="text-xl">First slide label</h5>
            <p>Some representative placeholder content for the first slide.</p>
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
