import React from "react";

function AlumniFrame({ picture, post }) {
  return (
    <div className="w-96 h-96 rounded-xl p-2 bg-bcol text-white m-4 shadow-xl">
      <img className="w-full h-full rounded-xl" src={picture} alt="" />
      <div className="w-full text-xl font-medium flex items-center justify-center">
        {post}
      </div>
    </div>
  );
}

export default AlumniFrame;
