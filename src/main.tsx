import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Home.tsx";
import CSSTest from "./CSSTest.tsx";
import Root from "./Root.tsx";
import Images from "./Images.tsx";

// Set up a browser router so that we don't need to re GET the whole site when navigating.
// See https://reactrouter.com/en/main for additional information
const router = createBrowserRouter([
  {
    // Root path
    path: "/",
    // This root element contains a top bar, and an outlet for rendering other pages below the top bar
    element: <Root />,
    children: [
      {
        // This states that this child is the default child to be rendered in root
        index: true,
        element: <Home />,
      },
      {
        // This states that the route [address]/csstest will render the CSSTest page
        path: "csstest",
        element: <CSSTest />,
      },
      {
        // A page for viewing images from the public images folder.
        path: "images",
        element: <Images />,
      },
    ],
  },
]);

// Create React app.
ReactDOM.createRoot(document.getElementById("root")!).render(
  // This is still a TypeScript section, so TypeScript comments still work.
  // StrictMode for development.
  <React.StrictMode>
    {/* This is a JSX comment.  We have to use these in "JSX Code" which is anything between these: <[tag]> </[tag]> */}
    {/* Render the router */}
    <RouterProvider router={router} />
  </React.StrictMode>
);
