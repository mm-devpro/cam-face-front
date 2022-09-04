import React, {useState} from "react";
import {NavLink} from "react-router-dom"

import "./NavigationBar.styles.scss"

const NavigationBar = () => {
  const [collapse, setCollapse] = useState(false)

  return (
    <div className={`nav ${!collapse ? "" : "collapse"}`}>
      <div className="nav-button" onClick={() => setCollapse(!collapse)}>close</div>
      <nav className="nav-bar">
        <NavLink className="nav-link" to="/admin/workers">Collaborateurs</NavLink>
        <NavLink className="nav-link" to="/admin/streams">Cameras</NavLink>
        <NavLink className="nav-link" to="/admin/lockers">Lockers</NavLink>
        <NavLink className="nav-link" to="/admin/logs">Logs</NavLink>
        <NavLink className="nav-link" to="/admin/settings">Settings</NavLink>
      </nav>
    </div>
  )
}

export default NavigationBar
