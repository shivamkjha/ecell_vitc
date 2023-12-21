import React from 'react'
import Heading from './widgets/Heading'
import Teammate from './widgets/Teammate'

function Team() {
  return (
    <div className="team">
      <Heading heading={"Our Team"} />
      <div className="">
        
        {/* President */}
        <div className="w-full h-1/4 flex justify-center">
          <Teammate picture={"/images/Team/president.png"} post={"President"} />
        </div>

        {/* Vice President  */}
        <div className="w-full h-1/4 flex justify-center flex-wrap">
          <Teammate picture={"/images/Team/vp1.png"} post={"Vice President"} />
          <Teammate picture={"/images/Team/vp2.png"} post={"Vice President"} />
        </div>

        {/* Seceretary & Directors  */}
        <div className="w-full h-1/4 flex flex-wrap justify-center">
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
        <div className="w-full h-1/4 flex flex-wrap justify-center">
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
        <div className="w-screen h-1/4 flex flex-wrap justify-center">
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

export default Team
