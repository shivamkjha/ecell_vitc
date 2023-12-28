import React from "react";
import { Button } from "@mui/material";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import Heading from "./widgets/Heading";
import { Link } from "react-router-dom";

<<<<<<< HEAD
const BlogsData = [
=======
const blogsData = [
>>>>>>> a1a2f2570b1ae72b356cdd8e73ea217475edb626
  {
    date: "1 jan",
    picture:
      "https://play-lh.googleusercontent.com/tjzK0-TCkXB1zxkmiRr5WNGJxQy87s1RdBx10nqLbdxRIH7bPWxTkH_YiUMbYPFRfmj7=w240-h480-rw",
    heading: "Success Story of Zepto",
    author: "Shivam Jha",
    content:
      "Zepto is a grocery shopping app that delivers groceries in 10 minutes. Customers get to choose from thousands of popular items including fresh farm vegetables and fruits, groceries, dairy & more at the best prices from Zepto.",
  },
  {
    date: "12 jan",
    picture:
      "https://img.etimg.com/thumb/width-640,height-480,imgsize-5908,resizemode-75,msid-99903494/tech/technology/physicswallah-rolls-out-50-offline-centres-to-offer-scholarships-worth-rs-160-crore/pw-physicswallah.jpg",
    heading: "Physics Wallah becomes Unicorn",
    author: "Ankush Chaudhary",
    content:
      "Physics Wallah became India's 101st unicorn startup. Physics Wallah raised $100 million from the Westbridge Capital & GSV ventures, which took the company valuation to a massive $1.1 billion.",
  },
  {
    date: "10 jan",
    picture:
      "https://images.theconversation.com/files/481362/original/file-20220826-10690-nguhqg.jpg?ixlib=rb-1.1.0&rect=224%2C71%2C5766%2C3574&q=20&auto=format&w=320&fit=clip&dpr=2&usm=12&cs=strip",
    heading: "Raising Funding in 2024",
    author: "Sudhansh",
    content:
      "In today's world, raising funding requires a strategic approach. Start by refining your business plan and identifying your target investors. Utilize crowdfunding platforms, pitch competitions, and angel investor networks.",
  },
  {
    date: "11 jan",
    picture:
      "https://startupstorymedia.com/wp-content/uploads/2022/06/CASE-STUDY-ON-ZEPTO-1.jpg",
    heading: "Success Story of Zepto",
    author: "Pragati",
    content:
      "Zepto is a grocery shopping app that delivers groceries in 10 minutes. Customers get to choose from thousands of popular items including fresh farm vegetables and fruits, groceries, dairy & more at the best prices from Zepto.",
  },
  {
    date: "13 jan",
    picture:
      "https://images.theconversation.com/files/481362/original/file-20220826-10690-nguhqg.jpg?ixlib=rb-1.1.0&rect=224%2C71%2C5766%2C3574&q=20&auto=format&w=320&fit=clip&dpr=2&usm=12&cs=strip",
    heading: "Raising Funding in 2024",
    author: "Aashik",
    content:
      "In today's world, raising funding requires a strategic approach. Start by refining your business plan and identifying your target investors. Utilize crowdfunding platforms, pitch competitions, and angel investor networks.",
  },
];

function BlogsComponent() {
  return (
    <div id="events">
      <Heading heading={"Blogs"} />
      <div className="mr-4 sm:mr-24 bg-bcol rounded-r-3xl">
        <div className="mr-7 bg-bcol flex items-center overflow-x-auto overflow-hidden sm:rounded-r-3xl p-3">
          <div className="h-[650px] sm:h-[565px] flex flex-col flex-wrap">
            {BlogsData.map((blog, index) => (
              <BlogBox
                key={index}
                body={blog.body}
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

export function BlogBox({ title, author, description, body }) {
  return (
    <div className="m-4 w-96 h-72 sm:w-[610px] sm:h-[250px] flex flex-shrink-0 border-4 bg-gray-300 shadow-xl rounded-xl overflow-hidden">
      <div className="w-1/4 h-68">
        <img
          className="object-cover h-full w-full"
          src={body}
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

