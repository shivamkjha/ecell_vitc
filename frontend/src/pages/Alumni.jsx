import React from "react";
import Heading from "../components/widgets/Heading";
import AlumniFrame from "../components/widgets/AlumniFrame";

function Alumni() {
  return (
    <div className="">
      <div className="text-center">
      <Heading heading={"Alumni'24"} />
      </div>
      <div className="">
        {/* Vice President  */}
        <div className="flex flex-wrap justify-center">
          <AlumniFrame picture={"public/images/Alumni24/president.png"} />
          <AlumniFrame picture={"public/images/Alumni24/VP.png"} />
        </div>

        <div className="flex flex-wrap-reverse justify-center">
          <AlumniFrame
            picture={"/images/Alumni24/Screenshot 2023-12-22 at 20.00.04.png"}
          />
          <AlumniFrame
            picture={
              "public/images/Alumni24/Screenshot 2023-12-22 at 20.00.12.png"
            }
          />
          <AlumniFrame
            picture={"/images/Alumni24/Screenshot 2023-12-22 at 20.00.20.png"}
          />
          <AlumniFrame
            picture={"/images/Alumni24/Screenshot 2023-12-22 at 20.00.32.png"}
          />
          <AlumniFrame
            picture={"/images/Alumni24/Screenshot 2023-12-22 at 20.00.42.png"}
          />
          <AlumniFrame
            picture={"/images/Alumni24/Screenshot 2023-12-22 at 20.00.55.png"}
          />
        </div>
      </div>
    </div>
  );
}

export default Alumni;
