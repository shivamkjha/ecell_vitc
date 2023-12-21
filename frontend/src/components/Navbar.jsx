import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Hidden from "@mui/material/Hidden";
import { Link } from "react-router-dom";
import LoginIcon from "@mui/icons-material/Login";
import { Link as ScrollLink } from "react-scroll";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailOutlineIcon from "@mui/icons-material/MailOutline";



function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const menuItems = [
    "Events",
    "Blogs",
    "Team",
    "Timeline",
    "Alumni",
    "Contact us",
  ];

  // Navigation Drawer 
  const drawer = (
    <List className="w-96 h-full bg-bcol">
      <ListItem className="w-full flex-col">
        <Link to={"/"}>
        <img className="w-52 h-16" src="/images/ecell_logo2.png" alt="" />
        </Link>
      </ListItem>
      {menuItems.map((text, index) => (
        <ListItem className="w-full h-12 flex-col cursor-pointer" key={text}>
          <ScrollLink
            to={text.split(" ")[0].toLowerCase()}
            spy={true}
            smooth={true}
            offset={-100}
            duration={1000}
          >
            <ListItemText primary={text} />
          </ScrollLink>
        </ListItem>
      ))}

      {/* Socials  */}
      <div className="w-full sm:w-96 text-center p-2 ">
        <p className="text-xl font-bold">Socials</p>
        <a className="hover:scale-105" href="https://www.instagram.com/ecell_vitcc/">
            <InstagramIcon fontSize="medium" className="mr-2" />
          </a>
          <a href="">
            <MailOutlineIcon fontSize="medium" className="mr-2"/>
          </a>
          <a href="https://www.linkedin.com/in/e-cell-vit-chennai-7620bb248/">
            <LinkedInIcon fontSize="medium" className="mr-2" />
          </a>
      </div>
    </List>
  );


  return (
    <div className="">
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position="fixed"
          color="secondary"
          style={{ backgroundColor: "rgba(24, 25, 81)" }}
        >
          <Toolbar className="flex justify-between items-center">
            <IconButton
              size="large"
              color="inherit"
              aria-label="menu"
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
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
            <Button color="inherit" startIcon={<LoginIcon />}>
              <p className="hidden sm:visible">Login</p>
            </Button>
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
    </div>
  );
}

export default Navbar;
