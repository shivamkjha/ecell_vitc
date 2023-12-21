import React from "react";
import Sample from "./Sample";
import Event from "./widgets/Event";
import Heading from "./widgets/Heading";

function Events() {
  return (
    <div id="events">
      <Heading heading={"Our Events"} />
      <div className="ml-10 sm:ml-24 flex items-center overflow-x-auto overflow-hidden rounded-l-3xl">
        
        <Event
          picture={"/images/IPLBattle.png"}
          eventName={"IPL Battle"}
          description={`Ipl is a both a religion and a festival! None wants to miss it
              out A boon to all the people bored of binge-hearing the same old
              classes and lectures A blessing to all those who have waited for
              something exciting to happen Yes IPL Auction is here E-cell is
              organizing an exciting 8 hour long IPL-auction where people can
               build their dream team`} 
        />

        <Event
          picture={"/images/StartupHunt.png"}
          eventName={"Startup Hunt"}
          description={`t's time to immerse yourself in the art of strategic trading. Dive into the chaos of stocks, where every decision echoes in the market! Will you conquer or crumble?
          Only one way to find out.`}
        />
        <Event
          picture={"/images/StockMarketSimulation.png"}
          eventName={"Stock Market Simulation"}
          description={`long with the share market, this event also incorporates modern infrastructure 
          by encouraging crypto and forex trading.📈 Trading will be done through virtual currency on a reputed platform.`}
        />
        <Event
          picture={"/images/Hackathon.png"}
          eventName={"48 Hours Hackathon"}
          description={`The way to get good ideas is to get lots of ideas and throw the bad ones away"
          E-cell welcomes you all to join this exciting 24 hours hackathon.
          You get high speed internet, great food and what not.
          Register now to get your seat secured and stand a chance to bag an internship and a cash prize of 25,000.
          Think. Code. Innovate.
          `}
        />
        <Event
          picture={"/images/IPLBattle3.0.png"}
          eventName={"IPL Battle"}
          description={`Ipl is a both a religion and a festival! None wants to miss it
              out A boon to all the people bored of binge-hearing the same old
              classes and lectures A blessing to all those who have waited for
              something exciting to happen Yes IPL Auction is here E-cell is
              organizing an exciting 8hour long IPL-auction where people can build their dream team`}
        />
      </div>
    </div>
  );
}

export default Events;
