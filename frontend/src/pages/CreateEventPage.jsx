import React, { useState } from "react";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import Heading from "../components/widgets/Heading";

function CreateEventPage() {
  const [fields, setFields] = useState([
    { role: "Student Coordinator", name: "", contactNumber: "" },
  ]);
  const [dates, setDates] = useState([""]);
  const [facultyCoordinator, setFacultyCoordinator] = useState({ name: "" });

  const handleFileUpload = (event) => {
    // Handle the file upload process here
  };

  const addField = () => {
    setFields([
      ...fields,
      { role: "Student Coordinator", name: "", contactNumber: "" },
    ]);
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

  const addDateField = () => {
    setDates([...dates, ""]);
  };

  const removeDateField = (index) => {
    if (dates.length > 1) {
      setDates(dates.filter((_, idx) => idx !== index));
    }
  };

  const updateDateField = (index, value) => {
    const updatedDates = [...dates];
    updatedDates[index] = value;
    setDates(updatedDates);
  };

  const updateFacultyCoordinator = (key, value) => {
    setFacultyCoordinator({ ...facultyCoordinator, [key]: value });
  };

  return (
    <div className="container mx-auto p-8">
      <div
        className="bg-white p-6 rounded-3xl shadow-2xl w-full overflow-auto"
        style={{ minHeight: "100vh" }}
      >
        <div className="">
        <Heading heading={"Create/Edit Events"} />
        </div>

        {/* Event Dates */}
        <div className="mb-6 flex gap-4 items-center">
          {dates.map((date, index) => (
            <div key={index} className="flex-grow">
              <input
                type="text"
                value={date}
                onChange={(e) => updateDateField(index, e.target.value)}
                className={`w-${
                  12 / (dates.length + 1)
                } p-4 text-lg text-blue-800 bg-blue-50 border-2 border-blue-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-500 transition duration-300 ease-in-out`}
                placeholder={`Event Date ${index + 1}`}
              />
              {dates.length > 1 && (
                <button
                  onClick={() => removeDateField(index)}
                >
                  <RemoveCircleIcon fontSize="large" color="error" />
                </button>
              )}
            </div>
          ))}

          <button
            onClick={addDateField}
            className="bg-blue-600 text-white p-4 rounded-full hover:bg-blue-700 transition duration-300 ease-in-out shadow-lg"
          >
            <span className="text-xl">+ Add More</span>
          </button>
        </div>

        {/* Title */}
        <div className="mb-6">
          <input
            type="text"
            className="w-96 p-4 text-lg text-blue-800 bg-blue-50 border-2 border-blue-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-500 transition duration-300 ease-in-out"
            placeholder="Title"
          />
        </div>


        {/* Description */}
        <div className="mb-6">
          <textarea
            className="w-full p-4 text-lg text-blue-800 bg-blue-50 border-2 border-blue-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-500 transition duration-300 ease-in-out"
            rows="4"
            placeholder="Description"
          ></textarea>
        </div>

        {/* Student Coordinator */}
        {fields.map((field, index) => (
          <div key={index} className="mb-6 flex gap-4 items-center">
            <div className="flex-grow">
              <input
                type="text"
                value={field.name}
                onChange={(e) => updateField(index, "name", e.target.value)}
                className="w-full p-4 text-lg text-blue-800 bg-blue-50 border-2 border-blue-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-500 transition duration-300 ease-in-out"
                placeholder={`Student ${field.role}`}
              />
            </div>
            <div className="flex-grow">
              <input
                type="text"
                value={field.contactNumber}
                onChange={(e) =>
                  updateField(index, "contactNumber", e.target.value)
                }
                className="w-full p-4 text-lg text-blue-800 bg-blue-50 border-2 border-blue-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-500 transition duration-300 ease-in-out"
                placeholder={"Contact No."}
              />
            </div>
            {fields.length > 1 && (
              <button
                onClick={() => removeField(index)}
                className="bg-red-700 hover:bg-red-800 text-white p-3 rounded-full transition duration-300 ease-in-out shadow-lg"
              >
                <span className="text-xl">Remove</span>
              </button>
            )}
            <button
              onClick={addField}
              className="bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition duration-300 ease-in-out shadow-lg"
            >
              <span className="text-xl">+ Add More</span>
            </button>
          </div>
        ))}

        {/* Faculty Coordinator */}
        <div className="mb-6">
          <input
            type="text"
            value={facultyCoordinator.name}
            onChange={(e) => updateFacultyCoordinator("name", e.target.value)}
            className="w-full p-4 text-lg text-blue-800 bg-blue-50 border-2 border-blue-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-500 transition duration-300 ease-in-out"
            placeholder={"Faculty Coordinator"}
          />
        </div>

        {/* Upload Image */}
        <div className="mb-8">
          <label
            className="block mb-2 text-blue-800 font-medium"
            htmlFor="upload-photo"
          >
            Upload Image
          </label>
          <input
            type="file"
            id="upload-photo"
            className="w-full text-lg text-blue-800 p-4 bg-blue-50 border-2 border-blue-300 rounded-xl cursor-pointer file:bg-blue-600 file:border-none file:px-6 file:py-2 file:text-white file:rounded-full file:font-medium file:shadow-md hover:file:bg-blue-700 transition duration-300"
            onChange={handleFileUpload}
          />
        </div>

        {/* Submit Button */}
        <div className="flex justify-center">
          <button className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-3 rounded-2xl hover:from-blue-700 hover:to-blue-800 transition duration-300 ease-in-out shadow-lg">
            Submit Event
          </button>
        </div>
      </div>
    </div>
  );
}

export default CreateEventPage;
