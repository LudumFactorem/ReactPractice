import { Link } from "react-router-dom";

// Topbar will be placed at the top of each page
// Will include navigation and site title
export default function Topbar() {
  return (
    <nav className="topbar">
      <Link to="/" className="navigation title">
        [Website Name]
      </Link>
      <Link to="/csstest" className="navigation page">
        CSSTest
      </Link>
    </nav>
  );
}
