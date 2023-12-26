import React from "react";
import NavbarComponent from "./components/NavbarComponent";
import { Outlet } from "react-router";
import FooterComponent from "./components/FooterComponent";

function App() {
  return (
    <>
      <div className="flex flex-col min-h-screen bg-gray-100">
        <NavbarComponent />
        <div className="flex-1 pt-16 pb-4">
          <Outlet />
        </div>
        <FooterComponent />
      </div>
    </>
  );
}

export default App;
