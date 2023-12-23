import React from "react";
import Slides from "./Slides";
import About from "./About";


function Landing() {
  return (
    <div className="w-screen pt-0 sm:pt-16  flex flex-col sm:flex-row items-center justify-center">
      <About />

      {/* Carousel  */}
      <div className="w-full sm:w-1/2 ">
        <div className="">
          <Slides />
        </div>
      </div>
    </div>
  );
}

export default Landing;
