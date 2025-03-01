import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button } from "@mui/material";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import Heading from "./widgets/Heading";
import { Link } from "react-router-dom";

// const blogsData = [
//   {
//     date: "1 jan",
//     photo:
//       "https://play-lh.googleuserdescription.com/tjzK0-TCkXB1zxkmiRr5WNGJxQy87s1RdBx10nqLbdxRIH7bPWxTkH_YiUMbYPFRfmj7=w240-h480-rw",
//     title: "Success Story of Zepto",
//     author: "Shivam Jha",
//     description:
//       "Zepto is a grocery shopping app that delivers groceries in 10 minutes. Customers get to choose from thousands of popular items including fresh farm vegetables and fruits, groceries, dairy & more at the best prices from Zepto.",
//   },
//   {
//     date: "12 jan",
//     photo:
//       "https://img.etimg.com/thumb/width-640,height-480,imgsize-5908,resizemode-75,msid-99903494/tech/technology/physicswallah-rolls-out-50-offline-centres-to-offer-scholarships-worth-rs-160-crore/pw-physicswallah.jpg",
//     title: "Physics Wallah becomes Unicorn",
//     author: "Ankush Chaudhary",
//     description:
//       "Physics Wallah became India's 101st unicorn startup. Physics Wallah raised $100 million from the Westbridge Capital & GSV ventures, which took the company valuation to a massive $1.1 billion.",
//   },
//   {
//     date: "10 jan",
//     photo:
//       "https://images.theconversation.com/files/481362/original/file-20220826-10690-nguhqg.jpg?ixlib=rb-1.1.0&rect=224%2C71%2C5766%2C3574&q=20&auto=format&w=320&fit=clip&dpr=2&usm=12&cs=strip",
//     title: "Raising Funding in 2024",
//     author: "Sudhansh",
//     description:
//       "In today's world, raising funding requires a strategic approach. Start by refining your business plan and identifying your target investors. Utilize crowdfunding platforms, pitch competitions, and angel investor networks.",
//   },
//   {
//     date: "11 jan",
//     photo:
//       "https://startupstorymedia.com/wp-description/uploads/2022/06/CASE-STUDY-ON-ZEPTO-1.jpg",
//     title: "Success Story of Zepto",
//     author: "Pragati",
//     description:
//       "Zepto is a grocery shopping app that delivers groceries in 10 minutes. Customers get to choose from thousands of popular items including fresh farm vegetables and fruits, groceries, dairy & more at the best prices from Zepto.",
//   },
//   {
//     date: "13 jan",
//     photo:
//       "https://images.theconversation.com/files/481362/original/file-20220826-10690-nguhqg.jpg?ixlib=rb-1.1.0&rect=224%2C71%2C5766%2C3574&q=20&auto=format&w=320&fit=clip&dpr=2&usm=12&cs=strip",
//     title: "Raising Funding in 2024",
//     author: "Aashik",
//     description:
//       "In today's world, raising funding requires a strategic approach. Start by refining your business plan and identifying your target investors. Utilize crowdfunding platforms, pitch competitions, and angel investor networks.",
//   },
// ];

const BlogsComponent =() => {
  const [blogsData, setBlogsData] = useState([]);
  useEffect(() => {
    fetchBlogsData();
  }, []);

  const fetchBlogsData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/v1/blogs"
      );
      setBlogsData(response.data.data); 
    } catch (error) {
      console.error("Error fetching blogs data:", error);
    }
  };
  return (
    <div id="events">
      <Heading title={"Blogs"} />
      <div className="mr-4 sm:mr-24 bg-bcol rounded-r-3xl">
        <div className="mr-7 bg-bcol flex items-center overflow-x-auto overflow-hidden sm:rounded-r-3xl p-3">
          <div className="h-[650px] sm:h-[565px] flex flex-col flex-wrap">
            {blogsData.map((blog, index) => (
              <BlogBox
                key={index}
                photo={blog.photo}
                title={blog.title}
                d
                author={blog.author}
                description={blog.description}
              />
            ))}

            <div>
              <div className="m-4 w-96 h-72 sm:w-[610px] sm:h-[250px] flex justify-center items-center flex-shrink-0 border-4 bg-gray-500 shadow-2xl rounded-xl overflow-hidden">
                <div className=" text-center">
                  <p className="text-white font-medium text-xl m-2">
                    Click below to read more such blogs
                  </p>

                  <Link to="blogs">
                    <Button variant="contained" color="success">
                      Explore
                      <ArrowOutwardIcon />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogsComponent;

export function BlogBox({ title, author, description, photo }) {
  return (
    <div className="m-4 w-96 h-72 sm:w-[610px] sm:h-[250px] flex flex-shrink-0 border-4 bg-gray-300 shadow-xl rounded-xl overflow-hidden">
      <div className="w-1/4 h-68">
        <img
          className="object-cover h-full w-full"
          src={photo}
          alt={title}
        />
      </div>

      <div className="w-3/4 h-full p-2">
        <div className="h-3/4 overflow-hidden">
          <p className="text-xl sm:text-3xl font-bold text-center text-primary">
            {title}
          </p>
          <p className="font-l pl-1 font-semibold text-center">
            Written by : {author}
          </p>
          <div className="text-black">{description}</div>
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

