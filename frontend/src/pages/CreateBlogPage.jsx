import React from "react";
import { Button } from "@mui/material";

function CreateBlogPage() {
  // const [selectedFile, setSelectedFile] = useState(null);
  return (
    <div className="m-8 text-center">
      <div className="text-3xl text-white mb-4">
        <p className="inline bg-primary p-2 rounded">New Blog</p> <br />
      </div>
      <div className="text-4xl mb-4 flex-col justify-center">
        <input
          type="text"
          placeholder="Title"
          className="w-60 h-16 text-center rounded border-blue-600"
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

      <div className="w-full h-96 border-2 border-blue-600 rounded"></div>
      <div className="flex justify-center mt-10">
        <Button variant="contained" color="success">
          Submit
        </Button>
      </div>
    </div>
  );
}

export default CreateBlogPage;
