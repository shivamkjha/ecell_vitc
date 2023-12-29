import React, { useState } from "react";

function CreateEventPage() {
  const [fields, setFields] = useState([{ coordinator: '', contactNumber: '' }]);

  const handleFileUpload = (event) => {
    // Handle the file upload process here
  };

  const addField = () => {
    setFields([...fields, { coordinator: '', contactNumber: '' }]);
  };

  const removeField = (index) => {
    if (fields.length > 1) {
      setFields(fields.filter((_, idx) => idx !== index));
    }
  };

  const updateField = (index, key, value) => {
    const updatedFields = fields.map((field, idx) => {
      if (idx === index) {
        return { ...field, [key]: value };
      }
      return field;
    });
    setFields(updatedFields);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="bg-white p-8 rounded-3xl shadow-2xl w-full border border-blue-300 overflow-auto" style={{ minHeight: '100vh' }}>
        <h1 className="text-4xl font-custom mb-8 text-center text-blue-800">
          Create & Edit Event Page
        </h1>
        
        <div className="flex justify-center mb-8">
          <button className="inline-block bg-gradient-to-r from-blue-600 to-blue-700 text-white py-2 px-6 rounded-full hover:from-blue-700 hover:to-blue-800 transition duration-300 ease-in-out shadow-lg">
            + New Event
          </button>
        </div>
        
        <div className="mb-6">
          <input
            type="text"
            className="w-full p-4 text-lg text-blue-800 bg-blue-50 border-2 border-blue-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-500 transition duration-300 ease-in-out"
            placeholder="Title"
          />
        </div>
        
        <div className="mb-6">
          <textarea
            className="w-full p-4 text-lg text-blue-800 bg-blue-50 border-2 border-blue-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-500 transition duration-300 ease-in-out"
            rows="4"
            placeholder="Description"
          ></textarea>
        </div>
        
        <div className="mb-6 flex gap-4 items-center">
          <div className="flex-grow">
            <input
              type="text"
              className="w-full p-4 text-lg text-blue-800 bg-blue-50 border-2 border-blue-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-500 transition duration-300 ease-in-out"
              placeholder="Event Dates"
            />
          </div>
          <button className="bg-blue-600 text-white p-4 rounded-full hover:bg-blue-700 transition duration-300 ease-in-out shadow-lg">
            +
          </button>
        </div>

        {fields.map((field, index) => (
          <div key={index} className="mb-6">
            <input
              type="text"
              value={field.coordinator}
              onChange={(e) => updateField(index, 'coordinator', e.target.value)}
              className="w-full p-4 text-lg text-blue-800 bg-blue-50 border-2 border-blue-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-500 transition duration-300 ease-in-out mb-4"
              placeholder={'Student Coordinator ${index + 1}'}
            />
            <input
              type="text"
              value={field.contactNumber}
              onChange={(e) => updateField(index, 'contactNumber', e.target.value)}
              className="w-full p-4 text-lg text-blue-800 bg-blue-50 border-2 border-blue-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-500 transition duration-300 ease-in-out"
              placeholder={'Contact No. ${index + 1}'}
            />
            {fields.length > 1 && (
              <button 
                onClick={() => removeField(index)}
                className="text-red-600 hover:text-red-700 transition duration-300 ease-in-out mt-2">
                <span className="text-xl">− Remove</span>
              </button>
            )}
          </div>
        ))}

        <button 
          onClick={addField}
          className="bg-blue-600 text-white p-4 rounded-full hover:bg-blue-700 transition duration-300 ease-in-out shadow-lg mb-6">
          <span className="text-xl">+ Add More</span>
        </button>

        <div className="mb-6">
          <input
            type="text"
            className="w-full p-4 text-lg text-blue-800 bg-blue-50 border-2 border-blue-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-500 transition duration-300 ease-in-out"
            placeholder="Faculty Coordinator"
          />
        </div>
        
        <div className="mb-8">
          <label className="block mb-2 text-blue-800 font-medium" htmlFor="upload-photo">
            Upload Image
          </label>
          <input
            type="file"
            id="upload-photo"
            className="w-full text-lg text-blue-800 p-4 bg-blue-50 border-2 border-blue-300 rounded-xl cursor-pointer file:bg-blue-600 file:border-none file:px-6 file:py-2 file:text-white file:rounded-full file:font-medium file:shadow-md hover:file:bg-blue-700 transition duration-300"
            onChange={handleFileUpload}
          />
        </div>
        
        <div className="flex justify-center">
          <button className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-2 px-6 rounded-xl hover:from-blue-700 hover:to-blue-800 transition duration-300 ease-in-out shadow-lg">
            Submit Event
          </button>
        </div>
      </div>
    </div>
  );
}

export default CreateEventPage;