import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import { Outlet } from "react-router";
import CopyrightIcon from "@mui/icons-material/Copyright";
import Test from "./components/test";
import BlogsIndex from "./components/ecellUsers/blogs/blogsIndex";
import BlogEdit from "./components/ecellUsers/blogs/BlogEdit"


function App() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-1 pt-20 pb-4">
        <Outlet />
        {/* <Test /> */}
        {/* <BlogsIndex /> */}
        <BlogEdit />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
