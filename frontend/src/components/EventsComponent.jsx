import React from "react";
import Heading from "./widgets/Heading";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";


const eventsData = [
  {
    picture: "/images/IPLBattle.png",
    eventName: "IPL Battle",
    description: `IPL is both a religion and a festival! None wants to miss it.
    A boon to all the people bored of binge-hearing the same old
    classes and lectures. A blessing to all those who have waited for
    something exciting to happen. Yes, IPL Auction is here. E-cell is
    organizing an exciting 8-hour long IPL-auction where people can
    build their dream team.`,
  },
  {
    picture: "/images/StartupHunt.png",
    eventName: "Startup Hunt",
    description: `It's time to immerse yourself in the art of strategic trading. Dive into the chaos of stocks, where every decision echoes in the market! Will you conquer or crumble?
    Only one way to find out.`,
  },
  {
    picture: "/images/StockMarketSimulation.png",
    eventName: "Stock Market Simulation",
    description: `Along with the share market, this event also incorporates modern infrastructure by encouraging crypto and forex trading. Trading will be done through virtual currency on a reputed platform.`,
  },
  {
    picture: "/images/Hackathon.png",
    eventName: "48 Hours Hackathon",
    description: `The way to get good ideas is to get lots of ideas and throw the bad ones away.
    E-cell welcomes you all to join this exciting 24 hours hackathon.
    You get high-speed internet, great food and whatnot.
    Register now to get your seat secured and stand a chance to bag an internship and a cash prize of 25,000.
    Think. Code. Innovate.`,
  },
  {
    picture: "/images/IPLBattle3.0.png",
    eventName: "IPL Battle",
    description: `IPL is both a religion and a festival! None wants to miss it.
    A boon to all the people bored of binge-hearing the same old
    classes and lectures. A blessing to all those who have waited for
    something exciting to happen. Yes, IPL Auction is here. E-cell is
    organizing an exciting 8-hour long IPL-auction where people can build their dream team.`,
  },
];


function EventsComponent() {
  return (
    <div id="events">
      <Heading heading={"Our Events"} />
      <div className="ml-10 sm:ml-24 flex items-center overflow-x-auto overflow-hidden rounded-l-3xl">
        {eventsData.map((event, index) => (
          <EventBox
          key={index}
          photo={event.picture}
          title={event.title}
          description={event.description}
          />
          ))}
      </div>
    </div>
  );
}

export default EventsComponent;

function EventBox({ title, description, photo}) {
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
            image={photo}
            alt={title}
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
              {title}
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