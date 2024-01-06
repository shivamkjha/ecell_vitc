import React from 'react'
import Heading from './widgets/Heading';

function ContactComponent() {
  return (
    <div id="contact">
      <Heading heading={"Contact Us"} />
      <p className="text-xl text-center">
        Do you have an idea or want to collaborate? Connect with us by filling
        out the form below!
      </p>
      <div className="w-full contact p-4 sm:p-10 flex justify-center text-primary">
        <div className="bg-bcol w-full sm:w-auto text-center rounded-3xl shadow-2xl text-xl text-black p-10">
          <label  htmlFor="">
            Name
          </label>
          <br />
          <input
            className="w-60 m-2 rounded text-sm p-2 text-center"
            placeholder="Enter your name"
            type="text"
            name=""
            id=""
          />
          <br />
          <label  htmlFor="">
            Email
          </label>
          <br />
          <input
            className="w-60 m-2 rounded text-sm p-2 text-center"
            placeholder="Enter your Email"
            type="text"
            name=""
            id=""
          />
          <br />
          <label htmlFor="">
            Subject
          </label>
          <br />
          <input
            className="w-60 m-2 rounded text-sm p-2 text-center"
            placeholder="Enter Subject"
            type="text"
            name=""
            id=""
          />
          <br />
          <label htmlFor="">
            Message / Pitch
          </label>
          <br />
          <textarea
            className="sm:w-96 w-60 h-24 rounded text-sm text-center mt-2"
            placeholder="Write your message here.."
            name=""
            id=""
          ></textarea>
          <br />
          <button className="bg-primary w-24 h-10 font-semibold text-md text-white shadow-2xl rounded-xl mt-3">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default ContactComponent;

