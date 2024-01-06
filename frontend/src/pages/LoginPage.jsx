import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import PhoneIcon from "@mui/icons-material/Phone";
import SchoolIcon from "@mui/icons-material/School";
import HomeIcon from "@mui/icons-material/Home";
import WorkIcon from "@mui/icons-material/Work";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";

function LoginPage({ open, onClose }) {
  const [loginDetails, setLoginDetails] = useState({
    username: "",
    password: "",
  });
  const [registrationDetails, setRegistrationDetails] = useState({
    username: "",
    password: "",
    email: "",
    collegeName: "",
    phoneNumber: "",
    address: "",
    workDomain: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isRegistering, setIsRegistering] = useState(false);

  const handleLoginChange = (event) => {
    setLoginDetails({
      ...loginDetails,
      [event.target.name]: event.target.value,
    });
  };

  const handleRegisterChange = (event) => {
    setRegistrationDetails({
      ...registrationDetails,
      [event.target.name]: event.target.value,
    });
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleToggleForm = () => {
    setIsRegistering(!isRegistering);
  };

  const handleLogin = () => {
    console.log("Login details:", loginDetails);
    onClose();
  };

  const handleRegister = () => {
    console.log("Registration details:", registrationDetails);
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>{isRegistering ? "Register" : "Login"}</DialogTitle>
      <DialogContent>
        {isRegistering ? (
          <>
            {/* Registration Form */}
            <TextField
              autoFocus
              margin="dense"
              label="Username"
              type="text"
              fullWidth
              name="username"
              value={registrationDetails.username}
              onChange={handleRegisterChange}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircleIcon />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              margin="dense"
              label="Password"
              type={showPassword ? "text" : "password"}
              fullWidth
              name="password"
              value={registrationDetails.password}
              onChange={handleRegisterChange}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LockIcon />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={handleClickShowPassword}>
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            {/* Add additional fields for registration if needed */}
            <Divider sx={{ my: 2 }} />
            <Typography
              variant="subtitle1"
              align="center"
              sx={{ cursor: "pointer" }}
              onClick={handleToggleForm}
            >
              Already have an account? Login
            </Typography>
          </>
        ) : (
          <>
            {/* Login Form */}
            <TextField
              autoFocus
              margin="dense"
              label="Username"
              type="text"
              fullWidth
              name="username"
              value={loginDetails.username}
              onChange={handleLoginChange}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircleIcon />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              margin="dense"
              label="Password"
              type={showPassword ? "text" : "password"}
              fullWidth
              name="password"
              value={loginDetails.password}
              onChange={handleLoginChange}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LockIcon />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={handleClickShowPassword}>
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <Divider sx={{ my: 2 }} />
            <Typography
              variant="subtitle1"
              align="center"
              sx={{ cursor: "pointer" }}
              onClick={handleToggleForm}
            >
              Don't have an account? Register
            </Typography>
          </>
        )}
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="secondary">
          Cancel
        </Button>
        {isRegistering ? (
          <Button onClick={handleRegister} variant="contained" color="success">
            Register
          </Button>
        ) : (
          <>
            <Button onClick={handleLogin} variant="contained" color="primary">
              Login
            </Button>
          </>
        )}
      </DialogActions>
    </Dialog>
  );
}

export default LoginPage;
