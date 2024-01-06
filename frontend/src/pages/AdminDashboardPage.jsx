import React from 'react'
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Heading from '../components/widgets/Heading';
import Button from "@mui/material/Button";
import { Link } from 'react-router-dom';
import RoleAssignmentPage from './RoleAssignmentPage';


function AdminDashboardPage() {
  return (
    <div className="w-full min-h-screen">
      <Heading heading={"Hi Admin!"} />

      {/* Events  */}
      <div className="w-full h-72 flex justify-evenly text-3xl">
        <div className=" shadow-2xl rounded-3xl border-blue-950 bg-bcol w-96 text-center font-semibold p-2">
          <h1>Events</h1>
          <div className="h-48 text-lg text-start p-4 text-gray-100">
            <p>Last Event :</p>
            <p>Upcoming Event :</p>
            <p>Upcoming Event Date :</p>
          </div>
          <Link to="/viewEvents">
            <Button variant="contained" color="success">
              View Events
            </Button>
          </Link>
        </div>

        {/* Blogs  */}
        <div className=" shadow-2xl rounded-3xl border-blue-950 bg-bcol w-96 text-center font-semibold p-2">
          <h1>Blogs</h1>
          <div className="h-48 text-lg text-start p-4 text-gray-100">
            <p>Most Liked Blog :</p>
            <p>Author with most Blogs :</p>
          </div>
          <Link to="/viewBlogs">
            <Button variant="contained" color="success">
              View Blogs
            </Button>
          </Link>
        </div>

        {/* Socials  */}
        <div className=" shadow-2xl rounded-3xl border-blue-950 bg-bcol w-96 text-center font-semibold p-2">
          <h1>Socials</h1>
          <div className="h-40 flex justify-evenly items-center">
            <div>
              <InstagramIcon fontSize="large" />
              <p className="text-center text-white">69</p>
            </div>

            <div>
              <LinkedInIcon fontSize="large" />
              <p className="text-center text-white">69</p>
            </div>
          </div>
        </div>
      </div>
      <div className="h-40 flex justify-center items-center">
        <div>
          <button className="bg-green-500 shadow-lg p-3 text-3xl rounded-xl mr-8 text-white">
            Role Assignment
          </button>
        </div>
        <div>
          <button className="bg-green-500 shadow-lg p-3 text-3xl rounded-xl text-white">
            Approve Members
          </button>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboardPage
