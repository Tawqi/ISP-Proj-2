import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Notfound from './Pages/Notfound.jsx'
import Home from './Pages/Home.jsx'

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {path:"/", element:<App /> },
  {path:"*", element:<Notfound /> },
  {path:"/dashboard", element:<Home /> },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
