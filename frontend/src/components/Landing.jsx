import React from "react";
import Slides from "./Slides";
import About from "./About";


function Landing() {

  return (
    <div className="w-full flex flex-col-reverse pt-0 sm:flex-row items-center">
      <About />

      {/* Carousel  */}
      <div className="w-full sm:w-1/2 pt-12 pl-10 sm:pl-0 sm:pt-16 flex justify-center">
        <div className="w-full">
          <Slides />
        </div>
      </div>
    </div>
  );
}

export default Landing;
