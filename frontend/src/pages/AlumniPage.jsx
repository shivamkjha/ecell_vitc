import React from "react";
import Heading from "../components/widgets/Heading";

function AlumniPage() {
  return (
    <div className="">
      <div className="text-center">
      <Heading heading={"Alumni'24"} />
      </div>
      <div className="">
        {/* Vice President  */}
        <div className="flex flex-wrap justify-center">
          <AlumniFrame picture={"/images/Alumni24/president.png"} />
          <AlumniFrame picture={"/images/Alumni24/VP.png"} />
        </div>

        <div className="flex flex-wrap-reverse justify-center">
          <AlumniFrame
            picture={"/images/Alumni24/Screenshot 2023-12-22 at 20.00.04.png"}
          />
          <AlumniFrame
            picture={
              "/images/Alumni24/Screenshot 2023-12-22 at 20.00.12.png"
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

export default AlumniPage;

export function AlumniFrame({ picture, post }) {
  return (
    <div className="w-96 h-96 rounded-xl p-2 bg-bcol text-white m-4 shadow-xl">
      <img className="w-full h-full rounded-xl" src={picture} alt="" />
      <div className="w-full text-xl font-medium flex items-center justify-center">
        {post}
      </div>
    </div>
  );
}
