import React from "react";

const BlogsData = [
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
      "https://akm-img-a-in.tosshub.com/businesstoday/images/story/202111/zepto-1200_0-sixteen_nine.jpg?size=1200:675",
    heading: "Success Story of Zepto",
    author: "Pragati",
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
    date: "13 jan",
    picture:
      "https://images.theconversation.com/files/481362/original/file-20220826-10690-nguhqg.jpg?ixlib=rb-1.1.0&rect=224%2C71%2C5766%2C3574&q=20&auto=format&w=320&fit=clip&dpr=2&usm=12&cs=strip",
    heading: "Raising Funding in 2024",
    author: "Aashik",
    content:
      "In today's world, raising funding requires a strategic approach. Start by refining your business plan and identifying your target investors. Utilize crowdfunding platforms, pitch competitions, and angel investor networks.",
  },
  {
    date: "1 jan",
    picture:
      "https://akm-img-a-in.tosshub.com/businesstoday/images/story/202111/zepto-1200_0-sixteen_nine.jpg?size=1200:675",
    heading: "Success Story of Zepto",
    author: "Shivam Jha",
    content:
      "Zepto is a grocery shopping app that delivers groceries in 10 minutes. Customers get to choose from thousands of popular items including fresh farm vegetables and fruits, groceries, dairy & more at the best prices from Zepto.",
  },
];

function ExploreBlogsComponent() {
  const lastBlog = BlogsData[BlogsData.length - 1];
  const secondLastBlog = BlogsData[BlogsData.length - 2];
  const thirdLastBlog = BlogsData[BlogsData.length - 3];
  const fourthLastBlog = BlogsData[BlogsData.length - 4];

  return (
    <div className="w-screen box-border p-8 relative">
      {/* Background Image with Dim Overlay */}
      <div className="mb-2 h-screen">
        <div
          className="border-box w-full h-full relative"
          style={{
            backgroundImage: `url(${lastBlog.picture})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Semi-transparent Overlay */}
          <div className="absolute inset-0 bg-black opacity-50"></div>

          {/* Text Content */}
          <div className="absolute w-full h-full flex items-center justify-center text-center text-white font-bold">
            <div className="w-2/3">
              <p className="text-7xl">{lastBlog.heading}</p>
              <p className="text-xl p-12 text-gray-300">{lastBlog.content}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="box-border w-full flex">
        <div className="w-1/2 bg-red-400 m-1">
          <div
            className="border-box w-full h-full relative"
            style={{
              backgroundImage: `url(${secondLastBlog.picture})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* Semi-transparent Overlay */}
            <div className="absolute inset-0 bg-black opacity-50"></div>

            {/* Text Content */}
            <div className="absolute w-full h-full flex items-center justify-center text-start text-white font-bold">
              <div className="p-10">
                <p className="text-6xl">{secondLastBlog.heading}</p>
                <p className="text-l text-gray-300">{secondLastBlog.content}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-1/2 m-1 flex">
          <div className="w-1/2 m-1">
            <div className="w-full h-96 mb-5 ">
              {/* ThirdLast  */}
              <div
                className="border-box w-full h-full relative"
                style={{
                  backgroundImage: `url(${thirdLastBlog.picture})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                {/* Semi-transparent Overlay */}
                <div className="absolute inset-0 bg-black opacity-50"></div>

                {/* Text Content */}
                <div className="absolute w-full h-full flex items-end justify-center text-center text-white font-bold p-1">
                  <div className="w-full">
                    <p className="text-4xl">{thirdLastBlog.heading}</p>
                    <p className="text-sm text-gray-300">{thirdLastBlog.content}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full h-96">
              {/* Fourth Last  */}
              <div
                className="border-box w-full h-full relative"
                style={{
                  backgroundImage: `url(${fourthLastBlog.picture})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                {/* Semi-transparent Overlay */}
                <div className="absolute inset-0 bg-black opacity-50"></div>

                {/* Text Content */}
                <div className="absolute w-full h-full flex items-end justify-center text-start text-white font-bold p-1">
                  <div className="w-full">
                    <p className="text-start text-4xl">{fourthLastBlog.heading}</p>
                    <p className="text-sm text-gray-600 bg-yellow-300 p-1">{fourthLastBlog.content}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-1/2 text-center ml-2 border ">
            <div className="h-32 w-full ">
              <p className="text-center font-semibold p-4 text-2xl bg-gray-400 mb-2">More Blogs</p>

              {BlogsData.map((blog, index) => (
                <OtherBlogs blog={blog} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExploreBlogsComponent;

function OtherBlogs({ blog }) {
  return (
    <div className="w-full h-24 flex mb-2 border">
      <div className="w-40 h-full flex justify-center">
        <img src={blog.picture} className=" object-cover" alt="" />
      </div>
      <div className="text-md font-semibold w-full text-center pt-2">{blog.heading}</div>
    </div>
  );
}
