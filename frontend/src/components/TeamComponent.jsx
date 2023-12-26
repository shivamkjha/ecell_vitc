import React from 'react'
import Heading from './widgets/Heading'


//! Teammates Data is Hard Coded coz we'll implement this when we've the profile feature for each user
function TeamComponent() {
  return (
    <div className="team">
      <Heading heading={"Our Team"} />
      <div className="">
        {/* President */}
        <div className="w-full flex justify-center">
          <Teammate picture={"/images/Team/president.png"} post={"President"} />
        </div>

        {/* Vice President  */}
        <div className="sm:ml-96 sm:pl-12 pl-0 flex overflow-x-auto overflow-y-auto overflow-hidden">
          <Teammate picture={"/images/Team/vp1.png"} post={"Vice President"} />
          <Teammate picture={"/images/Team/vp2.png"} post={"Vice President"} />
        </div>

        {/* Seceretary & Directors  */}
        <div className="sm:ml-32 flex overflow-x-auto overflow-hidden">
          <Teammate
            picture={"/images/Team/secratery1.png"}
            post={"Secretery"}
          />
          <Teammate
            picture={"/images/Team/secratery2.png"}
            post={"Secretery"}
          />

          <div className="border-4 w-1/2 sm:w-0 border-primary m-10 "></div>

          <Teammate
            picture={"/images/Team/director8.png"}
            post={"Director of Management"}
          />
          <Teammate
            picture={"/images/Team/director1.png"}
            post={"Director of Design"}
          />
        </div>
        <div className="sm:ml-0 h-1/4 flex overflow-x-auto overflow-hidden">
          <Teammate
            picture={"/images/Team/director2.png"}
            post={"Director of S & I"}
          />
          <Teammate
            picture={"/images/Team/director3.png"}
            post={"Director of PR"}
          />
          <Teammate
            picture={"/images/Team/director5.png"}
            post={"Director of Social Media"}
          />
          <Teammate
            picture={"/images/Team/director6.png"}
            post={"Director of Content"}
          />
          <Teammate
            picture={"/images/Team/director7.png"}
            post={"Director of Finance"}
          />
        </div>

        {/* Leads  */}
        <div className=" sm:ml-0 h-1/4 flex overflow-x-auto overflow-hidden">
          <Teammate picture={"/images/Team/Lead1.png"} post={"S & I Lead"} />
          <Teammate picture={"/images/Team/Lead2.png"} post={"S & I Lead"} />
          <Teammate
            picture={"/images/Team/Lead3.png"}
            post={"Marketing Lead"}
          />
          <Teammate
            picture={"/images/Team/Lead4.png"}
            post={"Operations Lead"}
          />
          <Teammate
            picture={"/images/Team/Lead5.png"}
            post={"Operations Lead"}
          />
        </div>
      </div>
    </div>
  );
}

export default TeamComponent


export function Teammate({ picture, post }) {
  return (
    <div className="w-64 h-66 rounded-xl flex-shrink-0 overflow-hidden p-2 bg-green-600 text-white m-4 shadow-xl">
      <img className="w-full h-60 rounded-t-xl" src={picture} alt="" />
      <div className="w-full text-xl font-medium flex items-center justify-center">
        {post}
      </div>
    </div>
  );
}