import React from 'react'
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import CopyrightIcon from "@mui/icons-material/Copyright";

function Footer() {
  return (
    <div
      className="flex items-center justify-evenly w-full h-72 text-white"
      style={{ backgroundColor: "rgba(24,25,81,255)" }}
    >
        {/* Contacts  */}
      <div className="w-52 h-32">
        <p className="font-bold text-xl">Contacts</p>
        <p>Email : ecellvit@gmail.com</p>
        <p>President : 98283892xxx</p>
        <p>Vice President : 9876567xxx</p>
      </div>

      {/* Go to different pages  */}
      <div className="w-52 h-32 text-blue-500">
        <p className="font-bold text-xl text-white">Links</p>
        <a href="">Blogs</a>
        <br />
        <a href="">Events</a>
        <br />
        <a href="">Timeline</a>
      </div>

      {/* Social Media Sites  */}
      <div className="w-96 h-32 text-center">
        <p className="text-xl font-bold">Socials</p>
        <InstagramIcon className="mr-2" />
        <TwitterIcon className="m-2" />
        <LinkedInIcon className="m-2" /><br />
        <CopyrightIcon />
        Copyright Ecell VITC - All Rights Reserved
      </div>
    </div>
  );
}

export default Footer
