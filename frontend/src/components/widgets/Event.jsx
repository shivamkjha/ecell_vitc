import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Button from "@mui/material/Button";


function Event({ eventName, description, picture }) {
  return (
    <div className="bg-bcol p-8">
      <Card
        className="w-[330px] h-[600px] ml-2 bg-white "
        style={{ borderRadius: "20px" }}
      >
        <CardActionArea>
          <CardMedia
            component="img"
            height="120"
            image={picture}
            alt={eventName}
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              fontSize="24px"
              fontWeight="600"
              component="div"
              className="text-center text-primary"
            >
              {eventName}
            </Typography>
            <Typography
             variant="body2"
             fontSize="16px" 
             height="100px"
             className="text-black text-base">
              {description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}

export default Event;
