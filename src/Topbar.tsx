import { Link } from "react-router-dom";

// Topbar will be placed at the top of each page
// Will include navigation and site title
export default function Topbar() {
  return (
    <div>
      <h1>[Website Name]</h1>
      <Link to="/">Home</Link>
      <Link to="/csstest">CSSTest</Link>
    </div>
  );
}
