import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Outlet } from "react-router-dom";

import './index.css';
import App from './App.jsx';
import Notfound from './Pages/Notfound.jsx';
import Home from './Pages/Home.jsx';
import Service_plan from './Pages/Service_plan.jsx'
import Contact from './Pages/Contact.jsx'
import About from './Pages/About.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "*", element: <Notfound /> }, 
  { path: "/home", element: <Home /> },
  { path: "/service_plan", element: <Service_plan /> },
  { path: "/contact", element: <Contact /> },
  { path: "/about", element: <About /> },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
