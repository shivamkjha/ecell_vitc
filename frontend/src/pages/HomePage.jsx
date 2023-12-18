import React from 'react'
import Navbar from '../components/Navbar';
import About from "../components/About";
import Events from "../components/Events";
import Footer from "../components/Footer";

function HomePage() {
  return (
    <div>
    <div className='' style={{background: "linear-gradient(to bottom, rgba(180, 179, 224, 1), rgba(148, 147, 204, 1)"}}>
        <Navbar />
        <About />
        <Events />
        <Footer />
      </div>
    </div>
  );
}

export default HomePage
