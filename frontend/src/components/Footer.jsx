import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import CopyrightIcon from "@mui/icons-material/Copyright";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <div
        className="flex flex-wrap items-center justify-evenly w-full h-96 sm:h-52 text-white bottom-0"
        style={{ backgroundColor: "rgba(24,25,81,255)" }}
      >
        {/* Contacts  */}
        <div className="flex pl-4 justify-center w-full sm:w-1/2">
          <div className="w-2/3 mr-4">
            <p className="font-bold text-xl">Contacts</p>
            <p>Email : ecellvit@gmail.com</p>
            <p>President : 98283892xxx</p>
            <p>Vice President : 9876567xxx</p>
          </div>

          <div className="w-1/2 h-32 text-blue-500">
            <p className="font-bold text-xl text-white">Links</p>
            <Link to="blogs">Blogs</Link>
            <br />
            <a href="">Events</a>
            <br />
            <a href="">Timeline</a>
          </div>
        </div>

        {/* Social Media Sites  */}
        <div className="w-full sm:w-96 h-32 text-center p-2">
          <p className="text-xl font-bold m-2">Socials</p>
          <a href="https://www.instagram.com/ecell_vitcc/">
            <InstagramIcon fontSize="medium" className="mr-2" />
          </a>
          <a href="">
            <MailOutlineIcon fontSize="medium" className="mr-2" />
          </a>
          <a href="https://www.linkedin.com/in/e-cell-vit-chennai-7620bb248/">
            <LinkedInIcon fontSize="medium" className="mr-2" />
          </a>
          <p>Connect with us on socials</p>
        </div>
      </div>
      <div class="bg-gray text-sm p-1 flex  justify-center w-screen">
        <CopyrightIcon fontSize="small" className="mr-1" />
        <p>Copyright Ecell VITC - All Rights Reserved</p>
      </div>
    </>
  );
}

export default Footer;
