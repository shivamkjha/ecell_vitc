import React,{ useState, useEffect } from 'react';
import axios from "axios";
import { Link as ScrollLink } from "react-scroll";
import Carousel from "react-material-ui-carousel";
import { Paper } from "@mui/material";

function LandingPage() {
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

export default LandingPage;

//! This is Horizontal first half
export function About() {
  return (
    <div className="w-full sm:w-1/2 pt-6 ml-0 sm:ml-8 p-3">
      <div>
        <img
          className="w-60 h-20 mx-auto sm:mx-16"
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
            innovative ideas into successful ventures. we conduct various
            workshops, mentorship programs and networking events, we aim to
            cultivate the next generation of business leaders and changemakers.
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

//! This is carousel
function Slides(props) {
  const [items, setCarouselsData] = useState([]);
  useEffect(() => {
    fetchCarouselData();
  }, []);
  const fetchCarouselData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/v1/carousel"
      );
      setCarouselsData(response.data.data);
    } catch (error) {
      console.error("Error fetching carousel data:", error);
    }
  };

  return (
    <Carousel className="w-full pt-0">
      {items.map((item, i) => (
        <Item className="" key={i} item={item} />
      ))}
    </Carousel>
  );
}

function Item(props) {
  return (
    <Paper
      className="w-80 h-96 sm:w-[550px] sm:h-[650px] flex items-center justify-center mx-auto"
      style={{
        borderRadius: "23px",
        boxShadow: "10px 10px 10px rgba(0, 0, 0, 0.5)",
        overflow: "hidden",
      }}
    >
      <img className="w-full h-full" src={props.item.image} alt="" />
    </Paper>
  );
}
