import React, { useState, useEffect } from "react";
import axios from "axios";
import Events from "../components/Events";
import Contact from '../components/Contact';
import Landing from '../components/Landing';
import Team from '../components/Team';
import Blogs from '../components/Blogs';

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
        <Landing />
        <Events />
        <Blogs />
        <Team />
        <Contact />
      </div>
    </div>
  );
};

export default HomePage;
