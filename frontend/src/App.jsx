import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import { Outlet } from "react-router";


function App() {
  return (
    <>
      <div className="flex flex-col min-h-screen bg-gray-100">
        <Navbar />
        <div className="flex-1 pt-16 pb-4">
        <Outlet />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
