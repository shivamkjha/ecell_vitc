import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, Route, createRoutesFromElements ,createBrowserRouter} from 'react-router-dom'
import Blogs from './components/Blogs.jsx'
import HomePage from './pages/HomePage.jsx'
import Events from './components/Events.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<HomePage />} />
      <Route path="blogs" element={<Blogs />} />
    </Route> 
  )
);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
