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

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const menuItems = ["Events","Our Team", "Blogs", "Timeline", "Alumni", "Contact us"];

  const drawer = (
    <List>
      <ListItem>
        <img className="w-48 h-16" src="public/images/ecell_logo2.png" alt="" />
      </ListItem>
      {menuItems.map((text, index) => (
        <ListItem key={text}>
          <Link to={text.toLowerCase()}>
            <ListItemText primary={text} />
          </Link>
        </ListItem>
      ))}
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
              <img
                className="w-64 h-16 m-0"
                src="/images/ecell_logo2.png"
                alt=""
              />
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
