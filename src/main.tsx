import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import Home from './pages/home/Home'

import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';
import BlogPost from './pages/blog/_slug';


const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  }, {
    path: "/blog/*",
    Component: BlogPost
  }
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
