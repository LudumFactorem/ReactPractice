import { Outlet } from "react-router-dom";
import Topbar from "./Topbar";
import Footer from "./Footer";

// The Root component.
// Every page will have a Topbar for site navigation, an Outlet to render the actual web page, and a footer for notices.
export default function Root() {
  return (
    <div>
      <div>
        {/* Topbar for navigation */}
        <Topbar />
      </div>
      <div>
        {/* Outlet to render the content of the page */}
        <Outlet />
      </div>
      <div>
        {/* Footer for things like copyright notice */}
        <Footer />
      </div>
    </div>
  );
}
