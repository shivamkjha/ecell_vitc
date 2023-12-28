import React from 'react'
import { Button } from '@mui/material';
import { Star } from "@mui/icons-material";


const blogsData = [
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


function ViewBlogs() {
  return (
    <div>
      <div className="w-full h-30 text-3xl p-2 font-semibold text-center">
        <p>Welcome! {blogsData[0].author}</p>
        <button className="bg-green-600 rounded-xl w-80 p-2 font-medium text-white m-6">
          Write a new Blog
        </button>
      </div>

      <div className=" border-black h-screen">

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
export default ViewBlogs




// BlogTable component to display each blog entry
const BlogsTable = ({ blog, index }) => {
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
    <div className="border-b-2 border-black flex w-screen justify-evenly font-semibold p-3">
      <div className="w-1/6 ml-8 flex items-center text-center">
        {index + 1}
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