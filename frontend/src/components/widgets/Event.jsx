import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Button from "@mui/material/Button";

function Event({ eventName, description, picture }) {
  return (
    <div className="bg-bcol p-6">
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

export default Event;
