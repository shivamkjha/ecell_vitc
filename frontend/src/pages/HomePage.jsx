import React from 'react'
import About from "../components/About";
import Events from "../components/Events";
import Slides from "../components/Slides"
import Contact from '../components/Contact';
import Landing from '../components/Landing';

function HomePage() {
  return (
    <div>
    <div className=' bg-white' >
        <Landing />
        <Events />
        <Contact />
      </div>
    </div>
  );
}

export default HomePage
