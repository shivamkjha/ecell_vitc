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



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<HomePage />} />
      <Route path="events" element={<EventsComponent />} />
      <Route path="blogs" element={<BlogsPage />} />
      <Route path="team" element={<TeamComponent />}></Route>
      <Route path="contact" element={<ContactComponent />} />
      <Route path="timeline" element={<TimelineComponent />} />
      <Route path="alumni" element={<AlumniPage />}></Route>
      <Route path="viewblogs" element={<ViewBlogsPage />} />
      <Route path="viewevents" element={<ViewEventsPage />} />
      <Route path="dashboard" element={<AdminDashboardPage />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
