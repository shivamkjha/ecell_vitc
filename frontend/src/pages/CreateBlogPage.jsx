
// import React, { useState } from 'react';

// const CreateBlogPage = () => {
//   const [title, setTitle] = useState('');
//   const [description, setDescription] = useState('');
//   const [content, setContent] = useState('');

//   // Handle the form submission
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // Process form data here
//   };

//   // Placeholder content editable component
//   const ContentEditable = ({ content, setContent }) => {
//     return (
//       <div
//         role="textbox"
//         tabIndex={0}
//         contentEditable
//         onInput={(e) => setContent(e.currentTarget.textContent)}
//         className="w-full h-64 border-2 border-blue-300 bg-blue-50 rounded-lg px-3 py-2 text-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-300 transition-shadow duration-300 ease-in-out shadow-sm hover:shadow-md"
//         placeholder="Rich Text Editor"
//       >
//         {content}
//       </div>
//       <div className='text-4xl mb-4'>
//         <input
//           type="text"
//           placeholder="Title"
//           className="w-60 h-16 text-center rounded border-blue-600"
//         />
//       </div>
//       <div className='w-full h-96 border-2 border-blue-600 rounded'>
//       </div>
//       <div className='flex justify-center mt-10'>
//           <Button variant='contained' color='success'>Submit</Button>
//       </div>
//     </div>
//   );
// };

// export default CreateBlogPage;
