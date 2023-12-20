import React from 'react'
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

function Sample() {
  return (
    <Card sx={{ maxWidth: 345, backgroundColor: "rgba(255,255,255,255);", zIndex:"0", marginBottom:"20px"}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="/images/Screenshot 2023-12-17 at 15.01.10.png"
          alt="green iguana"
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            style={{
              textAlign: "center",
              fontWeight: "600",
              color: "",
            }}
          >
            IPL Battle
          </Typography>
          <Typography
            variant="body2"
            style={{
              backgroundColor: "rgba(255,255,255,255)",
            //   color: "white",
            }}
          >
            Ipl is a both a religion and a festival! None wants to miss it out.
            A boon to all the people bored of binge-hearing the same old classes
            and lectures. A blessing to all those who have waited for something
            exciting to happen . Yes, IPL Auction is here! E-cell is organizing
            an exciting 8-hour long IPL-auction where people can have fun and
            build their dream team.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default Sample
