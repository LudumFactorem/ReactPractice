import { Link } from "react-router-dom";

// Topbar will be placed at the top of each page
// Will include navigation and site title
export default function Topbar() {
  return (
    <nav className="topbar">
      <Link to="/" className="navigation title">
        [Website Name]
      </Link>
      <Link to="/images" className="navigation page">
        Images
      </Link>
      <Link to="/primes" className="navigation page">
        Primes
      </Link>
      <Link to="/csstest" className="navigation page">
        <div>CSSTest</div>
      </Link>
      <Link to="/cssdebug" className="navigation page">
        <div>CSSDebug</div>
      </Link>
      <Link to="/componenttest" className="navigation page">
        <div>Component Test</div>
      </Link>
      <Link to="/deliberate404" className="navigation page">
        <div>404</div>
      </Link>
      <Link to="/weather" className="navigation page">
        <div>Weather</div>
      </Link>
    </nav>
  );
}
