
import React from "react";
import { Button } from "@mui/material";
import { blogsData } from "../../Blogs";
import { Star } from "@mui/icons-material";

// BlogEntry component to display each blog entry
const BlogsTable = ({ blog,index }) => {
  const { date, author, likes } = blog;

  const handleEdit = () => {
    // Implement edit functionality
    console.log(`Editing blog by ${author}`);
  };

  const handleDelete = () => {
    // Implement delete functionality
    console.log(`Deleting blog by ${author}`);
  };

  const handleView = () => {
    // Implement view functionality
    console.log(`Viewing blog by ${author}`);
  };

  return (
    <div className="border-2 border-black flex w-screen justify-evenly font-semibold p-3">
      <div className="w-1/6 ml-8 flex items-center text-center">
        {index+1}
      </div>
      <div className="w-1/6 flex items-center text-center">
        <p>{date}</p>
      </div>
      <div className="w-1/6 text-start flex items-centerr">
        <p>{author}</p>
      </div>
      <div className="w-1/6 text-center flex items-center">
        <Button variant="contained" color="success" onClick={handleView}>
          View
        </Button>
      </div>
      <div className="w-1/6 text-center flex items-center">
        <Button variant="contained" onClick={handleEdit}>
          Edit
        </Button>
      </div>
      <div className="w-1/6 text-center flex items-center">
        <Button variant="contained" color="error" onClick={handleDelete}>
          Delete
        </Button>
      </div>
      <div className="w-1/6 text-center flex items-center">
        <Star />
      </div>
    </div>
  );
};

export default BlogsTable
