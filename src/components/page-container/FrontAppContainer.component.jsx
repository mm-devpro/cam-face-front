import React from 'react';
import {Outlet} from "react-router-dom";

const HomeContainer = () => {

  return (
    <div className="front-app-container">
      <Outlet />
    </div>

  );
};

export default HomeContainer;
