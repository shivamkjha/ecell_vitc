



//THE PAGE FOR GIVING ALL THE BUTTONS
import React from 'react';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function App() {
  return (
    <div className="App bg-gray-100 min-h-screen flex items-center justify-center">
      <Container maxWidth="md">
        <Box textAlign="center" p={5} className="bg-white rounded-lg shadow-xl">
          {/* <Typography variant="h4" gutterBottom className="font-bold">
            Welcome to the React App
          </Typography> */}
          <Typography variant="body1" gutterBottom>
            Click the buttons below to explore various images
          </Typography>

          {/* Buttons */}
          <div className="mt-6 space-y-4">
            <Button variant="contained" color="primary" size="large" className="w-full">
              Carousel Images
            </Button>
            <Button variant="contained" color="secondary" size="large" className="w-full">
              Team Members
            </Button>
          </div>
        </Box>
      </Container>
    </div>
  );
}

export default App;


 //   ********************************MAIN LOGIC FOR TEAM PAGE***************************************










// import React, { useState, useEffect } from 'react';
// import { Grid, Checkbox, Modal, Box, TextField, Button, Typography, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
// import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

// const UserGrid = () => {
//   const [openAddModal, setOpenAddModal] = useState(false);
//   const [openInfoModal, setOpenInfoModal] = useState(false);
//   const [selectedUser, setSelectedUser] = useState({});
//   const [newUser, setNewUser] = useState({ email: '', mobileNo: '', name: '', designation: '', imageUrl: '', batch: '' });
//   const [users, setUsers] = useState([
//     { email: 'user5@example.com', mobileNo: '123-456-7890', name: 'Nishantth Surendran', designation: 'Designation 1', imageUrl: 'http://localhost:5173/images/Team/president.png', batch: '2020-2024' },
//                 { email: 'user1@example.com', mobileNo: '123-456-7890', name: 'Maaz', designation: 'Designation 1', imageUrl: 'http://localhost:5173/images/Team/vp2.png', batch: '2020-2024' },
//                 { email: 'user2@example.com', mobileNo: '123-456-7890', name: 'Harsha', designation: 'Designation 1', imageUrl: 'http://localhost:5173/images/Team/vp1.png', batch: '2020-2024' },
//                 { email: 'user4@example.com', mobileNo: '123-456-7890', name: 'Aditi Gupta', designation: 'Designation 1', imageUrl: 'http://localhost:5173/images/Team/secratery1.png', batch: '2020-2024' },
//                 { email: 'user3@example.com', mobileNo: '123-456-7890', name: 'Mihir Kanduskar', designation: 'Designation 1', imageUrl: 'http://localhost:5173/images/Team/secratery2.png', batch: '2020-2024' },
//                 { email: 'user3@example.com', mobileNo: '123-456-7890', name: 'Ankush Chaudhary', designation: 'Designation 1', imageUrl: 'http://localhost:5173/images/Team/director8.png', batch: '2020-2024' },

//   ]);
//   const [selectedEmail, setSelectedEmail] = useState('');

//   useEffect(() => {
//     if (selectedUser.email) {
//       console.log(selectedUser);
//     }
//   }, [selectedUser]);

//   const handleOpenAddModal = () => setOpenAddModal(true);
//   const handleCloseAddModal = () => setOpenAddModal(false);
//   const handleOpenInfoModal = (user) => {
//     setSelectedUser(user);
//     setOpenInfoModal(true);
//     setSelectedEmail(user.email);
//   };
//   const handleCloseInfoModal = () => {
//     setOpenInfoModal(false);
//     setSelectedEmail('');
//   };

//   const addUser = () => {
//     if (!newUser.email || !newUser.mobileNo || !newUser.name || !newUser.designation || !newUser.imageUrl || !newUser.batch) {
//       alert('Please fill in all the fields.');
//       return;
//     }
//     setUsers([...users, newUser]);
//     setNewUser({ email: '', mobileNo: '', name: '', designation: '', imageUrl: '', batch: '' });
//     handleCloseAddModal();
//   };

//   const handleBatchChange = (event) => {
//     setNewUser({ ...newUser, batch: event.target.value });
//   };

//   const batchOptions = [];
//   const currentYear = new Date().getFullYear();
//   for (let year = 2020; year <= currentYear; year++) {
//     batchOptions.push(`${year}-${year + 4}`);
//   }

//   return (
//     <div className="p-4">
//       <Grid container spacing={2}>
//         {users.map((user, index) => (
//           <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
//             <div className="relative shadow-lg hover:shadow-xl transition-shadow duration-200 border rounded-lg overflow-hidden">
//               <Checkbox
//                 checked={selectedEmail === user.email}
//                 className="absolute top-0 left-0 m-2"
//                 onClick={() => handleOpenInfoModal(user)}
//               />
//               <img src={user.imageUrl} alt={user.name} style={{ width: '100%', height: 'auto', objectFit: 'contain' }} />
//               <Typography variant="body1" className="p-2">{user.name}</Typography>
//             </div>
//           </Grid>
//         ))}
//         <Grid item xs={12} sm={6} md={4} lg={3}>
//           <div className="flex justify-center items-center border-2 border-dashed border-gray-300 rounded-lg h-40 cursor-pointer hover:border-gray-400" onClick={handleOpenAddModal}>
//             <AddCircleOutlineIcon style={{ fontSize: '3rem', color: 'gray' }} />
//           </div>
//         </Grid>
//       </Grid>

//       <Modal open={openAddModal} onClose={handleCloseAddModal}>
//         <Box className="p-4 bg-white rounded-lg shadow-xl max-w-sm mx-auto mt-12">
//           <TextField label="Name" fullWidth margin="normal" value={newUser.name} onChange={(e) => setNewUser({ ...newUser, name: e.target.value })} />
//           <TextField label="Designation" fullWidth margin="normal" value={newUser.designation} onChange={(e) => setNewUser({ ...newUser, designation: e.target.value })} />
//           <TextField label="Email" fullWidth margin="normal" value={newUser.email} onChange={(e) => setNewUser({ ...newUser, email: e.target.value })} />
//           <TextField label="Mobile No" fullWidth margin="normal" value={newUser.mobileNo} onChange={(e) => setNewUser({ ...newUser, mobileNo: e.target.value })} />
//           <TextField label="Image URL" fullWidth margin="normal" value={newUser.imageUrl} onChange={(e) => setNewUser({ ...newUser, imageUrl: e.target.value })} />
//           <FormControl fullWidth margin="normal">
//             <InputLabel>Batch</InputLabel>
//             <Select value={newUser.batch} onChange={handleBatchChange} label="Batch">
//               {batchOptions.map(batch => (
//                 <MenuItem key={batch} value={batch}>{batch}</MenuItem>
//               ))}
//             </Select>
//           </FormControl>
//           <Button onClick={addUser} variant="contained" color="secondary" fullWidth className="mt-2">
//             Add User
//           </Button>
//         </Box>
//       </Modal>

//       <Modal open={openInfoModal} onClose={handleCloseInfoModal}>
//         <Box className="p-4 bg-white rounded-lg shadow-xl max-w-sm mx-auto mt-12">
//           <Typography variant="h6">User Details</Typography>
//           <img 
//             src={selectedUser.imageUrl} 
//             alt={selectedUser.name} 
//             style={{ width: '100px', height: '100px', objectFit: 'contain', margin: '10px 0' }} 
//           />
//           <Typography variant="body1">Name: {selectedUser.name}</Typography>
//           <Typography variant="body1">Designation: {selectedUser.designation}</Typography>
//           <Typography variant="body1">Email: {selectedUser.email}</Typography>
//           <Typography variant="body1">Mobile: {selectedUser.mobileNo}</Typography>
//           <Typography variant="body1">Batch: {selectedUser.batch}</Typography>
//           <Button onClick={handleCloseInfoModal} variant="contained" color="primary" fullWidth className="mt-2">
//             Close
//           </Button>
//         </Box>
//       </Modal>
//     </div>
//   );
// };

// // export default UserGrid;










// import React, { useState, useEffect } from 'react';
// import { Grid, Checkbox, Modal, Box, TextField, Button, Typography } from '@mui/material';
// import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

// const ImageGrid = () => {
//   const [openAddModal, setOpenAddModal] = useState(false);
//   const [openInfoModal, setOpenInfoModal] = useState(false);
//   const [selectedImage, setSelectedImage] = useState({});
//   const [checkedImages, setCheckedImages] = useState({});
//   const [imageName, setImageName] = useState('');
//   const [uploaderName, setUploaderName] = useState('');
//   const [imageUrl, setImageUrl] = useState('');
//   const [images, setImages] = useState([
//     { url: 'http://localhost:5173/images/Screenshot%202023-12-20%20at%2013.23.21.png', name: 'Image 1', uploader: 'Uploader 1' },
//        { url: 'http://localhost:5173/images/Screenshot%202023-12-20%20at%2013.22.42.png', name: 'Image 2', uploader: 'Uploader 2' },
//   ]);

//   useEffect(() => {
//     if (selectedImage.name) {
//       console.log(selectedImage);
//     }
//   }, [selectedImage]);

//   const handleOpenAddModal = () => setOpenAddModal(true);
//   const handleCloseAddModal = () => setOpenAddModal(false);
//   const handleOpenInfoModal = (image) => {
//     setSelectedImage(image);
//     setOpenInfoModal(true);
//     setCheckedImages({ ...checkedImages, [image.name]: true });
//   };
//   const handleCloseInfoModal = () => {
//     setOpenInfoModal(false);
//     if (selectedImage.name) {
//       setCheckedImages({ ...checkedImages, [selectedImage.name]: false });
//     }
//   };

//   const addImage = () => {
//     if (!imageName || !uploaderName || !imageUrl) {
//       alert('Please fill in all the fields.');
//       return;
//     }
//     const newImage = { url: imageUrl, name: imageName, uploader: uploaderName };
//     setImages([...images, newImage]);
//     setImageName('');
//     setUploaderName('');
//     setImageUrl('');
//     handleCloseAddModal();
//   };

//   return (
//     <div className="p-4">
//       <Grid container spacing={2}>
//         {images.map((image, index) => (
//           <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
//             <div className="relative shadow-lg hover:shadow-xl transition-shadow duration-200 border rounded-lg overflow-hidden">
//               <Checkbox
//                 checked={checkedImages[image.name] || false}
//                 className="absolute top-0 left-0 m-2"
//                 onClick={() => handleOpenInfoModal(image)}
//               />
//               <img src={image.url} alt={image.name} style={{ width: '100%', height: 'auto', objectFit: 'contain' }} />
//             </div>
//           </Grid>
//         ))}
//         <Grid item xs={12} sm={6} md={4} lg={3}>
//           <div className="flex justify-center items-center border-2 border-dashed border-gray-300 rounded-lg h-40 cursor-pointer hover:border-gray-400" onClick={handleOpenAddModal}>
//             <AddCircleOutlineIcon style={{ fontSize: '3rem', color: 'gray' }} />
//           </div>
//         </Grid>
//       </Grid>

//       <Modal open={openAddModal} onClose={handleCloseAddModal}>
//         <Box className="p-4 bg-white rounded-lg shadow-xl max-w-sm mx-auto mt-12">
//           <TextField label="Image Name" fullWidth margin="normal" value={imageName} onChange={(e) => setImageName(e.target.value)} />
//           <TextField label="Uploader Name" fullWidth margin="normal" value={uploaderName} onChange={(e) => setUploaderName(e.target.value)} />
//           <TextField label="Image URL" fullWidth margin="normal" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} />
//           <Button onClick={addImage} variant="contained" color="secondary" fullWidth className="mt-2">
//             Add Image
//           </Button>
//         </Box>
//       </Modal>

//       <Modal open={openInfoModal} onClose={handleCloseInfoModal}>
//         <Box className="p-4 bg-white rounded-lg shadow-xl max-w-sm mx-auto mt-12">
//           <Typography variant="h6">Image Details</Typography>
//           <img 
//             src={selectedImage.url} 
//             alt={selectedImage.name} 
//             style={{ width: '100px', height: '100px', objectFit: 'contain', margin: '10px 0' }} 
//           />
//           <Typography variant="body1">Name: {selectedImage.name}</Typography>
//           <Typography variant="body1">Uploader: {selectedImage.uploader}</Typography>
//           <Button onClick={handleCloseInfoModal} variant="contained" color="primary" fullWidth className="mt-2">
//             Close
//           </Button>
//         </Box>
//       </Modal>
//     </div>
//   );
// };

// export default ImageGrid;
