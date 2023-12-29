import React, { useState, useEffect } from "react";
import axios from "axios";
import EventsComponent from "../components/EventsComponent";
import ContactComponent from "../components/ContactComponent";
import LandingComponent from "../components/LandingPage";
import TeamComponent from "../components/TeamComponent";
import BlogsComponent from "../components/BlogsComponent";
import BlogsIndexPage from "./ViewBlogs";
import CreateBlogPage from "./CreateBlogPage";
import CreateEventPage from "./CreateEventPage";

const BlogsData = [
  {
    date: "1 jan",
    picture:
      "https://play-lh.googleusercontent.com/tjzK0-TCkXB1zxkmiRr5WNGJxQy87s1RdBx10nqLbdxRIH7bPWxTkH_YiUMbYPFRfmj7=w240-h480-rw",
    heading: "Success Story of Zepto",
    author: "Shivam Jha",
    content:
      "Zepto is a grocery shopping app that delivers groceries in 10 minutes. Customers get to choose from thousands of popular items including fresh farm vegetables and fruits, groceries, dairy & more at the best prices from Zepto.",
  },
  {
    date: "12 jan",
    picture:
      "https://img.etimg.com/thumb/width-640,height-480,imgsize-5908,resizemode-75,msid-99903494/tech/technology/physicswallah-rolls-out-50-offline-centres-to-offer-scholarships-worth-rs-160-crore/pw-physicswallah.jpg",
    heading: "Physics Wallah becomes Unicorn",
    author: "Ankush Chaudhary",
    content:
      "Physics Wallah became India's 101st unicorn startup. Physics Wallah raised $100 million from the Westbridge Capital & GSV ventures, which took the company valuation to a massive $1.1 billion.",
  },
  {
    date: "10 jan",
    picture:
      "https://images.theconversation.com/files/481362/original/file-20220826-10690-nguhqg.jpg?ixlib=rb-1.1.0&rect=224%2C71%2C5766%2C3574&q=20&auto=format&w=320&fit=clip&dpr=2&usm=12&cs=strip",
    heading: "Raising Funding in 2024",
    author: "Sudhansh",
    content:
      "In today's world, raising funding requires a strategic approach. Start by refining your business plan and identifying your target investors. Utilize crowdfunding platforms, pitch competitions, and angel investor networks.",
  },
  {
    date: "11 jan",
    picture:
      "https://startupstorymedia.com/wp-content/uploads/2022/06/CASE-STUDY-ON-ZEPTO-1.jpg",
    heading: "Success Story of Zepto",
    author: "Pragati",
    content:
      "Zepto is a grocery shopping app that delivers groceries in 10 minutes. Customers get to choose from thousands of popular items including fresh farm vegetables and fruits, groceries, dairy & more at the best prices from Zepto.",
  },
  {
    date: "13 jan",
    picture:
      "https://images.theconversation.com/files/481362/original/file-20220826-10690-nguhqg.jpg?ixlib=rb-1.1.0&rect=224%2C71%2C5766%2C3574&q=20&auto=format&w=320&fit=clip&dpr=2&usm=12&cs=strip",
    heading: "Raising Funding in 2024",
    author: "Aashik",
    content:
      "In today's world, raising funding requires a strategic approach. Start by refining your business plan and identifying your target investors. Utilize crowdfunding platforms, pitch competitions, and angel investor networks.",
  },
];

const EventsData = [
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

const HomePage = () => {
  const [eventsData, setEventsData] = useState([]);
  const [blogsData, setBlogsData] = useState([]);
  const [carouselsData, setCarouselsData] = useState([]);

  useEffect(() => {
    fetchEventData();
    fetchBlogsData();
    fetchCarouselData();
  }, []);

  const fetchEventData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/v1/events"
      );
      setEventsData(response.data.data);
    } catch (error) {
      console.error("Error fetching event data:", error);
    }
  };

  const fetchBlogsData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/v1/blogs"
      );
      setBlogsData(response.data.data); 
    } catch (error) {
      console.error("Error fetching blogs data:", error);
    }
  };
  const fetchCarouselData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/v1/carousel"
      );
      setCarouselsData(response.data.data);
    } catch (error) {
      console.error("Error fetching carousel data:", error);
    }
  };
  
  
  return (
    <div>
      <div className="" style={{ backgroundColor: "#F5F5F5" }}>
        <LandingComponent />
         <BlogsIndexPage /> 
        <CreateEventPage /> 
        <EventsComponent eventsData={EventsData} />
        <BlogsComponent blogsData={BlogsData} />
        <TeamComponent />
        <ContactComponent />
      
      </div>
    </div>
  );
};

export default HomePage;



