import React from 'react'
import Heading from './widgets/Heading'
import Teammate from './widgets/Teammate'

function Team() {
  return (
    <div className="team">
      <Heading heading={"Our Team"} />
      <div className="w-screen flex">
        <div className="w-1/2">
          <div className="w-full h-1/4 flex justify-center m-4">
            <Teammate
              picture={"/images/Team/president.png"}
              post={"President"}
            />
          </div>
          <div className="w-full h-1/4 flex justify-center m-4">
            <Teammate
              picture={"/images/Team/vp1.png"}
              post={"Vice President"}
            />
            <Teammate
              picture={"/images/Team/vp2.png"}
              post={"Vice President"}
            />
          </div>
          <div className="border-4 border-primary m-4"></div>
          <div className="w-full h-1/4 flex justify-center m-4">
            <Teammate
              picture={"/images/Team/secratery1.png"}
              post={"Secretery"}
            />
            <Teammate
              picture={"/images/Team/secratery2.png"}
              post={"Secretery"}
            />
          </div>
        </div>

        <div className="w-1/2">
          <div className="flex flex-wrap justify-center">
            <Teammate picture={"/images/Team/director8.png"} />
          </div>
          <div className=" flex flex-wrap justify-center">
            <Teammate picture={"/images/Team/director1.png"} />
            <Teammate picture={"/images/Team/director2.png"} />
            <Teammate picture={"/images/Team/director3.png"} />
            <Teammate picture={"/images/Team/director5.png"} />
            <Teammate picture={"/images/Team/director6.png"} />
            <Teammate picture={"/images/Team/director7.png"} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team
