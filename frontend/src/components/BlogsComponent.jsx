import React from "react";
import { Button } from "@mui/material";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import Heading from "./widgets/Heading";
import { Link } from "react-router-dom";

function BlogsComponent({ blogsData }) {
  return (
    <div id="events">
      <Heading heading={"Blogs"} />
      <div className="mr-4 sm:mr-24 bg-bcol rounded-r-3xl">
        <div className="mr-7 bg-bcol flex items-center overflow-x-auto overflow-hidden sm:rounded-r-3xl p-3">
          <div className="h-[650px] sm:h-[565px] flex flex-col flex-wrap">
            {blogsData.map((blog, index) => (
              <BlogBox
                key={index}
                picture={blog.picture}
                heading={blog.heading}
                d
                author={blog.author}
                content={blog.content}
              />
            ))}

            <div>
              <div className="m-4 w-96 h-72 sm:w-[610px] sm:h-[250px] flex justify-center items-center flex-shrink-0 border-4 bg-gray-500 shadow-2xl rounded-xl overflow-hidden">
                <div className=" text-center">
                  <p className="text-white font-medium text-xl m-2">
                    Click below to read more such blogs
                  </p>

                  <Link to="blogs/explore">
                    <Button variant="contained" color="success">
                      Explore
                      <ArrowOutwardIcon />
                    </Button>
                  </Link>


                </div>
              </div>
            </div>
          </div>
          {/* Additional div for the Explore section */}
        </div>
      </div>
    </div>
  );
}

export default BlogsComponent;

export function BlogBox({ heading, author, content, picture }) {
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

