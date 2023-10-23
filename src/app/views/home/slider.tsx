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
          <div className="z-50 absolute">
            <div className="text text--enter" data-scroll="out" data-splitting="">
              Enter
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src="/carousel/Slider-02.png" alt="sda" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/carousel/Slider-03.png" alt="sda" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/carousel/Slider-04.png" alt="sda" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
