import React from 'react';
import ReactDOM from 'react-dom/client';
import {
    createBrowserRouter,
    RouterProvider,
} from 'react-router-dom';
import Root from './Root';
import ErrorPage from './error-page.jsx';
import Home from "./components/Home.jsx";
import Portfolio from "./components/Portfolio.jsx";
import Contact from "./components/Contact.jsx";
import Experience from "./components/Experience.jsx";
import './assets/css/main.css';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/home',
                element: <Home />
            },
            {
                path: '/portfolio',
                element: <Portfolio />
            },
            {
                path: '/experience',
                element: <Experience />
            },
            {
                path: '/contact',
                element: <Contact />
            }
        ]
    },

]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
