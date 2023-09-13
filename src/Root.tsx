import { Outlet } from "react-router-dom";
import Topbar from "./Topbar";
import Footer from "./Footer";
import ErrorPage from "./ErrorPage";

/* 
    TODO
    -Find a way to fix the copyright notice at the bottom of the page
      -As in when a page is mostly empty, it should appear at the bottom of the screen
       but when a page is full enough to scroll, it should be found at the bottom of the page.
*/

// The Root component.
// Every page will have a Topbar for site navigation, an Outlet to render the actual web page, and a footer for notices.
export default function Root({ hasError = false }) {
  return (
    <div>
      {/* Topbar for navigation */}
      <Topbar />
      {/* Outlet to render the content of the page */}
      <div className="content">
        {hasError ? <ErrorPage /> : <Outlet />}
        {/* Footer for things like copyright notice */}
        <Footer />
      </div>
    </div>
  );
}
