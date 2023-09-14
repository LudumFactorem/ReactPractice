import { Link } from "react-router-dom";

// TODO
// Refactor the profiles into a component
// Refactor the home page to more easily swap out content

// Home page
export default function Home() {
  return (
    <div className="home content">
      <h2 className="page title">Meet the devs.</h2>
      <div className="side-by-side">
        <div className="column">
          <Link to="/profile/AdamTran" className="undecorate">
            <div
              style={{
                width: "25vw",
                height: "25vw",
                overflow: "hidden",
                borderRadius: "50px",
              }}
            >
              <img src="/images/AdamTran.jpg" style={{ maxWidth: "100%" }} />
            </div>
          </Link>
          <div className="description">Adam Tran</div>
        </div>
        <div className="column">
          <Link to="/profile/JosephGibson" className="undecorate">
            <div
              style={{
                width: "25vw",
                height: "25vw",
                overflow: "hidden",
                borderRadius: "50px",
              }}
            >
              <img
                src="/images/JosephGibson.jpg"
                style={{ maxWidth: "100%" }}
              />
            </div>
          </Link>
          <div className="description">Joseph Gibson</div>
        </div>
      </div>
    </div>
  );
}
