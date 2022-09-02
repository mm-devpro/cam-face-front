import React from 'react';
import {Outlet} from "react-router-dom";
import NavigationBar from "../navbar/NavigationBar.component";
import Header from "../header/Header.component";

const BaseAdminContainer = () => {

  return (
    <div className="admin-container">
      <div className="nav-side">
        <NavigationBar/>
      </div>
      <div className="main-side">
        <Header/>
        <div className="main-container">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default BaseAdminContainer;
