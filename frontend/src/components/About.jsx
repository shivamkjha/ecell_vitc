import React from "react";

function About() {
  return (
    <div className="w-full sm:flex items-center justify-center p-4">
      <div className="w-full sm:w-1/3 sm:order-2 flex items-center justify-center">
        <img
          className="w-80 h-80 rounded-full shadow-2xl"
          src="/images/ecell_logo.jpeg"
          alt=""
        />
      </div>
      <div className="w-full sm:w-1/2 text-left sm:order-1 sm:pl-16">
        <p className="text-3xl sm:text-6xl font-bold text-primary">
          Welcome to the Entrepreneurship Cell of VIT Chennai.
        </p>
        <p className="text-l">
          Our mission is to foster an entrepreneurial spirit among students and
          provide them with the resources and support to turn their innovative
          ideas into successful ventures. Through workshops, mentorship
          programs, and networking events, we aim to cultivate the next
          generation of business leaders and changemakers. Join us in exploring
          the exciting world of entrepreneurship and making a real impact in the
          business landscape.
        </p>
      </div>
    </div>
  );
}

export default About;
