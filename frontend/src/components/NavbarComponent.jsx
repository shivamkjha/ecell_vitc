import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import Hidden from "@mui/material/Hidden";
import { Link } from "react-router-dom";
import LoginIcon from "@mui/icons-material/Login";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import CloseIcon from "@mui/icons-material/Close";
import LoginPage from "../pages/LoginPage";
import { useLocation } from "react-router-dom";

function NavbarComponent() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);

  const location = useLocation();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleMenuItemClick = () => {
    setMobileOpen(false);
  };

  const handleLoginButtonClick = () => {
    setLoginOpen(true);
  };

  const menuItems = [
    "Events",
    "Blogs",
    "Team",
    "Alumni",
    "Timeline",
    "Contact us",
  ];

  const socialLinks = [
    {
      href: "https://www.instagram.com/ecell_vitcc/",
      icon: <InstagramIcon fontSize="medium" className="mr-2" />,
    },
    {
      href: "#",
      icon: <MailOutlineIcon fontSize="medium" className="mr-2" />,
    },
    {
      href: "https://www.linkedin.com/in/e-cell-vit-chennai-7620bb248/",
      icon: <LinkedInIcon fontSize="medium" className="mr-2" />,
    },
  ];

  const drawer = (
    <div className="w-screen sm:w-96 flex flex-col justify-between h-full bg-bcol font-semibold text-xl text-gray-700">
      <div className="flex justify-center bg-primary p-0">
        <Link to={"/"}>
          <img className="w-64 h-20 m-0" src="/images/ecell_logo2.png" alt="" />
        </Link>
      </div>

      <div className="my-auto text-center flex-col justify-center">
        <div>
          <Link to={""} onClick={handleMenuItemClick}>
            <div className="w-full h-12 hover:scale-150 hover:text-white transition duration-300 ease-in-out">
              <p className="text-center font-semibold">Home</p>
            </div>
          </Link>
        </div>

        <div className="flex flex-col justify-center">
          {menuItems.map((text, index) => (
            <Link
              key={text}
              to={text.split(" ")[0].toLowerCase()}
              onClick={handleMenuItemClick}
            >
              <div className="w-full h-12 cursor-pointer hover:scale-150 hover:text-white transition duration-300 ease-in-out">
                <p className="text-center">{text}</p>
              </div>
            </Link>
          ))}
          <div className="text-center">
            <IconButton onClick={handleDrawerToggle}>
              <CloseIcon
                className="text-white hover:scale-110"
                fontSize="large"
              />
            </IconButton>
          </div>
        </div>
      </div>

      <div className="text-center p-4">
        {socialLinks.map((link, index) => (
          <a key={index} className="hover:scale-105" href={link.href}>
            {link.icon}
          </a>
        ))}
      </div>
    </div>
  );

  return (
    <div className="flex justify-evenly">
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          className=""
          position="fixed"
          color="secondary"
          style={{ backgroundColor: "rgba(24, 25, 81)" }}
        >
          <Toolbar className="flex justify-between items-center p-1">
            <IconButton
              size="large"
              color="inherit"
              aria-label="menu"
              onClick={handleDrawerToggle}
            >
              <MenuIcon fontSize="" />
            </IconButton>

            {/* Centered Logo */}
            <Typography
              variant="h6"
              component="div"
              className="flex justify-center items-center"
            >
              <Link to={"/"}>
                <img
                  className="w-64 h-16 m-0"
                  src="/images/ecell_logo2.png"
                  alt=""
                />
              </Link>
            </Typography>

            {/* Right-aligned Login Button */}
            <div>
              {location.pathname === "/" && (
                <div className="ml-auto">
                  <Button
                    color="inherit"
                    startIcon={<LoginIcon />}
                    onClick={handleLoginButtonClick}
                  >
                    <p className="hidden sm:visible">Login</p>
                  </Button>
                </div>
              )}
            </div>
          </Toolbar>
        </AppBar>

        {/* Drawer for smaller screens, positioned on the right */}
        <Hidden mdUp implementation="css">
          <Drawer
            variant="temporary"
            anchor="left"
            open={mobileOpen}
            onClose={handleDrawerToggle}
          >
            {drawer}
          </Drawer>
        </Hidden>
      </Box>

      {/* Render the LoginPage component with the loginOpen state */}
      <LoginPage open={loginOpen} onClose={() => setLoginOpen(false)} />
    </div>
  );
}

export default NavbarComponent;
