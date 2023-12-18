import React from 'react'
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

function Navbar() {
  return (
    <div className=' z-99'>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position="static"
          color="secondary"
          style={{ backgroundColor: "rgba(24,25,81,255)" }}
        >
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              //   sx={{ mr: 2 }}
            >
              {/* <MenuIcon /> */}
              <img
                className="w-58 h-12 m-0"
                src="/images/ecell_logo2.png"
                alt=""
              />
            </IconButton>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1 }}
            ></Typography>
            <Button color="inherit">About</Button>
            <Button color="inherit">Blogs</Button>
            <Button color="inherit">Timeline</Button>
            <Button color="inherit">Alumini</Button>
            <Button color="inherit">Contact us</Button>
            {/* <Button color="inherit">Login</Button> */}
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
}

export default Navbar



// rgba(148, 147, 204, 255);