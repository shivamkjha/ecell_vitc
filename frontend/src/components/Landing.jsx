import React from "react";
import Slides from "./Slides";

function Landing() {
  return (
    <div className="w-full flex flex-col sm:flex-row items-center">
      <div className="w-full sm:w-1/2 pt-24 ml-0 sm:ml-8">
        <div className="">
          <img
            className="w-60 h-20 ml-16"
            src="/images/Ecell_dark_LOGO (No Background ).png"
            alt=""
          />
          <div className="w-full text-left sm:order-1 pl-0 sm:pl-16">
            <p className="text-3xl sm:text-5xl font-bold text-primary p-3">
              Welcome to <br />
              Entrepreneurship Cell <br />
              VIT Chennai.
            </p>
            <p className="text-l sm:text-xl p-2">
              Our mission is to foster an entrepreneurial spirit among students
              and provide them with the resources and support to turn their
              innovative ideas into successful ventures. Through workshops,
              mentorship programs, and networking events, we aim to cultivate
              the next generation of business leaders and changemakers.
            </p>


            <div className="flex p-2">
              <div className="border-2"></div>
              <button className=" bg-green-600 p-3 font-semibold text-2xl text-white shadow-2xl rounded-xl m-4">
                Contact us
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* Carousel  */}
      <div className="w-full sm:w-1/2 pt-0 pl-4 sm:pl-0 sm:pt-16 flex justify-center">
        <div className="w-full max-h-full">
          <Slides />
        </div>
      </div>
    </div>
  );
}

export default Landing;
