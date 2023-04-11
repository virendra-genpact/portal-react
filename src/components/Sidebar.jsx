import { NavLink } from "react-router-dom";

export default function Sidebar() {
    return(
        <div id="sideBar">
          <div className="nav-link">
            <NavLink to="/">Dashboard</NavLink>
          </div>
          <div className="nav-link">
            <NavLink to="/quotes">Quotes</NavLink>
          </div>
          <div className="nav-link">
            <NavLink to="/applications">Applications</NavLink>
          </div>
        </div>
    )
}