import { Outlet } from "react-router-dom";
import Topbar from "./Topbar";

export default function Root(){
    return (
        <div>
            <div>
                <Topbar />
            </div>
            <div>
                <Outlet />
            </div>
        </div>
    );
}