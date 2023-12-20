import React from "react";
import Button from "@mui/material/Button";

function BlogBox({ heading, author, content }) {
  return (
    <div className="w-full sm:w-1/2 sm:h-64 flex items-center justify-center p-8">
      <div className="w-full h-full border-primary border-2 bg-blue-100  rounded p-2 overflow-hidden">
        <p className="text-3xl font-semibold inline text-red-800">{heading}</p>
        <p className="font-l italic pl-1">Written by : {author}</p>
        <div>{content}</div>
        <div className="flex justify-end">
        <Button variant="outlined">
          Read More
        </Button>
        </div>
      </div>
    </div>
  );
}

export default BlogBox;
