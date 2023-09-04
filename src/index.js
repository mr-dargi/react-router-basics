import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root, { loader as rootLoader, action as rootAction } from "./routes/root";
import ErrorPage from './error-page';
import Contact from "./routes/contact";
import './index.css';

const router = createBrowserRouter([
  {
  path: "/",
  element: <Root />,
  errorElement: <ErrorPage/>,
  loader: rootLoader,
  action: rootAction,
  children: [
    {
      path: "contacts/:contactsId",
      element: <Contact />
    },
  ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={ router } />
  </React.StrictMode>
);