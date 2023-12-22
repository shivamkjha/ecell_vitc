import React from 'react'
import { blogsData } from '../../Blogs'
import BlogsTable from './BlogsTable';
import { Button } from '@mui/material';


function BlogsIndex() {
  return (
    <div>
      <div className="w-full h-30 text-3xl p-2 font-semibold text-center">
        <p>Welcome! {blogsData[0].author}</p>
        <button className="bg-green-600 rounded-xl w-80 p-2 font-medium text-white m-6">
          Write a new Blog
        </button>
      </div>

      <div className="border-2 border-black h-screen">

        {/* map can be used to shorten this  */}
        <div className="border-2 border-black bg-primary text-white flex w-screen justify-evenly font-semibold p-3">
          <div className="w-1/6 ml-8 flex items-center text-center">S.No</div>
          <div className="w-1/6 flex items-center text-center">Date</div>
          <div className="w-1/6 text-center flex items-centerr">Author</div>
          <div className="w-1/6 text-center flex items-center">View</div>
          <div className="w-1/6 text-center flex items-center">Edit</div>
          <div className="w-1/6 text-center flex items-center">Delete</div>
          <div className="w-1/6 text-center flex items-center">Starred</div>
        </div>

        {blogsData.map((blog, index) => (
          <BlogsTable key={index} blog={blog} index = {index} />
        ))}
      </div>
    </div>
  );
}


export default BlogsIndex
