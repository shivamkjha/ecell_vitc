import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import { Outlet } from "react-router";
import CopyrightIcon from "@mui/icons-material/Copyright";
import Test from "./components/test";

function App() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-1 pt-16 pb-4">
        <Outlet />
        {/* <Test /> */}
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
