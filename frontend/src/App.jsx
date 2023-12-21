import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import { Outlet } from "react-router";
import CopyrightIcon from "@mui/icons-material/Copyright";


function App() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
