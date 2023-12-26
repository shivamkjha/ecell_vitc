import React from "react";
import Heading from "./widgets/Heading";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
// import { EventsData } from "../pages/HomePage";

function EventBox({ eventName, description, picture }) {
  return (
    <div className="bg-bcol p-7">
      <Card
        className="w-72 h-[590px] sm:w-[330px] sm:h-[600px] ml-1 bg-white "
        style={{ borderRadius: "20px" }}
      >
        <CardActionArea>
          <CardMedia
            className="h-68 sm:h-80"
            component="img"
            // height="120"
            image={picture}
            alt={eventName}
          />
          <CardContent>
            <Typography
              gutterBottom
              // variant="h5"
              // fontSize="24px"
              fontWeight="600"
              component="div"
              className="text-md sm:text-lg text-center text-primary"
            >
              {eventName}
            </Typography>
            <Typography
              variant="body2"
              fontSize="16px"
              height="100px"
              className="text-black text-base"
            >
              {description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}

function EventsComponent() {
  const {eventsData} = EventsData;
  return (
    <div id="events">
      <Heading heading={"Our Events"} />
      <div className="ml-10 sm:ml-24 flex items-center overflow-x-auto overflow-hidden rounded-l-3xl">
        {eventsData.map((event, index) => (
          <EventBox
            key={index}
            picture={event.picture}
            eventName={event.eventName}
            description={event.description}
          /> 
        ))}
      </div>
    </div>
  );
}

export default EventsComponent;









