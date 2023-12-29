// // // // import React from 'react'
// // // // import { Button } from '@mui/material';


// // // // function CreateBlogPage() {
// // // //   return (
// // // //     <div className='m-8'>
// // // //       <div className="text-3xl text-white mb-4">
// // // //         <p className="inline bg-primary p-2 rounded">New Blog</p> <br />
// // // //       </div>
// // // //       <div className='text-4xl mb-4'>
// // // //         <input
// // // //           type="text"
// // // //           placeholder="Title"
// // // //           className="w-60 h-16 text-center rounded border-blue-600"
// // // //         />
// // // //       </div>
// // // //       <div className='w-full h-96 border-2 border-blue-600 rounded'>
// // // //       </div>
// // // //       <div className='flex justify-center mt-10'>
// // // //           <Button variant='contained' color='success'>Submit</Button>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // }

// // // // export default CreateBlogPage;











// // // // import React, { useState } from 'react';
// // // // Import a rich text editor component, for example `react-quill`




// // // // Blog form component
// // // // const CreateBlogPage = () => {
// // // //   const [title, setTitle] = useState('');
// // // //   const [description, setDescription] = useState('');
// // // //   const [content, setContent] = useState('');

// // // //   // Handle form submission
// // // //   const handleSubmit = (event) => {
// // // //     event.preventDefault();
// // // //     console.log({ title, description, content });
// // // //     // Here you would typically send the data to a server
// // // //   };

// // // //   return (
// // // //     <div className="container mx-auto p-4">
// // // //       <form onSubmit={handleSubmit}>
// // // //         <div className="mb-4">
// // // //           <label htmlFor="title" className="block text-gray-700 text-sm font-bold mb-2">Title</label>
// // // //           <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)}
// // // //                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
// // // //         </div>
// // // //         <div className="mb-4">
// // // //           <label htmlFor="description" className="block text-gray-700 text-sm font-bold mb-2">Description</label>
// // // //           <textarea id="description" value={description} onChange={(e) => setDescription(e.target.value)}
// // // //                     className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" />
// // // //         </div>
// // // //         <div className="mb-4">
// // // //           <label htmlFor="content" className="block text-gray-700 text-sm font-bold mb-2">Content</label>
// // // //           {/* <ReactQuill theme="snow" value={content} onChange={setContent} /> */}
// // // //         </div>
// // // //         <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
// // // //           Submit
// // // //         </button>
// // // //       </form>
// // // //     </div>
// // // //   );
// // // // };


// // // // const CreateBlogPage = () => {
// // // //   const [title, setTitle] = useState('');
// // // //   const [description, setDescription] = useState('');
// // // //   const [content, setContent] = useState('');

// // // //   // Handle form submission
// // // //   const handleSubmit = (event) => {
// // // //     event.preventDefault();
// // // //     console.log({ title, description, content });
// // // //     // Here you would typically send the data to a server
// // // //   };

// // // //   return (
// // // //     <div className="container mx-auto p-4">
// // // //       <form onSubmit={handleSubmit} className="bg-blue-100 shadow-md rounded px-8 pt-6 pb-8 mb-4">
// // // //         <div className="mb-6">
// // // //           <label htmlFor="title" className="block text-blue-700 text-lg font-bold mb-2">Title</label>
// // // //           <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)}
// // // //                  className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
// // // //         </div>
// // // //         <div className="mb-6">
// // // //           <label htmlFor="description" className="block text-blue-700 text-lg font-bold mb-2">Description</label>
// // // //           <textarea id="description" value={description} onChange={(e) => setDescription(e.target.value)}
// // // //                     className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
// // // //         </div>
// // // //         <div className="mb-6">
// // // //           <label htmlFor="content" className="block text-blue-700 text-lg font-bold mb-2">Content</label>
// // // //           {/* <ReactQuill theme="snow" value={content} onChange={setContent} 
// // // //                       className="bg-white h-60"/> */}
// // // //         </div>
// // // //         <div className="flex items-center justify-between">
// // // //           <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
// // // //             Submit
// // // //           </button>
// // // //         </div>
// // // //       </form>
// // // //     </div>
// // // //   );
// // // // };

// // // // const CreateBlogPage= () => {
// // // //   const [title, setTitle] = useState('');
// // // //   const [description, setDescription] = useState('');
// // // //   const [content, setContent] = useState('');

// // // //   // Handle form submission
// // // //   const handleSubmit = (event) => {
// // // //     event.preventDefault();
// // // //     console.log({ title, description, content });
// // // //     // Here you would typically send the data to a server
// // // //   };

// // // //   return (
// // // //     <div className="container mx-auto p-4">
// // // //       <form onSubmit={handleSubmit} className="bg-blue-100 shadow-md rounded px-8 pt-6 pb-8 mb-4">
// // // //         <div className="mb-4">
// // // //           <label htmlFor="title" className="block text-blue-700 text-lg font-bold mb-2">Title</label>
// // // //           <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)}
// // // //                  className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
// // // //         </div>
// // // //         <div className="mb-6">
// // // //           <label htmlFor="description" className="block text-blue-700 text-lg font-bold mb-2">Description</label>
// // // //           <div className="p-4 border-2 border-blue-300 rounded-md">
// // // //             <textarea id="description" value={description} onChange={(e) => setDescription(e.target.value)}
// // // //                       className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
// // // //           </div>
// // // //         </div>
// // // //         <div className="mb-6">
// // // //           <label htmlFor="content" className="block text-blue-700 text-lg font-bold mb-2">Content</label>
// // // //           <div className="p-4 border-2 border-blue-300 rounded-md">
// // // //             {/* <ReactQuill theme="snow" value={content} onChange={setContent} 
// // // //                         className="bg-white h-60"/> */}
// // // //           </div>
// // // //         </div>
// // // //         <div className="flex items-center justify-between">
// // // //           <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
// // // //             Submit
// // // //           </button>
// // // //         </div>
// // // //       </form>
// // // //     </div>
// // // //   );
// // // // };

// // // // const CreateBlogPage= () => {
// // // //   const [title, setTitle] = useState('');
// // // //   const [description, setDescription] = useState('');
// // // //   const [content, setContent] = useState('');

// // // //   // Handle form submission
// // // //   const handleSubmit = (event) => {
// // // //     event.preventDefault();
// // // //     console.log({ title, description, content });
// // // //     // Here you would typically send the data to a server
// // // //   };

// // // //   return (
// // // //     <div className="container mx-auto p-4">
// // // //       <form onSubmit={handleSubmit} className="bg-white p-8 shadow-lg rounded-lg">
// // // //         <div className="mb-4">
// // // //           <label htmlFor="title" className="block text-blue-600 text-lg font-bold mb-2">Title</label>
// // // //           <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)}
// // // //                  className="shadow appearance-none border border-blue-300 rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-200" />
// // // //         </div>
// // // //         <div className="mb-4">
// // // //           <label htmlFor="description" className="block text-blue-600 text-lg font-bold mb-2">Description</label>
// // // //           <textarea id="description" value={description} onChange={(e) => setDescription(e.target.value)}
// // // //                     className="shadow appearance-none border border-blue-300 rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-200" />
// // // //         </div>
// // // //         <div className="mb-4">
// // // //           <label htmlFor="content" className="block text-blue-600 text-lg font-bold mb-2">Content</label>
// // // //           {/* <ReactQuill theme="snow" value={content} onChange={setContent} 
// // // //                       className="bg-white h-60 border border-blue-300 rounded py-2 px-3"/> */}
// // // //         </div>
// // // //         <button type="submit" className="inline-flex items-center justify-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
// // // //           Submit
// // // //         </button>
// // // //       </form>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default CreateBlogPage;

// // // import React, { useState } from 'react';
// // // // import 'react-quill/dist/quill.snow.css'; // Import quill styles if you're using react-quill

// // // const CreateBlogPage = () => {
// // //   const [title, setTitle] = useState('');
// // //   const [description, setDescription] = useState('');
// // //   // ... you would include state for other form fields as needed

// // //   // Handle the form submission
// // //   const handleSubmit = (event) => {
// // //     event.preventDefault();
// // //     // Process form data here
// // //   };

// // //   return (
// // //     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
// // //       <div className="w-full max-w-4xl p-8 bg-white shadow-md">
// // //         <form onSubmit={handleSubmit}>
// // //           <div className="mb-4">
// // //             <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
// // //             <input
// // //               type="text"
// // //               id="title"
// // //               value={title}
// // //               onChange={(e) => setTitle(e.target.value)}
// // //               className="mt-1 block w-full border-b-2 border-blue-500 px-3 py-2 shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
// // //             />
// // //           </div>
// // //           <div className="mb-4">
// // //             <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
// // //             <textarea
// // //               id="description"
// // //               value={description}
// // //               onChange={(e) => setDescription(e.target.value)}
// // //               rows={4}
// // //               className="mt-1 block w-full border-b-2 border-blue-500 px-3 py-2 shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
// // //             />
// // //           </div>
// // //           {/* You can replace this div with a rich text editor component like react-quill */}
// // //           <div className="mb-4">
// // //             <label htmlFor="content" className="block text-sm font-medium text-gray-700">Rich Text Editor</label>
// // //             <div className="mt-1 block w-full border-b-2 border-blue-500 px-3 py-2 shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500">
// // //               {/* Rich text editor goes here */}
// // //             </div>
// // //           </div>
// // //           <div className="flex justify-end">
// // //             <button type="submit" className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-blue-500 border border-transparent rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
// // //               Save
// // //             </button>
// // //           </div>
// // //         </form>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default CreateBlogPage;
// // // import React, { useState } from 'react';

// // // const CreateBlogPage = () => {
// // //   const [title, setTitle] = useState('');
// // //   const [description, setDescription] = useState('');
// // //   const [content, setContent] = useState('');

// // //   // Handle the form submission
// // //   const handleSubmit = (event) => {
// // //     event.preventDefault();
// // //     // Process form data here
// // //   };

// // //   return (
// // //     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
// // //       <div className="w-full max-w-4xl p-8 bg-white shadow-lg rounded">
// // //         <form onSubmit={handleSubmit} className="space-y-5">
// // //           <div className="space-y-1">
// // //             <label htmlFor="title" className="text-lg font-semibold text-gray-700">Title</label>
// // //             <input
// // //               type="text"
// // //               id="title"
// // //               value={title}
// // //               onChange={(e) => setTitle(e.target.value)}
// // //               className="w-full border-2 border-blue-500 rounded px-3 py-2 text-gray-700 focus:outline-none"
// // //             />
// // //           </div>
// // //           <div className="space-y-1">
// // //             <label htmlFor="description" className="text-lg font-semibold text-gray-700">Description</label>
// // //             <textarea
// // //               id="description"
// // //               value={description}
// // //               onChange={(e) => setDescription(e.target.value)}
// // //               rows={4}
// // //               className="w-full border-2 border-blue-500 rounded px-3 py-2 text-gray-700 focus:outline-none"
// // //             />
// // //           </div>
// // //           <div className="space-y-1">
// // //             <label htmlFor="content" className="text-lg font-semibold text-gray-700">Rich Text Editor</label>
// // //             <div
// // //               id="content"
// // //               contentEditable
// // //               onInput={(e) => setContent(e.currentTarget.textContent)}
// // //               className="w-full h-64 border-2 border-blue-500 rounded px-3 py-2 text-gray-700 focus:outline-none"
// // //             />
// // //           </div>
// // //           <button
// // //             type="submit"
// // //             className="px-6 py-2 bg-blue-500 text-white rounded shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
// // //           >
// // //             Save
// // //           </button>
// // //         </form>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default CreateBlogPage;

// // import React, { useState } from 'react';

// // const CreateBlogPage= () => {
// //   const [title, setTitle] = useState('');
// //   const [description, setDescription] = useState('');
// //   const [content, setContent] = useState('');

// //   // Handle the form submission
// //   const handleSubmit = (event) => {
// //     event.preventDefault();
// //     // Process form data here
// //   };

// //   return (
// //     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
// //       <div className="w-full max-w-4xl p-8 bg-white shadow-lg rounded">
// //         <form onSubmit={handleSubmit} className="space-y-5">
// //           <div className="space-y-1">
// //             <label htmlFor="title" className="text-lg font-semibold text-gray-700">Title</label>
// //             <input
// //               type="text"
// //               id="title"
// //               value={title}
// //               onChange={(e) => setTitle(e.target.value)}
// //               className="w-full border-2 border-blue-500 rounded px-3 py-2 text-gray-700 focus:outline-none"
// //             />
// //           </div>
// //           <div className="space-y-1">
// //             <label htmlFor="description" className="text-lg font-semibold text-gray-700">Description</label>
// //             <textarea
// //               id="description"
// //               value={description}
// //               onChange={(e) => setDescription(e.target.value)}
// //               rows={4}
// //               className="w-full border-2 border-blue-500 rounded px-3 py-2 text-gray-700 focus:outline-none"
// //             />
// //           </div>
// //           <div className="space-y-1">
// //             <label htmlFor="content" className="text-lg font-semibold text-gray-700">Rich Text Editor</label>
// //             <div
// //               id="content"
// //               contentEditable
// //               onInput={(e) => setContent(e.currentTarget.textContent)}
// //               className="w-full h-64 border-2 border-blue-500 rounded px-3 py-2 text-gray-700 focus:outline-none"
// //             />
// //           </div>
// //           <button
// //             type="submit"
// //             className="px-6 py-2 bg-blue-500 text-white rounded shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
// //           >
// //             Save
// //           </button>
// //         </form>
// //       </div>
// //     </div>
// //   );
// // };

// // export default CreateBlogPage;
// import React, { useState } from 'react';

// const CreateBlogPage   = () =>{
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
//         className="w-full h-64 border-2 border-blue-300 bg-blue-50 rounded px-3 py-2 text-gray-700 focus:outline-none"
//         placeholder="Rich Text Editor"
//       >
//         {content}
//       </div>
//     );
//   };

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
//       <div className="w-full max-w-4xl p-8 bg-white shadow-lg rounded-lg">
//         <button className="mb-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
//           + New Blog Page
//         </button>
//         <form onSubmit={handleSubmit} className="space-y-6">
//           <div className="space-y-2">
//             <input
//               type="text"
//               id="title"
//               value={title}
//               onChange={(e) => setTitle(e.target.value)}
//               placeholder="Title"
//               className="w-full border-2 border-blue-300 bg-blue-50 rounded px-3 py-2 text-gray-700 focus:outline-none"
//             />
//           </div>
//           <div className="space-y-2">
//             <textarea
//               id="description"
//               value={description}
//               onChange={(e) => setDescription(e.target.value)}
//               rows={4}
//               placeholder="Description"
//               className="w-full border-2 border-blue-300 bg-blue-50 rounded px-3 py-2 text-gray-700 focus:outline-none"
//             />
//           </div>
//           <div className="space-y-2">
//             <ContentEditable content={content} setContent={setContent} />
//           </div>
//           <div className="flex justify-end">
//             <button
//               type="submit"
//               className="px-6 py-2 bg-blue-500 text-white rounded shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
//             >
//               Save
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default CreateBlogPage;
import React, { useState } from 'react';

const CreateBlogPage = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [content, setContent] = useState('');

  // Handle the form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Process form data here
  };

  // Placeholder content editable component
  const ContentEditable = ({ content, setContent }) => {
    return (
      <div
        role="textbox"
        tabIndex={0}
        contentEditable
        onInput={(e) => setContent(e.currentTarget.textContent)}
        className="w-full h-64 border-2 border-blue-300 bg-blue-50 rounded-lg px-3 py-2 text-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-300 transition-shadow duration-300 ease-in-out shadow-sm hover:shadow-md"
        placeholder="Rich Text Editor"
      >
        {content}
      </div>
    );
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-4xl p-8 bg-white shadow-xl rounded-2xl transition-all duration-300 ease-in-out hover:shadow-2xl">
        <button className="mb-4 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg shadow-lg transition-colors duration-300 ease-in-out">
          + New Blog Page
        </button>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Title"
              className="w-full border-2 border-blue-300 bg-blue-50 rounded-lg px-3 py-2 text-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-300 transition-shadow duration-300 ease-in-out shadow-sm hover:shadow-md"
            />
          </div>
          <div className="space-y-2">
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={4}
              placeholder="Description"
              className="w-full border-2 border-blue-300 bg-blue-50 rounded-lg px-3 py-2 text-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-300 transition-shadow duration-300 ease-in-out shadow-sm hover:shadow-md"
            />
          </div>
          <div className="space-y-2">
            <ContentEditable content={content} setContent={setContent} />
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-300 ease-in-out"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateBlogPage;
