import React from 'react';
import {NavLink} from "react-router-dom"
import LogButtonComponent from "../button/LogButton.component";

const Header = () => {
  return (
    <div className="header">
      Ceci est le header
      <LogButtonComponent />
    </div>
  );
};

export default Header;
