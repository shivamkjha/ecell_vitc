import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  RouterProvider,
  Route,
  createRoutesFromElements,
  createBrowserRouter,
} from "react-router-dom";
import BlogsPage from "./pages/BlogsPage.jsx";
import HomePage from "./pages/HomePage.jsx";
import AlumniPage from "./pages/AlumniPage.jsx";
import EventsComponent from "./components/EventsComponent.jsx";
import ContactComponent from "./components/ContactComponent.jsx";
import TeamComponent from "./components/TeamComponent.jsx";
import TimelineComponent from "./components/TimelineComponent.jsx";
import ViewBlogsPage from "./pages/ViewBlogsPage.jsx";
import ViewEventsPage from "./pages/ViewEventsPage.jsx";
import AdminDashboardPage from "./pages/AdminDashboardPage.jsx";
import CreateBlogPage from "./pages/CreateBlogPage.jsx";
import CreateEventPage from "./pages/CreateEventPage.jsx";
import RoleAssignmentPage from "./pages/RoleAssignmentPage.jsx";
import ApproveMembersPage from "./pages/ApproveMembersPage.jsx";
import FullBlogPage from "./pages/FullBlogPage.jsx";


// Routing 
import LoginPage from "./pages/LoginPage.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="events" element={<EventsComponent />} />
      <Route path="team" element={<TeamComponent />} />
      <Route path="contact" element={<ContactComponent />} />
      <Route path="timeline" element={<TimelineComponent />} />
      <Route path="LoginPage" element={<LoginPage/>}/>

      {/* Pages  */}
      <Route path="" element={<HomePage />} />
      <Route path="blogs" element={<BlogsPage />} />
      <Route path="alumni" element={<AlumniPage />}></Route>
      <Route path="dashboard" element={<AdminDashboardPage />} />
      <Route path="viewBlogs" element={<ViewBlogsPage />} />
      <Route path="viewEvents" element={<ViewEventsPage />} />
      <Route path="createEvents" element={<CreateEventPage />} />
      <Route path="createBlogs" element={<CreateBlogPage />} />
      <Route path="roleAssignment" element={<RoleAssignmentPage />} />
      <Route path="approveMembers" element={<ApproveMembersPage />} />
      <Route path="fullBlog" element={<FullBlogPage />} />
    </Route>
  )
);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
