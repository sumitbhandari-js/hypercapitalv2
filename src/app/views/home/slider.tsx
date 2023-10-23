"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import Image from "next/image";
export const Slider = () => {
  return (
    <div>
      {" "}
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Image src="/carousel/3.jpg" width={1000} height={400} alt="sda" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/carousel/2.jpg" width={1000} height={400} alt="sda" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/carousel/3.jpg" width={1000} height={400} alt="sda" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/carousel/4.jpg" width={1000} height={400} alt="sda" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/carousel/5.jpg" width={1000} height={400} alt="sda" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
