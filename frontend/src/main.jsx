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
import BlogsComponent from "./components/BlogsComponent.jsx";
import HomePage from "./pages/HomePage.jsx";
import AlumniPage from "./pages/AlumniPage.jsx";
import EventsComponent from "./components/EventsComponent.jsx";
import ContactComponent from "./components/ContactComponent.jsx";
import TeamComponent from "./components/TeamComponent.jsx";
import TimelineComponent from "./components/TimelineComponent.jsx";
import ExploreBlogsComponent from "./components/ExploreBlogsComponent.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<HomePage />} />
      <Route path="events" element={<EventsComponent />} />
      <Route path="blogs" element={<ExploreBlogsComponent />} />
      <Route path="team" element={<TeamComponent />}></Route>
      <Route path="contact" element={<ContactComponent />}></Route>
      <Route path="timeline" element={<TimelineComponent />} />
      <Route path="alumni" element={<AlumniPage />}></Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
