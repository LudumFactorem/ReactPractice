import { Link } from "react-router-dom";

export default function Navbar(){
    return (
        <div>
            <h1>[Website Name]</h1>
            <Link to="/">Home</Link>
            <Link to="/csstest">CSSTest</Link>
        </div>
    );
}