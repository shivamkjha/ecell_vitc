import React from "react";
import Button from "@mui/material/Button";

function BlogBox({ heading, author, content, picture }) {
  return (
    <div className="m-4 w-96 h-72 sm:w-[610px] sm:h-[250px] flex flex-shrink-0 border-4 bg-gray-300 shadow-xl rounded-xl overflow-hidden">
      <div className="w-1/4 h-68">
        <img
          className="object-cover h-full w-full"
          src={picture}
          alt={heading}
        />
      </div>

      <div className="w-3/4 h-full p-2">
        <div className="h-3/4 overflow-hidden">
          <p className="text-xl sm:text-3xl font-bold text-center text-primary">
            {heading}
          </p>
          <p className="font-l pl-1 font-semibold text-center">
            Written by : {author}
          </p>
          <div className="text-black">{content}</div>
        </div>

        <div className="h-1/4 flex justify-center items-center">
          <button className="hover:bg-green-800 bg-green-800 w-28 p-1 font-medium text-xl text-white shadow-2xl rounded-lg">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
}

export default BlogBox;
