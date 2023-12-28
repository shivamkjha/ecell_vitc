import React from "react";
import { Button } from "@mui/material";

function CreateEventsPage() {
  // const [selectedFile, setSelectedFile] = useState(null);
  return (
    <div className="m-8">
      <div className="text-3xl text-white mb-4 text-center">
        <p className="inline bg-primary p-2 rounded">New Event</p> <br />
      </div>
      <div className="text-3xl mb-4">
        <input
          type="text"
          placeholder="Title"
          className="m-2 h-12 text-center rounded border-blue-600"
        />
        <br />
        <input
          type="text"
          placeholder="Event Date"
          className=" h-12 m-2 text-center rounded border-blue-600"
        />
        <br />
        <input
          type="text"
          placeholder="Faculty Coordinator"
          className="h-12 m-2 text-center rounded border-blue-600"
        />
        <br />
        <input
          type="text"
          placeholder="Student Coordinator"
          className=" h-12 m-2 text-center rounded border-blue-600"
        />
        <input
          type="text"
          placeholder="Contact"
          className=" h-12 m-2 text-center rounded border-blue-600"
        />
        <br />

        <div className="h-16">
          <label className="text-center text-xl font-bold" htmlFor="">
            Upload Picture:{" "}
          </label>
          <input
            className="text-center border text-xl rounded-xl"
            type="file"
          />
        </div>
      </div>

      <div className="w-full h-96 border-2 border-blue-600 rounded">
        <input className="w-full h-full text-center text-2xl" placeholder="Write Description of the event" type="text" />
      </div>
      <div className="flex justify-center mt-10">
        <Button variant="contained" color="success">
          Submit
        </Button>
      </div>
    </div>
  );
}

export default CreateEventsPage;
