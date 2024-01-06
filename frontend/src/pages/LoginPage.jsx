
import React, { useState } from 'react';
import {
  Dialog, DialogTitle, DialogContent, TextField, Button, DialogActions,
  Divider, Typography, InputAdornment, IconButton, Box, Paper, Grid,
  useMediaQuery, useTheme
} from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import PhoneIcon from '@mui/icons-material/Phone';
import SchoolIcon from '@mui/icons-material/School';
import HomeIcon from '@mui/icons-material/Home';
import WorkIcon from '@mui/icons-material/Work';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const LoginPage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const [loginOpen, setLoginOpen] = useState(false);
  const [registerOpen, setRegisterOpen] = useState(false);
  const [loginDetails, setLoginDetails] = useState({ username: '', password: '' });
  const [registrationDetails, setRegistrationDetails] = useState({
    username: '',
    password: '',
    email: '',
    collegeName: '',
    phoneNumber: '',
    address: '',
    workDomain: ''
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleLoginChange = (event) => {
    setLoginDetails({ ...loginDetails, [event.target.name]: event.target.value });
  };

  const handleRegisterChange = (event) => {
    setRegistrationDetails({
      ...registrationDetails,
      [event.target.name]: event.target.value
    });
  };

  const handleLogin = () => {
    console.log('Login details:', loginDetails);
    setLoginOpen(false);
  };

  const handleRegister = () => {
    console.log('Registration details:', registrationDetails);
    setRegisterOpen(false);
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Box sx={{
      minHeight: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: theme.palette.background.default,
      padding: 3
    }}>
      <Paper elevation={3} sx={{ padding: 3 }}>
        <Grid container spacing={3} justifyContent="center">
          <Grid item>
            <Button 
              variant="contained" 
              color="primary" 
              onClick={() => setLoginOpen(true)}
              sx={{ width: isMobile ? '100%' : 'auto' }}
            >
              Open Login Dialog
            </Button>
          </Grid>
        </Grid>
      </Paper>

      <Dialog open={loginOpen} onClose={() => setLoginOpen(false)}>
        <DialogTitle>Login</DialogTitle>
        <DialogContent>
          {/* Login Form */}
          <TextField
            autoFocus
            margin="dense"
            id="login-username"
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
            id="login-password"
            label="Password"
            type={showPassword ? 'text' : 'password'}
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
          <Typography variant="subtitle1" align="center" sx={{ cursor: 'pointer' }} onClick={() => { setLoginOpen(false); setRegisterOpen(true); }}>
            Don't have an account? Register
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setLoginOpen(false)} color="secondary">
            Cancel
          </Button>
          <Button onClick={handleLogin} variant="contained" color="primary">
            Login
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog open={registerOpen} onClose={() => setRegisterOpen(false)}>
        <DialogTitle>Register</DialogTitle>
        <DialogContent>
          {/* Registration Form */}
          <TextField
            autoFocus
            margin="dense"
            id="register-username"
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
            id="register-password"
            label="Password"
            type={showPassword ? 'text' : 'password'}
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
          <TextField
            margin="dense"
            id="register-email"
            label="Email"
            type="email"
            fullWidth
            name="email"
            value={registrationDetails.email}
            onChange={handleRegisterChange}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <EmailIcon />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            margin="dense"
            id="register-collegeName"
            label="College Name"
            type="text"
            fullWidth
            name="collegeName"
            value={registrationDetails.collegeName}
            onChange={handleRegisterChange}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SchoolIcon />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            margin="dense"
            id="register-phoneNumber"
            label="Phone Number"
            type="tel"
            fullWidth
            name="phoneNumber"
            value={registrationDetails.phoneNumber}
            onChange={handleRegisterChange}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PhoneIcon />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            margin="dense"
            id="register-address"
            label="Address"
            type="text"
            fullWidth
            name="address"
            value={registrationDetails.address}
            onChange={handleRegisterChange}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <HomeIcon />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            margin="dense"
            id="register-workDomain"
            label="Work Domain"
            type="text"
            fullWidth
            name="workDomain"
            value={registrationDetails.workDomain}
            onChange={handleRegisterChange}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <WorkIcon />
                </InputAdornment>
              ),
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setRegisterOpen(false)} color="secondary">
            Cancel
          </Button>
          <Button onClick={handleRegister} variant="contained" color="success">
            Register
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default LoginPage;
