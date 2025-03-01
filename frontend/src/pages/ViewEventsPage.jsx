import React,{ useState, useEffect } from 'react';
import axios from "axios";
import { Button } from "@mui/material";
import { Star } from "@mui/icons-material";

// const eventsData = [
//   {
//     picture: "/images/IPLBattle.png",
//     title: "IPL Battle",
//     description: `IPL is both a religion and a festival! None wants to miss it.
//     A boon to all the people bored of binge-hearing the same old
//     classes and lectures. A blessing to all those who have waited for
//     something exciting to happen. Yes, IPL Auction is here. E-cell is
//     organizing an exciting 8-hour long IPL-auction where people can
//     build their dream team.`,
//   },
//   {
//     picture: "/images/StartupHunt.png",
//     title: "Startup Hunt",
//     description: `It's time to immerse yourself in the art of strategic trading. Dive into the chaos of stocks, where every decision echoes in the market! Will you conquer or crumble?
//     Only one way to find out.`,
//   },
//   {
//     picture: "/images/StockMarketSimulation.png",
//     title: "Stock Market Simulation",
//     description: `Along with the share market, this event also incorporates modern infrastructure by encouraging crypto and forex trading. Trading will be done through virtual currency on a reputed platform.`,
//   },
//   {
//     picture: "/images/Hackathon.png",
//     title: "48 Hours Hackathon",
//     description: `The way to get good ideas is to get lots of ideas and throw the bad ones away.
//     E-cell welcomes you all to join this exciting 24 hours hackathon.
//     You get high-speed internet, great food and whatnot.
//     Register now to get your seat secured and stand a chance to bag an internship and a cash prize of 25,000.
//     Think. Code. Innovate.`,
//   },
//   {
//     picture: "/images/IPLBattle3.0.png",
//     title: "IPL Battle",
//     description: `IPL is both a religion and a festival! None wants to miss it.
//     A boon to all the people bored of binge-hearing the same old
//     classes and lectures. A blessing to all those who have waited for
//     something exciting to happen. Yes, IPL Auction is here. E-cell is
//     organizing an exciting 8-hour long IPL-auction where people can build their dream team.`,
//   },
// ];

function ViewEvents() {
  const [eventsData, setEventsData] = useState([]);

  useEffect(() => {
    fetchEventsData();
  }, []);

  const fetchEventsData = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/v1/events");
      setEventsData(response.data.data);
    } catch (error) {
      console.error("Error fetching events data:", error);
    }
  };

  return (
    <div>
      <div className="w-full h-30 text-3xl p-2 font-semibold text-center">
        {eventsData.length > 0 ? (
          <>
            <p>Welcome! {eventsData[0].author}</p>
            <button className="bg-green-600 rounded-xl w-80 p-2 font-medium text-white m-6">
              Add new Event
            </button>
          </>
        ) : (
          <p>Welcome! No events available.</p>
        )}
      </div>

      <div className=" border-black h-screen">
        <div className="border-2 border-black bg-primary text-white flex w-screen justify-evenly font-semibold p-3">
          <div className="w-40 flex items-center text-center">S.No</div>
          <div className="w-40 flex items-center text-center">
            Date of Event
          </div>
          <div className="w-40 text-center flex items-centerr">Title</div>
          <div className="w-40 text-center flex items-center">Student Coordinator</div>
          <div className="w-40 text-center flex items-center">Faculty Coordinator</div>
          <div className="w-40 text-center flex items-center">View</div>
          <div className="w-40 text-center flex items-center">Edit</div>
          <div className="w-40 text-center flex items-center">Delete</div>
        </div>

        {eventsData.map((events, index) => (
          <div key={index} className="border-b-2 border-black flex w-screen justify-evenly font-semibold p-3">
            <div className="w-40 flex items-center text-center">{index + 1}</div>
            <div className="w-40 flex items-center text-center">
              <p>{events.dateOfModification}</p>
            </div>
            <div className="w-40 text-start flex items-centerr">
              <p>{events.title}</p>
            </div>
            <div className="w-40 text-center flex items-center">
              <p>{events.studentcoordinator1}</p>
              </div>
            <div className="w-40 text-center flex items-center">
            <p>{events.facultycoordinator}</p>
              </div>
            <div className="w-40 text-center flex items-center">
              <Button variant="contained" color="success" onClick={() => handleView(events)}>
                View
              </Button>
            </div>
            <div className="w-40 text-center flex items-center">
              <Button variant="contained" onClick={() => handleEdit(events)}>
                Edit
              </Button>
            </div>
            <div className="w-40 text-center flex items-center">
              <Button variant="contained" color="error" onClick={() => handleDelete(events)}>
                Delete
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ViewEvents;

// EventsTable component to display each event entry
const EventsTable = ({ blog, index }) => {
  const { dateOfModification, title, likes } = blog;

  const handleEdit = () => {
    // Implement edit functionality
    console.log(`Editing blog by ${author}`);
  };

  const handleDelete = () => {
    // Implement delete functionality
    console.log(`Deleting blog by ${author}`);
  };

  const handleView = () => {
    // Implement view functionality
    console.log(`Viewing blog by ${author}`);
  };

  return (
    <div className="border-b-2 border-black flex w-screen justify-evenly font-semibold p-3">
      <div className="w-40 flex items-center text-center">{index + 1}</div>
      <div className="w-40 flex items-center text-center">
        <p>{dateOfModification}</p>
      </div>
      <div className="w-40 text-start flex items-centerr">
        <p>{title}</p>
      </div>
      <div className="w-40 text-center flex items-center">Shivam Jha</div>
      <div className="w-40 text-center flex items-center">Shivam Jha</div>
      <div className="w-40 text-center flex items-center">
        <Button variant="contained" color="success" onClick={handleView}>
          View
        </Button>
      </div>
      <div className="w-40 text-center flex items-center">
        <Button variant="contained" onClick={handleEdit}>
          Edit
        </Button>
      </div>
      <div className="w-40 text-center flex items-center">
        <Button variant="contained" color="error" onClick={handleDelete}>
          Delete
        </Button>
      </div>
    </div>
  );
};
