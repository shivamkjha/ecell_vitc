import React from "react";
import Button from "@mui/material/Button";

function BlogBox({ heading, author, content }) {
  return (
    <div className="w-full sm:w-1/2 flex items-center justify-center p-8">
      <div className="w-full h-full border-primary border-2 bg-yellow-50  rounded p-2 overflow-hidden">
        <div>
          <img
          className="object-cover h-60 w-full"
            src="https://startupstorymedia.com/wp-content/uploads/2022/06/CASE-STUDY-ON-ZEPTO-1.jpg"
            alt=""
          />
        </div>
        <p className="text-3xl font-semibold inline text-red-800">{heading}</p>
        <p className="font-l italic pl-1">Written by : {author}</p>
        <div>{content}</div>
        <div className="flex justify-end">
          <Button variant="outlined">Read More</Button>
        </div>
      </div>
    </div>
  );
}

export default BlogBox;
