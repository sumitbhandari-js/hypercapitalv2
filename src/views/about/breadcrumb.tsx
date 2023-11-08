import { ChevronRightIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import React from "react";

export const BreadCrumb = () => {
  return (
    <>
      {" "}
      <div className="bg-[url('/breadcrumb/about.jpg')] bg-fixed z-10 relative bg-center bg-cover w-full text-white flex justify-center items-center breadcrumb">
        <div className="max-w-7xl mx-auto xl:py-32 lg:py-32 py-14 xl:space-y-8 lg:space-y-8 xl:px-6 lg:px-6 px-5">
          <div className="serviceHeading text-white">
            <h1 className="lg:text-5xl xl:text-5xl text-2xl font-bold leading-tight relative pb-3 before:bg-white after:bg-white text-white">
              About Us
            </h1>
          </div>
          <div className="text-center items-center flex w-full justify-center">
            <Link href="/" className="text-white">
              Home
            </Link>
            <ChevronRightIcon className="w-4 h-4" />
            <Link href="">About Us</Link>
          </div>
        </div>
      </div>
    </>
  );
};
