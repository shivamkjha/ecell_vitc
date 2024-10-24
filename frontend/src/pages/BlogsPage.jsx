import React, { useState, useEffect } from "react";
import axios from "axios";
// const BlogsData = [
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
//       "https://akm-img-a-in.tosshub.com/businesstoday/images/story/202111/zepto-1200_0-sixteen_nine.jpg?size=1200:675",
//     title: "Success Story of Zepto",
//     author: "Pragati",
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
//     date: "13 jan",
//     photo:
//       "https://images.theconversation.com/files/481362/original/file-20220826-10690-nguhqg.jpg?ixlib=rb-1.1.0&rect=224%2C71%2C5766%2C3574&q=20&auto=format&w=320&fit=clip&dpr=2&usm=12&cs=strip",
//     title: "Raising Funding in 2024",
//     author: "Aashik",
//     description:
//       "In today's world, raising funding requires a strategic approach. Start by refining your business plan and identifying your target investors. Utilize crowdfunding platforms, pitch competitions, and angel investor networks.",
//   },
//   {
//     date: "1 jan",
//     photo:
//       "https://akm-img-a-in.tosshub.com/businesstoday/images/story/202111/zepto-1200_0-sixteen_nine.jpg?size=1200:675",
//     title: "Success Story of Zepto",
//     author: "Shivam Jha",
//     description:
//       "Zepto is a grocery shopping app that delivers groceries in 10 minutes. Customers get to choose from thousands of popular items including fresh farm vegetables and fruits, groceries, dairy & more at the best prices from Zepto.",
//   },
// ];

function BlogsPage() { 
    const [BlogsData, setBlogsData] = useState([]);
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

  const lastBlog = BlogsData[BlogsData.length - 1];
  const secondLastBlog = BlogsData[BlogsData.length - 2];
  const thirdLastBlog = BlogsData[BlogsData.length - 3];
  const fourthLastBlog = BlogsData[BlogsData.length - 4];

  return (
    <div className="w-screen box-border p-0 sm:p-4 relative">
      {/* Background Image with Dim Overlay */}
      <div className="mb-2 h-[600px]">
        {lastBlog && (
        <div
          className="border-box w-full h-full relative"
          style={{
            backgroundImage: `url(${lastBlog.photo})`,
            backgroundSize: "cover",
            backgroundPosition: "top",
          }}
        >
          {/* Semi-transparent Overlay */}
          <div className="absolute inset-0 bg-black opacity-50"></div>

          {/* Text Content */}
          <div className="absolute w-full h-full flex items-center justify-center text-center text-white font-bold">
            <div className="w-full sm:w-2/3">
              <p className="text-5xl sm:text-7xl">{lastBlog.title}</p>
              <p className="sm:text-xl p-2 sm:p-12 text-gray-300">{lastBlog.description}</p>
            </div>
          </div>
        </div>
        )}
      </div>

      <div className="box-border w-full flex">
        <div className="w-1/2 bg-red-400 m-1">
          {secondLastBlog && (
          <div
            className="border-box w-full h-full relative"
            style={{
              backgroundImage: `url(${secondLastBlog.photo})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* Semi-transparent Overlay */}
            <div className="absolute inset-0 bg-black opacity-50"></div>

            {/* Text Content */}
            <div className="absolute w-full h-full flex items-center justify-center text-start text-white font-bold">
              <div className="p-10">
                <p className="text-6xl">{secondLastBlog.title}</p>
                <p className="text-l text-gray-300">{secondLastBlog.description}</p>
              </div>
            </div>
          </div>
          )}
        </div>

        <div className="w-1/3 m-1 flex">
          <div className="w-3/4 m-1">
            { thirdLastBlog && (
              <div className="w-full h-96 mb-5 ">
              {/* ThirdLast  */}
              <div
                className="border-box w-full h-full relative"
                style={{
                  backgroundImage: `url(${thirdLastBlog.photo})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                {/* Semi-transparent Overlay */}
                <div className="absolute inset-0 bg-black opacity-50"></div>

                {/* Text Content */}
                <div className="absolute w-full h-full flex items-end justify-center text-center text-white font-bold p-1">
                  <div className="w-full">
                    <p className="text-4xl">{thirdLastBlog.title}</p>
                    <p className="text-sm text-gray-300">{thirdLastBlog.description}</p>
                  </div>
                </div>
              </div>
            </div>
            )}

            <div className="w-full h-96">
              { fourthLastBlog && (
                <div
                className="border-box w-full h-full relative"
                style={{
                  backgroundImage: `url(${fourthLastBlog.photo})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                {/* Semi-transparent Overlay */}
                <div className="absolute inset-0 bg-black opacity-50"></div>
                {/* Text Content */}
                <div className="absolute w-full h-full flex items-end justify-center text-start text-white font-bold p-1">
                  <div className="w-full">
                    <p className="text-start text-4xl">{fourthLastBlog.title}</p>
                    <p className="text-sm text-gray-600 bg-yellow-300 p-1">{fourthLastBlog.description}</p>
                    </div>
                </div>
              </div>
            )}
          </div>
        </div>
    </div>
          <div className="w-1/3 text-center ml-2 border ">
            <div className="h-32 w-full  ">
              <p className="text-center font-semibold p-4 text-2xl bg-gray-400 mb-2">More Blogs</p>
              {BlogsData.map((blog, index) => (
                <OtherBlogs blog={blog} />
              ))}
            </div>
          </div>
        </div>
      </div>
    )}

export default BlogsPage;

function OtherBlogs({ blog }) {
  return (
    <div className="w-full h-24 flex mb-2 border">
      <div className="w-40 h-full flex justify-center">
        <img src={blog.photo} className=" object-cover" alt="" />
      </div>
      <div className="text-md font-semibold w-full text-center pt-2">{blog.title}</div>
    </div>
  );
}
