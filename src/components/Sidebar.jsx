export default function Sidebar() {
    return(
        <div id="sideBar">
          <div className="nav-link">
            <a href={`/`}>Dashboard</a>
          </div>
          <div className="nav-link">
            <a href={`/quotes`}>Quotes</a>
          </div>
          <div className="nav-link">
            <a href={`/applications`}>Application</a>
          </div>
        </div>
    )
}