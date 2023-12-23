import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import { Outlet } from "react-router";
import CopyrightIcon from "@mui/icons-material/Copyright";
import BlogsIndex from "./components/ecellUsers/blogs/blogsIndex";
import BlogEdit from "./components/ecellUsers/blogs/BlogEdit"


function App() {
  return (
    <>
      <div className="flex flex-col min-h-screen bg-gray-100">
        <Navbar />
        <div className="flex-1 pt-16 pb-4">
        <Outlet />
        {/* <BlogsIndex /> */}
        {/* <BlogEdit /> */}
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
