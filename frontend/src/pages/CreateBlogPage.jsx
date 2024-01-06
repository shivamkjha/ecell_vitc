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


