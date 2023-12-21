import React from "react";
import { Link as ScrollLink } from "react-scroll";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

function About() {
  return (
    <div className="w-full sm:w-1/2 pt-2 sm:pt-24 ml-0 sm:ml-8 p-3">
      <div>
        <img
          className="w-60 h-20 ml-20"
          src="/images/Ecell_dark_LOGO (No Background ).png"
          alt=""
        />
        <div className="w-full text-left sm:order-1 pl-0 sm:pl-16">
          <p className="text-4xl sm:text-5xl font-bold text-primary">
            Welcome to <br />
            Entrepreneurship Cell <br />
            VIT Chennai.
          </p>
          <p className="text-l sm:text-xl">
            Our mission is to foster an entrepreneurial spirit among students
            and provide them with the resources and support to turn their
            innovative ideas into successful ventures. we conduct various workshops,
            mentorship programs and networking events, we aim to cultivate the
            next generation of business leaders and changemakers.
          </p>

          {/* Contact us button : using scroll link to scroll to correct position  */}
          <div className="flex p-2">
            <div className="border-2"></div>
            <ScrollLink
              to="contact"
              spy={true}
              smooth={true}
              offset={-65}
              duration={1000}
            >
              <button className="hover:bg-green-700 bg-green-600 p-3 font-semibold text-2xl text-white shadow-2xl rounded-xl m-4">
                <div className="hover:scale-105 transition duration-300 ease-in-out">
                  Contact us
                </div>
              </button>
            </ScrollLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
