import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@mui/material";

function Slides(props) {
  var items = [
    {
      name: "Random Name #1",
      img: "/images/Screenshot 2023-12-20 at 13.22.42.png",
    },
    {
      name: "Random Name #2",
      img: "/images/Screenshot 2023-12-20 at 13.23.21.png",
    },
  ];

  return (
    <Carousel className="mt-12 w-full">
      {items.map((item, i) => (
        <Item className="" key={i} item={item} />
      ))}
    </Carousel>
  );
}

function Item(props) {
  return (
    <Paper
      className="w-80 h-96 sm:w-[550px] sm:h-[650px] ml-0 sm:ml-16"
      style={{
        borderRadius: "23px",
        boxShadow: "10px 10px 10px rgba(0, 0, 0, 0.5)",
        overflow: "hidden",
      }}
    >
      <img className="w-full h-full" src={props.item.img} alt="" />
    </Paper>
  );
}

export default Slides