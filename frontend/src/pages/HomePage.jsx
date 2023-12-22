import React from 'react'
import About from "../components/About";
import Events from "../components/Events";
import Slides from "../components/Slides"
import Contact from '../components/Contact';
import Landing from '../components/Landing';
import Team from '../components/Team';
import Blogs from '../components/Blogs';
import BlogsContainer from '../components/Blogs';

function HomePage() {
  return (
    <div>
      <div className="" style={{ backgroundColor: "#F5F5F5" }}>
        <Landing />
        <Events />
        <BlogsContainer />
        {/* <Blogs /> */}
        <Team />
        <Contact />
      </div>
    </div>
  );
}

export default HomePage
